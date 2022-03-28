# Les tests avec Angular

npm run test => app.component.spec.ts
Les tests unitaires utilisent : Karma + Jasmine

npm run e2e => app.e2e-spec.ts
Les tests end-to-end utilisent ( désactivés depuis angular 12) : Protractor

- Protractor est un Framework de test end-to-end utilisé par Angular et AngularJS
- Selenium est une librairie d'automatisation pour navigateur .
- Protractor s'appuie sur Selenium
- Selenium utilise ChromeDriver pour piloter Chrome
- Enfin "webdriver" Selenium communique avec les "navigateurs".

Vous devez utiliser chrome dans sa version 89 minimum.
Des erreurs peuvent survenir dans les tests end to end suivant la version de Chrome utilisée et de chromeDriver.

# Tests unitaires

npm run test

# Tests end to end

npm run e2e

# Modifier et vérifier

Effectuons le test simple de modification et de débuggage et le test de contrôle de code source.

- Débuggage.
  Toute modification entraine une recompilation du code.

Par exemple Modifier le fichier app.component.html

<p>Modifications : Here are some links to help you get started:</p>

La compilation est alors exécutée automatiquement et le navigateur se réactualise.

# Executer

npm run start

# Tester

http://localhost:4200/

# Vérification du code

- La commande ng lint exécute l’analyse statique du code source TypeScript.
  Angular utilise l’outil TSLint accessible à cette adresse https://palantir.github.io/tslint/

Cette commande a été désactivée à partir d'Angular 12.

Test du code source == npm run lint

# Déploiement

Tout ce que nous avons fait est bien sympathique.
Mais une application Web n'a d'intérêt que si nous la rendons accessible sur le Web.
C'est ce que l'on appelle le déploiement.
Nous allons voir comment le faire via deux méthodes de la plus simple à la plus compliquée.

Mais tout d'abord parlons compilation.

Comme nous l'avons vu précédemment le fichier package.json contient un certain nombre de scripts (ou commandes).

Le script qui nous intéresse est npm run build
Il permet de compiler notre application.

Ce script exécute la commande d'Angular CLI
ng Build

Sans rentrer dans les détails voilà comment ça fonctionne.
Via cette commande Angular utilise l'outil Webpack (un module bundler) pour créer le produit final.

L'exécution de cette commande va créer un répertoire dist.
Celui-ci contiendra ce que l'on peut appeler le produit final (ou livrable ou artefact).

C'est cette partie que l'on va déployer.

Les conseils donnés par Angular sont à l'adresse suivante
https://angular.io/guide/deployment

# Déploiement avec lite-server (sans VPS)

Le déploiement le plus simple est d'utiliser le serveur Http développé par John Papa.
Comment procéder ?

On installe la librairie lite-server en global avec npm
On exécute l'application en mode production

# Compilation du projet

npm run build

# Installation du serveur de développement lite-server

npm install -g lite-server

# Exécution de notre application

lite-server --baseDir="dist/angular-starter"

# Tester l'application dans notre navigateur avec l'url suivante

http://localhost:3000/

# Deploiement avec nginx (VPS)

Une solution plus complexe mais plus proche de la réalité.
Il nous faudra disposer d'un serveur virtuel ou VPS (Virtual private server).

Je vous conseille d'en acheter un chez un fournisseur de VPS.
Par exemple OVH ou Digital Ocean sont parmi les moins chers et les plus efficaces.

Les tutoriels suivants peuvent vous être utiles
Installer un serveur Ubuntu chez OVH
Installer Angular sur un serveur Ubuntu

Sur notre serveur (exemple d'un serveur avec ubuntu et l'adresse ip 192.168.100.1)

Installer nginx
Tester nginx
Copier notre répertoire dist sur /var/www/html
Tester le serveur

# installation de nginx sur le serveur

sudo apt-get --yes install nginx
sudo apt-get update

# Démarre le service nginx

sudo service nginx start

# Tester l'installation du serveur nginx

http://localhost:192.168.100.1/

# Copier le contenu du répertoire dist/angular-starter

# sur le serveur dans le répertoire /var/www/html/

# Tester l'application

http://localhost:192.168.100.1/
