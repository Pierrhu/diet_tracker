// weekgen.js — Générateur de menu de semaine automatique pour le batch cooking.
//
// Principe :
//  1. On choisit 4-5 plats qui PARTAGENT des ingrédients (batch facile), au hasard
//     (différent à chaque génération) parmi dîners + déjeuners.
//  2. On choisit 2-3 desserts batch.
//  3. Chaque plat est répété 1-2× dans la semaine, réparti sur les créneaux libres
//     (midis non-cantine + dîners). Les midis cantine reçoivent le menu C01.
//  4. On optimise les quantités sur la semaine (protéines prioritaires).
//  5. Les quantités d'achat sont arrondies aux formats du commerce.

import { getDinners, getLunches, getSweets, getStarters, getById, RECIPES } from '../data/recipes.js';
import { classifyIngredient, optimizeDay, computeDayFromItems } from './optimizer.js';

// ── Similarité entre recettes : nb d'ingrédients "principaux" partagés ──
function mainIngredients(r) {
  return new Set(
    r.ingredients
      .filter(i => classifyIngredient(i.name) !== 'fixed')
      .map(i => canonicalKey(i.name))
  );
}
function canonicalKey(name) {
  const n = name.toLowerCase();
  if (/poulet/.test(n)) return 'poulet';
  if (/thon/.test(n)) return 'thon';
  if (/boeuf|bœuf|steak/.test(n)) return 'boeuf';
  if (/dinde/.test(n)) return 'dinde';
  if (/saumon|colin|merlu|cabillaud|poisson/.test(n)) return 'poisson';
  if (/crevette/.test(n)) return 'crevette';
  if (/\briz\b/.test(n)) return 'riz';
  if (/pâte|pate/.test(n)) return 'pates';
  if (/quinoa/.test(n)) return 'quinoa';
  if (/patate douce/.test(n)) return 'patate douce';
  if (/lentille/.test(n)) return 'lentille';
  if (/pois chiche/.test(n)) return 'pois chiche';
  return n;
}
function shareScore(a, b) {
  const sa = mainIngredients(a), sb = mainIngredients(b);
  let n = 0; sa.forEach(x => { if (sb.has(x)) n++; });
  return n;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Choisit nbMains plats qui partagent un max d'ingrédients, en partant d'une graine aléatoire.
function pickCohesiveMains(pool, nbMains) {
  const start = pool[Math.floor(Math.random() * pool.length)];
  const chosen = [start];
  const rest = pool.filter(r => r.id !== start.id);
  while (chosen.length < nbMains && rest.length) {
    // score chaque candidat = somme des partages avec les plats déjà choisis (+ un peu d'aléa)
    let best = null, bestScore = -1;
    shuffle(rest).forEach(cand => {
      const sc = chosen.reduce((s, c) => s + shareScore(c, cand), 0) + Math.random() * 0.9;
      if (sc > bestScore) { bestScore = sc; best = cand; }
    });
    chosen.push(best);
    rest.splice(rest.indexOf(best), 1);
  }
  return chosen;
}

// ── Génère le plan de la semaine ──
// opts = { cantineLunches: number (0-5), targets: {kcal,protein,carbs,fat} }
// Renvoie { dates: {date: {meals}}, mains, sweets }
import { getWeekDates, getNextWeekDates } from '../data/log.js';

export function generateWeek({ cantineDays = [], nextWeek = true, targets, proteins = null } = {}) {
  targets = targets || { kcal: 2200, protein: 180, carbs: 220, fat: 65 };
  const dates = nextWeek ? getNextWeekDates() : getWeekDates();

  const dinners = getDinners();
  const lunches = getLunches().filter(r => r.id !== 'C01'); // la cantine est gérée à part
  const sweets  = getSweets();

  const hasMeat   = r => r.ingredients.some(i => classifyIngredient(i.name) === 'protein');
  const hasStarch = r => r.ingredients.some(i => ['carb','both'].includes(classifyIngredient(i.name)));

  // DÎNERS : vrais repas consistants (viande/poisson + féculent), jamais une salade/soupe légère.
  // On pioche uniquement dans le pool des dîners (D01–D25), tous consistants.
  const isFish = r => /crevette|saumon|poisson|colin|merlu|cabillaud|fruits de mer/i.test(JSON.stringify(r.ingredients));
  // Classe de protéine d'un plat (pour le filtre choisi par l'utilisateur).
  const proteinOf = r => {
    const txt = JSON.stringify(r.ingredients).toLowerCase();
    if (/crevette/.test(txt)) return 'crevettes';
    if (/saumon/.test(txt)) return 'saumon';
    if (/colin|merlu|cabillaud|poisson blanc/.test(txt)) return 'poisson';
    if (/steak|boeuf|bœuf/.test(txt)) return 'boeuf';
    if (/dinde/.test(txt)) return 'dinde';
    if (/poulet/.test(txt)) return 'poulet';
    if (/tofu/.test(txt)) return 'tofu';
    return 'autre';
  };
  // Pool dîners : viande/poisson + féculent. On limite le poisson (cher) à 1 plat max par semaine.
  let allDinnerMains = dinners.filter(r => hasMeat(r) && hasStarch(r));
  // Filtre protéines choisi par l'utilisateur (si fourni et non vide)
  if (proteins && proteins.length) {
    const filtered = allDinnerMains.filter(r => proteins.includes(proteinOf(r)));
    if (filtered.length) allDinnerMains = filtered; // sinon on garde tout (évite une semaine vide)
  }
  const fishMains = shuffle(allDinnerMains.filter(isFish));
  const meatMains = shuffle(allDinnerMains.filter(r => !isFish(r)));
  const nbDinnerMains = 3 + Math.round(Math.random()); // 3 ou 4 plats du soir, répétés
  // au plus 1 poisson, le reste en viande (poulet/bœuf/dinde) — sauf si l'utilisateur n'a choisi que du poisson
  const onlyFish = meatMains.length === 0;
  const dinnerMains = onlyFish
    ? pickCohesiveMains(fishMains, nbDinnerMains)
    : pickCohesiveMains(meatMains, nbDinnerMains - (fishMains.length ? 1 : 0))
        .concat(fishMains.length ? [fishMains[0]] : []);
  // si pas assez, compléter
  const fillPool = meatMains.length ? meatMains : fishMains;
  while (dinnerMains.length < nbDinnerMains && fillPool.length) {
    const extra = fillPool.find(m => !dinnerMains.includes(m));
    if (!extra) break; dinnerMains.push(extra);
  }

  // DÉJEUNERS (midis sans cantine) : pool plus large (salades, bowls, wraps…), avec viande.
  // On applique le filtre protéines : on retire seulement celles que l'utilisateur a décochées
  // (thon, œufs… ne sont pas dans les chips → toujours gardés).
  const CHIP_IDS = ['poulet','boeuf','dinde','crevettes','saumon','tofu'];
  let lunchPool = shuffle(lunches.filter(hasMeat));
  if (proteins && proteins.length) {
    const filtered = lunchPool.filter(r => {
      const pr = proteinOf(r);
      return !CHIP_IDS.includes(pr) || proteins.includes(pr);
    });
    if (filtered.length) lunchPool = filtered;
  }
  const nbLunchMains = 3 + Math.round(Math.random());
  // on respecte le filtre même si le pool est petit (les plats seront répétés)
  const lunchSource = lunchPool.length ? lunchPool : lunches;
  const lunchMains = pickCohesiveMains(lunchSource, Math.min(nbLunchMains, lunchSource.length) || 1);

  // pour la cohérence des courses, on expose l'ensemble des plats choisis
  const mains = [...dinnerMains, ...lunchMains];

  // Desserts répétés sur la semaine : on privilégie les ASSEMBLAGES SIMPLES rapides
  // (fromage blanc, skyr, overnight oats) plutôt que les longs (energy balls, cookies).
  const nbSweets = 2 + Math.round(Math.random()); // 2 ou 3
  // priorité : encas rapides ≤6 min, puis le reste
  const quickSweets = shuffle(sweets.filter(s => (s.prepTime + s.cookTime) <= 6));
  const otherSweets = shuffle(sweets.filter(s => (s.prepTime + s.cookTime) > 6));
  const chosenSweets = quickSweets.concat(otherSweets).slice(0, nbSweets);

  // ── Répartition sur la semaine ──
  // cantineDays : tableau d'index de jour (0=Lun … 6=Dim) où le midi est à la cantine.
  const slotsToFill = [];
  dates.forEach((date, i) => {
    slotsToFill.push({ date, slot: 'dinner' });
    if (cantineDays.includes(i)) {
      slotsToFill.push({ date, slot: 'lunch', cantine: true });
    } else {
      slotsToFill.push({ date, slot: 'lunch' });
    }
  });

  // Deux files séparées : plats du soir (consistants) et plats du midi.
  let dinnerQueue = []; dinnerMains.forEach(m => { dinnerQueue.push(m); dinnerQueue.push(m); });
  let lunchQueue  = []; lunchMains.forEach(m  => { lunchQueue.push(m);  lunchQueue.push(m);  });
  dinnerQueue = shuffle(dinnerQueue);
  lunchQueue  = shuffle(lunchQueue);

  // construit l'objet entries
  const entries = {};
  dates.forEach(d => entries[d] = { date: d, meals: { starter: [], lunch: [], dinner: [], sides: [], sweet: [] } });

  let di = 0, li = 0;
  const nextFrom = (queue, getI, setI, avoidId) => {
    let i = getI();
    for (let k = 0; k < queue.length; k++) {
      const cand = queue[(i + k) % queue.length];
      if (cand.id !== avoidId) { setI(i + k + 1); return cand; }
    }
    const m = queue[i % queue.length]; setI(i + 1); return m;
  };
  slotsToFill.forEach(s => {
    if (s.cantine) {
      entries[s.date].meals.lunch.push({ id: 'C01', servings: 1 });
      return;
    }
    if (s.slot === 'dinner') {
      const avoid = entries[s.date].meals.lunch[0]?.id;
      const meal = nextFrom(dinnerQueue, () => di, v => di = v, avoid);
      entries[s.date].meals.dinner.push({ id: meal.id, servings: 1 });
    } else {
      const avoid = entries[s.date].meals.dinner[0]?.id;
      const meal = nextFrom(lunchQueue, () => li, v => li = v, avoid);
      entries[s.date].meals.lunch.push({ id: meal.id, servings: 1 });
    }
  });

  // ── Programmer les périssables tôt : poisson J1-J2, viande J1-J3 ──
  // On réordonne les DÎNERS selon la "fraîcheur" requise (le poisson d'abord).
  const freshnessRank = (item) => {
    const r = getById(item.id);
    if (!r) return 9;
    const txt = (r.name + ' ' + r.ingredients.map(i => i.name).join(' ')).toLowerCase();
    if (/saumon|colin|merlu|cabillaud|crevette|poisson|fruits de mer/.test(txt)) return 0; // poisson
    if (/poulet|dinde|boeuf|bœuf|steak|porc|veau|merguez|haché/.test(txt)) return 1;        // viande fraîche
    return 2;                                                                                // reste
  };
  const dinnerItems = dates.map(d => entries[d].meals.dinner[0]).filter(Boolean);
  // tri stable par fraîcheur (poisson → viande → reste), en gardant l'ordre relatif sinon
  const ordered = dinnerItems
    .map((it, i) => ({ it, i }))
    .sort((a, b) => freshnessRank(a.it) - freshnessRank(b.it) || a.i - b.i)
    .map(x => x.it);
  dates.forEach((d, i) => { if (entries[d].meals.dinner.length) entries[d].meals.dinner[0] = ordered[i]; });

  // desserts batch : on en met 2 max, répartis dans la semaine
  // Desserts batch : on les RÉUTILISE sur plusieurs jours (ils sont batch-cookés).
  // Chaque dessert choisi est placé sur ~2-3 jours répartis dans la semaine.
  chosenSweets.forEach((sw, idx) => {
    // jours de départ décalés selon le dessert, puis tous les 2 jours
    for (let day = idx; day < 7; day += chosenSweets.length) {
      entries[dates[day]].meals.sweet.push({ id: sw.id, servings: 1 });
    }
  });

  // Compléments caloriques : entrées salées + ASSEMBLAGES SIMPLES (fromage blanc/whey, tartines).
  // On varie d'un jour à l'autre, on ne répète pas un dessert batch.
  const FILLER_STARTERS = shuffle(getStarters().sort((a, b) => b.macros.kcal - a.macros.kcal).slice(0, 6));
  // encas d'assemblage = tags 'encas' (SW20+) : fromage blanc+whey, tartines PB/miel, shakes…
  const FILLER_SNACKS = shuffle(getSweets().filter(s => (s.tags || []).includes('encas')));

  // Jeûne intermittent : le dîner doit concentrer ~62% des calories de la journée.
  // On optimise donc le DÎNER avec une grosse cible, et le RESTE (entrée/midi/accomp./dessert)
  // avec la cible restante.
  const DINNER_SHARE = 0.62;
  function splitTargets(part) {
    return {
      kcal: Math.round(targets.kcal * part),
      protein: Math.round(targets.protein * part),
      carbs: Math.round(targets.carbs * part),
      fat: Math.round(targets.fat * part),
    };
  }

  function optimizeGroup(e, slots, grpTargets, maxScale = 3) {
    const flat = [];
    slots.forEach(slot =>
      (e.meals[slot] || []).forEach((it, idx) => flat.push({ slot, idx, item: it })));
    if (!flat.length) return;
    const optimized = optimizeDay(flat.map(f => f.item), grpTargets, maxScale);
    flat.forEach((f, i) => {
      const o = optimized[i];
      if (o.overrides) { e.meals[f.slot][f.idx].overrides = o.overrides; e.meals[f.slot][f.idx].servings = 1; }
      else { e.meals[f.slot][f.idx].servings = o.servings || 1; }
    });
  }

  function applyOptimized(e) {
    const hasDinner = (e.meals.dinner || []).length > 0;
    if (hasDinner) {
      optimizeGroup(e, ['dinner'], splitTargets(DINNER_SHARE), 5);
      optimizeGroup(e, ['starter','lunch','sides','sweet'], splitTargets(1 - DINNER_SHARE));
    } else {
      // pas de dîner ce jour-là (rare) → on répartit normalement
      optimizeGroup(e, ['starter','lunch','dinner','sides','sweet'], targets);
    }
  }

  // ── Optimisation + complément automatique, jour par jour ──
  let starterRot = 0, snackRot = 0;
  dates.forEach(d => {
    const e = entries[d];
    if (!e.meals.starter) e.meals.starter = [];
    if (!['lunch','dinner','sides','sweet'].some(s => (e.meals[s]||[]).length)) return;
    applyOptimized(e);

    let guard = 0;
    while (guard++ < 4) {
      const tot = computeDayFromItems(
        ['starter','lunch','dinner','sides','sweet'].flatMap(s => e.meals[s] || [])
      );
      const deficit = targets.kcal - tot.kcal;
      if (deficit < 200) break;
      const present = new Set(['starter','lunch','dinner','sides','sweet'].flatMap(s => (e.meals[s]||[]).map(i => i.id)));
      let added = null;
      // 1) une entrée salée si pas encore d'entrée ce jour-là
      if (!(e.meals.starter || []).length && FILLER_STARTERS.length) {
        for (let k = 0; k < FILLER_STARTERS.length; k++) {
          const cand = FILLER_STARTERS[(starterRot + k) % FILLER_STARTERS.length];
          if (!present.has(cand.id)) { added = cand; starterRot += k + 1; break; }
        }
        if (added) e.meals.starter.push({ id: added.id, servings: 1 });
      }
      // 2) sinon un encas d'assemblage simple, en rotation (fromage blanc/whey, tartines…)
      if (!added && FILLER_SNACKS.length) {
        for (let k = 0; k < FILLER_SNACKS.length; k++) {
          const cand = FILLER_SNACKS[(snackRot + k) % FILLER_SNACKS.length];
          if (!present.has(cand.id)) { added = cand; snackRot += k + 1; break; }
        }
        if (added) e.meals.sweet.push({ id: added.id, servings: 1 });
      }
      if (!added) break;
      applyOptimized(e);
    }
  });

  return { dates, entries, mains, sweets: chosenSweets, cantineDays };
}
