# Optimisation et dépendances

1. Linter, minifier, bundler, transpiler
   Le linter est un programme qui va analyser notre code et détecter les erreurs de syntaxe, les variables non utilisées, les variables qui n'existent pas, la mauvaise organisation du code, le non-respect des bonnes pratiques d'écriture de code...JSLint, ESLint.
   Un minifier est donc un programme responsable de la minification de votre code. C'est-à-dire qu'il va essayer de rendre votre code le plus léger possible en retirant les espaces et retours à la ligne inutiles, en renommant vos variables avec des noms plus courts, en supprimant le code non utilisé, en supprimant les commentaires, en optimisant certains bouts de code pour les réécrire avec une syntaxe plus légère, etc. node-minify, UglifyJS.
   De la même manière qu'il est important d'avoir un code le plus léger possible, il est aussi important de réduire au maximum le nombre de fichiers qui composent votre code. C'est donc le rôle du bundler. Il va se charger de packager votre code pour qu'il tienne dans un seul fichier. Ainsi, vous continuez à coder dans plusieurs fichiers pour plus de clarté dans votre code, mais le navigateur n’aura besoin de charger d’un seul fichier lorsqu’un visiteur ira sur votre site. Webpack.
   Le langage JavaScript évolue. À l'heure actuelle, nous en sommes à la version ECMAScript 2018 (ES9), mais déjà la version ECMAScript 2015 (ES6) n'est plus supportée dans son intégralité tous les navigateurs. Et c'est bien dommage, car les nouvelles versions peuvent offrir des choses intéressantes ( async / await par exemple).
   Depuis la publication de cette mise à jour, JavaScript a sorti la version ECMAScript 2021 (ES12). À priori la version ECMAScript 2018 (ES9) reste supportée par la plupart des navigateurs. Mais alors comment coder avec la dernière version de JavaScript tout en étant compatible avec tous les navigateurs ? Avec un transpiler ! Babel.

2. NPM
   NPM est un gestionnaire de paquets (package manager en anglais). C'est un programme qui vous permet d'installer très facilement des modules pour le JavaScript. Un module est un bout de code écrit par quelqu'un et qui résout une problématique commune à beaucoup de développeurs : comme un parser XML, un générateur d'uuid (des identifiants uniques), un router, un framework de rendu HTML, etc..

• NPM est compris dans Node.js, qui est un programme permettant d'écrire des applications en JavaScript. Il suffit d'installer Node.js afin de profiter de NPM.
• NPM nécessite un fichier nommé package.json afin d'avoir des informations sur votre projet : son nom, sa version, les modules à installer, etc.Vous pouvez le créer manuellement ou bien utiliser la commande suivante pour le créer plus facilement :
npm init
• Pour installer un nouveau module c'est très simple, il suffit de faire :
npm install <module_name> --save-dev
--save-dev signifie que l'on souhaite que NPM sauvegarde cette dépendance dans le fichier package.json en tant que dépendance de développement. Il existe aussi --save qui ajoute la dépendance en tant que dépendance de production.Lorsque vous clonez votre projet pour la première fois depuis un repository git, vous pourrez exécuter :
npm install
Cette commande va installer toutes les dépendances de votre projet qui ont été ajoutées dans le fichier package.json .

3. Compilation et exécution (webpack…)
   Une fois que vous avez exécuté npm init dans votre répertoire pour initialiser votre projet avec NPM, nous pouvons mettre en place les outils.

• Installation de Webpack
npm install webpack webpack-cli --save-dev

Une base de code très simple. Voici les fichiers dont nous aurons besoin :
project
|- package.json
|- index.html
|- src
|- index.js
|- query.js
package.json
{
"name": "my-project",
"version": "1.0.0",
"description": "",
"private": true,
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC",
"devDependencies": {
"webpack": "^4.21.0",
"webpack-cli": "^3.1.2"
},
"dependencies": {
}
}

index.html

<!doctype html>
<html>
<head>
    <title>My project</title>
</head>
<body>
    <script src="./dist/app.bundle.js"></script>
</body>
</html>
src/index.js
import retrieveContent from './query.js';

async function showContent() {
try {
const content = await retrieveContent();

    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);

} catch (e) {
console.log('Error', e);
}
}

showContent();
src/query.js

export default async function retrieveContent() {
const url = "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1";

const response = await fetch(url);
return response.json();
}

• Nous allons créer un fichier webpack.config.js à la racine du projet. C'est le fichier qui servira de configuration à Webpack pour savoir comment il doit compiler.
webpack.config.js
const path = require('path');

