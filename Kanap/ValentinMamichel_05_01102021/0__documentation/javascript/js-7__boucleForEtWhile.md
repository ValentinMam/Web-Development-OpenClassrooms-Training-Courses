# Utilisez la bonne boucle pour répéter les tâches (for, while)

En programmation, il y a des ensembles d'instructions à répéter plusieurs fois. Parfois, vous connaîtrez à l'avance le nombre de répétitions, d'autres fois non. Il est aussi possible que le nombre de fois n'importe pas, et que vous souhaitiez répéter le code jusqu'à atteindre une certaine condition. Pour tous ces cas, nous utiliserons des boucles.

1. Boucle for

Utilisez une boucle for pour les embarquer un par un jusqu'à atteindre 10 :
const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
console.log("Passager embarqué !");
}
console.log("Tous les passagers sont embarqués !");

Créez une variable d'indice i qui sert de compteur pour le nombre d'exécutions de la boucle. C'est pour cette raison qu'elle démarrera à zéro, car on n'a pas encore parcouru la boucle.

La deuxième commande dans les parenthèses for est la condition de poursuite de la boucle : dès qu'elle s'évalue comme false , on quitte la boucle. Dans ce cas, vous souhaitez l'exécuter autant de fois qu'il y a de passagers, donc quand l'indice i atteint 10 (après 10 boucles), vous souhaitez l'arrêter, car il n'y a plus de passager.

La troisième commande demande à la boucle for d'incrémenter i (ajouter 1) à chaque exécution. C'est ce qui permet de suivre le nombre d'exécutions de la boucle.

2. For in et for of

L'ancienne façon de parcourir un tableau dans une boucle était : for avec length .
for (let i = 0; i < passengers.length; i++) {
console.log("Passager embarqué !");
}
• La boucle for… in
La boucle for… in est très comparable à l'exemple de boucle for normale, mais elle est plus facile à lire, et effectue tout le travail d'itération pour vous :
const passengers = [
"Will Alexander",
"Sarah Kate'",
"Audrey Simon",
"Tao Perkington"
]
for (let i in passengers) {
console.log("Embarquement du passager " + passengers[i]);
}
Comme dans l'exemple précédent, i démarre automatiquement à zéro, et s'incrémente à chaque boucle. Vous imprimez donc passengers[0] , puis passengers[1] , puis passengers[2] , etc., jusqu'à terminer l'itération sur tous les passagers. Vous pouvez bien sûr imprimer chaque élément sur la console, car chacun est une chaîne contenant le nom du passager.
• La boucle for… of
Pour les cas où l'indice précis d'un élément n'est pas nécessaire pendant l'itération, vous pouvez utiliser une boucle for… of :
const passengers = [
"Will Alexander",
"Sarah Kate",
]
for (let passenger of passengers) {
console.log("Embarquement du passager " + passenger);
}
Ceci produit exactement le même résultat, mais de façon plus lisible, car vous n'avez pas à vous inquiéter des indices et des tableaux : vous recevez simplement chaque élément dans l'ordre. C'est encore plus utile si le tableau est un peu plus complexe et contient par exemple des objets :
const passengers = [
{
name: "Will Alexander",
ticketNumber: 209542
},
{
name: "Sarah Kate",
ticketNumber: 169336
},
]
for (let passenger of passengers) {
console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
} 3. While
while vérifie si une condition est vraie. Si c'est le cas, la boucle se poursuit ; sinon elle s'arrête.
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;
while (seatsLeft > 0 && passengersStillToBoard > 0) {
passengersBoarded++; // un passager embarque
passengersStillToBoard--; // donc il y a un passager de moins à embarquer
seatsLeft--; // et un siège de moins
}
console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges
Cette boucle while poursuit son exécution jusqu'à ce que l'un des nombres seatsLeft et passengersStillToBoard atteigne zéro, et à ce point elle se termine.
