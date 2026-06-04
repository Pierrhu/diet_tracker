// perishables.js — Gérer les ingrédients frais : dire combien on a acheté,
// scaler les recettes qui les utilisent, et programmer les plats périssables tôt.

import { getById } from '../data/recipes.js';
import { classifyIngredient, snapQty } from './optimizer.js';

// Catégories de péremption (jours au frigo) + ordre de priorité de consommation.
const PERISHABLE_RULES = [
  { key: 'poisson', rx: /thon frais|saumon|colin|merlu|cabillaud|poisson|crevette|fruits de mer/i, days: 2, label: 'Poisson & fruits de mer', priority: 1 },
  { key: 'viande',  rx: /poulet|dinde|boeuf|bœuf|steak|porc|veau|merguez|haché/i, days: 3, label: 'Viande', priority: 2 },
];

// thon AU NATUREL (conserve) n'est pas périssable — on l'exclut.
function isCanned(name) { return /au naturel|conserve|boîte|boite/i.test(name); }

export function perishableClass(name) {
  if (isCanned(name)) return null;
  for (const r of PERISHABLE_RULES) {
    if (r.rx.test(name)) return r;
  }
  return null;
}

// Agrège, sur la semaine, les périssables nécessaires au plan + les recettes/jours qui les utilisent.
// Renvoie [{ key, label, days, priority, name, plannedQty, unit, usedBy:[{date,slot,idx,recipeId,recipeName}] }]
export function collectPerishables(entries, dates) {
  const map = {}; // canonName → aggregate
  dates.forEach(date => {
    const e = entries[date];
    ['starter','lunch','dinner','sides','sweet'].forEach(slot => {
      (e.meals[slot] || []).forEach((item, idx) => {
        const r = getById(item.id);
        if (!r) return;
        if ((r.tags || []).includes('cantine')) return;
        const s = item.servings || 1;
        const ov = item.overrides;
        r.ingredients.forEach((ing, ingIdx) => {
          const pc = perishableClass(ing.name);
          if (!pc) return;
          const qty = (ov && ov[ingIdx] != null) ? ov[ingIdx] : ing.qty * s;
          const key = ing.name;
          if (!map[key]) map[key] = {
            cls: pc.key, label: pc.label, days: pc.days, priority: pc.priority,
            name: ing.name, plannedQty: 0, unit: ing.unit, usedBy: [],
          };
          map[key].plannedQty += qty;
          map[key].usedBy.push({ date, slot, idx, ingIdx, recipeId: item.id, recipeName: r.name });
        });
      });
    });
  });
  // tri : poisson d'abord, puis viande, puis frais
  return Object.values(map).sort((a, b) => a.priority - b.priority || b.plannedQty - a.plannedQty);
}

// Applique : pour chaque périssable, on scale les portions des recettes qui l'utilisent
// pour consommer EXACTEMENT boughtQty, et on reprogramme ces plats tôt dans la semaine.
// bought = { ingredientName: grams }
export function applyPerishables(entries, dates, perishables, bought, targets) {
  const affectedDays = new Set();
  perishables.forEach(p => {
    const target = bought[p.name];
    if (target == null || p.plannedQty <= 0) return;
    const factor = target / p.plannedQty;
    if (!isFinite(factor) || factor <= 0) return;

    // Scale chaque utilisation de cet ingrédient (via overrides en grammes absolus).
    p.usedBy.forEach(u => {
      const item = entries[u.date].meals[u.slot][u.idx];
      if (!item) return;
      const r = getById(item.id);
      const ing = r.ingredients[u.ingIdx];
      // base actuelle (override ou qty×servings)
      const s = item.servings || 1;
      const cur = (item.overrides && item.overrides[u.ingIdx] != null) ? item.overrides[u.ingIdx] : ing.qty * s;
      const countable = /pi[èe]ce|unit|tranche/i.test(ing.unit);
      const next = snapQty(cur * factor, countable);
      if (!item.overrides) {
        // créer des overrides pour tous les ingrédients (grammes absolus)
        item.overrides = {};
        r.ingredients.forEach((ig, i) => item.overrides[i] = snapQty(ig.qty * s, /pi[èe]ce|unit|tranche/i.test(ig.unit)));
        item.servings = 1;
      }
      item.overrides[u.ingIdx] = Math.max(0, next);
      affectedDays.add(u.date);
    });
  });

  // Rééquilibrage : sur chaque jour modifié, on ajuste les portions du DESSERT/encas
  // pour recaler les calories du jour sur la cible (le scaling viande/poisson a déplacé le total).
  if (targets && targets.kcal) {
    affectedDays.forEach(date => rebalanceDessert(entries[date], targets));
  }

  return entries;
}

// Macros d'un plat (override-aware) — local pour éviter les dépendances circulaires.
function itemKcal(item) {
  const r = getById(item.id);
  if (!r) return 0;
  const ov = item.overrides; const s = item.servings || 1;
  if (!ov) return r.macros.kcal * s;
  return r.ingredients.reduce((acc, ing, i) => {
    const q = ing.qty || 1; const qty = ov[i] != null ? ov[i] : ing.qty * s;
    return acc + (ing.kcal / q) * qty;
  }, 0);
}
function dayKcal(e) {
  return ['starter','lunch','dinner','sides','sweet']
    .flatMap(s => e.meals[s] || []).reduce((a, it) => a + itemKcal(it), 0);
}

// Ajuste les portions du dessert pour combler/réduire l'écart calorique du jour.
function rebalanceDessert(e, targets) {
  const sweets = e.meals.sweet || [];
  if (!sweets.length) return;
  const current = dayKcal(e);
  const diff = targets.kcal - current; // >0 = il manque des calories, <0 = trop
  if (Math.abs(diff) < 60) return; // déjà bon

  // kcal/portion du dessert (somme des desserts du jour)
  const sweetKcalPerServing = sweets.reduce((a, it) => {
    const r = getById(it.id); return a + (r ? r.macros.kcal : 0);
  }, 0);
  if (sweetKcalPerServing <= 0) return;

  // facteur à appliquer aux desserts pour combler diff
  const sweetCurrent = sweets.reduce((a, it) => a + itemKcal(it), 0);
  const sweetTarget = Math.max(0, sweetCurrent + diff);
  const factor = sweetTarget / Math.max(1, sweetCurrent);
  // bornes raisonnables : entre 0.3× et 3× la portion d'origine
  const f = Math.max(0.3, Math.min(3, factor));

  sweets.forEach(it => {
    const r = getById(it.id);
    const s = it.servings || 1;
    if (!it.overrides) {
      it.overrides = {}; r.ingredients.forEach((ig, i) => it.overrides[i] = snapQty(ig.qty * s, /pi[èe]ce|unit|tranche/i.test(ig.unit)));
      it.servings = 1;
    }
    r.ingredients.forEach((ig, k) => { if (it.overrides[k] != null) it.overrides[k] = Math.max(0, snapQty(it.overrides[k] * f, /pi[èe]ce|unit|tranche/i.test(ig.unit))); });
  });
}

// Donne l'ordre de consommation recommandé (quel plat cuisiner/manger en premier).
export function consumeOrder(perishables) {
  // map jour-index pour conseiller : poisson J1-2, viande J1-3, frais début de semaine
  return perishables.map(p => ({
    name: p.name, label: p.label, days: p.days,
    advice: p.cls === 'poisson' ? 'À cuisiner J1-J2' : p.cls === 'viande' ? 'À cuisiner J1-J3' : 'Début de semaine',
  }));
}
