# BackEnd

## node_modules

Le dossier node_modules est utilisé pour enregistrer tous les packages téléchargés à partir de NPM sur votre ordinateur pour le projet JavaScript que vous possédez.
Il est toujours recommandé aux développeurs de faire une nouvelle installation avec npm install chaque fois qu'ils téléchargent un projet JavaScript sur leur ordinateur

## .gitignore

Le fichier .gitignore sert à ignorer des fichiers.
Il est utile lors d'un commit / push sur la plateforme github par exemple.

## images

Le dossier images sert à stocker les images du projet sur lequel vous travaillez.
Plusieurs cas : vous avez ajouté l'image ou un tiers à ajouté l'image

## .env

Le fichier .env sert à stocker nos variables d'environnement.
Cela peut etre un port pour un serveur, des identifiants de base de données que vous voudriez garder secret...
retrouver un exemple dans .env_example

### A savoir

- require("dotenv").config(); dans l'ensemble des fichiers ou ces variables sont utilisées

## server.js

Le fichier server.js sert à créer un serveur. Il faut :

- définir un port valide (nombre entier = parseInt)
- rechercher et corriger les erreurs si besoin (port déjà utilisé, non accessible...)
- écouter le port...

### A savoir

- server.js est lié au fichier app.js

## app.js

Le fichier app.js est un des fichiers centraux du projet.
Il va établir la connexion avec la base de données, définir les types de requetes utilisées (verbs: POST, PUT...)...

### A savoir

- app.js est lié aux fichiers se trouvant dans le dossier routes (sauce, user...)

## routes

Les fichiers routes servent à définir le "chemin" à suivre (interactions possibles ? à quel "endroit" ?...).
Get ? Post ? Put ? Delete ?

### A savoir

- les fichiers routes sont liés aux fichiers controllers éponymes (routes/user et controllers/user)

- les fichiers routes sont liés aux fichiers middleware utilisés dans ces différentes routes (routes/user n'utilise pas forcément les memes middlewares que routes/sauces)

## models

Les fichiers models définissent un cadre (schéma) exemple : Un schéma de profil utilisateur ou user

- Pour créer un profil il nous faut deux choses minimum (une adresse mail et un mot de passe)
  C'est dans ce schéma qu'on va définir que l'adresse mail doit etre unique, requis, de type string ou chaine de caractères...

### A savoir

- Les fichiers models peuvent exiger l'installation de certains "plugins"

## controllers

Les fichiers controllers servent à configurer les interactions possibles (requetes)
Get ? Post ? Put ? Delete ?

### A savoir

- Les fichiers controllers sont liés aux fichiers models

## middleware

Les fichiers middleware peuvent etre vus comme des fonctions qui vont etre appelés selon le cas de figure exemple :

- middleware auth nécéssaire pour accéder à un certaines fonctionnalités (poster quelque chose, intéragir...)

### A savoir

- Les fichiers middleware sont liés aux fichiers routes dans lesquels ils sont utilisés
