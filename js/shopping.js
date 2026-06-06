// shopping.js — Liste de courses
// Source : soit une plage de dates choisie depuis la vue Semaine (diet_shop_range),
// soit les N derniers jours. Les quantités sont multipliées par les portions (servings).

import { getLog, getEntry, saveEntry } from '../data/log.js';
import { getById }          from '../data/recipes.js';
import { el }               from './utils.js';
import { collectPerishables, applyPerishables } from './perishables.js';
import { USER } from '../data/user.js';

// Petit anneau de progression « articles cochés » pour le héro de la liste.
function shopRing(done, total) {
  const size = 84, sw = 8, r = (size - sw) / 2, c = 2 * Math.PI * r;
  const ratio = total ? Math.min(done / total, 1) : 0;
  const dash = (ratio * c).toFixed(1);
  const cx = size / 2;
  const complete = total && done >= total;
  return `
    <div class="shop-ring-wrap" style="width:${size}px;height:${size}px">
      <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
        <defs>
          <linearGradient id="shopRingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#A9C2B2"/>
            <stop offset="100%" stop-color="#6E8B76"/>
          </linearGradient>
        </defs>
        <circle cx="${cx}" cy="${cx}" r="${r}" fill="none" stroke="var(--s3)" stroke-width="${sw}"/>
        <circle cx="${cx}" cy="${cx}" r="${r}" fill="none" stroke="url(#shopRingGrad)" stroke-width="${sw}"
          stroke-linecap="round" stroke-dasharray="${dash} ${c.toFixed(1)}"
          transform="rotate(-90 ${cx} ${cx})" class="shop-ring-arc"/>
      </svg>
      <div class="shop-ring-center">
        ${complete
          ? `<div class="shop-ring-check">✓</div><div class="shop-ring-lbl">terminé</div>`
          : `<div class="shop-ring-num"><span>${done}</span>/${total}</div><div class="shop-ring-lbl">cochés</div>`}
      </div>
    </div>`;
}

const CHECKED_KEY = 'diet_shopping_checked';
const getChecked   = () => JSON.parse(localStorage.getItem(CHECKED_KEY) || '[]');
const saveChecked  = (a) => localStorage.setItem(CHECKED_KEY, JSON.stringify(a));
const clearChecked = () => localStorage.removeItem(CHECKED_KEY);

// Catégorisation simple pour grouper la liste
// Ordre d'affichage des rayons (les noms doivent correspondre à categorize()).
const CATEGORIES = [
  { name: 'Viandes & poisson' },
  { name: 'Œufs & laitages' },
  { name: 'Légumes & fruits' },
  { name: 'Féculents & légumineuses' },
  { name: 'Épicerie & placard' },
];

// Icônes SVG par rayon (line-art, dans l'ordre des CATEGORIES).
const CAT_ICONS = [
  // Viandes & poisson — poisson stylisé
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c3-5 9-6 14-3 2 1.2 4 3 4 3s-2 1.8-4 3c-5 3-11 2-14-3z"/><path d="M17 9.5l3-2.5M17 14.5l3 2.5"/><circle cx="8" cy="11" r="1"/></svg>',
  // Œufs & laitages — bouteille de lait
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3l2 4v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10l2-4z"/><line x1="7" y1="13" x2="17" y2="13"/></svg>',
  // Légumes & fruits — feuille/pomme
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7c-1-3-4-4-7-3 0 4 2 7 7 7"/><path d="M12 21c-3 0-5-2-5-6 0-3 2-5 5-5s5 2 5 5c0 4-2 6-5 6z"/></svg>',
  // Féculents — épi de blé
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="22" x2="12" y2="9"/><path d="M12 9c0-2-2-3-2-5 1 0 2 .5 2 2 0-1.5 1-2 2-2 0 2-2 3-2 5z"/><path d="M12 13c-1-1.5-3-1.5-4-1 .3 1.6 1.8 2.5 4 2.5M12 13c1-1.5 3-1.5 4-1-.3 1.6-1.8 2.5-4 2.5"/><path d="M12 17c-1-1.5-3-1.5-4-1 .3 1.6 1.8 2.5 4 2.5M12 17c1-1.5 3-1.5 4-1-.3 1.6-1.8 2.5-4 2.5"/></svg>',
  // Épicerie — sachet/pot
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></svg>',
];

