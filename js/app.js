// DIET — bundled app (généré par build.js)
// 2026-06-04T21:00:06.123Z


// ──────────────────────────────────────────────
// data/recipes.js
// ──────────────────────────────────────────────
// recipes.js — Base simple & rapide · poêle/air fryer · pensée batch cooking + assemblages
// Macros par portion (1 personne). Ajustables dans l'app.

const RECIPES = [
  {"id": "D01", "name": "Poulet teriyaki express & riz", "category": "dinner", "emoji": "🍗", "prepTime": 5, "cookTime": 15, "batch": true, "macros": {"kcal": 551, "protein": 52, "carbs": 70, "fat": 7}, "ingredients": [{"name": "Blanc de poulet", "qty": 180, "unit": "g", "kcal": 198, "protein": 42, "carbs": 0, "fat": 3}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Miel", "qty": 10, "unit": "g", "kcal": 30, "protein": 0, "carbs": 8, "fat": 0}, {"name": "Brocoli", "qty": 120, "unit": "g", "kcal": 41, "protein": 3, "carbs": 7, "fat": 0.5}, {"name": "Sésame", "qty": 5, "unit": "g", "kcal": 29, "protein": 1, "carbs": 1, "fat": 2.5}], "steps": ["Cuire le riz (12 min).", "Couper le poulet en lamelles, saisir à la poêle 6-7 min.", "Ajouter soja + miel, laisser glacer 2 min.", "Brocoli vapeur ou poêle, sésame dessus."], "tip": "Le classique rapide qui marche toujours. Double les quantités, ça se garde 3 jours.", "tags": ["asiatique", "rapide", "high-protein", "batch"]},
  {"id": "D02", "name": "Saumon air fryer & patate douce", "category": "dinner", "emoji": "🐟", "prepTime": 5, "cookTime": 18, "batch": true, "macros": {"kcal": 593, "protein": 39, "carbs": 48, "fat": 28}, "ingredients": [{"name": "Saumon", "qty": 160, "unit": "g", "kcal": 333, "protein": 33, "carbs": 0, "fat": 22}, {"name": "Patate douce", "qty": 200, "unit": "g", "kcal": 172, "protein": 3, "carbs": 40, "fat": 0.3}, {"name": "Brocoli", "qty": 120, "unit": "g", "kcal": 41, "protein": 3, "carbs": 7, "fat": 0.5}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}, {"name": "Citron (jus)", "qty": 10, "unit": "ml", "kcal": 2, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Patate douce en cubes, air fryer 180°C 15 min.", "Saumon à l'air fryer 8 min (ajouté à mi-cuisson).", "Brocoli poêle ou vapeur.", "Filet de citron + huile."], "tip": "Zéro surveillance, tout à l'air fryer. Saumon riche en oméga-3.", "tags": ["air fryer", "poisson", "oméga-3", "batch"]},
  {"id": "D03", "name": "Boeuf haché poêlé, riz & poivrons", "category": "dinner", "emoji": "🥩", "prepTime": 5, "cookTime": 12, "batch": true, "macros": {"kcal": 578, "protein": 39, "carbs": 64, "fat": 17}, "ingredients": [{"name": "Steak haché 5%", "qty": 150, "unit": "g", "kcal": 233, "protein": 31, "carbs": 0, "fat": 11}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Poivron", "qty": 120, "unit": "g", "kcal": 30, "protein": 1, "carbs": 6, "fat": 0.3}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}, {"name": "Sauce soja", "qty": 10, "unit": "ml", "kcal": 5, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}], "steps": ["Riz à cuire.", "Poêle : oignon + poivron 4 min.", "Ajouter le boeuf, cuire 6 min.", "Déglacer au soja, servir sur le riz."], "tip": "Base parfaite pour le batch : se réchauffe très bien. Varie les épices.", "tags": ["rapide", "high-protein", "batch"]},
  {"id": "D04", "name": "Crevettes ail-citron & nouilles", "category": "dinner", "emoji": "🦐", "prepTime": 5, "cookTime": 10, "batch": true, "macros": {"kcal": 521, "protein": 41, "carbs": 63, "fat": 11}, "ingredients": [{"name": "Crevettes décortiquées", "qty": 180, "unit": "g", "kcal": 171, "protein": 36, "carbs": 2, "fat": 2}, {"name": "Nouilles de riz", "qty": 70, "unit": "g", "kcal": 250, "protein": 4, "carbs": 55, "fat": 0.5}, {"name": "Ail", "qty": 2, "unit": "gousses", "kcal": 8, "protein": 0, "carbs": 2, "fat": 0}, {"name": "Huile d'olive", "qty": 8, "unit": "g", "kcal": 72, "protein": 0, "carbs": 0, "fat": 8}, {"name": "Citron (jus)", "qty": 15, "unit": "ml", "kcal": 3, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Courgettes", "qty": 100, "unit": "g", "kcal": 17, "protein": 1, "carbs": 3, "fat": 0.3}], "steps": ["Nouilles selon paquet.", "Poêle chaude : ail + huile, crevettes 3-4 min.", "Courgettes en rubans, 2 min.", "Citron, mélanger aux nouilles."], "tip": "Prêt en 10 min chrono. Les crevettes se cuisent au dernier moment idéalement.", "tags": ["rapide", "fruits de mer", "high-protein"]},
  {"id": "D05", "name": "Poulet fajitas poêle & tortilla", "category": "dinner", "emoji": "🌮", "prepTime": 6, "cookTime": 12, "batch": true, "macros": {"kcal": 531, "protein": 50, "carbs": 51, "fat": 14}, "ingredients": [{"name": "Blanc de poulet", "qty": 170, "unit": "g", "kcal": 187, "protein": 40, "carbs": 0, "fat": 3}, {"name": "Poivron", "qty": 120, "unit": "g", "kcal": 30, "protein": 1, "carbs": 6, "fat": 0.3}, {"name": "Oignon", "qty": 60, "unit": "g", "kcal": 24, "protein": 1, "carbs": 5, "fat": 0}, {"name": "Tortillas blé complètes", "qty": 80, "unit": "g", "kcal": 230, "protein": 7, "carbs": 38, "fat": 5}, {"name": "Épices fajitas", "qty": 5, "unit": "g", "kcal": 15, "protein": 1, "carbs": 2, "fat": 0.3}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}], "steps": ["Poulet en lamelles + épices.", "Poêle bien chaude : poulet 6 min.", "Ajouter poivron + oignon, 4 min.", "Servir dans les tortillas."], "tip": "Le batch : prépare la garniture, réchauffe et garnis les tortillas dans la semaine.", "tags": ["mexicain", "rapide", "high-protein", "batch"]},
  {"id": "D06", "name": "Boulettes de boeuf air fryer & purée", "category": "dinner", "emoji": "🍖", "prepTime": 10, "cookTime": 15, "batch": true, "macros": {"kcal": 565, "protein": 44, "carbs": 54, "fat": 17}, "ingredients": [{"name": "Steak haché 5%", "qty": 150, "unit": "g", "kcal": 233, "protein": 31, "carbs": 0, "fat": 11}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Chapelure", "qty": 20, "unit": "g", "kcal": 73, "protein": 2, "carbs": 15, "fat": 0.5}, {"name": "Pommes de terre", "qty": 200, "unit": "g", "kcal": 154, "protein": 4, "carbs": 34, "fat": 0.2}, {"name": "Oignon", "qty": 40, "unit": "g", "kcal": 16, "protein": 0, "carbs": 4, "fat": 0}, {"name": "Lait écrémé", "qty": 30, "unit": "ml", "kcal": 11, "protein": 1, "carbs": 1.5, "fat": 0}], "steps": ["Mélanger boeuf + oeuf + chapelure + oignon, former les boulettes.", "Air fryer 180°C 12-14 min.", "Purée : pommes de terre cuites écrasées + lait.", "Servir ensemble."], "tip": "Fais une grosse fournée de boulettes : top à réchauffer toute la semaine.", "tags": ["air fryer", "comfort", "batch", "high-protein"]},
  {"id": "D07", "name": "Poulet pané air fryer & frites maison", "category": "dinner", "emoji": "🍗", "prepTime": 8, "cookTime": 18, "batch": true, "macros": {"kcal": 564, "protein": 53, "carbs": 52, "fat": 15}, "ingredients": [{"name": "Blanc de poulet", "qty": 170, "unit": "g", "kcal": 187, "protein": 40, "carbs": 0, "fat": 3}, {"name": "Chapelure", "qty": 25, "unit": "g", "kcal": 91, "protein": 3, "carbs": 18, "fat": 0.6}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Pommes de terre", "qty": 200, "unit": "g", "kcal": 154, "protein": 4, "carbs": 34, "fat": 0.2}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Pommes de terre en frites, air fryer 180°C 18 min.", "Poulet pané (oeuf puis chapelure).", "Air fryer 180°C 12 min (ajouté en cours).", "Saler léger."], "tip": "Le 'cheat meal' sain : pané et frites à l'air fryer, sans friture.", "tags": ["air fryer", "comfort", "batch", "high-protein"]},
  {"id": "D08", "name": "Tofu croustillant air fryer & riz sauté", "category": "dinner", "emoji": "🍱", "prepTime": 8, "cookTime": 15, "batch": true, "macros": {"kcal": 628, "protein": 40, "carbs": 71, "fat": 22}, "ingredients": [{"name": "Tofu ferme", "qty": 180, "unit": "g", "kcal": 262, "protein": 29, "carbs": 5, "fat": 16}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Petits pois", "qty": 80, "unit": "g", "kcal": 65, "protein": 5, "carbs": 11, "fat": 0.4}, {"name": "Huile de sésame", "qty": 5, "unit": "g", "kcal": 44, "protein": 0, "carbs": 0, "fat": 5}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Tofu en cubes, air fryer 200°C 14 min.", "Riz cuit, sauté à la poêle avec ail + pois.", "Soja + sésame.", "Mélanger le tofu croustillant."], "tip": "Option végé qui tient au corps. Le tofu air fryer devient vraiment croustillant.", "tags": ["air fryer", "végé-friendly", "batch"]},
  {"id": "D09", "name": "Poulet curry coco rapide & riz", "category": "dinner", "emoji": "🍛", "prepTime": 6, "cookTime": 15, "batch": true, "macros": {"kcal": 573, "protein": 50, "carbs": 67, "fat": 11}, "ingredients": [{"name": "Blanc de poulet", "qty": 170, "unit": "g", "kcal": 187, "protein": 40, "carbs": 0, "fat": 3}, {"name": "Lait de coco light", "qty": 100, "unit": "ml", "kcal": 73, "protein": 1, "carbs": 3, "fat": 6}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Pâte de curry", "qty": 15, "unit": "g", "kcal": 30, "protein": 1, "carbs": 4, "fat": 1}, {"name": "Épinards", "qty": 80, "unit": "g", "kcal": 18, "protein": 2, "carbs": 3, "fat": 0.4}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}], "steps": ["Riz à cuire.", "Poêle : oignon + pâte de curry 2 min.", "Poulet en dés, 6 min.", "Lait de coco + épinards, mijoter 5 min."], "tip": "Un curry express sans 15 épices. Se garde 3-4 jours, encore meilleur le lendemain.", "tags": ["asiatique", "rapide", "batch", "high-protein"]},
  {"id": "D10", "name": "Dinde hachée poêlée & boulghour", "category": "dinner", "emoji": "🦃", "prepTime": 5, "cookTime": 15, "batch": true, "macros": {"kcal": 528, "protein": 47, "carbs": 59, "fat": 12}, "ingredients": [{"name": "Dinde hachée", "qty": 160, "unit": "g", "kcal": 186, "protein": 37, "carbs": 0, "fat": 4}, {"name": "Boulghour", "qty": 70, "unit": "g", "kcal": 240, "protein": 8, "carbs": 50, "fat": 1}, {"name": "Courgettes", "qty": 120, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0.3}, {"name": "Tomates concassées", "qty": 100, "unit": "g", "kcal": 24, "protein": 1, "carbs": 4, "fat": 0.2}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Boulghour cuit (10 min).", "Poêle : ail + dinde 6 min.", "Courgettes + tomates, 5 min.", "Mélanger au boulghour."], "tip": "Léger mais rassasiant. La dinde hachée est une super base batch peu chère.", "tags": ["méditerranéen", "rapide", "batch", "high-protein"]},
  {"id": "L01", "name": "Bowl poulet-riz-avocat", "category": "lunch", "emoji": "🥗", "prepTime": 10, "cookTime": 12, "batch": true, "macros": {"kcal": 573, "protein": 42, "carbs": 60, "fat": 18}, "ingredients": [{"name": "Blanc de poulet", "qty": 150, "unit": "g", "kcal": 165, "protein": 35, "carbs": 0, "fat": 2.5}, {"name": "Riz", "qty": 60, "unit": "g", "kcal": 210, "protein": 4, "carbs": 45, "fat": 0.8}, {"name": "Avocat", "qty": 60, "unit": "g", "kcal": 96, "protein": 1, "carbs": 3, "fat": 9}, {"name": "Tomates cerise", "qty": 80, "unit": "g", "kcal": 14, "protein": 1, "carbs": 3, "fat": 0.2}, {"name": "Maïs", "qty": 50, "unit": "g", "kcal": 43, "protein": 1.5, "carbs": 9, "fat": 0.6}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}], "steps": ["Poulet poêlé en lamelles.", "Riz cuit, refroidi.", "Assembler le bowl avec avocat, tomates, maïs.", "Filet d'huile, sel poivre."], "tip": "Le meal-prep bowl par excellence : prépare poulet + riz, assemble le matin.", "tags": ["bowl", "batch", "high-protein"]},
  {"id": "L02", "name": "Wrap thon-crudités", "category": "lunch", "emoji": "🌯", "prepTime": 8, "cookTime": 0, "batch": false, "macros": {"kcal": 461, "protein": 42, "carbs": 50, "fat": 9}, "ingredients": [{"name": "Thon au naturel", "qty": 120, "unit": "g", "kcal": 139, "protein": 31, "carbs": 0, "fat": 1}, {"name": "Tortillas blé complètes", "qty": 80, "unit": "g", "kcal": 230, "protein": 7, "carbs": 38, "fat": 5}, {"name": "Fromage frais léger", "qty": 30, "unit": "g", "kcal": 42, "protein": 3, "carbs": 2, "fat": 2.7}, {"name": "Salade verte", "qty": 30, "unit": "g", "kcal": 5, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Tomates cerise", "qty": 60, "unit": "g", "kcal": 11, "protein": 0.5, "carbs": 2, "fat": 0.1}, {"name": "Maïs", "qty": 40, "unit": "g", "kcal": 34, "protein": 1, "carbs": 7, "fat": 0.5}], "steps": ["Égoutter le thon, mélanger au fromage frais.", "Garnir la tortilla.", "Ajouter salade, tomates, maïs.", "Rouler serré."], "tip": "Zéro cuisson, prêt en 5 min. Parfait quand tu n'as pas le temps.", "tags": ["wrap", "rapide", "0-cuisson", "high-protein"]},
  {"id": "L03", "name": "Salade poulet-quinoa-feta", "category": "lunch", "emoji": "🥙", "prepTime": 12, "cookTime": 0, "batch": true, "macros": {"kcal": 524, "protein": 44, "carbs": 45, "fat": 18}, "ingredients": [{"name": "Blanc de poulet", "qty": 130, "unit": "g", "kcal": 143, "protein": 30, "carbs": 0, "fat": 2}, {"name": "Quinoa", "qty": 60, "unit": "g", "kcal": 222, "protein": 8, "carbs": 39, "fat": 3.5}, {"name": "Feta", "qty": 30, "unit": "g", "kcal": 79, "protein": 4, "carbs": 1, "fat": 6}, {"name": "Concombre", "qty": 80, "unit": "g", "kcal": 12, "protein": 0.5, "carbs": 2, "fat": 0.1}, {"name": "Tomates cerise", "qty": 80, "unit": "g", "kcal": 14, "protein": 1, "carbs": 3, "fat": 0.2}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Quinoa cuit, refroidi.", "Poulet déjà cuit, émincé.", "Mélanger avec feta, concombre, tomates.", "Huile, citron, sel."], "tip": "Se garde 2 jours au frigo. Idéal avec du poulet déjà batch-cooké.", "tags": ["salade", "batch", "high-protein"]},
  {"id": "L04", "name": "Omelette jambon-fromage & pain", "category": "lunch", "emoji": "🍳", "prepTime": 3, "cookTime": 8, "batch": false, "macros": {"kcal": 486, "protein": 39, "carbs": 22, "fat": 26}, "ingredients": [{"name": "Oeufs", "qty": 3, "unit": "pièces", "kcal": 234, "protein": 19, "carbs": 1, "fat": 16}, {"name": "Blanc de dinde", "qty": 40, "unit": "g", "kcal": 46, "protein": 9, "carbs": 1, "fat": 1}, {"name": "Emmental allégé", "qty": 20, "unit": "g", "kcal": 55, "protein": 7, "carbs": 0, "fat": 3}, {"name": "Pain complet", "qty": 50, "unit": "g", "kcal": 115, "protein": 4, "carbs": 20, "fat": 1.5}, {"name": "Huile d'olive", "qty": 4, "unit": "g", "kcal": 36, "protein": 0, "carbs": 0, "fat": 4}], "steps": ["Battre les oeufs.", "Poêle : verser, ajouter dinde + fromage.", "Plier l'omelette.", "Servir avec le pain."], "tip": "Le repas dépannage en 10 min. Riche en protéines.", "tags": ["rapide", "high-protein", "oeufs"]},
  {"id": "S01", "name": "Riz nature", "category": "side", "emoji": "🍚", "prepTime": 2, "cookTime": 12, "batch": true, "macros": {"kcal": 280, "protein": 6, "carbs": 60, "fat": 1}, "ingredients": [{"name": "Riz", "qty": 80, "unit": "g", "kcal": 280, "protein": 6, "carbs": 60, "fat": 1}], "steps": ["Rincer le riz.", "2× volume d'eau, 12 min à couvert."], "tip": "La base. Cuis-en beaucoup d'un coup pour la semaine.", "tags": ["féculents", "batch"]},
  {"id": "S02", "name": "Patates douces air fryer", "category": "side", "emoji": "🍠", "prepTime": 3, "cookTime": 18, "batch": true, "macros": {"kcal": 217, "protein": 3, "carbs": 40, "fat": 5}, "ingredients": [{"name": "Patate douce", "qty": 200, "unit": "g", "kcal": 172, "protein": 3, "carbs": 40, "fat": 0.3}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}], "steps": ["Cubes de patate douce + huile.", "Air fryer 180°C 18 min, secouer à mi-cuisson."], "tip": "Croustillant dehors, fondant dedans. Top à l'air fryer.", "tags": ["air fryer", "féculents", "batch"]},
  {"id": "S03", "name": "Légumes rôtis air fryer", "category": "side", "emoji": "🥦", "prepTime": 5, "cookTime": 15, "batch": true, "macros": {"kcal": 134, "protein": 3, "carbs": 12, "fat": 8}, "ingredients": [{"name": "Courgettes", "qty": 100, "unit": "g", "kcal": 17, "protein": 1, "carbs": 3, "fat": 0.3}, {"name": "Poivron", "qty": 100, "unit": "g", "kcal": 25, "protein": 1, "carbs": 5, "fat": 0.2}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}, {"name": "Huile d'olive", "qty": 8, "unit": "g", "kcal": 72, "protein": 0, "carbs": 0, "fat": 8}], "steps": ["Légumes en morceaux + huile + sel.", "Air fryer 180°C 15 min."], "tip": "Une fournée pour la semaine, à ajouter dans tous tes bowls.", "tags": ["air fryer", "légumes", "batch", "léger"]},
  {"id": "S04", "name": "Quinoa", "category": "side", "emoji": "🌾", "prepTime": 2, "cookTime": 12, "batch": true, "macros": {"kcal": 296, "protein": 11, "carbs": 52, "fat": 5}, "ingredients": [{"name": "Quinoa", "qty": 80, "unit": "g", "kcal": 296, "protein": 11, "carbs": 52, "fat": 4.7}], "steps": ["Rincer.", "2× volume d'eau, 12 min."], "tip": "Plus de protéines que le riz. Parfait froid en salade.", "tags": ["féculents", "batch"]},
  {"id": "EN01", "name": "Velouté de courgettes", "category": "starter", "emoji": "🥣", "prepTime": 8, "cookTime": 15, "batch": true, "macros": {"kcal": 127, "protein": 8, "carbs": 16, "fat": 5}, "ingredients": [{"name": "Courgettes", "qty": 300, "unit": "g", "kcal": 51, "protein": 3.6, "carbs": 9, "fat": 0.9}, {"name": "Fromage frais léger", "qty": 40, "unit": "g", "kcal": 56, "protein": 4, "carbs": 2.4, "fat": 3.6}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 0.6, "carbs": 4.5, "fat": 0.1}], "steps": ["Oignon + courgettes à la casserole, couvrir d'eau, 15 min.", "Mixer avec le fromage frais."], "tip": "Se congèle très bien. Fais-en une grande casserole.", "tags": ["entrée", "soupe", "batch", "léger"]},
  {"id": "EN02", "name": "Salade de crudités", "category": "starter", "emoji": "🥗", "prepTime": 8, "cookTime": 0, "batch": false, "macros": {"kcal": 98, "protein": 2, "carbs": 13, "fat": 4}, "ingredients": [{"name": "Carottes", "qty": 80, "unit": "g", "kcal": 33, "protein": 0.7, "carbs": 7.6, "fat": 0.2}, {"name": "Concombre", "qty": 100, "unit": "g", "kcal": 15, "protein": 0.7, "carbs": 3, "fat": 0.1}, {"name": "Tomates cerise", "qty": 80, "unit": "g", "kcal": 14, "protein": 0.7, "carbs": 2.8, "fat": 0.2}, {"name": "Huile d'olive", "qty": 4, "unit": "g", "kcal": 36, "protein": 0, "carbs": 0, "fat": 4}], "steps": ["Râper/couper les légumes.", "Huile + vinaigre + sel."], "tip": "L'entrée fraîcheur zéro effort.", "tags": ["entrée", "0-cuisson", "léger", "salade"]},
  {"id": "SW01", "name": "Bol fromage blanc-PB-avoine", "category": "sweet", "emoji": "🥣", "prepTime": 3, "cookTime": 0, "batch": false, "macros": {"kcal": 414, "protein": 30, "carbs": 48, "fat": 13}, "ingredients": [{"name": "Fromage blanc 0%", "qty": 250, "unit": "g", "kcal": 112, "protein": 20, "carbs": 10, "fat": 0}, {"name": "Beurre de cacahuète", "qty": 20, "unit": "g", "kcal": 120, "protein": 5, "carbs": 4, "fat": 10}, {"name": "Flocons d'avoine", "qty": 40, "unit": "g", "kcal": 152, "protein": 5, "carbs": 26, "fat": 3}, {"name": "Miel", "qty": 10, "unit": "g", "kcal": 30, "protein": 0, "carbs": 8, "fat": 0}], "steps": ["Fromage blanc dans un bol.", "Ajouter avoine, beurre de cacahuète, miel.", "Mélanger."], "tip": "LE bol express. 30 secondes, 30g de protéines.", "tags": ["encas", "0-cuisson", "rapide", "high-protein"]},
  {"id": "SW02", "name": "Fromage blanc-whey-banane", "category": "sweet", "emoji": "🍌", "prepTime": 2, "cookTime": 0, "batch": false, "macros": {"kcal": 296, "protein": 41, "carbs": 36, "fat": 2}, "ingredients": [{"name": "Fromage blanc 0%", "qty": 250, "unit": "g", "kcal": 112, "protein": 20, "carbs": 10, "fat": 0}, {"name": "Whey", "qty": 25, "unit": "g", "kcal": 95, "protein": 20, "carbs": 2.5, "fat": 1.5}, {"name": "Banane", "qty": 100, "unit": "g", "kcal": 89, "protein": 1, "carbs": 23, "fat": 0.3}], "steps": ["Mélanger fromage blanc + whey.", "Banane en rondelles dessus."], "tip": "40g de protéines en 2 min. Post-training idéal.", "tags": ["encas", "0-cuisson", "high-protein", "post-workout"]},
  {"id": "SW03", "name": "Tartines beurre de cacahuète-miel", "category": "sweet", "emoji": "🍞", "prepTime": 4, "cookTime": 0, "batch": false, "macros": {"kcal": 471, "protein": 15, "carbs": 66, "fat": 18}, "ingredients": [{"name": "Pain complet", "qty": 80, "unit": "g", "kcal": 184, "protein": 7, "carbs": 32, "fat": 2.4}, {"name": "Beurre de cacahuète", "qty": 30, "unit": "g", "kcal": 180, "protein": 7, "carbs": 6, "fat": 15}, {"name": "Miel", "qty": 12, "unit": "g", "kcal": 36, "protein": 0, "carbs": 10, "fat": 0}, {"name": "Banane", "qty": 80, "unit": "g", "kcal": 71, "protein": 1, "carbs": 18, "fat": 0.2}], "steps": ["Toaster le pain.", "Étaler le beurre de cacahuète.", "Banane + filet de miel."], "tip": "Calories faciles et gourmandes quand tu as une grosse faim.", "tags": ["encas", "0-cuisson", "rapide"]},
  {"id": "SW04", "name": "Shake prise de masse", "category": "sweet", "emoji": "🥤", "prepTime": 3, "cookTime": 0, "batch": false, "macros": {"kcal": 618, "protein": 46, "carbs": 77, "fat": 16}, "ingredients": [{"name": "Lait écrémé", "qty": 300, "unit": "ml", "kcal": 105, "protein": 10, "carbs": 15, "fat": 0.3}, {"name": "Whey", "qty": 30, "unit": "g", "kcal": 114, "protein": 24, "carbs": 3, "fat": 1.8}, {"name": "Flocons d'avoine", "qty": 50, "unit": "g", "kcal": 190, "protein": 6.5, "carbs": 32, "fat": 3.5}, {"name": "Beurre de cacahuète", "qty": 20, "unit": "g", "kcal": 120, "protein": 5, "carbs": 4, "fat": 10}, {"name": "Banane", "qty": 100, "unit": "g", "kcal": 89, "protein": 1, "carbs": 23, "fat": 0.3}], "steps": ["Tout au blender.", "Mixer 30 s."], "tip": "620 kcal à boire quand manger solide est difficile.", "tags": ["encas", "0-cuisson", "rapide", "high-protein", "post-workout"]},
  {"id": "SW05", "name": "Skyr fruits rouges-granola", "category": "sweet", "emoji": "🫐", "prepTime": 3, "cookTime": 0, "batch": false, "macros": {"kcal": 347, "protein": 32, "carbs": 46, "fat": 3}, "ingredients": [{"name": "Skyr", "qty": 250, "unit": "g", "kcal": 158, "protein": 27, "carbs": 10, "fat": 0.5}, {"name": "Fruits rouges surgelés", "qty": 100, "unit": "g", "kcal": 45, "protein": 1, "carbs": 9, "fat": 0.4}, {"name": "Flocons d'avoine", "qty": 30, "unit": "g", "kcal": 114, "protein": 4, "carbs": 19, "fat": 2}, {"name": "Miel", "qty": 10, "unit": "g", "kcal": 30, "protein": 0, "carbs": 8, "fat": 0}], "steps": ["Skyr dans un bol.", "Fruits rouges + avoine + miel."], "tip": "Très protéiné, peu de calories. Pour les jours où il reste surtout des protéines.", "tags": ["encas", "0-cuisson", "high-protein"]},
  {"id": "SW06", "name": "Cookies avoine-banane air fryer", "category": "sweet", "emoji": "🍪", "prepTime": 8, "cookTime": 12, "batch": true, "macros": {"kcal": 678, "protein": 29, "carbs": 86, "fat": 24}, "ingredients": [{"name": "Flocons d'avoine", "qty": 80, "unit": "g", "kcal": 304, "protein": 10, "carbs": 51, "fat": 6}, {"name": "Banane", "qty": 120, "unit": "g", "kcal": 107, "protein": 1, "carbs": 27, "fat": 0.4}, {"name": "Beurre de cacahuète", "qty": 20, "unit": "g", "kcal": 120, "protein": 5, "carbs": 4, "fat": 10}, {"name": "Chocolat noir 85%", "qty": 15, "unit": "g", "kcal": 90, "protein": 1, "carbs": 3, "fat": 7}, {"name": "Whey", "qty": 15, "unit": "g", "kcal": 57, "protein": 12, "carbs": 1.5, "fat": 1}], "steps": ["Écraser la banane, mélanger tous les ingrédients.", "Former des cookies.", "Air fryer 160°C 10-12 min."], "tip": "Le batch sucré sain : fais-en 8-10, ça tient la semaine.", "tags": ["air fryer", "batch", "sucré-salé"]},
  {"id": "SW07", "name": "Overnight oats choco-PB", "category": "sweet", "emoji": "🥜", "prepTime": 5, "cookTime": 0, "batch": true, "macros": {"kcal": 530, "protein": 47, "carbs": 56, "fat": 14}, "ingredients": [{"name": "Flocons d'avoine", "qty": 60, "unit": "g", "kcal": 228, "protein": 8, "carbs": 38, "fat": 4}, {"name": "Fromage blanc 0%", "qty": 200, "unit": "g", "kcal": 90, "protein": 16, "carbs": 8, "fat": 0}, {"name": "Whey", "qty": 20, "unit": "g", "kcal": 76, "protein": 16, "carbs": 2, "fat": 1.2}, {"name": "Beurre de cacahuète", "qty": 18, "unit": "g", "kcal": 108, "protein": 4, "carbs": 4, "fat": 9}, {"name": "Lait écrémé", "qty": 80, "unit": "ml", "kcal": 28, "protein": 3, "carbs": 4, "fat": 0.1}], "steps": ["Tout mélanger dans un bocal.", "Une nuit au frigo."], "tip": "Prépare 3-4 bocaux d'un coup. Petit-déj ou encas zéro effort.", "tags": ["encas", "0-cuisson", "batch", "high-protein"]},
  {"id": "SW08", "name": "Energy balls dattes-cacahuète", "category": "sweet", "emoji": "⚫", "prepTime": 12, "cookTime": 0, "batch": true, "macros": {"kcal": 675, "protein": 17, "carbs": 109, "fat": 20}, "ingredients": [{"name": "Dattes dénoyautées", "qty": 100, "unit": "g", "kcal": 282, "protein": 2, "carbs": 68, "fat": 0.5}, {"name": "Flocons d'avoine", "qty": 50, "unit": "g", "kcal": 190, "protein": 6, "carbs": 32, "fat": 3.5}, {"name": "Beurre de cacahuète", "qty": 30, "unit": "g", "kcal": 180, "protein": 7, "carbs": 6, "fat": 15}, {"name": "Cacao non sucré", "qty": 10, "unit": "g", "kcal": 23, "protein": 2, "carbs": 3, "fat": 1.4}], "steps": ["Mixer les dattes.", "Ajouter avoine, beurre de cacahuète, cacao.", "Former des boules.", "Au frigo 30 min."], "tip": "Se gardent 1 semaine. Parfait pré-training.", "tags": ["encas", "0-cuisson", "batch", "pré-workout"]},
  {"id": "C01", "name": "Menu cantine complet", "category": "lunch", "emoji": "🍱", "prepTime": 0, "cookTime": 0, "batch": false, "macros": {"kcal": 695, "protein": 75, "carbs": 38, "fat": 27}, "ingredients": [{"name": "Crudités (carotte/tomate/concombre)", "qty": 100, "unit": "g", "kcal": 30, "protein": 1, "carbs": 5, "fat": 0.3}, {"name": "Steak haché 5%", "qty": 150, "unit": "g", "kcal": 233, "protein": 31.5, "carbs": 0, "fat": 11.3}, {"name": "Portion de légumes", "qty": 150, "unit": "g", "kcal": 45, "protein": 3, "carbs": 7, "fat": 0.6}, {"name": "Oeufs durs", "qty": 3, "unit": "pièces", "kcal": 234, "protein": 19.5, "carbs": 1.2, "fat": 16.2}, {"name": "Fromage blanc 0%", "qty": 100, "unit": "g", "kcal": 45, "protein": 8, "carbs": 4, "fat": 0}, {"name": "Fruit (pomme/banane)", "qty": 120, "unit": "g", "kcal": 108, "protein": 1, "carbs": 26, "fat": 0.3}], "steps": ["Au self : prends une crudité en entrée.", "Plat : 1 steak haché + une portion de légumes (évite frites et sauces).", "Ajoute 3 œufs durs sur le plateau — protéine gratuite.", "Dessert : 1 fromage blanc nature + 1 fruit."], "tip": "Le combo parfait à la cantine : 75g de protéines sans effort. Évite frites, pain et desserts sucrés.", "tags": ["cantine", "rapide", "0-cuisson", "high-protein"]},
  {"id": "L05", "name": "Buns fourrés poulet-fromage (pâte fromage blanc)", "category": "lunch", "emoji": "🥟", "prepTime": 15, "cookTime": 18, "batch": true, "macros": {"kcal": 724, "protein": 64, "carbs": 85, "fat": 12}, "ingredients": [{"name": "Farine", "qty": 100, "unit": "g", "kcal": 364, "protein": 10, "carbs": 76, "fat": 1}, {"name": "Fromage blanc 0%", "qty": 120, "unit": "g", "kcal": 54, "protein": 10, "carbs": 5, "fat": 0}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Levure chimique", "qty": 5, "unit": "g", "kcal": 2, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Blanc de poulet", "qty": 120, "unit": "g", "kcal": 132, "protein": 28, "carbs": 0, "fat": 2}, {"name": "Emmental allégé", "qty": 30, "unit": "g", "kcal": 82, "protein": 10, "carbs": 0, "fat": 4.5}, {"name": "Oignon", "qty": 30, "unit": "g", "kcal": 12, "protein": 0, "carbs": 3, "fat": 0}], "steps": ["Pâte : mélanger farine + fromage blanc + œuf + levure jusqu'à une boule souple.", "Cuire le poulet émincé à la poêle 6 min, mélanger oignon + emmental.", "Étaler des pâtons, garnir, refermer en boules.", "Air fryer 180°C 16-18 min jusqu'à doré."], "tip": "La pâte magique (fromage blanc + farine) : zéro repos, super protéinée. Fais-en plusieurs et cuis-les quand tu batch-cookes.", "tags": ["batch", "air fryer", "high-protein", "comfort"]},
  {"id": "L06", "name": "Buns fourrés thon-fromage frais", "category": "lunch", "emoji": "🥟", "prepTime": 15, "cookTime": 18, "batch": true, "macros": {"kcal": 694, "protein": 61, "carbs": 84, "fat": 11}, "ingredients": [{"name": "Farine", "qty": 100, "unit": "g", "kcal": 364, "protein": 10, "carbs": 76, "fat": 1}, {"name": "Fromage blanc 0%", "qty": 120, "unit": "g", "kcal": 54, "protein": 10, "carbs": 5, "fat": 0}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Levure chimique", "qty": 5, "unit": "g", "kcal": 2, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Thon au naturel", "qty": 120, "unit": "g", "kcal": 139, "protein": 31, "carbs": 0, "fat": 1}, {"name": "Fromage frais léger", "qty": 40, "unit": "g", "kcal": 56, "protein": 4, "carbs": 2, "fat": 3.6}, {"name": "Ciboulette", "qty": 3, "unit": "g", "kcal": 1, "protein": 0, "carbs": 0, "fat": 0}], "steps": ["Pâte : farine + fromage blanc + œuf + levure, pétrir en boule.", "Mélanger thon égoutté + fromage frais + ciboulette.", "Garnir les pâtons, refermer.", "Air fryer 180°C 16-18 min."], "tip": "Garniture froide, zéro cuisson de la farce. Parfait à préparer en lot.", "tags": ["batch", "air fryer", "high-protein"]},
  {"id": "L07", "name": "Buns fourrés bœuf-oignon", "category": "lunch", "emoji": "🥟", "prepTime": 15, "cookTime": 20, "batch": true, "macros": {"kcal": 705, "protein": 52, "carbs": 86, "fat": 15}, "ingredients": [{"name": "Farine", "qty": 100, "unit": "g", "kcal": 364, "protein": 10, "carbs": 76, "fat": 1}, {"name": "Fromage blanc 0%", "qty": 120, "unit": "g", "kcal": 54, "protein": 10, "carbs": 5, "fat": 0}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Levure chimique", "qty": 5, "unit": "g", "kcal": 2, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Steak haché 5%", "qty": 120, "unit": "g", "kcal": 187, "protein": 25, "carbs": 0, "fat": 9}, {"name": "Oignon", "qty": 40, "unit": "g", "kcal": 16, "protein": 0, "carbs": 4, "fat": 0}, {"name": "Sauce soja", "qty": 8, "unit": "ml", "kcal": 4, "protein": 0.5, "carbs": 0.5, "fat": 0}], "steps": ["Pâte fromage blanc + farine + œuf + levure.", "Poêler le bœuf + oignon 6 min, déglacer au soja.", "Garnir les pâtons, bien refermer.", "Air fryer 180°C 18-20 min."], "tip": "Comme un cheeseburger-bun sain. Se réchauffe nickel toute la semaine.", "tags": ["batch", "air fryer", "high-protein", "comfort"]},
  {"id": "SW09", "name": "Buns fourrés banane-cacahuète (pâte fromage blanc)", "category": "sweet", "emoji": "🥯", "prepTime": 12, "cookTime": 16, "batch": true, "macros": {"kcal": 719, "protein": 32, "carbs": 112, "fat": 16}, "ingredients": [{"name": "Farine", "qty": 100, "unit": "g", "kcal": 364, "protein": 10, "carbs": 76, "fat": 1}, {"name": "Fromage blanc 0%", "qty": 120, "unit": "g", "kcal": 54, "protein": 10, "carbs": 5, "fat": 0}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Levure chimique", "qty": 5, "unit": "g", "kcal": 2, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Banane", "qty": 80, "unit": "g", "kcal": 71, "protein": 1, "carbs": 18, "fat": 0.2}, {"name": "Beurre de cacahuète", "qty": 20, "unit": "g", "kcal": 120, "protein": 5, "carbs": 4, "fat": 10}, {"name": "Miel", "qty": 10, "unit": "g", "kcal": 30, "protein": 0, "carbs": 8, "fat": 0}], "steps": ["Pâte : farine + fromage blanc + œuf + levure en boule souple.", "Garniture : banane écrasée + beurre de cacahuète + miel.", "Garnir les pâtons, refermer en boules.", "Air fryer 170°C 14-16 min."], "tip": "Version sucrée de la pâte magique : un goûter protéiné réconfortant à faire en lot.", "tags": ["batch", "air fryer", "sucré-salé", "high-protein"]},
  {"id": "D11", "name": "Poulet basquaise express & riz", "category": "dinner", "emoji": "🍗", "prepTime": 6, "cookTime": 16, "batch": true, "macros": {"kcal": 576, "protein": 50, "carbs": 68, "fat": 10}, "ingredients": [{"name": "Blanc de poulet", "qty": 180, "unit": "g", "kcal": 198, "protein": 42, "carbs": 0, "fat": 3}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Poivron", "qty": 120, "unit": "g", "kcal": 30, "protein": 1, "carbs": 6, "fat": 0.3}, {"name": "Tomates concassées", "qty": 120, "unit": "g", "kcal": 29, "protein": 1, "carbs": 5, "fat": 0.2}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Riz à cuire.", "Poêle : oignon + poivron 4 min.", "Poulet en morceaux, saisir 6 min.", "Tomates concassées, mijoter 6 min. Servir sur le riz."], "tip": "Le plat mijoté rapide qui se garde 3-4 jours. Encore meilleur réchauffé.", "tags": ["rapide", "high-protein", "batch", "méditerranéen"]},
  {"id": "D12", "name": "Poulet miel-moutarde air fryer & patate douce", "category": "dinner", "emoji": "🍗", "prepTime": 6, "cookTime": 18, "batch": true, "macros": {"kcal": 457, "protein": 46, "carbs": 50, "fat": 9}, "ingredients": [{"name": "Blanc de poulet", "qty": 180, "unit": "g", "kcal": 198, "protein": 42, "carbs": 0, "fat": 3}, {"name": "Patate douce", "qty": 200, "unit": "g", "kcal": 172, "protein": 3, "carbs": 40, "fat": 0.3}, {"name": "Miel", "qty": 12, "unit": "g", "kcal": 36, "protein": 0, "carbs": 10, "fat": 0}, {"name": "Moutarde de Dijon", "qty": 10, "unit": "g", "kcal": 6, "protein": 0.5, "carbs": 0.5, "fat": 0.3}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}], "steps": ["Patate douce en cubes, air fryer 180°C 18 min.", "Enrober le poulet de miel + moutarde.", "Air fryer 180°C 12 min (ajouté en cours)."], "tip": "Sucré-salé qui plaît à tous. Double la sauce miel-moutarde pour la semaine.", "tags": ["air fryer", "high-protein", "batch", "sucré-salé"]},
  {"id": "D13", "name": "Wok de poulet aux légumes & nouilles", "category": "dinner", "emoji": "🍜", "prepTime": 8, "cookTime": 12, "batch": true, "macros": {"kcal": 536, "protein": 46, "carbs": 63, "fat": 10}, "ingredients": [{"name": "Blanc de poulet", "qty": 170, "unit": "g", "kcal": 187, "protein": 40, "carbs": 0, "fat": 3}, {"name": "Nouilles de riz", "qty": 70, "unit": "g", "kcal": 250, "protein": 4, "carbs": 55, "fat": 0.5}, {"name": "Poivron", "qty": 80, "unit": "g", "kcal": 20, "protein": 0.7, "carbs": 4, "fat": 0.2}, {"name": "Courgettes", "qty": 80, "unit": "g", "kcal": 14, "protein": 0.8, "carbs": 2.4, "fat": 0.2}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Huile de sésame", "qty": 6, "unit": "g", "kcal": 53, "protein": 0, "carbs": 0, "fat": 6}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Nouilles selon paquet.", "Wok très chaud : poulet 5 min.", "Légumes + ail 3 min.", "Nouilles + soja + sésame, sauter 2 min."], "tip": "Le wok express : tout cuit en une poêle, prêt en 12 min.", "tags": ["asiatique", "rapide", "high-protein", "batch"]},
  {"id": "D14", "name": "Dinde hachée façon bolognaise & pâtes", "category": "dinner", "emoji": "🍝", "prepTime": 5, "cookTime": 15, "batch": true, "macros": {"kcal": 563, "protein": 50, "carbs": 63, "fat": 12}, "ingredients": [{"name": "Dinde hachée", "qty": 160, "unit": "g", "kcal": 186, "protein": 37, "carbs": 0, "fat": 4}, {"name": "Pâtes complètes", "qty": 75, "unit": "g", "kcal": 263, "protein": 11, "carbs": 52, "fat": 1.5}, {"name": "Tomates concassées", "qty": 150, "unit": "g", "kcal": 36, "protein": 1.5, "carbs": 6, "fat": 0.3}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Pâtes à cuire.", "Poêle : oignon + ail + dinde 6 min.", "Tomates, mijoter 8 min.", "Mélanger aux pâtes."], "tip": "La bolo protéinée à la dinde. Fais-en une grosse casserole, ça congèle bien.", "tags": ["italien", "rapide", "high-protein", "batch", "comfort"]},
  {"id": "D15", "name": "Bœuf sauté aux oignons & riz", "category": "dinner", "emoji": "🥩", "prepTime": 6, "cookTime": 12, "batch": true, "macros": {"kcal": 582, "protein": 40, "carbs": 62, "fat": 18}, "ingredients": [{"name": "Steak haché 5%", "qty": 160, "unit": "g", "kcal": 249, "protein": 33, "carbs": 0, "fat": 12}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Oignon", "qty": 80, "unit": "g", "kcal": 32, "protein": 1, "carbs": 7, "fat": 0}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Huile de sésame", "qty": 5, "unit": "g", "kcal": 44, "protein": 0, "carbs": 0, "fat": 5}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Riz à cuire.", "Poêle chaude : oignons 4 min.", "Bœuf + ail, 6 min.", "Déglacer soja + sésame. Servir sur le riz."], "tip": "Façon gyudon japonais, version simple. Top à réchauffer.", "tags": ["asiatique", "rapide", "high-protein", "batch"]},
  {"id": "D16", "name": "Chili de bœuf express & riz", "category": "dinner", "emoji": "🌶️", "prepTime": 6, "cookTime": 16, "batch": true, "macros": {"kcal": 634, "protein": 46, "carbs": 78, "fat": 13}, "ingredients": [{"name": "Steak haché 5%", "qty": 150, "unit": "g", "kcal": 233, "protein": 31, "carbs": 0, "fat": 11}, {"name": "Riz", "qty": 60, "unit": "g", "kcal": 210, "protein": 4, "carbs": 45, "fat": 0.8}, {"name": "Haricots rouges", "qty": 100, "unit": "g", "kcal": 127, "protein": 8, "carbs": 22, "fat": 0.5}, {"name": "Tomates concassées", "qty": 120, "unit": "g", "kcal": 29, "protein": 1, "carbs": 5, "fat": 0.2}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}, {"name": "Épices chili", "qty": 5, "unit": "g", "kcal": 15, "protein": 1, "carbs": 2, "fat": 0.3}], "steps": ["Riz à cuire.", "Poêle : oignon + bœuf 6 min.", "Épices chili, 1 min.", "Haricots + tomates, mijoter 8 min."], "tip": "Le chili qui se bonifie : prépare-en beaucoup, parfait sur 3-4 jours.", "tags": ["mexicain", "rapide", "high-protein", "batch", "comfort"]},
  {"id": "D17", "name": "Bœuf bourguignon express & purée", "category": "dinner", "emoji": "🥩", "prepTime": 8, "cookTime": 20, "batch": true, "macros": {"kcal": 513, "protein": 42, "carbs": 43, "fat": 18}, "ingredients": [{"name": "Steak haché 5%", "qty": 160, "unit": "g", "kcal": 249, "protein": 33, "carbs": 0, "fat": 12}, {"name": "Pommes de terre", "qty": 200, "unit": "g", "kcal": 154, "protein": 4, "carbs": 34, "fat": 0.2}, {"name": "Champignons de Paris", "qty": 100, "unit": "g", "kcal": 22, "protein": 3, "carbs": 3, "fat": 0.3}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}, {"name": "Lait écrémé", "qty": 40, "unit": "ml", "kcal": 14, "protein": 1, "carbs": 2, "fat": 0}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Pommes de terre cuites + lait → purée.", "Poêle : oignon + champignons 5 min.", "Bœuf 6 min, mélanger.", "Servir sur la purée."], "tip": "Version éclair du bourguignon, prête en 25 min. Réchauffe parfaitement.", "tags": ["comfort", "rapide", "high-protein", "batch", "français"]},
  {"id": "D18", "name": "Bœuf teriyaki & nouilles", "category": "dinner", "emoji": "🥩", "prepTime": 6, "cookTime": 12, "batch": true, "macros": {"kcal": 600, "protein": 42, "carbs": 71, "fat": 15}, "ingredients": [{"name": "Steak haché 5%", "qty": 160, "unit": "g", "kcal": 249, "protein": 33, "carbs": 0, "fat": 12}, {"name": "Nouilles de riz", "qty": 70, "unit": "g", "kcal": 250, "protein": 4, "carbs": 55, "fat": 0.5}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Miel", "qty": 10, "unit": "g", "kcal": 30, "protein": 0, "carbs": 8, "fat": 0}, {"name": "Brocoli", "qty": 100, "unit": "g", "kcal": 34, "protein": 3, "carbs": 6, "fat": 0.4}, {"name": "Sésame", "qty": 5, "unit": "g", "kcal": 29, "protein": 1, "carbs": 1, "fat": 2.5}], "steps": ["Nouilles cuites.", "Bœuf saisi 6 min.", "Soja + miel, glacer 2 min.", "Brocoli + sésame."], "tip": "Sucré-salé qui change du poulet. Top en batch.", "tags": ["asiatique", "rapide", "high-protein", "batch", "sucré-salé"]},
  {"id": "D19", "name": "Tacos de bœuf épicé & tortillas", "category": "dinner", "emoji": "🌮", "prepTime": 6, "cookTime": 12, "batch": true, "macros": {"kcal": 557, "protein": 41, "carbs": 57, "fat": 17}, "ingredients": [{"name": "Steak haché 5%", "qty": 150, "unit": "g", "kcal": 233, "protein": 31, "carbs": 0, "fat": 11}, {"name": "Tortillas blé complètes", "qty": 80, "unit": "g", "kcal": 230, "protein": 7, "carbs": 38, "fat": 5}, {"name": "Maïs", "qty": 50, "unit": "g", "kcal": 43, "protein": 1.5, "carbs": 9, "fat": 0.6}, {"name": "Poivron", "qty": 80, "unit": "g", "kcal": 20, "protein": 0.7, "carbs": 4, "fat": 0.2}, {"name": "Épices tex-mex", "qty": 5, "unit": "g", "kcal": 15, "protein": 1, "carbs": 2, "fat": 0.3}, {"name": "Oignon", "qty": 40, "unit": "g", "kcal": 16, "protein": 0, "carbs": 4, "fat": 0}], "steps": ["Poêle : oignon + poivron 4 min.", "Bœuf + épices 6 min.", "Garnir les tortillas + maïs."], "tip": "Prépare la garniture en lot, assemble au moment.", "tags": ["mexicain", "rapide", "high-protein", "batch"]},
  {"id": "D20", "name": "Bœuf haché chou & riz (façon yakimeshi)", "category": "dinner", "emoji": "🥩", "prepTime": 6, "cookTime": 14, "batch": true, "macros": {"kcal": 568, "protein": 38, "carbs": 60, "fat": 18}, "ingredients": [{"name": "Steak haché 5%", "qty": 150, "unit": "g", "kcal": 233, "protein": 31, "carbs": 0, "fat": 11}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Chou blanc", "qty": 100, "unit": "g", "kcal": 25, "protein": 1.3, "carbs": 5, "fat": 0.1}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Huile de sésame", "qty": 6, "unit": "g", "kcal": 53, "protein": 0, "carbs": 0, "fat": 6}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Riz cuit.", "Poêle : ail + chou 4 min.", "Bœuf 6 min.", "Riz + soja + sésame, sauter 2 min."], "tip": "Un riz sauté complet et pas cher. Le chou apporte du volume.", "tags": ["asiatique", "rapide", "high-protein", "batch"]},
  {"id": "D21", "name": "Boulettes de bœuf sauce tomate & pâtes", "category": "dinner", "emoji": "🍝", "prepTime": 10, "cookTime": 16, "batch": true, "macros": {"kcal": 687, "protein": 52, "carbs": 74, "fat": 18}, "ingredients": [{"name": "Steak haché 5%", "qty": 150, "unit": "g", "kcal": 233, "protein": 31, "carbs": 0, "fat": 11}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Chapelure", "qty": 20, "unit": "g", "kcal": 73, "protein": 2, "carbs": 15, "fat": 0.5}, {"name": "Pâtes complètes", "qty": 75, "unit": "g", "kcal": 263, "protein": 11, "carbs": 52, "fat": 1.5}, {"name": "Tomates concassées", "qty": 150, "unit": "g", "kcal": 36, "protein": 1.5, "carbs": 6, "fat": 0.3}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Boulettes : bœuf + œuf + chapelure.", "Air fryer 180°C 12 min.", "Sauce tomate + ail 8 min.", "Pâtes cuites, tout mélanger."], "tip": "Les boulettes se congèlent : fais-en le double.", "tags": ["italien", "comfort", "high-protein", "batch", "air fryer"]},
  {"id": "D22", "name": "Escalope de dinde panée air fryer & frites", "category": "dinner", "emoji": "🦃", "prepTime": 8, "cookTime": 18, "batch": true, "macros": {"kcal": 570, "protein": 51, "carbs": 52, "fat": 15}, "ingredients": [{"name": "Blanc de dinde", "qty": 170, "unit": "g", "kcal": 193, "protein": 38, "carbs": 0, "fat": 3}, {"name": "Chapelure", "qty": 25, "unit": "g", "kcal": 91, "protein": 3, "carbs": 18, "fat": 0.6}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Pommes de terre", "qty": 200, "unit": "g", "kcal": 154, "protein": 4, "carbs": 34, "fat": 0.2}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Frites air fryer 180°C 18 min.", "Dinde panée (œuf+chapelure).", "Air fryer 180°C 11 min."], "tip": "Plus maigre que le poulet pané. Sans friture.", "tags": ["air fryer", "comfort", "high-protein", "batch"]},
  {"id": "D23", "name": "Dinde sautée curry-coco & riz", "category": "dinner", "emoji": "🦃", "prepTime": 6, "cookTime": 14, "batch": true, "macros": {"kcal": 579, "protein": 48, "carbs": 67, "fat": 11}, "ingredients": [{"name": "Blanc de dinde", "qty": 170, "unit": "g", "kcal": 193, "protein": 38, "carbs": 0, "fat": 3}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Lait de coco light", "qty": 100, "unit": "ml", "kcal": 73, "protein": 1, "carbs": 3, "fat": 6}, {"name": "Pâte de curry", "qty": 15, "unit": "g", "kcal": 30, "protein": 1, "carbs": 4, "fat": 1}, {"name": "Épinards", "qty": 80, "unit": "g", "kcal": 18, "protein": 2, "carbs": 3, "fat": 0.4}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}], "steps": ["Riz cuit.", "Oignon + curry 2 min.", "Dinde 6 min.", "Coco + épinards 5 min."], "tip": "Comme le curry de poulet, en plus maigre.", "tags": ["asiatique", "rapide", "high-protein", "batch"]},
  {"id": "D24", "name": "Dinde hachée chili & patate douce", "category": "dinner", "emoji": "🦃", "prepTime": 6, "cookTime": 16, "batch": true, "macros": {"kcal": 512, "protein": 50, "carbs": 65, "fat": 5}, "ingredients": [{"name": "Dinde hachée", "qty": 160, "unit": "g", "kcal": 186, "protein": 37, "carbs": 0, "fat": 4}, {"name": "Patate douce", "qty": 180, "unit": "g", "kcal": 155, "protein": 2.7, "carbs": 36, "fat": 0.3}, {"name": "Haricots rouges", "qty": 100, "unit": "g", "kcal": 127, "protein": 8, "carbs": 22, "fat": 0.5}, {"name": "Tomates concassées", "qty": 120, "unit": "g", "kcal": 29, "protein": 1, "carbs": 5, "fat": 0.2}, {"name": "Épices chili", "qty": 5, "unit": "g", "kcal": 15, "protein": 1, "carbs": 2, "fat": 0.3}], "steps": ["Patate douce air fryer 180°C 16 min.", "Poêle : dinde + épices 6 min.", "Haricots + tomates 8 min."], "tip": "Riche en fibres et protéines, peu de gras.", "tags": ["mexicain", "high-protein", "batch", "air fryer"]},
  {"id": "D25", "name": "Dinde teriyaki & boulghour", "category": "dinner", "emoji": "🦃", "prepTime": 5, "cookTime": 15, "batch": true, "macros": {"kcal": 517, "protein": 49, "carbs": 63, "fat": 7}, "ingredients": [{"name": "Blanc de dinde", "qty": 170, "unit": "g", "kcal": 193, "protein": 38, "carbs": 0, "fat": 3}, {"name": "Boulghour", "qty": 70, "unit": "g", "kcal": 240, "protein": 8, "carbs": 50, "fat": 1}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Miel", "qty": 10, "unit": "g", "kcal": 30, "protein": 0, "carbs": 8, "fat": 0}, {"name": "Courgettes", "qty": 100, "unit": "g", "kcal": 17, "protein": 1, "carbs": 3, "fat": 0.3}, {"name": "Sésame", "qty": 5, "unit": "g", "kcal": 29, "protein": 1, "carbs": 1, "fat": 2.5}], "steps": ["Boulghour cuit.", "Dinde saisie 6 min.", "Soja + miel, glacer.", "Courgettes 3 min + sésame."], "tip": "Le boulghour change du riz et tient bien au corps.", "tags": ["asiatique", "rapide", "high-protein", "batch", "sucré-salé"]},
  {"id": "L08", "name": "Wrap dinde-avocat", "category": "lunch", "emoji": "🌯", "prepTime": 8, "cookTime": 6, "batch": false, "macros": {"kcal": 462, "protein": 36, "carbs": 44, "fat": 15}, "ingredients": [{"name": "Blanc de dinde", "qty": 120, "unit": "g", "kcal": 136, "protein": 27, "carbs": 0, "fat": 2}, {"name": "Tortillas blé complètes", "qty": 80, "unit": "g", "kcal": 230, "protein": 7, "carbs": 38, "fat": 5}, {"name": "Avocat", "qty": 50, "unit": "g", "kcal": 80, "protein": 1, "carbs": 2.5, "fat": 7.5}, {"name": "Salade verte", "qty": 30, "unit": "g", "kcal": 5, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Tomates cerise", "qty": 60, "unit": "g", "kcal": 11, "protein": 0.5, "carbs": 2, "fat": 0.1}], "steps": ["Dinde poêlée 5 min.", "Garnir la tortilla : dinde, avocat, salade, tomates.", "Rouler."], "tip": "Rapide et rassasiant pour le midi.", "tags": ["wrap", "rapide", "high-protein"]},
  {"id": "L09", "name": "Bowl dinde-quinoa-légumes", "category": "lunch", "emoji": "🥗", "prepTime": 10, "cookTime": 12, "batch": true, "macros": {"kcal": 464, "protein": 40, "carbs": 44, "fat": 12}, "ingredients": [{"name": "Blanc de dinde", "qty": 140, "unit": "g", "kcal": 159, "protein": 31, "carbs": 0, "fat": 2.5}, {"name": "Quinoa", "qty": 60, "unit": "g", "kcal": 222, "protein": 8, "carbs": 39, "fat": 3.5}, {"name": "Courgettes", "qty": 80, "unit": "g", "kcal": 14, "protein": 0.8, "carbs": 2.4, "fat": 0.2}, {"name": "Poivron", "qty": 60, "unit": "g", "kcal": 15, "protein": 0.5, "carbs": 3, "fat": 0.1}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Quinoa cuit.", "Dinde + légumes poêlés 8 min.", "Assembler le bowl, filet d'huile."], "tip": "Meal-prep idéal : se garde 2-3 jours.", "tags": ["bowl", "batch", "high-protein"]},
  {"id": "L10", "name": "Salade dinde-feta-épinards", "category": "lunch", "emoji": "🥙", "prepTime": 10, "cookTime": 6, "batch": true, "macros": {"kcal": 479, "protein": 41, "carbs": 35, "fat": 18}, "ingredients": [{"name": "Blanc de dinde", "qty": 130, "unit": "g", "kcal": 147, "protein": 29, "carbs": 0, "fat": 2.3}, {"name": "Quinoa", "qty": 50, "unit": "g", "kcal": 185, "protein": 6.5, "carbs": 32, "fat": 2.9}, {"name": "Feta", "qty": 30, "unit": "g", "kcal": 79, "protein": 4, "carbs": 1, "fat": 6}, {"name": "Épinards", "qty": 60, "unit": "g", "kcal": 14, "protein": 1.5, "carbs": 2, "fat": 0.3}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Dinde poêlée, émincée.", "Mélanger quinoa, épinards, feta.", "Huile + citron."], "tip": "Salade complète et protéinée.", "tags": ["salade", "batch", "high-protein"]},
  {"id": "D26", "name": "Saumon teriyaki air fryer & riz", "category": "dinner", "emoji": "🐟", "prepTime": 6, "cookTime": 16, "batch": true, "macros": {"kcal": 679, "protein": 43, "carbs": 69, "fat": 26}, "ingredients": [{"name": "Saumon", "qty": 160, "unit": "g", "kcal": 333, "protein": 33, "carbs": 0, "fat": 22}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Miel", "qty": 10, "unit": "g", "kcal": 30, "protein": 0, "carbs": 8, "fat": 0}, {"name": "Brocoli", "qty": 100, "unit": "g", "kcal": 34, "protein": 3, "carbs": 6, "fat": 0.4}, {"name": "Sésame", "qty": 5, "unit": "g", "kcal": 29, "protein": 1, "carbs": 1, "fat": 2.5}], "steps": ["Riz cuit.", "Saumon enrobé soja+miel, air fryer 180°C 10 min.", "Brocoli vapeur + sésame."], "tip": "Le saumon laqué fondant. Le soir où tu veux du poisson.", "tags": ["air fryer", "poisson", "oméga-3", "sucré-salé"]},
  {"id": "D27", "name": "Pavé de colin citron & écrasé de pommes de terre", "category": "dinner", "emoji": "🐟", "prepTime": 6, "cookTime": 16, "batch": true, "macros": {"kcal": 397, "protein": 42, "carbs": 36, "fat": 10}, "ingredients": [{"name": "Poisson blanc (colin/merlu)", "qty": 180, "unit": "g", "kcal": 164, "protein": 38, "carbs": 0, "fat": 1.8}, {"name": "Pommes de terre", "qty": 200, "unit": "g", "kcal": 154, "protein": 4, "carbs": 34, "fat": 0.2}, {"name": "Citron (jus)", "qty": 15, "unit": "ml", "kcal": 3, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Huile d'olive", "qty": 8, "unit": "g", "kcal": 72, "protein": 0, "carbs": 0, "fat": 8}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Pommes de terre cuites → écrasé + huile.", "Colin air fryer 180°C 10 min, citron.", "Servir ensemble."], "tip": "Léger et maigre. Le colin est économique.", "tags": ["air fryer", "poisson", "léger", "rapide"]},
  {"id": "D28", "name": "Poisson pané air fryer & purée petits pois", "category": "dinner", "emoji": "🐟", "prepTime": 8, "cookTime": 16, "batch": true, "macros": {"kcal": 467, "protein": 52, "carbs": 34, "fat": 13}, "ingredients": [{"name": "Poisson blanc (colin/merlu)", "qty": 170, "unit": "g", "kcal": 155, "protein": 36, "carbs": 0, "fat": 1.7}, {"name": "Chapelure", "qty": 25, "unit": "g", "kcal": 91, "protein": 3, "carbs": 18, "fat": 0.6}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Petits pois", "qty": 120, "unit": "g", "kcal": 98, "protein": 7.5, "carbs": 16.5, "fat": 0.6}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}], "steps": ["Poisson pané (œuf+chapelure), air fryer 180°C 11 min.", "Petits pois cuits, écrasés grossièrement."], "tip": "Le fish & chips sain. Sans friture.", "tags": ["air fryer", "poisson", "comfort", "high-protein"]},
  {"id": "D29", "name": "Curry de poisson coco & riz", "category": "dinner", "emoji": "🐟", "prepTime": 6, "cookTime": 15, "batch": true, "macros": {"kcal": 521, "protein": 45, "carbs": 63, "fat": 10}, "ingredients": [{"name": "Poisson blanc (colin/merlu)", "qty": 170, "unit": "g", "kcal": 155, "protein": 36, "carbs": 0, "fat": 1.7}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Lait de coco light", "qty": 100, "unit": "ml", "kcal": 73, "protein": 1, "carbs": 3, "fat": 6}, {"name": "Pâte de curry", "qty": 15, "unit": "g", "kcal": 30, "protein": 1, "carbs": 4, "fat": 1}, {"name": "Épinards", "qty": 80, "unit": "g", "kcal": 18, "protein": 2, "carbs": 3, "fat": 0.4}], "steps": ["Riz cuit.", "Curry + coco frémir 3 min.", "Poisson 6 min.", "Épinards 2 min."], "tip": "Le poisson en sauce, doux et parfumé.", "tags": ["asiatique", "poisson", "rapide"]},
  {"id": "D30", "name": "Saumon à la poêle & nouilles sésame", "category": "dinner", "emoji": "🐟", "prepTime": 6, "cookTime": 12, "batch": true, "macros": {"kcal": 635, "protein": 37, "carbs": 58, "fat": 27}, "ingredients": [{"name": "Saumon", "qty": 150, "unit": "g", "kcal": 312, "protein": 31, "carbs": 0, "fat": 20.5}, {"name": "Nouilles de riz", "qty": 70, "unit": "g", "kcal": 250, "protein": 4, "carbs": 55, "fat": 0.5}, {"name": "Sauce soja", "qty": 12, "unit": "ml", "kcal": 6, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Huile de sésame", "qty": 6, "unit": "g", "kcal": 53, "protein": 0, "carbs": 0, "fat": 6}, {"name": "Courgettes", "qty": 80, "unit": "g", "kcal": 14, "protein": 0.8, "carbs": 2.4, "fat": 0.2}], "steps": ["Nouilles cuites.", "Saumon poêlé peau croustillante 8 min.", "Courgettes 3 min, soja + sésame."], "tip": "Saumon à la poêle, peau croustillante.", "tags": ["asiatique", "poisson", "oméga-3", "rapide"]},
  {"id": "D31", "name": "Boulettes de poisson & riz citronné", "category": "dinner", "emoji": "🐟", "prepTime": 10, "cookTime": 14, "batch": true, "macros": {"kcal": 554, "protein": 49, "carbs": 69, "fat": 8}, "ingredients": [{"name": "Poisson blanc (colin/merlu)", "qty": 170, "unit": "g", "kcal": 155, "protein": 36, "carbs": 0, "fat": 1.7}, {"name": "Oeufs", "qty": 1, "unit": "pièces", "kcal": 78, "protein": 6, "carbs": 0, "fat": 5}, {"name": "Chapelure", "qty": 20, "unit": "g", "kcal": 73, "protein": 2, "carbs": 15, "fat": 0.5}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Citron (jus)", "qty": 15, "unit": "ml", "kcal": 3, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Mixer poisson + œuf + chapelure → boulettes.", "Air fryer 180°C 12 min.", "Riz citronné."], "tip": "Une autre façon de manger du poisson, se congèle.", "tags": ["air fryer", "poisson", "batch", "high-protein"]},
  {"id": "L11", "name": "Bowl saumon-riz-avocat (poke)", "category": "lunch", "emoji": "🐟", "prepTime": 10, "cookTime": 8, "batch": true, "macros": {"kcal": 599, "protein": 34, "carbs": 51, "fat": 28}, "ingredients": [{"name": "Saumon", "qty": 130, "unit": "g", "kcal": 271, "protein": 27, "carbs": 0, "fat": 18}, {"name": "Riz", "qty": 60, "unit": "g", "kcal": 210, "protein": 4, "carbs": 45, "fat": 0.8}, {"name": "Avocat", "qty": 50, "unit": "g", "kcal": 80, "protein": 1, "carbs": 2.5, "fat": 7.5}, {"name": "Concombre", "qty": 60, "unit": "g", "kcal": 9, "protein": 0.4, "carbs": 1.8, "fat": 0.1}, {"name": "Sauce soja", "qty": 12, "unit": "ml", "kcal": 6, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Sésame", "qty": 4, "unit": "g", "kcal": 23, "protein": 0.8, "carbs": 0.8, "fat": 2}], "steps": ["Riz cuit, refroidi.", "Saumon poêlé ou cru en cubes.", "Assembler avec avocat, concombre.", "Soja + sésame."], "tip": "Poke bowl maison. Saumon bien frais si cru.", "tags": ["bowl", "poisson", "oméga-3", "batch"]},
  {"id": "L12", "name": "Wrap saumon-fromage frais", "category": "lunch", "emoji": "🌯", "prepTime": 6, "cookTime": 0, "batch": false, "macros": {"kcal": 501, "protein": 32, "carbs": 42, "fat": 23}, "ingredients": [{"name": "Saumon", "qty": 100, "unit": "g", "kcal": 208, "protein": 21, "carbs": 0, "fat": 14}, {"name": "Tortillas blé complètes", "qty": 80, "unit": "g", "kcal": 230, "protein": 7, "carbs": 38, "fat": 5}, {"name": "Fromage frais léger", "qty": 40, "unit": "g", "kcal": 56, "protein": 4, "carbs": 2, "fat": 3.6}, {"name": "Salade verte", "qty": 30, "unit": "g", "kcal": 5, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Citron (jus)", "qty": 10, "unit": "ml", "kcal": 2, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Étaler le fromage frais.", "Saumon (cuit ou fumé) + salade + citron.", "Rouler."], "tip": "Sans cuisson si saumon fumé. Express.", "tags": ["wrap", "poisson", "0-cuisson", "rapide"]},
  {"id": "L13", "name": "Salade thon-haricots-œufs", "category": "lunch", "emoji": "🥗", "prepTime": 10, "cookTime": 8, "batch": true, "macros": {"kcal": 520, "protein": 54, "carbs": 28, "fat": 20}, "ingredients": [{"name": "Thon au naturel", "qty": 120, "unit": "g", "kcal": 139, "protein": 31, "carbs": 0, "fat": 1}, {"name": "Haricots blancs", "qty": 100, "unit": "g", "kcal": 139, "protein": 9.5, "carbs": 25, "fat": 0.6}, {"name": "Oeufs", "qty": 2, "unit": "pièces", "kcal": 156, "protein": 13, "carbs": 0, "fat": 10}, {"name": "Tomates cerise", "qty": 80, "unit": "g", "kcal": 14, "protein": 1, "carbs": 3, "fat": 0.2}, {"name": "Huile d'olive", "qty": 8, "unit": "g", "kcal": 72, "protein": 0, "carbs": 0, "fat": 8}], "steps": ["Œufs durs.", "Mélanger thon, haricots, tomates.", "Œufs en quartiers, huile + citron."], "tip": "Salade complète façon niçoise, très protéinée.", "tags": ["salade", "high-protein", "batch"]},
  {"id": "D32", "name": "Tofu général Tao air fryer & riz", "category": "dinner", "emoji": "🍱", "prepTime": 8, "cookTime": 16, "batch": true, "macros": {"kcal": 589, "protein": 38, "carbs": 76, "fat": 17}, "ingredients": [{"name": "Tofu ferme", "qty": 180, "unit": "g", "kcal": 262, "protein": 29, "carbs": 5, "fat": 16}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Miel", "qty": 12, "unit": "g", "kcal": 36, "protein": 0, "carbs": 10, "fat": 0}, {"name": "Brocoli", "qty": 100, "unit": "g", "kcal": 34, "protein": 3, "carbs": 6, "fat": 0.4}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Tofu en cubes, air fryer 200°C 14 min.", "Sauce : soja + miel + ail, réduire.", "Enrober le tofu, brocoli."], "tip": "Le tofu croustillant laqué. Bluffant à l'air fryer.", "tags": ["air fryer", "végé-friendly", "batch", "sucré-salé"]},
  {"id": "D33", "name": "Curry de pois chiches & riz", "category": "dinner", "emoji": "🍛", "prepTime": 6, "cookTime": 16, "batch": true, "macros": {"kcal": 577, "protein": 22, "carbs": 100, "fat": 9}, "ingredients": [{"name": "Pois chiches", "qty": 150, "unit": "g", "kcal": 191, "protein": 12, "carbs": 33, "fat": 0.8}, {"name": "Riz", "qty": 70, "unit": "g", "kcal": 245, "protein": 5, "carbs": 53, "fat": 1}, {"name": "Lait de coco light", "qty": 100, "unit": "ml", "kcal": 73, "protein": 1, "carbs": 3, "fat": 6}, {"name": "Pâte de curry", "qty": 15, "unit": "g", "kcal": 30, "protein": 1, "carbs": 4, "fat": 1}, {"name": "Épinards", "qty": 80, "unit": "g", "kcal": 18, "protein": 2, "carbs": 3, "fat": 0.4}, {"name": "Oignon", "qty": 50, "unit": "g", "kcal": 20, "protein": 1, "carbs": 4, "fat": 0}], "steps": ["Riz cuit.", "Oignon + curry 2 min.", "Pois chiches + coco 8 min.", "Épinards 2 min."], "tip": "Végé, riche en fibres. Encore meilleur réchauffé.", "tags": ["indien", "végé-friendly", "batch", "légumineuses"]},
  {"id": "D34", "name": "Dahl de lentilles corail & riz", "category": "dinner", "emoji": "🍛", "prepTime": 6, "cookTime": 18, "batch": true, "macros": {"kcal": 591, "protein": 31, "carbs": 100, "fat": 8}, "ingredients": [{"name": "Lentilles corail", "qty": 90, "unit": "g", "kcal": 319, "protein": 24, "carbs": 54, "fat": 1.8}, {"name": "Riz", "qty": 50, "unit": "g", "kcal": 175, "protein": 4, "carbs": 38, "fat": 0.7}, {"name": "Lait de coco light", "qty": 80, "unit": "ml", "kcal": 58, "protein": 0.8, "carbs": 2.4, "fat": 4.8}, {"name": "Tomates concassées", "qty": 100, "unit": "g", "kcal": 24, "protein": 1, "carbs": 4, "fat": 0.2}, {"name": "Épices curry", "qty": 5, "unit": "g", "kcal": 15, "protein": 1, "carbs": 2, "fat": 0.3}], "steps": ["Lentilles + eau + épices, 15 min.", "Coco + tomates, 3 min.", "Servir avec le riz."], "tip": "Pas cher, ultra nourrissant. Le dahl se garde 4 jours.", "tags": ["indien", "végé-friendly", "batch", "légumineuses"]},
  {"id": "D35", "name": "Tofu sauté thaï & nouilles", "category": "dinner", "emoji": "🍜", "prepTime": 8, "cookTime": 12, "batch": true, "macros": {"kcal": 634, "protein": 39, "carbs": 69, "fat": 24}, "ingredients": [{"name": "Tofu ferme", "qty": 180, "unit": "g", "kcal": 262, "protein": 29, "carbs": 5, "fat": 16}, {"name": "Nouilles de riz", "qty": 70, "unit": "g", "kcal": 250, "protein": 4, "carbs": 55, "fat": 0.5}, {"name": "Sauce soja", "qty": 15, "unit": "ml", "kcal": 8, "protein": 1, "carbs": 1, "fat": 0}, {"name": "Beurre de cacahuète", "qty": 15, "unit": "g", "kcal": 90, "protein": 4, "carbs": 3, "fat": 7.5}, {"name": "Poivron", "qty": 80, "unit": "g", "kcal": 20, "protein": 0.7, "carbs": 4, "fat": 0.2}, {"name": "Ail", "qty": 1, "unit": "gousses", "kcal": 4, "protein": 0, "carbs": 1, "fat": 0}], "steps": ["Nouilles cuites.", "Tofu poêlé 6 min.", "Sauce : soja + cacahuète + ail.", "Poivron + nouilles, mélanger."], "tip": "Pad thaï végé express. La sauce cacahuète fait tout.", "tags": ["thaï", "végé-friendly", "rapide", "batch"]},
  {"id": "D36", "name": "Omelette épinards-feta & pain", "category": "dinner", "emoji": "🍳", "prepTime": 4, "cookTime": 8, "batch": false, "macros": {"kcal": 491, "protein": 29, "carbs": 25, "fat": 29}, "ingredients": [{"name": "Oeufs", "qty": 3, "unit": "pièces", "kcal": 234, "protein": 19, "carbs": 1, "fat": 16}, {"name": "Feta", "qty": 30, "unit": "g", "kcal": 79, "protein": 4, "carbs": 1, "fat": 6}, {"name": "Épinards", "qty": 80, "unit": "g", "kcal": 18, "protein": 2, "carbs": 3, "fat": 0.4}, {"name": "Pain complet", "qty": 50, "unit": "g", "kcal": 115, "protein": 4, "carbs": 20, "fat": 1.5}, {"name": "Huile d'olive", "qty": 5, "unit": "g", "kcal": 45, "protein": 0, "carbs": 0, "fat": 5}], "steps": ["Épinards poêlés 2 min.", "Œufs battus + feta, cuire.", "Plier, servir avec le pain."], "tip": "Le dîner dépannage végé en 10 min.", "tags": ["végé-friendly", "rapide", "oeufs", "high-protein"]},
  {"id": "L14", "name": "Buddha bowl pois chiches-quinoa", "category": "lunch", "emoji": "🥗", "prepTime": 10, "cookTime": 12, "batch": true, "macros": {"kcal": 534, "protein": 19, "carbs": 73, "fat": 18}, "ingredients": [{"name": "Pois chiches", "qty": 120, "unit": "g", "kcal": 153, "protein": 9.6, "carbs": 26, "fat": 0.7}, {"name": "Quinoa", "qty": 60, "unit": "g", "kcal": 222, "protein": 8, "carbs": 39, "fat": 3.5}, {"name": "Avocat", "qty": 50, "unit": "g", "kcal": 80, "protein": 1, "carbs": 2.5, "fat": 7.5}, {"name": "Carottes", "qty": 60, "unit": "g", "kcal": 25, "protein": 0.5, "carbs": 5.7, "fat": 0.1}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Quinoa cuit.", "Pois chiches air fryer 180°C 12 min (croustillants).", "Assembler avec avocat, carottes."], "tip": "Végé complet, plein de fibres. Les pois chiches croustillants changent tout.", "tags": ["bowl", "végé-friendly", "batch", "légumineuses"]},
  {"id": "L15", "name": "Wrap falafel-houmous", "category": "lunch", "emoji": "🌯", "prepTime": 10, "cookTime": 12, "batch": true, "macros": {"kcal": 484, "protein": 20, "carbs": 67, "fat": 14}, "ingredients": [{"name": "Pois chiches", "qty": 120, "unit": "g", "kcal": 153, "protein": 9.6, "carbs": 26, "fat": 0.7}, {"name": "Tortillas blé complètes", "qty": 80, "unit": "g", "kcal": 230, "protein": 7, "carbs": 38, "fat": 5}, {"name": "Fromage frais léger", "qty": 30, "unit": "g", "kcal": 42, "protein": 3, "carbs": 2, "fat": 2.7}, {"name": "Salade verte", "qty": 30, "unit": "g", "kcal": 5, "protein": 0, "carbs": 1, "fat": 0}, {"name": "Huile d'olive", "qty": 6, "unit": "g", "kcal": 54, "protein": 0, "carbs": 0, "fat": 6}], "steps": ["Falafels : pois chiches mixés + épices, façonnés.", "Air fryer 180°C 12 min.", "Garnir la tortilla + fromage frais + salade."], "tip": "Végé et rassasiant. Les falafels se font en lot.", "tags": ["wrap", "végé-friendly", "batch", "légumineuses"]},
  {"id": "L16", "name": "Salade lentilles-feta-tomates", "category": "lunch", "emoji": "🥙", "prepTime": 8, "cookTime": 0, "batch": true, "macros": {"kcal": 313, "protein": 15, "carbs": 30, "fat": 15}, "ingredients": [{"name": "Lentilles vertes", "qty": 120, "unit": "g", "kcal": 139, "protein": 9.6, "carbs": 24, "fat": 0.5}, {"name": "Feta", "qty": 30, "unit": "g", "kcal": 79, "protein": 4, "carbs": 1, "fat": 6}, {"name": "Tomates cerise", "qty": 80, "unit": "g", "kcal": 14, "protein": 1, "carbs": 3, "fat": 0.2}, {"name": "Concombre", "qty": 60, "unit": "g", "kcal": 9, "protein": 0.4, "carbs": 1.8, "fat": 0.1}, {"name": "Huile d'olive", "qty": 8, "unit": "g", "kcal": 72, "protein": 0, "carbs": 0, "fat": 8}], "steps": ["Lentilles déjà cuites (ou conserve).", "Mélanger feta, tomates, concombre.", "Huile + vinaigre."], "tip": "Salade froide prête en 5 min avec des lentilles cuites.", "tags": ["salade", "végé-friendly", "0-cuisson", "légumineuses"]},
];

const getDinners = () => RECIPES.filter(r => r.category === 'dinner');
const getLunches = () => RECIPES.filter(r => r.category === 'lunch');
const getSides   = () => RECIPES.filter(r => r.category === 'side');
const getSweets  = () => RECIPES.filter(r => r.category === 'sweet');
const getStarters = () => RECIPES.filter(r => r.category === 'starter');
const getById    = (id) => RECIPES.find(r => r.id === id);
const getBatch   = () => RECIPES.filter(r => r.batch);

// ──────────────────────────────────────────────
// data/calculator.js
// ──────────────────────────────────────────────
// calculator.js — Moteur Zero to Hero
// Reproduit exactement les formules du calculateur Excel.
//
// BMR1 = 13.707×poids + 492.3×taille(m) − 6.673×âge + 77.607
// BMR2 = 21.6×poids×(100−bf)/100 + 370
// BMR  = moyenne(BMR1, BMR2)
// MMR (maintenance) = BMR × 1.5
// Masse maigre = poids×(100−bf)/100
// Protéines = moyenne(poids×1.5, massemaigre×2)   [g/jour]
// Lipides   = 1.2×poids×(1−bf/100)                 [g/jour]
// Glucides  = (kcal − prot×4 − lip×9) / 4          [g/jour]

const PROTOCOLS = [
  {
    id: 'P1', name: 'Prise de muscle propre', emoji: '💪',
    tagline: 'Construire du muscle en limitant le gras',
    desc: 'Léger surplus calorique progressif. On ajoute des calories au fil des semaines pour continuer à prendre du muscle sans accumuler de gras superflu.',
    phases: [
      { label: 'Semaine initiale', offset: 0,
        advice: 'Démarre à maintenance. Mange à ta dépense réelle, le temps que ton corps s\'adapte et que ta force grimpe.',
        advance: 'Passe à l\'étape suivante quand ta progression en charge stagne 2 semaines de suite.' },
      { label: 'Étape 1', offset: +200,
        advice: 'Surplus de +200 kcal. C\'est le sweet spot pour gagner du muscle proprement (~+0.25 kg/semaine max).',
        advance: 'Augmente encore si la prise de poids ralentit et que le miroir reste net.' },
      { label: 'Étape 2', offset: +400,
        advice: 'Surplus de +400 kcal pour les phases où tu pousses fort. Surveille le tour de taille — si le gras monte trop vite, redescends.',
        advance: 'Dernier palier. Reviens en arrière dès que la prise de gras devient visible.' },
    ],
  },
  {
    id: 'P2', name: 'Recomposition corporelle', emoji: '🔄',
    tagline: 'Perdre du gras ET gagner du muscle',
    desc: 'Un seul réglage : maintenance −300 kcal. Avec des protéines élevées et un entraînement sérieux, le corps puise dans le gras tout en construisant du muscle. Idéal si tu débutes ou reprends après une pause.',
    phases: [
      { label: 'Phase unique', offset: -300,
        advice: 'Reste sur ce déficit léger sur la durée. La balance bougera peu mais le miroir et les mensurations, oui. C\'est normal et c\'est le but.',
        advance: 'Pas de palier à changer. Réévalue ton profil (poids, masse grasse) toutes les 4 semaines pour recalculer.' },
    ],
  },
  {
    id: 'P3', name: 'Créer le déficit parfait', emoji: '🎯',
    tagline: 'Sécher de façon maîtrisée',
    desc: 'Déficit en deux paliers. On commence modéré, puis on creuse quand la perte ralentit. Bon compromis vitesse / confort pour une sèche de quelques semaines.',
    phases: [
      { label: 'Semaine initiale', offset: -300,
        advice: 'Déficit doux de −300 kcal. Tu perds ~0.3 kg/semaine sans souffrir, l\'énergie reste bonne.',
        advance: 'Passe à l\'étape 1 quand ton poids stagne ~10 jours.' },
      { label: 'Étape 1', offset: -500,
        advice: 'Déficit de −500 kcal, ~0.5 kg/semaine. La faim se fait sentir : appuie-toi sur les protéines et les légumes pour le volume.',
        advance: 'C\'est le palier final de ce protocole. Si tu dois aller plus loin, bascule sur le Protocole 4.' },
    ],
  },
  {
    id: 'P4', name: 'Perte de gras progressive', emoji: '📉',
    tagline: 'Sécher sur la durée sans choc',
    desc: 'Déficit en trois paliers. On augmente progressivement la restriction pour éviter le coup de frein métabolique et tenir sur plusieurs mois. Le protocole conseillé pour une vraie transformation.',
    phases: [
      { label: 'Semaine initiale', offset: -300,
        advice: 'Démarrage en douceur à −300 kcal. Laisse le corps s\'habituer, garde toute ton énergie pour les séances.',
        advance: 'Passe à l\'étape 1 dès que la perte de poids ralentit (~2 semaines).' },
      { label: 'Étape 1', offset: -500,
        advice: 'On creuse à −500 kcal. Perte régulière d\'environ 0.5 kg/semaine. Priorise protéines + sommeil.',
        advance: 'Passe à l\'étape 2 quand le poids stagne à nouveau malgré le respect du plan.' },
      { label: 'Étape 2', offset: -700,
        advice: 'Déficit fort de −700 kcal pour la dernière ligne droite. À tenir sur des périodes courtes. Hydratation et fibres essentielles.',
        advance: 'Palier final. Après ça, prévois une phase de maintenance avant de repartir.' },
    ],
  },
];

function getProtocol(id) {
  return PROTOCOLS.find(p => p.id === id) || PROTOCOLS[3];
}

// profile = { age, height (m), weight (kg), bodyfat (%) }
function computeBase(profile) {
  const { age, height, weight, bodyfat } = profile;
  const bmr1 = 13.707 * weight + 492.3 * height - 6.673 * age + 77.607;
  const bmr2 = 21.6 * weight * (100 - bodyfat) / 100 + 370;
  const bmr  = (bmr1 + bmr2) / 2;
  const maintenance = bmr * 1.5;
  const leanMass = weight * (100 - bodyfat) / 100;
  const protein  = (weight * 1.5 + leanMass * 2) / 2;
  const fat      = 1.2 * weight * (1 - bodyfat / 100);
  return { bmr1, bmr2, bmr, maintenance, leanMass, protein, fat };
}

// Renvoie les cibles { kcal, protein, carbs, fat } pour une phase donnée
function computeTargets(profile, protocolId, phaseIndex = 0) {
  const base = computeBase(profile);
  const protocol = getProtocol(protocolId);
  const phase = protocol.phases[Math.min(phaseIndex, protocol.phases.length - 1)];
  const kcal = base.maintenance + phase.offset;
  const protein = base.protein;
  const fat = base.fat;
  const carbs = (kcal - protein * 4 - fat * 9) / 4;
  return {
    kcal:    Math.round(kcal),
    protein: Math.round(protein),
    carbs:   Math.round(carbs),
    fat:     Math.round(fat),
  };
}

// Toutes les phases d'un protocole (pour affichage du plan complet)
function computeAllPhases(profile, protocolId) {
  const protocol = getProtocol(protocolId);
  return protocol.phases.map((ph, i) => ({
    label: ph.label,
    offset: ph.offset,
    targets: computeTargets(profile, protocolId, i),
  }));
}

// Profil persisté
const DEFAULT_PROFILE = { age: 24, height: 1.85, weight: 97, bodyfat: 20 };

function getProfile() {
  const saved = localStorage.getItem('diet_profile');
  if (saved) { try { return { ...DEFAULT_PROFILE, ...JSON.parse(saved) }; } catch {} }
  return { ...DEFAULT_PROFILE };
}
function saveProfile(p) { localStorage.setItem('diet_profile', JSON.stringify(p)); }

function getSelectedProtocol() {
  return localStorage.getItem('diet_protocol') || 'P4';
}
function saveSelectedProtocol(id) { localStorage.setItem('diet_protocol', id); }

function getSelectedPhase() {
  return parseInt(localStorage.getItem('diet_phase') || '0');
}
function saveSelectedPhase(i) { localStorage.setItem('diet_phase', String(i)); }



// ──────────────────────────────────────────────
// data/user.js
// ──────────────────────────────────────────────
// user.js — Objectifs actifs.
// Priorité : targets manuels sauvegardés > calcul auto (profil + protocole) > défaut.


const DEFAULT_TARGETS = { kcal: 2200, protein: 180, carbs: 220, fat: 65 };

function getTargets() {
  const saved = localStorage.getItem('diet_targets');
  if (saved) {
    try { return { ...DEFAULT_TARGETS, ...JSON.parse(saved) }; } catch {}
  }
  // Pas de cible manuelle → calcul auto depuis le profil + protocole
  try {
    return computeTargets(getProfile(), getSelectedProtocol(), getSelectedPhase());
  } catch {
    return { ...DEFAULT_TARGETS };
  }
}

function saveTargets(targets) {
  localStorage.setItem('diet_targets', JSON.stringify(targets));
}

function resetTargets() {
  localStorage.removeItem('diet_targets');
  return getTargets();
}

function getWeeklyKcalTarget() {
  return getTargets().kcal * 7;
}

const USER = {
  name: 'User', age: 24, height: 185, weight: 97, sex: 'male',
  goal: 'cut', activityLevel: 1.4,
  get targets() { return getTargets(); },
  intermittentFasting: true,
  fastingWindow: { start: '20:00', end: '12:00' },
};



// ──────────────────────────────────────────────
// data/log.js
// ──────────────────────────────────────────────
// log.js — Journal & planning hebdomadaire
//
// Modèle de données (localStorage 'diet_log') :
//   { date: 'YYYY-MM-DD', meals: { lunch:[item], dinner:[item], sides:[item], sweet:[item] } }
// où item = { id: 'D01', servings: 1 }   ← servings = multiplicateur de portions
//
// Migration : les anciennes entrées stockaient des strings ('D01') → converties à la volée.

const EMPTY_MEALS = () => ({ starter: [], lunch: [], dinner: [], sides: [], sweet: [] });

function normalizeItem(item) {
  // Ancien format : string → { id, servings:1 }
  if (typeof item === 'string') return { id: item, servings: 1 };
  const out = { id: item.id, servings: item.servings || 1 };
  if (item.overrides) out.overrides = item.overrides; // quantités d'ingrédients ajustées
  return out;
}

function normalizeEntry(entry) {
  const meals = EMPTY_MEALS();
  ['starter', 'lunch', 'dinner', 'sides', 'sweet'].forEach(slot => {
    meals[slot] = (entry.meals?.[slot] || []).map(normalizeItem);
  });
  return { date: entry.date, meals };
}

function getLog() {
  const raw = JSON.parse(localStorage.getItem('diet_log') || '[]');
  return raw.map(normalizeEntry);
}

function saveLog(log) {
  localStorage.setItem('diet_log', JSON.stringify(log));
}

function getEntry(date) {
  const log = getLog();
  const existing = log.find(e => e.date === date);
  return existing || { date, meals: EMPTY_MEALS() };
}

function saveEntry(entry) {
  const log = getLog().filter(e => e.date !== entry.date);
  log.push(entry);
  saveLog(log);
}

function getTodayDate() {
  return new Date().toISOString().slice(0, 10);
}

function getTodayEntry() {
  return getEntry(getTodayDate());
}

function saveTodayEntry(entry) {
  saveEntry(entry);
}

// ── Helpers semaine ─────────────────────────────────
// Lundi comme premier jour de semaine.

function getWeekDates(refDate = new Date()) {
  const d = new Date(refDate);
  const day = (d.getDay() + 6) % 7; // 0 = lundi
  const monday = new Date(d);
  monday.setDate(d.getDate() - day);
  return Array.from({ length: 7 }, (_, i) => {
    const dd = new Date(monday);
    dd.setDate(monday.getDate() + i);
    return dd.toISOString().slice(0, 10);
  });
}

function getNextWeekDates() {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return getWeekDates(d);
}


// ──────────────────────────────────────────────
// js/utils.js
// ──────────────────────────────────────────────

function el(tag, cls = '', html = '') {
  const node = document.createElement(tag);
  if (cls)  node.className = cls;
  if (html) node.innerHTML = html;
  return node;
}

function formatDate(isoDate) {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long',
  });
}

function formatDateShort(isoDate) {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString('fr-FR', {
    weekday: 'short', day: 'numeric',
  });
}

function mbar(value, target, color, overThreshold = 1.08) {
  const pct = Math.min((value / target) * 100, 100).toFixed(1);
  const over = value > target * overThreshold;
  return `<div class="mbar-wrap"><div class="mbar ${over ? 'over' : ''}" style="width:${pct}%;background:${over ? 'var(--danger)' : color}"></div></div>`;
}

// Macros d'une recette × servings, arrondis
// Macros d'un plat : tient compte des overrides (quantités d'ingrédients ajustées en g).
// item = { id, servings, overrides? : { ingIndex: qtyGrams } }
function itemMacros(item) {
  const r = getById(item.id);
  if (!r) return { kcal: 0, protein: 0, carbs: 0, fat: 0 };
  const ov = item.overrides;
  const s = item.servings || 1;
  if (!ov) {
    // pas d'overrides : simple multiplication par les portions
    return {
      kcal:    r.macros.kcal    * s,
      protein: r.macros.protein * s,
      carbs:   r.macros.carbs   * s,
      fat:     r.macros.fat     * s,
    };
  }
  // overrides présents : on recalcule ingrédient par ingrédient
  return r.ingredients.reduce((acc, ing, idx) => {
    const q = ing.qty || 1;
    const qty = (ov[idx] != null ? ov[idx] : ing.qty * s);
    acc.kcal    += (ing.kcal    / q) * qty;
    acc.protein += (ing.protein / q) * qty;
    acc.carbs   += (ing.carbs   / q) * qty;
    acc.fat     += (ing.fat     / q) * qty;
    return acc;
  }, { kcal: 0, protein: 0, carbs: 0, fat: 0 });
}

function scaledMacros(recipe, servings = 1) {
  return {
    kcal:    Math.round(recipe.macros.kcal    * servings),
    protein: Math.round(recipe.macros.protein * servings),
    carbs:   Math.round(recipe.macros.carbs   * servings),
    fat:     Math.round(recipe.macros.fat     * servings),
  };
}

// Total d'un jour : meals = { slot: [{id, servings, overrides?}] }
function computeDayMacros(entry) {
  const slots = ['starter', 'lunch', 'dinner', 'sides', 'sweet'];
  return slots.reduce((acc, slot) => {
    (entry.meals[slot] || []).forEach(item => {
      const m = itemMacros(item);
      acc.kcal += m.kcal; acc.protein += m.protein; acc.carbs += m.carbs; acc.fat += m.fat;
    });
    return acc;
  }, { kcal: 0, protein: 0, carbs: 0, fat: 0 });
}

function openSheet(html, onClose) {
  const overlay = el('div', 'overlay');
  overlay.innerHTML = `<div class="sheet" id="sheet">${html}</div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSheet(); });
  if (onClose) overlay._onClose = onClose;
}

function closeSheet() {
  const o = document.querySelector('.overlay');
  if (o) { o._onClose?.(); o.remove(); }
}


// ──────────────────────────────────────────────
// js/optimizer.js
// ──────────────────────────────────────────────
// optimizer.js — Ajuste les quantités d'ingrédients leviers pour caler les macros.
// Priorité : CALORIES + PROTÉINES, puis glucides/lipides suivent.
// Leviers : féculents (glucides) + sources de protéines. Le reste reste fixe.


// Leviers PROTÉINES : viandes & poissons principaux (pas les laitages/œufs/sauces).
const PROT_WORDS = ['poulet','boeuf','bœuf','steak','dinde','porc','veau','thon','saumon','colin',
  'merlu','cabillaud','crevette','merguez','poisson'];
// Leviers GLUCIDES : féculents principaux uniquement (pas miel/banane/sucre).
const CARB_WORDS = ['riz','pâte','pate','quinoa','semoule','boulghour','boulgour','nouille',
  'patate douce','pomme de terre','orzo','couscous','tortilla','pain complet'];
// Légumineuses = protéine + glucide à la fois.
const BOTH_WORDS = ['lentille','pois chiche','haricot rouge','haricot blanc'];

const norm = s => s.toLowerCase();

function classifyIngredient(name) {
  const n = norm(name);
  if (BOTH_WORDS.some(w => n.includes(w))) return 'both';
  const isProt = PROT_WORDS.some(w => n.includes(w));
  if (isProt) return 'protein';
  const isCarb = CARB_WORDS.some(w => n.includes(w));
  if (isCarb) return 'carb';
  return 'fixed';
}

// Arrondit une quantité à un palier pratique pour le quotidien.
function snapQty(grams, countable) {
  if (countable) return Math.max(1, Math.round(grams));
  if (grams >= 200) return Math.round(grams / 25) * 25;  // gros : pas de 25g
  if (grams >= 60)  return Math.round(grams / 10) * 10;  // moyen : pas de 10g
  return Math.round(grams / 5) * 5;                       // petit : pas de 5g
}

// Les ingrédients "comptables" (œufs, pièces) ne doivent pas exploser
function isCountable(unit) {
  return unit && /pi[èe]ce|unit|tranche/i.test(unit);
}

function perGram(ing) {
  const q = ing.qty || 1;
  return { kcal: ing.kcal/q, protein: ing.protein/q, carbs: ing.carbs/q, fat: ing.fat/q };
}

function computeMealMacros(item) {
  const r = getById(item.id);
  if (!r) return { kcal:0, protein:0, carbs:0, fat:0 };
  const ov = item.overrides || {};
  const s = item.servings || 1;
  return r.ingredients.reduce((acc, ing, idx) => {
    const pg = perGram(ing);
    const qty = (ov[idx] != null ? ov[idx] : ing.qty * s);
    acc.kcal+=pg.kcal*qty; acc.protein+=pg.protein*qty; acc.carbs+=pg.carbs*qty; acc.fat+=pg.fat*qty;
    return acc;
  }, { kcal:0, protein:0, carbs:0, fat:0 });
}

function computeDayFromItems(items) {
  return items.reduce((acc, it) => {
    const m = computeMealMacros(it);
    acc.kcal+=m.kcal; acc.protein+=m.protein; acc.carbs+=m.carbs; acc.fat+=m.fat;
    return acc;
  }, { kcal:0, protein:0, carbs:0, fat:0 });
}

function optimizeDay(items, targets, maxScale = 3) {
  const levers = [];
  const work = items.map(it => {
    const r = getById(it.id);
    const s = it.servings || 1;
    const ov = {};
    const isFixedRecipe = r && (r.tags || []).includes('cantine');
    if (r) {
      r.ingredients.forEach((ing, idx) => {
        ov[idx] = ing.qty * s;                 // grammes absolus de départ
        const cls = classifyIngredient(ing.name);
        // On n'ajoute des leviers que pour les recettes ajustables (pas la cantine)
        if (cls !== 'fixed' && !isFixedRecipe) {
          const countable = isCountable(ing.unit);
          levers.push({
            ref: ov, idx, type: cls,
            // bornes : comptables limités (ex. œufs 1–6×base), sinon 0.3×–3.5×
            min: countable ? ing.qty : Math.max(20, ing.qty * 0.5),
            max: countable ? ing.qty * 3 : ing.qty * maxScale,
            countable,
            base: ing.qty,
          });
        }
      });
    }
    // recette figée : on garde ses portions d'origine (pas d'overrides imposés)
    return isFixedRecipe
      ? { id: it.id, servings: s }
      : { id: it.id, servings: 1, overrides: ov };
  });

  if (!levers.length) return work;

  // Normalisation : on raisonne en % d'écart, kcal & protéines pèsent le plus.
  const W = { kcal: 4, protein: 9, carbs: 1.5, fat: 0.7 };
  const T = {
    kcal: targets.kcal || 2000, protein: targets.protein || 150,
    carbs: targets.carbs || 200, fat: targets.fat || 60,
  };

  function totals() {
    const acc = {kcal:0,protein:0,carbs:0,fat:0};
    work.forEach(it => {
      const r = getById(it.id);
      const s = it.servings || 1;
      r.ingredients.forEach((ing, idx) => {
        const pg = perGram(ing);
        const q = it.overrides ? it.overrides[idx] : ing.qty * s; // figé = qty × portions
        acc.kcal+=pg.kcal*q; acc.protein+=pg.protein*q; acc.carbs+=pg.carbs*q; acc.fat+=pg.fat*q;
      });
    });
    return acc;
  }
  function cost(t) {
    // Écarts relatifs. Pour les protéines : sous la cible = lourdement pénalisé,
    // au-dessus = légèrement (avoir plus de protéines n'est pas grave).
    const dK = (t.kcal - T.kcal) / T.kcal;
    const dP = (t.protein - T.protein) / T.protein;
    const dC = (t.carbs - T.carbs) / T.carbs;
    const dF = (t.fat - T.fat) / T.fat;
    const protPen = dP < 0 ? W.protein * dP * dP : W.protein * 0.15 * dP * dP;
    return W.kcal * dK * dK + protPen + W.carbs * dC * dC + W.fat * dF * dF;
  }

  // Optimisation : on répète des passes de descente de coordonnées.
  // À chaque passe et pour chaque levier, on cherche LE meilleur réglage
  // sur une grille de pas, en gardant toute amélioration. On boucle jusqu'à stabilité.
  function curCost() { return cost(totals()); }

  let lastCost = curCost();
  for (let pass = 0; pass < 60; pass++) {
    for (const lev of levers) {
      const start = lev.ref[lev.idx];
      let bestVal = start;
      let bestCost = curCost();
      // balaye toute la plage du levier par incréments fins
      const inc = lev.countable ? Math.max(1, Math.round(lev.base / 3)) : 5;
      for (let v = lev.min; v <= lev.max + 0.001; v += inc) {
        const val = lev.countable ? Math.round(v) : v;
        lev.ref[lev.idx] = val;
        const cc = curCost();
        if (cc < bestCost - 1e-9) { bestCost = cc; bestVal = val; }
      }
      lev.ref[lev.idx] = bestVal; // applique le meilleur trouvé pour ce levier
    }
    const nowCost = curCost();
    if (lastCost - nowCost < 1e-6) break; // plus d'amélioration
    lastCost = nowCost;
  }

  // Arrondir à des quantités pratiques. On ne touche qu'aux leviers (les autres gardent leur valeur d'origine).
  const leverKeys = new Set(levers.map(l => l.ref === undefined ? null : l));
  work.forEach((it, wi) => {
    if (!it.overrides) return;
    const r = getById(it.id);
    Object.keys(it.overrides).forEach(k => {
      const idx = +k;
      const ing = r.ingredients[idx];
      const cls = classifyIngredient(ing.name);
      const countable = isCountable(ing.unit);
      if (cls !== "fixed") it.overrides[k] = snapQty(it.overrides[k], countable);
      else it.overrides[k] = Math.round(it.overrides[k]);
    });
  });
  return work;
}


// ──────────────────────────────────────────────
// js/weekgen.js
// ──────────────────────────────────────────────
// weekgen.js — Générateur de menu de semaine automatique pour le batch cooking.
//
// Principe :
//  1. On choisit 4-5 plats qui PARTAGENT des ingrédients (batch facile), au hasard
//     (différent à chaque génération) parmi dîners + déjeuners.
//  2. On choisit 2-3 desserts batch.
//  3. Chaque plat est répété 1-2× dans la semaine, réparti sur les créneaux libres
//     (midis non-cantine + dîners). Les midis cantine reçoivent le menu C01.
//  4. On optimise les quantités sur la semaine (protéines prioritaires).
//  5. Les quantités d'achat sont arrondies aux formats du commerce.


// ── Similarité entre recettes : nb d'ingrédients "principaux" partagés ──
function mainIngredients(r) {
  return new Set(
    r.ingredients
      .filter(i => classifyIngredient(i.name) !== 'fixed')
      .map(i => canonicalKey(i.name))
  );
}
function canonicalKey(name) {
  const n = name.toLowerCase();
  if (/poulet/.test(n)) return 'poulet';
  if (/thon/.test(n)) return 'thon';
  if (/boeuf|bœuf|steak/.test(n)) return 'boeuf';
  if (/dinde/.test(n)) return 'dinde';
  if (/saumon|colin|merlu|cabillaud|poisson/.test(n)) return 'poisson';
  if (/crevette/.test(n)) return 'crevette';
  if (/\briz\b/.test(n)) return 'riz';
  if (/pâte|pate/.test(n)) return 'pates';
  if (/quinoa/.test(n)) return 'quinoa';
  if (/patate douce/.test(n)) return 'patate douce';
  if (/lentille/.test(n)) return 'lentille';
  if (/pois chiche/.test(n)) return 'pois chiche';
  return n;
}
function shareScore(a, b) {
  const sa = mainIngredients(a), sb = mainIngredients(b);
  let n = 0; sa.forEach(x => { if (sb.has(x)) n++; });
  return n;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Choisit nbMains plats qui partagent un max d'ingrédients, en partant d'une graine aléatoire.
function pickCohesiveMains(pool, nbMains) {
  const start = pool[Math.floor(Math.random() * pool.length)];
  const chosen = [start];
  const rest = pool.filter(r => r.id !== start.id);
  while (chosen.length < nbMains && rest.length) {
    // score chaque candidat = somme des partages avec les plats déjà choisis (+ un peu d'aléa)
    let best = null, bestScore = -1;
    shuffle(rest).forEach(cand => {
      const sc = chosen.reduce((s, c) => s + shareScore(c, cand), 0) + Math.random() * 0.9;
      if (sc > bestScore) { bestScore = sc; best = cand; }
    });
    chosen.push(best);
    rest.splice(rest.indexOf(best), 1);
  }
  return chosen;
}

// ── Génère le plan de la semaine ──
// opts = { cantineLunches: number (0-5), targets: {kcal,protein,carbs,fat} }
// Renvoie { dates: {date: {meals}}, mains, sweets }

function generateWeek({ cantineDays = [], nextWeek = true, targets, proteins = null } = {}) {
  targets = targets || { kcal: 2200, protein: 180, carbs: 220, fat: 65 };
  const dates = nextWeek ? getNextWeekDates() : getWeekDates();

  const dinners = getDinners();
  const lunches = getLunches().filter(r => r.id !== 'C01'); // la cantine est gérée à part
  const sweets  = getSweets();

  const hasMeat   = r => r.ingredients.some(i => classifyIngredient(i.name) === 'protein');
  const hasStarch = r => r.ingredients.some(i => ['carb','both'].includes(classifyIngredient(i.name)));

  // DÎNERS : vrais repas consistants (viande/poisson + féculent), jamais une salade/soupe légère.
  // On pioche uniquement dans le pool des dîners (D01–D25), tous consistants.
  const isFish = r => /crevette|saumon|poisson|colin|merlu|cabillaud|fruits de mer/i.test(JSON.stringify(r.ingredients));
  // Classe de protéine d'un plat (pour le filtre choisi par l'utilisateur).
  const proteinOf = r => {
    const txt = JSON.stringify(r.ingredients).toLowerCase();
    if (/crevette/.test(txt)) return 'crevettes';
    if (/saumon/.test(txt)) return 'saumon';
    if (/colin|merlu|cabillaud|poisson blanc/.test(txt)) return 'poisson';
    if (/steak|boeuf|bœuf/.test(txt)) return 'boeuf';
    if (/dinde/.test(txt)) return 'dinde';
    if (/poulet/.test(txt)) return 'poulet';
    if (/tofu/.test(txt)) return 'tofu';
    return 'autre';
  };
  // Pool dîners : viande/poisson + féculent. On limite le poisson (cher) à 1 plat max par semaine.
  let allDinnerMains = dinners.filter(r => hasMeat(r) && hasStarch(r));
  // Filtre protéines choisi par l'utilisateur (si fourni et non vide)
  if (proteins && proteins.length) {
    const filtered = allDinnerMains.filter(r => proteins.includes(proteinOf(r)));
    if (filtered.length) allDinnerMains = filtered; // sinon on garde tout (évite une semaine vide)
  }
  const fishMains = shuffle(allDinnerMains.filter(isFish));
  const meatMains = shuffle(allDinnerMains.filter(r => !isFish(r)));
  const nbDinnerMains = 3 + Math.round(Math.random()); // 3 ou 4 plats du soir, répétés
  // au plus 1 poisson, le reste en viande (poulet/bœuf/dinde) — sauf si l'utilisateur n'a choisi que du poisson
  const onlyFish = meatMains.length === 0;
  const dinnerMains = onlyFish
    ? pickCohesiveMains(fishMains, nbDinnerMains)
    : pickCohesiveMains(meatMains, nbDinnerMains - (fishMains.length ? 1 : 0))
        .concat(fishMains.length ? [fishMains[0]] : []);
  // si pas assez, compléter
  const fillPool = meatMains.length ? meatMains : fishMains;
  while (dinnerMains.length < nbDinnerMains && fillPool.length) {
    const extra = fillPool.find(m => !dinnerMains.includes(m));
    if (!extra) break; dinnerMains.push(extra);
  }

  // DÉJEUNERS (midis sans cantine) : pool plus large (salades, bowls, wraps…), avec viande.
  // On applique le filtre protéines : on retire seulement celles que l'utilisateur a décochées
  // (thon, œufs… ne sont pas dans les chips → toujours gardés).
  const CHIP_IDS = ['poulet','boeuf','dinde','crevettes','saumon','tofu'];
  let lunchPool = shuffle(lunches.filter(hasMeat));
  if (proteins && proteins.length) {
    const filtered = lunchPool.filter(r => {
      const pr = proteinOf(r);
      return !CHIP_IDS.includes(pr) || proteins.includes(pr);
    });
    if (filtered.length) lunchPool = filtered;
  }
  const nbLunchMains = 3 + Math.round(Math.random());
  // on respecte le filtre même si le pool est petit (les plats seront répétés)
  const lunchSource = lunchPool.length ? lunchPool : lunches;
  const lunchMains = pickCohesiveMains(lunchSource, Math.min(nbLunchMains, lunchSource.length) || 1);

  // pour la cohérence des courses, on expose l'ensemble des plats choisis
  const mains = [...dinnerMains, ...lunchMains];

  // Desserts répétés sur la semaine : on privilégie les ASSEMBLAGES SIMPLES rapides
  // (fromage blanc, skyr, overnight oats) plutôt que les longs (energy balls, cookies).
  const nbSweets = 2 + Math.round(Math.random()); // 2 ou 3
  // priorité : encas rapides ≤6 min, puis le reste
  const quickSweets = shuffle(sweets.filter(s => (s.prepTime + s.cookTime) <= 6));
  const otherSweets = shuffle(sweets.filter(s => (s.prepTime + s.cookTime) > 6));
  const chosenSweets = quickSweets.concat(otherSweets).slice(0, nbSweets);

  // ── Répartition sur la semaine ──
  // cantineDays : tableau d'index de jour (0=Lun … 6=Dim) où le midi est à la cantine.
  const slotsToFill = [];
  dates.forEach((date, i) => {
    slotsToFill.push({ date, slot: 'dinner' });
    if (cantineDays.includes(i)) {
      slotsToFill.push({ date, slot: 'lunch', cantine: true });
    } else {
      slotsToFill.push({ date, slot: 'lunch' });
    }
  });

  // Deux files séparées : plats du soir (consistants) et plats du midi.
  let dinnerQueue = []; dinnerMains.forEach(m => { dinnerQueue.push(m); dinnerQueue.push(m); });
  let lunchQueue  = []; lunchMains.forEach(m  => { lunchQueue.push(m);  lunchQueue.push(m);  });
  dinnerQueue = shuffle(dinnerQueue);
  lunchQueue  = shuffle(lunchQueue);

  // construit l'objet entries
  const entries = {};
  dates.forEach(d => entries[d] = { date: d, meals: { starter: [], lunch: [], dinner: [], sides: [], sweet: [] } });

  let di = 0, li = 0;
  const nextFrom = (queue, getI, setI, avoidId) => {
    let i = getI();
    for (let k = 0; k < queue.length; k++) {
      const cand = queue[(i + k) % queue.length];
      if (cand.id !== avoidId) { setI(i + k + 1); return cand; }
    }
    const m = queue[i % queue.length]; setI(i + 1); return m;
  };
  slotsToFill.forEach(s => {
    if (s.cantine) {
      entries[s.date].meals.lunch.push({ id: 'C01', servings: 1 });
      return;
    }
    if (s.slot === 'dinner') {
      const avoid = entries[s.date].meals.lunch[0]?.id;
      const meal = nextFrom(dinnerQueue, () => di, v => di = v, avoid);
      entries[s.date].meals.dinner.push({ id: meal.id, servings: 1 });
    } else {
      const avoid = entries[s.date].meals.dinner[0]?.id;
      const meal = nextFrom(lunchQueue, () => li, v => li = v, avoid);
      entries[s.date].meals.lunch.push({ id: meal.id, servings: 1 });
    }
  });

  // ── Programmer les périssables tôt : poisson J1-J2, viande J1-J3 ──
  // On réordonne les DÎNERS selon la "fraîcheur" requise (le poisson d'abord).
  const freshnessRank = (item) => {
    const r = getById(item.id);
    if (!r) return 9;
    const txt = (r.name + ' ' + r.ingredients.map(i => i.name).join(' ')).toLowerCase();
    if (/saumon|colin|merlu|cabillaud|crevette|poisson|fruits de mer/.test(txt)) return 0; // poisson
    if (/poulet|dinde|boeuf|bœuf|steak|porc|veau|merguez|haché/.test(txt)) return 1;        // viande fraîche
    return 2;                                                                                // reste
  };
  const dinnerItems = dates.map(d => entries[d].meals.dinner[0]).filter(Boolean);
  // tri stable par fraîcheur (poisson → viande → reste), en gardant l'ordre relatif sinon
  const ordered = dinnerItems
    .map((it, i) => ({ it, i }))
    .sort((a, b) => freshnessRank(a.it) - freshnessRank(b.it) || a.i - b.i)
    .map(x => x.it);
  dates.forEach((d, i) => { if (entries[d].meals.dinner.length) entries[d].meals.dinner[0] = ordered[i]; });

  // desserts batch : on en met 2 max, répartis dans la semaine
  // Desserts batch : on les RÉUTILISE sur plusieurs jours (ils sont batch-cookés).
  // Chaque dessert choisi est placé sur ~2-3 jours répartis dans la semaine.
  chosenSweets.forEach((sw, idx) => {
    // jours de départ décalés selon le dessert, puis tous les 2 jours
    for (let day = idx; day < 7; day += chosenSweets.length) {
      entries[dates[day]].meals.sweet.push({ id: sw.id, servings: 1 });
    }
  });

  // Compléments caloriques : entrées salées + ASSEMBLAGES SIMPLES (fromage blanc/whey, tartines).
  // On varie d'un jour à l'autre, on ne répète pas un dessert batch.
  const FILLER_STARTERS = shuffle(getStarters().sort((a, b) => b.macros.kcal - a.macros.kcal).slice(0, 6));
  // encas d'assemblage = tags 'encas' (SW20+) : fromage blanc+whey, tartines PB/miel, shakes…
  const FILLER_SNACKS = shuffle(getSweets().filter(s => (s.tags || []).includes('encas')));

  // Jeûne intermittent : le dîner doit concentrer ~62% des calories de la journée.
  // On optimise donc le DÎNER avec une grosse cible, et le RESTE (entrée/midi/accomp./dessert)
  // avec la cible restante.
  const DINNER_SHARE = 0.62;
  function splitTargets(part) {
    return {
      kcal: Math.round(targets.kcal * part),
      protein: Math.round(targets.protein * part),
      carbs: Math.round(targets.carbs * part),
      fat: Math.round(targets.fat * part),
    };
  }

  function optimizeGroup(e, slots, grpTargets, maxScale = 3) {
    const flat = [];
    slots.forEach(slot =>
      (e.meals[slot] || []).forEach((it, idx) => flat.push({ slot, idx, item: it })));
    if (!flat.length) return;
    const optimized = optimizeDay(flat.map(f => f.item), grpTargets, maxScale);
    flat.forEach((f, i) => {
      const o = optimized[i];
      if (o.overrides) { e.meals[f.slot][f.idx].overrides = o.overrides; e.meals[f.slot][f.idx].servings = 1; }
      else { e.meals[f.slot][f.idx].servings = o.servings || 1; }
    });
  }

  function applyOptimized(e) {
    const hasDinner = (e.meals.dinner || []).length > 0;
    if (hasDinner) {
      optimizeGroup(e, ['dinner'], splitTargets(DINNER_SHARE), 5);
      optimizeGroup(e, ['starter','lunch','sides','sweet'], splitTargets(1 - DINNER_SHARE));
    } else {
      // pas de dîner ce jour-là (rare) → on répartit normalement
      optimizeGroup(e, ['starter','lunch','dinner','sides','sweet'], targets);
    }
  }

  // ── Optimisation + complément automatique, jour par jour ──
  let starterRot = 0, snackRot = 0;
  dates.forEach(d => {
    const e = entries[d];
    if (!e.meals.starter) e.meals.starter = [];
    if (!['lunch','dinner','sides','sweet'].some(s => (e.meals[s]||[]).length)) return;
    applyOptimized(e);

    let guard = 0;
    while (guard++ < 4) {
      const tot = computeDayFromItems(
        ['starter','lunch','dinner','sides','sweet'].flatMap(s => e.meals[s] || [])
      );
      const deficit = targets.kcal - tot.kcal;
      if (deficit < 200) break;
      const present = new Set(['starter','lunch','dinner','sides','sweet'].flatMap(s => (e.meals[s]||[]).map(i => i.id)));
      let added = null;
      // 1) une entrée salée si pas encore d'entrée ce jour-là
      if (!(e.meals.starter || []).length && FILLER_STARTERS.length) {
        for (let k = 0; k < FILLER_STARTERS.length; k++) {
          const cand = FILLER_STARTERS[(starterRot + k) % FILLER_STARTERS.length];
          if (!present.has(cand.id)) { added = cand; starterRot += k + 1; break; }
        }
        if (added) e.meals.starter.push({ id: added.id, servings: 1 });
      }
      // 2) sinon un encas d'assemblage simple, en rotation (fromage blanc/whey, tartines…)
      if (!added && FILLER_SNACKS.length) {
        for (let k = 0; k < FILLER_SNACKS.length; k++) {
          const cand = FILLER_SNACKS[(snackRot + k) % FILLER_SNACKS.length];
          if (!present.has(cand.id)) { added = cand; snackRot += k + 1; break; }
        }
        if (added) e.meals.sweet.push({ id: added.id, servings: 1 });
      }
      if (!added) break;
      applyOptimized(e);
    }
  });

  return { dates, entries, mains, sweets: chosenSweets, cantineDays };
}


// ──────────────────────────────────────────────
// js/state.js
// ──────────────────────────────────────────────

const state = {
  currentView:    'week',          // démarre sur la vue semaine
  selectedDate:   getTodayDate(),  // jour en cours d'édition dans le planner
  searchQuery:    '',
  filterCategory: 'all',
  filterProtein:  'all',
};

function setState(patch) {
  Object.assign(state, patch);
}

// Renvoie l'entrée du jour sélectionné (toujours fraîche depuis le storage)
function currentEntry() {
  return getEntry(state.selectedDate);
}


// ──────────────────────────────────────────────
// js/nav.js
// ──────────────────────────────────────────────

const ITEMS = [
  { id: 'week',     label: 'Semaine'  },
  { id: 'planner',  label: 'Jour'     },
  { id: 'recipes',  label: 'Recettes' },
  { id: 'shopping', label: 'Courses'  },
];

const SVGS = {
  week:     '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  planner:  '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
  macros:   '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  recipes:  '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
  shopping: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.93-1.46l1.38-5.54H6"/>',
};

function renderNav() {
  const nav = document.createElement('nav');
  nav.id = 'nav';
  nav.innerHTML = ITEMS.map(it => `
    <button class="nav-btn ${state.currentView === it.id ? 'active' : ''}" data-view="${it.id}">
      <svg viewBox="0 0 24 24">${SVGS[it.id]}</svg>
      <span>${it.label}</span>
    </button>`).join('');
  nav.querySelectorAll('.nav-btn').forEach(b =>
    b.addEventListener('click', () => window._nav?.(b.dataset.view))
  );
  document.getElementById('app').appendChild(nav);
}


// ──────────────────────────────────────────────
// js/week.js
// ──────────────────────────────────────────────
// week.js — Page d'accueil : générateur de menu de semaine automatique.


const DAY_LABELS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const PROTEINS = [
  { id: 'poulet',    label: 'Poulet',    emoji: '🍗' },
  { id: 'boeuf',     label: 'Bœuf',      emoji: '🥩' },
  { id: 'dinde',     label: 'Dinde',     emoji: '🦃' },
  { id: 'crevettes', label: 'Crevettes', emoji: '🦐' },
  { id: 'saumon',    label: 'Saumon',    emoji: '🐟' },
  { id: 'tofu',      label: 'Tofu',      emoji: '🍱' },
];
let cantineDays = JSON.parse(localStorage.getItem('hebe_cantine_days') || '[]');
let lockedDays = JSON.parse(localStorage.getItem('hebe_locked_days') || '[]');
// par défaut : toutes les protéines sélectionnées
let selProteins = JSON.parse(localStorage.getItem('hebe_proteins') || 'null') || PROTEINS.map(p => p.id);

function weekHasPlan(dates) {
  return dates.some(d => {
    const e = getEntry(d);
    return ['lunch','dinner','sides','sweet'].some(s => (e.meals[s]||[]).length);
  });
}

function renderWeek() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const dates = getNextWeekDates();
  const { targets } = USER;
  const hasPlan = weekHasPlan(dates);

  const view = el('div', 'view week-view');
  view.innerHTML = `
    <div class="week-header">
      <div class="masthead">
        <div class="mast-left">
          <div class="brand-word">Héb<span class="brand-accent">é</span></div>
          <div class="brand-greek">jeunesse & vitalité · le carburant du corps</div>
        </div>
        <button class="week-settings" aria-label="Réglages"><svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></button>
      </div>
    </div>

    <div class="gen-card">
      <div class="gen-title">Ma semaine</div>
      <div class="gen-cantine">
        <span class="gen-cantine-label">Midis à la cantine</span>
        <div class="cantine-days">
          ${['L','M','M','J','V','S','D'].map((d,i)=>`<button class="cant-day ${cantineDays.includes(i)?'on':''}" data-i="${i}">${d}</button>`).join('')}
        </div>
      </div>
      <div class="gen-proteins">
        <span class="gen-cantine-label">Protéines pour la semaine</span>
        <div class="protein-chips">
          ${PROTEINS.map(p=>`<button class="prot-chip ${selProteins.includes(p.id)?'on':''}" data-p="${p.id}"><span class="prot-emoji">${p.emoji}</span>${p.label}</button>`).join('')}
        </div>
      </div>
      <button class="generate-btn">${hasPlan ? 'Régénérer ma semaine' : 'Générer ma semaine'}</button>
    </div>

    <div class="week-days"></div>

    ${hasPlan ? `
    <div class="week-tiles">
      <button class="week-tile tile-recipes">
        <span class="tile-ic">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 4h12a3 3 0 0 1 3 3v21H11a3 3 0 0 1-3-3z"/>
            <path d="M23 9h1a3 3 0 0 1 3 3v13a3 3 0 0 0 3 3"/>
            <line x1="12" y1="10" x2="19" y2="10"/><line x1="12" y1="14" x2="19" y2="14"/><line x1="12" y1="18" x2="16" y2="18"/>
          </svg>
        </span>
        <span class="tile-label">Recettes</span>
        <span class="tile-sub">à cuisiner</span>
      </button>
      <button class="week-tile tile-shop">
        <span class="tile-ic">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 6h3l2.2 13.2a2 2 0 0 0 2 1.7h9.4a2 2 0 0 0 2-1.6L26 10H9"/>
            <circle cx="13" cy="26" r="1.6"/><circle cx="23" cy="26" r="1.6"/>
          </svg>
        </span>
        <span class="tile-label">Courses</span>
        <span class="tile-sub">liste prête</span>
      </button>
    </div>` : ''}
  `;

  const daysWrap = view.querySelector('.week-days');

  if (hasPlan) {
    dates.forEach((date, i) => {
      const entry = getEntry(date);
      const macros = computeDayMacros(entry);
      const over = macros.kcal > targets.kcal * 1.08;
      const totalItems = ['lunch','dinner','sides','sweet'].reduce((n,s)=>n+(entry.meals[s]?.length||0),0);
      const isLocked = lockedDays.includes(date);
      const card = el('div', `week-day ${totalItems ? '' : 'empty'} ${isLocked ? 'locked' : ''}`);
      card.dataset.date = date;
      const dayNum = new Date(date+'T12:00:00').getDate();
      card.innerHTML = `
        <div class="wd-left"><div class="wd-label">${DAY_LABELS[i]}</div><div class="wd-num">${dayNum}</div></div>
        <div class="wd-body">
          ${totalItems ? `
            <div class="wd-kcal ${over?'over':''}">${Math.round(macros.kcal)} kcal
              <span class="wd-prot ${macros.protein>=targets.protein?'ok':'low'}">${Math.round(macros.protein)}g P${macros.protein>=targets.protein?' ✓':''}</span>
            </div>
            ${mbar(macros.kcal, targets.kcal, 'var(--accent)')}
            <div class="wd-meals">
              ${mealLine(entry.meals.starter)}${mealLine(entry.meals.lunch)}${mealLine(entry.meals.dinner)}${mealLine(entry.meals.sweet)}
            </div>` : `<div class="wd-empty">Vide</div>`}
        </div>
        ${totalItems ? `<button class="wd-lock ${isLocked?'on':''}" data-date="${date}" aria-label="Verrouiller ce jour">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${isLocked
              ? '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'
              : '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>'}
          </svg>
        </button>` : ''}
        <span class="wd-arrow">›</span>`;
      card.addEventListener('click', (ev) => {
        if (ev.target.closest('.wd-lock')) return;
        setState({ selectedDate: date, currentView: 'planner' }); window._nav?.('planner');
      });
      daysWrap.appendChild(card);
    });
    // verrouillage des jours
    daysWrap.querySelectorAll('.wd-lock').forEach(btn => btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const d = btn.dataset.date;
      const i = lockedDays.indexOf(d);
      const nowLocked = i === -1;
      if (i > -1) lockedDays.splice(i, 1); else lockedDays.push(d);
      localStorage.setItem('hebe_locked_days', JSON.stringify(lockedDays));
      btn.classList.toggle('on', nowLocked);
      btn.closest('.week-day').classList.toggle('locked', nowLocked);
      // basculer l'icône cadenas ouvert ↔ fermé
      const svg = btn.querySelector('svg');
      if (svg) svg.innerHTML = nowLocked
        ? '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'
        : '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>';
    }));
  }

  app.insertBefore(view, app.querySelector('#nav'));

  // events
  view.querySelector('.week-settings').addEventListener('click', () => window._nav?.('settings'));
  view.querySelectorAll('.cant-day').forEach(b => b.addEventListener('click', () => {
    const i = parseInt(b.dataset.i);
    if (cantineDays.includes(i)) cantineDays = cantineDays.filter(x => x !== i);
    else cantineDays = [...cantineDays, i];
    localStorage.setItem('hebe_cantine_days', JSON.stringify(cantineDays));
    b.classList.toggle('on');
  }));
  // sélection des protéines
  view.querySelectorAll('.prot-chip').forEach(b => b.addEventListener('click', () => {
    const p = b.dataset.p;
    if (selProteins.includes(p)) {
      if (selProteins.length > 1) selProteins = selProteins.filter(x => x !== p); // garder au moins 1
    } else {
      selProteins = [...selProteins, p];
    }
    localStorage.setItem('hebe_proteins', JSON.stringify(selProteins));
    b.classList.toggle('on', selProteins.includes(p));
  }));
  view.querySelector('.generate-btn').addEventListener('click', () => {
    const btn = view.querySelector('.generate-btn');
    btn.textContent = '… génération en cours';
    btn.disabled = true;
    setTimeout(() => {
      // sauvegarder les jours verrouillés avant régénération
      const preserved = {};
      lockedDays.forEach(d => { preserved[d] = getEntry(d); });
      const { entries } = generateWeek({ cantineDays, nextWeek: true, targets: USER.targets, proteins: selProteins });
      Object.values(entries).forEach(e => {
        if (preserved[e.date]) saveEntry(preserved[e.date]); // garder le jour verrouillé
        else saveEntry(e);
      });
      renderWeek();
    }, 60);
  });
  view.querySelector('.tile-recipes')?.addEventListener('click', () => window._nav?.('batch'));
  view.querySelector('.tile-shop')?.addEventListener('click', () => {
    localStorage.setItem('diet_shop_range', JSON.stringify(getNextWeekDates()));
    window._nav?.('shopping');
  });
}

function mealLine(items) {
  if (!items || !items.length) return '';
  const names = items.map(it => getById(it.id)?.name).filter(Boolean).join(', ');
  return `<div class="wd-meal-line">${names}</div>`;
}


// ──────────────────────────────────────────────
// js/planner.js
// ──────────────────────────────────────────────
// planner.js — Éditeur du menu d'un jour (state.selectedDate)
// Ajout/suppression de plats, réglage précis des portions, alerte dépassement kcal.


const SLOTS = [
  { key: 'starter', label: 'Entrée',           emoji: '',  fn: getStarters },
  { key: 'lunch',  label: 'Déjeuner',        emoji: '',  fn: getLunches },
  { key: 'dinner', label: 'Dîner',            emoji: '',  fn: getDinners },
  { key: 'sides',  label: 'Accompagnements',  emoji: '',  fn: getSides  },
  { key: 'sweet',  label: 'Dessert',          emoji: '',  fn: getSweets },
];

function save(entry) { saveEntry(entry); renderPlanner(); }

function addMeal(slot, recipeId) {
  const entry = currentEntry();
  if (!entry.meals[slot]) entry.meals[slot] = [];
  entry.meals[slot].push({ id: recipeId, servings: 1 });
  save(entry);
}

function removeMeal(slot, index) {
  const entry = currentEntry();
  entry.meals[slot].splice(index, 1);
  save(entry);
}

function changeServings(slot, index, delta) {
  const entry = currentEntry();
  const item = entry.meals[slot][index];
  if (!item) return;
  delete item.overrides; // retour à un réglage proportionnel
  item.servings = Math.max(0.25, Math.round((item.servings + delta) * 4) / 4);
  save(entry);
}

function setServings(slot, index, value) {
  const entry = currentEntry();
  const item = entry.meals[slot][index];
  if (!item) return;
  delete item.overrides;
  const v = parseFloat(String(value).replace(',', '.'));
  if (!isNaN(v) && v > 0) item.servings = Math.round(v * 4) / 4;
  save(entry);
}

// Optimise les portions de tous les plats du jour pour caler les macros (kcal + protéines).
function optimizeMeals() {
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

function renderPlanner() {
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


// ──────────────────────────────────────────────
// js/macros.js
// ──────────────────────────────────────────────

function renderMacros() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const entry  = currentEntry();
  const macros = computeDayMacros(entry);
  const { targets } = USER;
  const over = macros.kcal > targets.kcal * 1.08;

  const view = el('div', 'view macros-view');

  const hero = el('div', `macros-hero ${over ? 'over-limit' : ''}`);
  hero.innerHTML = `
    <div class="macros-date">${formatDate(entry.date)}</div>
    <div class="macros-kcal-big ${over ? 'over' : ''}">${Math.round(macros.kcal)}</div>
    <div class="macros-kcal-sub">/ ${targets.kcal} kcal · ${Math.round((macros.kcal/targets.kcal)*100)}%</div>
    ${over ? `<div class="over-banner">Dépassement de ${Math.round(macros.kcal - targets.kcal)} kcal</div>` : ''}
    ${mbar(macros.kcal, targets.kcal, 'var(--kcal)')}
    <div style="margin-top:20px">
      ${macroRow('Protéines', macros.protein, targets.protein, 'var(--protein)')}
      ${macroRow('Glucides',  macros.carbs,   targets.carbs,   'var(--carbs)')}
      ${macroRow('Lipides',   macros.fat,     targets.fat,     'var(--fat)')}
    </div>`;
  view.appendChild(hero);

  view.appendChild(el('div', 'section-hd', 'Détail du jour'));

  const SLOTS = [
    { key: 'lunch',  label: 'Déjeuner' },
    { key: 'dinner', label: 'Dîner'    },
    { key: 'sides',  label: 'Accomp.'  },
    { key: 'sweet',  label: 'Sucré'    },
  ];

  let hasAny = false;
  const bk = el('div', 'macros-breakdown');
  SLOTS.forEach(({ key, label }) => {
    (entry.meals[key] || []).forEach(item => {
      const r = getById(item.id);
      if (!r) return;
      hasAny = true;
      const m = scaledMacros(r, item.servings);
      const row = el('div', 'breakdown-item');
      row.innerHTML = `
        <div class="bd-left">
          <span class="bd-slot">${label}</span>
          <span class="bd-name">${r.emoji} ${r.name}${item.servings > 1 ? ` ×${item.servings}` : ''}</span>
        </div>
        <span class="bd-right">${m.kcal} kcal</span>`;
      bk.appendChild(row);
    });
  });

  if (!hasAny) bk.innerHTML = '<div class="empty-day">Aucun repas ce jour.</div>';
  view.appendChild(bk);

  app.insertBefore(view, app.querySelector('#nav'));
}

function macroRow(name, val, target, color) {
  const pct = Math.round((val / target) * 100);
  const over = val > target * 1.1;
  return `
    <div class="macro-row">
      <div class="macro-row-hd">
        <span class="macro-row-name">${name}</span>
        <span class="macro-row-nums ${over ? 'over' : ''}"><span>${Math.round(val)}g</span> / ${target}g · ${pct}%</span>
      </div>
      ${mbar(val, target, color)}
    </div>`;
}


// ──────────────────────────────────────────────
// js/recipeDetail.js
// ──────────────────────────────────────────────
// recipeDetail.js — Détail recette avec ajustement des portions
// Le sélecteur de portions recalcule ingrédients ET macros en direct.


function renderRecipeDetail(recipe, fromView = 'recipes') {
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
          ${recipe.batch ? '<span class="detail-batch-tag">Batch</span>' : ''}
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

      ${recipe.tip ? `<div class="detail-section"><div class="tip-box"><div class="tip-label">Conseil</div>${recipe.tip}</div></div>` : ''}

      <div class="add-actions">
        <div class="section-hd" style="padding:8px 0">Ajouter au menu du jour sélectionné</div>
      </div>
    `;

    // Add-to-meal buttons
    const SLOT_MAP = {
      dinner: { label: 'au dîner' },
      lunch:  { label: 'au déjeuner' },
      sides:  { label: 'en accompagnement' },
      sweet:  { label: 'en dessert / encas' },
    };
    const category = recipe.category === 'side' ? 'sides' : recipe.category;
    const slots = category === 'sweet' ? ['sweet']
                : category === 'sides' ? ['sides']
                : [category, 'sides'];

    const actions = view.querySelector('.add-actions');
    slots.forEach(slot => {
      const cfg = SLOT_MAP[slot];
      const btn = el('button', 'add-action-btn',
        `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Ajouter ${cfg.label} (×${servings})`);
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


// ──────────────────────────────────────────────
// js/recipes.js
// ──────────────────────────────────────────────

const FILTERS = [
  { key: 'all',    label: 'Tout'              },
  { key: 'starter',label: 'Entrées'           },
  { key: 'dinner', label: 'Dîner'              },
  { key: 'lunch',  label: 'Déjeuner'           },
  { key: 'side',   label: 'Accompagnements'    },
  { key: 'sweet',  label: 'Desserts' },
];

const PROT_FILTERS = [
  { key: 'all',        label: 'Toutes', emoji: '' },
  { key: 'poulet',     label: 'Poulet', emoji: '🍗' },
  { key: 'boeuf',      label: 'Bœuf', emoji: '🥩' },
  { key: 'dinde',      label: 'Dinde', emoji: '🦃' },
  { key: 'poisson',    label: 'Poisson', emoji: '🐟' },
  { key: 'crevettes',  label: 'Crevettes', emoji: '🦐' },
  { key: 'vege',       label: 'Végé', emoji: '🌱' },
];

// Classe de protéine d'une recette (pour le filtre du catalogue).
function recipeProtein(r) {
  const t = JSON.stringify(r.ingredients).toLowerCase();
  if (/crevette/.test(t)) return 'crevettes';
  if (/saumon|colin|merlu|cabillaud|poisson|thon/.test(t)) return 'poisson';
  if (/steak|boeuf|bœuf/.test(t)) return 'boeuf';
  if (/dinde/.test(t)) return 'dinde';
  if (/poulet/.test(t)) return 'poulet';
  if (/tofu|pois chiches|lentilles|haricots (rouges|blancs)/.test(t)) return 'vege';
  return 'autre';
}

function renderRecipes() {
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

  // Filtre par protéine
  const protTabs = el('div', 'prot-filter-tabs');
  const activeProt = state.filterProtein || 'all';
  PROT_FILTERS.forEach(f => {
    const btn = el('button', `prot-filter-btn ${activeProt === f.key ? 'active' : ''}`);
    btn.innerHTML = `${f.emoji ? `<span class="pf-emoji">${f.emoji}</span>` : ''}${f.label}`;
    btn.addEventListener('click', () => { setState({ filterProtein: f.key }); renderRecipes(); });
    protTabs.appendChild(btn);
  });

  top.appendChild(search);
  top.appendChild(tabs);
  top.appendChild(protTabs);
  view.appendChild(top);

  const list = el('div', 'recipe-list');
  view.appendChild(list);

  function renderList(query) {
    const cat = state.filterCategory;
    const prot = state.filterProtein || 'all';
    const filtered = RECIPES.filter(r => {
      const matchCat = cat === 'all' || r.category === cat;
      const matchProt = prot === 'all' || recipeProtein(r) === prot;
      const matchQ   = r.name.toLowerCase().includes(query.toLowerCase()) ||
                       r.tags?.some(t => t.includes(query.toLowerCase()));
      return matchCat && matchProt && matchQ;
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


// ──────────────────────────────────────────────
// js/perishables.js
// ──────────────────────────────────────────────
// perishables.js — Gérer les ingrédients frais : dire combien on a acheté,
// scaler les recettes qui les utilisent, et programmer les plats périssables tôt.


// Catégories de péremption (jours au frigo) + ordre de priorité de consommation.
const PERISHABLE_RULES = [
  { key: 'poisson', rx: /thon frais|saumon|colin|merlu|cabillaud|poisson|crevette|fruits de mer/i, days: 2, label: 'Poisson & fruits de mer', priority: 1 },
  { key: 'viande',  rx: /poulet|dinde|boeuf|bœuf|steak|porc|veau|merguez|haché/i, days: 3, label: 'Viande', priority: 2 },
];

// thon AU NATUREL (conserve) n'est pas périssable — on l'exclut.
function isCanned(name) { return /au naturel|conserve|boîte|boite/i.test(name); }

function perishableClass(name) {
  if (isCanned(name)) return null;
  for (const r of PERISHABLE_RULES) {
    if (r.rx.test(name)) return r;
  }
  return null;
}

// Agrège, sur la semaine, les périssables nécessaires au plan + les recettes/jours qui les utilisent.
// Renvoie [{ key, label, days, priority, name, plannedQty, unit, usedBy:[{date,slot,idx,recipeId,recipeName}] }]
function collectPerishables(entries, dates) {
  const map = {}; // canonName → aggregate
  dates.forEach(date => {
    const e = entries[date];
    ['starter','lunch','dinner','sides','sweet'].forEach(slot => {
      (e.meals[slot] || []).forEach((item, idx) => {
        const r = getById(item.id);
        if (!r) return;
        if ((r.tags || []).includes('cantine')) return;
        const s = item.servings || 1;
        const ov = item.overrides;
        r.ingredients.forEach((ing, ingIdx) => {
          const pc = perishableClass(ing.name);
          if (!pc) return;
          const qty = (ov && ov[ingIdx] != null) ? ov[ingIdx] : ing.qty * s;
          const key = ing.name;
          if (!map[key]) map[key] = {
            cls: pc.key, label: pc.label, days: pc.days, priority: pc.priority,
            name: ing.name, plannedQty: 0, unit: ing.unit, usedBy: [],
          };
          map[key].plannedQty += qty;
          map[key].usedBy.push({ date, slot, idx, ingIdx, recipeId: item.id, recipeName: r.name });
        });
      });
    });
  });
  // tri : poisson d'abord, puis viande, puis frais
  return Object.values(map).sort((a, b) => a.priority - b.priority || b.plannedQty - a.plannedQty);
}

// Applique : pour chaque périssable, on scale les portions des recettes qui l'utilisent
// pour consommer EXACTEMENT boughtQty, et on reprogramme ces plats tôt dans la semaine.
// bought = { ingredientName: grams }
function applyPerishables(entries, dates, perishables, bought, targets) {
  const affectedDays = new Set();
  perishables.forEach(p => {
    const target = bought[p.name];
    if (target == null || p.plannedQty <= 0) return;
    const factor = target / p.plannedQty;
    if (!isFinite(factor) || factor <= 0) return;

    // Scale chaque utilisation de cet ingrédient (via overrides en grammes absolus).
    p.usedBy.forEach(u => {
      const item = entries[u.date].meals[u.slot][u.idx];
      if (!item) return;
      const r = getById(item.id);
      const ing = r.ingredients[u.ingIdx];
      // base actuelle (override ou qty×servings)
      const s = item.servings || 1;
      const cur = (item.overrides && item.overrides[u.ingIdx] != null) ? item.overrides[u.ingIdx] : ing.qty * s;
      const countable = /pi[èe]ce|unit|tranche/i.test(ing.unit);
      const next = snapQty(cur * factor, countable);
      if (!item.overrides) {
        // créer des overrides pour tous les ingrédients (grammes absolus)
        item.overrides = {};
        r.ingredients.forEach((ig, i) => item.overrides[i] = snapQty(ig.qty * s, /pi[èe]ce|unit|tranche/i.test(ig.unit)));
        item.servings = 1;
      }
      item.overrides[u.ingIdx] = Math.max(0, next);
      affectedDays.add(u.date);
    });
  });

  // Rééquilibrage : sur chaque jour modifié, on ajuste les portions du DESSERT/encas
  // pour recaler les calories du jour sur la cible (le scaling viande/poisson a déplacé le total).
  if (targets && targets.kcal) {
    affectedDays.forEach(date => rebalanceDessert(entries[date], targets));
  }

  return entries;
}

// Macros d'un plat (override-aware) — local pour éviter les dépendances circulaires.
function itemKcal(item) {
  const r = getById(item.id);
  if (!r) return 0;
  const ov = item.overrides; const s = item.servings || 1;
  if (!ov) return r.macros.kcal * s;
  return r.ingredients.reduce((acc, ing, i) => {
    const q = ing.qty || 1; const qty = ov[i] != null ? ov[i] : ing.qty * s;
    return acc + (ing.kcal / q) * qty;
  }, 0);
}
function dayKcal(e) {
  return ['starter','lunch','dinner','sides','sweet']
    .flatMap(s => e.meals[s] || []).reduce((a, it) => a + itemKcal(it), 0);
}

// Ajuste les portions du dessert pour combler/réduire l'écart calorique du jour.
function rebalanceDessert(e, targets) {
  const sweets = e.meals.sweet || [];
  if (!sweets.length) return;
  const current = dayKcal(e);
  const diff = targets.kcal - current; // >0 = il manque des calories, <0 = trop
  if (Math.abs(diff) < 60) return; // déjà bon

  // kcal/portion du dessert (somme des desserts du jour)
  const sweetKcalPerServing = sweets.reduce((a, it) => {
    const r = getById(it.id); return a + (r ? r.macros.kcal : 0);
  }, 0);
  if (sweetKcalPerServing <= 0) return;

  // facteur à appliquer aux desserts pour combler diff
  const sweetCurrent = sweets.reduce((a, it) => a + itemKcal(it), 0);
  const sweetTarget = Math.max(0, sweetCurrent + diff);
  const factor = sweetTarget / Math.max(1, sweetCurrent);
  // bornes raisonnables : entre 0.3× et 3× la portion d'origine
  const f = Math.max(0.3, Math.min(3, factor));

  sweets.forEach(it => {
    const r = getById(it.id);
    const s = it.servings || 1;
    if (!it.overrides) {
      it.overrides = {}; r.ingredients.forEach((ig, i) => it.overrides[i] = snapQty(ig.qty * s, /pi[èe]ce|unit|tranche/i.test(ig.unit)));
      it.servings = 1;
    }
    r.ingredients.forEach((ig, k) => { if (it.overrides[k] != null) it.overrides[k] = Math.max(0, snapQty(it.overrides[k] * f, /pi[èe]ce|unit|tranche/i.test(ig.unit))); });
  });
}

// Donne l'ordre de consommation recommandé (quel plat cuisiner/manger en premier).
function consumeOrder(perishables) {
  // map jour-index pour conseiller : poisson J1-2, viande J1-3, frais début de semaine
  return perishables.map(p => ({
    name: p.name, label: p.label, days: p.days,
    advice: p.cls === 'poisson' ? 'À cuisiner J1-J2' : p.cls === 'viande' ? 'À cuisiner J1-J3' : 'Début de semaine',
  }));
}


// ──────────────────────────────────────────────
// js/shopping.js
// ──────────────────────────────────────────────
// shopping.js — Liste de courses
// Source : soit une plage de dates choisie depuis la vue Semaine (diet_shop_range),
// soit les N derniers jours. Les quantités sont multipliées par les portions (servings).


const CHECKED_KEY = 'diet_shopping_checked';
const getChecked   = () => JSON.parse(localStorage.getItem(CHECKED_KEY) || '[]');
const saveChecked  = (a) => localStorage.setItem(CHECKED_KEY, JSON.stringify(a));
const clearChecked = () => localStorage.removeItem(CHECKED_KEY);

// Catégorisation simple pour grouper la liste
// Ordre d'affichage des rayons (les noms doivent correspondre à categorize()).
const CATEGORIES = [
  { name: 'Viandes & poisson' },
  { name: 'Œufs & laitages' },
  { name: 'Légumes & fruits' },
  { name: 'Féculents & légumineuses' },
  { name: 'Épicerie & placard' },
];

// Icônes SVG par rayon (line-art, dans l'ordre des CATEGORIES).
const CAT_ICONS = [
  // Viandes & poisson — poisson stylisé
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c3-5 9-6 14-3 2 1.2 4 3 4 3s-2 1.8-4 3c-5 3-11 2-14-3z"/><path d="M17 9.5l3-2.5M17 14.5l3 2.5"/><circle cx="8" cy="11" r="1"/></svg>',
  // Œufs & laitages — bouteille de lait
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3l2 4v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10l2-4z"/><line x1="7" y1="13" x2="17" y2="13"/></svg>',
  // Légumes & fruits — feuille/pomme
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7c-1-3-4-4-7-3 0 4 2 7 7 7"/><path d="M12 21c-3 0-5-2-5-6 0-3 2-5 5-5s5 2 5 5c0 4-2 6-5 6z"/></svg>',
  // Féculents — épi de blé
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="22" x2="12" y2="9"/><path d="M12 9c0-2-2-3-2-5 1 0 2 .5 2 2 0-1.5 1-2 2-2 0 2-2 3-2 5z"/><path d="M12 13c-1-1.5-3-1.5-4-1 .3 1.6 1.8 2.5 4 2.5M12 13c1-1.5 3-1.5 4-1-.3 1.6-1.8 2.5-4 2.5"/><path d="M12 17c-1-1.5-3-1.5-4-1 .3 1.6 1.8 2.5 4 2.5M12 17c1-1.5 3-1.5 4-1-.3 1.6-1.8 2.5-4 2.5"/></svg>',
  // Épicerie — sachet/pot
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></svg>',
];

// Regroupe les variantes d'un même produit en un seul nom canonique,
// pour éviter les doublons dans la liste de courses (poulet / poulet cuit / poulet émincé…).
// On ne fusionne que des produits réellement identiques à l'achat.
const CANON = [
  // Mélanges d'assaisonnement (contiennent un "+") → placard, AVANT les règles produits
  { rx: /\+/i, name: 'Épices & aromates (placard)' },
  // Viandes / poisson
  { rx: /poulet/i,                          name: 'Blanc de poulet' },
  { rx: /\bdinde\b/i,                       name: 'Blanc de dinde' },
  { rx: /steak hach|boeuf|b\u0153uf/i,        name: 'Steak haché 5%' },
  { rx: /poulet hach/i,                     name: 'Poulet haché' },
  { rx: /merguez/i,                         name: 'Merguez de volaille' },
  { rx: /thon/i,                            name: 'Thon au naturel' },
  { rx: /saumon/i,                          name: 'Saumon' },
  { rx: /colin|merlu|poisson blanc/i,       name: 'Poisson blanc (colin/merlu)' },
  { rx: /crevette/i,                        name: 'Crevettes décortiquées' },
  { rx: /anchois/i,                         name: 'Anchois' },
  { rx: /^bacon/i,                          name: 'Bacon de dinde' },
  // Oeufs & laitages
  { rx: /blancs? d'?oeuf/i,                 name: "Blancs d'oeuf" },
  { rx: /^oeufs?\b|oeufs? (durs?|poch)/i,    name: 'Oeufs' },
  { rx: /fromage blanc/i,                   name: 'Fromage blanc 0%' },
  { rx: /fromage frais/i,                   name: 'Fromage frais léger' },
  { rx: /^skyr/i,                           name: 'Skyr' },
  { rx: /ricotta/i,                         name: 'Ricotta' },
  { rx: /^feta/i,                           name: 'Feta' },
  { rx: /parmesan/i,                        name: 'Parmesan' },
  { rx: /emmental/i,                        name: 'Emmental allégé' },
  { rx: /lait de coco/i,                    name: 'Lait de coco light' },
  { rx: /lait \u00e9cr\u00e9m|lait ecrem/i,    name: 'Lait écrémé' },
  // Féculents & légumineuses
  { rx: /^p[âa]tes compl]?|^p[âa]tes/i,     name: 'Pâtes complètes' },
  { rx: /\borzo\b/i,                        name: 'Orzo' },
  { rx: /nouilles de riz/i,                 name: 'Nouilles de riz' },
  { rx: /riz basmati/i,                     name: 'Riz basmati' },
  { rx: /riz rond/i,                        name: 'Riz rond' },
  { rx: /^riz\b/i,                           name: 'Riz' },
  { rx: /boulgh?our|boulgour/i,             name: 'Boulghour' },
  { rx: /quinoa/i,                          name: 'Quinoa' },
  { rx: /flocons d'?avoine/i,               name: "Flocons d'avoine" },
  { rx: /lentilles corail/i,                name: 'Lentilles corail' },
  { rx: /lentilles vertes/i,                name: 'Lentilles vertes' },
  { rx: /pois chiches/i,                    name: 'Pois chiches' },
  { rx: /haricots rouges/i,                 name: 'Haricots rouges' },
  { rx: /haricots blancs/i,                 name: 'Haricots blancs' },
  { rx: /^ma\u00efs|^mais/i,                  name: 'Maïs' },
  { rx: /tortillas?/i,                      name: 'Tortillas blé complètes' },
  { rx: /pain complet/i,                    name: 'Pain complet' },
  { rx: /crackers/i,                        name: 'Crackers de seigle' },
  { rx: /chapelure/i,                       name: 'Chapelure' },
  // Légumes & fruits
  { rx: /haricots verts/i,                  name: 'Haricots verts' },
  { rx: /^[ée\u00e9]pinards/i,                name: 'Épinards' },
  { rx: /^courgettes?/i,                    name: 'Courgettes' },
  { rx: /chou-fleur/i,                      name: 'Chou-fleur' },
  { rx: /chou blanc/i,                      name: 'Chou blanc' },
  { rx: /^brocoli/i,                        name: 'Brocoli' },
  { rx: /champignons/i,                     name: 'Champignons de Paris' },
  { rx: /^carottes?/i,                      name: 'Carottes' },
  { rx: /^concombre/i,                      name: 'Concombre' },
  { rx: /tomates cerise/i,                  name: 'Tomates cerise' },
  { rx: /tomates concass/i,                 name: 'Tomates concassées' },
  { rx: /^tomates?$/i,                      name: 'Tomates' },
  { rx: /^poivrons?/i,                      name: 'Poivron' },
  { rx: /patate douce/i,                    name: 'Patate douce' },
  { rx: /pommes de terre/i,                 name: 'Pommes de terre' },
  { rx: /betterave/i,                       name: 'Betterave cuite' },
  { rx: /^salade|laitue|romaine/i,          name: 'Salade verte' },
  { rx: /avocat/i,                          name: 'Avocat' },
  { rx: /oignon rouge/i,                    name: 'Oignon rouge' },
  { rx: /^oignon/i,                         name: 'Oignon' },
  { rx: /citron vert/i,                     name: 'Citron vert' },
  { rx: /citron|jus.*zeste|zeste.*citron/i, name: 'Citron' },
  { rx: /^banane/i,                         name: 'Banane' },
  { rx: /mangue/i,                          name: 'Mangue surgelée' },
  { rx: /^pommes?\b/i,                       name: 'Pommes' },
  { rx: /fruits rouges/i,                   name: 'Fruits rouges surgelés' },
  { rx: /framboises/i,                      name: 'Framboises surgelées' },
  { rx: /fruit de la passion/i,             name: 'Fruit de la passion' },
  { rx: /dattes/i,                          name: 'Dattes dénoyautées' },
  { rx: /\bgingembre\b/i,                   name: 'Gingembre frais' },
  { rx: /^ail\b/i,                           name: 'Ail' },
  { rx: /olives noires/i,                   name: 'Olives noires' },
  { rx: /olives vertes/i,                   name: 'Olives vertes' },
  { rx: /câpres|capres/i,                   name: 'Câpres' },
  { rx: /cornichons/i,                      name: 'Cornichons' },
  { rx: /piment rouge/i,                    name: 'Piment rouge' },
  // Herbes fraîches (regroupées)
  { rx: /coriandre fra/i,                   name: 'Coriandre fraîche' },
  { rx: /persil/i,                          name: 'Persil frais' },
  { rx: /menthe fra|^menthe/i,              name: 'Menthe fraîche' },
  { rx: /basilic/i,                         name: 'Basilic frais' },
  { rx: /ciboulette/i,                      name: 'Ciboulette' },
  { rx: /thym frais/i,                      name: 'Thym frais' },
  // Épicerie / condiments / poudres (tout ce qui est sec/placard)
  { rx: /beurre de cacahu/i,                name: 'Beurre de cacahuète' },
  { rx: /^beurre\b/i,                        name: 'Beurre' },
  { rx: /tahini/i,                          name: 'Tahini' },
  { rx: /huile d'?olive/i,                  name: "Huile d'olive" },
  { rx: /huile de sésame|huile de sesame/i, name: 'Huile de sésame' },
  { rx: /huile de coco/i,                   name: 'Huile de coco' },
  { rx: /huile \+ |^huile/i,                 name: "Huile d'olive" },
  { rx: /miel/i,                            name: 'Miel' },
  { rx: /sauce soja|soja \+/i,              name: 'Sauce soja' },
  { rx: /sauce huîtres|sauce huitres/i,     name: 'Sauce huîtres' },
  { rx: /sauce worcester/i,                 name: 'Sauce Worcester' },
  { rx: /gochujang/i,                       name: 'Gochujang' },
  { rx: /sriracha/i,                        name: 'Sriracha' },
  { rx: /pâte de curry|pate de curry/i,     name: 'Pâte de curry vert' },
  { rx: /pâte de miso|pate de miso/i,       name: 'Pâte de miso' },
  { rx: /moutarde/i,                        name: 'Moutarde de Dijon' },
  { rx: /vinaigre balsamique|vinaigre \+/i, name: 'Vinaigre balsamique' },
  { rx: /citron confit/i,                   name: 'Citron confit' },
  { rx: /chocolat noir|pépites de chocolat|pepites/i, name: 'Chocolat noir 85%' },
  { rx: /cacao/i,                           name: 'Cacao non sucré' },
  { rx: /whey|protéine en poudre|proteine en poudre/i, name: 'Whey (protéine en poudre)' },
  { rx: /graines de chia/i,                 name: 'Graines de chia' },
  { rx: /noix de coco/i,                    name: 'Noix de coco râpée' },
  { rx: /cacahuètes|cacahuetes/i,           name: 'Cacahuètes non salées' },
  { rx: /sésame|sesame/i,                   name: 'Sésame' },
  { rx: /levure/i,                          name: 'Levure chimique' },
  { rx: /extrait de vanille|vanille/i,      name: 'Vanille' },
  { rx: /café|cafe expresso/i,              name: 'Café' },
  { rx: /biscuits? boudoir/i,               name: 'Biscuits boudoir' },
  { rx: /biscuits? type petit|petit beurre/i, name: 'Biscuits Petit Beurre' },
  // Épices & mélanges → tout en placard, regroupé par "Épices"
  { rx: /garam masala|tikka|ras el hanout|curry|curcuma|cumin|paprika|harissa|cannelle|origan|herbes de provence|herbes fra|épices|epices|ail en poudre|gingembre en poudre/i, name: 'Épices & aromates (placard)' },
  { rx: /^sel|^poivre|sel \+ poivre/i,      name: 'Sel & poivre' },
];

// Catégorie d'un produit (déjà canonisé) → rayon du magasin.
const CAT_RULES = [
  { name: 'Viandes & poisson',        rx: /poulet|dinde|boeuf|steak|merguez|thon|saumon|poisson|crevette|anchois|bacon/i },
  { name: 'Œufs & laitages',          rx: /oeuf|fromage|ricotta|feta|parmesan|emmental|skyr|lait|yaourt|beurre$/i },
  { name: 'Féculents & légumineuses', rx: /pâtes|riz|orzo|nouilles|boulghour|quinoa|flocons|lentilles|pois chiches|haricots (rouges|blancs)|maïs|tortillas|pain|crackers|chapelure/i },
  { name: 'Légumes & fruits',         rx: /haricots verts|épinards|courgettes|chou|brocoli|champignons|carottes|concombre|tomates?|poivron|patate|pommes de terre|betterave|salade|avocat|oignon|citron|banane|mangue|pommes|fruits rouges|framboises|passion|dattes|gingembre|ail$|olives|câpres|cornichons|piment|coriandre|persil|menthe|basilic|ciboulette|thym/i },
];

// Renvoie {name} canonique pour un ingrédient.
function canonical(ingName) {
  for (const c of CANON) {
    if (c.rx.test(ingName)) return c.name;
  }
  return null;
}

function categorize(name) {
  for (const cat of CAT_RULES) {
    if (cat.rx.test(name)) return cat.name;
  }
  return 'Épicerie & placard';
}

function buildList(dates) {
  const map = {};
  dates.forEach(date => {
    const entry = getEntry(date);
    ['starter','lunch','dinner','sides','sweet'].forEach(slot => {
      (entry.meals[slot] || []).forEach(item => {
        const r = getById(item.id);
        if (!r) return;
        // Le menu cantine n'est pas acheté (mangé au self) → on l'exclut
        if ((r.tags || []).includes('cantine')) return;
        const s = item.servings || 1;
        const ov = item.overrides;
        r.ingredients.forEach((ing, idx) => {
          let qty = (ov && ov[idx] != null) ? ov[idx] : ing.qty * s;
          const canonName = canonical(ing.name);
          const displayName = canonName || ing.name;
          const key = displayName.toLowerCase();
          // Unité : on normalise. Citron/oeufs/etc. → pièces ; sinon on garde l'unité de la recette.
          let unit = ing.unit;
          // Conversion du jus/zeste de citron en nombre d'agrumes (1 citron ≈ 40 ml de jus, ≈ 80 g).
          if (/^citron/i.test(displayName) || /citron vert/i.test(displayName)) {
            if (ing.unit === 'ml') qty = qty / 40;
            else if (ing.unit === 'g') qty = qty / 80;
            unit = 'pièces';
          } else if (/oeufs|piment rouge|fruit de la passion|^pommes$/i.test(displayName)) {
            unit = 'pièces';
          }
          if (!map[key]) map[key] = { name: displayName, qty: 0, unit, cat: categorize(displayName) };
          map[key].qty += qty;
        });
      });
    });
  });
  return Object.values(map);
}

// Arrondit la quantité à acheter à un format réaliste du commerce.
function toPurchase(item) {
  const n = item.name.toLowerCase();
  const q = item.qty;
  // Épices, sel & poivre, herbes : pas de quantité chiffrée utile → "à vérifier au placard"
  if (/épices|epices|aromates|sel & poivre|sel &amp; poivre/.test(n)) return { qty: '', unit: 'au placard' };
  if (/poulet|boeuf|bœuf|steak|dinde|saumon|colin|merlu|poisson|crevette|merguez|thon/.test(n) && item.unit === 'g')
    return { qty: Math.max(100, Math.ceil(q/100)*100), unit: 'g' };
  if (/fromage blanc|skyr|yaourt/.test(n) && item.unit === 'g') {
    const pots = Math.max(1, Math.ceil(q/500)); return { qty: pots*500, unit: `g · ${pots} pot${pots>1?'s':''} 500g` };
  }
  if (/riz|pâtes|pates|quinoa|boulghour|orzo|lentille|pois chiche|flocons/.test(n) && item.unit==='g')
    return { qty: Math.ceil(q/250)*250, unit: 'g' };
  if (/lait/.test(n) && item.unit==='ml') return { qty: Math.ceil(q/250)*250, unit: 'ml' };
  // Oeufs entiers : par boîte de 6. Blancs d'oeuf : restent en pièces simples.
  if (item.unit === 'pièces' && /^oeufs/.test(n)) {
    const e = Math.ceil(q); return { qty: e, unit: `pièces · ${Math.ceil(e/6)}×6` };
  }
  if (item.unit === 'pièces') return { qty: Math.ceil(q), unit: 'pièces' };
  if (item.unit === 'g') return { qty: Math.ceil(q/50)*50, unit: 'g' };
  return { qty: Math.ceil(q), unit: item.unit };
}

function renderShopping() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  // Mode : 'range' (depuis la semaine) ou 'days'
  let rangeDates = null;
  const stored = localStorage.getItem('diet_shop_range');
  if (stored) rangeDates = JSON.parse(stored);

  let days    = parseInt(localStorage.getItem('diet_shop_days') || '7');
  let checked = getChecked();

  function currentDates() {
    if (rangeDates) return rangeDates;
    return getLog().slice(-days).map(e => e.date);
  }

  function render() {
    const dates = currentDates();
    const items = buildList(dates).sort((a, b) => a.name.localeCompare(b.name, 'fr'));
    const done  = checked.filter(k => items.some(i => i.name.toLowerCase() === k)).length;

    // Groupe par catégorie
    const grouped = {};
    items.forEach(it => { (grouped[it.cat] ||= []).push(it); });

    const view = el('div', 'view shopping-view');

    const rangeLabel = rangeDates
      ? `Semaine du ${new Date(rangeDates[0]+'T12:00:00').toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}`
      : `${days} derniers jours`;

    view.innerHTML = `
      <div class="shopping-header">
        <div class="shopping-title">Liste de courses</div>
        ${rangeDates ? `
          <div class="shop-range-banner">${rangeLabel}
            <button class="shop-switch">Utiliser N jours</button>
          </div>
        ` : `
          <div class="days-tabs">
            ${[3,7,14].map(d => `<button class="days-tab ${days===d?'active':''}" data-days="${d}">${d} jours</button>`).join('')}
          </div>
        `}
        <div class="shop-stats">
          ${items.length} ingrédients · ${done}/${items.length} cochés
          ${done > 0 ? '<button class="clear-btn">Tout décocher</button>' : ''}
        </div>
        <div class="shop-progress"><div class="shop-progress-fill" style="width:${items.length ? Math.round(done/items.length*100) : 0}%"></div></div>
      </div>
      <div class="shopping-list">
        ${items.length ? CATEGORIES.map(c => {
          const list = grouped[c.name];
          if (!list || !list.length) return '';
          list.sort((a,b)=>a.name.localeCompare(b.name,'fr'));
          const ci = CATEGORIES.indexOf(c);
          const doneInCat = list.filter(it => checked.includes(it.name.toLowerCase())).length;
          return `
            <div class="shop-cat cat-c-${ci}">
              <div class="shop-cat-head">
                <span class="shop-cat-ic">${CAT_ICONS[ci] || ''}</span>
                <span class="shop-cat-name">${c.name}</span>
                <span class="shop-cat-count">${doneInCat}/${list.length}</span>
              </div>
              <div class="shop-group">
              ${list.map(item => {
                const key = item.name.toLowerCase();
                const isChecked = checked.includes(key);
                const p = toPurchase(item);
                return `<div class="shop-item ${isChecked ? 'done' : ''}" data-key="${key}">
                  <div class="shop-check ${isChecked ? 'checked' : ''}"></div>
                  <div class="shop-info">
                    <div class="shop-name">${item.name}</div>
                    <div class="shop-qty">${p.qty} ${p.unit}</div>
                  </div>
                </div>`;
              }).join('')}
              </div>
            </div>`;
        }).join('') : `<div class="empty-shop">Aucun repas planifié.<br><br>Planifie ta semaine dans <strong>Semaine</strong>.</div>`}
      </div>
      ${(() => {
        const entries = {}; dates.forEach(d => entries[d] = getEntry(d));
        const perish = collectPerishables(entries, dates);
        if (!perish.length) return '';
        return `
        <div class="perish-section">
          <div class="perish-title">Ce que j'ai acheté</div>
          <div class="perish-sub">Ajuste les quantités réelles : Hébé adapte les portions des recettes pour tout consommer à temps.</div>
          ${perish.map((p, i) => `
            <div class="perish-row" data-name="${encodeURIComponent(p.name)}">
              <div class="perish-info">
                <div class="perish-name">${p.name}</div>
                <div class="perish-meta"><span class="perish-tag tag-${p.cls}">${p.label} · ${p.days}j frigo</span></div>
              </div>
              <div class="perish-qty-ctrl">
                <input class="perish-input" type="text" inputmode="numeric" data-name="${encodeURIComponent(p.name)}" value="${Math.round(p.plannedQty)}">
                <span class="perish-unit">${p.unit}</span>
              </div>
            </div>`).join('')}
          <button class="perish-apply">Ajuster mes recettes</button>
        </div>`;
      })()}
    `;

    // Events
    view.querySelector('.shop-switch')?.addEventListener('click', () => {
      rangeDates = null;
      localStorage.removeItem('diet_shop_range');
      app.querySelector('.view')?.remove(); render();
    });
    view.querySelectorAll('.days-tab').forEach(b => b.addEventListener('click', () => {
      days = parseInt(b.dataset.days);
      localStorage.setItem('diet_shop_days', days);
      app.querySelector('.view')?.remove(); render();
    }));
    view.querySelector('.clear-btn')?.addEventListener('click', () => {
      clearChecked(); checked = []; app.querySelector('.view')?.remove(); render();
    });
    view.querySelectorAll('.shop-item').forEach(row => row.addEventListener('click', () => {
      const key = row.dataset.key;
      const idx = checked.indexOf(key);
      if (idx > -1) checked.splice(idx, 1); else checked.push(key);
      saveChecked(checked);
      app.querySelector('.view')?.remove(); render();
    }));

    // Périssables : appliquer les quantités réelles → scaler les recettes
    view.querySelector('.perish-apply')?.addEventListener('click', () => {
      const dts = currentDates();
      const entries = {}; dts.forEach(d => entries[d] = getEntry(d));
      const perish = collectPerishables(entries, dts);
      const bought = {};
      view.querySelectorAll('.perish-input').forEach(inp => {
        const name = decodeURIComponent(inp.dataset.name);
        const v = parseFloat(String(inp.value).replace(',', '.'));
        if (!isNaN(v) && v >= 0) bought[name] = v;
      });
      applyPerishables(entries, dts, perish, bought, USER.targets);
      Object.values(entries).forEach(e => saveEntry(e));
      const btn = view.querySelector('.perish-apply');
      btn.textContent = '✓ Recettes ajustées';
      btn.classList.add('done');
      setTimeout(() => { app.querySelector('.view')?.remove(); render(); }, 900);
    });

    app.insertBefore(view, app.querySelector('#nav'));
  }

  render();
}


// ──────────────────────────────────────────────
// js/history.js
// ──────────────────────────────────────────────

function renderHistory() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const view = el('div', 'view history-view');
  view.innerHTML = '<div class="history-header"><div class="history-title">Historique</div></div>';

  const log = getLog().slice(-21).reverse();
  const { targets } = USER;

  if (!log.length) {
    view.innerHTML += '<div class="no-history">Aucun repas enregistré.</div>';
    app.insertBefore(view, app.querySelector('#nav'));
    return;
  }

  const SLOTS = [
    { key: 'lunch',  label: 'Déj.'  },
    { key: 'dinner', label: 'Dîner' },
    { key: 'sides',  label: 'Acc.'  },
    { key: 'sweet',  label: 'Sucré' },
  ];

  log.forEach(entry => {
    const macros = computeDayMacros(entry);
    const anyMeal = SLOTS.some(s => (entry.meals[s.key]||[]).length > 0);
    if (!anyMeal) return;
    const over = macros.kcal > targets.kcal * 1.08;

    const day = el('div', 'history-day');
    day.innerHTML = `
      <div class="hday-header">
        <div class="hday-date">${formatDate(entry.date)}</div>
        <div class="hday-kcal ${over ? 'over' : ''}">${Math.round(macros.kcal)} kcal${over ? ' · dépassé' : ''}</div>
      </div>
      <div class="hday-macros">
        <span class="hday-macro">P <span>${Math.round(macros.protein)}g</span></span>
        <span class="hday-macro">G <span>${Math.round(macros.carbs)}g</span></span>
        <span class="hday-macro">L <span>${Math.round(macros.fat)}g</span></span>
      </div>
      <div class="hday-bars">
        <div class="hday-bar-row"><span class="hday-bar-label" style="color:var(--kcal)">k</span><div class="hday-bar-wrap">${mbar(macros.kcal, targets.kcal, 'var(--kcal)')}</div></div>
        <div class="hday-bar-row"><span class="hday-bar-label" style="color:var(--protein)">P</span><div class="hday-bar-wrap">${mbar(macros.protein, targets.protein, 'var(--protein)')}</div></div>
      </div>`;

    const meals = el('div', 'hday-meals');
    SLOTS.forEach(({ key, label }) => {
      const items = entry.meals[key] || [];
      if (!items.length) return;
      const names = items.map(it => {
        const r = getById(it.id);
        return r ? r.name + (it.servings > 1 ? ` ×${it.servings}` : '') : null;
      }).filter(Boolean).join(', ');
      const row = el('div', 'hday-meal');
      row.innerHTML = `<span class="hday-meal-slot">${label}</span><span class="hday-meal-names">${names}</span>`;
      meals.appendChild(row);
    });
    day.appendChild(meals);
    view.appendChild(day);
  });

  app.insertBefore(view, app.querySelector('#nav'));
}


// ──────────────────────────────────────────────
// js/settings.js
// ──────────────────────────────────────────────
// settings.js — Profil + choix de programme (Zero to Hero) + objectifs

function renderSettings() {
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
              <div class="proto-num">${PROTOCOLS.indexOf(p)+1}</div>
              <div class="proto-name">${p.name}</div>
              <div class="proto-tagline">${p.tagline}</div>
              <div class="proto-range">${range}</div>
              <div class="proto-check">✓</div>
            </button>`;
          }).join('')}
        </div>
        <div class="proto-desc-box">${protocol.desc}</div>
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
          <div class="pg-row"><div><div class="pg-title">Cette phase</div><div class="pg-text">${protocol.phases[phaseIdx].advice}</div></div></div>
          <div class="pg-row"><div><div class="pg-title">Quand passer à la suite</div><div class="pg-text">${protocol.phases[phaseIdx].advance}</div></div></div>
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


// ──────────────────────────────────────────────
// js/batch.js
// ──────────────────────────────────────────────
// batch.js — Page "Recettes de la semaine" : fiches détaillées de tous les plats à cuisiner,
// avec les quantités totales (toutes portions de la semaine cumulées) + les étapes.


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


function renderBatch() {
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


// ──────────────────────────────────────────────
// js/main.js
// ──────────────────────────────────────────────

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

