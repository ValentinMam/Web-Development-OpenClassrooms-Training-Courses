# Mise à jour du package.json

Node.js est la plateforme pour développer notre application.
Node.js est basée sur l'utilisation de librairies ou dépendances.

Npm est le gestionnaire des librairies (packages en anglais)

La mise à jour d'une application et donc de ses librairies est une question périlleuse.

# Update or not update

Les librairies javascript sont constamment modifiées et mises à jour par leur concepteur.
Lorsqu'une nouvelle version est disponible elle porte le nom de release (sortie en anglais) et dispose d'un numéro spécifique.

Si la librairie est open-source vous pouvez voir les dernières versions disponibles en allant sur le dépôt correspondant sur Github puis allez sur Releases.

Par exemple les différentes versions d'Angular sont accessibles ici
https://github.com/angular/angular/releases

Le calendrier des mises à jour est ici
https://angular.io/guide/releases#release-schedule

In general, expect the following release cycle:

- A major release every 6 months

- 1-3 minor releases for each major release

- A patch release and pre-release (next or rc) build almost every week

- All major releases are typically supported for 18 months.

- 6 months of active support, during which regularly-scheduled updates and patches are released.

- 12 months of long-term support (LTS), during which only critical fixes and security patches are released.

VERSION | STATUS | RELEASED | ACTIVE ENDS | LTS ENDS
^13.0.0 | Active |Nov 04, 2021 | May 04, 2022 | May 04, 2023
^12.0.0 |LTS | May 12, 2021 | Nov 12, 2021 | Nov 12, 2022
^11.0.0 |LTS | Nov 11, 2020 | May 11, 2021 | May 11, 2022

Angular versions v2 to v10 are no longer under support.

# Comment faire ?

npm outdated

Cette commande vérifie le registre des dépendances pour vérifier si les packages installés sont à jour.
Elle nous fournit ainsi une liste que l'on peut contrôler.

Avant de vérifier les dépendances modifions le fichier package.json
Pour chaque dépendance indiquée supprimez le caractère ~ ou ^
Par exemple remplacez

"rxjs": "~7.4.0",
"tslib": "^2.3.1",
par

"rxjs": "7.4.0",
"tslib": "2.3.1",  
Puis réinstallez les dépendances avec npm install
Vous comprendrez pourquoi plus loin dans le paragraphe c'est parti pour la mise à jour.

Si je mets à jour le fichier package.json je me retrouve confronté à 3 cas de figure

1. Ca marche
   C'est pas tous les jours la fête mais depuis Angular 8 c'est de plus en plus souvent

2. Ca ne marche pas on essaie de debugger sans y passer trop de temps.
   Ca dépend de votre patience et du temps que vous avez devant vous

3. Ca marche pas et on attend.
   Souvent (mais pas toujours) Angular résout votre problème avec la mise à jour suivante.
   De toute façon ce n'est la peine d'attendre indéfiniment, il faudra bien trouver une solution.
   Ou alors on se retrouve avec AngularJS en 2022 et là on n'est pas dans le pétrin.

L'idéal est d'avoir un prototype d'application qui contienne suffisamment de fonctionnalités.
Vous pouvez être à-peu-près sûr que la mise à jour pourra s'effectuer sur la plupart de vos applications.
Bien sûr ça ne vous épargnera pas d'optimiser votre CI/CD et de veiller à vos tests.

Pour l'exemple nous allons utiliser cette méthode sur notre application angular-starter.

Le fichier package.json contient les différentes dépendances de votre projet.
Les dépendances sont en quelque sorte toutes les librairies que vous avez décidé d'utiliser dans votre projet.
Elles sont gérées par npm (node package manager) le gestionnaire de dépendances de Node.js.

Concernant les dépendances et leur version la documentation npm est la suivante
https://docs.npmjs.com/files/package.json#dependencies

Les spécificateurs de version sont nombreux.

version Doit correspondre à la version exactement
~version "Approximativement équivalente à la version"
^version “Compatible avec la version”

Nous opterons quant à nous pour le premier spécificateur "version", qui est le plus simple, le plus explicite mais aussi le plus restrictif.

Nous allons mettre à jour le fichier package.json avec les dernières dépendances

Mise à jour du fichier Package.json pour Angular

- Pour contrôler les dépendances à mettre à jour lancez la commande
  npm outdated

- Dans certains cas toutes les dépendances peuvent être mises à jour à l'exception de typescript

Angular 13.0.0 accepte par exemple TypeScript> = 4.0.0 and <4.4.0

- Dans le cas d'Angular 13.1.1 toutes les dépendances peuvent être mises.

​​​​​​​- Modifiez le fichier package.json comme suit puis executez le script
npm install

package.json
"dependencies": {
"@angular/animations": "13.1.1",
"@angular/common": "13.1.1",
"@angular/compiler": "13.1.1",
"@angular/core": "13.1.1",
"@angular/forms": "13.1.1",
"@angular/platform-browser": "13.1.1",
"@angular/platform-browser-dynamic": "13.1.1",
"@angular/router": "13.1.1",
"rxjs": "7.4.0",
"tslib": "2.3.1",
"zone.js": "0.11.4"
},
"devDependencies": {
"@angular-devkit/build-angular": "13.1.2",
"@angular/cli": "13.1.2",
"@angular/compiler-cli": "13.1.1",
"@types/jasmine": "3.10.2",
"@types/node": "17.0.2",
"jasmine-core": "3.10.1",
"karma": "6.3.9",
"karma-chrome-launcher": "3.1.0",
"karma-coverage": "2.1.0",
"karma-jasmine": "4.0.1",
"karma-jasmine-html-reporter": "1.7.0",
"typescript": "4.5.4"
}
Il suffit alors de tester tous les scripts pour vérifier que les mises à jour ont fonctionné.
