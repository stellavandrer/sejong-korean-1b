# Sejong Korean 1B : révisions 한국어

Application web de révision du manuel **Sejong Korean 1B** (leçons 1 à 12), en français.
Projet d'élèves, **non officiel** : il n'est pas affilié aux éditeurs du manuel.

## Navigation

Cinq onglets en bas de l'écran, comme dans une application. Chaque écran a sa propre adresse (`#quiz`, `#dict`…) : le bouton « retour » du navigateur ou du téléphone ramène à l'écran précédent.

- **Accueil** : objectif du jour, série, XP, compte à rebours avant l'examen (date à saisir), **mot du jour** avec une phrase d'exemple, astuce du jour et bouton « Continuer ».
- **Exercices** : toutes les activités, rangées par catégorie.
- **Cours** : cours de grammaire des leçons 1 à 12, avec conseils et pièges à éviter, puis un quiz de grammaire et un exercice de mots en ordre.
- **Progrès** : mots acquis, badges (un par leçon), records, liste des mots difficiles.
- **Réglages** : confort de lecture, export et import de la progression, effacement des données.

Le sélecteur en haut permet de choisir les leçons à réviser (1–7, 8–12, tout, une leçon, ou « Mots difficiles »).

## Exercices

- **Apprendre** : cartes (glisser à droite = je savais), fiche surlignable, liste avec recherche.
- **S'entraîner** : quiz, phrases à compléter, intrus, syllabes, écriture (mots et phrases entières), paires.
- **Écoute et prononciation** :
  - **Écoute** : entendre un mot, trouver son sens ;
  - **Dictée** : entendre un mot ou une phrase et l'écrire en coréen ;
  - **Compréhension** : entendre une phrase sans la voir et choisir sa traduction ;
  - **Prononciation** : 40 mots pour s'entraîner aux règles (liaison, aspiration, nasalisation, consonnes tendues, finales doubles…), avec l'explication de la règle ;
  - **Répète et compare** : s'enregistrer avec le micro, puis réécouter le modèle et sa propre voix. L'enregistrement reste sur l'appareil, il n'est ni envoyé ni gardé.
- **Défis** : chrono de 60 secondes et **examen blanc** de 15 minutes (20 mots + 10 questions de grammaire) avec une note sur 20.
- **Révision du jour** : répétition espacée. Chaque mot revient le lendemain, puis 2, 4, 8 et 16 jours après tant qu'il est réussi.

## Audio

Chaque mot (285), chaque phrase d'exemple, chaque exemple de grammaire et chaque mot de l'exercice de prononciation a son fichier audio : 422 fichiers MP3 dans le dossier `audio/` (6 Mo).

- Un bouton d'écoute apparaît à côté du coréen : cartes, quiz, fiche (à côté de chaque mot), phrases, cours, mot du jour, corrections.
- Dans les exercices d'écoute, un bouton « Plus lentement » rejoue le son à 70 % de la vitesse.
- Le coréen est lu automatiquement après chaque réponse. On peut couper la lecture automatique dans **Réglages** ; les boutons restent disponibles.
- Pendant l'examen blanc, rien n'est lu (pour ne pas souffler la réponse) ; le son revient sur la page de résultats.

Ce sont des **voix de synthèse neuronales** (Microsoft Edge TTS : SunHi pour les mots, InJoon pour les phrases), pas des enregistrements de personnes. La prononciation est soignée mais peut parfois différer de celle du professeur : en cas de doute, fie-toi à ton cours.

## Accessibilité

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

- Le vocabulaire vient de la fiche distribuée en cours.
- Les cours, conseils, exercices et phrases d'exemple sont rédigés par des élèves d'après le plan du manuel (King Sejong Institute) : ils ne reprennent pas le texte du livre et peuvent contenir des erreurs. En cas de doute, le livre et le professeur font foi.
