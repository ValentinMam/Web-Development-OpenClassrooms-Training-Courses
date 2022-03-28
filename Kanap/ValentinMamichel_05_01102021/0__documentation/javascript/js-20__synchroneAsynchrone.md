# Comprenez comment fonctionne l'asynchrone en JS

Javascript est synchrone et mono thread. Cela signifie que lorsque vous écrivez du code, chaque ligne sera exécutée l'une après l'autre en attendant la fin de l'exécution de la ligne précédente. Il n'y a pas d'autre code qui pourra être exécuté en parallèle. Il ne peut faire qu'une seule chose à la fois.
Si du code synchrone est du code qui s'exécute ligne après ligne en attendant la fin de l'exécution de la ligne précédente, alors on peut facilement en déduire que du code asynchrone va s'exécuter ligne après ligne, mais la ligne suivante n'attendra pas que la ligne asynchrone ait fini son exécution. Prenons cet exemple :
let productId = 1;
let productPrice = getProductPriceAsync(productId);
doSomething(productPrice);
En admettant que la fonction getProductPriceAsync() soit asynchrone, alors la ligne suivante sera exécutée avant la fin de l'exécution de la fonction asynchrone, mais il ne sera pas encore possible d'utiliser la valeur de productPrice.

1. Event loop

Il est possible de demander à exécuter du code de manière asynchrone. Et lorsque l'on demande à exécuter une fonction de façon asynchrone, la fonction en question est placée dans une sorte de file d'attente qui va exécuter toutes les fonctions qu'elle contient les unes après les autres. C'est ce qu'on appelle l'event loop. Ainsi, le code n'est pas réellement exécuté en parallèle car il est mis en file d'attente, mais il ne bloque pas l'exécution du code depuis lequel il a été appelé.
setTimeout est la fonction la plus répandue lorsque l'on veut exécuter du code asynchrone sans bloquer le fil d'exécution en cours. Cette fonction prend 2 paramètres : La fonction à exécuter de manière asynchrone (+ à la file d'attente de l'event loop) et le délai, en millisecondes, avant d'exécuter cette fonction.
setTimeout(function() {
console.log("I'm here!")
}, 5000);
console.log("Where are you?");
Dans l'exemple ci-dessus, le texte Where are you? s'affichera avant I'm here! , qui ne sera affiché qu'au bout de 5 secondes.
La fonction setTimeout nous retourne une valeur permettant d'identifier le code asynchrone que l'on veut exécuter. Il est possible de passer cet identifiant en paramètre à la fonction clearTimeout , si vous souhaitez annuler l'exécution asynchrone de la fonction avant qu'elle ne soit exécutée.

