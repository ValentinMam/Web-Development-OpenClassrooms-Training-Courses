# Sauvegardez des données sur le service web

La méthode GET est seulement faite pour récupérer des données, alors que des méthodes comme POST et PUT sont faites pour en envoyer et en recevoir. Le fonctionnement d'un verb à l'autre est très similaire. Avec les verbs POST et PUT, nous allons simplement ajouter des données dans le corps de notre requête.

1. Envoi de données avec POST
   Afin d'envoyer des données à un service web avec la méthode POST via AJAX, nous allons devoir passer par la méthode send() en lui passant en paramètres les données à envoyer.
   fetch("http://url-service-web.com/api/users", {
   method: “POST”,
   headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
   },
   body: JSON.stringify(jsonBody)
   });
   Comme vous pouvez le voir, nous avons passé le contenu à envoyer au service web à notre fonction fetch() . Étant donné que l'on souhaite envoyer du JSON à notre service web, nous avons d'abord besoin de transformer notre objet JavaScript en JSON.
   Pour faire cette transformation, nous utilisons la fonction JSON.stringify(json) . Toujours parce que l'on souhaite envoyer du JSON à notre service web, il faut alors le prévenir qu'il va recevoir du JSON. Cela se fait grâce à des headers, qui sont des en-têtes envoyés en même temps que la requête pour donner plus d'informations sur celle-ci. Les headers en question sont :
   • Content-Type, avec la valeur application/json,
   • Accept, avec la valeur application/json .
   Ces options sont envoyées avec la requête grâce au second paramètre de la fonction fetch().
   Ce paramètre est un objet qui permet de définir :
   • la méthode HTTP, le body, c’est à dire les données qu’on souhaite envoyer,
   • les headers qui donnent un peu plus d’information sur notre requête.
   PUT fonctionne exactement de la même manière que POST.

Nous allons commencer par créer une fonction appelée send et qui va créer notre requête.
Nous souhaitons créer une requête de type POST vers l'adresse suivante : https://mockbin.com/request, et y envoyer un contenu JSON ayant une propriété value qui contiendra la valeur du champ de saisie de la page (avec l'ID value). Par exemple : {value: document.getElementById("value").value}.
Nous souhaitons aussi, lorsque la requête s'est bien envoyée, afficher le résultat renvoyé par le service web. Pour ce faire, nous allons afficher ce qui se trouve dans postData.text de la réponse dans le contenu HTML de l'élément ayant pour ID result.
Maintenant nous voulons envoyer notre requête, et donc appeler notre fonction send dès que nous soumettons le formulaire ayant pour ID form.
N'oubliez pas d'annuler le comportement par défaut de la soumission du formulaire, sinon votre page va se recharger.

function send(e) {
e.preventDefault();
fetch("https://mockbin.com/request", {
method: "POST",
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify({value: document.getElementById("value").value})
})
.then(function(res) {
if (res.ok) {
return res.json();
}
})
.then(function(value) {
document
.getElementById("result")
.innerText = value.postData.text;
});
}

document
.getElementById("form")
.addEventListener("submit", send);
