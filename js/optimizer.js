// optimizer.js — Ajuste les quantités d'ingrédients leviers pour caler les macros.
// Priorité : CALORIES + PROTÉINES, puis glucides/lipides suivent.
// Leviers : féculents (glucides) + sources de protéines. Le reste reste fixe.

import { getById } from '../data/recipes.js';

// Leviers PROTÉINES : viandes & poissons principaux (pas les laitages/œufs/sauces).
const PROT_WORDS = ['poulet','boeuf','bœuf','steak','dinde','porc','veau','thon','saumon','colin',
  'merlu','cabillaud','crevette','merguez','poisson'];
// Leviers GLUCIDES : féculents principaux uniquement (pas miel/banane/sucre).
const CARB_WORDS = ['riz','pâte','pate','quinoa','semoule','boulghour','boulgour','nouille',
  'patate douce','pomme de terre','orzo','couscous','tortilla','pain complet'];
// Légumineuses = protéine + glucide à la fois.
const BOTH_WORDS = ['lentille','pois chiche','haricot rouge','haricot blanc'];

const norm = s => s.toLowerCase();

export function classifyIngredient(name) {
  const n = norm(name);
  if (BOTH_WORDS.some(w => n.includes(w))) return 'both';
  const isProt = PROT_WORDS.some(w => n.includes(w));
  if (isProt) return 'protein';
  const isCarb = CARB_WORDS.some(w => n.includes(w));
  if (isCarb) return 'carb';
  return 'fixed';
}

// Arrondit une quantité à un palier pratique pour le quotidien.
export function snapQty(grams, countable) {
  if (countable) return Math.max(1, Math.round(grams));
  if (grams >= 200) return Math.round(grams / 25) * 25;  // gros : pas de 25g
  if (grams >= 60)  return Math.round(grams / 10) * 10;  // moyen : pas de 10g
  return Math.round(grams / 5) * 5;                       // petit : pas de 5g
}

// Les ingrédients "comptables" (œufs, pièces) ne doivent pas exploser
function isCountable(unit) {
  return unit && /pi[èe]ce|unit|tranche/i.test(unit);
}

function perGram(ing) {
  const q = ing.qty || 1;
  return { kcal: ing.kcal/q, protein: ing.protein/q, carbs: ing.carbs/q, fat: ing.fat/q };
}

export function computeMealMacros(item) {
  const r = getById(item.id);
  if (!r) return { kcal:0, protein:0, carbs:0, fat:0 };
  const ov = item.overrides || {};
  const s = item.servings || 1;
  return r.ingredients.reduce((acc, ing, idx) => {
    const pg = perGram(ing);
    const qty = (ov[idx] != null ? ov[idx] : ing.qty * s);
    acc.kcal+=pg.kcal*qty; acc.protein+=pg.protein*qty; acc.carbs+=pg.carbs*qty; acc.fat+=pg.fat*qty;
    return acc;
  }, { kcal:0, protein:0, carbs:0, fat:0 });
}

export function computeDayFromItems(items) {
  return items.reduce((acc, it) => {
    const m = computeMealMacros(it);
    acc.kcal+=m.kcal; acc.protein+=m.protein; acc.carbs+=m.carbs; acc.fat+=m.fat;
    return acc;
  }, { kcal:0, protein:0, carbs:0, fat:0 });
}

