// sw.js — Service Worker (PWA offline support)

const CACHE = 'diet-v7';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/js/main.js',
  '/js/state.js',
  '/js/nav.js',
  '/js/planner.js',
  '/js/macros.js',
  '/js/recipes.js',
  '/js/recipeDetail.js',
  '/js/shopping.js',
  '/js/history.js',
  '/js/week.js',
  '/js/settings.js',
  '/js/utils.js',
  '/data/recipes.js',
  '/data/user.js',
  '/data/log.js',
  '/data/calculator.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