// Regroupe les variantes d'un même produit en un seul nom canonique,
// pour éviter les doublons dans la liste de courses (poulet / poulet cuit / poulet émincé…).
// On ne fusionne que des produits réellement identiques à l'achat.
const CANON = [
  // Mélanges d'assaisonnement (contiennent un "+") → placard, AVANT les règles produits
  { rx: /\+/i, name: 'Épices & aromates (placard)' },
  // Viandes / poisson
  { rx: /poulet/i,                          name: 'Blanc de poulet' },
  { rx: /\bdinde\b/i,                       name: 'Blanc de dinde' },
  { rx: /steak hach|boeuf|b\u0153uf/i,        name: 'Steak haché 5%' },
  { rx: /poulet hach/i,                     name: 'Poulet haché' },
  { rx: /merguez/i,                         name: 'Merguez de volaille' },
  { rx: /thon/i,                            name: 'Thon au naturel' },
  { rx: /saumon/i,                          name: 'Saumon' },
  { rx: /colin|merlu|poisson blanc/i,       name: 'Poisson blanc (colin/merlu)' },
  { rx: /crevette/i,                        name: 'Crevettes décortiquées' },
  { rx: /anchois/i,                         name: 'Anchois' },
  { rx: /^bacon/i,                          name: 'Bacon de dinde' },
  // Oeufs & laitages
  { rx: /blancs? d'?oeuf/i,                 name: "Blancs d'oeuf" },
  { rx: /^oeufs?\b|oeufs? (durs?|poch)/i,    name: 'Oeufs' },
  { rx: /fromage blanc/i,                   name: 'Fromage blanc 0%' },
  { rx: /fromage frais/i,                   name: 'Fromage frais léger' },
  { rx: /^skyr/i,                           name: 'Skyr' },
  { rx: /ricotta/i,                         name: 'Ricotta' },
  { rx: /^feta/i,                           name: 'Feta' },
  { rx: /parmesan/i,                        name: 'Parmesan' },
  { rx: /emmental/i,                        name: 'Emmental allégé' },
  { rx: /lait de coco/i,                    name: 'Lait de coco light' },
  { rx: /lait \u00e9cr\u00e9m|lait ecrem/i,    name: 'Lait écrémé' },
  // Féculents & légumineuses
  { rx: /^p[âa]tes compl]?|^p[âa]tes/i,     name: 'Pâtes complètes' },
  { rx: /\borzo\b/i,                        name: 'Orzo' },
  { rx: /nouilles de riz/i,                 name: 'Nouilles de riz' },
  { rx: /riz basmati/i,                     name: 'Riz basmati' },
  { rx: /riz rond/i,                        name: 'Riz rond' },
  { rx: /^riz\b/i,                           name: 'Riz' },
  { rx: /boulgh?our|boulgour/i,             name: 'Boulghour' },
  { rx: /quinoa/i,                          name: 'Quinoa' },
  { rx: /flocons d'?avoine/i,               name: "Flocons d'avoine" },
  { rx: /lentilles corail/i,                name: 'Lentilles corail' },
  { rx: /lentilles vertes/i,                name: 'Lentilles vertes' },
  { rx: /pois chiches/i,                    name: 'Pois chiches' },
  { rx: /haricots rouges/i,                 name: 'Haricots rouges' },
  { rx: /haricots blancs/i,                 name: 'Haricots blancs' },
  { rx: /^ma\u00efs|^mais/i,                  name: 'Maïs' },
  { rx: /tortillas?/i,                      name: 'Tortillas blé complètes' },
  { rx: /pain complet/i,                    name: 'Pain complet' },
  { rx: /crackers/i,                        name: 'Crackers de seigle' },
  { rx: /chapelure/i,                       name: 'Chapelure' },
  // Légumes & fruits
  { rx: /haricots verts/i,                  name: 'Haricots verts' },
  { rx: /^[ée\u00e9]pinards/i,                name: 'Épinards' },
  { rx: /^courgettes?/i,                    name: 'Courgettes' },
  { rx: /chou-fleur/i,                      name: 'Chou-fleur' },
  { rx: /chou blanc/i,                      name: 'Chou blanc' },
  { rx: /^brocoli/i,                        name: 'Brocoli' },
  { rx: /champignons/i,                     name: 'Champignons de Paris' },
  { rx: /^carottes?/i,                      name: 'Carottes' },
  { rx: /^concombre/i,                      name: 'Concombre' },
  { rx: /tomates cerise/i,                  name: 'Tomates cerise' },
  { rx: /tomates concass/i,                 name: 'Tomates concassées' },
  { rx: /^tomates?$/i,                      name: 'Tomates' },
  { rx: /^poivrons?/i,                      name: 'Poivron' },
  { rx: /patate douce/i,                    name: 'Patate douce' },
  { rx: /pommes de terre/i,                 name: 'Pommes de terre' },
  { rx: /betterave/i,                       name: 'Betterave cuite' },
  { rx: /^salade|laitue|romaine/i,          name: 'Salade verte' },
  { rx: /avocat/i,                          name: 'Avocat' },
  { rx: /oignon rouge/i,                    name: 'Oignon rouge' },
  { rx: /^oignon/i,                         name: 'Oignon' },
  { rx: /citron vert/i,                     name: 'Citron vert' },
  { rx: /citron|jus.*zeste|zeste.*citron/i, name: 'Citron' },
  { rx: /^banane/i,                         name: 'Banane' },
  { rx: /mangue/i,                          name: 'Mangue surgelée' },
  { rx: /^pommes?\b/i,                       name: 'Pommes' },
  { rx: /fruits rouges/i,                   name: 'Fruits rouges surgelés' },
  { rx: /framboises/i,                      name: 'Framboises surgelées' },
  { rx: /fruit de la passion/i,             name: 'Fruit de la passion' },
  { rx: /dattes/i,                          name: 'Dattes dénoyautées' },
  { rx: /\bgingembre\b/i,                   name: 'Gingembre frais' },
  { rx: /^ail\b/i,                           name: 'Ail' },
  { rx: /olives noires/i,                   name: 'Olives noires' },
  { rx: /olives vertes/i,                   name: 'Olives vertes' },
  { rx: /câpres|capres/i,                   name: 'Câpres' },
  { rx: /cornichons/i,                      name: 'Cornichons' },
  { rx: /piment rouge/i,                    name: 'Piment rouge' },
  // Herbes fraîches (regroupées)
  { rx: /coriandre fra/i,                   name: 'Coriandre fraîche' },
  { rx: /persil/i,                          name: 'Persil frais' },
  { rx: /menthe fra|^menthe/i,              name: 'Menthe fraîche' },
  { rx: /basilic/i,                         name: 'Basilic frais' },
  { rx: /ciboulette/i,                      name: 'Ciboulette' },
  { rx: /thym frais/i,                      name: 'Thym frais' },
  // Épicerie / condiments / poudres (tout ce qui est sec/placard)
  { rx: /beurre de cacahu/i,                name: 'Beurre de cacahuète' },
  { rx: /^beurre\b/i,                        name: 'Beurre' },
  { rx: /tahini/i,                          name: 'Tahini' },
  { rx: /huile d'?olive/i,                  name: "Huile d'olive" },
  { rx: /huile de sésame|huile de sesame/i, name: 'Huile de sésame' },
  { rx: /huile de coco/i,                   name: 'Huile de coco' },
  { rx: /huile \+ |^huile/i,                 name: "Huile d'olive" },
  { rx: /miel/i,                            name: 'Miel' },
  { rx: /sauce soja|soja \+/i,              name: 'Sauce soja' },
  { rx: /sauce huîtres|sauce huitres/i,     name: 'Sauce huîtres' },
  { rx: /sauce worcester/i,                 name: 'Sauce Worcester' },
  { rx: /gochujang/i,                       name: 'Gochujang' },
  { rx: /sriracha/i,                        name: 'Sriracha' },
  { rx: /pâte de curry|pate de curry/i,     name: 'Pâte de curry vert' },
  { rx: /pâte de miso|pate de miso/i,       name: 'Pâte de miso' },
  { rx: /moutarde/i,                        name: 'Moutarde de Dijon' },
  { rx: /vinaigre balsamique|vinaigre \+/i, name: 'Vinaigre balsamique' },
  { rx: /citron confit/i,                   name: 'Citron confit' },
  { rx: /chocolat noir|pépites de chocolat|pepites/i, name: 'Chocolat noir 85%' },
  { rx: /cacao/i,                           name: 'Cacao non sucré' },
  { rx: /whey|protéine en poudre|proteine en poudre/i, name: 'Whey (protéine en poudre)' },
  { rx: /graines de chia/i,                 name: 'Graines de chia' },
  { rx: /noix de coco/i,                    name: 'Noix de coco râpée' },
  { rx: /cacahuètes|cacahuetes/i,           name: 'Cacahuètes non salées' },
  { rx: /sésame|sesame/i,                   name: 'Sésame' },
  { rx: /levure/i,                          name: 'Levure chimique' },
  { rx: /extrait de vanille|vanille/i,      name: 'Vanille' },
  { rx: /café|cafe expresso/i,              name: 'Café' },
  { rx: /biscuits? boudoir/i,               name: 'Biscuits boudoir' },
  { rx: /biscuits? type petit|petit beurre/i, name: 'Biscuits Petit Beurre' },
  // Épices & mélanges → tout en placard, regroupé par "Épices"
  { rx: /garam masala|tikka|ras el hanout|curry|curcuma|cumin|paprika|harissa|cannelle|origan|herbes de provence|herbes fra|épices|epices|ail en poudre|gingembre en poudre/i, name: 'Épices & aromates (placard)' },
  { rx: /^sel|^poivre|sel \+ poivre/i,      name: 'Sel & poivre' },
];

// Catégorie d'un produit (déjà canonisé) → rayon du magasin.
const CAT_RULES = [
  { name: 'Viandes & poisson',        rx: /poulet|dinde|boeuf|steak|merguez|thon|saumon|poisson|crevette|anchois|bacon/i },
  { name: 'Œufs & laitages',          rx: /oeuf|fromage|ricotta|feta|parmesan|emmental|skyr|lait|yaourt|beurre$/i },
  { name: 'Féculents & légumineuses', rx: /pâtes|riz|orzo|nouilles|boulghour|quinoa|flocons|lentilles|pois chiches|haricots (rouges|blancs)|maïs|tortillas|pain|crackers|chapelure/i },
  { name: 'Légumes & fruits',         rx: /haricots verts|épinards|courgettes|chou|brocoli|champignons|carottes|concombre|tomates?|poivron|patate|pommes de terre|betterave|salade|avocat|oignon|citron|banane|mangue|pommes|fruits rouges|framboises|passion|dattes|gingembre|ail$|olives|câpres|cornichons|piment|coriandre|persil|menthe|basilic|ciboulette|thym/i },
];

// Renvoie {name} canonique pour un ingrédient.
function canonical(ingName) {
  for (const c of CANON) {
    if (c.rx.test(ingName)) return c.name;
  }
  return null;
}

function categorize(name) {
  for (const cat of CAT_RULES) {
    if (cat.rx.test(name)) return cat.name;
  }
  return 'Épicerie & placard';
}

function buildList(dates) {
  const map = {};
  dates.forEach(date => {
    const entry = getEntry(date);
    ['starter','lunch','dinner','sides','sweet'].forEach(slot => {
      (entry.meals[slot] || []).forEach(item => {
        const r = getById(item.id);
        if (!r) return;
        // Le menu cantine n'est pas acheté (mangé au self) → on l'exclut
        if ((r.tags || []).includes('cantine')) return;
        const s = item.servings || 1;
        const ov = item.overrides;
        r.ingredients.forEach((ing, idx) => {
          let qty = (ov && ov[idx] != null) ? ov[idx] : ing.qty * s;
          const canonName = canonical(ing.name);
          const displayName = canonName || ing.name;
          const key = displayName.toLowerCase();
          // Unité : on normalise. Citron/oeufs/etc. → pièces ; sinon on garde l'unité de la recette.
          let unit = ing.unit;
          // Conversion du jus/zeste de citron en nombre d'agrumes (1 citron ≈ 40 ml de jus, ≈ 80 g).
          if (/^citron/i.test(displayName) || /citron vert/i.test(displayName)) {
            if (ing.unit === 'ml') qty = qty / 40;
            else if (ing.unit === 'g') qty = qty / 80;
            unit = 'pièces';
          } else if (/oeufs|piment rouge|fruit de la passion|^pommes$/i.test(displayName)) {
            unit = 'pièces';
          }
          if (!map[key]) map[key] = { name: displayName, qty: 0, unit, cat: categorize(displayName) };
          map[key].qty += qty;
        });
      });
    });
  });
  return Object.values(map);
}

// Arrondit la quantité à acheter à un format réaliste du commerce.
function toPurchase(item) {
  const n = item.name.toLowerCase();
  const q = item.qty;
  // Épices, sel & poivre, herbes : pas de quantité chiffrée utile → "à vérifier au placard"
  if (/épices|epices|aromates|sel & poivre|sel &amp; poivre/.test(n)) return { qty: '', unit: 'au placard' };
  if (/poulet|boeuf|bœuf|steak|dinde|saumon|colin|merlu|poisson|crevette|merguez|thon/.test(n) && item.unit === 'g')
    return { qty: Math.max(100, Math.ceil(q/100)*100), unit: 'g' };
  if (/fromage blanc|skyr|yaourt/.test(n) && item.unit === 'g') {
    const pots = Math.max(1, Math.ceil(q/500)); return { qty: pots*500, unit: `g · ${pots} pot${pots>1?'s':''} 500g` };
  }
  if (/riz|pâtes|pates|quinoa|boulghour|orzo|lentille|pois chiche|flocons/.test(n) && item.unit==='g')
    return { qty: Math.ceil(q/250)*250, unit: 'g' };
  if (/lait/.test(n) && item.unit==='ml') return { qty: Math.ceil(q/250)*250, unit: 'ml' };
  // Oeufs entiers : par boîte de 6. Blancs d'oeuf : restent en pièces simples.
  if (item.unit === 'pièces' && /^oeufs/.test(n)) {
    const e = Math.ceil(q); return { qty: e, unit: `pièces · ${Math.ceil(e/6)}×6` };
  }
  if (item.unit === 'pièces') return { qty: Math.ceil(q), unit: 'pièces' };
  if (item.unit === 'g') return { qty: Math.ceil(q/50)*50, unit: 'g' };
  return { qty: Math.ceil(q), unit: item.unit };
}

export function renderShopping() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  // Mode : 'range' (depuis la semaine) ou 'days'
  let rangeDates = null;
  const stored = localStorage.getItem('diet_shop_range');
  if (stored) rangeDates = JSON.parse(stored);

  let days    = parseInt(localStorage.getItem('diet_shop_days') || '7');
  let checked = getChecked();

  function currentDates() {
    if (rangeDates) return rangeDates;
    return getLog().slice(-days).map(e => e.date);
  }

  function render() {
    const dates = currentDates();
    const items = buildList(dates).sort((a, b) => a.name.localeCompare(b.name, 'fr'));
    const done  = checked.filter(k => items.some(i => i.name.toLowerCase() === k)).length;

    // Groupe par catégorie
    const grouped = {};
    items.forEach(it => { (grouped[it.cat] ||= []).push(it); });

    const view = el('div', 'view shopping-view');

    const rangeLabel = rangeDates
      ? `Semaine du ${new Date(rangeDates[0]+'T12:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}`
      : `${days} derniers jours`;

    const pct = items.length ? Math.round(done / items.length * 100) : 0;

    view.innerHTML = `
      <div class="shopping-header">
        <div class="shop-hero">
          <div class="shop-hero-main">
            <div class="shopping-title">Liste de courses</div>
            ${rangeDates ? `
              <div class="shop-range-chip">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>${rangeLabel}</span>
              </div>
            ` : `
              <div class="days-tabs">
                ${[3,7,14].map(d => `<button class="days-tab ${days===d?'active':''}" data-days="${d}">${d} jours</button>`).join('')}
              </div>
            `}
            ${done > 0 ? '<button class="clear-btn">Tout décocher</button>' : ''}
          </div>
          <div class="shop-hero-ring">
            ${shopRing(done, items.length)}
          </div>
        </div>
      </div>
      <div class="shopping-list">
        ${items.length ? CATEGORIES.map(c => {
          const list = grouped[c.name];
          if (!list || !list.length) return '';
          list.sort((a,b)=>a.name.localeCompare(b.name,'fr'));
          const ci = CATEGORIES.indexOf(c);
          const doneInCat = list.filter(it => checked.includes(it.name.toLowerCase())).length;
          return `
            <div class="shop-cat cat-c-${ci}">
              <div class="shop-cat-head">
                <span class="shop-cat-ic">${CAT_ICONS[ci] || ''}</span>
                <span class="shop-cat-name">${c.name}</span>
                <span class="shop-cat-count">${doneInCat}/${list.length}</span>
              </div>
              <div class="shop-group">
              ${list.map(item => {
                const key = item.name.toLowerCase();
                const isChecked = checked.includes(key);
                const p = toPurchase(item);
                return `<div class="shop-item ${isChecked ? 'done' : ''}" data-key="${key}">
                  <div class="shop-check ${isChecked ? 'checked' : ''}"></div>
                  <div class="shop-info">
                    <div class="shop-name">${item.name}</div>
                    <div class="shop-qty">${p.qty} ${p.unit}</div>
                  </div>
                </div>`;
              }).join('')}
              </div>
            </div>`;
        }).join('') : `<div class="empty-shop">Aucun repas planifié.<br><br>Planifie ta semaine dans <strong>Semaine</strong>.</div>`}
      </div>
      ${(() => {
        const entries = {}; dates.forEach(d => entries[d] = getEntry(d));
        const perish = collectPerishables(entries, dates);
        if (!perish.length) return '';
        return `
        <div class="perish-section">
          <div class="perish-title">Ce que j'ai acheté</div>
          <div class="perish-sub">Ajuste les quantités réelles : Hébé adapte les portions des recettes pour tout consommer à temps.</div>
          ${perish.map((p, i) => `
            <div class="perish-row" data-name="${encodeURIComponent(p.name)}">
              <div class="perish-info">
                <div class="perish-name">${p.name}</div>
                <div class="perish-meta"><span class="perish-tag tag-${p.cls}">${p.label} · ${p.days}j frigo</span></div>
              </div>
              <div class="perish-qty-ctrl">
                <input class="perish-input" type="text" inputmode="numeric" data-name="${encodeURIComponent(p.name)}" value="${Math.round(p.plannedQty)}">
                <span class="perish-unit">${p.unit}</span>
              </div>
            </div>`).join('')}
          <button class="perish-apply">Ajuster mes recettes</button>
        </div>`;
      })()}
    `;

    // Events
    view.querySelectorAll('.days-tab').forEach(b => b.addEventListener('click', () => {
      days = parseInt(b.dataset.days);
      localStorage.setItem('diet_shop_days', days);
      app.querySelector('.view')?.remove(); render();
    }));
    view.querySelector('.clear-btn')?.addEventListener('click', () => {
      clearChecked(); checked = []; app.querySelector('.view')?.remove(); render();
    });
    view.querySelectorAll('.shop-item').forEach(row => row.addEventListener('click', () => {
      const key = row.dataset.key;
      const idx = checked.indexOf(key);
      if (idx > -1) checked.splice(idx, 1); else checked.push(key);
      saveChecked(checked);
      app.querySelector('.view')?.remove(); render();
    }));

    // Périssables : appliquer les quantités réelles → scaler les recettes
    view.querySelector('.perish-apply')?.addEventListener('click', () => {
      const dts = currentDates();
      const entries = {}; dts.forEach(d => entries[d] = getEntry(d));
      const perish = collectPerishables(entries, dts);
      const bought = {};
      view.querySelectorAll('.perish-input').forEach(inp => {
        const name = decodeURIComponent(inp.dataset.name);
        const v = parseFloat(String(inp.value).replace(',', '.'));
        if (!isNaN(v) && v >= 0) bought[name] = v;
      });
      applyPerishables(entries, dts, perish, bought, USER.targets);
      Object.values(entries).forEach(e => saveEntry(e));
      const btn = view.querySelector('.perish-apply');
      btn.textContent = '✓ Recettes ajustées';
      btn.classList.add('done');
      setTimeout(() => { app.querySelector('.view')?.remove(); render(); }, 900);
    });

    app.insertBefore(view, app.querySelector('#nav'));
  }

  render();
}
