# Écoutez des événements

Un événement en JavaScript est représenté par un nom ( click , mousemove ...) et une fonction que l'on nomme une callback .
Chaque événement implémente l'objet Event . C'est-à-dire que chaque événement a au minimum les mêmes fonctions et propriétés que l'objet Event .

Fonction addEventListener(<event>, <callback>) prend en paramètres le nom de l'événement à écouter (la liste des événements existants) et la fonction à appeler dès que l'événement est exécuté.

preventDefault() : empêche l'exécution du comportement par défaut de l'élément quand il reçoit l'événement ;
stopPropagation() : empêche la propagation de l'événement vers d'autres éléments ;
D'autres propriétés en fonction du type d'événement.

1. Clic
   element.addEventListener('click', onClick);  
   const elt = document.getElementById('mon-lien'); // On récupère l'élément sur lequel on veut détecter le clic
   elt.addEventListener('click', function() { // On écoute l'événement click
   elt.innerHTML = "C'est cliqué !"; // On change le contenu de notre élément pour afficher "C'est cliqué !"
   });

preventDefault() En appelant cette fonction dans votre callback, vous demandez au gestionnaire des événements de ne pas exécuter le comportement par défaut de votre élément.
const elt = document.getElementById('mon-lien'); // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function(event) { // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
event.preventDefault(); // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
});

stopPropagation() , empêcher que d'autres éléments reçoivent l'événement.
elementInterieur.addEventListener('click', function(event) {
event.stopPropagation();
elementAvecMessage.innerHTML = "Message de l'élément intérieur";
});

Commencez par écouter les événements click depuis l'élément #parent. Puis affichez le nombre de clics dans l'élément #parent-count.
Faites la même chose mais avec l'élément #child. Il faudra afficher le nombre de clics sur cet élément dans l'élément #child-count. Maintenant, dès que vous cliquez sur le parent ou l'enfant les compteurs se mettent à jour. Mais vous avez sans doute remarqué que lorsque vous cliquez sur l'enfant, le compteur du parent se met aussi à jour ?
Maintenant, faites de sorte que lorsque vous cliquez sur l'enfant, seul le compteur de l'enfant se mette à jour. N'oubliez pas que l'élément enfant se trouve à l'intérieur de l'élément parent. Ça ne se voit pas ici car nous sommes dans un environnement protégé, mais en réalité, #child est un lien. Et en sa qualité de lien, lorsque l'on clique dessus, le navigateur doit changer de page.
Evitez qu'un clic sur le lien ne vous fasse changer de page: supprimez ce comportement par défaut.

let parentClicks = 0;
let childClicks = 0;
document
.getElementById("parent")
.addEventListener("click", function() {
document
.getElementById("parent-count")
.innerText = (++parentClicks) + '';
});
document
.getElementById("child")
.addEventListener("click", function(e) {
e.preventDefault();
e.stopPropagation();
document
.getElementById("child-count")
.innerText = (++childClicks) + '';
});

2. Détection mouvement de souris

Afin de détecter le mouvement de la souris, il nous faut écouter l'événement mousemove (doc). Cet événement nous fournit un objet de type MouseEvent . C'est-à-dire que dès que la souris bouge, notre fonction callback sera appelée avec un paramètre de type MouseEvent , qui contient les données sur le mouvement de la souris.
Voici, entre autres, ce que cet objet nous permet de récupérer :
clientX / clientY : position de la souris dans les coordonnées locales (contenu du DOM) ;
offsetX / offsetY : position de la souris par rapport à l'élément sur lequel on écoute l'événement ;
pageX / pageY : position de la souris par rapport au document entier ;
screenX / screenY : position de la souris par rapport à la fenêtre du navigateur ;
movementX / movementY : position de la souris par rapport à la position de la souris lors du dernier événement mousemove
elt.addEventListener('mousemove', function(event) {
const x = event.offsetX; // Coordonnée X de la souris dans l'élément
const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
});

3. Lecture champs de texte

Change est un événement qui fonctionne avec les éléments de type <input> , <select> et <textarea> . Cet événement est déclenché lorsque le champ perd le focus. Cet événement fonctionne aussi pour les cases à cocher ( checkbox ) et les cases à choix unique ( radio ). Il nous permet exactement de détecter que le texte saisi dans le champ a changé.

Récupérer la valeur de notre champ une fois qu'il a été modifié, il suffit d'accéder à la valeur de l'élément cible : event.target.value . (target correspond à l'élément sur lequel s'est produit l'événement, c'est-à-dire un champ de type <input> Or, ce type d'élément contient une propriété value qui permet de récupérer ou définir la valeur du champ)

pouvoir avoir la valeur dès que l'utilisateur ajoute ou supprime une lettre : l'événement input, qui fonctionne comme change , sauf qu'il est déclenché dès que le contenu du champ est modifié, même si l'utilisateur n'a pas encore fini de saisir ce qu'il souhaite.
input.addEventListener('input', function(event) {
output.innerHTML = event.target.value;
});

Ecoutez les événements input sur l'élément #name afin de savoir quand le contenu du champ texte est changé. Affichez le contenu actuel dans l'élément #res-name
Maintenant nous voulons écouter l'événement du changement de choix du genre (#gender), et afficher le résultat dans l'élément #res-gender.
Nous souhaitons maintenant afficher les coordonnées de la souris à l'intérieur de l'élément #result dès que celle-ci passe par dessus. Ce que nous voulons, c'est avoir les coordonnées relatives au coin en haut à gauche de l'élément #result.

document
.getElementById("name")
.addEventListener("input", function(e) {
document
.getElementById("res-name")
.innerText = e.target.value;
});

document
.getElementById("gender")
.addEventListener("change", function(e) {
document
.getElementById("res-gender")
.innerText = e.target.value;
});

document
.getElementById("result")
.addEventListener("mousemove", function(e) {
document
.getElementById("mouse-x")
.innerText = e.offsetX;
document
.getElementById("mouse-y")
.innerText = e.offsetY;
});
