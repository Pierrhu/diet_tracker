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

export const PROTOCOLS = [
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

export function getProtocol(id) {
  return PROTOCOLS.find(p => p.id === id) || PROTOCOLS[3];
}

// profile = { age, height (m), weight (kg), bodyfat (%) }
export function computeBase(profile) {
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
export function computeTargets(profile, protocolId, phaseIndex = 0) {
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
export function computeAllPhases(profile, protocolId) {
  const protocol = getProtocol(protocolId);
  return protocol.phases.map((ph, i) => ({
    label: ph.label,
    offset: ph.offset,
    targets: computeTargets(profile, protocolId, i),
  }));
}

// Profil persisté
const DEFAULT_PROFILE = { age: 24, height: 1.85, weight: 97, bodyfat: 20 };

export function getProfile() {
  const saved = localStorage.getItem('diet_profile');
  if (saved) { try { return { ...DEFAULT_PROFILE, ...JSON.parse(saved) }; } catch {} }
  return { ...DEFAULT_PROFILE };
}
export function saveProfile(p) { localStorage.setItem('diet_profile', JSON.stringify(p)); }

export function getSelectedProtocol() {
  return localStorage.getItem('diet_protocol') || 'P4';
}
export function saveSelectedProtocol(id) { localStorage.setItem('diet_protocol', id); }

export function getSelectedPhase() {
  return parseInt(localStorage.getItem('diet_phase') || '0');
}
export function saveSelectedPhase(i) { localStorage.setItem('diet_phase', String(i)); }

export { DEFAULT_PROFILE };
