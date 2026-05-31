// DIET — bundled app (généré par build.js)
// 2026-05-31T08:15:17.868Z


// ──────────────────────────────────────────────
// data/recipes.js
// ──────────────────────────────────────────────
// recipes.js — Base de données complète · 20 dîners · 20 déjeuners · 10 accompagnements
// Macros par portion (1 personne). Ajustables dans l'app.

const RECIPES = [

  // ─────────────────────────────────────────────────────────────
  // DÎNERS
  // ─────────────────────────────────────────────────────────────

  {
    id: 'D01',
    name: 'Poulet rôti citron-thym',
    category: 'dinner',
    emoji: '🍋',
    prepTime: 15,
    cookTime: 40,
    batch: true,
    macros: { kcal: 747, protein: 68, carbs: 83, fat: 17 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Courgette', qty: 150, unit: 'g', kcal: 26, protein: 1.8, carbs: 4.5, fat: 0.5 },
      { name: 'Poivron', qty: 100, unit: 'g', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
      { name: 'Oignon', qty: 80, unit: 'g', kcal: 32, protein: 0.8, carbs: 7.2, fat: 0 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Citron', qty: 1, unit: 'pièce', kcal: 17, protein: 0.6, carbs: 5, fat: 0.2 },
      { name: 'Thym frais', qty: 5, unit: 'g', kcal: 4, protein: 0.3, carbs: 0.9, fat: 0.1 },
      { name: 'Herbes de Provence', qty: 3, unit: 'g', kcal: 8, protein: 0.3, carbs: 1.7, fat: 0.3 },
    ],
    steps: [
      'Préchauffer le four à 200°C.',
      'Mélanger zeste de citron + ail haché + thym + herbes + huile + sel + poivre.',
      'Inciser le poulet, glisser la marinade sous la peau. Enduire l\'extérieur.',
      'Disposer les légumes coupés en gros morceaux autour. Jus de citron sur tout.',
      'Enfourner 35-40 min. Reposer 5 min avant de couper.',
      'Cuire le riz en parallèle (rincer, 2x volume d\'eau, 12 min).',
    ],
    tip: 'Batch : cuire 3 blancs d\'un coup. Le poulet froid va dans les wraps et salades toute la semaine.',
    tags: ['batch', 'four', 'français'],
  },

  {
    id: 'D02',
    name: 'Poulet moutarde-champignons fromage blanc',
    category: 'dinner',
    emoji: '🍄',
    prepTime: 10,
    cookTime: 20,
    batch: false,
    macros: { kcal: 765, protein: 87, carbs: 79, fat: 12 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Champignons de Paris', qty: 200, unit: 'g', kcal: 44, protein: 6, carbs: 6, fat: 0.6 },
      { name: 'Fromage blanc 0%', qty: 200, unit: 'g', kcal: 90, protein: 16, carbs: 8, fat: 0 },
      { name: 'Moutarde de Dijon', qty: 15, unit: 'g', kcal: 15, protein: 0.9, carbs: 0.9, fat: 0.9 },
      { name: 'Oignon', qty: 80, unit: 'g', kcal: 32, protein: 0.8, carbs: 7.2, fat: 0 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Persil frais', qty: 5, unit: 'g', kcal: 4, protein: 0.3, carbs: 0.7, fat: 0.1 },
    ],
    steps: [
      'Cuire le riz à part.',
      'Couper le poulet en morceaux. Faire revenir avec l\'ail dans l\'huile 5-6 min jusqu\'à coloration.',
      'Ajouter l\'oignon émincé, cuire 2 min.',
      'Ajouter les champignons tranchés, cuire 5 min jusqu\'à évaporation de l\'eau.',
      'Hors du feu : ajouter fromage blanc + moutarde + sel + poivre. Mélanger.',
      'Remettre à feu très doux 2 min. Garnir de persil. Servir avec le riz.',
    ],
    tip: 'Ne jamais faire bouillir le fromage blanc après l\'avoir ajouté — il tournerait. Feu doux uniquement.',
    tags: ['rapide', 'français', 'bistro'],
  },

  {
    id: 'D03',
    name: 'Boeuf stroganoff allégé',
    category: 'dinner',
    emoji: '🥩',
    prepTime: 10,
    cookTime: 20,
    batch: false,
    macros: { kcal: 759, protein: 74, carbs: 68, fat: 22 },
    ingredients: [
      { name: 'Steak haché 5%', qty: 200, unit: 'g', kcal: 310, protein: 42, carbs: 0, fat: 15 },
      { name: 'Champignons de Paris', qty: 200, unit: 'g', kcal: 44, protein: 6, carbs: 6, fat: 0.6 },
      { name: 'Fromage blanc 0%', qty: 200, unit: 'g', kcal: 90, protein: 16, carbs: 8, fat: 0 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Moutarde de Dijon', qty: 5, unit: 'g', kcal: 5, protein: 0.3, carbs: 0.3, fat: 0.3 },
      { name: 'Cornichons', qty: 30, unit: 'g', kcal: 6, protein: 0.4, carbs: 1.2, fat: 0 },
      { name: 'Paprika', qty: 3, unit: 'g', kcal: 9, protein: 0.5, carbs: 1.8, fat: 0.4 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Pâtes', qty: 60, unit: 'g', kcal: 210, protein: 7.8, carbs: 42, fat: 0.9 },
    ],
    steps: [
      'Cuire les pâtes al dente. Réserver.',
      'Faire revenir l\'oignon dans l\'huile jusqu\'à transparence, 3-4 min.',
      'Ajouter les champignons tranchés. Cuire jusqu\'à évaporation, 5 min.',
      'Ajouter le steak haché, émietter à la spatule. Paprika + sel + poivre. Cuire 5 min.',
      'Hors du feu : fromage blanc + moutarde + cornichons hachés. Incorporer à la viande.',
      'Mélanger aux pâtes. Ne pas remettre sur le feu.',
    ],
    tip: 'Les cornichons sont la signature du stroganoff. Leur acidité tranche avec la richesse de la sauce — ne pas les zapper.',
    tags: ['européen', 'rapide'],
  },

  {
    id: 'D04',
    name: 'Gratin courgettes-thon-ricotta',
    category: 'dinner',
    emoji: '🫕',
    prepTime: 20,
    cookTime: 25,
    batch: true,
    macros: { kcal: 659, protein: 85, carbs: 16, fat: 29 },
    ingredients: [
      { name: 'Thon au naturel (égouttés)', qty: 210, unit: 'g', kcal: 244, protein: 54.6, carbs: 0, fat: 2.1 },
      { name: 'Courgettes', qty: 250, unit: 'g', kcal: 43, protein: 3, carbs: 7.5, fat: 0.8 },
      { name: 'Ricotta', qty: 80, unit: 'g', kcal: 139, protein: 8.8, carbs: 2.4, fat: 10.4 },
      { name: 'Fromage blanc 0%', qty: 80, unit: 'g', kcal: 36, protein: 6.4, carbs: 3.2, fat: 0 },
      { name: 'Parmesan', qty: 15, unit: 'g', kcal: 65, protein: 5.3, carbs: 0, fat: 4.8 },
      { name: 'Oeuf', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Basilic frais', qty: 5, unit: 'g', kcal: 2, protein: 0.2, carbs: 0.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
    ],
    steps: [
      'Préchauffer le four à 180°C.',
      'Trancher les courgettes finement (3mm). Saler, laisser dégorger 10 min, éponger avec du papier absorbant.',
      'Mélanger thon + ricotta + fromage blanc + oeuf + ail haché + basilic + sel + poivre.',
      'Dans un plat huilé, alterner couches de courgettes et mélange thon. Finir avec parmesan.',
      'Enfourner 25 min jusqu\'à gratinage doré.',
    ],
    tip: 'Faire dégorger les courgettes est indispensable — sinon le gratin rend de l\'eau. Batch : faire x2 et congeler une portion.',
    tags: ['batch', 'four', 'low-carb', 'italien'],
  },

  {
    id: 'D05',
    name: 'Pad kra pao thaï',
    category: 'dinner',
    emoji: '🌿',
    prepTime: 10,
    cookTime: 15,
    batch: false,
    macros: { kcal: 775, protein: 73, carbs: 70, fat: 21 },
    ingredients: [
      { name: 'Blanc de poulet haché ou émincé fin', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Oeuf', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Sauce soja', qty: 30, unit: 'ml', kcal: 16, protein: 2, carbs: 1.5, fat: 0 },
      { name: 'Sauce huîtres', qty: 15, unit: 'ml', kcal: 15, protein: 0.8, carbs: 2.3, fat: 0 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
      { name: 'Ail', qty: 4, unit: 'gousses', kcal: 16, protein: 0.6, carbs: 3.6, fat: 0.1 },
      { name: 'Piment rouge', qty: 1, unit: 'pièce', kcal: 6, protein: 0.3, carbs: 1.4, fat: 0.1 },
      { name: 'Basilic thaï ou classique', qty: 15, unit: 'g', kcal: 6, protein: 0.5, carbs: 0.8, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
    ],
    steps: [
      'Cuire le riz.',
      'Mélanger soja + sauce huîtres + miel dans un bol. Réserver.',
      'Chauffer l\'huile à feu VIF. Faire revenir ail émincé + piment haché 1 min.',
      'Ajouter le poulet. Cuire 5-6 min en cassant les morceaux, feu vif.',
      'Verser la sauce, mélanger 1 min jusqu\'à légère caramélisation.',
      'Hors du feu : incorporer le basilic déchiré. Servir sur riz avec oeuf frit à part.',
    ],
    tip: 'Le feu VIF est la clé. La chaleur intense donne ce goût légèrement fumé caractéristique. Ne pas baisser le feu.',
    tags: ['thaï', 'épicé', 'rapide', 'asiatique'],
  },

  {
    id: 'D06',
    name: 'Bibimbap coréen',
    category: 'dinner',
    emoji: '🇰🇷',
    prepTime: 20,
    cookTime: 20,
    batch: false,
    macros: { kcal: 841, protein: 65, carbs: 79, fat: 27 },
    ingredients: [
      { name: 'Steak haché 5%', qty: 200, unit: 'g', kcal: 310, protein: 42, carbs: 0, fat: 15 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Oeuf', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Épinards', qty: 100, unit: 'g', kcal: 23, protein: 3, carbs: 2, fat: 0.4 },
      { name: 'Carotte', qty: 80, unit: 'g', kcal: 33, protein: 0.8, carbs: 7.2, fat: 0.2 },
      { name: 'Courgette', qty: 100, unit: 'g', kcal: 17, protein: 1.2, carbs: 3, fat: 0.3 },
      { name: 'Sauce soja', qty: 30, unit: 'ml', kcal: 16, protein: 2, carbs: 1, fat: 0 },
      { name: 'Gochujang', qty: 15, unit: 'g', kcal: 30, protein: 0.5, carbs: 6, fat: 0.5 },
      { name: 'Huile de sésame', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Fromage blanc 0% (sauce)', qty: 50, unit: 'g', kcal: 23, protein: 4, carbs: 2, fat: 0 },
      { name: 'Gingembre en poudre', qty: 2, unit: 'g', kcal: 6, protein: 0.2, carbs: 1.4, fat: 0.1 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
    ],
    steps: [
      'Cuire le riz.',
      'Mariner le steak haché dans la moitié du soja + gingembre + ail haché 10 min.',
      'Faire revenir chaque légume séparément à la poêle avec un peu de soja (épinards 2 min, carottes 4 min, courgettes 3 min). Réserver.',
      'Cuire le steak haché mariné à la poêle, émietter.',
      'Sauce gochujang : gochujang + fromage blanc + soja restant + 1 càc miel. Mélanger.',
      'Assembler le bowl : riz au fond, légumes en secteurs colorés, viande au centre, oeuf au soleil. Huile de sésame. Sauce à part.',
    ],
    tip: 'Le gochujang se trouve en épicerie asiatique ou sur Amazon. Il se conserve 6 mois au frigo. Le secret : chaque légume cuit séparément pour garder sa saveur.',
    tags: ['coréen', 'bowl', 'asiatique'],
  },

  {
    id: 'D07',
    name: 'Gyudon — boeuf caramélisé soja-mirin',
    category: 'dinner',
    emoji: '🍱',
    prepTime: 10,
    cookTime: 15,
    batch: false,
    macros: { kcal: 781, protein: 59, carbs: 78, fat: 23 },
    ingredients: [
      { name: 'Steak haché 5%', qty: 200, unit: 'g', kcal: 310, protein: 42, carbs: 0, fat: 15 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Oignon', qty: 150, unit: 'g', kcal: 60, protein: 1.5, carbs: 13.5, fat: 0 },
      { name: 'Sauce soja', qty: 45, unit: 'ml', kcal: 24, protein: 3, carbs: 1.5, fat: 0 },
      { name: 'Miel (remplace le mirin)', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
      { name: 'Oeuf poché', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Sésame', qty: 5, unit: 'g', kcal: 30, protein: 1, carbs: 1, fat: 2.5 },
      { name: 'Gingembre en poudre', qty: 2, unit: 'g', kcal: 6, protein: 0.2, carbs: 1.4, fat: 0.1 },
    ],
    steps: [
      'Cuire le riz.',
      'Émincer l\'oignon finement. Faire revenir à feu moyen dans une poêle anti-adhésive jusqu\'à dorure, 8-10 min.',
      'Ajouter le steak haché, émietter à la spatule. Cuire 4-5 min.',
      'Verser soja + miel + gingembre. Laisser caraméliser 2-3 min à feu vif.',
      'Pocher l\'oeuf dans eau frémissante avec un filet de vinaigre, 3 min.',
      'Servir boeuf sur riz avec oeuf poché dessus. Sésame et oignons verts en finition.',
    ],
    tip: 'Les oignons bien caramélisés apportent une douceur essentielle qui contraste avec le soja. Ne pas bâcler cette étape.',
    tags: ['japonais', 'bowl', 'asiatique'],
  },

  {
    id: 'D08',
    name: 'Curry vert thaï poulet lait de coco',
    category: 'dinner',
    emoji: '🥥',
    prepTime: 10,
    cookTime: 20,
    batch: true,
    macros: { kcal: 797, protein: 67, carbs: 76, fat: 25 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Lait de coco light', qty: 150, unit: 'ml', kcal: 128, protein: 1.5, carbs: 4.5, fat: 12 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Pâte de curry vert', qty: 15, unit: 'g', kcal: 27, protein: 0.5, carbs: 1.8, fat: 1.8 },
      { name: 'Poivron', qty: 100, unit: 'g', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
      { name: 'Courgette', qty: 100, unit: 'g', kcal: 17, protein: 1.2, carbs: 3, fat: 0.3 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Gingembre frais', qty: 5, unit: 'g', kcal: 4, protein: 0.1, carbs: 1, fat: 0.1 },
      { name: 'Citron vert (jus)', qty: 30, unit: 'ml', kcal: 8, protein: 0.3, carbs: 2.4, fat: 0 },
      { name: 'Coriandre fraîche', qty: 5, unit: 'g', kcal: 2, protein: 0.2, carbs: 0.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
    ],
    steps: [
      'Cuire le riz.',
      'Chauffer l\'huile, faire revenir la pâte de curry vert 2 min à feu moyen.',
      'Ajouter le poulet coupé en morceaux, cuire 5 min.',
      'Verser lait de coco + 100ml eau. Ajouter poivrons + courgettes + ail + gingembre.',
      'Mijoter 12-15 min. Goûter, ajuster sel et piment.',
      'Finir avec jus citron vert + coriandre fraîche. Servir avec riz.',
    ],
    tip: 'La pâte de curry vert se trouve en supermarché rayon asiatique. Une boîte fait 6-8 recettes et se conserve 1 mois au frigo.',
    tags: ['thaï', 'batch', 'épicé', 'asiatique'],
  },

  {
    id: 'D09',
    name: 'Dal lentilles corail gingembre-coriandre',
    category: 'dinner',
    emoji: '🫘',
    prepTime: 10,
    cookTime: 20,
    batch: true,
    macros: { kcal: 853, protein: 69, carbs: 99, fat: 20 },
    ingredients: [
      { name: 'Lentilles corail sèches', qty: 120, unit: 'g', kcal: 420, protein: 28.8, carbs: 68.4, fat: 2.4 },
      { name: 'Blanc de poulet', qty: 150, unit: 'g', kcal: 165, protein: 34.5, carbs: 0, fat: 3 },
      { name: 'Lait de coco light', qty: 100, unit: 'ml', kcal: 85, protein: 1, carbs: 3, fat: 8 },
      { name: 'Tomates concassées', qty: 150, unit: 'g', kcal: 53, protein: 2.3, carbs: 9, fat: 0.5 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Gingembre frais', qty: 10, unit: 'g', kcal: 8, protein: 0.2, carbs: 2, fat: 0.1 },
      { name: 'Épices (curry, curcuma, cumin)', qty: 5, unit: 'g', kcal: 15, protein: 0.6, carbs: 3, fat: 0.5 },
      { name: 'Coriandre fraîche', qty: 10, unit: 'g', kcal: 4, protein: 0.3, carbs: 0.8, fat: 0.1 },
      { name: 'Citron (jus)', qty: 15, unit: 'ml', kcal: 4, protein: 0.2, carbs: 1.2, fat: 0 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
    ],
    steps: [
      'Faire revenir oignon + ail + gingembre râpé dans l\'huile 3 min.',
      'Ajouter les épices, cuire 1 min en remuant (ça parfume l\'huile).',
      'Ajouter lentilles + tomates + lait de coco + 400ml eau. Porter à ébullition.',
      'Cuire 15 min à feu moyen en remuant régulièrement.',
      'Ajouter le poulet coupé en dés les 5 dernières minutes.',
      'Jus de citron + coriandre fraîche. Ajuster le sel.',
    ],
    tip: 'Batch par excellence : se congèle parfaitement. Faire x3 et congeler en portions. Encore meilleur le lendemain.',
    tags: ['indien', 'batch', 'légumineuses'],
  },

  {
    id: 'D10',
    name: 'Poulet yassa sénégalais',
    category: 'dinner',
    emoji: '🌍',
    prepTime: 15,
    cookTime: 35,
    batch: true,
    macros: { kcal: 830, protein: 69, carbs: 93, fat: 20 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Oignon', qty: 300, unit: 'g', kcal: 120, protein: 3, carbs: 27, fat: 0 },
      { name: 'Moutarde de Dijon', qty: 30, unit: 'g', kcal: 30, protein: 1.8, carbs: 1.8, fat: 1.8 },
      { name: 'Olives vertes', qty: 20, unit: 'g', kcal: 28, protein: 0.2, carbs: 0.8, fat: 2.8 },
      { name: 'Citron (jus + zeste)', qty: 1, unit: 'pièce', kcal: 17, protein: 0.6, carbs: 5, fat: 0.2 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Piment rouge', qty: 1, unit: 'pièce', kcal: 6, protein: 0.3, carbs: 1.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
    ],
    steps: [
      'Mariner le poulet dans moutarde + jus de citron + ail + piment + sel au moins 30 min (idéalement 1h).',
      'Émincer les oignons très finement. Faire caraméliser à feu doux 20-25 min — c\'est l\'étape clé du yassa.',
      'Saisir le poulet mariné à feu vif 4-5 min de chaque côté.',
      'Combiner oignons caramélisés + poulet + olives + reste de marinade dans la poêle.',
      'Ajouter 100ml eau, couvrir et mijoter 20 min à feu doux.',
      'Cuire le riz. Servir avec.',
    ],
    tip: 'Les oignons caramélisés sont l\'âme du yassa. 25 min à feu doux minimum. Ne pas bâcler. C\'est ce qui donne cette douceur sucrée irrésistible.',
    tags: ['africain', 'batch', 'marinade'],
  },

  {
    id: 'D11',
    name: 'Mafé de poulet — sauce cacahuète',
    category: 'dinner',
    emoji: '🥜',
    prepTime: 15,
    cookTime: 30,
    batch: true,
    macros: { kcal: 843, protein: 72, carbs: 92, fat: 19 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Beurre de cacahuète naturel', qty: 15, unit: 'g', kcal: 90, protein: 3.5, carbs: 3, fat: 7.5 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Carotte', qty: 100, unit: 'g', kcal: 41, protein: 1, carbs: 9, fat: 0.2 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Gingembre frais', qty: 10, unit: 'g', kcal: 8, protein: 0.2, carbs: 2, fat: 0.1 },
      { name: 'Piment rouge', qty: 1, unit: 'pièce', kcal: 6, protein: 0.3, carbs: 1.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
    ],
    steps: [
      'Saisir le poulet coupé en morceaux à feu vif 5 min. Réserver.',
      'Faire revenir oignon + ail + gingembre dans la même poêle, 3 min.',
      'Ajouter le beurre de cacahuète + tomates concassées + 200ml eau. Mélanger jusqu\'à sauce homogène.',
      'Remettre le poulet + carottes en rondelles. Couvrir et mijoter 25 min à feu doux.',
      'Ajuster sel, piment. La sauce doit être épaisse et enrobante.',
      'Servir avec riz.',
    ],
    tip: 'Le mafé est un des plats les plus réconfortants de la cuisine africaine. La sauce cacahuète-tomate est une bombe umami. Se congèle parfaitement.',
    tags: ['africain', 'batch', 'épicé'],
  },

  {
    id: 'D12',
    name: 'Kefta boeuf sauce tomate-cumin',
    category: 'dinner',
    emoji: '🫙',
    prepTime: 15,
    cookTime: 20,
    batch: false,
    macros: { kcal: 798, protein: 61, carbs: 59, fat: 34 },
    ingredients: [
      { name: 'Steak haché 5%', qty: 200, unit: 'g', kcal: 310, protein: 42, carbs: 0, fat: 15 },
      { name: 'Tomates concassées', qty: 250, unit: 'g', kcal: 88, protein: 3.8, carbs: 15, fat: 0.8 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Oeuf', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Pain complet', qty: 70, unit: 'g', kcal: 161, protein: 6.3, carbs: 28, fat: 2.1 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Épices (cumin, cannelle, coriandre)', qty: 5, unit: 'g', kcal: 15, protein: 0.6, carbs: 3, fat: 0.5 },
      { name: 'Persil + coriandre frais', qty: 10, unit: 'g', kcal: 4, protein: 0.4, carbs: 0.8, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
    ],
    steps: [
      'Mélanger steak haché + ail haché + persil/coriandre + cumin + cannelle + sel + poivre.',
      'Former des boulettes allongées (keftas). Faire revenir à la poêle 4-5 min.',
      'Faire la sauce dans la même poêle : oignon émincé + tomates + cumin + paprika + sel. Cuire 8 min.',
      'Plonger les keftas dans la sauce. Casser 1 oeuf dans un creux, couvrir 5 min.',
      'Garnir de coriandre fraîche. Servir avec pain grillé pour saucer.',
    ],
    tip: 'La cannelle dans les keftas c\'est le secret. Ça donne une profondeur aromatique qui change tout. Ne pas l\'oublier.',
    tags: ['maghrébin', 'moyen-orient'],
  },

  {
    id: 'D13',
    name: 'Tagine poulet citron confit-olives',
    category: 'dinner',
    emoji: '🫒',
    prepTime: 15,
    cookTime: 35,
    batch: true,
    macros: { kcal: 827, protein: 68, carbs: 87, fat: 21 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Oignon', qty: 150, unit: 'g', kcal: 60, protein: 1.5, carbs: 13.5, fat: 0 },
      { name: 'Olives vertes', qty: 30, unit: 'g', kcal: 42, protein: 0.3, carbs: 1.2, fat: 4.2 },
      { name: 'Tomates concassées', qty: 150, unit: 'g', kcal: 53, protein: 2.3, carbs: 9, fat: 0.5 },
      { name: 'Citron confit (1/4)', qty: 20, unit: 'g', kcal: 15, protein: 0.3, carbs: 3.5, fat: 0.1 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Ras el hanout', qty: 5, unit: 'g', kcal: 15, protein: 0.5, carbs: 3, fat: 0.5 },
      { name: 'Gingembre + curcuma + cannelle', qty: 4, unit: 'g', kcal: 12, protein: 0.4, carbs: 2.6, fat: 0.3 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Coriandre fraîche', qty: 10, unit: 'g', kcal: 4, protein: 0.4, carbs: 0.8, fat: 0.1 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
    ],
    steps: [
      'Mariner le poulet dans les épices + huile + ail 30 min si possible.',
      'Faire revenir l\'oignon émincé jusqu\'à transparence, 5 min.',
      'Ajouter le poulet mariné, dorer sur toutes les faces.',
      'Ajouter tomates + citron confit émincé + olives + 150ml eau. Couvrir.',
      'Mijoter 30-35 min à feu très doux.',
      'Garnir de coriandre. Servir avec riz.',
    ],
    tip: 'Le citron confit se trouve en épicerie orientale ou en grande surface. Il transforme le plat — le citron frais ne donne pas le même résultat.',
    tags: ['marocain', 'batch', 'moyen-orient'],
  },

  {
    id: 'D14',
    name: 'Shakshuka merguez volaille-feta',
    category: 'dinner',
    emoji: '🍳',
    prepTime: 10,
    cookTime: 20,
    batch: false,
    macros: { kcal: 716, protein: 48, carbs: 42, fat: 38 },
    ingredients: [
      { name: 'Merguez de volaille', qty: 140, unit: 'g', kcal: 217, protein: 22.4, carbs: 1.4, fat: 14 },
      { name: 'Oeufs', qty: 3, unit: 'pièces', kcal: 234, protein: 19.5, carbs: 1.2, fat: 16.2 },
      { name: 'Feta', qty: 30, unit: 'g', kcal: 75, protein: 4.5, carbs: 0.5, fat: 6 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Oignon', qty: 80, unit: 'g', kcal: 32, protein: 0.8, carbs: 7.2, fat: 0 },
      { name: 'Poivron rouge', qty: 100, unit: 'g', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Épices (cumin, paprika, harissa)', qty: 5, unit: 'g', kcal: 15, protein: 0.5, carbs: 3, fat: 0.5 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Pain complet', qty: 35, unit: 'g', kcal: 80, protein: 3.2, carbs: 14, fat: 1.1 },
    ],
    steps: [
      'Couper les merguez en rondelles. Faire revenir 3-4 min à la poêle.',
      'Ajouter oignon émincé + poivron coupé. Cuire 5 min.',
      'Ajouter tomates + ail + épices. Cuire 8 min jusqu\'à sauce bien réduite.',
      'Faire 3 creux dans la sauce, casser 1 oeuf dans chaque. Émietter la feta.',
      'Couvrir, cuire 5 min (blanc pris, jaune coulant).',
      'Servir directement dans la poêle avec pain grillé pour saucer.',
    ],
    tip: 'Servir dans la poêle directement à table. Oeuf coulant obligatoire — c\'est lui qui lie tout. Avec une bonne harissa maison ou du commerce, c\'est addictif.',
    tags: ['maghrébin', 'moyen-orient', 'épicé'],
  },

  {
    id: 'D15',
    name: 'Chana masala poulet épicé',
    category: 'dinner',
    emoji: '🫛',
    prepTime: 10,
    cookTime: 25,
    batch: true,
    macros: { kcal: 757, protein: 74, carbs: 73, fat: 20 },
    ingredients: [
      { name: 'Pois chiches en boîte (égouttés)', qty: 200, unit: 'g', kcal: 240, protein: 14, carbs: 36, fat: 4 },
      { name: 'Blanc de poulet', qty: 200, unit: 'g', kcal: 220, protein: 46, carbs: 0, fat: 4 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Gingembre frais', qty: 10, unit: 'g', kcal: 8, protein: 0.2, carbs: 2, fat: 0.1 },
      { name: 'Garam masala + cumin + coriandre + curcuma', qty: 8, unit: 'g', kcal: 24, protein: 1, carbs: 4.8, fat: 0.8 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Citron (jus)', qty: 15, unit: 'ml', kcal: 4, protein: 0.2, carbs: 1.2, fat: 0 },
      { name: 'Coriandre fraîche', qty: 10, unit: 'g', kcal: 4, protein: 0.4, carbs: 0.8, fat: 0.1 },
    ],
    steps: [
      'Faire revenir oignon + ail + gingembre dans l\'huile jusqu\'à coloration, 5 min.',
      'Ajouter les épices, cuire 1 min en remuant (libère les arômes).',
      'Ajouter tomates + 100ml eau. Cuire 5 min.',
      'Ajouter pois chiches + poulet coupé en dés. Cuire 15 min.',
      'Écraser quelques pois chiches à la fourchette pour épaissir la sauce.',
      'Hors du feu : fromage blanc + jus de citron + coriandre. Ajuster sel.',
    ],
    tip: 'Écraser quelques pois chiches dans la sauce est le secret pour la texture — ça l\'épaissit naturellement sans ajouter quoi que ce soit.',
    tags: ['indien', 'batch', 'légumineuses'],
  },

  {
    id: 'D16',
    name: 'Poulet tikka masala allégé',
    category: 'dinner',
    emoji: '🍛',
    prepTime: 15,
    cookTime: 25,
    batch: true,
    macros: { kcal: 875, protein: 85, carbs: 96, fat: 17 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Fromage blanc 0%', qty: 200, unit: 'g', kcal: 90, protein: 16, carbs: 8, fat: 0 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Ail', qty: 4, unit: 'gousses', kcal: 16, protein: 0.6, carbs: 3.6, fat: 0.1 },
      { name: 'Gingembre frais', qty: 10, unit: 'g', kcal: 8, protein: 0.2, carbs: 2, fat: 0.1 },
      { name: 'Épices tikka (garam masala, cumin, paprika, curcuma, coriandre)', qty: 10, unit: 'g', kcal: 30, protein: 1.2, carbs: 6, fat: 1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Coriandre fraîche', qty: 10, unit: 'g', kcal: 4, protein: 0.4, carbs: 0.8, fat: 0.1 },
    ],
    steps: [
      'Mariner le poulet coupé en dés dans 100g fromage blanc + épices tikka + ail + gingembre. Minimum 1h, idéalement une nuit.',
      'Saisir le poulet mariné à feu vif 5 min. Réserver.',
      'Faire revenir l\'oignon 5 min. Ajouter tomates + épices restantes. Cuire 8 min.',
      'Ajouter le poulet à la sauce. Mijoter 15 min.',
      'Hors du feu : incorporer le reste du fromage blanc.',
      'Garnir de coriandre. Servir avec riz.',
    ],
    tip: 'La marinade au fromage blanc attendrit le poulet en profondeur. Plus longtemps elle marine, plus le poulet sera tendre et parfumé.',
    tags: ['indien', 'batch', 'épicé'],
  },

  {
    id: 'D17',
    name: 'Poulet souvlaki bowl façon grec',
    category: 'dinner',
    emoji: '🇬🇷',
    prepTime: 15,
    cookTime: 15,
    batch: true,
    macros: { kcal: 770, protein: 77, carbs: 72, fat: 18 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Fromage blanc 0% (tzatziki)', qty: 150, unit: 'g', kcal: 68, protein: 12, carbs: 6, fat: 0 },
      { name: 'Concombre', qty: 100, unit: 'g', kcal: 15, protein: 0.7, carbs: 3, fat: 0.1 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Olives noires', qty: 15, unit: 'g', kcal: 23, protein: 0.2, carbs: 0.8, fat: 2.1 },
      { name: 'Citron (jus + zeste)', qty: 1, unit: 'pièce', kcal: 17, protein: 0.6, carbs: 5, fat: 0.2 },
      { name: 'Origan séché', qty: 3, unit: 'g', kcal: 9, protein: 0.4, carbs: 1.8, fat: 0.3 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Menthe fraîche (tzatziki)', qty: 5, unit: 'g', kcal: 4, protein: 0.3, carbs: 0.7, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
    ],
    steps: [
      'Mariner le poulet dans huile + jus de citron + origan + ail + sel + poivre 30 min.',
      'Tzatziki : râper le concombre, presser l\'excès d\'eau, mélanger avec fromage blanc + ail râpé + menthe + citron + sel.',
      'Cuire le riz.',
      'Griller le poulet à la poêle ou grill pan 6-8 min. Reposer 2 min.',
      'Trancher le poulet en lanières.',
      'Assembler le bowl : riz, poulet, tzatziki, tomates cerises, olives. Arroser d\'huile d\'olive.',
    ],
    tip: 'La marinade citronnée-origan est la base de tout le mezze grec. Le tzatziki allégé (fromage blanc à la place du yaourt grec) garde le même goût frais pour 3x moins de calories.',
    tags: ['grec', 'méditerranéen', 'batch', 'bowl'],
  },

  {
    id: 'D18',
    name: 'Poisson blanc chermoula marocaine',
    category: 'dinner',
    emoji: '🐟',
    prepTime: 20,
    cookTime: 15,
    batch: false,
    macros: { kcal: 699, protein: 65, carbs: 78, fat: 15 },
    ingredients: [
      { name: 'Colin ou merlu (filet)', qty: 300, unit: 'g', kcal: 246, protein: 54, carbs: 0, fat: 3 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Coriandre fraîche', qty: 15, unit: 'g', kcal: 6, protein: 0.6, carbs: 1.2, fat: 0.1 },
      { name: 'Persil plat', qty: 10, unit: 'g', kcal: 4, protein: 0.4, carbs: 0.8, fat: 0.1 },
      { name: 'Ail', qty: 4, unit: 'gousses', kcal: 16, protein: 0.6, carbs: 3.6, fat: 0.1 },
      { name: 'Cumin + paprika fumé', qty: 5, unit: 'g', kcal: 15, protein: 0.6, carbs: 3, fat: 0.5 },
      { name: 'Citron (jus + zeste)', qty: 1, unit: 'pièce', kcal: 17, protein: 0.6, carbs: 5, fat: 0.2 },
      { name: 'Tomates cerise', qty: 150, unit: 'g', kcal: 27, protein: 1.4, carbs: 5.3, fat: 0.3 },
      { name: 'Courgette', qty: 150, unit: 'g', kcal: 26, protein: 1.8, carbs: 4.5, fat: 0.5 },
    ],
    steps: [
      'Chermoula : mixer ail + coriandre + persil + cumin + paprika + jus de citron + zeste + huile + sel.',
      'Badigeonner généreusement le poisson de chermoula. Mariner 20 min minimum.',
      'Cuire le riz.',
      'Faire revenir courgettes + tomates cerise dans un peu d\'huile 5 min.',
      'Cuire le poisson mariné à la poêle 3-4 min de chaque côté.',
      'Servir poisson sur riz avec légumes. Restes de chermoula dessus.',
    ],
    tip: 'La chermoula peut se préparer en grande quantité et se conserver 1 semaine au frigo. Parfaite aussi en marinade pour le poulet.',
    tags: ['marocain', 'poisson', 'méditerranéen'],
  },

  {
    id: 'D19',
    name: 'Pasta puttanesca au thon',
    category: 'dinner',
    emoji: '🍝',
    prepTime: 5,
    cookTime: 15,
    batch: false,
    macros: { kcal: 817, protein: 89, carbs: 67, fat: 21 },
    ingredients: [
      { name: 'Thon au naturel (2 boîtes égouttées)', qty: 280, unit: 'g', kcal: 325, protein: 72.8, carbs: 0, fat: 2.8 },
      { name: 'Pâtes', qty: 80, unit: 'g', kcal: 280, protein: 10.4, carbs: 56, fat: 1.2 },
      { name: 'Tomates cerise', qty: 150, unit: 'g', kcal: 27, protein: 1.4, carbs: 5.3, fat: 0.3 },
      { name: 'Olives noires', qty: 20, unit: 'g', kcal: 30, protein: 0.2, carbs: 1, fat: 2.8 },
      { name: 'Câpres', qty: 15, unit: 'g', kcal: 4, protein: 0.3, carbs: 0.5, fat: 0 },
      { name: 'Ail', qty: 3, unit: 'gousses', kcal: 12, protein: 0.5, carbs: 2.7, fat: 0.1 },
      { name: 'Piment rouge', qty: 1, unit: 'pièce', kcal: 6, protein: 0.3, carbs: 1.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Parmesan', qty: 10, unit: 'g', kcal: 43, protein: 3.5, carbs: 0, fat: 3.2 },
    ],
    steps: [
      'Cuire les pâtes al dente. Réserver 1 louche d\'eau de cuisson.',
      'Chauffer l\'huile, faire revenir ail émincé + piment 1 min. Ne pas brûler.',
      'Ajouter tomates cerise coupées en 2. Cuire 5 min jusqu\'à éclatement.',
      'Ajouter olives + câpres. Cuire 2 min.',
      'Incorporer le thon égoutté hors du feu. Mélanger.',
      'Ajouter les pâtes + un peu d\'eau de cuisson. Mélanger. Parmesan dessus.',
    ],
    tip: '89g de protéines pour ce plat — c\'est le roi des dîners protéinés. L\'eau de cuisson des pâtes lie la sauce naturellement grâce à l\'amidon.',
    tags: ['italien', 'rapide', 'protéiné'],
  },

  {
    id: 'D20',
    name: 'Pasta poulet-courgette-citron-parmesan',
    category: 'dinner',
    emoji: '🍋',
    prepTime: 10,
    cookTime: 20,
    batch: false,
    macros: { kcal: 761, protein: 73, carbs: 73, fat: 21 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 200, unit: 'g', kcal: 220, protein: 46, carbs: 0, fat: 4 },
      { name: 'Pâtes', qty: 80, unit: 'g', kcal: 280, protein: 10.4, carbs: 56, fat: 1.2 },
      { name: 'Courgette', qty: 200, unit: 'g', kcal: 34, protein: 2.4, carbs: 6, fat: 0.6 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Parmesan', qty: 15, unit: 'g', kcal: 65, protein: 5.3, carbs: 0, fat: 4.8 },
      { name: 'Citron (jus + zeste)', qty: 1, unit: 'pièce', kcal: 17, protein: 0.6, carbs: 5, fat: 0.2 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Basilic frais', qty: 5, unit: 'g', kcal: 2, protein: 0.2, carbs: 0.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
    ],
    steps: [
      'Cuire les pâtes al dente. Réserver 1 louche d\'eau de cuisson.',
      'Couper le poulet en fines lanières. Faire revenir avec ail dans l\'huile 5-6 min.',
      'Ajouter courgettes en rondelles fines. Cuire 4 min.',
      'Mélanger fromage blanc + jus de citron + zeste + sel + poivre dans un bol.',
      'Mélanger pâtes + poulet + courgettes + sauce. Ajouter eau de cuisson si besoin.',
      'Parmesan + basilic dessus.',
    ],
    tip: 'Le zeste de citron est aussi important que le jus — il apporte un parfum floral que le jus seul ne donne pas. Ne pas l\'oublier.',
    tags: ['italien', 'léger', 'citronné'],
  },

  // ─────────────────────────────────────────────────────────────
  // DÉJEUNERS
  // ─────────────────────────────────────────────────────────────

  {
    id: 'L01',
    name: 'Salade niçoise complète',
    category: 'lunch',
    emoji: '🥗',
    prepTime: 15,
    cookTime: 10,
    batch: false,
    macros: { kcal: 605, protein: 61, carbs: 18, fat: 31 },
    ingredients: [
      { name: 'Thon au naturel (égouttés)', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Oeufs durs', qty: 3, unit: 'pièces', kcal: 234, protein: 19.5, carbs: 1.2, fat: 16.2 },
      { name: 'Haricots verts', qty: 150, unit: 'g', kcal: 47, protein: 3, carbs: 7.5, fat: 0.6 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Olives noires', qty: 15, unit: 'g', kcal: 23, protein: 0.2, carbs: 0.8, fat: 2.1 },
      { name: 'Concombre', qty: 80, unit: 'g', kcal: 12, protein: 0.6, carbs: 2.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Vinaigre + moutarde + citron', qty: 15, unit: 'g', kcal: 19, protein: 0.3, carbs: 3, fat: 0.3 },
    ],
    steps: [
      'Cuire les oeufs durs (10 min dans eau bouillante). Refroidir sous eau froide.',
      'Cuire les haricots verts al dente (5 min). Refroidir immédiatement sous eau froide — ils restent verts et croquants.',
      'Vinaigrette : huile + vinaigre + moutarde + citron + sel + poivre. Émulsionner.',
      'Dresser sur assiette : haricots verts, thon émietté, oeufs coupés en 4, tomates, olives, concombre.',
      'Vinaigrette au dernier moment.',
    ],
    tip: 'La vraie niçoise n\'a pas de pomme de terre — et c\'est pour ça qu\'elle est si légère en glucides. Idéal les jours où le dîner est riche.',
    tags: ['français', 'salade', 'batch', 'low-carb'],
  },

  {
    id: 'L02',
    name: 'Salade thaï poulet froid',
    category: 'lunch',
    emoji: '🌶️',
    prepTime: 15,
    cookTime: 0,
    batch: true,
    macros: { kcal: 454, protein: 56, carbs: 27, fat: 14 },
    ingredients: [
      { name: 'Blanc de poulet cuit (batch)', qty: 200, unit: 'g', kcal: 220, protein: 46, carbs: 0, fat: 4 },
      { name: 'Chou blanc émincé fin', qty: 150, unit: 'g', kcal: 38, protein: 1.7, carbs: 7.5, fat: 0.3 },
      { name: 'Carotte râpée', qty: 80, unit: 'g', kcal: 33, protein: 0.8, carbs: 7.2, fat: 0.2 },
      { name: 'Cacahuètes non salées', qty: 20, unit: 'g', kcal: 114, protein: 5.2, carbs: 3.2, fat: 9.6 },
      { name: 'Sauce soja', qty: 30, unit: 'ml', kcal: 16, protein: 2, carbs: 1, fat: 0 },
      { name: 'Jus de citron vert', qty: 30, unit: 'ml', kcal: 8, protein: 0.3, carbs: 2.4, fat: 0 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
      { name: 'Piment + coriandre fraîche', qty: 10, unit: 'g', kcal: 5, protein: 0.3, carbs: 0.5, fat: 0.1 },
    ],
    steps: [
      'Utiliser le poulet rôti du batch précédent. Effilocher ou trancher en lamelles fines.',
      'Émincer le chou très finement à la mandoline ou couteau. Râper la carotte.',
      'Sauce : soja + citron vert + miel + piment haché. Bien mélanger.',
      'Mélanger chou + carotte + poulet + sauce. Masser légèrement.',
      'Finir avec cacahuètes concassées + coriandre fraîche.',
    ],
    tip: 'Cette salade se prépare en 15 min si tu as le poulet batch. Le chou reste croquant même après 1 journée au frigo — parfait pour préparer à l\'avance.',
    tags: ['thaï', 'salade', 'batch', 'rapide', 'asiatique'],
  },

  {
    id: 'L03',
    name: 'Salade épinards-oeufs-parmesan-bacon dinde',
    category: 'lunch',
    emoji: '🥬',
    prepTime: 10,
    cookTime: 10,
    batch: false,
    macros: { kcal: 672, protein: 79, carbs: 11, fat: 34 },
    ingredients: [
      { name: 'Épinards frais', qty: 150, unit: 'g', kcal: 35, protein: 4.5, carbs: 3, fat: 0.6 },
      { name: 'Oeufs durs', qty: 3, unit: 'pièces', kcal: 234, protein: 19.5, carbs: 1.2, fat: 16.2 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Bacon de dinde (tranches)', qty: 60, unit: 'g', kcal: 80, protein: 13.8, carbs: 1, fat: 2 },
      { name: 'Parmesan', qty: 10, unit: 'g', kcal: 43, protein: 3.5, carbs: 0, fat: 3.2 },
      { name: 'Tomates cerise', qty: 80, unit: 'g', kcal: 14, protein: 0.7, carbs: 2.8, fat: 0.2 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Vinaigre balsamique', qty: 15, unit: 'ml', kcal: 14, protein: 0.1, carbs: 2.7, fat: 0 },
    ],
    steps: [
      'Cuire les oeufs durs.',
      'Faire griller les tranches de bacon de dinde à sec dans la poêle chaude, 2 min. Émietter.',
      'Vinaigrette balsamique : huile + vinaigre + sel + poivre.',
      'Dresser : épinards frais + thon émietté + oeufs coupés + bacon + tomates.',
      'Parmesan en copeaux dessus. Vinaigrette au moment de servir.',
    ],
    tip: '79g de protéines pour une salade — imbattable. Cette salade est parfaite les jours légers au dîner.',
    tags: ['salade', 'low-carb', 'protéiné', 'français'],
  },

  {
    id: 'L04',
    name: 'Salade haricots verts-thon-oeufs',
    category: 'lunch',
    emoji: '🫛',
    prepTime: 10,
    cookTime: 10,
    batch: false,
    macros: { kcal: 590, protein: 62, carbs: 18, fat: 29 },
    ingredients: [
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Oeufs durs', qty: 3, unit: 'pièces', kcal: 234, protein: 19.5, carbs: 1.2, fat: 16.2 },
      { name: 'Haricots verts', qty: 200, unit: 'g', kcal: 62, protein: 4, carbs: 10, fat: 0.8 },
      { name: 'Tomates', qty: 150, unit: 'g', kcal: 27, protein: 1.4, carbs: 5.3, fat: 0.3 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Moutarde + vinaigre', qty: 10, unit: 'g', kcal: 15, protein: 0.3, carbs: 1.5, fat: 0.3 },
    ],
    steps: [
      'Cuire haricots verts 5 min à l\'eau bouillante. Passer sous eau froide immédiatement.',
      'Cuire oeufs durs en même temps.',
      'Vinaigrette moutarde : huile + moutarde + vinaigre + sel.',
      'Couper oeufs en 4. Émietter le thon.',
      'Dresser tout + vinaigrette.',
    ],
    tip: 'Salade idéale à préparer le matin avant de partir (sans vinaigrette). Ajouter la vinaigrette au moment de manger.',
    tags: ['salade', 'français', 'low-carb'],
  },

  {
    id: 'L05',
    name: 'Salade césar allégée poulet',
    category: 'lunch',
    emoji: '🥗',
    prepTime: 15,
    cookTime: 0,
    batch: true,
    macros: { kcal: 472, protein: 69, carbs: 22, fat: 13 },
    ingredients: [
      { name: 'Blanc de poulet cuit (batch)', qty: 200, unit: 'g', kcal: 220, protein: 46, carbs: 0, fat: 4 },
      { name: 'Laitue romaine', qty: 150, unit: 'g', kcal: 23, protein: 2.3, carbs: 3, fat: 0.5 },
      { name: 'Fromage blanc 0% (sauce)', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Parmesan', qty: 15, unit: 'g', kcal: 65, protein: 5.3, carbs: 0, fat: 4.8 },
      { name: 'Moutarde de Dijon', qty: 5, unit: 'g', kcal: 5, protein: 0.3, carbs: 0.3, fat: 0.3 },
      { name: 'Citron (jus)', qty: 15, unit: 'ml', kcal: 4, protein: 0.2, carbs: 1.2, fat: 0 },
      { name: 'Sauce Worcester', qty: 5, unit: 'ml', kcal: 5, protein: 0.2, carbs: 1.2, fat: 0 },
      { name: 'Anchois en boîte', qty: 20, unit: 'g', kcal: 37, protein: 4.4, carbs: 0, fat: 2.1 },
      { name: 'Croûtons (pain complet grillé)', qty: 30, unit: 'g', kcal: 69, protein: 2.6, carbs: 12, fat: 0.9 },
    ],
    steps: [
      'Sauce césar allégée : fromage blanc + moutarde + citron + sauce Worcester + anchois mixés + sel + poivre.',
      'Couper la romaine en morceaux. Couper le pain en dés et toaster à sec dans la poêle.',
      'Trancher le poulet batch en lamières.',
      'Mélanger romaine + poulet + sauce.',
      'Finir avec croûtons + parmesan en copeaux. Servir immédiatement.',
    ],
    tip: 'Les anchois dans la sauce ne se sentent pas distinctement — ils apportent juste cette profondeur umami caractéristique. Ne pas les sauter.',
    tags: ['salade', 'américain', 'batch'],
  },

  {
    id: 'L06',
    name: 'Salade pâtes-thon méditerranéenne',
    category: 'lunch',
    emoji: '🍝',
    prepTime: 15,
    cookTime: 10,
    batch: true,
    macros: { kcal: 716, protein: 60, carbs: 58, fat: 26 },
    ingredients: [
      { name: 'Pâtes cuites froides', qty: 70, unit: 'g sec', kcal: 245, protein: 9.1, carbs: 49, fat: 1.1 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Oeufs durs', qty: 2, unit: 'pièces', kcal: 156, protein: 13, carbs: 0.8, fat: 10.8 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Olives noires', qty: 15, unit: 'g', kcal: 23, protein: 0.2, carbs: 0.8, fat: 2.1 },
      { name: 'Concombre', qty: 80, unit: 'g', kcal: 12, protein: 0.6, carbs: 2.4, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Herbes fraîches + citron', qty: 10, unit: 'g', kcal: 10, protein: 0.3, carbs: 2, fat: 0.1 },
    ],
    steps: [
      'Cuire les pâtes al dente. Passer sous eau froide pour refroidir. Égoutter.',
      'Cuire les oeufs durs simultanément.',
      'Vinaigrette : huile + citron + herbes + sel + poivre.',
      'Mélanger pâtes froides + thon émietté + olives + tomates + concombre + oeufs.',
      'Vinaigrette. Peut se préparer la veille.',
    ],
    tip: 'Cette salade est idéale pour les batch du dimanche. Elle se conserve 3 jours au frigo (sans vinaigrette). Ajouter la vinaigrette juste avant de manger.',
    tags: ['salade', 'méditerranéen', 'batch', 'pâtes'],
  },

  {
    id: 'L07',
    name: 'Poke bowl saumon-avocat-riz',
    category: 'lunch',
    emoji: '🍱',
    prepTime: 15,
    cookTime: 12,
    batch: false,
    macros: { kcal: 725, protein: 49, carbs: 73, fat: 27 },
    ingredients: [
      { name: 'Saumon en boîte', qty: 150, unit: 'g', kcal: 230, protein: 30, carbs: 0, fat: 12 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Avocat', qty: 80, unit: 'g', kcal: 128, protein: 1.6, carbs: 7.2, fat: 12 },
      { name: 'Concombre', qty: 100, unit: 'g', kcal: 15, protein: 0.7, carbs: 3, fat: 0.1 },
      { name: 'Sauce soja', qty: 30, unit: 'ml', kcal: 16, protein: 2, carbs: 1, fat: 0 },
      { name: 'Sésame', qty: 5, unit: 'g', kcal: 30, protein: 1, carbs: 1, fat: 2.5 },
      { name: 'Fromage blanc 0% (sauce spicy)', qty: 50, unit: 'g', kcal: 23, protein: 4, carbs: 2, fat: 0 },
      { name: 'Sriracha', qty: 5, unit: 'g', kcal: 7, protein: 0.2, carbs: 1.5, fat: 0.1 },
      { name: 'Citron vert + coriandre', qty: 10, unit: 'g', kcal: 5, protein: 0.2, carbs: 1.2, fat: 0.1 },
    ],
    steps: [
      'Cuire le riz. Laisser tiédir.',
      'Sauce spicy : fromage blanc 0% + sriracha + soja + citron vert.',
      'Couper l\'avocat en lamelles, le concombre en rondelles.',
      'Assembler le bowl : riz au fond, saumon au centre, avocat et concombre en secteurs.',
      'Sauce dessus. Sésame + coriandre en finition.',
    ],
    tip: 'Le saumon en boîte est la version accessible du poke. Aussi bon que le saumon frais pour ce bowl — et 5x moins cher.',
    tags: ['asiatique', 'bowl', 'hawaïen'],
  },

  {
    id: 'L08',
    name: 'Bowl pois chiches orientaux',
    category: 'lunch',
    emoji: '🧆',
    prepTime: 10,
    cookTime: 0,
    batch: false,
    macros: { kcal: 731, protein: 66, carbs: 54, fat: 27 },
    ingredients: [
      { name: 'Pois chiches en boîte (égouttés)', qty: 200, unit: 'g', kcal: 240, protein: 14, carbs: 36, fat: 4 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Oeufs durs', qty: 2, unit: 'pièces', kcal: 156, protein: 13, carbs: 0.8, fat: 10.8 },
      { name: 'Poivron rouge', qty: 100, unit: 'g', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
      { name: 'Oignon rouge', qty: 60, unit: 'g', kcal: 24, protein: 0.6, carbs: 5.4, fat: 0 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Cumin + citron + persil', qty: 10, unit: 'g', kcal: 10, protein: 0.4, carbs: 2, fat: 0.1 },
    ],
    steps: [
      'Cuire les oeufs durs si pas déjà fait.',
      'Égoutter et rincer les pois chiches.',
      'Vinaigrette orientale : huile + jus de citron + cumin + sel + piment.',
      'Couper poivron + oignon rouge + tomates en petits dés.',
      'Assembler : pois chiches + thon + légumes + oeufs. Vinaigrette + persil.',
    ],
    tip: 'Bowl 100% assemblage — 0 cuisson (si oeufs déjà faits). Parfait pour les midis express. Se prépare en 10 min chrono.',
    tags: ['moyen-orient', 'bowl', 'rapide', 'légumineuses'],
  },

  {
    id: 'L09',
    name: 'Bowl quinoa-poulet-légumes grillés',
    category: 'lunch',
    emoji: '🌾',
    prepTime: 15,
    cookTime: 20,
    batch: true,
    macros: { kcal: 657, protein: 62, carbs: 61, fat: 19 },
    ingredients: [
      { name: 'Quinoa sec', qty: 70, unit: 'g', kcal: 258, protein: 9.8, carbs: 44.8, fat: 4.2 },
      { name: 'Blanc de poulet cuit (batch)', qty: 180, unit: 'g', kcal: 198, protein: 41.4, carbs: 0, fat: 3.6 },
      { name: 'Poivron grillé', qty: 100, unit: 'g', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
      { name: 'Courgette grillée', qty: 150, unit: 'g', kcal: 26, protein: 1.8, carbs: 4.5, fat: 0.5 },
      { name: 'Fromage blanc 0% (sauce)', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Herbes fraîches + citron', qty: 10, unit: 'g', kcal: 9, protein: 0.3, carbs: 1.8, fat: 0.1 },
    ],
    steps: [
      'Rincer le quinoa. Cuire dans 2x son volume d\'eau salée, 15 min. Repos 5 min.',
      'Griller courgettes + poivrons à la poêle avec huile + sel.',
      'Sauce : fromage blanc + huile + citron + herbes + sel.',
      'Assembler : quinoa + poulet froid émincé + légumes grillés + sauce.',
    ],
    tip: 'Le quinoa cuit en batch dure 5 jours au frigo. Cuire 300g d\'un coup le dimanche pour la semaine.',
    tags: ['bowl', 'batch', 'sain'],
  },

  {
    id: 'L10',
    name: 'Bowl chou-fleur rôti-poulet-tahini',
    category: 'lunch',
    emoji: '🥦',
    prepTime: 10,
    cookTime: 25,
    batch: true,
    macros: { kcal: 596, protein: 67, carbs: 39, fat: 20 },
    ingredients: [
      { name: 'Chou-fleur', qty: 250, unit: 'g', kcal: 65, protein: 5, carbs: 11.5, fat: 0.5 },
      { name: 'Blanc de poulet cuit (batch)', qty: 200, unit: 'g', kcal: 220, protein: 46, carbs: 0, fat: 4 },
      { name: 'Pois chiches en boîte', qty: 100, unit: 'g', kcal: 120, protein: 7, carbs: 18, fat: 2 },
      { name: 'Tahini', qty: 15, unit: 'g', kcal: 90, protein: 2.5, carbs: 2.5, fat: 8 },
      { name: 'Fromage blanc 0%', qty: 80, unit: 'g', kcal: 36, protein: 6.4, carbs: 3.2, fat: 0 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Cumin + citron + ail + persil', qty: 15, unit: 'g', kcal: 20, protein: 0.6, carbs: 4, fat: 0.2 },
    ],
    steps: [
      'Couper le chou-fleur en petits bouquets. Mélanger avec huile + cumin + sel.',
      'Rôtir au four 200°C pendant 25 min jusqu\'à bords dorés et légèrement brûlés.',
      'Sauce tahini allégée : tahini + fromage blanc + citron + ail râpé + eau tiède pour fluidifier.',
      'Assembler : chou-fleur rôti + pois chiches + poulet froid + sauce tahini + persil.',
    ],
    tip: 'Le chou-fleur rôti jusqu\'au bord brûlé devient doux et presque sucré. C\'est lui qui fait le bowl. Ne pas le sortir trop tôt du four.',
    tags: ['bowl', 'moyen-orient', 'batch'],
  },

  {
    id: 'L11',
    name: 'Wrap poulet-avocat-crudités',
    category: 'lunch',
    emoji: '🫔',
    prepTime: 10,
    cookTime: 0,
    batch: true,
    macros: { kcal: 649, protein: 58, carbs: 65, fat: 19 },
    ingredients: [
      { name: 'Blanc de poulet cuit (batch)', qty: 180, unit: 'g', kcal: 198, protein: 41.4, carbs: 0, fat: 3.6 },
      { name: 'Tortillas blé complètes (2)', qty: 100, unit: 'g', kcal: 290, protein: 8, carbs: 52, fat: 6 },
      { name: 'Avocat', qty: 60, unit: 'g', kcal: 96, protein: 1.2, carbs: 5.4, fat: 9 },
      { name: 'Fromage blanc 0%', qty: 80, unit: 'g', kcal: 36, protein: 6.4, carbs: 3.2, fat: 0 },
      { name: 'Tomates', qty: 80, unit: 'g', kcal: 14, protein: 0.7, carbs: 2.8, fat: 0.2 },
      { name: 'Salade verte', qty: 30, unit: 'g', kcal: 5, protein: 0.5, carbs: 0.6, fat: 0.1 },
      { name: 'Moutarde + citron', qty: 10, unit: 'g', kcal: 10, protein: 0.3, carbs: 1, fat: 0.3 },
    ],
    steps: [
      'Tartiner les tortillas de fromage blanc + moutarde.',
      'Ajouter salade verte + tomates en rondelles + avocat en lamelles.',
      'Déposer le poulet émincé.',
      'Rouler serré, couper en deux en diagonal.',
    ],
    tip: 'Wrap à préparer le matin, l\'avocat ne s\'oxyde pas en 4-5h si recouvert par les autres ingrédients. Emballer dans papier alu.',
    tags: ['wrap', 'batch', 'rapide'],
  },

  {
    id: 'L12',
    name: 'Wrap boeuf haché-légumes-fromage blanc',
    category: 'lunch',
    emoji: '🌯',
    prepTime: 10,
    cookTime: 10,
    batch: false,
    macros: { kcal: 617, protein: 50, carbs: 66, fat: 18 },
    ingredients: [
      { name: 'Steak haché 5%', qty: 150, unit: 'g', kcal: 233, protein: 31.5, carbs: 0, fat: 11.3 },
      { name: 'Tortillas blé complètes (2)', qty: 100, unit: 'g', kcal: 290, protein: 8, carbs: 52, fat: 6 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Tomates', qty: 80, unit: 'g', kcal: 14, protein: 0.7, carbs: 2.8, fat: 0.2 },
      { name: 'Salade + concombre', qty: 80, unit: 'g', kcal: 10, protein: 0.7, carbs: 2, fat: 0.1 },
      { name: 'Oignon rouge', qty: 50, unit: 'g', kcal: 20, protein: 0.5, carbs: 4.5, fat: 0 },
      { name: 'Moutarde + paprika', qty: 10, unit: 'g', kcal: 14, protein: 0.6, carbs: 1.2, fat: 0.4 },
    ],
    steps: [
      'Cuire le steak haché à la poêle avec paprika + sel + poivre. Émietter.',
      'Tartiner les tortillas de fromage blanc + moutarde.',
      'Ajouter légumes, viande chaude, oignon rouge.',
      'Rouler serré, couper.',
    ],
    tip: 'La viande chaude dans le wrap tiédit légèrement les tortillas — c\'est meilleur que froid. Manger chaud si possible.',
    tags: ['wrap', 'rapide'],
  },

  {
    id: 'L13',
    name: 'Omelette provençale thon-poivrons',
    category: 'lunch',
    emoji: '🍳',
    prepTime: 10,
    cookTime: 10,
    batch: false,
    macros: { kcal: 681, protein: 72, carbs: 29, fat: 30 },
    ingredients: [
      { name: 'Oeufs', qty: 4, unit: 'pièces', kcal: 312, protein: 26, carbs: 1.6, fat: 21.6 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Poivron rouge', qty: 100, unit: 'g', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Fromage blanc 0%', qty: 50, unit: 'g', kcal: 23, protein: 4, carbs: 2, fat: 0 },
      { name: 'Herbes de Provence + ail', qty: 5, unit: 'g', kcal: 10, protein: 0.3, carbs: 2, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Pain complet (1 tranche)', qty: 35, unit: 'g', kcal: 80, protein: 3.2, carbs: 14, fat: 1.1 },
    ],
    steps: [
      'Faire revenir poivron émincé + tomates cerise dans l\'huile avec ail, 4-5 min.',
      'Battre les oeufs avec fromage blanc + herbes de Provence + sel + poivre.',
      'Ajouter thon émietté aux légumes. Mélanger.',
      'Verser le mélange oeufs sur les légumes. Feu moyen, 4-5 min.',
      'Finir 2 min sous le grill du four si l\'omelette est épaisse.',
    ],
    tip: 'Le fromage blanc dans les oeufs les rend plus aérés et moins denses. Le poivron fondant avec le thon = combo imbattable.',
    tags: ['français', 'oeufs', 'rapide'],
  },

  {
    id: 'L14',
    name: 'Velouté lentilles corail express',
    category: 'lunch',
    emoji: '🍵',
    prepTime: 5,
    cookTime: 20,
    batch: true,
    macros: { kcal: 743, protein: 64, carbs: 82, fat: 17 },
    ingredients: [
      { name: 'Lentilles corail sèches', qty: 100, unit: 'g', kcal: 350, protein: 24, carbs: 57, fat: 2 },
      { name: 'Thon au naturel (dessus)', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Carotte', qty: 100, unit: 'g', kcal: 41, protein: 1, carbs: 9, fat: 0.2 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Lait de coco light', qty: 100, unit: 'ml', kcal: 85, protein: 1, carbs: 3, fat: 8 },
      { name: 'Ail + curry + cumin + citron', qty: 10, unit: 'g', kcal: 20, protein: 0.6, carbs: 4, fat: 0.3 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
    ],
    steps: [
      'Faire revenir oignon + carotte + ail dans l\'huile 3 min.',
      'Ajouter lentilles + curry + cumin + lait de coco + 500ml eau. Porter à ébullition.',
      'Cuire 15-18 min à feu moyen jusqu\'à lentilles fondantes.',
      'Mixer. Ajuster sel + citron + consistance.',
      'Servir avec thon émietté dessus + coriandre.',
    ],
    tip: 'Se fait en 20 min, se congèle parfaitement. Batch : faire 4 portions et congeler. Le thon dessus apporte la protéine manquante au velouté.',
    tags: ['soupe', 'batch', 'indien'],
  },

  {
    id: 'L15',
    name: 'Soupe pois chiches-épinards épicée',
    category: 'lunch',
    emoji: '🥣',
    prepTime: 5,
    cookTime: 20,
    batch: true,
    macros: { kcal: 640, protein: 58, carbs: 62, fat: 17 },
    ingredients: [
      { name: 'Pois chiches en boîte (égouttés)', qty: 200, unit: 'g', kcal: 240, protein: 14, carbs: 36, fat: 4 },
      { name: 'Épinards', qty: 100, unit: 'g', kcal: 23, protein: 3, carbs: 2, fat: 0.4 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Ail + cumin + paprika + piment', qty: 10, unit: 'g', kcal: 20, protein: 0.5, carbs: 3, fat: 0.3 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
    ],
    steps: [
      'Faire revenir oignon + ail + épices dans l\'huile, 3 min.',
      'Ajouter tomates + 400ml eau + pois chiches. Cuire 10 min.',
      'Ajouter épinards. Cuire 3 min supplémentaires.',
      'Hors du feu, ajouter le thon émietté.',
      'Jus de citron. Ajuster piment selon goût.',
    ],
    tip: 'Soupe très faible en matières grasses — parfaite après un week-end chargé. Le thon ajouté hors feu garde sa texture.',
    tags: ['soupe', 'batch', 'légumineuses'],
  },

  {
    id: 'L16',
    name: 'Assiette froide poulet-légumes-moutarde',
    category: 'lunch',
    emoji: '🍽️',
    prepTime: 5,
    cookTime: 0,
    batch: true,
    macros: { kcal: 566, protein: 84, carbs: 19, fat: 17 },
    ingredients: [
      { name: 'Blanc de poulet cuit (batch)', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Haricots verts cuits', qty: 200, unit: 'g', kcal: 62, protein: 4, carbs: 10, fat: 0.8 },
      { name: 'Oeufs durs', qty: 2, unit: 'pièces', kcal: 156, protein: 13, carbs: 0.8, fat: 10.8 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Moutarde de Dijon', qty: 10, unit: 'g', kcal: 10, protein: 0.6, carbs: 0.6, fat: 0.6 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
    ],
    steps: [
      'Tout vient du batch : poulet rôti froid, haricots verts cuits, oeufs durs.',
      'Sauce moutarde : fromage blanc + moutarde + sel + poivre + eau pour fluidifier.',
      'Trancher le poulet. Couper les oeufs en 2.',
      'Dresser l\'assiette. Sauce dessus.',
    ],
    tip: 'Le déjeuner le plus protéiné de la liste (84g) pour 0 cuisson si le batch est fait. 5 min de préparation, 0 contrainte.',
    tags: ['batch', 'low-carb', 'rapide', '0-cuisson'],
  },

  {
    id: 'L17',
    name: 'Assiette thon-crackers-fromage blanc',
    category: 'lunch',
    emoji: '🫙',
    prepTime: 5,
    cookTime: 0,
    batch: false,
    macros: { kcal: 588, protein: 94, carbs: 39, fat: 5 },
    ingredients: [
      { name: 'Thon au naturel (2 boîtes)', qty: 280, unit: 'g', kcal: 325, protein: 72.8, carbs: 0, fat: 2.8 },
      { name: 'Fromage blanc 0%', qty: 200, unit: 'g', kcal: 90, protein: 16, carbs: 8, fat: 0 },
      { name: 'Crackers de seigle (4 pièces)', qty: 40, unit: 'g', kcal: 140, protein: 4, carbs: 24, fat: 2 },
      { name: 'Concombre', qty: 100, unit: 'g', kcal: 15, protein: 0.7, carbs: 3, fat: 0.1 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
    ],
    steps: [
      'Égoutter les boîtes de thon.',
      'Mélanger thon + fromage blanc + herbes + citron + poivre.',
      'Disposer crackers + mélange thon/FB + crudités.',
    ],
    tip: '94g de protéines en 5 min. L\'assiette la plus rapide de toute la liste. Pour les jours sans énergie — pas d\'excuse.',
    tags: ['rapide', 'low-carb', '0-cuisson', 'protéiné'],
  },

  {
    id: 'L18',
    name: 'Tartines complètes thon-avocat',
    category: 'lunch',
    emoji: '🥑',
    prepTime: 10,
    cookTime: 0,
    batch: false,
    macros: { kcal: 519, protein: 53, carbs: 44, fat: 16 },
    ingredients: [
      { name: 'Pain complet (2 tranches)', qty: 70, unit: 'g', kcal: 161, protein: 6.3, carbs: 28, fat: 2.1 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Avocat', qty: 80, unit: 'g', kcal: 128, protein: 1.6, carbs: 7.2, fat: 12 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Tomates', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Citron + herbes', qty: 10, unit: 'g', kcal: 5, protein: 0.2, carbs: 1.2, fat: 0.1 },
    ],
    steps: [
      'Toaster le pain.',
      'Écraser l\'avocat avec citron + sel + poivre.',
      'Mélanger thon + fromage blanc + herbes.',
      'Tartiner : d\'abord avocat écrasé, puis mélange thon.',
      'Rondelles de tomates dessus. Poivre.',
    ],
    tip: 'L\'avocat écrasé sous le thon empêche le pain de ramollir. Ajouter quelques graines de sésame ou piment pour le goût.',
    tags: ['tartines', 'rapide', '0-cuisson'],
  },

  {
    id: 'L19',
    name: 'Oeufs en cocotte tomates-feta',
    category: 'lunch',
    emoji: '🥚',
    prepTime: 10,
    cookTime: 15,
    batch: false,
    macros: { kcal: 801, protein: 75, carbs: 35, fat: 38 },
    ingredients: [
      { name: 'Oeufs', qty: 4, unit: 'pièces', kcal: 312, protein: 26, carbs: 1.6, fat: 21.6 },
      { name: 'Feta', qty: 40, unit: 'g', kcal: 100, protein: 6, carbs: 0.7, fat: 8 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Oignon', qty: 80, unit: 'g', kcal: 32, protein: 0.8, carbs: 7.2, fat: 0 },
      { name: 'Pain complet (1 tranche)', qty: 35, unit: 'g', kcal: 80, protein: 3.2, carbs: 14, fat: 1.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
    ],
    steps: [
      'Préchauffer le four à 180°C.',
      'Faire revenir oignon + tomates + ail dans l\'huile 5 min. Ajouter thon émietté.',
      'Répartir dans ramequins allant au four.',
      'Casser 1-2 oeufs par ramequin. Émietter la feta dessus.',
      'Enfourner 10-12 min (blanc pris, jaune encore coulant).',
    ],
    tip: 'La feta apporte le sel — ne pas saler avant de goûter. Servir avec pain grillé pour saucer le jaune coulant.',
    tags: ['four', 'méditerranéen', 'oeufs'],
  },

  {
    id: 'L20',
    name: 'Oeufs durs-haricots blancs-sauce moutarde',
    category: 'lunch',
    emoji: '🥣',
    prepTime: 5,
    cookTime: 10,
    batch: false,
    macros: { kcal: 747, protein: 86, carbs: 40, fat: 25 },
    ingredients: [
      { name: 'Oeufs durs', qty: 4, unit: 'pièces', kcal: 312, protein: 26, carbs: 1.6, fat: 21.6 },
      { name: 'Haricots blancs en boîte (égouttés)', qty: 200, unit: 'g', kcal: 200, protein: 14, carbs: 30, fat: 0.8 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Moutarde de Dijon', qty: 10, unit: 'g', kcal: 10, protein: 0.6, carbs: 0.6, fat: 0.6 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
    ],
    steps: [
      'Cuire les oeufs durs (10 min). Égoutter les haricots blancs.',
      'Sauce moutarde : fromage blanc + moutarde + sel + poivre + citron.',
      'Émietter le thon.',
      'Assembler sur assiette : haricots + thon + oeufs coupés + tomates.',
      'Sauce moutarde dessus. Herbes fraîches.',
    ],
    tip: '86g de protéines pour un déjeuner sans aucune cuisson complexe. Les haricots blancs apportent des fibres qui tiennent longtemps.',
    tags: ['rapide', 'protéiné', 'légumineuses'],
  },

  // ─────────────────────────────────────────────────────────────
  // ACCOMPAGNEMENTS
  // ─────────────────────────────────────────────────────────────

  {
    id: 'S01',
    name: 'Haricots verts ail-citron',
    category: 'side',
    emoji: '🫛',
    prepTime: 5,
    cookTime: 7,
    batch: false,
    macros: { kcal: 123, protein: 5, carbs: 14, fat: 6 },
    ingredients: [
      { name: 'Haricots verts', qty: 200, unit: 'g', kcal: 62, protein: 4, carbs: 10, fat: 0.8 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Citron (jus)', qty: 15, unit: 'ml', kcal: 4, protein: 0.2, carbs: 1.2, fat: 0 },
      { name: 'Sel + poivre', qty: 0, unit: '', kcal: 0, protein: 0, carbs: 0, fat: 0 },
    ],
    steps: [
      'Cuire haricots verts à l\'eau bouillante salée 5-6 min (encore croquants).',
      'Égoutter, passer sous eau froide pour stopper la cuisson et garder la couleur.',
      'Faire revenir ail émincé dans l\'huile 1 min.',
      'Ajouter haricots chauds ou froids, mélanger.',
      'Jus de citron + sel + poivre.',
    ],
    tip: 'L\'eau froide immédiatement après cuisson = haricots verts vifs et croquants. Pas de haricots ternes et mous.',
    tags: ['légumes', 'low-carb', 'rapide'],
  },

  {
    id: 'S02',
    name: 'Brocolis vapeur sauce soja-sésame',
    category: 'side',
    emoji: '🥦',
    prepTime: 5,
    cookTime: 7,
    batch: false,
    macros: { kcal: 108, protein: 8, carbs: 12, fat: 3 },
    ingredients: [
      { name: 'Brocoli', qty: 200, unit: 'g', kcal: 70, protein: 6, carbs: 10, fat: 0.8 },
      { name: 'Sauce soja', qty: 15, unit: 'ml', kcal: 8, protein: 1, carbs: 0.5, fat: 0 },
      { name: 'Sésame grillé', qty: 5, unit: 'g', kcal: 30, protein: 1, carbs: 1, fat: 2.5 },
    ],
    steps: [
      'Cuire le brocoli à la vapeur 6-7 min (encore légèrement croquant).',
      'Verser sauce soja + sésame grillé dessus.',
    ],
    tip: 'Accompagnement parfait pour tous les plats asiatiques. Le sésame grillé change tout — ne pas utiliser le sésame cru.',
    tags: ['légumes', 'asiatique', 'vapeur'],
  },

  {
    id: 'S03',
    name: 'Carottes glacées miel-thym',
    category: 'side',
    emoji: '🥕',
    prepTime: 5,
    cookTime: 10,
    batch: false,
    macros: { kcal: 156, protein: 2, carbs: 26, fat: 5 },
    ingredients: [
      { name: 'Carottes', qty: 200, unit: 'g', kcal: 82, protein: 2, carbs: 18, fat: 0.4 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Thym frais', qty: 3, unit: 'g', kcal: 3, protein: 0.2, carbs: 0.7, fat: 0.1 },
      { name: 'Citron (jus)', qty: 15, unit: 'ml', kcal: 4, protein: 0.2, carbs: 1.2, fat: 0 },
    ],
    steps: [
      'Éplucher les carottes, couper en rondelles biseautées.',
      'Mettre dans poêle avec 100ml eau + huile + miel + thym. Couvrir.',
      'Cuire 5-6 min à feu moyen.',
      'Découvrir, laisser glacer 3-4 min jusqu\'à légère caramélisation.',
      'Jus de citron en finition.',
    ],
    tip: 'Les carottes glacées vont avec tout — poulet rôti, poisson, kefta. La touche de citron équilibre le sucré du miel.',
    tags: ['légumes', 'sucré-salé'],
  },

  {
    id: 'S04',
    name: 'Épinards sautés à l\'ail',
    category: 'side',
    emoji: '🥬',
    prepTime: 3,
    cookTime: 5,
    batch: false,
    macros: { kcal: 99, protein: 6, carbs: 6, fat: 6 },
    ingredients: [
      { name: 'Épinards frais ou surgelés', qty: 200, unit: 'g', kcal: 46, protein: 6, carbs: 4, fat: 0.8 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
    ],
    steps: [
      'Chauffer l\'huile + ail émincé 1 min à feu moyen.',
      'Ajouter les épinards. Ils vont réduire énormément — c\'est normal.',
      'Cuire 2-3 min en remuant. Sel + poivre + citron.',
    ],
    tip: '200g d\'épinards frais se réduisent à environ 60g cuits. C\'est la densité nutritionnelle maximale pour un volume minimal.',
    tags: ['légumes', 'low-carb', 'rapide'],
  },

  {
    id: 'S05',
    name: 'Courgettes grillées herbes de Provence',
    category: 'side',
    emoji: '🥒',
    prepTime: 5,
    cookTime: 10,
    batch: false,
    macros: { kcal: 98, protein: 3, carbs: 10, fat: 6 },
    ingredients: [
      { name: 'Courgettes', qty: 250, unit: 'g', kcal: 43, protein: 3, carbs: 7.5, fat: 0.8 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Herbes de Provence', qty: 3, unit: 'g', kcal: 8, protein: 0.3, carbs: 1.7, fat: 0.3 },
      { name: 'Ail en poudre', qty: 2, unit: 'g', kcal: 7, protein: 0.3, carbs: 1.5, fat: 0.1 },
    ],
    steps: [
      'Couper courgettes en rondelles épaisses (1cm) ou en bâtonnets.',
      'Badigeonner d\'huile + herbes + ail + sel + poivre.',
      'Griller sur grill pan ou four 220°C, 4-5 min de chaque côté.',
    ],
    tip: 'Ne pas bouger les courgettes pendant la cuisson pour obtenir les marques de grill. C\'est ce qui donne le goût grillé.',
    tags: ['légumes', 'grill', 'méditerranéen'],
  },

  {
    id: 'S06',
    name: 'Quinoa aux herbes fraîches',
    category: 'side',
    emoji: '🌾',
    prepTime: 5,
    cookTime: 15,
    batch: true,
    macros: { kcal: 290, protein: 10, carbs: 43, fat: 9 },
    ingredients: [
      { name: 'Quinoa sec', qty: 60, unit: 'g', kcal: 221, protein: 8.4, carbs: 38.4, fat: 3.6 },
      { name: 'Tomates cerise', qty: 80, unit: 'g', kcal: 14, protein: 0.7, carbs: 2.8, fat: 0.2 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Persil + menthe fraîches', qty: 10, unit: 'g', kcal: 4, protein: 0.4, carbs: 0.8, fat: 0.1 },
      { name: 'Citron (jus)', qty: 15, unit: 'ml', kcal: 4, protein: 0.2, carbs: 1.2, fat: 0 },
    ],
    steps: [
      'Rincer le quinoa sous eau froide (élimine l\'amertume).',
      'Cuire dans 2x son volume d\'eau salée, 15 min. Laisser reposer 5 min à couvert.',
      'Égrainer à la fourchette.',
      'Mélanger avec herbes + tomates + huile + citron + sel.',
    ],
    tip: 'Batch : cuire 200g de quinoa d\'un coup. Dure 5 jours au frigo. Base parfaite pour les bowls et salades de la semaine.',
    tags: ['céréales', 'batch'],
  },

  {
    id: 'S07',
    name: 'Tzatziki allégé fromage blanc',
    category: 'side',
    emoji: '🫙',
    prepTime: 10,
    cookTime: 0,
    batch: true,
    macros: { kcal: 112, protein: 17, carbs: 12, fat: 0 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 200, unit: 'g', kcal: 90, protein: 16, carbs: 8, fat: 0 },
      { name: 'Concombre', qty: 100, unit: 'g', kcal: 15, protein: 0.7, carbs: 3, fat: 0.1 },
      { name: 'Ail', qty: 1, unit: 'gousse', kcal: 4, protein: 0.2, carbs: 0.9, fat: 0.05 },
      { name: 'Menthe fraîche', qty: 5, unit: 'g', kcal: 2, protein: 0.2, carbs: 0.5, fat: 0.05 },
      { name: 'Citron + sel', qty: 10, unit: 'ml', kcal: 3, protein: 0.1, carbs: 0.9, fat: 0 },
    ],
    steps: [
      'Râper le concombre. Le mettre dans un torchon et presser fort pour enlever toute l\'eau.',
      'Mélanger fromage blanc + concombre pressé + ail râpé finement + menthe ciselée.',
      'Jus de citron + sel. Réfrigérer au moins 30 min.',
    ],
    tip: 'Presser le concombre est l\'étape critique. Sans ça, le tzatziki est liquide. Un torchon propre ou plusieurs couches de papier absorbant.',
    tags: ['grec', 'sauce', 'batch', 'high-protein'],
  },

  {
    id: 'S08',
    name: 'Champignons sautés ail-persil',
    category: 'side',
    emoji: '🍄',
    prepTime: 5,
    cookTime: 8,
    batch: false,
    macros: { kcal: 100, protein: 7, carbs: 8, fat: 6 },
    ingredients: [
      { name: 'Champignons de Paris', qty: 200, unit: 'g', kcal: 44, protein: 6, carbs: 6, fat: 0.6 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Persil frais', qty: 10, unit: 'g', kcal: 4, protein: 0.4, carbs: 0.8, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
    ],
    steps: [
      'Trancher les champignons. Poêle très chaude, sans matière grasse d\'abord.',
      'Cuire champignons à feu vif 5 min sans remuer — ils dorent au lieu de bouillir.',
      'Ajouter huile + ail émincé en fin de cuisson. Cuire 1 min.',
      'Hors du feu : persil haché + sel + poivre.',
    ],
    tip: 'La règle des champignons : poêle très chaude, sans matière grasse au départ. L\'eau s\'évapore avant qu\'ils bouillent. Résultat = champignons dorés et savoureux.',
    tags: ['légumes', 'rapide'],
  },

  {
    id: 'S09',
    name: 'Taboulé chou-fleur menthe-citron',
    category: 'side',
    emoji: '🌿',
    prepTime: 15,
    cookTime: 0,
    batch: true,
    macros: { kcal: 159, protein: 7, carbs: 22, fat: 6 },
    ingredients: [
      { name: 'Chou-fleur', qty: 250, unit: 'g', kcal: 65, protein: 5, carbs: 11.5, fat: 0.5 },
      { name: 'Tomates', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Oignon rouge', qty: 40, unit: 'g', kcal: 16, protein: 0.4, carbs: 3.6, fat: 0 },
      { name: 'Menthe + persil frais', qty: 15, unit: 'g', kcal: 6, protein: 0.5, carbs: 1.2, fat: 0.1 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Citron (jus)', qty: 30, unit: 'ml', kcal: 8, protein: 0.3, carbs: 2.4, fat: 0 },
    ],
    steps: [
      'Râper le chou-fleur cru à la râpe grosse ou passer brièvement au mixer (texture semoule).',
      'Couper tomates + oignon rouge en tout petits dés.',
      'Ciseler menthe + persil finement.',
      'Mélanger tout + huile + citron + sel + poivre.',
      'Réfrigérer 30 min minimum avant de servir.',
    ],
    tip: 'Ce taboulé sans semoule a 4x moins de glucides que le taboulé classique. Le chou-fleur cru a exactement la texture de la semoule une fois assaisonné.',
    tags: ['légumes', 'low-carb', 'batch', 'libanais'],
  },

  {
    id: 'S10',
    name: 'Poivrons rôtis huile d\'olive-balsamique',
    category: 'side',
    emoji: '🫑',
    prepTime: 5,
    cookTime: 30,
    batch: true,
    macros: { kcal: 207, protein: 3, carbs: 23, fat: 11 },
    ingredients: [
      { name: 'Poivrons (3 couleurs)', qty: 300, unit: 'g', kcal: 93, protein: 3, carbs: 18, fat: 0.9 },
      { name: 'Huile d\'olive', qty: 10, unit: 'g', kcal: 90, protein: 0, carbs: 0, fat: 10 },
      { name: 'Vinaigre balsamique', qty: 15, unit: 'ml', kcal: 14, protein: 0.1, carbs: 2.7, fat: 0 },
      { name: 'Ail', qty: 2, unit: 'gousses', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
      { name: 'Herbes fraîches', qty: 5, unit: 'g', kcal: 2, protein: 0.2, carbs: 0.5, fat: 0.1 },
    ],
    steps: [
      'Préchauffer le four à 220°C.',
      'Couper les poivrons en 4 dans la longueur. Badigeonner d\'huile + sel.',
      'Rôtir 30 min jusqu\'à que la peau soit bien noire sur les bords.',
      'Mettre dans un sac plastique fermé 10 min — la vapeur facilite l\'épluchage.',
      'Peler, assaisonner avec huile + balsamique + ail + herbes.',
    ],
    tip: 'Les poivrons rôtis et pelés sont une des choses les plus simples et les plus bonnes qui soit. Batch : faire 1kg d\'un coup, garder au frigo 5 jours dans leur huile.',
    tags: ['légumes', 'batch', 'méditerranéen'],
  },


  {
    id: 'SW01', name: 'Mousse au chocolat protéinée', category: 'sweet', emoji: '🍫',
    prepTime: 10, cookTime: 0, batch: true,
    macros: { kcal: 250, protein: 34, carbs: 29, fat: 2 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 300, unit: 'g', kcal: 135, protein: 24, carbs: 12, fat: 0 },
      { name: 'Cacao non sucré', qty: 15, unit: 'g', kcal: 38, protein: 3, carbs: 5.3, fat: 2.3 },
      { name: 'Blancs d\'oeuf', qty: 2, unit: 'pièces', kcal: 32, protein: 7, carbs: 0.4, fat: 0 },
      { name: 'Miel', qty: 14, unit: 'g', kcal: 42, protein: 0, carbs: 11.4, fat: 0 },
      { name: 'Extrait de vanille', qty: 2, unit: 'ml', kcal: 3, protein: 0, carbs: 0.3, fat: 0 },
    ],
    steps: [
      'Monter les blancs en neige ferme avec une pincée de sel.',
      'Mélanger fromage blanc + cacao + miel + vanille jusqu\'à homogène.',
      'Incorporer délicatement les blancs en neige en 3 fois, en soulevant la masse.',
      'Répartir dans des verres ou ramequins. Réfrigérer minimum 1h.',
    ],
    tip: 'Plus les blancs sont fermes, plus la mousse est aérée. La patience au frigo est récompensée : la texture s\'améliore après 2h.',
    tags: ['chocolat', 'batch', 'frigo', 'high-protein'],
  },
  {
    id: 'SW02', name: 'Pancakes avoine-banane', category: 'sweet', emoji: '🥞',
    prepTime: 5, cookTime: 15, batch: false,
    macros: { kcal: 486, protein: 29, carbs: 58, fat: 15 },
    ingredients: [
      { name: 'Banane mûre', qty: 1, unit: 'pièce (100g)', kcal: 90, protein: 1.1, carbs: 20, fat: 0.3 },
      { name: 'Oeufs', qty: 2, unit: 'pièces', kcal: 156, protein: 13, carbs: 0.8, fat: 10.8 },
      { name: 'Flocons d\'avoine', qty: 50, unit: 'g', kcal: 190, protein: 6.5, carbs: 32, fat: 3.5 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Cannelle', qty: 2, unit: 'g', kcal: 5, protein: 0, carbs: 1.4, fat: 0.1 },
    ],
    steps: [
      'Écraser la banane à la fourchette. Mixer les flocons en farine grossière.',
      'Mélanger banane + oeufs + fromage blanc + farine d\'avoine + cannelle.',
      'Faire chauffer une poêle anti-adhésive à feu moyen-doux, légèrement huilée.',
      'Déposer des petites louches de pâte. Cuire 2-3 min de chaque côté.',
      'Servir avec fromage blanc et fruits rouges, ou miel.',
    ],
    tip: 'La banane bien mûre (tâches noires) est indispensable — elle sucre naturellement et lie la pâte. Pas besoin d\'ajouter de sucre.',
    tags: ['banane', 'rapide', 'petit-déj'],
  },
  {
    id: 'SW03', name: 'Bowl mangue-passion fromage blanc', category: 'sweet', emoji: '🥭',
    prepTime: 5, cookTime: 0, batch: false,
    macros: { kcal: 338, protein: 27, carbs: 47, fat: 7 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 300, unit: 'g', kcal: 135, protein: 24, carbs: 12, fat: 0 },
      { name: 'Mangue surgelée', qty: 150, unit: 'g', kcal: 90, protein: 1.2, carbs: 21, fat: 0.5 },
      { name: 'Fruit de la passion', qty: 1, unit: 'pièce', kcal: 27, protein: 0.6, carbs: 6, fat: 0.2 },
      { name: 'Noix de coco râpée non sucrée', qty: 10, unit: 'g', kcal: 65, protein: 0.7, carbs: 2.5, fat: 6.5 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
    ],
    steps: [
      'Laisser décongeler la mangue 15 min ou mixer directement surgelée en coulis.',
      'Fouetter le fromage blanc avec le miel.',
      'Couper la passion en deux, récupérer la pulpe.',
      'Assembler : fromage blanc, mangue, passion, noix de coco.',
    ],
    tip: 'La mangue surgelée mixée avec fromage blanc donne une texture quasi-glace. Essaie de tout mixer pour un smoothie bowl épais.',
    tags: ['exotique', 'frais', 'rapide', '0-cuisson'],
  },
  {
    id: 'SW04', name: 'Mug cake chocolat express (3 min)', category: 'sweet', emoji: '☕',
    prepTime: 3, cookTime: 3, batch: false,
    macros: { kcal: 306, protein: 20, carbs: 39, fat: 9 },
    ingredients: [
      { name: 'Oeuf', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Flocons d\'avoine', qty: 30, unit: 'g', kcal: 114, protein: 3.9, carbs: 19.2, fat: 2.1 },
      { name: 'Cacao non sucré', qty: 10, unit: 'g', kcal: 25, protein: 2, carbs: 3.5, fat: 1.5 },
      { name: 'Miel', qty: 14, unit: 'g', kcal: 42, protein: 0, carbs: 11.4, fat: 0 },
      { name: 'Levure chimique', qty: 1, unit: 'g', kcal: 2, protein: 0, carbs: 0.5, fat: 0 },
    ],
    steps: [
      'Mixer les flocons en farine.',
      'Mélanger tous les ingrédients dans un grand mug (400ml mini).',
      'Micro-ondes 2 min 30 à 800W. Vérifier la cuisson — le centre doit être juste pris.',
      'Laisser reposer 1 min. Manger directement dans le mug.',
    ],
    tip: 'Le mug cake trop cuit devient caoutchouteux. Mieux vaut légèrement sous-cuire — il continue de cuire avec la chaleur résiduelle.',
    tags: ['chocolat', 'micro-ondes', 'rapide'],
  },
  {
    id: 'SW05', name: 'Crêpes protéinées', category: 'sweet', emoji: '🫓',
    prepTime: 5, cookTime: 15, batch: true,
    macros: { kcal: 586, protein: 43, carbs: 56, fat: 21 },
    ingredients: [
      { name: 'Oeufs', qty: 3, unit: 'pièces', kcal: 234, protein: 19.5, carbs: 1.2, fat: 16.2 },
      { name: 'Fromage blanc 0%', qty: 150, unit: 'g', kcal: 68, protein: 12, carbs: 6, fat: 0 },
      { name: 'Flocons d\'avoine mixés en farine', qty: 60, unit: 'g', kcal: 228, protein: 7.8, carbs: 38.4, fat: 4.2 },
      { name: 'Lait écrémé', qty: 100, unit: 'ml', kcal: 35, protein: 3.4, carbs: 5, fat: 0.1 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
    ],
    steps: [
      'Mixer les flocons d\'avoine en farine fine.',
      'Mélanger tous les ingrédients au fouet ou blender jusqu\'à pâte lisse.',
      'Laisser reposer 5 min.',
      'Cuire dans poêle légèrement huilée, feu moyen, 1-2 min de chaque côté.',
      'Garnir : fromage blanc + fruits rouges, ou miel + banane.',
    ],
    tip: 'Batch : faire 6-8 crêpes, stocker au frigo 3 jours. Réchauffer à la poêle 30 sec ou micro-ondes 20 sec.',
    tags: ['batch', 'classique', 'high-protein'],
  },
  {
    id: 'SW06', name: 'Tiramisu allégé fromage blanc', category: 'sweet', emoji: '🍮',
    prepTime: 15, cookTime: 0, batch: true,
    macros: { kcal: 351, protein: 29, carbs: 56, fat: 2 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 300, unit: 'g', kcal: 135, protein: 24, carbs: 12, fat: 0 },
      { name: 'Biscuits boudoir', qty: 4, unit: 'pièces (40g)', kcal: 152, protein: 2.8, carbs: 30, fat: 1.6 },
      { name: 'Café expresso refroidi', qty: 60, unit: 'ml', kcal: 2, protein: 0.3, carbs: 0, fat: 0 },
      { name: 'Cacao non sucré', qty: 5, unit: 'g', kcal: 13, protein: 1, carbs: 1.8, fat: 0.75 },
      { name: 'Miel', qty: 14, unit: 'g', kcal: 42, protein: 0, carbs: 11.4, fat: 0 },
      { name: 'Extrait de vanille', qty: 2, unit: 'ml', kcal: 3, protein: 0, carbs: 0.3, fat: 0 },
    ],
    steps: [
      'Fouetter fromage blanc + miel + vanille jusqu\'à crémeux.',
      'Tremper rapidement les boudoirs dans le café froid (2 sec de chaque côté — sinon ils fondent).',
      'Disposer les boudoirs dans un verre ou ramequin.',
      'Recouvrir de fromage blanc fouetté.',
      'Saupoudrer généreusement de cacao. Réfrigérer 2h minimum.',
    ],
    tip: 'Ne pas tremper les boudoirs trop longtemps — ils doivent rester légèrement croquants au coeur. Le tiramisu est toujours meilleur préparé la veille.',
    tags: ['batch', 'frigo', 'classique', 'italien'],
  },
  {
    id: 'SW07', name: 'Chia pudding coco-mangue', category: 'sweet', emoji: '🥥',
    prepTime: 5, cookTime: 0, batch: true,
    macros: { kcal: 418, protein: 16, carbs: 33, fat: 26 },
    ingredients: [
      { name: 'Graines de chia', qty: 30, unit: 'g', kcal: 144, protein: 4.8, carbs: 9.6, fat: 9.3 },
      { name: 'Lait de coco light', qty: 200, unit: 'ml', kcal: 170, protein: 2, carbs: 6, fat: 16 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Mangue surgelée', qty: 100, unit: 'g', kcal: 60, protein: 0.8, carbs: 14, fat: 0.3 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
    ],
    steps: [
      'Mélanger chia + lait de coco + miel. Fouetter pour éviter les grumeaux.',
      'Réfrigérer minimum 4h (ou une nuit). Le chia absorbe tout et gélifie.',
      'Au moment de servir, déposer le fromage blanc fouetté dessus.',
      'Ajouter la mangue décongelée ou mixée en coulis.',
    ],
    tip: 'Le chia pudding se prépare la veille en 5 min. Batch : faire 4 pots d\'un coup, tenir 5 jours au frigo.',
    tags: ['batch', 'frigo', 'exotique'],
  },
  {
    id: 'SW08', name: 'Compote pomme-cannelle + fromage blanc', category: 'sweet', emoji: '🍎',
    prepTime: 5, cookTime: 15, batch: true,
    macros: { kcal: 233, protein: 13, carbs: 48, fat: 1 },
    ingredients: [
      { name: 'Pommes', qty: 2, unit: 'pièces (300g)', kcal: 156, protein: 1, carbs: 39, fat: 0.6 },
      { name: 'Fromage blanc 0%', qty: 150, unit: 'g', kcal: 68, protein: 12, carbs: 6, fat: 0 },
      { name: 'Cannelle', qty: 2, unit: 'g', kcal: 5, protein: 0, carbs: 1.4, fat: 0.1 },
      { name: 'Citron (jus)', qty: 15, unit: 'ml', kcal: 4, protein: 0.2, carbs: 1.2, fat: 0 },
    ],
    steps: [
      'Éplucher les pommes, couper en dés.',
      'Cuire dans casserole avec 2 càs d\'eau + cannelle + citron, couvert, 12-15 min.',
      'Écraser à la fourchette pour une texture rustique, ou mixer pour compote lisse.',
      'Servir chaud avec fromage blanc froid dessus — le contraste chaud/froid est excellent.',
    ],
    tip: 'Batch : faire 6 pommes d\'un coup. La compote maison tient 1 semaine au frigo. Sans sucre ajouté, la cannelle suffit à donner un côté sucré.',
    tags: ['batch', 'comfort', 'sans-sucre'],
  },
  {
    id: 'SW09', name: 'Nice cream banane-cacahuète', category: 'sweet', emoji: '🍦',
    prepTime: 5, cookTime: 0, batch: false,
    macros: { kcal: 383, protein: 14, carbs: 62, fat: 10 },
    ingredients: [
      { name: 'Bananes congelées', qty: 3, unit: 'pièces (300g)', kcal: 270, protein: 3.3, carbs: 60, fat: 0.9 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Beurre de cacahuète naturel', qty: 15, unit: 'g', kcal: 90, protein: 3.5, carbs: 3, fat: 7.5 },
      { name: 'Cacao non sucré', qty: 5, unit: 'g', kcal: 13, protein: 1, carbs: 1.75, fat: 0.75 },
    ],
    steps: [
      'Congeler les bananes épluchées coupées en rondelles (minimum 4h, idéalement une nuit).',
      'Mixer les bananes congelées jusqu\'à texture crémeuse (comme de la glace).',
      'Ajouter fromage blanc + beurre de cacahuète + cacao. Mixer encore.',
      'Déguster immédiatement ou remettre 30 min au congélo pour texture plus ferme.',
    ],
    tip: 'Les bananes bien mûres (tâches noires) donnent la meilleure douceur naturelle. Une bonne raison de ne jamais jeter les bananes trop mûres — les congeler directement.',
    tags: ['glace', 'banane', 'sans-sucre', 'congelé'],
  },
  {
    id: 'SW10', name: 'Crumble pomme-avoine', category: 'sweet', emoji: '🍏',
    prepTime: 10, cookTime: 25, batch: true,
    macros: { kcal: 506, protein: 20, carbs: 90, fat: 9 },
    ingredients: [
      { name: 'Pommes', qty: 2, unit: 'pièces (300g)', kcal: 156, protein: 1, carbs: 39, fat: 0.6 },
      { name: 'Flocons d\'avoine', qty: 50, unit: 'g', kcal: 190, protein: 6.5, carbs: 32, fat: 3.5 },
      { name: 'Miel', qty: 14, unit: 'g', kcal: 42, protein: 0, carbs: 11.4, fat: 0 },
      { name: 'Huile de coco', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Cannelle', qty: 2, unit: 'g', kcal: 5, protein: 0, carbs: 1.4, fat: 0.1 },
      { name: 'Fromage blanc 0% (topping)', qty: 150, unit: 'g', kcal: 68, protein: 12, carbs: 6, fat: 0 },
    ],
    steps: [
      'Préchauffer le four à 180°C.',
      'Éplucher et couper les pommes en dés. Disposer dans un plat à gratin.',
      'Mélanger flocons + miel + huile de coco fondue + cannelle → forme le crumble.',
      'Répartir le crumble sur les pommes.',
      'Enfourner 20-25 min jusqu\'à dorure du crumble.',
      'Servir avec fromage blanc froid.',
    ],
    tip: 'Batch : faire x2 pommes, congeler en portions. Réchauffer 5 min au four ou 90 sec au micro-ondes.',
    tags: ['batch', 'four', 'comfort'],
  },
  {
    id: 'SW11', name: 'Smoothie bowl framboise-fromage blanc', category: 'sweet', emoji: '🍓',
    prepTime: 5, cookTime: 0, batch: false,
    macros: { kcal: 340, protein: 30, carbs: 50, fat: 3 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 300, unit: 'g', kcal: 135, protein: 24, carbs: 12, fat: 0 },
      { name: 'Framboises surgelées', qty: 150, unit: 'g', kcal: 51, protein: 1.5, carbs: 9.75, fat: 0.75 },
      { name: 'Flocons d\'avoine (topping)', qty: 30, unit: 'g', kcal: 114, protein: 3.9, carbs: 19.2, fat: 2.1 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
      { name: 'Fruits rouges frais', qty: 50, unit: 'g', kcal: 19, protein: 0.4, carbs: 3.75, fat: 0.25 },
    ],
    steps: [
      'Mixer fromage blanc + framboises surgelées + miel jusqu\'à texture épaisse.',
      'Verser dans un bol.',
      'Parsemer de flocons d\'avoine + fruits rouges frais.',
    ],
    tip: 'Les framboises surgelées directement dans le mixer créent une texture quasi-sorbetée. Si le smoothie bowl est trop épais, ajouter un peu de lait écrémé.',
    tags: ['rapide', '0-cuisson', 'framboise'],
  },
  {
    id: 'SW12', name: 'Cheesecake pot express', category: 'sweet', emoji: '🧁',
    prepTime: 10, cookTime: 0, batch: true,
    macros: { kcal: 341, protein: 25, carbs: 46, fat: 7 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 250, unit: 'g', kcal: 113, protein: 20, carbs: 10, fat: 0 },
      { name: 'Fromage frais léger', qty: 50, unit: 'g', kcal: 55, protein: 3, carbs: 2.5, fat: 3.5 },
      { name: 'Miel', qty: 14, unit: 'g', kcal: 42, protein: 0, carbs: 11.4, fat: 0 },
      { name: 'Jus + zeste de citron', qty: 1, unit: 'pièce', kcal: 17, protein: 0.6, carbs: 5, fat: 0.2 },
      { name: 'Biscuits type Petit Beurre', qty: 3, unit: 'pièces (30g)', kcal: 127, protein: 2, carbs: 20.4, fat: 3.9 },
    ],
    steps: [
      'Mixer les biscuits en poudre. Répartir dans le fond des pots/verres.',
      'Fouetter fromage blanc + fromage frais + miel + zeste + jus de citron.',
      'Verser sur la base biscuitée.',
      'Réfrigérer minimum 1h.',
    ],
    tip: 'Batch : préparer 4 pots d\'un coup le dimanche. Tient 4 jours au frigo. Varier les parfums : citron vert + menthe, ou ajouter coulis de fruits rouges dessus.',
    tags: ['batch', 'frigo', 'cheesecake'],
  },
  {
    id: 'SW13', name: 'Brownie pois chiches-cacao (batch)', category: 'sweet', emoji: '🍫',
    prepTime: 10, cookTime: 20, batch: true,
    macros: { kcal: 313, protein: 17, carbs: 36, fat: 13 },
    ingredients: [
      { name: 'Pois chiches en boîte (égouttés)', qty: 200, unit: 'g', kcal: 240, protein: 14, carbs: 36, fat: 4 },
      { name: 'Cacao non sucré', qty: 20, unit: 'g', kcal: 50, protein: 4, carbs: 7, fat: 3 },
      { name: 'Oeufs', qty: 2, unit: 'pièces', kcal: 156, protein: 13, carbs: 0.8, fat: 10.8 },
      { name: 'Miel', qty: 28, unit: 'g', kcal: 84, protein: 0, carbs: 22.8, fat: 0 },
      { name: 'Beurre de cacahuète naturel', qty: 15, unit: 'g', kcal: 90, protein: 3.5, carbs: 3, fat: 7.5 },
      { name: 'Levure chimique', qty: 3, unit: 'g', kcal: 6, protein: 0, carbs: 1.5, fat: 0 },
    ],
    steps: [
      'Préchauffer le four à 175°C.',
      'Mixer pois chiches + oeufs + miel + beurre de cacahuète + cacao + levure jusqu\'à pâte lisse.',
      'Verser dans un moule huilé de 20x20cm (ou équivalent).',
      'Enfourner 18-20 min. Le centre doit rester légèrement humide.',
      'Laisser refroidir complètement avant de couper en 4 carrés.',
    ],
    tip: 'On ne sent PAS les pois chiches — le cacao et le beurre de cacahuète dominent. La texture est dense et fondante, exactement comme un vrai brownie. Se congèle très bien.',
    tags: ['batch', 'four', 'chocolat', 'légumineuses'],
  },
  {
    id: 'SW14', name: 'Fromage blanc fouetté fruits rouges', category: 'sweet', emoji: '🍓',
    prepTime: 3, cookTime: 0, batch: false,
    macros: { kcal: 216, protein: 25, carbs: 29, fat: 1 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 300, unit: 'g', kcal: 135, protein: 24, carbs: 12, fat: 0 },
      { name: 'Fruits rouges surgelés mixés', qty: 150, unit: 'g', kcal: 57, protein: 1.2, carbs: 11.25, fat: 0.75 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
      { name: 'Extrait de vanille', qty: 2, unit: 'ml', kcal: 3, protein: 0, carbs: 0.3, fat: 0 },
    ],
    steps: [
      'Mixer les fruits rouges surgelés (ou laisser décongeler et écraser à la fourchette).',
      'Fouetter le fromage blanc jusqu\'à consistance crémeuse.',
      'Incorporer le coulis de fruits, le miel et la vanille.',
      'Servir immédiatement ou réfrigérer 30 min.',
    ],
    tip: 'La recette la plus rapide et la plus high-protein de toute la liste. En 3 min tu as 25g de protéines avec un dessert qui ressemble à un yaourt premium.',
    tags: ['rapide', '0-cuisson', 'high-protein'],
  },
  {
    id: 'SW15', name: 'Galettes avoine-chocolat noir (batch)', category: 'sweet', emoji: '🍪',
    prepTime: 10, cookTime: 15, batch: true,
    macros: { kcal: 295, protein: 8, carbs: 43, fat: 10 },
    ingredients: [
      { name: 'Flocons d\'avoine', qty: 80, unit: 'g', kcal: 304, protein: 10.4, carbs: 51.2, fat: 5.6 },
      { name: 'Chocolat noir 85%', qty: 30, unit: 'g', kcal: 170, protein: 3.6, carbs: 6.6, fat: 13.8 },
      { name: 'Banane mûre', qty: 1, unit: 'pièce (100g)', kcal: 90, protein: 1.1, carbs: 20, fat: 0.3 },
      { name: 'Miel', qty: 7, unit: 'g', kcal: 21, protein: 0, carbs: 5.7, fat: 0 },
      { name: 'Cannelle', qty: 2, unit: 'g', kcal: 5, protein: 0, carbs: 1.4, fat: 0.1 },
    ],
    steps: [
      'Préchauffer le four à 175°C.',
      'Écraser la banane. Casser le chocolat en pépites.',
      'Mélanger banane + flocons + miel + cannelle + pépites de chocolat.',
      'Former des galettes (la recette en fait 4). Poser sur plaque papier cuisson.',
      'Enfourner 12-15 min. Laisser refroidir — elles durcissent en refroidissant.',
    ],
    tip: 'Recette pour 4 galettes — macros par portion de 2. Sans gluten si tu utilises des flocons d\'avoine certifiés. Se conservent 5 jours dans une boîte hermétique.',
    tags: ['batch', 'four', 'biscuit', 'chocolat'],
  },
  {
    id: 'SW16', name: 'Yaourt glacé maison (frozen yogurt)', category: 'sweet', emoji: '🍦',
    prepTime: 5, cookTime: 0, batch: true,
    macros: { kcal: 253, protein: 26, carbs: 38, fat: 1 },
    ingredients: [
      { name: 'Fromage blanc 0%', qty: 300, unit: 'g', kcal: 135, protein: 24, carbs: 12, fat: 0 },
      { name: 'Fruits rouges surgelés', qty: 200, unit: 'g', kcal: 76, protein: 1.6, carbs: 15, fat: 1 },
      { name: 'Miel', qty: 14, unit: 'g', kcal: 42, protein: 0, carbs: 11.4, fat: 0 },
    ],
    steps: [
      'Mixer fromage blanc + fruits rouges + miel jusqu\'à homogène.',
      'Verser dans des moules à glaçons ou un moule rectangulaire.',
      'Congeler minimum 3h.',
      'Sortir 10 min avant de déguster pour retrouver la texture crémeuse.',
    ],
    tip: 'Mixer brièvement après 1h de congélation et remettre au congélo pour une texture plus crémeuse. Batch : faire un grand moule, couper en parts et conserver jusqu\'à 1 mois.',
    tags: ['batch', 'congelé', 'high-protein', 'frais'],
  },


  // ─────────────────────────────────────────────────────────────
  // MENU CANTINE (déjeuner type entreprise — pré-composé)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'C01', name: 'Menu cantine complet', category: 'lunch', emoji: '🍱',
    prepTime: 0, cookTime: 0, batch: false,
    macros: { kcal: 695, protein: 75, carbs: 38, fat: 27 },
    ingredients: [
      { name: 'Crudités (carotte/tomate/concombre)', qty: 100, unit: 'g', kcal: 30, protein: 1, carbs: 5, fat: 0.3 },
      { name: 'Steak haché 5%', qty: 150, unit: 'g', kcal: 233, protein: 31.5, carbs: 0, fat: 11.3 },
      { name: 'Portion de légumes', qty: 150, unit: 'g', kcal: 45, protein: 3, carbs: 7, fat: 0.6 },
      { name: 'Oeufs durs', qty: 3, unit: 'pièces', kcal: 234, protein: 19.5, carbs: 1.2, fat: 16.2 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Fruit (pomme/banane)', qty: 120, unit: 'g', kcal: 108, protein: 1, carbs: 26, fat: 0.3 },
    ],
    steps: [
      'Au self : prends une crudité en entrée.',
      'Plat : 1 steak haché + une portion de légumes (évite frites et sauces).',
      'Ajoute 3 œufs durs sur le plateau — protéine gratuite.',
      'Dessert : 1 fromage blanc nature + 1 fruit.',
    ],
    tip: 'Le combo parfait à la cantine : 75g de protéines sans effort. Les 3 œufs durs compensent l\'absence de petit-déj en jeûne intermittent. Évite frites, pain et desserts sucrés.',
    tags: ['cantine', 'rapide', '0-cuisson', 'high-protein'],
  },

  // ─────────────────────────────────────────────────────────────
  // NOUVELLES RECETTES — DÎNERS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'D21', name: 'Poulet au beurre indien (butter chicken allégé)', category: 'dinner', emoji: '🧈',
    prepTime: 15, cookTime: 25, batch: true,
    macros: { kcal: 812, protein: 80, carbs: 80, fat: 19 },
    ingredients: [
      { name: 'Blanc de poulet', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Fromage blanc 0%', qty: 150, unit: 'g', kcal: 68, protein: 12, carbs: 6, fat: 0 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Lait de coco light', qty: 80, unit: 'ml', kcal: 68, protein: 0.8, carbs: 2.4, fat: 6.4 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Beurre', qty: 8, unit: 'g', kcal: 59, protein: 0.1, carbs: 0, fat: 6.5 },
      { name: 'Riz basmati', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Garam masala + cumin + paprika + gingembre + ail', qty: 12, unit: 'g', kcal: 36, protein: 1.5, carbs: 6, fat: 1 },
    ],
    steps: [
      'Mariner le poulet en dés dans la moitié du fromage blanc + épices 30 min.',
      'Faire revenir oignon + ail + gingembre dans le beurre.',
      'Ajouter tomates + épices restantes. Mijoter 8 min, puis mixer pour une sauce lisse.',
      'Saisir le poulet mariné à part, l\'ajouter à la sauce.',
      'Incorporer lait de coco + reste de fromage blanc hors du feu. Mijoter 10 min.',
      'Servir avec riz basmati + coriandre.',
    ],
    tip: 'Le secret du butter chicken : mixer la sauce tomate-oignon avant d\'ajouter le poulet. Texture veloutée garantie. Le beurre en petite quantité suffit pour le goût authentique.',
    tags: ['indien', 'batch', 'crémeux'],
  },
  {
    id: 'D22', name: 'Saumon teriyaki au sésame', category: 'dinner', emoji: '🍣',
    prepTime: 10, cookTime: 15, batch: false,
    macros: { kcal: 720, protein: 52, carbs: 70, fat: 25 },
    ingredients: [
      { name: 'Pavé de saumon', qty: 180, unit: 'g', kcal: 374, protein: 36, carbs: 0, fat: 25 },
      { name: 'Riz', qty: 70, unit: 'g', kcal: 252, protein: 4.9, carbs: 54.6, fat: 0.4 },
      { name: 'Sauce soja', qty: 30, unit: 'ml', kcal: 16, protein: 2, carbs: 1.5, fat: 0 },
      { name: 'Miel', qty: 10, unit: 'g', kcal: 30, protein: 0, carbs: 8.1, fat: 0 },
      { name: 'Brocoli', qty: 150, unit: 'g', kcal: 53, protein: 4.5, carbs: 7.5, fat: 0.6 },
      { name: 'Sésame', qty: 5, unit: 'g', kcal: 30, protein: 1, carbs: 1, fat: 2.5 },
      { name: 'Gingembre + ail', qty: 8, unit: 'g', kcal: 8, protein: 0.3, carbs: 1.8, fat: 0.1 },
    ],
    steps: [
      'Cuire le riz et le brocoli vapeur.',
      'Sauce teriyaki : soja + miel + ail + gingembre râpé, réduire 2 min à la casserole.',
      'Saisir le saumon côté peau 4 min, retourner 2 min.',
      'Napper de sauce teriyaki, laisser glacer 1 min.',
      'Servir sur riz, brocoli à côté, parsemer de sésame.',
    ],
    tip: 'Le saumon doit rester rosé au centre — ne pas trop cuire. La sauce teriyaki maison (soja + miel) est bien meilleure et moins sucrée que celle du commerce.',
    tags: ['japonais', 'poisson', 'oméga-3'],
  },
  {
    id: 'D23', name: 'Chili sin carne haricots-patate douce', category: 'dinner', emoji: '🌶️',
    prepTime: 10, cookTime: 25, batch: true,
    macros: { kcal: 685, protein: 58, carbs: 95, fat: 12 },
    ingredients: [
      { name: 'Haricots rouges en boîte (égouttés)', qty: 200, unit: 'g', kcal: 220, protein: 16, carbs: 34, fat: 1 },
      { name: 'Blanc de poulet émincé', qty: 150, unit: 'g', kcal: 165, protein: 34.5, carbs: 0, fat: 3 },
      { name: 'Patate douce', qty: 150, unit: 'g', kcal: 129, protein: 2.4, carbs: 30, fat: 0.2 },
      { name: 'Tomates concassées', qty: 200, unit: 'g', kcal: 70, protein: 3, carbs: 12, fat: 0.6 },
      { name: 'Oignon', qty: 100, unit: 'g', kcal: 40, protein: 1, carbs: 9, fat: 0 },
      { name: 'Maïs', qty: 50, unit: 'g', kcal: 43, protein: 1.5, carbs: 8, fat: 0.6 },
      { name: 'Huile d\'olive', qty: 5, unit: 'g', kcal: 45, protein: 0, carbs: 0, fat: 5 },
      { name: 'Cumin + paprika fumé + piment + ail', qty: 8, unit: 'g', kcal: 24, protein: 1, carbs: 4.5, fat: 0.8 },
    ],
    steps: [
      'Couper la patate douce en petits dés. Faire revenir oignon + ail dans l\'huile.',
      'Ajouter le poulet émincé, dorer 5 min.',
      'Ajouter patate douce + épices, remuer 2 min.',
      'Ajouter tomates + haricots + maïs + 150ml eau. Mijoter 20 min.',
      'La patate douce doit être fondante. Ajuster piment.',
    ],
    tip: 'La patate douce apporte une douceur qui équilibre le piquant. Se congèle parfaitement — fais-en une grande quantité.',
    tags: ['mexicain', 'batch', 'légumineuses'],
  },
  {
    id: 'D24', name: 'Boulettes de poulet sauce tomate-basilic', category: 'dinner', emoji: '🍅',
    prepTime: 15, cookTime: 20, batch: true,
    macros: { kcal: 735, protein: 78, carbs: 68, fat: 17 },
    ingredients: [
      { name: 'Poulet haché', qty: 250, unit: 'g', kcal: 275, protein: 57.5, carbs: 0, fat: 5 },
      { name: 'Oeuf', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Chapelure', qty: 20, unit: 'g', kcal: 70, protein: 2.4, carbs: 13, fat: 0.8 },
      { name: 'Tomates concassées', qty: 250, unit: 'g', kcal: 88, protein: 3.8, carbs: 15, fat: 0.8 },
      { name: 'Pâtes', qty: 70, unit: 'g', kcal: 245, protein: 9.1, carbs: 49, fat: 1.1 },
      { name: 'Parmesan', qty: 10, unit: 'g', kcal: 43, protein: 3.5, carbs: 0, fat: 3.2 },
      { name: 'Ail + basilic + origan', qty: 10, unit: 'g', kcal: 12, protein: 0.5, carbs: 2, fat: 0.2 },
    ],
    steps: [
      'Mélanger poulet haché + œuf + chapelure + ail + sel + poivre. Former des boulettes.',
      'Dorer les boulettes à la poêle 6-8 min. Réserver.',
      'Sauce : tomates + ail + origan, mijoter 8 min. Ajouter les boulettes 5 min.',
      'Cuire les pâtes al dente.',
      'Servir boulettes + sauce sur pâtes, basilic frais + parmesan.',
    ],
    tip: 'La chapelure rend les boulettes moelleuses sans les alourdir. Bats l\'œuf avant de l\'incorporer pour une texture homogène.',
    tags: ['italien', 'batch', 'comfort'],
  },
  {
    id: 'D25', name: 'Wok de crevettes ail-gingembre', category: 'dinner', emoji: '🦐',
    prepTime: 10, cookTime: 12, batch: false,
    macros: { kcal: 620, protein: 58, carbs: 72, fat: 10 },
    ingredients: [
      { name: 'Crevettes décortiquées', qty: 200, unit: 'g', kcal: 198, protein: 42, carbs: 0, fat: 2 },
      { name: 'Nouilles de riz', qty: 70, unit: 'g', kcal: 252, protein: 4.5, carbs: 56, fat: 0.5 },
      { name: 'Poivron', qty: 100, unit: 'g', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
      { name: 'Carotte', qty: 80, unit: 'g', kcal: 33, protein: 0.8, carbs: 7.2, fat: 0.2 },
      { name: 'Pois mange-tout', qty: 80, unit: 'g', kcal: 34, protein: 2.4, carbs: 6, fat: 0.2 },
      { name: 'Sauce soja + huile sésame', qty: 25, unit: 'ml', kcal: 50, protein: 1.5, carbs: 1.5, fat: 5 },
      { name: 'Ail + gingembre + citron vert', qty: 12, unit: 'g', kcal: 12, protein: 0.4, carbs: 2.7, fat: 0.1 },
    ],
    steps: [
      'Réhydrater les nouilles de riz selon le paquet.',
      'Wok très chaud : faire sauter ail + gingembre 30 sec.',
      'Ajouter crevettes, saisir 2-3 min jusqu\'à roses. Réserver.',
      'Sauter les légumes 4 min en gardant le croquant.',
      'Remettre crevettes + nouilles + sauce soja + huile sésame. Mélanger 1 min.',
      'Finir avec jus de citron vert.',
    ],
    tip: 'Ne pas trop cuire les crevettes — 2-3 min suffisent, sinon elles deviennent caoutchouteuses. Wok à feu maximal du début à la fin.',
    tags: ['asiatique', 'fruits de mer', 'rapide'],
  },

  // ─────────────────────────────────────────────────────────────
  // NOUVELLES RECETTES — DÉJEUNERS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'L21', name: 'Buddha bowl patate douce-pois chiches', category: 'lunch', emoji: '🌈',
    prepTime: 10, cookTime: 25, batch: true,
    macros: { kcal: 615, protein: 52, carbs: 68, fat: 16 },
    ingredients: [
      { name: 'Blanc de poulet cuit', qty: 150, unit: 'g', kcal: 165, protein: 34.5, carbs: 0, fat: 3 },
      { name: 'Patate douce', qty: 150, unit: 'g', kcal: 129, protein: 2.4, carbs: 30, fat: 0.2 },
      { name: 'Pois chiches', qty: 100, unit: 'g', kcal: 120, protein: 7, carbs: 18, fat: 2 },
      { name: 'Épinards frais', qty: 80, unit: 'g', kcal: 18, protein: 2.4, carbs: 1.6, fat: 0.3 },
      { name: 'Fromage blanc 0% (sauce)', qty: 80, unit: 'g', kcal: 36, protein: 6.4, carbs: 3.2, fat: 0 },
      { name: 'Tahini', qty: 10, unit: 'g', kcal: 60, protein: 1.7, carbs: 1.7, fat: 5.3 },
      { name: 'Huile + citron + cumin', qty: 8, unit: 'g', kcal: 50, protein: 0.2, carbs: 1, fat: 5 },
    ],
    steps: [
      'Rôtir la patate douce en dés + pois chiches au four 200°C, 25 min avec huile + cumin.',
      'Sauce : fromage blanc + tahini + citron + ail + eau.',
      'Disposer en bowl : épinards, patate douce, pois chiches, poulet froid.',
      'Napper de sauce tahini-citron.',
    ],
    tip: 'Les pois chiches bien rôtis deviennent croustillants — un régal. Tout se prépare en batch le dimanche.',
    tags: ['bowl', 'batch', 'végé-friendly'],
  },
  {
    id: 'L22', name: 'Salade de lentilles-feta-menthe', category: 'lunch', emoji: '🥗',
    prepTime: 10, cookTime: 0, batch: true,
    macros: { kcal: 560, protein: 48, carbs: 50, fat: 18 },
    ingredients: [
      { name: 'Lentilles vertes en boîte (égouttées)', qty: 200, unit: 'g', kcal: 200, protein: 16, carbs: 28, fat: 1 },
      { name: 'Thon au naturel', qty: 140, unit: 'g', kcal: 162, protein: 36.4, carbs: 0, fat: 1.4 },
      { name: 'Feta', qty: 40, unit: 'g', kcal: 100, protein: 6, carbs: 0.7, fat: 8 },
      { name: 'Tomates cerise', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Oignon rouge', qty: 50, unit: 'g', kcal: 20, protein: 0.5, carbs: 4.5, fat: 0 },
      { name: 'Huile + citron + menthe', qty: 12, unit: 'g', kcal: 60, protein: 0.3, carbs: 1.5, fat: 6 },
    ],
    steps: [
      'Égoutter et rincer les lentilles.',
      'Couper tomates + oignon rouge en petits dés. Ciseler la menthe.',
      'Mélanger lentilles + thon + tomates + oignon + menthe.',
      'Vinaigrette huile-citron. Émietter la feta dessus.',
    ],
    tip: 'La menthe fraîche transforme cette salade. Elle se bonifie au frigo — meilleure le lendemain.',
    tags: ['salade', 'batch', 'méditerranéen'],
  },
  {
    id: 'L23', name: 'Croque-monsieur protéiné', category: 'lunch', emoji: '🥪',
    prepTime: 5, cookTime: 10, batch: false,
    macros: { kcal: 560, protein: 52, carbs: 45, fat: 18 },
    ingredients: [
      { name: 'Pain complet', qty: 70, unit: 'g', kcal: 161, protein: 6.3, carbs: 28, fat: 2.1 },
      { name: 'Blanc de dinde (tranches)', qty: 100, unit: 'g', kcal: 110, protein: 22, carbs: 1, fat: 1.5 },
      { name: 'Emmental allégé', qty: 40, unit: 'g', kcal: 109, protein: 11.2, carbs: 0, fat: 7.2 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Oeuf', qty: 1, unit: 'pièce', kcal: 78, protein: 6.5, carbs: 0.4, fat: 5.4 },
      { name: 'Moutarde + muscade', qty: 5, unit: 'g', kcal: 5, protein: 0.3, carbs: 0.3, fat: 0.3 },
    ],
    steps: [
      'Béchamel express : fromage blanc + moutarde + muscade + sel.',
      'Monter le croque : pain, dinde, béchamel, emmental, pain.',
      'Cuire à la poêle 3 min de chaque côté à couvert (le fromage fond).',
      'Pour la version "madame" : ajouter un œuf au plat dessus.',
    ],
    tip: 'La béchamel au fromage blanc remplace la version beurre-farine-lait pour 3x moins de calories. Le croque reste fondant.',
    tags: ['français', 'rapide', 'comfort'],
  },
  {
    id: 'L24', name: 'Taboulé libanais poulet (boulghour)', category: 'lunch', emoji: '🌿',
    prepTime: 15, cookTime: 0, batch: true,
    macros: { kcal: 575, protein: 50, carbs: 62, fat: 12 },
    ingredients: [
      { name: 'Blanc de poulet cuit', qty: 180, unit: 'g', kcal: 198, protein: 41.4, carbs: 0, fat: 3.6 },
      { name: 'Boulghour', qty: 60, unit: 'g', kcal: 204, protein: 7.2, carbs: 45, fat: 0.8 },
      { name: 'Persil plat', qty: 30, unit: 'g', kcal: 11, protein: 1, carbs: 1.8, fat: 0.2 },
      { name: 'Tomates', qty: 100, unit: 'g', kcal: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: 'Oignon + menthe', qty: 40, unit: 'g', kcal: 16, protein: 0.5, carbs: 3.5, fat: 0.1 },
      { name: 'Huile + citron', qty: 15, unit: 'g', kcal: 95, protein: 0.1, carbs: 1.5, fat: 10 },
    ],
    steps: [
      'Cuire le boulghour (couvrir d\'eau bouillante 10 min, égoutter).',
      'Hacher finement persil + menthe + tomates + oignon.',
      'Mélanger boulghour + herbes + poulet émincé.',
      'Assaisonner généreusement huile + citron + sel. Réfrigérer 30 min.',
    ],
    tip: 'Le vrai taboulé libanais, c\'est surtout du persil avec un peu de boulghour — pas l\'inverse. Plus il y a d\'herbes, meilleur c\'est.',
    tags: ['libanais', 'batch', 'frais'],
  },

  // ─────────────────────────────────────────────────────────────
  // NOUVELLES RECETTES — DESSERTS & ENCAS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'SW17', name: 'Cookie dough protéiné (pâte à cookie crue)', category: 'sweet', emoji: '🍪',
    prepTime: 5, cookTime: 0, batch: true,
    macros: { kcal: 320, protein: 22, carbs: 32, fat: 12 },
    ingredients: [
      { name: 'Pois chiches en boîte (égouttés)', qty: 100, unit: 'g', kcal: 120, protein: 7, carbs: 18, fat: 2 },
      { name: 'Beurre de cacahuète', qty: 20, unit: 'g', kcal: 120, protein: 4.7, carbs: 4, fat: 10 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Miel', qty: 10, unit: 'g', kcal: 30, protein: 0, carbs: 8.1, fat: 0 },
      { name: 'Pépites de chocolat noir', qty: 10, unit: 'g', kcal: 55, protein: 0.8, carbs: 4.5, fat: 3.5 },
      { name: 'Vanille + pincée de sel', qty: 2, unit: 'g', kcal: 3, protein: 0, carbs: 0.3, fat: 0 },
    ],
    steps: [
      'Mixer pois chiches + beurre de cacahuète + fromage blanc + miel + vanille jusqu\'à pâte lisse.',
      'Incorporer les pépites de chocolat à la cuillère.',
      'Déguster froid à la cuillère, ou former des petites boules.',
    ],
    tip: 'On ne devine jamais les pois chiches — texture identique à une vraie pâte à cookie. Sans œuf cru donc 100% sûr à manger crue.',
    tags: ['chocolat', '0-cuisson', 'high-protein', 'batch'],
  },
  {
    id: 'SW18', name: 'Riz au lait vanille-cannelle allégé', category: 'sweet', emoji: '🍚',
    prepTime: 5, cookTime: 25, batch: true,
    macros: { kcal: 365, protein: 18, carbs: 70, fat: 2 },
    ingredients: [
      { name: 'Riz rond', qty: 50, unit: 'g', kcal: 180, protein: 3.5, carbs: 39, fat: 0.3 },
      { name: 'Lait écrémé', qty: 250, unit: 'ml', kcal: 88, protein: 8.5, carbs: 12.5, fat: 0.3 },
      { name: 'Fromage blanc 0%', qty: 100, unit: 'g', kcal: 45, protein: 8, carbs: 4, fat: 0 },
      { name: 'Miel', qty: 14, unit: 'g', kcal: 42, protein: 0, carbs: 11.4, fat: 0 },
      { name: 'Vanille + cannelle', qty: 3, unit: 'g', kcal: 8, protein: 0, carbs: 2, fat: 0.1 },
    ],
    steps: [
      'Cuire le riz dans le lait à feu doux, 20-25 min en remuant, jusqu\'à absorption.',
      'Ajouter vanille + cannelle + miel.',
      'Laisser tiédir, puis incorporer le fromage blanc pour le crémeux.',
      'Servir tiède ou froid.',
    ],
    tip: 'Le fromage blanc ajouté hors du feu double l\'onctuosité sans la crème. Saupoudre de cannelle juste avant de servir.',
    tags: ['comfort', 'batch', 'classique'],
  },
  {
    id: 'SW19', name: 'Energy balls dattes-cacao-cacahuète', category: 'sweet', emoji: '⚫',
    prepTime: 10, cookTime: 0, batch: true,
    macros: { kcal: 295, protein: 14, carbs: 38, fat: 11 },
    ingredients: [
      { name: 'Dattes dénoyautées', qty: 50, unit: 'g', kcal: 140, protein: 1, carbs: 33, fat: 0.2 },
      { name: 'Flocons d\'avoine', qty: 30, unit: 'g', kcal: 114, protein: 3.9, carbs: 19.2, fat: 2.1 },
      { name: 'Beurre de cacahuète', qty: 15, unit: 'g', kcal: 90, protein: 3.5, carbs: 3, fat: 7.5 },
      { name: 'Cacao non sucré', qty: 8, unit: 'g', kcal: 20, protein: 1.6, carbs: 2.8, fat: 1.2 },
      { name: 'Protéine en poudre (optionnel)', qty: 10, unit: 'g', kcal: 38, protein: 8, carbs: 1, fat: 0.5 },
    ],
    steps: [
      'Mixer les dattes en pâte.',
      'Ajouter flocons + beurre de cacahuète + cacao + protéine. Mixer.',
      'Former 6 boules à la main.',
      'Réfrigérer 30 min pour qu\'elles se tiennent.',
    ],
    tip: 'Encas parfait avant ou après la salle. Se conservent 1 semaine au frigo, 1 mois au congélo. Macros pour 3 boules.',
    tags: ['encas', '0-cuisson', 'batch', 'pré-workout'],
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

const getDinners = () => RECIPES.filter(r => r.category === 'dinner');
const getLunches = () => RECIPES.filter(r => r.category === 'lunch');
const getSides   = () => RECIPES.filter(r => r.category === 'side');
const getSweets  = () => RECIPES.filter(r => r.category === 'sweet');
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

const EMPTY_MEALS = () => ({ lunch: [], dinner: [], sides: [], sweet: [] });

function normalizeItem(item) {
  // Ancien format : string → { id, servings:1 }
  if (typeof item === 'string') return { id: item, servings: 1 };
  return { id: item.id, servings: item.servings || 1 };
}

function normalizeEntry(entry) {
  const meals = EMPTY_MEALS();
  ['lunch', 'dinner', 'sides', 'sweet'].forEach(slot => {
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

function mbar(value, target, color) {
  const pct = Math.min((value / target) * 100, 100).toFixed(1);
  const over = value > target;
  return `<div class="mbar-wrap"><div class="mbar ${over ? 'over' : ''}" style="width:${pct}%;background:${over ? 'var(--danger)' : color}"></div></div>`;
}

// Macros d'une recette × servings, arrondis
function scaledMacros(recipe, servings = 1) {
  return {
    kcal:    Math.round(recipe.macros.kcal    * servings),
    protein: Math.round(recipe.macros.protein * servings),
    carbs:   Math.round(recipe.macros.carbs   * servings),
    fat:     Math.round(recipe.macros.fat     * servings),
  };
}

// Total d'un jour : meals = { slot: [{id, servings}] }
function computeDayMacros(entry) {
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
// js/state.js
// ──────────────────────────────────────────────

const state = {
  currentView:    'week',          // démarre sur la vue semaine
  selectedDate:   getTodayDate(),  // jour en cours d'édition dans le planner
  searchQuery:    '',
  filterCategory: 'all',
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
  { id: 'macros',   label: 'Macros'   },
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
// week.js — Planning hebdomadaire (vue principale)
// Permet de composer le menu de toute une semaine, jour par jour.
// Bascule "Cette semaine" / "Semaine prochaine".


const DAY_LABELS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

let weekMode = 'current'; // 'current' | 'next'

function renderWeek() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const dates = weekMode === 'current' ? getWeekDates() : getNextWeekDates();
  const today = getTodayDate();
  const { targets } = USER;

  // Totaux semaine
  let weekKcal = 0, plannedDays = 0;
  dates.forEach(d => {
    const m = computeDayMacros(getEntry(d));
    if (m.kcal > 0) { weekKcal += m.kcal; plannedDays++; }
  });

  const view = el('div', 'view week-view');

  view.innerHTML = `
    <div class="week-header">
      <div class="week-title-row"><div class="week-title">📆 Ma semaine</div><button class="week-settings" aria-label="Réglages"><svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></button></div>
      <div class="week-toggle">
        <button class="wk-tab ${weekMode==='current'?'active':''}" data-mode="current">Cette semaine</button>
        <button class="wk-tab ${weekMode==='next'?'active':''}" data-mode="next">Semaine prochaine</button>
      </div>
      <div class="week-summary">
        ${plannedDays}/7 jours planifiés${plannedDays ? ` · ~${Math.round(weekKcal/plannedDays)} kcal/jour` : ''}
      </div>
    </div>
    <div class="week-days"></div>
    <div class="week-actions">
      <button class="week-shop-btn">🛒 Générer la liste de courses</button>
    </div>
  `;

  const daysWrap = view.querySelector('.week-days');

  dates.forEach((date, i) => {
    const entry  = getEntry(date);
    const macros = computeDayMacros(entry);
    const isToday = date === today;
    const over = macros.kcal > targets.kcal;
    const totalItems = ['lunch','dinner','sides','sweet']
      .reduce((n, s) => n + (entry.meals[s]?.length || 0), 0);

    const card = el('div', `week-day ${isToday ? 'is-today' : ''} ${totalItems ? '' : 'empty'}`);
    card.dataset.date = date;

    const dayNum = new Date(date + 'T12:00:00').getDate();

    card.innerHTML = `
      <div class="wd-left">
        <div class="wd-label">${DAY_LABELS[i]}</div>
        <div class="wd-num">${dayNum}</div>
      </div>
      <div class="wd-body">
        ${totalItems ? `
          <div class="wd-kcal ${over ? 'over' : ''}">
            ${Math.round(macros.kcal)} kcal
            <span class="wd-p">· ${Math.round(macros.protein)}g P</span>
            ${over ? '<span class="wd-warn">⚠️ dépassé</span>' : ''}
          </div>
          ${mbar(macros.kcal, targets.kcal, 'var(--accent)')}
          <div class="wd-meals">
            ${mealLine('🥗', entry.meals.lunch)}
            ${mealLine('🍽️', entry.meals.dinner)}
            ${mealLine('🥦', entry.meals.sides)}
            ${mealLine('🍫', entry.meals.sweet)}
          </div>
        ` : `<div class="wd-empty">Vide — appuie pour planifier</div>`}
      </div>
      <span class="wd-arrow">›</span>
    `;

    card.addEventListener('click', () => {
      setState({ selectedDate: date, currentView: 'planner' });
      window._nav?.('planner');
    });

    daysWrap.appendChild(card);
  });

  // Events
  view.querySelector('.week-settings')?.addEventListener('click', () => window._nav?.('settings'));
  view.querySelectorAll('.wk-tab').forEach(b =>
    b.addEventListener('click', () => { weekMode = b.dataset.mode; renderWeek(); })
  );
  view.querySelector('.week-shop-btn').addEventListener('click', () => {
    // Mémorise la plage de dates pour la vue courses
    const range = weekMode === 'current' ? getWeekDates() : getNextWeekDates();
    localStorage.setItem('diet_shop_range', JSON.stringify(range));
    window._nav?.('shopping');
  });

  app.insertBefore(view, app.querySelector('#nav'));
}

function mealLine(emoji, items) {
  if (!items || !items.length) return '';
  const names = items.map(it => {
    const r = getById(it.id);
    if (!r) return '';
    return r.name + (it.servings > 1 ? ` ×${it.servings}` : '');
  }).filter(Boolean).join(', ');
  return `<div class="wd-meal-line"><span class="wd-meal-emoji">${emoji}</span> ${names}</div>`;
}


// ──────────────────────────────────────────────
// js/planner.js
// ──────────────────────────────────────────────
// planner.js — Éditeur du menu d'un jour (state.selectedDate)
// Ajout/suppression de plats, réglage précis des portions, alerte dépassement kcal.


const SLOTS = [
  { key: 'lunch',  label: 'Déjeuner',        emoji: '🥗',  fn: getLunches },
  { key: 'dinner', label: 'Dîner',            emoji: '🍽️',  fn: getDinners },
  { key: 'sides',  label: 'Accompagnements',  emoji: '🥦',  fn: getSides  },
  { key: 'sweet',  label: 'Dessert / Encas',  emoji: '🍫',  fn: getSweets },
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
  item.servings = Math.max(0.25, Math.round((item.servings + delta) * 4) / 4);
  save(entry);
}

function setServings(slot, index, value) {
  const entry = currentEntry();
  const item = entry.meals[slot][index];
  if (!item) return;
  const v = parseFloat(String(value).replace(',', '.'));
  if (!isNaN(v) && v > 0) item.servings = Math.round(v * 4) / 4;
  save(entry);
}

function renderPlanner() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const entry  = currentEntry();
  const macros = computeDayMacros(entry);
  const { targets } = USER;
  const kcalPct = Math.round((macros.kcal / targets.kcal) * 100);
  const over    = macros.kcal > targets.kcal;
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
    ${over ? `<div class="over-banner">⚠️ Limite dépassée de ${Math.round(macros.kcal - targets.kcal)} kcal</div>` : ''}
    <div class="mini-macros">
      <div class="mini-macro"><span class="mm-val protein">${Math.round(macros.protein)}g</span><span class="mm-label">Protéines</span></div>
      <div class="mini-macro"><span class="mm-val carbs">${Math.round(macros.carbs)}g</span><span class="mm-label">Glucides</span></div>
      <div class="mini-macro"><span class="mm-val fat">${Math.round(macros.fat)}g</span><span class="mm-label">Lipides</span></div>
    </div>`;
  view.appendChild(hdr);

  SLOTS.forEach(({ key, label, emoji }) => {
    const selected = entry.meals[key] || [];
    const slotMacros = selected.reduce((a, item) => {
      const r = getById(item.id);
      if (r) { const m = scaledMacros(r, item.servings); a.kcal += m.kcal; a.protein += m.protein; }
      return a;
    }, { kcal: 0, protein: 0 });

    const slot = el('div', 'meal-slot');
    slot.innerHTML = `
      <div class="slot-hd">
        <div class="slot-left"><span class="slot-emoji">${emoji}</span><span class="slot-label">${label}</span></div>
        ${selected.length ? `<span class="slot-kcal">${Math.round(slotMacros.kcal)} kcal · ${Math.round(slotMacros.protein)}g P</span>` : ''}
      </div>
      <div class="slot-body">
        ${selected.map((item, idx) => {
          const r = getById(item.id);
          if (!r) return '';
          const m = scaledMacros(r, item.servings);
          return `<div class="recipe-chip">
            <span class="chip-emoji">${r.emoji}</span>
            <div class="chip-info">
              <div class="chip-name">${r.name}</div>
              <div class="chip-kcal">${m.kcal} kcal · ${m.protein}g P</div>
            </div>
            <div class="serv-control">
              <button class="serv-btn" data-slot="${key}" data-idx="${idx}" data-delta="-0.25">−</button>
              <input class="serv-input" type="text" inputmode="decimal" data-slot="${key}" data-idx="${idx}" value="${item.servings}">
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

function openRecipePicker(slot) {
  const cfg = SLOTS.find(s => s.key === slot);
  let allRecipes = cfg.fn();
  let query = '';
  function sheetHTML() {
    const filtered = allRecipes.filter(r => r.name.toLowerCase().includes(query.toLowerCase()));
    return `
      <div class="sheet-handle"></div>
      <div class="sheet-search-wrap"><input class="sheet-search" id="sheet-q" placeholder="Rechercher..." value="${query}"></div>
      <div class="sheet-list">
        ${filtered.length ? filtered.map(r => `
          <div class="sheet-recipe" data-id="${r.id}">
            <span class="sheet-r-emoji">${r.emoji}</span>
            <div class="sheet-r-info">
              <div class="sheet-r-name">${r.name}</div>
              <div class="sheet-r-meta">${r.macros.kcal} kcal · ${r.macros.protein}g P · ${r.prepTime + r.cookTime} min</div>
            </div>
            <span class="sheet-r-add">+</span>
          </div>`).join('') : '<div style="color:var(--muted);text-align:center;padding:30px">Aucun résultat</div>'}
      </div>`;
  }
  openSheet(sheetHTML());
  function bind() {
    const sheet = document.getElementById('sheet');
    if (!sheet) return;
    sheet.querySelector('#sheet-q')?.addEventListener('input', e => { query = e.target.value; sheet.innerHTML = sheetHTML(); bind(); });
    sheet.querySelectorAll('.sheet-recipe').forEach(row => row.addEventListener('click', () => { closeSheet(); addMeal(slot, row.dataset.id); }));
  }
  bind();
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
  const over = macros.kcal > targets.kcal;

  const view = el('div', 'view macros-view');

  const hero = el('div', `macros-hero ${over ? 'over-limit' : ''}`);
  hero.innerHTML = `
    <div class="macros-date">${formatDate(entry.date)}</div>
    <div class="macros-kcal-big ${over ? 'over' : ''}">${Math.round(macros.kcal)}</div>
    <div class="macros-kcal-sub">/ ${targets.kcal} kcal · ${Math.round((macros.kcal/targets.kcal)*100)}%</div>
    ${over ? `<div class="over-banner">⚠️ Dépassement de ${Math.round(macros.kcal - targets.kcal)} kcal</div>` : ''}
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
  const over = val > target;
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


// ──────────────────────────────────────────────
// js/recipes.js
// ──────────────────────────────────────────────

const FILTERS = [
  { key: 'all',    label: 'Tout'              },
  { key: 'dinner', label: '🍽️ Dîner'          },
  { key: 'lunch',  label: '🥗 Déjeuner'       },
  { key: 'side',   label: '🥦 Accompagnements' },
  { key: 'sweet',  label: '🍫 Desserts & Encas' },
];

function renderRecipes() {
  const app = document.getElementById('app');
  app.querySelector('.view')?.remove();

  const view = el('div', 'view recipes-view');

  const top = el('div', 'recipes-top');
  const search = el('input', 'search-bar');
  search.placeholder = '🔍  Rechercher une recette…';
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
          ${r.batch ? '<span class="rc-batch">📦 batch</span>' : ''}
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
const CATEGORIES = [
  { name: 'Viandes & Poisson', match: ['poulet','boeuf','steak','merguez','saucisse','thon','saumon','colin','merlu','poisson','dinde','bacon','anchois'] },
  { name: 'Oeufs & Laitages',  match: ['oeuf','fromage','ricotta','feta','lait','yaourt','parmesan'] },
  { name: 'Légumes & Fruits',  match: ['courgette','poivron','oignon','ail','tomate','carotte','brocoli','épinard','haricot','champignon','concombre','chou','salade','laitue','citron','banane','mangue','pomme','avocat','fruit','framboise','passion','gingembre','olive','romaine'] },
  { name: 'Féculents & Légumineuses', match: ['riz','pâte','quinoa','pain','flocon','avoine','lentille','pois chiche','semoule','tortilla','cracker','boudoir','biscuit'] },
  { name: 'Épicerie & Autres', match: [] },
];

function categorize(name) {
  const n = name.toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.match.some(m => n.includes(m))) return cat.name;
  }
  return 'Épicerie & Autres';
}

function buildList(dates) {
  const map = {};
  dates.forEach(date => {
    const entry = getEntry(date);
    ['lunch','dinner','sides','sweet'].forEach(slot => {
      (entry.meals[slot] || []).forEach(item => {
        const r = getById(item.id);
        if (!r) return;
        const s = item.servings || 1;
        r.ingredients.forEach(ing => {
          const key = ing.name.toLowerCase();
          if (!map[key]) map[key] = { name: ing.name, qty: 0, unit: ing.unit, cat: categorize(ing.name) };
          map[key].qty += ing.qty * s;
        });
      });
    });
  });
  return Object.values(map);
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
        <div class="shopping-title">🛒 Liste de courses</div>
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
      </div>
      <div class="shopping-list">
        ${items.length ? CATEGORIES.map(c => {
          const list = grouped[c.name];
          if (!list || !list.length) return '';
          list.sort((a,b)=>a.name.localeCompare(b.name,'fr'));
          return `
            <div class="shop-cat-title">${c.name}</div>
            ${list.map(item => {
              const key = item.name.toLowerCase();
              const isChecked = checked.includes(key);
              const qty = Math.round(item.qty * 10) / 10;
              return `<div class="shop-item ${isChecked ? 'done' : ''}">
                <div class="shop-check ${isChecked ? 'checked' : ''}" data-key="${key}"></div>
                <div class="shop-info">
                  <div class="shop-name">${item.name}</div>
                  <div class="shop-qty">${qty} ${item.unit}</div>
                </div>
              </div>`;
            }).join('')}`;
        }).join('') : `<div class="empty-shop">Aucun repas planifié.<br><br>Planifie ta semaine dans <strong>Semaine</strong>.</div>`}
      </div>
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
    view.querySelectorAll('.shop-check').forEach(box => box.addEventListener('click', () => {
      const key = box.dataset.key;
      const idx = checked.indexOf(key);
      if (idx > -1) checked.splice(idx, 1); else checked.push(key);
      saveChecked(checked);
      app.querySelector('.view')?.remove(); render();
    }));

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
  view.innerHTML = '<div class="history-header"><div class="history-title">📅 Historique</div></div>';

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
    const over = macros.kcal > targets.kcal;

    const day = el('div', 'history-day');
    day.innerHTML = `
      <div class="hday-header">
        <div class="hday-date">${formatDate(entry.date)}</div>
        <div class="hday-kcal ${over ? 'over' : ''}">${Math.round(macros.kcal)} kcal${over ? ' ⚠️' : ''}</div>
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
if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});

