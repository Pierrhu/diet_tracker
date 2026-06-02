import { state, currentEntry } from './state.js';
import { USER }                from '../data/user.js';
import { getById }             from '../data/recipes.js';
import { el, mbar, scaledMacros, computeDayMacros, formatDate } from './utils.js';

export function renderMacros() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const entry  = currentEntry();
  const macros = computeDayMacros(entry);
  const { targets } = USER;
  const over = macros.kcal > targets.kcal * 1.08;

  const view = el('div', 'view macros-view');

  const hero = el('div', `macros-hero ${over ? 'over-limit' : ''}`);
  hero.innerHTML = `
    <div class="macros-date">${formatDate(entry.date)}</div>
    <div class="macros-kcal-big ${over ? 'over' : ''}">${Math.round(macros.kcal)}</div>
    <div class="macros-kcal-sub">/ ${targets.kcal} kcal · ${Math.round((macros.kcal/targets.kcal)*100)}%</div>
    ${over ? `<div class="over-banner">Dépassement de ${Math.round(macros.kcal - targets.kcal)} kcal</div>` : ''}
    ${mbar(macros.kcal, targets.kcal, 'var(--kcal)')}
    <div style="margin-top:20px">
      ${macroRow('Protéines', macros.protein, targets.protein, 'var(--protein)')}
      ${macroRow('Glucides',  macros.carbs,   targets.carbs,   'var(--carbs)')}
      ${macroRow('Lipides',   macros.fat,     targets.fat,     'var(--fat)')}
    </div>`;
  view.appendChild(hero);

  view.appendChild(el('div', 'section-hd', 'Détail du jour'));

  const SLOTS = [
    { key: 'lunch',  label: 'Déjeuner' },
    { key: 'dinner', label: 'Dîner'    },
    { key: 'sides',  label: 'Accomp.'  },
    { key: 'sweet',  label: 'Sucré'    },
  ];

  let hasAny = false;
  const bk = el('div', 'macros-breakdown');
  SLOTS.forEach(({ key, label }) => {
    (entry.meals[key] || []).forEach(item => {
      const r = getById(item.id);
      if (!r) return;
      hasAny = true;
      const m = scaledMacros(r, item.servings);
      const row = el('div', 'breakdown-item');
      row.innerHTML = `
        <div class="bd-left">
          <span class="bd-slot">${label}</span>
          <span class="bd-name">${r.emoji} ${r.name}${item.servings > 1 ? ` ×${item.servings}` : ''}</span>
        </div>
        <span class="bd-right">${m.kcal} kcal</span>`;
      bk.appendChild(row);
    });
  });

  if (!hasAny) bk.innerHTML = '<div class="empty-day">Aucun repas ce jour.</div>';
  view.appendChild(bk);

  app.insertBefore(view, app.querySelector('#nav'));
}

function macroRow(name, val, target, color) {
  const pct = Math.round((val / target) * 100);
  const over = val > target * 1.1;
  return `
    <div class="macro-row">
      <div class="macro-row-hd">
        <span class="macro-row-name">${name}</span>
        <span class="macro-row-nums ${over ? 'over' : ''}"><span>${Math.round(val)}g</span> / ${target}g · ${pct}%</span>
      </div>
      ${mbar(val, target, color)}
    </div>`;
}
