### Sommaire

# Système 7-1

# Installez Sass sur votre machine

# Intégrez les types de données Sass (listes, maps)

# Utilisez les boucles dans Sass

# Responsive

# Autoprefixer : code adapté à tous les navigateurs

---

# Système 7-1

7 directories thématiques pour ranger vos fichiers, qui sont regroupés dans le “1” : un fichier .scss unique se compilant sous forme de feuilles de style CSS pour votre site.

1. base/ contient les fichiers qui définissent les fondations de votre site( police de caractères, box-sizing)
2. utils/, vous rangez vos variables, fonctions, mixins et les %placeholders
3. layouts/ blocs BEM qui contiennent ce qui est réutilisable (header, footer)
4. components/ blocs BEM qui sont plus indépendants (les boutons).
5. pages/ contient les blocs de code qui ne s’appliquent qu’à une seule page.
6. themes/, c’est ici que vous stockez le code thématique (noel)
7. vendors/ tout CSS venant de l’extérieur (bootstrap)

• VSCode : mkdir suivi du nom du directory que vous souhaitez créer.
• Les fichiers individuels font tous partie d’une codebase globale, du coup Sass les appelle des partiels. (\_).
• @import :où importer ces nouvelles variables.@import "./utils/variables";
• L’ordre dans lequel vous importez vos partiels dans le fichier principal est l’ordre dans lequel Sass compilera tout ce qu’ils contiennent.
Utils (V / F/ M / P) ; Vendors ; Base ; Composants ; Layout ; Pages ; Thèmes
Le fichier main.scss ne doit contenir que des imports. Les ensembles de règles sont eux aussi rangés dans leurs propres partiels

# Installez Sass sur votre machine

Il existe de nombreuses manières pour installer Sass sur votre machine.

1. Installez NodeJS sur votre ordinateur
   • Page NodeJS et téléchargez la LTS actuellement la 14.16.1. (Lors de l’installation de NodeJS, il est important de laisser “npm packager manager” et “Add to PATH” cochés.)
   • Vérifier si Node est bien installé et de connaitre sa version + Npm est bien installé et de connaitre sa version node --version npm --version
   • Installation de Sass avec la commande npm -g install sass . (ou npm install sass)
2. Initialisez un fichier package.json
   • Initialiser un fichier npm package.json.
   package.json est un fichier qui stocke les informations sur votre projet, c’est un manuel d’utilisation pour que npm puisse réassembler et faire fonctionner votre site.

Le package.json liste les packages nécessaires pour faire marcher votre propre code, qui sont appelés des dépendances. Aussi appelés librairies, ce sont des collections de code que vous pouvez utiliser pour exécuter votre propre code, Vous pouvez aussi installer celles d’autres personnes.(bootstrap…)

3. Créer un fichier package : npm init
   • Remplissez les champs comme vous le souhaitez. Entrer pour accepter. Un fichier package.json est apparu !
4. Installez Sass npm install sass -g (ou npm install sass)
   • npm est une interface de ligne de commande qui est intégrée dans le framework du serveur node.js. Il installe des packages et vous permet d’exécuter des scripts et de gérer les dépendances.
   • install est la commande npm que vous êtes en train d’exécuter : elle téléchargera et installera les packages indiqués.
   • -g s’appelle un flag (ou drapeau en français). Cela indique à nmp d’installer le package globalement, c’est-à-dire sur l’ensemble de votre machine, plutôt que de l’installer seulement pour votre projet. Vous n’aurez plus jamais à installer Sass !
   • Pour vérifier que vous avez bien installé Sass dans votre système, tapez sass --version dans le terminal :sass –version
5. Vous avez maintenant défini un script  
   • sass --watch ./sass/main.scss:./public/css/style.css
   • sass indique à npm où trouver le script à exécuter ;
   • --watch (observer, en anglais) est un flag (ou une option) que npm utilise pour trouver d’éventuels changements dans le fichier Sass. En d’autres termes, il observe si un changement opère et s’il en voit, il recompilera et mettra à jour le fichier CSS. Sans le flag watch, il vous faudrait faire tourner le script à chaque fois que vous sauvegardez votre fichier. Mais grâce à lui, la mise à jour se fera automatiquement tant que le script tourne dans votre terminal ;
   • ./sass/main.scss indique au script situé dans node-sass où trouver le fichier Sass à compiler ;
   • les deux points séparent le chemin source du chemin de destination ;
   • ./css/style.css indique au script l’endroit où compiler le CSS et comment le nommer.
