// recipeDetail.js — Détail recette avec ajustement des portions
// Le sélecteur de portions recalcule ingrédients ET macros en direct.

import { currentEntry, setState } from './state.js';
import { saveEntry }              from '../data/log.js';
import { el, scaledMacros }       from './utils.js';

export function renderRecipeDetail(recipe, fromView = 'recipes') {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  let servings = 1;
  const view = el('div', 'view detail-view');
  app.insertBefore(view, app.querySelector('#nav'));

  function render() {
    const m = scaledMacros(recipe, servings);

    view.innerHTML = `
      <button class="detail-back">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Retour
      </button>

      <div class="detail-hero">
        <div class="detail-emoji">${recipe.emoji}</div>
        <div class="detail-name">${recipe.name}</div>
        <div class="detail-meta">
          <span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${recipe.prepTime + recipe.cookTime} min</span>
          ${recipe.batch ? '<span class="detail-batch-tag">📦 Batch friendly</span>' : ''}
        </div>
      </div>

      <div class="serv-selector">
        <span class="serv-sel-label">Portions</span>
        <div class="serv-sel-control">
          <button class="serv-sel-btn" data-delta="-0.5">−</button>
          <span class="serv-sel-val">${servings}</span>
          <button class="serv-sel-btn" data-delta="0.5">+</button>
        </div>
      </div>

      <div class="macro-grid">
        <div class="macro-cell kcal"><div class="macro-cell-val">${m.kcal}</div><div class="macro-cell-label">kcal</div></div>
        <div class="macro-cell protein"><div class="macro-cell-val">${m.protein}g</div><div class="macro-cell-label">Protéines</div></div>
        <div class="macro-cell carbs"><div class="macro-cell-val">${m.carbs}g</div><div class="macro-cell-label">Glucides</div></div>
        <div class="macro-cell fat"><div class="macro-cell-val">${m.fat}g</div><div class="macro-cell-label">Lipides</div></div>
      </div>

      <div class="detail-section">
        <div class="detail-section-title">Ingrédients ${servings !== 1 ? `(×${servings})` : ''}</div>
        ${recipe.ingredients.map(ing => {
          const q = Math.round(ing.qty * servings * 10) / 10;
          return `<div class="ingredient-row"><span class="ing-name">${ing.name}</span><span class="ing-qty">${q} ${ing.unit}</span></div>`;
        }).join('')}
      </div>

      <div class="detail-section">
        <div class="detail-section-title">Préparation</div>
        ${recipe.steps.map((s, i) => `<div class="step-row"><div class="step-num">${i+1}</div><div class="step-text">${s}</div></div>`).join('')}
      </div>

      ${recipe.tip ? `<div class="detail-section"><div class="tip-box"><div class="tip-label">💡 Conseil</div>${recipe.tip}</div></div>` : ''}

      <div class="add-actions">
        <div class="section-hd" style="padding:8px 0">Ajouter au menu du jour sélectionné</div>
      </div>
    `;

    // Add-to-meal buttons
    const SLOT_MAP = {
      dinner: { label: 'au dîner',          emoji: '🍽️' },
      lunch:  { label: 'au déjeuner',        emoji: '🥗' },
      sides:  { label: 'en accompagnement',  emoji: '🥦' },
      sweet:  { label: 'en dessert / encas', emoji: '🍫' },
    };
    const category = recipe.category === 'side' ? 'sides' : recipe.category;
    const slots = category === 'sweet' ? ['sweet']
                : category === 'sides' ? ['sides']
                : [category, 'sides'];

    const actions = view.querySelector('.add-actions');
    slots.forEach(slot => {
      const cfg = SLOT_MAP[slot];
      const btn = el('button', 'add-action-btn',
        `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>${cfg.emoji} Ajouter ${cfg.label} (×${servings})`);
      btn.addEventListener('click', () => {
        const entry = currentEntry();
        if (!entry.meals[slot]) entry.meals[slot] = [];
        entry.meals[slot].push({ id: recipe.id, servings });
        saveEntry(entry);
        window._nav?.('planner');
      });
      actions.appendChild(btn);
    });

    // Events
    view.querySelector('.detail-back').addEventListener('click', () => window._nav?.(fromView));
    view.querySelectorAll('.serv-sel-btn').forEach(b =>
      b.addEventListener('click', () => {
        servings = Math.max(0.5, Math.round((servings + parseFloat(b.dataset.delta)) * 2) / 2);
        render();
      })
    );
  }

  render();
}
