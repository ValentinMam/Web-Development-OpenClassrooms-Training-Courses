# Document Object Model

Le DOM est une interface de programmation qui est une représentation du HTML d’une page web et qui permet d’accéder aux éléments de cette page web et de les modifier avec le langage JavaScript. (<html> Celle-ci a pour enfants les balises <head> et <body>…) Il faut voir le DOM comme un arbre.
Chaque élément du DOM est un objet JavaScript avec ses propriétés et ses fonctions pour le manipuler. Avec une interface de programmation nous permettant de parcourir le DOM, nous allons pouvoir interagir avec lui.

1. Accès
   • Avec le document
   C’est le point de départ du DOM. Il représente votre page (votre document) entière.
   document.getElementById()
   const myAnchor = document.getElementById('my-anchor');
   document.getElementsByClassName()
   const contents = document.getElementsByClassName('content');
   document.getElementsByTagName()
   const articles = document.getElementsByTagName('article');
   document.querySelector()
   const elt = document.querySelector("#myId p.article > a");

querySelector() ne renvoie pas une liste des résultats, mais le premier élément qui correspond à la recherche.
querySelector(<selector>) prend en paramètre le sélecteur et vous retournera le premier élément trouvé, ou null si aucun élément n'a été trouvé.

Pour retourner une liste de résultats qui correspondent à la recherche que vous souhaitez faire il faudra utiliser la fonction querySelectorAll , qui fonctionne de la même manière.

• Avec un élement

element.children : la liste des enfants de cet élément ;
element.parentElement : l'élément parent de celui-ci ;
element.nextElementSibling : vers l'élément suivant  
element.previousElementSibling : vers l’élément précédent
const elt = document.getElementById('main');
console.log("#main-content", document.getElementById("main-content"));
console.log(".important",document.getElementsByClassName("important"));
console.log("article", document.getElementsByTagName("article"));
const liItem = document.querySelector("article ul.important > li");
console.log("article ul.important > li", liItem);
console.log("nextElementSibling", liItem.nextElementSibling);

2. Modification

• Elément

innerHTML demande à ce que vous entriez du texte représentant un contenu HTML.

textContent demande un simple texte qui ne sera pas interprété comme étant du HTML.
let elt = document.getElementById('main');

elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";
L’élément qui a l'id 'main' aura un nouveau contenu ; le HTML deviendra donc :

<div id="main">
    <ul>
        <li>Elément 1</li>
        <li>Elément 2</li>
    </ul>
</div>

• Classe
Propriété classList .
elt.classList.add("nouvelleClasse"); // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse"); // Retournera false car on vient de la supprimer
elt.classList.replace("oldClass", "newClass"): // Remplacera oldClass par newClass si oldClass était présente sur l'élément
Propriété style
elt.style.color = "#fff"; // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras

• Attribut
element.setAttribute(<name>, <value> ) prend en paramètres le nom de l'attribut et sa valeur et ne retourne rien. (getAtrribute ou removeAttribute)
Vous pouvez utiliser les fonctions getAttribute et removeAttribute pour avoir encore plus de contrôle sur les attributs.
elt.setAttribute("type", "password"); // Change le type de l'input en un type password
elt.setAttribute("name", "my-password"); // Change le nom de l'input en my-password
elt.getAttribute("name"); // Retourne my-password

3. Création
   document.createElement(<tag>)  
   const newElt = document.createElement("div");

Un élément créé avec cette fonction ne fait pas encore partie du document, vous ne le verrez donc pas sur votre page. Pour le voir, il va d'abord falloir l'ajouter en tant qu'enfant à un élément.
parentNode.appendChild(<element>) prend en paramètre l'élément à ajouter en tant qu'enfant. L'élément depuis lequel on appelle cette fonction devient donc le parent de notre élément.
const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt);
Avec le code ci-dessus, nous venons de créer un nouvel élément de type div , mais qui n'est pas encore rattaché au DOM. Nous avons ensuite récupéré l'élément ayant pour id main . Enfin, nous avons ajouté notre nouvel élément dans les enfants de l'élément #main .

4. Suppression

parentNode.removeChild(<element>) prend en paramètre l'élément à supprimer du parent et retourne cet élément.
parentNode.replaceChild(<newElement>, <oldElement>) prend en paramètres le nouvel élément ainsi que l'élément à remplacer, et retourne ce dernier.
const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt);
elt.removeChild(newElt); // Supprime l'élément newElt de l'élément elt
elt.replaceChild(document.createElement("article"), newElt); // Remplace l'élément newElt par un nouvel élément de type article