6. Lancer Sass : npm run sass
   • la ligne de commande indique le contenu du script, puis compile main.scss en CSS
   • Tant que vous n’interrompez pas le processus, le script attendra et sera à l'affût de tout changement à compiler.
   • Si tout a fonctionné comme prévu, la ligne de commande va repérer le changement puis nous indiquera qu’elle a recompilé le CSS en vert
   • Mais si vous faites une erreur, par exemple en tapant une faute de frappe intentionnelle, Sass enverra une erreur à la ligne de commande

7. Découvrez les différents modes de compilation
   • Nested, le mode par défaut (méthode du nesting)
   • Expanded (ressemble à du CSS rédigé manuellement)
   • Compact (CSS avec un ensemble de règles par ligne)
   • Compressed ou CSS minifié (pas d’espace inutile, pratique pour deploy. site)

• flag : --style, suivi du style dans lequel vous voulez compiler (compressed) :
"sass": "sass --watch ./sass/main.scss:./css/style.css --style compressed"
• Enregistrer pour mettre à jour votre fichier Sass
• Lancer une recompilation ( interrompre l’ancien script et relancez-le run…)
• Cliquez à nouveau sur Enregistrer et regardez le code compilé

# Intégrez les types de données Sass (listes, maps)

Les variables Sass ne stockent qu’une seule valeur : une couleur, une taille, etc.
• Listes

1. Pour créer une liste, il vous suffit de définir une variable et de la remplir avec des valeurs. La syntaxe pour les écrire est extrêmement flexible.
   • $syntax-01: 1rem 2rem 3rem 4rem;
   • $syntax-02: 1rem, 2rem, 3rem, 4rem;
   • $syntax-03: (1rem 2rem 3rem 4rem);
   • $syntax-04: (1rem, 2rem, 3rem, 4rem);
2. Vous pouvez aussi utiliser individuellement les valeurs d’une liste.
   font-size: 7rem 5rem 4rem 2rem;
   Utilisons la valeur 2rem issue de $font-size nth ( 4 car il s’agit de la 4ème  valeur)  
font-size: nth($font-size, 4);

• Maps
• Très semblables aux listes, sauf qu’elles assignent à chaque valeur un nom sous forme d’une paire clé/valeur.Le contenu des maps doit être entouré d’une paire de parenthèses et doit utiliser des virgules pour séparer les paires clé/valeur :
$map: (
  key-01: value-01,
  key-02: value-02,
  key-03: value-03);
•	fonction  map-get() ; celle-ci nécessite deux arguments : le premier est le nom de la map (ici $font-size), et le second est le nom de la clé (ici label).
font-size: map-get($font-size, label);

• Mixins avec les maps

