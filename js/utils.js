import { getById } from '../data/recipes.js';

export function el(tag, cls = '', html = '') {
  const node = document.createElement(tag);
  if (cls)  node.className = cls;
  if (html) node.innerHTML = html;
  return node;
}

export function formatDate(isoDate) {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long',
  });
}

export function formatDateShort(isoDate) {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString('fr-FR', {
    weekday: 'short', day: 'numeric',
  });
}

export function mbar(value, target, color) {
  const pct = Math.min((value / target) * 100, 100).toFixed(1);
  const over = value > target;
  return `<div class="mbar-wrap"><div class="mbar ${over ? 'over' : ''}" style="width:${pct}%;background:${over ? 'var(--danger)' : color}"></div></div>`;
}

// Macros d'une recette × servings, arrondis
export function scaledMacros(recipe, servings = 1) {
  return {
    kcal:    Math.round(recipe.macros.kcal    * servings),
    protein: Math.round(recipe.macros.protein * servings),
    carbs:   Math.round(recipe.macros.carbs   * servings),
    fat:     Math.round(recipe.macros.fat     * servings),
  };
}

// Total d'un jour : meals = { slot: [{id, servings}] }
export function computeDayMacros(entry) {
  const slots = ['lunch', 'dinner', 'sides', 'sweet'];
  return slots.reduce((acc, slot) => {
    (entry.meals[slot] || []).forEach(item => {
      const r = getById(item.id);
      if (!r) return;
      const s = item.servings || 1;
      acc.kcal    += r.macros.kcal    * s;
      acc.protein += r.macros.protein * s;
      acc.carbs   += r.macros.carbs   * s;
      acc.fat     += r.macros.fat     * s;
    });
    return acc;
  }, { kcal: 0, protein: 0, carbs: 0, fat: 0 });
}

export function openSheet(html, onClose) {
  const overlay = el('div', 'overlay');
  overlay.innerHTML = `<div class="sheet" id="sheet">${html}</div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSheet(); });
  if (onClose) overlay._onClose = onClose;
}

export function closeSheet() {
  const o = document.querySelector('.overlay');
  if (o) { o._onClose?.(); o.remove(); }
}
