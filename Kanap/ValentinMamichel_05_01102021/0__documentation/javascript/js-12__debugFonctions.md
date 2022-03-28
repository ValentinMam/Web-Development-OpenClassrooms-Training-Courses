# Déboguez votre fonction

1. Console log
   La console est un outil incroyablement utile pour le débogage du code. Observons une version défectueuse d'une fonction d'un chapitre précédent :
   const getWordCount = (stringToTest) => {
   const wordArray = stringToTest.split('');
   return wordArray.length;
   }
   Pour une raison quelconque, cette fonction renvoie des valeurs curieuses. Utilisons un affichage de console pour voir ce qui se passe :
   const getWordCount = (stringToTest) => {
   const wordArray = stringToTest.split('');
   console.log("Word array in getWordCount: ");
   console.log(wordArray);
   return wordArray.length;
   }
   Maintenant, à l'appel suivant, nous obtenons le résultat suivant sur la console :
   getWordCount('I am a fish');
   /_ la console montre :
   "Word array in getWordCount:"
   ["I", " ", "a", "m", " ", "a", " ", "f", "i", "s", "h"]
   _/
   Plutôt que de répartir la chaîne en mots, elle la répartit en lettres ! Une observation plus attentive de la fonction montre une erreur à l'appel de split : ce devrait être stringToTest.split(' ') , et non pas stringToTest.split('') .
   L'utilisation de la console convient bien dans les cas simples et isolés comme celui-ci.
2. Environnements intégrés
   Pour écrire du JavaScript pour des sites web, vous pouvez utiliser les outils pour développeur intégrés dans les quatre navigateurs essentiels : Chrome, Firefox, Safari et Edge. Chaque navigateur contient un système qui vous permet d'ajouter des points d'arrêt pas-à-pas (breakpoints) à votre code. Quand le navigateur arrive sur un point d'arrêt de votre code, il met l'exécution en pause, ce qui vous permet de parcourir l'exécution ligne après ligne, en vérifiant les valeurs des variables à chaque étape. Vous pouvez même ignorer certains morceaux de code si vous souhaitez voir comment votre appli y réagit.
   La plupart des environnements de développement intégrés comportent aussi un débogueur, qui vous permet de tout déboguer dans votre espace de travail.
   L'affichage de console, c'est bien, les débogueurs, c'est mieux, mais quand tout le reste a échoué, il existe une dernière solution.
