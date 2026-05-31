// settings.js — Profil + choix de programme (Zero to Hero) + objectifs
import { getTargets, saveTargets } from '../data/user.js';
import {
  PROTOCOLS, computeBase, computeTargets, computeAllPhases,
  getProfile, saveProfile, getSelectedProtocol, saveSelectedProtocol,
  getSelectedPhase, saveSelectedPhase,
} from '../data/calculator.js';
import { el } from './utils.js';

export function renderSettings() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  let profile    = getProfile();
  let protocolId = getSelectedProtocol();
  let phaseIdx   = getSelectedPhase();

  const view = el('div', 'view settings-view');
  app.insertBefore(view, app.querySelector('#nav'));

  const applyComputed = () => saveTargets(computeTargets(profile, protocolId, phaseIdx));

  function render() {
    const base     = computeBase(profile);
    const phases   = computeAllPhases(profile, protocolId);
    const protocol = PROTOCOLS.find(p => p.id === protocolId);
    phaseIdx = Math.min(phaseIdx, protocol.phases.length - 1);
    const active   = phases[phaseIdx];
    const current  = getTargets();
    const isComputed = !localStorage.getItem('diet_targets') ||
      JSON.stringify(current) === JSON.stringify(computeTargets(profile, protocolId, phaseIdx));

    view.innerHTML = `
      <div class="set-hero">
        <div class="set-hero-label">Maintenance estimée</div>
        <div class="set-hero-kcal">${Math.round(base.maintenance)}<span>kcal/jour</span></div>
        <div class="set-hero-meta">
          <span>BMR ${Math.round(base.bmr)}</span>
          <span class="dot">·</span>
          <span>Masse maigre ${base.leanMass.toFixed(1)} kg</span>
        </div>
      </div>

      <!-- PROFIL -->
      <div class="set-section">
        <div class="set-section-head">Mes informations</div>
        <div class="profile-grid">
          ${pcell('age',     'Âge',          profile.age,     'ans', 1)}
          ${pcell('height',  'Taille',       profile.height,  'm',   0.01)}
          ${pcell('weight',  'Poids',        profile.weight,  'kg',  0.5)}
          ${pcell('bodyfat', 'Masse grasse', profile.bodyfat, '%',   1)}
        </div>
      </div>

      <!-- PROTOCOLE -->
      <div class="set-section">
        <div class="set-section-head">Choix du programme</div>
        <div class="protocol-grid">
          ${PROTOCOLS.map(p => {
            const range = phaseRange(profile, p.id);
            return `
            <button class="proto-card ${p.id === protocolId ? 'active' : ''}" data-pid="${p.id}">
              <div class="proto-emoji">${p.emoji}</div>
              <div class="proto-name">${p.name}</div>
              <div class="proto-tagline">${p.tagline}</div>
              <div class="proto-range">${range}</div>
              <div class="proto-check">✓</div>
            </button>`;
          }).join('')}
        </div>
        <div class="proto-desc-box">${protocol.emoji} ${protocol.desc}</div>
      </div>

      <!-- PHASES -->
      <div class="set-section">
        <div class="set-section-head">Progression du programme</div>
        <div class="phase-stepper">
          ${phases.map((ph, i) => `
            <button class="phase-step ${i === phaseIdx ? 'active' : ''} ${i < phaseIdx ? 'done' : ''}" data-phase="${i}">
              <div class="ps-dot">${i + 1}</div>
              <div class="ps-label">${ph.label}</div>
              <div class="ps-kcal">${ph.targets.kcal} kcal</div>
            </button>
          `).join('')}
        </div>

        <div class="target-card">
          <div class="tc-kcal">${active.targets.kcal}<span> kcal/jour</span></div>
          <div class="tc-week">≈ ${(active.targets.kcal * 7).toLocaleString('fr-FR')} kcal / semaine</div>
          <div class="tc-macros">
            <div class="tcm protein"><div class="tcm-bar"></div><strong>${active.targets.protein}g</strong><span>Protéines</span></div>
            <div class="tcm carbs"><div class="tcm-bar"></div><strong>${active.targets.carbs}g</strong><span>Glucides</span></div>
            <div class="tcm fat"><div class="tcm-bar"></div><strong>${active.targets.fat}g</strong><span>Lipides</span></div>
          </div>
        </div>

        <div class="phase-guide">
          <div class="pg-row"><span class="pg-ic">🎬</span><div><div class="pg-title">Cette phase</div><div class="pg-text">${protocol.phases[phaseIdx].advice}</div></div></div>
          <div class="pg-row"><span class="pg-ic">⏭️</span><div><div class="pg-title">Quand passer à la suite</div><div class="pg-text">${protocol.phases[phaseIdx].advance}</div></div></div>
        </div>

        <button class="apply-btn ${isComputed ? 'is-active' : ''}">
          ${isComputed ? '✓ Programme appliqué' : 'Appliquer ce programme'}
        </button>
      </div>

      <!-- MANUEL -->
      <details class="set-manual">
        <summary>Ajuster les objectifs à la main</summary>
        <div class="manual-body">
          ${mrow('kcal',    'Calories',  current.kcal,    'kcal', 50)}
          ${mrow('protein', 'Protéines', current.protein, 'g',    5)}
          ${mrow('carbs',   'Glucides',  current.carbs,   'g',    5)}
          ${mrow('fat',     'Lipides',   current.fat,     'g',    5)}
          <div class="weekly-readout"><span>Objectif hebdomadaire</span><strong>${(current.kcal*7).toLocaleString('fr-FR')} kcal</strong></div>
        </div>
      </details>
    `;
    bind();
  }

  function phaseRange(prof, pid) {
    const ph = computeAllPhases(prof, pid);
    if (ph.length === 1) return `${ph[0].targets.kcal} kcal`;
    const kcals = ph.map(p => p.targets.kcal);
    return `${Math.max(...kcals)} → ${Math.min(...kcals)} kcal`;
  }

  function bind() {
    view.querySelectorAll('.pcell-btn').forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.key, d = parseFloat(b.dataset.delta);
      profile[k] = Math.max(0, Math.round((profile[k] + d) * 100) / 100);
      saveProfile(profile); applyComputed(); render();
    }));
    view.querySelectorAll('.pcell-input').forEach(inp => inp.addEventListener('change', () => {
      const v = parseFloat(inp.value.replace(',', '.'));
      if (!isNaN(v) && v >= 0) { profile[inp.dataset.key] = v; saveProfile(profile); applyComputed(); }
      render();
    }));
    view.querySelectorAll('.proto-card').forEach(b => b.addEventListener('click', () => {
      protocolId = b.dataset.pid; phaseIdx = 0;
      saveSelectedProtocol(protocolId); saveSelectedPhase(0); applyComputed(); render();
    }));
    view.querySelectorAll('.phase-step').forEach(b => b.addEventListener('click', () => {
      phaseIdx = parseInt(b.dataset.phase); saveSelectedPhase(phaseIdx); applyComputed(); render();
    }));
    view.querySelector('.apply-btn')?.addEventListener('click', () => { applyComputed(); render(); });
    view.querySelectorAll('.mrow-btn').forEach(b => b.addEventListener('click', () => {
      const t = getTargets(); t[b.dataset.key] = Math.max(0, t[b.dataset.key] + parseInt(b.dataset.delta));
      saveTargets(t); render();
    }));
    view.querySelectorAll('.mrow-input').forEach(inp => inp.addEventListener('change', () => {
      const t = getTargets(); const v = parseInt(inp.value);
      if (!isNaN(v) && v >= 0) { t[inp.dataset.key] = v; saveTargets(t); }
      render();
    }));
  }

  function pcell(key, label, value, unit, step) {
    return `
      <div class="profile-cell">
        <div class="pc-label">${label}</div>
        <div class="pc-control">
          <button class="pcell-btn" data-key="${key}" data-delta="-${step}">−</button>
          <div class="pc-value"><input class="pcell-input" type="text" inputmode="decimal" data-key="${key}" value="${value}"><span class="pc-unit">${unit}</span></div>
          <button class="pcell-btn" data-key="${key}" data-delta="${step}">+</button>
        </div>
      </div>`;
  }
  function mrow(key, label, value, unit, step) {
    return `
      <div class="settings-field">
        <span class="field-label">${label}</span>
        <div class="field-control">
          <button class="mrow-btn" data-key="${key}" data-delta="-${step}">−</button>
          <input class="mrow-input" type="text" inputmode="decimal" data-key="${key}" value="${value}">
          <span class="field-unit">${unit}</span>
          <button class="mrow-btn" data-key="${key}" data-delta="${step}">+</button>
        </div>
      </div>`;
  }

  render();
}
