// planner.js — Éditeur du menu d'un jour (state.selectedDate)
// Ajout/suppression de plats, réglage précis des portions, alerte dépassement kcal.

import { state, setState, currentEntry } from './state.js';
import { saveEntry, getTodayDate }       from '../data/log.js';
import { getDinners, getLunches, getSides, getSweets, getById } from '../data/recipes.js';
import { USER }                          from '../data/user.js';
import { el, formatDate, mbar, scaledMacros, computeDayMacros, openSheet, closeSheet } from './utils.js';

const SLOTS = [
  { key: 'lunch',  label: 'Déjeuner',        emoji: '🥗',  fn: getLunches },
  { key: 'dinner', label: 'Dîner',            emoji: '🍽️',  fn: getDinners },
  { key: 'sides',  label: 'Accompagnements',  emoji: '🥦',  fn: getSides  },
  { key: 'sweet',  label: 'Dessert / Encas',  emoji: '🍫',  fn: getSweets },
];

function save(entry) { saveEntry(entry); renderPlanner(); }

export function addMeal(slot, recipeId) {
  const entry = currentEntry();
  if (!entry.meals[slot]) entry.meals[slot] = [];
  entry.meals[slot].push({ id: recipeId, servings: 1 });
  save(entry);
}

export function removeMeal(slot, index) {
  const entry = currentEntry();
  entry.meals[slot].splice(index, 1);
  save(entry);
}

export function changeServings(slot, index, delta) {
  const entry = currentEntry();
  const item = entry.meals[slot][index];
  if (!item) return;
  item.servings = Math.max(0.25, Math.round((item.servings + delta) * 4) / 4);
  save(entry);
}

export function setServings(slot, index, value) {
  const entry = currentEntry();
  const item = entry.meals[slot][index];
  if (!item) return;
  const v = parseFloat(String(value).replace(',', '.'));
  if (!isNaN(v) && v > 0) item.servings = Math.round(v * 4) / 4;
  save(entry);
}

