# Parallélisez plusieurs requêtes http

1. Enchainement de requêtes avec callbacks
   Voyons ensemble comment faire nos 2 requêtes en parallèle, suivies d'une requête en séquence avec les callbacks. Pour cet exemple, nous partons du principe que nous avons accès à 2 fonctions (get et post). Elles font respectivement une requête GET et une requête POST et elles prennent en paramètre : l'URL de la requête et une callback à exécuter quand on a le résultat (avec une variable d'erreur en premier paramètre).
   var GETRequestCount = 0;
   var GETRequestResults = [];
   function onGETRequestDone(err, result) {
   if (err) throw err;
   GETRequestCount++;
   GETRequestResults.push(result);
   if (GETRequestCount == 2) {
   post(url3, function(err, result) {
   if (err) throw err;
   // We are done here !
   });
   }
   }
   get(url1, onGETRequestDone);
   get(url2, onGETRequestDone);
   Afin d'exécuter 2 requêtes GET en même temps, nous pouvons appeler 2 fois la fonction get(). Étant donné que cette fonction est asynchrone, elle ne bloquera pas l'exécution du code. Ainsi l'autre fonction get() sera aussi appelée alors que la première ne sera pas encore terminée. C'est comme ça qu'on peut avoir 2 requêtes en parallèle.
   Par contre, nous voulons exécuter une requête POST une fois que les 2 requêtes GET sont terminées, et pas avant, nous devons savoir si les requêtes GET sont terminées. C'est pour ça que la variable GETRequestCount est créée. On va l'incrémenter dans la fonction callback que l'on a envoyée aux appels à get() , et si on atteint 2 (le nombre de requêtes GET qu'on a faites), alors on va exécuter la requête POST .
   GETRequestResults sert à conserver les réponses des requêtes GET , car on ne les a pas toutes les 2 en même temps.

2. Enchainement de requêtes avec promise

Grâce à la fonction Promise.all. Pour cet exemple, nous partons du principe que nous avons accès à 2 fonctions ( get et post ) qui font respectivement une requête GET et une requête POST quand on leur passe en paramètre l'URL de la requête. Ces fonctions retourneront une Promise avec le résultat de la requête.
Promise.all([get(url1), get(url2)])
.then(function(results) {
return Promise.all([results, post(url3)]];
})
.then(function(allResults) {
// We are done here !
});
Ici, nous utilisons la fonction Promise.all qui prend en paramètre une liste de Promise (cela peut aussi être de simples valeurs qui sont alors transformées en Promise résolues), et qui permet de toutes les exécuter en parallèle et de retourner une nouvelle Promise qui sera résolue quand toutes les Promise seront résolues.
Ainsi, la fonction then() recevra les résultats de toutes les Promise sous forme d'un tableau.
Afin d'exécuter notre requête POST une fois que les requêtes GET sont terminées, nous l'exécutons donc dans la fonction then().
Notez que dans la fonction then(), nous faisons encore une fois appel à la fonction Promise.all en lui passant les résultats des requêtes GET et notre requête POST . Étant donné que Promise.all considère les simples valeurs comme des Promise résolues, cela nous permet, dans le prochain then() , de récupérer une liste qui contient les résultats des requêtes GET et le résultat de la requête POST : allResults = [ [ getResult1, getResult2 ], postResult ] .

3. Enchainement de requetes avec async / await

Pour cet exemple, nous partons du principe que nous avons accès à 2 fonctions ( get et post ) qui font respectivement une requête GET et une requête POST quand on leur passe en paramètre l'URL de la requête. Ces fonctions sont asynchrones (avec le mot clé async ).
async function requests() {
var getResults = await Promise.all([get(url1), get(url2)]);
var postResult = await post(url3);
return [getResults, postResult];
}
requests().then(function(allResults) {
// We are done here !
});
Nous utilisons aussi la fonction Promise.all dans ce code, car c'est comme ça que l'on peut exécuter des fonctions asynchrones en parallèle (rappelez-vous que async correspond en arrière-plan à une Promise ).
Par contre, ici, nous utilisons await devant Promise.all afin d'attendre la fin de l'exécution des 2 requêtes GET , puis nous utilisons await devant la requête POST afin d'attendre son résultat. Puis nous renvoyons un tableau avec tous les résultats.
Lorsque nous appelons la fonction requests() , ici, nous utilisons then() pour récupérer tous les résultats (mais vous auriez aussi pu utiliser await au sein d'une autre fonction avec le mot clé async ).
