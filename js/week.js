// week.js — Planning hebdomadaire (vue principale)
// Permet de composer le menu de toute une semaine, jour par jour.
// Bascule "Cette semaine" / "Semaine prochaine".

import { state, setState }     from './state.js';
import { getEntry, getWeekDates, getNextWeekDates, getTodayDate } from '../data/log.js';
import { USER }                from '../data/user.js';
import { getById }             from '../data/recipes.js';
import { el, mbar, computeDayMacros } from './utils.js';

const DAY_LABELS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

let weekMode = 'current'; // 'current' | 'next'

export function renderWeek() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const dates = weekMode === 'current' ? getWeekDates() : getNextWeekDates();
  const today = getTodayDate();
  const { targets } = USER;

  // Totaux semaine
  let weekKcal = 0, plannedDays = 0;
  dates.forEach(d => {
    const m = computeDayMacros(getEntry(d));
    if (m.kcal > 0) { weekKcal += m.kcal; plannedDays++; }
  });

  const view = el('div', 'view week-view');

  view.innerHTML = `
    <div class="week-header">
      <div class="masthead">
        <div class="mast-left">
          <div class="brand-word">Héb<span class="brand-accent">é</span></div>
          <div class="brand-greek">jeunesse & vitalité · le carburant du corps</div>
        </div>
        <button class="week-settings" aria-label="Réglages"><svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></button>
      </div>
      <div class="week-subtitle">Ma semaine</div>
      <div class="week-toggle">
        <button class="wk-tab ${weekMode==='current'?'active':''}" data-mode="current">Cette semaine</button>
        <button class="wk-tab ${weekMode==='next'?'active':''}" data-mode="next">Semaine prochaine</button>
      </div>
      <div class="week-summary">
        ${plannedDays}/7 jours planifiés${plannedDays ? ` · ~${Math.round(weekKcal/plannedDays)} kcal/jour` : ''}
      </div>
    </div>
    <div class="week-days"></div>
    <div class="week-actions">
      <button class="week-shop-btn">Générer la liste de courses</button>
    </div>
  `;

  const daysWrap = view.querySelector('.week-days');

  dates.forEach((date, i) => {
    const entry  = getEntry(date);
    const macros = computeDayMacros(entry);
    const isToday = date === today;
    const over = macros.kcal > targets.kcal;
    const totalItems = ['lunch','dinner','sides','sweet']
      .reduce((n, s) => n + (entry.meals[s]?.length || 0), 0);

    const card = el('div', `week-day ${isToday ? 'is-today' : ''} ${totalItems ? '' : 'empty'}`);
    card.dataset.date = date;

    const dayNum = new Date(date + 'T12:00:00').getDate();

    card.innerHTML = `
      <div class="wd-left">
        <div class="wd-label">${DAY_LABELS[i]}</div>
        <div class="wd-num">${dayNum}</div>
      </div>
      <div class="wd-body">
        ${totalItems ? `
          <div class="wd-kcal ${over ? 'over' : ''}">
            ${Math.round(macros.kcal)} kcal
            <span class="wd-p">· ${Math.round(macros.protein)}g P</span>
            ${over ? '<span class="wd-warn">dépassé</span>' : ''}
          </div>
          ${mbar(macros.kcal, targets.kcal, 'var(--accent)')}
          <div class="wd-meals">
            ${mealLine('', entry.meals.lunch)}
            ${mealLine('', entry.meals.dinner)}
            ${mealLine('', entry.meals.sides)}
            ${mealLine('', entry.meals.sweet)}
          </div>
        ` : `<div class="wd-empty">Vide — appuie pour planifier</div>`}
      </div>
      <span class="wd-arrow">›</span>
    `;

    card.addEventListener('click', () => {
      setState({ selectedDate: date, currentView: 'planner' });
      window._nav?.('planner');
    });

    daysWrap.appendChild(card);
  });

  // Events
  view.querySelector('.week-settings')?.addEventListener('click', () => window._nav?.('settings'));
  view.querySelectorAll('.wk-tab').forEach(b =>
    b.addEventListener('click', () => { weekMode = b.dataset.mode; renderWeek(); })
  );
  view.querySelector('.week-shop-btn').addEventListener('click', () => {
    // Mémorise la plage de dates pour la vue courses
    const range = weekMode === 'current' ? getWeekDates() : getNextWeekDates();
    localStorage.setItem('diet_shop_range', JSON.stringify(range));
    window._nav?.('shopping');
  });

  app.insertBefore(view, app.querySelector('#nav'));
}

function mealLine(emoji, items) {
  if (!items || !items.length) return '';
  const names = items.map(it => {
    const r = getById(it.id);
    if (!r) return '';
    return r.name + (it.servings > 1 ? ` ×${it.servings}` : '');
  }).filter(Boolean).join(', ');
  return `<div class="wd-meal-line">${names}</div>`;
}
