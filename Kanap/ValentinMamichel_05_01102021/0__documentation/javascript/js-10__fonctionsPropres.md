# Écrivez des fonctions propres

1. Ne pas se répéter (DRY)
   Si vous vous trouvez à écrire plusieurs fois le même code, vous devriez probablement le refactoriser dans une fonction. La refactorisation du code consiste à modifier la structure d'un élément de code sans changer son comportement.
   const sendWelcomeMessageToUser = (user) => {
   if (user.online) {
   if (user.accountType === "normal") {
   console.log("Hello " + user.name + "!");
   } else {
   console.log("Welcome back premium user " + user.name + "!");
   }
   }
   }
   sendWelcomeMessageToUser(firstUser);
   sendWelcomeMessageToUser(secondUser);
   sendWelcomeMessageToUser(thirdUser);

Nous avons créé une fonction sendWelcomeMessageToUser (un nom qui exprime clairement ce que fait la fonction) et l'avons appelée pour chaque utilisateur.

2. Une seule chose à la fois
   Avec des fonctions qui ne font qu'une seule chose (et dont le nom décrit ce qu'elles font), vous pouvez rendre votre code bien plus propre et plus facile à comprendre :
   const getWordCount = (stringToTest) => {
   const wordArray = stringToTest.split(" ");
   return wordArray.length;
   }
   const getLetterCount = (stringToTest) => {
   const wordArray = stringToTest.split(" ");
   let totalLetters = 0;
   for (let word of wordArray) {
   word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
   totalLetters += word.length;
   }
   return totalLetters;
   }
   const getAverageWordLength = (stringToTest) => {
   return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
   }
   const printStringStats = (stringToTest) => {
   console.log({
   wordCount: getWordCount(stringToTest),
   letterCount: getLetterCount(stringToTest),
   averageWordLength: getAverageWordLength(stringToTest)
   })
   }
   Bien que cette version soit plus longue, il y a trois fonctions – getWordCount (qui renvoie le nombre de mots), getLetterCount (qui renvoie le nombre de lettres) et getAverageWordLength (qui renvoie la longueur moyenne des mots) – appelées par la fonction printStringStats (qui imprime les statistiques de la chaîne de caractères).

3. Les commentaires

Le commentaire sur une seule ligne explique la raison de l'appel, d'apparence complexe, à replace ; Le commentaire sur plusieurs lignes explique que la longueur moyenne du mot sera renvoyée à 2 décimales près, car ce n'est pas immédiatement apparent.
const getWordCount = (stringToTest) => {
const wordArray = stringToTest.split(' ');
return wordArray.length;
}
const getLetterCount = (stringToTest) => {
const wordArray = stringToTest.split(' ');
let totalLetters = 0;
for (let word of wordArray) {
// retire la ponctuation pour ne compter que les lettres
word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
totalLetters += word.length;
}
return totalLetters;
}
/_
** renvoie la longueur moyenne des mots
** arrondie à deux chiffres après la virgule
_/
const getAverageWordLength = (stringToTest) => {
return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
}
const printStringStats = (stringToTest) => {
console.log({
wordCount: getWordCount(stringToTest),
letterCount: getLetterCount(stringToTest),
averageWordLength: getAverageWordLength(stringToTest)
})
}

4. Nommage et mise en forme
   • Les noms de variable et de fonction dans JavaScript sont généralement écrits en "camel case" minuscule ( getWordCount , numberOfCats ).
   • Les noms de classe sont écrits en "camel case" majuscule ( PremiumAccount , SpecialGuest ).

Le terme mise en forme du code recouvre beaucoup de domaines ; en voici quelques-uns :
• Mise en retrait (Tabulations ou espaces ? Deux espaces ou quatre ?)
• Espacement (Plus d’espace = code plus lisible)
• Positionnement des accolades (Avec vos préférences et celles de l’équipe)
