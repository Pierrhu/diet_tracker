// batch.js — Page "Recettes de la semaine" : fiches détaillées de tous les plats à cuisiner,
// avec les quantités totales (toutes portions de la semaine cumulées) + les étapes.

import { getNextWeekDates, getEntry } from '../data/log.js';
import { getById } from '../data/recipes.js';
import { el } from './utils.js';

// Estime le temps de conservation d'une recette (frigo + éventuellement congélo).
function conservation(r) {
  const tags = r.tags || [];
  const n = r.name.toLowerCase();
  const txt = (r.steps || []).join(' ').toLowerCase();
  // Poisson cru / cuit : courte conservation
  if (/saumon|thon frais|poisson cru|poke|tartare|sashimi/.test(n)) return { fridge: '1 jour', freezer: null };
  if (/poisson|colin|merlu|cabillaud|crevette|saumon/.test(n)) return { fridge: '2 jours', freezer: '1 mois' };
  // Salades crues / crudités : 1-2 jours
  if (tags.includes('salade') || /crudités|salade verte|carpaccio/.test(n)) return { fridge: '1-2 jours', freezer: null };
  // Soupes / veloutés : bien au frigo, congèlent très bien
  if (tags.includes('soupe') || /velouté|soupe|gaspacho/.test(n)) return { fridge: '4-5 jours', freezer: '2 mois' };
  // Desserts laitiers (fromage blanc, skyr…) : 2-3 jours, pas de congélo (sauf glacés)
  if (tags.includes('congelé') || /glac|nice cream|frozen/.test(n)) return { fridge: '—', freezer: '1 mois (congelé)' };
  if (r.category === 'sweet' && /fromage blanc|skyr|yaourt|mousse|tiramisu|cheesecake|pudding/.test(n)) return { fridge: '2-3 jours', freezer: null };
  // Mijotés / plats en sauce / currys : 3-4 jours, congèlent bien
  if (/curry|mijot|tajine|chili|dal|mafé|stroganoff|bolognaise|sauce/.test(n + txt)) return { fridge: '3-4 jours', freezer: '2 mois' };
  // Viandes cuites, bowls, gratins : 3 jours
  if (/poulet|boeuf|dinde|steak|porc|gratin|boulettes|bowl/.test(n)) return { fridge: '3 jours', freezer: '1-2 mois' };
  // Féculents / légumineuses cuits : 3-4 jours
  if (/riz|pâtes|quinoa|lentilles|pois chiches|boulghour/.test(n)) return { fridge: '3-4 jours', freezer: '2 mois' };
  // Gâteaux / crumbles / energy balls : plusieurs jours
  if (/crumble|gâteau|brownie|galettes|energy balls|cookie|muffin/.test(n)) return { fridge: '4-5 jours', freezer: '1 mois' };
  // défaut raisonnable
  return { fridge: '3 jours', freezer: null };
}


