// planner.js — Éditeur du menu d'un jour (state.selectedDate)
// Ajout/suppression de plats, réglage précis des portions, alerte dépassement kcal.

import { state, setState, currentEntry } from './state.js';
import { saveEntry, getTodayDate }       from '../data/log.js';
import { getDinners, getLunches, getSides, getSweets, getStarters, getById } from '../data/recipes.js';
import { USER }                          from '../data/user.js';
import { el, formatDate, mbar, scaledMacros, itemMacros, computeDayMacros, openSheet, closeSheet } from './utils.js';
import { optimizeDay }                   from './optimizer.js';

const SLOTS = [
  { key: 'starter', label: 'Entrée',           emoji: '',  fn: getStarters },
  { key: 'lunch',  label: 'Déjeuner',        emoji: '',  fn: getLunches },
  { key: 'dinner', label: 'Dîner',            emoji: '',  fn: getDinners },
  { key: 'sides',  label: 'Accompagnements',  emoji: '',  fn: getSides  },
  { key: 'sweet',  label: 'Dessert',          emoji: '',  fn: getSweets },
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
  delete item.overrides; // retour à un réglage proportionnel
  item.servings = Math.max(0.25, Math.round((item.servings + delta) * 4) / 4);
  save(entry);
}

export function setServings(slot, index, value) {
  const entry = currentEntry();
  const item = entry.meals[slot][index];
  if (!item) return;
  delete item.overrides;
  const v = parseFloat(String(value).replace(',', '.'));
  if (!isNaN(v) && v > 0) item.servings = Math.round(v * 4) / 4;
  save(entry);
}

// Optimise les portions de tous les plats du jour pour caler les macros (kcal + protéines).
export function optimizeMeals() {
  const entry = currentEntry();
  const slots = ['lunch', 'dinner', 'sides', 'sweet'];
  // aplatir tous les plats du jour, en gardant la trace de leur emplacement
  const flat = [];
  slots.forEach(slot => (entry.meals[slot] || []).forEach((item, idx) => flat.push({ slot, idx, item })));
  if (!flat.length) return;
  const optimized = optimizeDay(flat.map(f => f.item), USER.targets);
  // réécrire les overrides + servings dans l'entrée
  flat.forEach((f, i) => {
    const o = optimized[i];
    entry.meals[f.slot][f.idx].overrides = o.overrides;
    entry.meals[f.slot][f.idx].servings = 1; // les overrides sont en grammes absolus
  });
  save(entry);
}

