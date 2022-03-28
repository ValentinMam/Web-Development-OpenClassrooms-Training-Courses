# Enregistrez vos données avec des types de données

En JavaScript, il y a trois types primitifs principaux :

1. number (nombre)
   Les variables de type number peuvent être + ou - (entiers ou décimaux).

L'arithmétique en virgule flottante peut déclencher des erreurs très gênantes dans tous les langages de programmation : Chaque fois que c'est possible, utilisez plutôt des calculs entiers (en centimes…)
let integerCalculation = 1 + 2; // donne 3
let weirdCalculation = 0.1 + 0.2; // on attend 0.3, réponse réelle 0.30000000000000004

2. boolean (valeur logique)
   Les valeurs logiques (booleans) ne peuvent avoir que deux valeurs, true ou false.
   let userIsSignedIn = true;
   let userIsAdmin = false;

3. string (chaîne de caractères)
   Les chaînes de caractères sont la façon d'enregistrer du texte dans des variables JavaScript. Elles sont encadrées par des guillemets simples ou doubles –' ou " . Les chaînes peuvent aussi être concaténées (ajoutées à la fin l'une de l'autre) par l'opérateur + :
   let firstName = "Will";
   let lastName = 'Alexander';
   let wholeName = firstName + " " + lastName; // valeur: "Will Alexander"

La string interpolation. On écrit du texte encadrée par le signe ` et si on veut injecter une variable dans ce code on utilise l’expression ${maVariable}. const myName =`Alexander`; const salutation = `Bienvenue sur mon site ${myName}!`;
console.log(salutation); //retournera “Bienvenue sur mon site Alexander!”
Prenez garde aux types de vos variables, et en général, utilisez des constantes chaque fois que c'est possible. docs MDN