1. mixin pour déployer ces palettes. Pour cela, vous devez assigner des règles pour les propriétés border, background-color et color du texte, avec les bonnes valeurs issues de $txt-input-palette.
   @mixin txt-input-palette {
   border: .1rem solid $border;
   background-color: $bg;
   color: $txt;
2. Pour déclarer de quel état (hover, etc.) obtenir les informations, vous devez assigner un argument pour l’état que vous pouvez passer dans la mixin :

@mixin txt-input-palette($state) {
  border: .1rem solid $border;
  background-color: $bg;
  color: $txt;
}
3.	Aux côtés du nom de l’état, vous pouvez stocker sa map de palette dans une variable nommée  $palette  :
@mixin txt-input-palette($state) {
$palette: map-get($txt-input-palette, $state);
  border: .1rem solid $border;
  background-color: $bg;
  color: $txt;
}
4.	À présent,  $palette  contient une map des valeurs de couleurs pour  bg,   border  et   txt  de l’état assigné. Vous pouvez l’utiliser avec la fonction  map-get()  pour remplir les valeurs de couleur de votre ensemble de règles :
@mixin txt-input-palette($state) {
$palette: map-get($txt-input-palette, $state);
  border: .1rem solid map-get($palette, border);
background-color: map-get($palette, bg);
  color: map-get($palette, txt);
}
Et voilà ! Vous avez une mixin utilisable pour mettre en forme tous les éléments de texte et les pseudo-sélecteurs simplement en passant l’état quand vous appliquez la mixin !

# Utilisez les boucles dans Sass

Dans le chapitre précédent, nous avons créé une mixin qui nous facilite grandement la création de différents modificateurs pour vos textes :
$txt-input-palette: (
active: (
bg: $colour-primary,
border: $colour-primary,
txt: $colour-white,

),
focus: (
bg: $colour-primary,
border: $colour-primary,
txt: $colour-white,
),
invalid: (
bg: $colour-invalid,
border: $colour-white,
txt: $colour-white,
)
);

@mixin txt-input-palette($state) {
  $palette: map-get($txt-input-palette, $state);
  border: .1rem solid map-get($palette, border);
background-color: map-get($palette, bg);
  color: map-get($palette, txt);
}
• Les boucles
En appliquant une boucle au sein de votre mixin de texte, Sass peut automatiquement créer les bons sélecteurs et les bons ensembles de règles pour chaque élément de la map que vous lui soumettez. Sass met à notre disposition plusieurs types de boucles.

1. @each. C’est la plus simple à mettre en place et elle fonctionne très bien avec maps. Puisque tous les types de boucles de Sass nous donneront les mêmes résultats à la fin, autant choisir l’option la plus simple.
   Quand vous écrivez une boucle @each dans Sass, vous indiquez que pour chaque paire clé/valeur d’une $map vous voulez effectuer une tâche, et c’est exactement comme ça qu’on la définit :@each $key, $value in $map {
   Sass entre dans $map et crée des variables temporaires $key et $value pour chaque ensemble clé/valeur qu’il trouve. Ces variables n’existent que dans cette itération de la boucle. Elles n’existent ni avant ni après l’itération, et sont invisibles pour le reste du code.
   syntaxe d’interpolation (#{variable}) (substitution de variable). Celle-ci n’est pas exclusive à Sass et existe dans de nombreux langages, comme Ruby par exemple. Elle vous permet d’utiliser la valeur d’une variable au sein d’une chaîne de caractères (ou string) et de la remplacer par une autre.

# Responsive

• @media.

1. Sass permet de placer les media queries directement dans les sélecteurs :
   .proj-grid {display: grid;
   grid-template-columns: repeat(3, 1fr);
   @media (max-width: 599px) {
   grid-template-columns: 1fr; }}
2. Pour rendre les choses encore plus maintenables, nous allons créer une map $breakpoints  pour y stocker nos différents breakpoints. Ajoutons-y notre valeur de breakpoint pour mobile tant qu’on y est :
$breakpoints: (
   mobile: 599px
   );
3. mixin Sass pour réduire toute cette syntaxe superflue et obtenir quelque chose de plus sémantique :
   @mixin mobile-only {
   @media screen and (max-width: map-get($breakpoints, mobile)){
   grid-template-columns: 1fr; }}
   En nommant la mixin mobile-only, vous comprenez tout de suite que les règles qu’elle contient ne s’appliquent qu’aux résolutions mobile.
4. Branchons à présent notre mixin mobile-only dans le bloc.proj-prev :
   @mixin mobile-only {
   @media screen and (max-width: map-get($breakpoints, mobile)){
      grid-template-columns: 1fr;
  }
}
.proj-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @include mobile-only;
}
! Sauf qu’on ne peut utiliser la mixin que dans ce cas précis !
•	@content.  Plutôt que de devoir coder en dur le contenu d’une mixin, Sass vous offre la possibilité de déployer la directive 
@mixin mobile-only {
  @media screen and (max-width: map-get($breakpoints, mobile)){
   @content;
   }
   }
   Quand Sass compile les instances de la mixin, il remplace @content par le code que vous aurez placé à l’intérieur de l’instance de la mixin.
   Lorsque vous utilisez la directive @content, vous pouvez ajouter une paire d’accolades aux instances de la mixin pour y mettre votre contenu :
   @mixin mobile-only {
   @media screen and (max-width: map-get($breakpoints, mobile)){
   @content;
   }
   }
   .proj-grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   @include mobile-only{
   grid-template-columns: 1fr;
   }
   }
   En réalité, @content est un placeholder pour du code qui sera remplacé au moment de la compilation, instance par instance. En l’appliquant, nous avons créé une mixin très flexible et simple à la fois pour nos media queries.
   Nous pouvons maintenant utiliser notre mixin mobile-only dans tout notre site pour l’adapter aux appareils mobiles
   Sass nous fournit les outils pour créer des sites web responsive et graphiquement cohérents avec du CSS propre et maintenable, tout en réduisant drastiquement les quantités de code fastidieux et répétitif à écrire.

# Autoprefixer : code adapté à tous les navigateurs

Certaines propriétés CSS s’afficheront différemment selon les navigateurs.
Quand vous utilisez flexbox, au lieu de simplement définir la propriété display comme étant flex, vous devez lister tous les préfixes :
.header {display: -webkit-box; display: -moz-box;display: -ms-flexbox; display: flex;
webkit est pour Chrome et Safari, ms pour Microsoft, moz pour Firefox.
“Autoprefixer” est un plugin qui vous sauvera des -webkit- et des -moz-. il ajoute automatiquement des préfixes dans votre CSS.

1. Installez Autoprefixer
   • npm pour installer Autoprefixer, PsstCSS et PostCSS-CLI.
   • PostCSS-CLI est un outil de ligne de commande que vous utiliserez pour faire tourner Autoprefixer.
   • Pour installer plusieurs packages en même temps, il vous suffit de les séparer par des espaces :npm install autoprefixer postcss postcss-cli -g
2. Retournez dans package.json et ajoutez un nouveau script à exécuter pour npm, comme lorsque vous avez installé Sass. (nouveau script “prefix”.)
   "scripts": {
   "sass": "sass ./sass/main.scss:./public/css/style.css -w --style compressed",
   "prefix":"postcss ./public/css/style.css"
   • Vous devez dire à npm d’utiliser le nouveau package postcss que vous venez d’installer, et n’oubliez pas de lui dire où trouver votre fichier CSS compilé
   • Ensuite, vous devez dire au package postcss d’utiliser Autoprefixer en exécutant le flag --use suivi d’autoprefixer :
   "scripts": {
   "sass": "sass ./sass/main.scss:./public/css/style.css -w --style compressed",
   "prefix": "postcss ./public/css/style.css --use autoprefixer"
   • Vous devez lui dire où mettre votre nouvelle feuille CSS préfixée :
   "scripts": {
   "sass": "sass ./sass/main.scss:./public/css/style.css -w --style compressed",
   "prefix": "postcss ./public/css/style.css --use autoprefixer -d ./public/css/prefixed/"

Et voilà, votre script de préfixage est terminé ! Tout ce qu’il reste à faire, c’est dire à Autoprefixer jusqu’à quand il doit remonter pour assurer votre compatibilité avec tous les browsers.
Par défaut, Autoprefixer n’ira vérifier que la précédente version des principaux navigateurs pour conclure quels préfixes il doit ajouter à vos feuilles CSS. Mais si vous voulez être sûr que les internautes utilisant des versions de browsers un peu plus anciennes soient également pris en compte :
On va donc indiquer à Autoprefixer de regarder les quatre dernières versions des navigateurs lorsqu’il vérifie la compatibilité de vos feuilles CSS. Juste après nos scripts, ajoutons donc une nouvelle clé nommée browserslist ( last 4 versions) :
"scripts": {
"sass": "sass ./sass/main.scss:./public/css/style.css -w --style compressed",
"prefix": "postcss ./public/css/style.css --use autoprefixer -d./public/css/prefixed/"
},
"author": "",
"license": "ISC",
"browserslist": "last 4 versions"

3. Lancez Autoprefixer
   • npm run prefix
   • Le script apparaît dans la ligne de commande
   • Regardez le nouveau CSS préfixé
   Notre site web s’affichera désormais proprement et uniformément sur tous les navigateurs compatibles. Les préfixes garantissent que les différentes implémentations d’une même propriété seront appelées dans leurs navigateurs respectifs.