export function renderBatch() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const dates = getNextWeekDates();

  // Recenser les recettes uniques à cuisiner + portions cumulées sur la semaine.
  // counts[id] = { mult } où mult = somme des portions (servings) sur la semaine.
  // Pour les plats optimisés (overrides), on cumule les quantités par ingrédient.
  const agg = {}; // id → { portions, ingTotals: {idx: grams} | null }
  dates.forEach(d => {
    const e = getEntry(d);
    ['starter','lunch','dinner','sides','sweet'].forEach(slot => {
      (e.meals[slot] || []).forEach(it => {
        const r = getById(it.id);
        if (!r) return;
        if ((r.tags || []).includes('cantine')) return;
        // On ne garde que ce qui vaut la peine d'être batch-cooké :
        // plats et desserts qui demandent une vraie cuisson/préparation.
        // On exclut les assemblages rapides (sans cuisson ET courts), qui se font sur le moment.
        const cookTime = r.cookTime || 0;
        const totalTime = (r.prepTime || 0) + cookTime;
        const isQuickAssembly = cookTime === 0 && totalTime <= 8;
        const taggedNoCookSnack = (r.tags || []).includes('0-cuisson') && r.category === 'sweet' && totalTime <= 8;
        if (isQuickAssembly || taggedNoCookSnack) return; // trop rapide → pas dans le batch
        if (!agg[it.id]) agg[it.id] = { portions: 0, ingTotals: {} };
        const a = agg[it.id];
        if (it.overrides) {
          // quantités absolues en grammes
          Object.entries(it.overrides).forEach(([idx, g]) => {
            a.ingTotals[idx] = (a.ingTotals[idx] || 0) + g;
          });
          a.portions += 1;
        } else {
          const s = it.servings || 1;
          r.ingredients.forEach((ing, idx) => {
            a.ingTotals[idx] = (a.ingTotals[idx] || 0) + ing.qty * s;
          });
          a.portions += s;
        }
      });
    });
  });

  const ids = Object.keys(agg);
  // État "cuisiné" mémorisé pour la semaine (clé = première date du plan).
  const cookedKey = 'hebe_cooked_' + (dates[0] || 'x');
  let cooked = JSON.parse(localStorage.getItem(cookedKey) || '[]');
  const view = el('div', 'view batch-view');

  if (!ids.length) {
    view.innerHTML = `
      <div class="batch-header"><button class="batch-back">‹ Semaine</button><div class="page-title">Recettes de la semaine</div></div>
      <div class="batch-empty">Génère d'abord ton menu de la semaine, puis reviens ici pour les fiches recettes.</div>`;
    app.insertBefore(view, app.querySelector('#nav'));
    view.querySelector('.batch-back').addEventListener('click', () => window._nav?.('week'));
    return;
  }

  // Trier : plats d'abord (dinner/lunch), puis entrées, accompagnements, desserts
  const order = { lunch: 0, dinner: 0, starter: 1, side: 2, sweet: 3 };
  ids.sort((a, b) => (order[getById(a).category] ?? 9) - (order[getById(b).category] ?? 9));

  view.innerHTML = `
    <div class="batch-header"><button class="batch-back">‹ Semaine</button><div class="page-title">Recettes de la semaine</div></div>
    <div class="batch-intro">${ids.length} préparations · glisse pour naviguer</div>
    <div class="bc-progress">
      <span class="bc-counter"><span class="bc-cur">1</span> / ${ids.length}</span>
      <div class="bc-dots">${ids.map((_,i)=>`<span class="bc-dot ${i===0?'on':''}"></span>`).join('')}</div>
    </div>
    <div class="bc-slider">
      <div class="bc-track">
      ${ids.map(id => {
        const r = getById(id);
        const a = agg[id];
        const portionLabel = a.portions >= 2 ? `${Math.round(a.portions)} portions` : '1 portion';
        return `
          <div class="bc-slide">
          <div class="bc-recipe" data-rid="${id}">
            <div class="bc-recipe-hd">
              <span class="bc-emoji">${r.emoji}</span>
              <div class="bc-hd-text">
                <div class="bc-name">${r.name}</div>
                <div class="bc-meta">${portionLabel} · ${(r.prepTime||0)+(r.cookTime||0)} min</div>
              </div>
              <button class="bc-done-btn ${cooked.includes(id) ? 'on' : ''}" data-rid="${id}" aria-label="Marquer comme cuisiné">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </button>
            </div>
            ${(() => { const cons = conservation(r); return `
            <div class="bc-conserv">
              <span class="bc-conserv-item"><span class="bc-conserv-ic">❄</span> Frigo : <strong>${cons.fridge}</strong></span>
              ${cons.freezer ? `<span class="bc-conserv-item"><span class="bc-conserv-ic">🧊</span> Congélo : <strong>${cons.freezer}</strong></span>` : ''}
            </div>`; })()}
            <div class="bc-block-title">Ingrédients (total semaine)</div>
            <div class="bc-ings">
              ${r.ingredients.map((ing, idx) => {
                const g = Math.round(a.ingTotals[idx] || 0);
                return `<div class="bc-ing"><span>${ing.name}</span><span class="bc-ing-q">${g} ${ing.unit}</span></div>`;
              }).join('')}
            </div>
            <div class="bc-block-title">Préparation</div>
            <div class="bc-steps">
              ${r.steps.map((s, i) => `<div class="bc-step"><span class="bc-step-n">${i+1}</span><span>${s}</span></div>`).join('')}
            </div>
            ${r.tip ? `<div class="bc-tip">${r.tip}</div>` : ''}
          </div>
          </div>`;
      }).join('')}
      </div>
    </div>
    <div class="bc-nav">
      <button class="bc-arrow bc-prev" aria-label="Précédent">‹</button>
      <button class="bc-arrow bc-next" aria-label="Suivant">›</button>
    </div>
  `;

  app.insertBefore(view, app.querySelector('#nav'));
  view.querySelector('.batch-back').addEventListener('click', () => window._nav?.('week'));

  // ── Slider logic : swipe tactile + flèches + points ──
  const track = view.querySelector('.bc-track');
  const slides = view.querySelectorAll('.bc-slide');
  const dots = view.querySelectorAll('.bc-dot');
  const curEl = view.querySelector('.bc-cur');
  let idx = 0;
  const total = slides.length;

  function go(n) {
    idx = Math.max(0, Math.min(total - 1, n));
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('on', i === idx));
    curEl.textContent = idx + 1;
    view.querySelector('.bc-prev').disabled = idx === 0;
    view.querySelector('.bc-next').disabled = idx === total - 1;
  }
  view.querySelector('.bc-prev').addEventListener('click', () => go(idx - 1));
  view.querySelector('.bc-next').addEventListener('click', () => go(idx + 1));

  // swipe
  let startX = 0, dx = 0, dragging = false;
  const slider = view.querySelector('.bc-slider');
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
  slider.addEventListener('touchmove', e => { if (dragging) dx = e.touches[0].clientX - startX; }, { passive: true });
  slider.addEventListener('touchend', () => {
    if (!dragging) return; dragging = false;
    if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1));
    dx = 0;
  });
  go(0);

  // Toggle "cuisiné" sur chaque fiche
  view.querySelectorAll('.bc-done-btn').forEach(btn => btn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    const rid = btn.dataset.rid;
    const i = cooked.indexOf(rid);
    if (i > -1) cooked.splice(i, 1); else cooked.push(rid);
    localStorage.setItem(cookedKey, JSON.stringify(cooked));
    btn.classList.toggle('on');
    btn.closest('.bc-recipe').classList.toggle('cooked', cooked.includes(rid));
  }));
  // état initial visuel
  view.querySelectorAll('.bc-recipe').forEach(rc => {
    if (cooked.includes(rc.dataset.rid)) rc.classList.add('cooked');
  });
}
