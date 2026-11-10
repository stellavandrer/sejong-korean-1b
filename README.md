# Sejong Korean 1A, 1B, 2A et 2B : révisions 한국어

Application web de révision des manuels **Sejong Korean 1A** (leçons 1 à 10), **Sejong Korean 1B** (leçons 1 à 12), **Sejong Korean 2A** (leçons 1 à 12) et **Sejong Korean 2B** (leçons 1 à 12), en français.

On choisit le manuel dans le panneau « Je révise » en haut de l'écran. Chaque manuel garde **sa propre progression** (série, XP, mots acquis, examens) : passer de l'un à l'autre n'efface rien.
Projet d'élèves, **non officiel** : il n'est pas affilié aux éditeurs du manuel.

## Navigation

Cinq onglets en bas de l'écran, comme dans une application. Chaque écran a sa propre adresse (`#quiz`, `#dict`…) : le bouton « retour » du navigateur ou du téléphone ramène à l'écran précédent.

- **Accueil** : objectif du jour, série, XP, compte à rebours avant l'examen (date à saisir), **mot du jour** avec une phrase d'exemple, astuce du jour et bouton « Continuer ».
- **Exercices** : en haut, le bloc **« Pour toi aujourd'hui »** propose la révision du jour, la leçon la plus faible (d'après le dernier examen blanc ou tes erreurs) et ton dernier exercice ; en dessous, toutes les activités rangées par catégorie.
- **Fin d'exercice** : score, XP gagnés, mots acquis, série, objectif du jour, et un bouton vers l'exercice suivant.
- **Cours** : cours de grammaire du manuel choisi, une leçon à la fois, avec conseils et pièges à éviter, puis un quiz de grammaire et un exercice de mots en ordre.
- **Progrès** : mots acquis, badges (un par leçon), records, liste des mots difficiles.
- **Réglages** : confort de lecture, export et import de la progression, effacement des données.

Le bouton « Je révise » en haut ouvre un panneau pour choisir le manuel (1A, 1B, 2A ou 2B) et les leçons (une moitié du manuel, tout, une leçon, ou « Mots difficiles »).

## Exercices

- **Apprendre** : cartes (glisser à droite = je savais), fiche surlignable avec l'audio de chaque mot, une recherche et des raccourcis vers chaque leçon.
- **S'entraîner** : quiz, phrases à compléter, intrus, syllabes, écriture (mots et phrases entières), paires.
- **Écoute et prononciation** :
  - **Écoute** : entendre un mot, trouver son sens ;
  - **Dictée** : entendre un mot ou une phrase et l'écrire en coréen ;
  - **Compréhension** : entendre une phrase sans la voir et choisir sa traduction ;
  - **Prononciation** : 40 mots pour s'entraîner aux règles (liaison, aspiration, nasalisation, consonnes tendues, finales doubles…), avec l'explication de la règle ;
  - **Répète et compare** : s'enregistrer avec le micro, puis réécouter le modèle et sa propre voix. L'enregistrement reste sur l'appareil, il n'est ni envoyé ni gardé.
- **Défis** : chrono de 60 secondes et **examen blanc** :
  - 30 questions en 4 parties : vocabulaire (12), grammaire (8), écoute (6, chaque son s'écoute 2 fois au maximum), lecture (4) ;
  - 20 minutes, ou sans chrono si l'option « Masquer le mode Chrono » est cochée ;
  - on peut revenir en arrière, changer une réponse, marquer une question et voir la vue d'ensemble ;
  - le bilan donne la note sur 20, le score par partie, les leçons à revoir en priorité, les corrections avec l'audio et la comparaison avec l'examen précédent.

  Ce n'est pas le format officiel de l'examen, seulement un entraînement.
- **Révision du jour** : répétition espacée. Chaque mot revient le lendemain, puis 2, 4, 8 et 16 jours après tant qu'il est réussi.

## Audio

Chaque mot (1A et 1B), chaque phrase d'exemple, chaque exemple de grammaire et chaque mot de l'exercice de prononciation a son fichier audio : 1 566 fichiers MP3 dans le dossier `audio/` (24 Mo).

- Un bouton d'écoute apparaît à côté du coréen : cartes, quiz, fiche (à côté de chaque mot), phrases, cours, mot du jour, corrections.
- Dans les exercices d'écoute, un bouton « Plus lentement » rejoue le son à 70 % de la vitesse.
- Le coréen est lu automatiquement après chaque réponse. On peut couper la lecture automatique dans **Réglages** ; les boutons restent disponibles.
- Pendant l'examen blanc, rien n'est lu (pour ne pas souffler la réponse) ; le son revient sur la page de résultats.

Ce sont des **voix de synthèse neuronales** (Microsoft Edge TTS : SunHi pour les mots, InJoon pour les phrases), pas des enregistrements de personnes. La prononciation est soignée mais peut parfois différer de celle du professeur : en cas de doute, fie-toi à ton cours.

## Accessibilité

Pensé d'abord pour le téléphone : zones à toucher d'au moins 44 px, contrastes d'au moins 4,5:1 en clair, sombre et contraste élevé.


Polices Atkinson Hyperlegible et Lexend, taille du texte, interligne, espacement des lettres, thème clair / sombre / contraste élevé, option pour masquer le Chrono.

## Publication sur GitHub Pages

1. Dépose `index.html` et le dossier `audio/` à la racine du dépôt (le code tient dans `index.html`, les sons sont dans `audio/`).
2. Dans **Settings → Pages**, choisis la branche `main` et le dossier `/ (root)`.
3. Le site est en ligne après une ou deux minutes.

Seules les polices de lecture se chargent depuis Internet ; sans connexion, la police standard est utilisée. L'audio est servi par le site lui-même.

## Données et vie privée

- Aucun compte, aucun serveur : la progression est enregistrée **dans le navigateur de chacun**.
- Elle n'est pas synchronisée automatiquement. Pour la changer d'appareil, utilise **Réglages → Exporter / Importer**.
- Rien n'est envoyé ni collecté.

## Contenu

- **1B** : le vocabulaire vient de la fiche distribuée en cours.
- **1A** : le vocabulaire (390 mots) suit la liste du dictionnaire officiel du manuel 1A de l'Institut Roi Sejong, traduite en français. Pour les jours du mois, seule une sélection est reprise (le 1er, le 2, le 3, le 5, le 15, le 20, le 30, le 31).
- **2A** : le vocabulaire (223 mots) suit la liste du dictionnaire officiel du manuel 2A, traduite en français ; les 24 points de grammaire sont expliqués en français avec nos propres exemples.
- **2B** : le vocabulaire (240 mots) suit la liste du dictionnaire officiel du manuel 2B, traduite en français ; les 24 points de grammaire sont expliqués en français avec nos propres exemples.
- Les cours, conseils, exercices et phrases d'exemple sont rédigés par des élèves d'après le plan du manuel (King Sejong Institute) : ils ne reprennent pas le texte du livre et peuvent contenir des erreurs. En cas de doute, le livre et le professeur font foi.
