# Définissez des objets et leurs attributs avec des classes

1. Objet
   Les objets JavaScript sont écrits en JSON (JavaScript Object Notation). Ce sont des séries de paires clés-valeurs séparées par des virgules, entre des accolades. Les objets peuvent être enregistrés dans une variable :
   let myBook = {
   title: 'The Story of Tau',
   author: 'Will Alexander',
   numberOfPages: 250,
   isAvailable: true };
   Chaque clé est une chaîne (title, author, numberOfPages...), et les valeurs associées peuvent avoir tout type de données (nombre, chaîne, etc.).
   • Accédez aux données d'un objet
   La Notation pointée (dot notation) : Nom de la variable qui contient l'objet, un point ( . ), puis le nom de la clé dont vous souhaitez récupérer la valeur.
   let myBook = {
   title: "L'Histoire de Tao",
   numberOfPages: 250, };
   let bookPages = myBook.numberOfPages // 250

La notation bracket (bracket notation) : Les brackets avec la valeur du sous élément.
let bookPages = myBook["numberOfPages"]; // 250
L'intérêt ici c’est qu’on va pouvoir mettre entre bracket une variable qui contient en string le nom de la propriété que l’on souhaite atteindre. Par exemple :
let myBook = {
title: "L'Histoire de Tao", };
let propertyToAccess = "title"
let bookTitle = myBook[propertyToAccess]; // "L'Histoire de Tao"

2. Classe
   Une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe).
   Mot clé class , suivi par un nom. Encadrez ensuite le code de la classe entre accolades. Pour cette classe, nous souhaitons que chaque Book ait un titre, un auteur et un nombre de pages. Pour cela, vous utilisez ce qu'on appelle un constructor.
   Le constructor d'une classe est la fonction qui est appelée quand on crée une nouvelle instance de cette classe avec le mot clé new .
   class Book {
   constructor(title, author, pages) {
   }
   }
   Pour attribuer le titre, l'auteur et le nombre de pages reçus à cette instance, utilisez le mot clé this et la notation dot.
   class Book {
   constructor(title, author, pages) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   }
   }
   Ici, le mot clé this fait référence à la nouvelle instance. Donc, il utilise la notation dot pour attribuer les valeurs reçues aux clés correspondantes.
   Maintenant que la classe est terminée, vous pouvez créer des instances par le mot clé new :
   let myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);
   Cette ligne crée l'objet suivant :
   {
   title: "L'Histoire de Tao",
   author: "Will Alexander",
   pages: 250
   }
