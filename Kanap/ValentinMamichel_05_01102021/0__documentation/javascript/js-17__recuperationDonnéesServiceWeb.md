# Récupérez des données d'un service web

1. Fetch et JSON
   Fetch est un ensemble d'objets et de fonctions mis à disposition par le langage JavaScript, afin d'exécuter des requêtes HTTP de manière asynchrone. L’API Fetch va nous permettre d'exécuter des requêtes HTTP sans avoir besoin de recharger la page du navigateur. Cela a plusieurs avantages :
   Avoir un site plus réactif car on n'a pas besoin de recharger toute la page dès qu'on a besoin de mettre à jour une partie du contenu ;
   Améliorer l'expérience utilisateur avec du nouveau contenu qui se charge au fur et à mesure qu'on le découvre, par exemple.
   fetch("http://url-service-web.com/api/users");
   Ce code nous permet d'envoyer une requête HTTP de type GET au service web se trouvant à l'adresse http://url-service-web.com/api/users .

Un service web peut choisir le format qu'il veut pour nous renvoyer des données, mais le plus courant et le plus simple est le format JSON.
JSON signifie JavaScript Object Notation. Il s'agit d'un format textuel se rapprochant en termes de syntaxe de celui des objets dans le langage JavaScript. Alors qu'en JavaScript il n'est pas nécessaire de mettre les propriétés (comme name , id , message , etc.), entre guillemets, cela l'est en JSON. En JavaScript, votre objet est assigné à une variable, alors qu'en JSON on ne fait que décrire une structure. 2. Résultat de requête

Pour cela Fetch va nous renvoyer une Promise( la Promise est un objet qui fournit une fonction then qui sera exécutée quand le résultat aura été obtenu, et une fonction catch qui sera appelée s’il y a une erreur qui est survenue lors de la requête).
Voici comment procéder avec un service qui fait un simple echo :
fetch(“https://mockbin.com/request”)
.then(function(res) {
if (res.ok) {
return res.json();
}
})
.then(function(value) {
console.log(value);
})
.catch(function(err) {
// Une erreur est survenue
});

l'URL passée à la fonctionfetch() a changé et correspond à l’URL de notre service web.
Le type de requête est GET (ce qui est le cas par défaut avec Fetch) car nous voulons récupérer les données.
Ensuite nous appelons la fonctionthen()pour récupérer le résultat de la requête au format json en ayant vérifié au préalable que la requête s’était bien passée avec res.ok.
Ce résultat json étant lui aussi une Promise, nous le retournons et récupérons sa vraie valeur dans la fonction then() suivante.

Nous allons commencer par la création d'une fonction askHello qui va créer une requête avec fetch de type GET vers le service web avec l'URL https://mockbin.com/request?greetings=salut.
Maintenant, nous voudrions récupérer la réponse du service web et l'afficher dans l'élément ayant pour ID hello-result . Modifiez donc notre fonction askHello afin de récupérer la réponse du service web dès que tout s'est bien passé. Le service web vous retournera une réponse au format JSON, et vous aurez besoin d'afficher la propriété greetings se trouvant dans l'objet queryString .
Enfin, nous voulons afficher la salutation (et donc appeler notre fonction askHello) dès que nous cliquons sur le bouton ayant pour ID ask-hello .

function askHello() {
fetch("https://mockbin.com/request?greetings=salut")
.then(function(res) {
if (res.ok) {
return res.json();
}
})
.then(function(value) {
document
.getElementById("hello-result")
.innerText = value.queryString.greetings;
})
.catch(function(err) {
// Une erreur est survenue
});
}

document
.getElementById("ask-hello")
.addEventListener("click", askHello);
