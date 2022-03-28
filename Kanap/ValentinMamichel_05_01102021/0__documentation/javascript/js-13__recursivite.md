# Découvrez la récursivité : l'appel de fonctions à l'intérieur d'elles-mêmes

1. Une fonction qui s'appelle elle-même
   Une fonction récursive est une fonction qui s'appelle elle-même d'une façon ou d'une autre.
   Le but de l'exercice : chercher un élément dans un array trié pour savoir s'il s'y trouve.
   Une approche basique (et plutôt lente) serait la suivante :
   const findElement = (array, thingToFind) => {
   for (let element of array) {
   if (element === thingToFind) {
   return true;
   }
   }
   return false;
   }
   Si on trouve un élément qui correspond à ce que l'on recherche, la fonction renvoie true . Si on arrive à la fin du tableau sans l'avoir trouvé, on passe à la ligne suivante et la fonction renvoie false .

Imaginons une autre approche.
const binarySearch = (array, thingToFind, start, end) => {
}
On sait que le tableau est trié, donc on peut savoir, pour un élément donné, si ce que l'on recherche risque de se trouver plus haut ou plus bas dans la liste. Par exemple, si on recherche le nombre 42 et que l'on tombe sur 32, on sait qu'il faudra chercher plus bas.
Du coup, commençons par analyser l'élément médian de la liste. On peut faire la somme de l'index de début et de l'index de fin, et diviser par deux pour trouver cet élément (arrondissons vers le bas pour nous assurer de trouver un nombre entier :
const binarySearch = (array, thingToFind, start, end) => {
let mid = Math.floor((start + end) / 2);
}
Utiliser les index nous permettra de réutiliser le même code sur des sélections de plus en plus petites du tableau, comme vous allez vite le découvrir !
Maintenant que l'on a l'élément médian du tableau, vérifions si, par chance, on est tombé juste.
const binarySearch = (array, thingToFind, start, end) => {
let mid = Math.floor((start + end) / 2);
if (array[mid] === thingToFind) {
return true;
}
}
La fonction retournera true si on a trouvé l'élément.
Si on n'a pas eu de chance, ce n'est pas grave : puisque le tableau est trié, on sait dans quelle moitié du tableau chercher ! Du coup, on a juste à exécuter exactement la même fonction sur la partie en question ! Il suffit de modifier soit l'index de fin (pour chercher dans la première moitié) soit l'index de début (pour chercher dans la deuxième moitié) :
const binarySearch = (array, thingToFind, start, end) => {
let mid = Math.floor((start + end) / 2);
if (array[mid] === thingToFind) {
return true;
}
if (thingToFind < array[mid]) {
// il faut rechercher dans la première moitié
return binarySearch(array, thingToFind, start, mid - 1); // on utilise (mid - 1) car on sait que l'on n'a pas besoin de l'élément mid, il a déjà été vérifié !

} else {
// il faut rechercher dans la deuxième moitié
return binarySearch(array, thingToFind, mid + 1, end);
}
}
La fonction continuera à s'appeler elle-même jusqu'à trouver ce que l'on recherche. Mais il manque quelque chose ! Qu'est-ce qui se passe si ce que l'on recherche n'existe pas dans le tableau ? Il faut ce que l'on appelle un cas de base, ou base case, pour dire à la fonction de s'arrêter.
On saura que l'algorithme est arrivé au bout si on a essayé de l'appeler avec un index de début qui est supérieur à l'index de fin.
Pourquoi ? Eh bien parce que peu à peu, on divise le tableau, encore et encore, jusqu'à tomber sur une sélection d'un seul élément : on aura donc start = mid = end . Du coup, quand la fonction se rappellera encore, elle utilisera soit start = mid + 1 , soit end = mid - 1 , selon notre recherche. On aura donc start > end , et la fonction peut retourner false , car on sait qu'elle est arrivée au bout sans trouver ce que l'on recherche.
On met donc ce base case au début de la fonction pour vérifier s'il s'agit du dernier appel :
const binarySearch = (array, thingToFind, start, end) => {
if (start > end) {
return false;
}
let mid = Math.floor((start + end) / 2);
if (array[mid] === thingToFind) {
return true;
}
if (thingToFind < array[mid]) {
return binarySearch(array, thingToFind, start, mid - 1);
} else {

return binarySearch(array, thingToFind, mid + 1, end);
}
}
ATTENTION ! Sans base case (ou avec un base case incorrect), vos fonctions récursives peuvent causer des infinite loops et des stack overflows, car elles vont continuer à s'appeler à l'infini, donc faites bien attention !
Pratiquez la récursivité
Quand on parle de récursivité, il y a une fonction qui fait vraiment partie des grands classiques : la fonction mathématique “factorielle” ! Concrètement, la factorielle d'un nombre n est définie comme n fois la factorielle du nombre n-1 , et la factorielle de 1 est 1 .
factorielle(3) = 3 _ 2 _ 1 = 6
factorielle(7) = 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5040
factorielle(4) = 4 _ 3 _ 2 _ 1 = 24
CodePen à cette adresse. paramètre number .On considère que la factorielle fonctionne pour les nombres supérieurs à 1, sinon la factorielle vaudra 1.CodePen à cette adresse
• function factorielle(number){
• if(number <= 1) return 1;
• else return (number _ factorielle(number-1));
• }
if(number <= 1) return 1;
Comme il était expliqué en “point important”, si notre nombre n’est pas supérieur à 1, la factorielle retourne 1.
else return (number \* factorielle(number-1));
Sinon (si le nombre est supérieur à 1, donc) on retourne le nombre multiplié par la factorielle du nombre moins 1.