module.exports = {
mode: "production",
entry: {
app: "./src/index.js"
},
output: {
filename: "[name].bundle.js",
path: path.resolve(\_\_dirname, "dist")
}
};
Ce fichier nous indique principalement que Webpack va se servir de notre ./src/index.js comme point d'entrée de notre application et bundler notre code dans un fichier final : ./dist/app.bundle.js ( [name] étant une variable qui sera remplacée ici par app , car c'est le nom que l'on a indiqué pour notre fichier index.js ).
• Avec notre fichier de configuration prêt, il ne nous reste plus qu'à exécuter Webpack. Pour cela, nous allons utiliser une des fonctionnalités de NPM : les commandes.
Nous allons modifier le fichier package.json pour ajouter dans les "scripts": {....} la ligne suivante :
"scripts": {
"test": "...",
"build": "webpack"
}
Tout ce qui se trouve dans scripts peut être exécuté avec la commande npm run <script_name> . Ainsi, nous pouvons exécuter npm run build qui va exécuter la commande webpack .
Pourquoi ne pas exécuter directement la commande webpack , me direz-vous ? Eh bien, parce qu'en réalité cette application se trouve dans le dossier ./node_modules/.bin/webpack . Or, l'avantage de NPM est qu'il va automatiquement chercher dans ce dossier pour exécuter des commandes, ainsi on s'épargne le chemin entier
• Nous pouvons donc compiler un projet avec :
npm run build
Si tout se passe bien, un fichier app.bundle.js devrait être généré dans le dossier dist/ . Notre projet a bien été packagé en un seul fichier, alors que nous en avions 2 à l'origine (index.js et query.js ). Alors, par quelle magie est-ce que Webpack a su où aller chercher tous nos fichiers à partir de notre fichier index.js ?
Grâce aux import et export . Ces 2 mots clés permettent respectivement d'importer un autre fichier (qui est appelé un module) et d'exporter des choses (fonctions, variables...).
Nous pouvons, en effet, voir que dans notre fichier index.js , nous avons importé le module query.js sous le nom retrieveContent. Et dans notre fichier query.js , nous pouvons voir que nous avons exporté la fonction retrieveContent (ce qui la rend disponible à l'import). Ainsi, quand Webpack analyse votre code, il retrouve toutes ces dépendances et se crée un graph en interne afin d'être capable de tout remettre dans l'ordre dans un seul fichier.
Mais ce n'est pas encore suffisant. En effet, nous utilisons async et await qui sont apparus dans une version récente de JavaScript que tous les navigateurs ne supportent pas encore. Ainsi, en fonction du navigateur, le code affichera une erreur. De quoi avons-nous besoin alors ? D'un transpiler afin de rendre notre code JavaScript compatible avec les navigateurs les moins récents !

• Afin d'utiliser Babel, nous allons devoir l'installer. Mais nous aurons aussi besoin d'installer le loader Babel qui permet de l'intégrer à Webpack. Il est en effet possible d'étendre les capacités de Webpack avec des plugins et des loaders.
npm install --save-dev babel-loader @babel/core @babel/preset-env babel-polyfill
Il va falloir ajouter Babel à la configuration de Webpack. Pour cela, il faut y ajouter ce qu'on appelle des rules . Les rules sont des règles de Webpack indiquant les loaders à utiliser pour les types de fichiers que l'on souhaite. Cela veut dire que dès que l'on va importer un module dans notre code, Webpack va regarder dans la liste des rules s'il y en a une qui correspond à ce type de fichier, et il va lui appliquer les loaders qui correspondent.
Dans notre cas, nous voulons exécuter Babel pour tous les fichiers JavaScript de notre projet (sauf ceux qui se trouvent dans le dossier node_modules , car ce sont les dépendances NPM et nous ne sommes pas censés modifier leur code).
webpack.config.js
const path = require('path');

module.exports = {
mode: "production",
entry: {
polyfill: "babel-polyfill",
app: "./src/index.js"
},
output: {
filename: "[name].bundle.js",
path: path.resolve(\_\_dirname, "dist")
},
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
options: {
presets: ["@babel/preset-env"]
}
}
}
]
}
};
Vous pouvez passer des options aux loaders. Ainsi, pour Babel, vous pourriez lui demander de charger d'autres plugins pour gérer des syntaxes qui ne sont encore que des propositions pour de futures versions de JavaScript. Ici, nous chargeons le preset de base qui va nous permettre de transpiler notre code.
Vous remarquerez aussi que nous avons ajouté une entrée dans l'objet entry : polyfill: "babel-polyfill" . Cela veut dire que lorsque nous compilons notre code, deux fichiers vont être générés : notre code depuis notre fichier index.js et le polyfill de Babel. Le polyfill permet à Babel d'apporter des modifications au code lors de son exécution. Cela peut être nécessaire pour certaines choses, et c'est le cas de async / await . Afin de prendre en compte ce fichier de polyfill, il va falloir mettre à jour le fichier index.html afin de le charger aussi (avant notre code) :
index.html

<!doctype html>
<html>
    <head>
        <title>My project</title>
    </head>
    <body>
        <script src="./dist/polyfill.bundle.js"></script>
        <script src="./dist/app.bundle.js"></script>
    </body>
</html>
Avec ça, tous les navigateurs devraient afficher la page et exécuter correctement le code généré par  npm run build .

• Webpack serve

Nous avons maintenant un environnement optimisé qui vous permet :
De minifier votre code ;
De packager votre code ;
De séparer très facilement votre code en plusieurs fichiers afin de bien l'organiser ;
D'utiliser très facilement des bibliothèques développées par la communauté grâce à NPM ;
De transpiler votre code pour pouvoir utiliser les versions next gen de JavaScript ;
Que demander de plus ?
Un serveur pour tester votre code et qui recharge automatiquement votre navigateur dès que vous modifiez votre code ?
• C'est ce que webpack serve permet de faire. Il faut tout d'abord installer le module :
npm install webpack-serve --save-dev
• Ensuite, je vous conseille d'ajouter une nouvelle commande au fichier package.json :
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"build": "webpack",
"start": "webpack serve"
}
start est une commande un peu spéciale car elle est exécutée avec un simple npm start (vous noterez l'absence de run après npm ).
• Enfin, webpack serve va considérer que les fichiers générés par Webpack sont à la racine du server, il nous faut donc mettre à jour notre fichier index.html :
index.html

<!doctype html>
<html>
    <head>
        <title>My project</title>
    </head>
    <body>
        <script src="/polyfill.bundle.js"></script>
        <script src="/app.bundle.js"></script>
    </body>
</html>
•	Une fois que tout ça est fait, il suffit de lancer le serveur de développement :
npm start
La commande indique que l'application est disponible à l'adresse http://localhost:8080/. Il suffira de vous y rendre pour voir votre application.Tant que cette commande est active, toute modification du code source activera Webpack qui recompilera le code automatiquement et rafraîchira le navigateur, montrant ainsi vos modifications.
