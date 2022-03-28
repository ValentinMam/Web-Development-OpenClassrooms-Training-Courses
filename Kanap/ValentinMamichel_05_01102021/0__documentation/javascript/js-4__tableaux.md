# Regroupez vos données avec les tableaux et les objets

1. Tableau (array).
   Pour créer un tableau vide et l'enregistrer dans une variable, utilisez une paire de crochets :
   let guests = [];
   Créer un tableau rempli en plaçant les éléments voulus à l'intérieur de ces crochets :
   let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];
   Accéder aux éléments de ce tableau par leur indice (indice de base : 0)
   let firstGuest = guests[0]; // "Sarah Kate"
   let thirdGuest = guests[2]; // "Will Alexander"
   let undefinedGuest = guests[12] // undefined

En JavaScript, les types primitifs tels que les nombres, les valeurs logiques et les chaînes sont passés par valeur. C’est la valeur 20 qui est copiée dans la nouvelle variable (totalNumberOfGuests), et aucun lien n'est maintenu entre les deux variables.
let numberOfGuests = 20;
let totalNumberOfGuests = numberOfGuests; // 20
Ce n'est pas le cas avec les objets et tableaux, qui sont passés par référence. Si vous n'y prenez pas garde, cela peut conduire à des comportements inattendus. Par exemple :
let artistProfile = {
name: "Tao Perkington",
age: 27,
available: true
};
let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
artistProfile.available = false; // modification de l'objet
console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }
Bien que nous ayons créé le tableau et passé l'objet avant la modification de cet objet, vous la voyez dans le tableau. C'est parce que quand on utilise des tableaux et des objets, on passe des références aux objets plutôt que la valeur des données qu'ils contiennent. Les variables artistProfile et allProfiles présentées ci-dessus contiennent des références à l'objet et au tableau en mémoire.

Les tableaux en JavaScript sont très puissants et ont beaucoup d'attributs et de méthodes très utiles. Voici une brève introduction à quelques-uns d'entre eux.
• Le comptage d'éléments
La propriété length d'un tableau indique le nombre d'éléments qu'il contient :
let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.length; // 3
Utilisez la notation dot pour accéder à la propriété length de votre tableau.

• L'ajout et la suppression d'éléments
Pour ajouter un élément à la fin d'un tableau, utilisez sa méthode push :
guests.push("Tao Perkington"); // ajoute "Tao Perkington" à la fin de notre tableau guests
Pour ajouter votre élément au début du tableau plutôt qu'à la fin, utilisez la méthode unshift :
guests.unshift("Tao Perkington"); // "Tao Perkington" est ajouté au début du tableau guests
Pour supprimer le dernier élément d'un tableau, appelez sa méthode pop sans argument :
guests.pop(); // supprimer le dernier élément du tableau
