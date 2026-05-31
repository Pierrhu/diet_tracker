// shopping.js — Liste de courses
// Source : soit une plage de dates choisie depuis la vue Semaine (diet_shop_range),
// soit les N derniers jours. Les quantités sont multipliées par les portions (servings).

import { getLog, getEntry } from '../data/log.js';
import { getById }          from '../data/recipes.js';
import { el }               from './utils.js';

const CHECKED_KEY = 'diet_shopping_checked';
const getChecked   = () => JSON.parse(localStorage.getItem(CHECKED_KEY) || '[]');
const saveChecked  = (a) => localStorage.setItem(CHECKED_KEY, JSON.stringify(a));
const clearChecked = () => localStorage.removeItem(CHECKED_KEY);

// Catégorisation simple pour grouper la liste
const CATEGORIES = [
  { name: 'Viandes & Poisson', match: ['poulet','boeuf','steak','merguez','saucisse','thon','saumon','colin','merlu','poisson','dinde','bacon','anchois'] },
  { name: 'Oeufs & Laitages',  match: ['oeuf','fromage','ricotta','feta','lait','yaourt','parmesan'] },
  { name: 'Légumes & Fruits',  match: ['courgette','poivron','oignon','ail','tomate','carotte','brocoli','épinard','haricot','champignon','concombre','chou','salade','laitue','citron','banane','mangue','pomme','avocat','fruit','framboise','passion','gingembre','olive','romaine'] },
  { name: 'Féculents & Légumineuses', match: ['riz','pâte','quinoa','pain','flocon','avoine','lentille','pois chiche','semoule','tortilla','cracker','boudoir','biscuit'] },
  { name: 'Épicerie & Autres', match: [] },
];

function categorize(name) {
  const n = name.toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.match.some(m => n.includes(m))) return cat.name;
  }
  return 'Épicerie & Autres';
}

function buildList(dates) {
  const map = {};
  dates.forEach(date => {
    const entry = getEntry(date);
    ['lunch','dinner','sides','sweet'].forEach(slot => {
      (entry.meals[slot] || []).forEach(item => {
        const r = getById(item.id);
        if (!r) return;
        const s = item.servings || 1;
        r.ingredients.forEach(ing => {
          const key = ing.name.toLowerCase();
          if (!map[key]) map[key] = { name: ing.name, qty: 0, unit: ing.unit, cat: categorize(ing.name) };
          map[key].qty += ing.qty * s;
        });
      });
    });
  });
  return Object.values(map);
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

    view.innerHTML = `
      <div class="shopping-header">
        <div class="shopping-title">Liste de courses</div>
        ${rangeDates ? `
          <div class="shop-range-banner">${rangeLabel}
            <button class="shop-switch">Utiliser N jours</button>
          </div>
        ` : `
          <div class="days-tabs">
            ${[3,7,14].map(d => `<button class="days-tab ${days===d?'active':''}" data-days="${d}">${d} jours</button>`).join('')}
          </div>
        `}
        <div class="shop-stats">
          ${items.length} ingrédients · ${done}/${items.length} cochés
          ${done > 0 ? '<button class="clear-btn">Tout décocher</button>' : ''}
        </div>
      </div>
      <div class="shopping-list">
        ${items.length ? CATEGORIES.map(c => {
          const list = grouped[c.name];
          if (!list || !list.length) return '';
          list.sort((a,b)=>a.name.localeCompare(b.name,'fr'));
          return `
            <div class="shop-cat-title">${c.name}</div>
            ${list.map(item => {
              const key = item.name.toLowerCase();
              const isChecked = checked.includes(key);
              const qty = Math.round(item.qty * 10) / 10;
              return `<div class="shop-item ${isChecked ? 'done' : ''}">
                <div class="shop-check ${isChecked ? 'checked' : ''}" data-key="${key}"></div>
                <div class="shop-info">
                  <div class="shop-name">${item.name}</div>
                  <div class="shop-qty">${qty} ${item.unit}</div>
                </div>
              </div>`;
            }).join('')}`;
        }).join('') : `<div class="empty-shop">Aucun repas planifié.<br><br>Planifie ta semaine dans <strong>Semaine</strong>.</div>`}
      </div>
    `;

    // Events
    view.querySelector('.shop-switch')?.addEventListener('click', () => {
      rangeDates = null;
      localStorage.removeItem('diet_shop_range');
      app.querySelector('.view')?.remove(); render();
    });
    view.querySelectorAll('.days-tab').forEach(b => b.addEventListener('click', () => {
      days = parseInt(b.dataset.days);
      localStorage.setItem('diet_shop_days', days);
      app.querySelector('.view')?.remove(); render();
    }));
    view.querySelector('.clear-btn')?.addEventListener('click', () => {
      clearChecked(); checked = []; app.querySelector('.view')?.remove(); render();
    });
    view.querySelectorAll('.shop-check').forEach(box => box.addEventListener('click', () => {
      const key = box.dataset.key;
      const idx = checked.indexOf(key);
      if (idx > -1) checked.splice(idx, 1); else checked.push(key);
      saveChecked(checked);
      app.querySelector('.view')?.remove(); render();
    }));

    app.insertBefore(view, app.querySelector('#nav'));
  }

  render();
}
