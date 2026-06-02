import { state, setState } from './state.js';
import { renderNav }       from './nav.js';
import { renderWeek }      from './week.js';
import { renderPlanner }   from './planner.js';
import { renderMacros }    from './macros.js';
import { renderRecipes }   from './recipes.js';
import { renderShopping }  from './shopping.js';
import { renderHistory }   from './history.js';
import { renderSettings }  from './settings.js';
import { renderBatch }     from './batch.js';

const VIEWS = {
  week:     renderWeek,
  planner:  renderPlanner,
  macros:   renderMacros,
  recipes:  renderRecipes,
  shopping: renderShopping,
  history:  renderHistory,
  settings: renderSettings,
  batch:    renderBatch,
};

function navigate(view) { setState({ currentView: view }); render(); }

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  (VIEWS[state.currentView] || renderWeek)();
  renderNav();
}

window._nav = navigate;
document.addEventListener('DOMContentLoaded', render);
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
