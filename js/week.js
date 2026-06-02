// week.js — Page d'accueil : générateur de menu de semaine automatique.

import { state, setState } from './state.js';
import { getEntry, saveEntry, getWeekDates, getNextWeekDates, getTodayDate } from '../data/log.js';
import { USER } from '../data/user.js';
import { getById } from '../data/recipes.js';
import { el, mbar, computeDayMacros } from './utils.js';
import { generateWeek } from './weekgen.js';

const DAY_LABELS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
let cantineDays = JSON.parse(localStorage.getItem('hebe_cantine_days') || '[]');

function weekHasPlan(dates) {
  return dates.some(d => {
    const e = getEntry(d);
    return ['lunch','dinner','sides','sweet'].some(s => (e.meals[s]||[]).length);
  });
}

export function renderWeek() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const dates = getNextWeekDates();
  const { targets } = USER;
  const hasPlan = weekHasPlan(dates);

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
    </div>

    <div class="gen-card">
      <div class="gen-title">Ma semaine</div>
      <div class="gen-cantine">
        <span class="gen-cantine-label">Midis à la cantine</span>
        <div class="cantine-days">
          ${['L','M','M','J','V','S','D'].map((d,i)=>`<button class="cant-day ${cantineDays.includes(i)?'on':''}" data-i="${i}">${d}</button>`).join('')}
        </div>
      </div>
      <button class="generate-btn">${hasPlan ? 'Régénérer ma semaine' : 'Générer ma semaine'}</button>
    </div>

    <div class="week-days"></div>

    ${hasPlan ? `
    <div class="week-tiles">
      <button class="week-tile tile-recipes">
        <span class="tile-ic">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 4h12a3 3 0 0 1 3 3v21H11a3 3 0 0 1-3-3z"/>
            <path d="M23 9h1a3 3 0 0 1 3 3v13a3 3 0 0 0 3 3"/>
            <line x1="12" y1="10" x2="19" y2="10"/><line x1="12" y1="14" x2="19" y2="14"/><line x1="12" y1="18" x2="16" y2="18"/>
          </svg>
        </span>
        <span class="tile-label">Recettes</span>
        <span class="tile-sub">à cuisiner</span>
      </button>
      <button class="week-tile tile-shop">
        <span class="tile-ic">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 6h3l2.2 13.2a2 2 0 0 0 2 1.7h9.4a2 2 0 0 0 2-1.6L26 10H9"/>
            <circle cx="13" cy="26" r="1.6"/><circle cx="23" cy="26" r="1.6"/>
          </svg>
        </span>
        <span class="tile-label">Courses</span>
        <span class="tile-sub">liste prête</span>
      </button>
    </div>` : ''}
  `;

  const daysWrap = view.querySelector('.week-days');

  if (hasPlan) {
    dates.forEach((date, i) => {
      const entry = getEntry(date);
      const macros = computeDayMacros(entry);
      const over = macros.kcal > targets.kcal * 1.08;
      const totalItems = ['lunch','dinner','sides','sweet'].reduce((n,s)=>n+(entry.meals[s]?.length||0),0);
      const card = el('div', `week-day ${totalItems ? '' : 'empty'}`);
      card.dataset.date = date;
      const dayNum = new Date(date+'T12:00:00').getDate();
      card.innerHTML = `
        <div class="wd-left"><div class="wd-label">${DAY_LABELS[i]}</div><div class="wd-num">${dayNum}</div></div>
        <div class="wd-body">
          ${totalItems ? `
            <div class="wd-kcal ${over?'over':''}">${Math.round(macros.kcal)} kcal
              <span class="wd-prot ${macros.protein>=targets.protein?'ok':'low'}">${Math.round(macros.protein)}g P${macros.protein>=targets.protein?' ✓':''}</span>
            </div>
            ${mbar(macros.kcal, targets.kcal, 'var(--accent)')}
            <div class="wd-meals">
              ${mealLine(entry.meals.starter)}${mealLine(entry.meals.lunch)}${mealLine(entry.meals.dinner)}${mealLine(entry.meals.sweet)}
            </div>` : `<div class="wd-empty">Vide</div>`}
        </div>
        <span class="wd-arrow">›</span>`;
      card.addEventListener('click', () => { setState({ selectedDate: date, currentView: 'planner' }); window._nav?.('planner'); });
      daysWrap.appendChild(card);
    });
  }

  app.insertBefore(view, app.querySelector('#nav'));

  // events
  view.querySelector('.week-settings').addEventListener('click', () => window._nav?.('settings'));
  view.querySelectorAll('.cant-day').forEach(b => b.addEventListener('click', () => {
    const i = parseInt(b.dataset.i);
    if (cantineDays.includes(i)) cantineDays = cantineDays.filter(x => x !== i);
    else cantineDays = [...cantineDays, i];
    localStorage.setItem('hebe_cantine_days', JSON.stringify(cantineDays));
    b.classList.toggle('on');
  }));
  view.querySelector('.generate-btn').addEventListener('click', () => {
    const btn = view.querySelector('.generate-btn');
    btn.textContent = '… génération en cours';
    btn.disabled = true;
    setTimeout(() => {
      const { entries } = generateWeek({ cantineDays, nextWeek: true, targets: USER.targets });
      Object.values(entries).forEach(e => saveEntry(e));
      renderWeek();
    }, 60);
  });
  view.querySelector('.tile-recipes')?.addEventListener('click', () => window._nav?.('batch'));
  view.querySelector('.tile-shop')?.addEventListener('click', () => {
    localStorage.setItem('diet_shop_range', JSON.stringify(getNextWeekDates()));
    window._nav?.('shopping');
  });
}

function mealLine(items) {
  if (!items || !items.length) return '';
  const names = items.map(it => getById(it.id)?.name).filter(Boolean).join(', ');
  return `<div class="wd-meal-line">${names}</div>`;
}