export function renderPlanner() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const entry  = currentEntry();
  const macros = computeDayMacros(entry);
  const { targets } = USER;
  const kcalPct = Math.round((macros.kcal / targets.kcal) * 100);
  const over    = macros.kcal > targets.kcal * 1.08;
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
    ${over ? `<div class="over-banner">Limite dépassée de ${Math.round(macros.kcal - targets.kcal)} kcal</div>` : ''}
    <div class="mini-macros">
      <div class="mini-macro protein-track ${macros.protein >= targets.protein ? 'reached' : (macros.protein >= targets.protein*0.8 ? 'close' : 'low')}">
        <span class="mm-val protein">${Math.round(macros.protein)}<span class="mm-target">/${targets.protein}g</span></span>
        <span class="mm-label">Protéines ${macros.protein >= targets.protein ? '✓' : ''}</span>
        <div class="mm-bar"><div class="mm-bar-fill" style="width:${Math.min((macros.protein/targets.protein)*100,100)}%"></div></div>
      </div>
      <div class="mini-macro"><span class="mm-val carbs">${Math.round(macros.carbs)}g</span><span class="mm-label">Glucides</span></div>
      <div class="mini-macro"><span class="mm-val fat">${Math.round(macros.fat)}g</span><span class="mm-label">Lipides</span></div>
    </div>
    ${entry.meals.lunch.length || entry.meals.dinner.length || entry.meals.sides.length || entry.meals.sweet.length
      ? `<button class="optimize-btn">Optimiser les portions</button>` : ''}`;
  view.appendChild(hdr);

  SLOTS.forEach(({ key, label, emoji }) => {
    const selected = entry.meals[key] || [];
    const slotMacros = selected.reduce((a, item) => {
      const m = itemMacros(item); a.kcal += m.kcal; a.protein += m.protein;
      return a;
    }, { kcal: 0, protein: 0 });

    const slot = el('div', 'meal-slot');
    slot.innerHTML = `
      <div class="slot-hd">
        <div class="slot-left"><span class="slot-label slot-${key}">${label}</span></div>
        ${selected.length ? `<span class="slot-kcal">${Math.round(slotMacros.kcal)} kcal · ${Math.round(slotMacros.protein)}g P</span>` : ''}
      </div>
      <div class="slot-body">
        ${selected.map((item, idx) => {
          const r = getById(item.id);
          if (!r) return '';
          const m = itemMacros(item);
          const adjusted = !!item.overrides;
          return `<div class="recipe-chip">
            <span class="chip-emoji">${r.emoji}</span>
            <div class="chip-info" data-edit-slot="${key}" data-edit-idx="${idx}">
              <div class="chip-name">${r.name}${adjusted ? ' <span class="chip-adj">ajusté</span>' : ''}</div>
              <div class="chip-kcal">${Math.round(m.kcal)} kcal · ${Math.round(m.protein)}g P · tap pour ajuster</div>
            </div>
            <div class="serv-control">
              <button class="serv-btn" data-slot="${key}" data-idx="${idx}" data-delta="-0.25">−</button>
              <input class="serv-input" type="text" inputmode="decimal" data-slot="${key}" data-idx="${idx}" value="${item.overrides ? '•' : item.servings}">
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
  view.querySelector('.optimize-btn')?.addEventListener('click', () => optimizeMeals());
  view.querySelectorAll('.chip-info[data-edit-slot]').forEach(ci => ci.addEventListener('click', () => openIngredientEditor(ci.dataset.editSlot, parseInt(ci.dataset.editIdx))));
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

// Éditeur d'ingrédients d'un plat planifié — ajustement fin en grammes.
function openIngredientEditor(slot, index) {
  const entry = currentEntry();
  const item = entry.meals[slot][index];
  if (!item) return;
  const r = getById(item.id);
  if (!r) return;
  const s = item.servings || 1;
  // overrides courants (en grammes absolus) ; si absent, dérivé de servings
  const ov = { ...(item.overrides || {}) };
  r.ingredients.forEach((ing, i) => { if (ov[i] == null) ov[i] = Math.round(ing.qty * s); });

  function macrosNow() {
    return r.ingredients.reduce((a, ing, i) => {
      const q = ing.qty || 1; const qty = ov[i];
      a.kcal += ing.kcal/q*qty; a.protein += ing.protein/q*qty;
      a.carbs += ing.carbs/q*qty; a.fat += ing.fat/q*qty; return a;
    }, {kcal:0,protein:0,carbs:0,fat:0});
  }

  function sheetHTML() {
    const m = macrosNow();
    return `
      <div class="sheet-handle"></div>
      <div class="ing-editor-hd">
        <div class="ing-editor-title">${r.emoji} ${r.name}</div>
        <div class="ing-editor-macros">${Math.round(m.kcal)} kcal · ${Math.round(m.protein)}g P · ${Math.round(m.carbs)}g G · ${Math.round(m.fat)}g L</div>
      </div>
      <div class="ing-editor-list">
        ${r.ingredients.map((ing, i) => `
          <div class="ing-edit-row">
            <span class="ing-edit-name">${ing.name}</span>
            <div class="ing-edit-control">
              <button class="ing-edit-btn" data-i="${i}" data-d="-1">−</button>
              <input class="ing-edit-input" data-i="${i}" type="text" inputmode="numeric" value="${ov[i]}">
              <span class="ing-edit-unit">${ing.unit}</span>
              <button class="ing-edit-btn" data-i="${i}" data-d="1">+</button>
            </div>
          </div>`).join('')}
      </div>
      <button class="ing-editor-done">Terminé</button>`;
  }

  openSheet(sheetHTML());
  const sheet = document.getElementById('sheet');
  if (!sheet) return;

  function persist() {
    item.overrides = { ...ov };
    item.servings = 1;
    saveEntry(entry);
  }
  function refreshHead() {
    const m = macrosNow();
    const el2 = sheet.querySelector('.ing-editor-macros');
    if (el2) el2.textContent = `${Math.round(m.kcal)} kcal · ${Math.round(m.protein)}g P · ${Math.round(m.carbs)}g G · ${Math.round(m.fat)}g L`;
  }
  function step(unit) {
    // pas adapté : 1 pour les pièces, 10g sinon
    return /pi[èe]ce|unit|tranche/i.test(unit) ? 1 : 10;
  }
  function bind() {
    sheet.querySelectorAll('.ing-edit-btn').forEach(b => b.addEventListener('click', () => {
      const i = +b.dataset.i; const d = +b.dataset.d;
      const st = step(r.ingredients[i].unit);
      ov[i] = Math.max(0, Math.round(ov[i] + d*st));
      const inp = sheet.querySelector(`.ing-edit-input[data-i="${i}"]`);
      if (inp) inp.value = ov[i];
      refreshHead(); persist();
    }));
    sheet.querySelectorAll('.ing-edit-input').forEach(inp => inp.addEventListener('change', () => {
      const i = +inp.dataset.i; const v = parseFloat(inp.value.replace(',','.'));
      if (!isNaN(v) && v >= 0) ov[i] = Math.round(v);
      inp.value = ov[i]; refreshHead(); persist();
    }));
    sheet.querySelector('.ing-editor-done')?.addEventListener('click', () => { persist(); closeSheet(); renderPlanner(); });
  }
  bind();
}

function openRecipePicker(slot) {
  const cfg = SLOTS.find(s => s.key === slot);
  let allRecipes = cfg.fn();
  let query = '';

  function listHTML() {
    const filtered = allRecipes.filter(r => r.name.toLowerCase().includes(query.toLowerCase()));
    return filtered.length ? filtered.map(r => `
      <div class="sheet-recipe" data-id="${r.id}">
        <span class="sheet-r-emoji">${r.emoji}</span>
        <div class="sheet-r-info">
          <div class="sheet-r-name">${r.name}</div>
          <div class="sheet-r-meta">${r.macros.kcal} kcal · ${r.macros.protein}g P · ${r.prepTime + r.cookTime} min</div>
        </div>
        <span class="sheet-r-add">+</span>
      </div>`).join('') : '<div style="color:var(--muted);text-align:center;padding:30px">Aucun résultat</div>';
  }

  openSheet(`
    <div class="sheet-handle"></div>
    <div class="sheet-search-wrap"><input class="sheet-search" id="sheet-q" placeholder="Rechercher..." autocomplete="off"></div>
    <div class="sheet-list" id="sheet-list">${listHTML()}</div>
  `);

  const sheet = document.getElementById('sheet');
  if (!sheet) return;
  const input = sheet.querySelector('#sheet-q');
  const listEl = sheet.querySelector('#sheet-list');

  function refreshList() {
    listEl.innerHTML = listHTML();
    listEl.querySelectorAll('.sheet-recipe').forEach(row =>
      row.addEventListener('click', () => { closeSheet(); addMeal(slot, row.dataset.id); })
    );
  }

  // Re-render ONLY the list on input — the input itself is never recreated, so focus stays.
  input.addEventListener('input', e => { query = e.target.value; refreshList(); });
  refreshList();
}
