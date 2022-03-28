# Gérez des erreurs et des exceptions dans votre programme

1. Erreurs de syntaxe
   Les erreurs de syntaxe (ou erreurs d'analyse) surviennent quand vous avez fait une faute d'écriture dans votre code (l'oubli ou de l'ajout d'un crochet ou d'une accolade, d'une faute d'orthographe sur un mot clé…).
2. Erreurs logiques
   Elles surviennent quand vous avez fait des erreurs dans la logique de votre programme (affectation d'une valeur erronée à une variable ; mélange de conditions dans les instructions if ; ordre incorrect d'écriture des lignes ou des blocs de code…). Seules l’analyse et la relecture de votre code permettront de déceler le souci.
3. Erreurs d'exécution
   Elles tendent à survenir quand quelque chose d'inattendu se produit dans votre application. Il s'agit souvent de quelque chose associé aux ressources extérieures (connexions réseau, appareils physiques, etc.) ou à une saisie/erreur humaine. Mais il y a des situations où vous savez par avance que ce type d'erreur est susceptible de survenir. Dans ces situations, vous pouvez prévoir du code de traitement d'erreur.
   Une façon de traiter les erreurs potentielles consiste à utiliser une instruction if / else pour vérifier la validité des données :
   if (dataExists && dataIsValid) {// utiliser les données ici
   } else {// gérer l'erreur ici
   }
   Vous pouvez aussi utiliser des blocs try / catch pour essayer (try) un code pouvant potentiellement renvoyer une erreur, et détecter (catch) les erreurs éventuelles survenues :
   try {// code susceptible à l'erreur ici
   } catch (error) {// réaction aux erreurs ici
   }

# Travaillez sur les fonctions

1. Les fonctions

Une fonction est un bloc de code auquel vous attribuez un nom. Quand vous appelez cette fonction, vous exécutez le code qu'elle contient.
// On définit la fonction
function afficherDeuxValeurs(valeur1, valeur2) {
console.log('Première valeur:' + valeur1);
console.log('Deuxième valeur:' + valeur2);
}
// On exécute la fonction
afficherDeuxValeurs(12, 'Bonjour');
// On obtient dans la console
// > Première valeur:12
// > Deuxième valeur:Bonjour
• Quand vous créez ou déclarez une fonction, vous indiquez la liste des variables dont elle a besoin pour effectuer son travail : vous définissez les paramètres de la fonction.
• Ensuite, à l'appel de la fonction, vous lui attribuez des valeurs pour ses paramètres. Les valeurs sont les arguments d'appel.
• Enfin, votre fonction peut vous donner un résultat : une valeur de retour.