Il existe d'autres méthodes un peu moins répandues, voire très peu utilisées :
setInterval fonctionne exactement comme setTimeout , à ceci près qu'elle exécute la fonction passée en paramètre en boucle à une fréquence déterminée par le temps en millisecondes passé en second paramètre. Il suffira de passer la valeur de retour de setInterval à clearInterval pour stopper l'exécution en boucle de la fonction ;
setImmediate prend en seul paramètre la fonction à exécuter de façon synchrone. La fonction en question sera placée dans la file d'attente de l'event loop, mais va passer devant toutes les autres fonctions, sauf certaines spécifiques au Javascript : les événements (les mêmes qu'on a vus au premier chapitre, et qui sont donc exécutés de façon asynchrone ), le rendu, et l'I/O. Il existe aussi nextTick , qui permet, là, de court-circuiter tout le monde. À utiliser avec précaution, donc...

L'I/O correspond aux événements liés à l'input(les flux d'entrée) et l'output(les flux de sortie). Cela correspond notamment à la lecture/écriture des fichiers, aux requêtes HTTP, etc.
Vous avez dû remarquer que lorsque l'on exécutait la fonction fetch() lors d'une requête HTTP, celle-ci ne bloquait pas l'exécution du code. On n'attend pas que la requête soit envoyée et une réponse reçue avant d'exécuter le reste du code. C'est donc une fonction asynchrone.
D’ailleurs,fetch()retourne une Promise qui est une autre façon de faire de l’asynchrone car les fonctions then( )et catch()sont appelées plus tard lorsque le travail est terminé. Et de la même manière, tout ce qui touche à l'I/O peut être exécuté de manière asynchrone.

2. Callbacks
   Une callback est simplement une fonction que vous définissez. Le principe de la callback est de la passer en paramètre d'une fonction asynchrone. Une fois que la fonction asynchrone a fini sa tâche, elle va appeler notre fonction callback en lui passant un résultat. Ainsi, le code que nous mettons dans notre fonction callback sera exécuté de manière asynchrone. Les événements sont un exemple typique de fonction asynchrone à laquelle on passe une fonction callback.
   element.addEventListener('click', function(e) {
   // Do something here ...
   });
   Dans l'exemple ci-dessus, la fonction qui est envoyée à addEventListener est une callback. Elle n'est pas appelée tout de suite, elle est appelée plus tard, dès que l'utilisateur clique sur l'élément. Ça ne bloque donc pas l'exécution du code et c'est donc asynchrone.
   Les callbacks sont la base de l'asynchrone en JavaScript et sont très utilisées.
   Les callbacks sont faciles à comprendre et à utiliser, mais elles souffrent d'un gros problème de lisibilité du code, via ce qu'on appelle le callback hell. En effet, on se retrouve régulièrement dans des situations où on va imbriquer plusieurs couches de callbacks , rendant le code difficile à lire et pouvant générer des erreurs.
   Pour gérer les erreurs avec les callbacks, la méthode la plus utilisée est de prendre 2 paramètres dans notre callback. Le 2e paramètre est notre donnée et le 1er est l'erreur. Si elle n'est pas null ou undefined, elle contiendra un message d'erreur indiquant qu'une erreur est intervenue.
   Si on reprend l'exemple ci-dessus, on voit par exemple que la lecture d'un fichier avec le module fs peut nous retourner une erreur :
   fs.readFile(filePath, function(err, data) {
   if (err) {
   throw err;
   }
   // Do something with data
   });

3. Promise
   Les promise, ou promesses en français, sont un peu plus complexes mais bien plus puissantes et faciles à lire que les callbacks. Lorsque l'on exécute du code asynchrone, celui-ci va immédiatement nous retourner une "promesse" qu'un résultat nous sera envoyé prochainement.
   Cette promesse est en fait un objet Promise qui peut être resolve avec un résultat, ou reject avec une erreur.
   Lorsque l'on récupère une Promise , on peut utiliser sa fonction then() pour exécuter du code dès que la promesse est résolue, et sa fonction catch() pour exécuter du code dès qu'une erreur est survenue.
   Voyons avec un exemple concret pour mieux comprendre :
   functionThatReturnsAPromise()
   .then(function(data) {
   // Do somthing with data
   })
   .catch(function(err) {
   // Do something with error
   });
   Dans l'exemple ci-dessus, la fonction functionThatReturnsAPromise nous renvoie une Promise . On peut donc utiliser sa fonction then() en lui passant une fonction qui sera exécutée dès qu'un résultat sera reçu (avec le résultat en question passé à notre fonction). On peut aussi utiliser sa fonction catch() en lui passant une fonction qui sera exécutée si une erreur est survenue (avec l'erreur en question passée à notre fonction).
   Le gros avantage est que l'on peut aussi chaîner les Promise. Ainsi, la valeur que l'on retourne dans la fonction que l'on passe à then() est transformée en une nouvelle Promise résolue, que l'on peut utiliser avec une nouvelle fonction then() . Si notre fonction retourne par contre une exception, alors une nouvelle Promise rejetée est créée et on peut l'intercepter avec la fonction catch() . Mais si la fonction que l'on a passée à catch() retourne une nouvelle valeur, alors on a à nouveau une Promise résolue que l'on peut utiliser avec une fonction then() , etc.
   Voici un exemple qui vous montre comment on peut profiter des Promise pour chaîner notre code asynchrone :
   returnAPromiseWithNumber2()
   .then(function(data) { // Data is 2
   return data + 1;
   })
   .then(function(data) { // Data is 3
   throw new Error('error');
   })
   .then(function(data) {
   // Not executed  
    })
   .catch(function(err) {
   return 5;
   })
   .then(function(data) { // Data is 5
   // Do something
   });
   Dans l'exemple ci-dessus, la fonction returnAPromiseWithNumber2 nous renvoie une Promise qui va être résolue avec le nombre 2.
   • La première fonction then() va récupérer cette valeur.
   • Puis, dans cette fonction on retourne 2 + 1 , ce qui crée une nouvelle Promise qui est immédiatement résolue avec 3 .
   • Puis, dans le then() suivant, nous retournons une erreur.
   De ce fait, le then() qui suit ne sera pas appelé et c'est le catch() suivant qui va être appelé avec l'erreur en question. Lui-même retourne une nouvelle valeur qui est transformée en Promise qui est immédiatement résolue avec la valeur 5 . Le dernier then() va être exécuté avec cette valeur.
   L’API Fetch utilise les Promise pour gérer les réponses aux requêtes HTTP, comme nous l’avons vu dans la partie précédente.

Une erreur correspond à une exception qui a été lancée, et il est possible de l'intercepter en appelant la fonction catch() de la Promise .

4. Async et await

async et await sont 2 nouveaux mots clés qui permettent de gérer le code asynchrone de manière beaucoup plus intuitive, en bloquant l'exécution d'un code asynchrone jusqu'à ce qu'il retourne un résultat.
async function fonctionAsynchrone1() {/_ code asynchrone _/}
async function fonctionAsynchrone2() {/_ code asynchrone _/}
async function fonctionAsynchrone3() {
const value1 = await fonctionAsynchrone1();
const value2 = await fonctionAsynchrone2();
return value1 + value2;
}
Nous avons un total de 3 fonction asynchrones Quand on utilise async et await , une fonction asynchrone doit avoir le mot clé async avant la fonction. Ensuite, dans le code, nous pouvons faire appel à des fonctions asynchrones et attendre leur résultat grâce au mot clé await que l'on met devant l'appel de la fonction.
async / await utilisent les Promise en arrière-plan, il est donc possible d'utiliser les 2 en même temps.

La levée d'une erreur se fait aussi par une exception. Pour intercepter cette erreur, il suffit d'exécuter notre code asynchrone dans un bloc try {} catch (e) {} , l'erreur étant envoyée dans le catch.

J’ai créé 2 fonctions asynchrones (avec le mot clé async) getNumber1() et getNumber2()
Dans un premier temps nous allons créer une fonction asynchrone (avec async) qui s'appelle compute et qui va récupérer les résultats des 2 fonctions asynchrones getNumber1() et getNumber2() (avec await) et renvoyer la somme des 2 valeurs récupérées.
Maintenant nous allons appeler notre fonction compute() et utiliser sa valeur de retour comme une Promise pour finalement afficher le résultat de la promesse dans le contenu HTML de l'élément ayant pour ID result.
async function getNumber1() {
return 10;
}
async function getNumber2() {
return 4;
}
async function compute() {
return await getNumber1() + await getNumber2();
}
compute()
.then(function(res) {
document
.getElementById("result")
.innerText = res + '';
});
