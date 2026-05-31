# DIET

Application PWA de planification nutritionnelle & suivi des macros.

## Fonctionnalités

- **Semaine** — planifie le menu de toute une semaine (cette semaine / semaine prochaine), jour par jour. C'est le cœur de l'app : tu fais ton menu le dimanche, tu génères la liste de courses dans la foulée.
- **Jour** — éditeur d'une journée : ajoute des plats par créneau (déjeuner / dîner / accompagnement / dessert), ajuste les **portions** de chaque plat, alerte visuelle si la **limite calorique est dépassée**.
- **Macros** — totaux du jour vs objectifs, avec indicateurs de dépassement.
- **Recettes** — catalogue de 66 recettes (20 dîners · 20 déjeuners · 10 accompagnements · 16 desserts/encas). Chaque recette est ajustable en portions : les ingrédients et les calories se recalculent en direct.
- **Courses** — liste générée depuis la semaine planifiée (ou les N derniers jours), quantités multipliées par les portions, regroupées par rayon, cases à cocher.

## Structure

```
DIET/
├── index.html
├── styles.css
├── manifest.json
├── sw.js
│
├── data/
│   ├── recipes.js      # 66 recettes + macros
│   ├── user.js         # profil & objectifs
│   └── log.js          # journal + planning hebdo (localStorage)
│
└── js/
    ├── app.js          # BUNDLE auto-généré (utilisé par index.html)
    ├── main.js         # routing
    ├── state.js        # état + jour sélectionné
    ├── nav.js          # navigation
    ├── week.js         # planning hebdomadaire
    ├── planner.js      # éditeur d'un jour + portions
    ├── macros.js       # suivi macros
    ├── recipes.js      # catalogue
    ├── recipeDetail.js # détail + ajustement portions
    ├── shopping.js     # liste de courses
    ├── history.js      # historique
    └── utils.js        # helpers
```

## Modèle de données

Un repas est `{ id: 'D01', servings: 1 }` — `servings` multiplie les macros et les ingrédients.

## Lancer

Ouvre `index.html` directement (le bundle `js/app.js` ne nécessite pas de serveur),
ou pour le dev avec modules : `npx serve .`

## Build du bundle

Après modification des fichiers `js/*.js`, régénère `js/app.js` (concaténation sans imports/exports).

## Déploiement

GitHub Pages / Netlify / Vercel — statique, aucune dépendance serveur.