export function renderPlanner() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const entry  = currentEntry();
  const macros = computeDayMacros(entry);
  const { targets } = USER;
  const kcalPct = Math.round((macros.kcal / targets.kcal) * 100);
  const over    = macros.kcal > targets.kcal;
  const isToday = entry.date === getTodayDate();

  const view = el('div', 'view planner-view');

  const hdr = el('div', `planner-header ${over ? 'over-limit' : ''}`);
  hdr.innerHTML = `
    <div class="planner-top-row">
      <button class="planner-back">‹ Semaine</button>
      <button class="planner-settings" title="Objectifs" aria-label="Réglages"><svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></button>
    </div>
    <div class="today-label">${isToday ? "Aujourd'hui" : 'Jour planifié'}</div>
    <div class="today-date">${formatDate(entry.date)}</div>
    <div class="kcal-row">
      <div><span class="kcal-val ${over ? 'over' : ''}">${Math.round(macros.kcal)}</span><span class="kcal-sep"> / ${targets.kcal} kcal</span></div>
      <span class="kcal-pct ${over ? 'over' : ''}">${kcalPct}%</span>
    </div>
    ${mbar(macros.kcal, targets.kcal, 'var(--accent)')}
    ${over ? `<div class="over-banner">⚠️ Limite dépassée de ${Math.round(macros.kcal - targets.kcal)} kcal</div>` : ''}
    <div class="mini-macros">
      <div class="mini-macro"><span class="mm-val protein">${Math.round(macros.protein)}g</span><span class="mm-label">Protéines</span></div>
      <div class="mini-macro"><span class="mm-val carbs">${Math.round(macros.carbs)}g</span><span class="mm-label">Glucides</span></div>
      <div class="mini-macro"><span class="mm-val fat">${Math.round(macros.fat)}g</span><span class="mm-label">Lipides</span></div>
    </div>`;
  view.appendChild(hdr);

  SLOTS.forEach(({ key, label, emoji }) => {
    const selected = entry.meals[key] || [];
    const slotMacros = selected.reduce((a, item) => {
      const r = getById(item.id);
      if (r) { const m = scaledMacros(r, item.servings); a.kcal += m.kcal; a.protein += m.protein; }
      return a;
    }, { kcal: 0, protein: 0 });

    const slot = el('div', 'meal-slot');
    slot.innerHTML = `
      <div class="slot-hd">
        <div class="slot-left"><span class="slot-emoji">${emoji}</span><span class="slot-label">${label}</span></div>
        ${selected.length ? `<span class="slot-kcal">${Math.round(slotMacros.kcal)} kcal · ${Math.round(slotMacros.protein)}g P</span>` : ''}
      </div>
      <div class="slot-body">
        ${selected.map((item, idx) => {
          const r = getById(item.id);
          if (!r) return '';
          const m = scaledMacros(r, item.servings);
          return `<div class="recipe-chip">
            <span class="chip-emoji">${r.emoji}</span>
            <div class="chip-info">
              <div class="chip-name">${r.name}</div>
              <div class="chip-kcal">${m.kcal} kcal · ${m.protein}g P</div>
            </div>
            <div class="serv-control">
              <button class="serv-btn" data-slot="${key}" data-idx="${idx}" data-delta="-0.25">−</button>
              <input class="serv-input" type="text" inputmode="decimal" data-slot="${key}" data-idx="${idx}" value="${item.servings}">
              <button class="serv-btn" data-slot="${key}" data-idx="${idx}" data-delta="0.25">+</button>
            </div>
            <button class="chip-remove" data-slot="${key}" data-idx="${idx}">×</button>
          </div>`;
        }).join('')}
        <button class="add-btn" data-slot="${key}">
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Ajouter
        </button>
      </div>`;
    view.appendChild(slot);
  });

  app.insertBefore(view, app.querySelector('#nav'));

  view.querySelector('.planner-back').addEventListener('click', () => window._nav?.('week'));
  view.querySelector('.planner-settings').addEventListener('click', () => window._nav?.('settings'));
  view.querySelectorAll('.chip-remove').forEach(b =>
    b.addEventListener('click', () => removeMeal(b.dataset.slot, parseInt(b.dataset.idx)))
  );
  view.querySelectorAll('.serv-btn').forEach(b =>
    b.addEventListener('click', () => changeServings(b.dataset.slot, parseInt(b.dataset.idx), parseFloat(b.dataset.delta)))
  );
  view.querySelectorAll('.serv-input').forEach(inp => {
    inp.addEventListener('change', () => setServings(inp.dataset.slot, parseInt(inp.dataset.idx), inp.value));
    inp.addEventListener('focus', () => inp.select());
  });
  view.querySelectorAll('.add-btn').forEach(b =>
    b.addEventListener('click', () => openRecipePicker(b.dataset.slot))
  );
}

function openRecipePicker(slot) {
  const cfg = SLOTS.find(s => s.key === slot);
  let allRecipes = cfg.fn();
  let query = '';
  function sheetHTML() {
    const filtered = allRecipes.filter(r => r.name.toLowerCase().includes(query.toLowerCase()));
    return `
      <div class="sheet-handle"></div>
      <div class="sheet-search-wrap"><input class="sheet-search" id="sheet-q" placeholder="Rechercher..." value="${query}"></div>
      <div class="sheet-list">
        ${filtered.length ? filtered.map(r => `
          <div class="sheet-recipe" data-id="${r.id}">
            <span class="sheet-r-emoji">${r.emoji}</span>
            <div class="sheet-r-info">
              <div class="sheet-r-name">${r.name}</div>
              <div class="sheet-r-meta">${r.macros.kcal} kcal · ${r.macros.protein}g P · ${r.prepTime + r.cookTime} min</div>
            </div>
            <span class="sheet-r-add">+</span>
          </div>`).join('') : '<div style="color:var(--muted);text-align:center;padding:30px">Aucun résultat</div>'}
      </div>`;
  }
  openSheet(sheetHTML());
  function bind() {
    const sheet = document.getElementById('sheet');
    if (!sheet) return;
    sheet.querySelector('#sheet-q')?.addEventListener('input', e => { query = e.target.value; sheet.innerHTML = sheetHTML(); bind(); });
    sheet.querySelectorAll('.sheet-recipe').forEach(row => row.addEventListener('click', () => { closeSheet(); addMeal(slot, row.dataset.id); }));
  }
  bind();
}