export function optimizeDay(items, targets, maxScale = 3) {
  const levers = [];
  const work = items.map(it => {
    const r = getById(it.id);
    const s = it.servings || 1;
    const ov = {};
    const isFixedRecipe = r && (r.tags || []).includes('cantine');
    if (r) {
      r.ingredients.forEach((ing, idx) => {
        ov[idx] = ing.qty * s;                 // grammes absolus de départ
        const cls = classifyIngredient(ing.name);
        // On n'ajoute des leviers que pour les recettes ajustables (pas la cantine)
        if (cls !== 'fixed' && !isFixedRecipe) {
          const countable = isCountable(ing.unit);
          levers.push({
            ref: ov, idx, type: cls,
            // bornes : comptables limités (ex. œufs 1–6×base), sinon 0.3×–3.5×
            min: countable ? ing.qty : Math.max(20, ing.qty * 0.5),
            max: countable ? ing.qty * 3 : ing.qty * maxScale,
            countable,
            base: ing.qty,
          });
        }
      });
    }
    // recette figée : on garde ses portions d'origine (pas d'overrides imposés)
    return isFixedRecipe
      ? { id: it.id, servings: s }
      : { id: it.id, servings: 1, overrides: ov };
  });

  if (!levers.length) return work;

  // Normalisation : on raisonne en % d'écart, kcal & protéines pèsent le plus.
  const W = { kcal: 4, protein: 9, carbs: 1.5, fat: 0.7 };
  const T = {
    kcal: targets.kcal || 2000, protein: targets.protein || 150,
    carbs: targets.carbs || 200, fat: targets.fat || 60,
  };

  function totals() {
    const acc = {kcal:0,protein:0,carbs:0,fat:0};
    work.forEach(it => {
      const r = getById(it.id);
      const s = it.servings || 1;
      r.ingredients.forEach((ing, idx) => {
        const pg = perGram(ing);
        const q = it.overrides ? it.overrides[idx] : ing.qty * s; // figé = qty × portions
        acc.kcal+=pg.kcal*q; acc.protein+=pg.protein*q; acc.carbs+=pg.carbs*q; acc.fat+=pg.fat*q;
      });
    });
    return acc;
  }
  function cost(t) {
    // Écarts relatifs. Pour les protéines : sous la cible = lourdement pénalisé,
    // au-dessus = légèrement (avoir plus de protéines n'est pas grave).
    const dK = (t.kcal - T.kcal) / T.kcal;
    const dP = (t.protein - T.protein) / T.protein;
    const dC = (t.carbs - T.carbs) / T.carbs;
    const dF = (t.fat - T.fat) / T.fat;
    const protPen = dP < 0 ? W.protein * dP * dP : W.protein * 0.15 * dP * dP;
    return W.kcal * dK * dK + protPen + W.carbs * dC * dC + W.fat * dF * dF;
  }

  // Optimisation : on répète des passes de descente de coordonnées.
  // À chaque passe et pour chaque levier, on cherche LE meilleur réglage
  // sur une grille de pas, en gardant toute amélioration. On boucle jusqu'à stabilité.
  function curCost() { return cost(totals()); }

  let lastCost = curCost();
  for (let pass = 0; pass < 60; pass++) {
    for (const lev of levers) {
      const start = lev.ref[lev.idx];
      let bestVal = start;
      let bestCost = curCost();
      // balaye toute la plage du levier par incréments fins
      const inc = lev.countable ? Math.max(1, Math.round(lev.base / 3)) : 5;
      for (let v = lev.min; v <= lev.max + 0.001; v += inc) {
        const val = lev.countable ? Math.round(v) : v;
        lev.ref[lev.idx] = val;
        const cc = curCost();
        if (cc < bestCost - 1e-9) { bestCost = cc; bestVal = val; }
      }
      lev.ref[lev.idx] = bestVal; // applique le meilleur trouvé pour ce levier
    }
    const nowCost = curCost();
    if (lastCost - nowCost < 1e-6) break; // plus d'amélioration
    lastCost = nowCost;
  }

  // Arrondir à des quantités pratiques. On ne touche qu'aux leviers (les autres gardent leur valeur d'origine).
  const leverKeys = new Set(levers.map(l => l.ref === undefined ? null : l));
  work.forEach((it, wi) => {
    if (!it.overrides) return;
    const r = getById(it.id);
    Object.keys(it.overrides).forEach(k => {
      const idx = +k;
      const ing = r.ingredients[idx];
      const cls = classifyIngredient(ing.name);
      const countable = isCountable(ing.unit);
      if (cls !== "fixed") it.overrides[k] = snapQty(it.overrides[k], countable);
      else it.overrides[k] = Math.round(it.overrides[k]);
    });
  });
  return work;
}
