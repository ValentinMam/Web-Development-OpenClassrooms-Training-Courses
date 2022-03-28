### Sommaire

# Améliorez la maintenabilité du code avec les variables Sass

# Mixins Sass avec des arguments

# Code plus propre grâce aux extensions Sass

# Quand utiliser des mixins ou des extensions

# Améliorez les mixins avec les fonctions Sass

# Optimisez les mixins grâce aux conditions dans Sass

# Créez et utilisez des fonctions

---

# Améliorez la maintenabilité du code avec les variables Sass

documentation Sass.
• Utilisez des variables pour gérer les couleurs
Les variables sont comme des boîtes. On les remplit et on y colle une étiquette pour savoir ce qu’il y a dedans. Nommer la variable en fonction de son rôle plutôt que son contenu. $color-primary (couleur principale en anglais). 
Dollar ($) :$mint: #15DEA5; .form\_\_heading {background: $mint;}
• 8 types de données Sass

1. les couleurs
2. les chaînes de caractères (strings) : terme de programmation signifiant du texte
3. les nombres : des nombres
4. les listes et maps : des collections de n’importe quels éléments
5. +(les booléens (boolean), les nulls et les fonctions.)

# Mixins Sass avec des arguments

• Les variables ne peuvent stocker que des valeurs. On utilise alors la @mixin (En programmation objet, on dit un ensemble de règles)
@mixin heading-shadow{ text-shadow: .55rem .55rem #15DEA5;}

• @include suivi d’un espace et du nom de notre mixin :
.form { &\_\_heading {@include heading-shadow; }}

• Vous pouvez modifier votre mixin pour qu’il se comporte différemment selon ses inputs :
@mixin heading-shadow($colour){ text-shadow: .55rem .55rem #15DEA5;}

.heading{&\_\_header {@include heading-shadow(#fff); }}

• Définissez une valeur
Plutôt que de renseigner une valeur de couleur chaque fois que vous utilisez votre mixin heading-shadow, vous pouvez régler la valeur par défaut de l’argument. Si vous décidez de ne pas personnaliser la couleur de l’ombre, c’est la couleur par défaut qui sera utilisée. Vous pouvez le faire en définissant sa valeur de la même manière que pour une variable déclarée normalement :
@mixin heading-shadow($colour: $colour-primary){ text-shadow: .55rem .55rem $colour;}

Du coup, si vous oubliez d’ajouter l’argument ou d’assigner une couleur à la variable quand vous l’incluez, Sass en déduira que vous voulez que l’ombre soit celle de la couleur par défaut, dans notre cas $colour-primary.
la mixin utilise des valeurs fixes pour la taille de l’ombre sur le texte. Remédions à cela en déclarant une variable $heading-shadow-size :
$heading-shadow-size: 0.55rem;

Mais plutôt que de simplement remplacer les tailles d’ombres dans la mixin, mettons en application un argument $shadow-size et définissons $heading-shadow-size en tant que réglage par défaut :
$heading-shadow-size: 0.55rem;
@mixin heading-shadow($colour: $colour-primary, $shadow-size: $heading-shadow-size){
text-shadow: $shadow-size $shadow-size $colour;
}
À présent, votre mixin est maintenable grâce à ses variables et a un effet prévisible mais customisable, grâce à l’implémentation d’arguments et de valeurs par défaut.

# Code plus propre grâce aux extensions Sass

• Mixin crée une duplication de l’ensemble de règles dans notre CSS compilé
• Les extensions dupliquent le sélecteur.

1. Les extensions (@extend) sont très similaires aux mixins. Vous écrivez un bloc de code et vous comptez sur Sass pour le réutiliser
   .typography { font-size: 2rem;}
   h1 {@extend .typography;}

2. Placeholder (%) devant votre sélecteur plutôt que le point qu’on utilise d’habitude pour les classes.
   %typography {color: $colour-primary;}

On peut créer des extensions aux placeholders Sass, aussi appelés “classes silencieuses”, de la même façon qu’on le fait avec les sélecteurs. On peut réutiliser nos placeholders partout dans le code, comme on le ferait avec des sélecteurs.
h1 {@extend %typography;}
textarea {@extend %typography;}

# Quand utiliser des mixins ou des extensions

Sur le principe, les mixins et les extensions sont très semblables. Pour discerner leurs différentes fonctions, il faut prêter attention au code compilé.
La réponse est plutôt simple : n’utilisez pas d’extensions.

# Améliorez les mixins avec les fonctions Sass

La page sur les fonctions dans la documentation Sass
Les fonctions sont des bouts de code préfabriqués qui effectuent des tâches.
La fonction nommée judicieusement “darken” (assombrir, en anglais) prend deux arguments : une valeur de couleur, et une valeur qui indique à quel point vous voulez assombrir votre valeur. Pour assombrir $colour-primary pour notre ombre de texte, utilisez la fonction à l’endroit où vous auriez placé une valeur de couleur en temps normal :
@mixin heading-shadow($colour:$colour-primary, $size: $heading-shadow-size){
  text-shadow: $size $size darken($colour, 10%);}

CSS compilé, vous voyez que le mixin heading-shadow produit une ombre ayant la valeur hex #11af82, soit une version 10 % plus foncée que $colour-primary (#15dea5) :
.form\_\_heading {text-shadow: 0.55rem 0.55rem #11af82;}
Dès que vous modifiez votre $colour-primary, votre mixin générera automatiquement l’ombre correspondante.

• RGB : proportion rouge, vert, bleu
• HSL : hue, saturation et lightness ou teinte, saturation et clarté.

Pour une couleur 10 % plus foncée, il faut diminuer la valeur de clarté de 10 %.(fonction darken())

Quand une fonction donne une valeur, par exemple une nouvelle couleur, on dit que la fonction retourne cette valeur (@return)

# Optimisez les mixins grâce aux conditions dans Sass

En programmation, on appelle cela une structure conditionnelle, ou plus simplement condition (“if/else” en anglais) : si la couleur a moins de 25 % de luminosité, l’éclaircir ; sinon, l’assombrir :@if ( lightness($colour) < 25% ) {...}
La condition est prise en compte comme une question vrai/faux. Si la réponse est vraie, faire ceci ; si elle est fausse, faire autre chose.
Répondre à la question c’est bien, mais il nous faut plus. Si votre condition est vraie, vous voulez que la couleur soit éclaircie ; et pour spécifier cela, vous devez indiquer entre les accolades ce que vous voulez qu’il se passe. 
•	@if 
@if ( lightness($colour) < 25% ) {
$colour: lighten($colour, 10%);}
• @else (non obligatoire)
@if ( lightness($colour) < 25% ) {
  $colour: lighten($colour, 10%);
}@else{
$colour: darken($colour, 10%);
}
Les conditions vous aident à rendre votre codebase flexible et maintenable.
Au milieu est ce qu’on appelle un opérateur de comparaison.

1.           x==y Vrai si x est égal à y
2.           x!=y Vrai si x n’est pas égal à y
3.           x>y Vrai si x est supérieur à y
4.           x<y Vrai si x est inférieur à y
5.           x>=y Vrai si x est supérieur ou égal à y
6.           x<=y	Vrai si x est inférieur ou égal à y

• and pour les lier :
En utilisant cet opérateur logique “et”, vous exigez que les deux conditions soient vraies pour que le bloc “si” soit exécuté.
@if ( lightness($colour) < 25% ) and ( lightness($colour) > 10% ) {...}

• or, vrai si n’importe laquelle des conditions est vraie :
En utilisant or, tout ce qui se trouve dans les accolades sera exécuté si la couleur a moins de 25 % de luminosité ou plus de 10 % de saturation.

@if ( lightness($colour) < 25% ) or ( saturation($colour) > 10% ) {...}

Le terme technique pour ces petites suites d’instructions est algorithme.

# Créez et utilisez des fonctions

Une fonction est un bout de code qui effectue une tâche lorsqu’elle est exécutée.
• @function suivi de son nom. @function lightness-shift() {}

@function lightness-shift($colour){
  @if ( lightness($colour) < 25% ) {
$colour: lighten($colour, 10%);
}@else{
$colour: darken($colour, 10%); }}

Il vous manque une seule petite chose : retourner une valeur. Plutôt que de modifier $colour, faites en sorte que la fonction retourne la nouvelle valeur de couleur directement.
•	@return 
@function lightness-shift($colour){
@if ( lightness($colour) < 25% ) {
      @return lighten($colour, 10%);
}@else{
@return darken($colour, 10%); }}
Lorsque vous ajoutez @return, vous indiquez à Sass la valeur retournée que vous voulez lorsque vous appelez la fonction. Donc, si la luminosité est inférieure à 25 %, vous voulez retourner une couleur qui soit 10 % plus claire, sinon vous voulez retourner une couleur qui soit 10 % plus foncée.
