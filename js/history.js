import { getLog }   from '../data/log.js';
import { getById }  from '../data/recipes.js';
import { USER }     from '../data/user.js';
import { el, formatDate, mbar, scaledMacros, computeDayMacros } from './utils.js';

export function renderHistory() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const view = el('div', 'view history-view');
  view.innerHTML = '<div class="history-header"><div class="history-title">Historique</div></div>';

  const log = getLog().slice(-21).reverse();
  const { targets } = USER;

  if (!log.length) {
    view.innerHTML += '<div class="no-history">Aucun repas enregistré.</div>';
    app.insertBefore(view, app.querySelector('#nav'));
    return;
  }

  const SLOTS = [
    { key: 'lunch',  label: 'Déj.'  },
    { key: 'dinner', label: 'Dîner' },
    { key: 'sides',  label: 'Acc.'  },
    { key: 'sweet',  label: 'Sucré' },
  ];

  log.forEach(entry => {
    const macros = computeDayMacros(entry);
    const anyMeal = SLOTS.some(s => (entry.meals[s.key]||[]).length > 0);
    if (!anyMeal) return;
    const over = macros.kcal > targets.kcal * 1.08;

    const day = el('div', 'history-day');
    day.innerHTML = `
      <div class="hday-header">
        <div class="hday-date">${formatDate(entry.date)}</div>
        <div class="hday-kcal ${over ? 'over' : ''}">${Math.round(macros.kcal)} kcal${over ? ' · dépassé' : ''}</div>
      </div>
      <div class="hday-macros">
        <span class="hday-macro">P <span>${Math.round(macros.protein)}g</span></span>
        <span class="hday-macro">G <span>${Math.round(macros.carbs)}g</span></span>
        <span class="hday-macro">L <span>${Math.round(macros.fat)}g</span></span>
      </div>
      <div class="hday-bars">
        <div class="hday-bar-row"><span class="hday-bar-label" style="color:var(--kcal)">k</span><div class="hday-bar-wrap">${mbar(macros.kcal, targets.kcal, 'var(--kcal)')}</div></div>
        <div class="hday-bar-row"><span class="hday-bar-label" style="color:var(--protein)">P</span><div class="hday-bar-wrap">${mbar(macros.protein, targets.protein, 'var(--protein)')}</div></div>
      </div>`;

    const meals = el('div', 'hday-meals');
    SLOTS.forEach(({ key, label }) => {
      const items = entry.meals[key] || [];
      if (!items.length) return;
      const names = items.map(it => {
        const r = getById(it.id);
        return r ? r.name + (it.servings > 1 ? ` ×${it.servings}` : '') : null;
      }).filter(Boolean).join(', ');
      const row = el('div', 'hday-meal');
      row.innerHTML = `<span class="hday-meal-slot">${label}</span><span class="hday-meal-names">${names}</span>`;
      meals.appendChild(row);
    });
    day.appendChild(meals);
    view.appendChild(day);
  });

  app.insertBefore(view, app.querySelector('#nav'));
}
