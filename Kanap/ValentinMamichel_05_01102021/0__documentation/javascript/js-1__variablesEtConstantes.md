# Déclarez des variables et modifiez leurs valeurs

1. Variables
   Une variable est un contenant nommé (descriptif / pas d’abréviation / convention de nommage constante) utilisé pour enregistrer une donnée spécifique dont votre programme a besoin pour travailler. Une donnée placée dans une variable s'appelle une valeur.

Mot clé let, suivi du nom de variable choisi :
let numberOfCats = 2;…
La façon la plus simple de modifier la valeur d'une variable est simplement de la réaffecter.
let numberOfCats = 3; numberOfCats = 4;
• Addition et soustraction
let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;

- ou - un nombre d'une variable, vous pouvez utiliser les opérateurs += et -= :
  let cookiesInJar = 10; /_ manger deux cookies _/
  cookiesInJar -= 2; //il reste 8 cookies /_ cuisson d'un nouveau lot de cookies _/
  cookiesInJar += 12; // il y a maintenant 20 cookies dans la boîte
  Utiliser ++ ou -- pour ajouter ou soustraire 1 (incrément ou décrément)
  let numberOfLikes = 10;
  numberOfLikes++; // cela fait 11
  numberOfLikes--; // et on revient à 10...qui n'a pas aimé mon article ?

• Multiplication et division
let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct _ numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;
il existe aussi les opérateurs _= et /= pour multiplier ou diviser un nombre.
let numberOfCats = 2;
numberOfCats *= 6; // numberOfCats vaut maintenant 2*6 = 12;
numberOfCats /= 3; // numberOfCats vaut maintenant 12/3 = 4;

Une variable est de base mutable c'est-à-dire qu’elle peut changer au cours du temps.

2. Constantes
   Les constantes sont des variables qui ne seront pas mutables. Ainsi s’il y a une erreur de logique dans votre code changeant la valeur du variable (constante) qui ne devait pas changer, javascript retournera une erreur.
   const nombrePostParPage = 20;
   nombrePostParPage = 30; // Retournera une erreur dans la console car on ne peut plus changer sa valeur

connaitre le type de variable = console.log (typeof maVariable)
