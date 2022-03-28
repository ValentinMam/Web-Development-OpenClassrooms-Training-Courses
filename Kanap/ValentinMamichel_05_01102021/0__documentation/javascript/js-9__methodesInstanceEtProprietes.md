# Définissez des méthodes d'instance et des propriétés

1. Classe et méthodes d’instance
   Une méthode d'instance est une fonction faisant partie d'une classe, et qui agit sur une instance de cette classe. Reprenons notre exemple de classe BankAccount (compte bancaire)
   class BankAccount {
   constructor(owner, balance) {
   this.owner = owner;
   this.balance = balance;
   }
   }
   Vous pouvez ensuite créer une instance de cette classe appelée newAccount (nouveau compte) :
   const newAccount = new BankAccount("Will Alexander", 500);

Vous pourriez afficher son solde à la console par newAccount.balance , mais si on pensait plutôt à ajouter une mise en forme ? Vous pouvez pour cela ajouter une méthode à la classe.
class BankAccount {
constructor(owner, balance) {
this.owner = owner;
this.balance = balance;
}
showBalance() {
console.log("Solde: " + this.balance + " EUR");
}
}
La nouvelle méthode ci-dessus, déclarée par son nom suivi par (), utilise le mot clé this pour accéder à la propriété balance de l'instance, et l'afficher sur la console avec une mise en forme supplémentaire. Ceci signifie que vous pouvez utiliser la notation dot sur l'instance newAccount pour appeler sa méthode showBalance() :
const newAccount = new BankAccount("Will Alexander", 500);
newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console
Vous pouvez aussi ajouter des méthodes capables de modifier les propriétés de l'instance. Dans ce cas, ajoutez les méthodes deposit() (dépôt) et withdraw() (retrait) à la classe, en n'oubliant pas que les deux ont besoin d'un paramètre amount (montant).
class BankAccount {
constructor(owner, balance) {
this.owner = owner;
this.balance = balance;
}
showBalance() {
console.log("Solde: " + this.balance + " EUR");
}
deposit(amount) {
console.log("Dépôt de " + amount + " EUR");
this.balance += amount;
this.showBalance();
}
withdraw(amount) {
if (amount > this.balance) {
console.log("Retrait refusé !");
} else {
console.log("Retrait de " + amount + " EUR");
this.balance -= amount;
this.showBalance();
}
}
}
• La méthode deposit() affiche le montant du dépôt sur la console, ajoute le montant au solde de l'instance, puis appelle la méthode showBalance() de l'instance, imprimant ainsi le nouveau solde sur la console.
• Dans le corps d'une classe, le mot clé this fait référence à l'instance créée de la classe. Dans cet exemple, il fait référence à newAccount .
• La méthode withdraw() vérifie si le montant demandé est supérieur au solde actuel. Si c'est le cas, il refuse le retrait ; sinon, il l'autorise, en soustrayant le montant du solde et en affichant le nouveau solde sur la console.

2. Méthode statique
   Elle est différente des méthodes d'instance parce qu'elle n'est pas liée à une instance particulière d'une classe, mais à la classe elle-même. Utilisez-la pour créer des méthodes utilitaires (helper en anglais) où vous n'aurez pas besoin d'une instance d'une classe pour les utiliser. Vous pourrez vous en servir comme boîte à outils de fonctions que vous utiliserez souvent.
   Par exemple, en JavaScript, l'objet Math contient beaucoup de méthodes utiles :
   const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]
   const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495
   Vous n'avez pas besoin de créer par new une instance de l'objet Math pour utiliser ces méthodes ; il suffit de les appeler sur l'objet Math global.

Vous pouvez créer vos propres méthodes statiques par le mot clé static  
class BePolite {
static sayHello() {
console.log("Hello!");
}
static sayHelloTo(name) {
console.log("Hello " + name + "!");
}
static add(firstNumber, secondNumber) {
return firstNumber + secondNumber;
}
}
BePolite.sayHello(); // imprime "Hello!""
BePolite.sayHelloTo("Will"); // imprime "Hello Will!""
const sum = BePolite.add(2, 3); // sum = 5
Vous n'avez pas besoin d'ajouter un constructor à votre classe, car vous n'allez pas l'instancier. Vous avez une méthode qui :
• imprime un message générique ;
• accepte un argument et l'utilise pour créer un message ;
• renvoie une valeur à partir des arguments que vous lui envoyez.
Toutes ces fonctionnalités pourraient être des fonctions, mais l'avantage d'utiliser des méthodes de classe statiques est par exemple de pouvoir les regrouper par catégorie ou par type.
