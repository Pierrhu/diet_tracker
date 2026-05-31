import { state, setState } from './state.js';
import { RECIPES }         from '../data/recipes.js';
import { el }              from './utils.js';
import { renderRecipeDetail } from './recipeDetail.js';

const FILTERS = [
  { key: 'all',    label: 'Tout'              },
  { key: 'dinner', label: 'Dîner'              },
  { key: 'lunch',  label: 'Déjeuner'           },
  { key: 'side',   label: 'Accompagnements'    },
  { key: 'sweet',  label: 'Desserts' },
];

export function renderRecipes() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const view = el('div', 'view recipes-view');

  const top = el('div', 'recipes-top');
  const search = el('input', 'search-bar');
  search.placeholder = 'Rechercher une recette…';
  search.value = state.searchQuery || '';

  const tabs = el('div', 'filter-tabs');
  FILTERS.forEach(f => {
    const btn = el('button', `tab-btn ${state.filterCategory === f.key ? 'active' : ''}`, f.label);
    btn.addEventListener('click', () => { setState({ filterCategory: f.key }); renderRecipes(); });
    tabs.appendChild(btn);
  });

  top.appendChild(search);
  top.appendChild(tabs);
  view.appendChild(top);

  const list = el('div', 'recipe-list');
  view.appendChild(list);

  function renderList(query) {
    const cat = state.filterCategory;
    const filtered = RECIPES.filter(r => {
      const matchCat = cat === 'all' || r.category === cat;
      const matchQ   = r.name.toLowerCase().includes(query.toLowerCase()) ||
                       r.tags?.some(t => t.includes(query.toLowerCase()));
      return matchCat && matchQ;
    });

    list.innerHTML = filtered.length ? filtered.map(r => `
      <div class="recipe-card" data-id="${r.id}">
        <div class="rc-emoji">${r.emoji}</div>
        <div class="rc-info">
          <div class="rc-name">${r.name}</div>
          <div class="rc-meta">
            <span class="rc-protein">${r.macros.protein}g P</span>
            <span>${r.macros.kcal} kcal</span>
            <span>${r.prepTime + r.cookTime} min</span>
          </div>
          ${r.batch ? '<span class="rc-batch">batch</span>' : ''}
        </div>
        <span class="rc-arrow">›</span>
      </div>`).join('') : '<div class="no-results">Aucune recette trouvée.</div>';

    list.querySelectorAll('.recipe-card').forEach(card => {
      card.addEventListener('click', () => {
        const recipe = RECIPES.find(r => r.id === card.dataset.id);
        if (recipe) renderRecipeDetail(recipe, 'recipes');
      });
    });
  }

  renderList(state.searchQuery || '');
  search.addEventListener('input', e => { setState({ searchQuery: e.target.value }); renderList(e.target.value); });

  app.insertBefore(view, app.querySelector('#nav'));
}
