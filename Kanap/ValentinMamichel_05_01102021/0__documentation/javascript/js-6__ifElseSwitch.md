# Choisissez la condition appropriée (if, else, switch)

Le déroulement du programme est un terme général qui décrit l'ordre dans lequel s'exécutent vos lignes de code. Cela signifie que certaines lignes seront lues une seule fois, certaines plusieurs fois, et d'autres complètement ignorées, selon la situation.

1. If / else

L'instruction if / else est une des plus universelles en programmation. C'est ce qu'on appelle une instruction conditionnelle, parce qu'elle vérifie si certaines conditions sont réunies, et réagit en conséquence.
• Utilisez des valeurs boolean
if (myBoolean) {// réaction à la valeur vraie de myBoolean
} else {// réaction à la valeur faux de myBoolean}
Donc, pour vérifier si un utilisateur est connecté, vous pouvez procéder comme suit :
let UserLoggedIn = true;
if (UserLoggedIn) { console.log("Utilisateur connecté!");
} else { console.log("Alerte, intrus!");}
• Utilisez des expressions de comparaison
• < inférieur à ;
• <= inférieur ou égal à ;
• == égal à ;
• >= supérieur ou égal à ;
• > supérieur à ;
• != différent de.
const numberOfSeats = 30;
const numberOfGuests = 25;
if (numberOfGuests < numberOfSeats) {// autoriser plus d'invités
} else {// ne pas autoriser de nouveaux invités}

Vous pouvez aussi chaîner les instructions if / else pour réagir à des conditions potentielles multiples :
if (numberOfGuests == numberOfSeats) {// tous les sièges sont occupés
} else if (numberOfGuests < numberOfSeats) {// autoriser plus d'invités
} else {// ne pas autoriser de nouveaux invités} 2. Egalités, inégalités et conditions multiples
• L’égalité simple vérifie la valeur, mais pas le type. (==)
• L’égalité stricte vérifie à la fois la valeur et le type. (===)
• Inégalité, ! = et !== , avec la même distinction.
• && – ET logique – pour vérifier si deux conditions sont toutes les deux vraies ;
• || – OU logique – pour vérifier si au moins une condition est vraie ;
• ! – NON logique – pour vérifier si une condition n'est pas vraie.
let userLoggedIn = true;
let hasUserPremiumAccount = true;
let userHasMegaPremiumAccount = false;
userLoggedIn && userHasPremiumAccount; // true
userLoggedIn || userHasPremiumAccount; // true
!userLoggedIn; // false 3. Scope des variables
Variables créées par let ou const ne peuvent être vues ou utilisées qu'à l'intérieur du bloc de code dans lequel elles sont déclarées. Avec le mot clé var n'ont pas un scope de bloc mais un scope de fonction. Un bloc de code, aussi souvent appelé bloc tout court, est une section de code incluse entre accolades {}.
Ce phénomène est appelé portée des variables ou block scope.
let userLoggedIn = true;
if (userLoggedIn) {
let welcomeMessage = 'Welcome back!';
} else {
let welcomeMessage = 'Welcome new user!';
}
console.log(welcomeMessage); // renvoie une erreur

Pour cette situation, une méthode pourrait être de déclarer la variable dans la portée extérieure, puis de la modifier à l'intérieur des blocs if / else :
let userLoggedIn = true;
let welcomeMessage = ''; // déclarer la variable ici
if (userLoggedIn) {
welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
} else {
welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
}
console.log(welcomeMessage); // imprime 'Welcome back!'
Ici, du fait que la variable soit déclarée dans le scope parent, elle est disponible et accessible partout, et peut être modifiée correctement. 4. Switch

Et si vous souhaitez vérifier la valeur d'une variable par rapport à une liste de valeurs attendues, et réagir en conséquence ? Pour cela, vous pouvez utiliser l'instruction switch.
let firstUser = {
name: "Will Alexander",
age: 33,
accountLevel: "normal"
}; …..
Vous pouvez ici utiliser une instruction switch , qui prend la variable à vérifier et une liste de valeurs, comme différents cas :
switch (firstUser.accountLevel) {
case 'normal':
console.log('You have a normal account!');
break;
case 'premium':
console.log('You have a premium account!');

break;
case 'mega-premium':
console.log('You have a mega premium account!');
break;
default:
console.log('Unknown account type!');
}

Après chaque instruction case , ajoutez l'instruction break . Si vous ne le faites pas, JavaScript continuera l'exécution des cas suivants (en cascade) jusqu'à rencontrer une instruction break ou la fin de l'instruction switch, vous pouvez aussi ajouter un cas default qui ne sera exécuté que si la variable que vous vérifiez ne correspond à aucune des valeurs répertoriées.
Le switch peut servir dans différents cas mais surtout rendre plus facile à lire l'enchaînement de condition if/else .
if (firstUser.accountLevel === 'normal' ) {
console.log('You have a normal account!');
} else if (firstUser.accountLevel === 'premium' ) {
console.log('You have a premium account!');
} else if (firstUser.accountLevel === 'mega-premium' ) {
console.log('You have a mega premium account!');
} else {
console.log('Unknown account type!');
}
Comme vous pouvez le voir, les instructions switch utilisent aussi des accolades. C'est un autre exemple de bloc de code, donc les variables éventuellement déclarées à l'intérieur d'une instruction switch ne seront pas disponibles pour le code environnant !
