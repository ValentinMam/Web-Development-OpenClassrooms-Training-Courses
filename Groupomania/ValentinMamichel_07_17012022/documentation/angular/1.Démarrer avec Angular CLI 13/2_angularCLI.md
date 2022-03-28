Angular CLI = Angular Command Line Interface / L' homme à tout faire d'Angular

- Angular version 13.1.1
- Angular CLI version 13.1.2

Les dernières versions de ces outils sont disponibles ci-dessous

- https://github.com/angular/angular/releases

- https://github.com/angular/angular-cli/releases

La procédure d'installation est détaillée sur le site officiel d'Angular https://angular.io/cli

# Désinstallation d'angular-cli

Si une version précédente était installée sur votre poste vous pouvez la désinstaller avec la commande suivante
npm uninstall -g @angular/cli

Angular CLI est une librairie (ou package).
Nous allons l'installer avec npm le gestionnaire de node.js

Vous pouvez installer une version spécifique d'angular ou installer par défaut la dernière disponible.

# Installation d'angular-cli dernière version disponible

npm install -g @angular/cli

# Installation d'angular-cli version spécifique

npm install -g @angular/cli@13.1.2

# Test de version installée

ng --version

Angular CLI est un outil pour initialiser, développer et maintenir des applications Angular.

Le site officiel est ici https://cli.angular.io/
Liste des commandes Angular CLI https://github.com/angular/angular-cli/wiki

Angular CLI nous offre un certain nombre de commandes.
Ces commandes nous évitent d'effectuer des tâches répétitives.

La première commande que nous allons utiliser est ng new ou ng n

- Elle va créer notre application.
- Elle va générer tous les fichiers nécessaires à cette application.
- Elle va évidemment suivre les best practices préconisées par l'équipe de Google.

- On choisit le nom de notre application
- On tape la commande ng new avec les paramètres correspondants
- Répondre non pour le routing
- Choisir le type CSS
- On génère le projet (cette partie prend quelques minutes)

- On se positionne dans le projet
- On exécute le projet

Ce qui donne

# Générer un projet appelé angular-starter avec choix manuel des options

ng new angular-starter

# Générer un projet appelé angular-starter avec options par défaut

ng new angular-starter --defaults

# Se positionner dans le projet

cd angular-starter

# Exécuter

ng serve

# Exécuter et lancer automatiquement l'application dans le navigateur

ng serve -o
Angular CLI via la commande ng serve execute le projet sur un port par défaut (4200).

Il ne reste qu'à tester le fonctionnement dans un navigateur en lançant l'url suivante.

# Tester

http://localhost:4200

- npm run start : Exécute l'application en mode développement.
- npm run build : Compile l'application dans le répertoire dist.
- npm run test : Exécute les tests unitaires en utilisant le framework Karma.

La commande ng eject (permettant de générer la configuration webpack) a été désactivée.
Elle a été supprimée depuis la version 8.
Projet exemple de gestion du format de configuration
https://github.com/manfredsteyer/ngx-build-plus

En mode développement si nous voulons personnaliser le port il suffit de modifier le script start dans le fichier package.json.
Par exemple pour utiliser le port 4201 le script serait le suivant "start": "ng serve --port 4201"

Nous laisserons le port 4200 modifiable à volonté pour la suite du tutoriel.

package.json
"scripts": {
"ng": "ng",
"start": "ng serve --port 4200",
"build": "ng build",
"watch": "ng build --watch --configuration development",
"test": "ng test"
},
