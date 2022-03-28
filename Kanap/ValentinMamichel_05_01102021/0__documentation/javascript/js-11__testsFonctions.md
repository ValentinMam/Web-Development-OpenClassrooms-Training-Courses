# Testez qu'une fonction fait ce qu'elle dit

1. Tests unitaires
   Le test unitaire vérifie des unités individuelles (en général des fonctions uniques ou des classes) en leur fournissant une entrée et en s'assurant qu'elles donnent la sortie attendue.
   En général, chaque unité est testée sur un cas simple, puis sur un ou plusieurs cas limites.
   Si par exemple, vous prenez quelques fonctions du chapitre précédent :
   const getWordCount = (stringToTest) => {
   const wordArray = stringToTest.split(' ');
   return wordArray.length;
   }
   const getLetterCount = (stringToTest) => {
   const wordArray = stringToTest.split(' ');
   let totalLetters = 0;
   for (let word of wordArray) {
   word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
   totalLetters += word.length;
   }
   return totalLetters;
   }
   Quels cas testeriez-vous pour chaque fonction ici ?
   • getWordCount – Vous pourriez vérifier une chaîne dont vous connaissez le nombre de mots (cas simple), puis peut-être une chaîne vide, et une chaîne qui ne contiendrait que des espaces (cas limite).
   • getLetterCount – Vous pourriez vérifier une chaîne dont vous connaissez le nombre de lettres (cas simple), puis essayer une chaîne ne contenant que des signes de ponctuation (cas limite).
   Vous pourriez écrire ces tests comme code accessoire :
   const testSimpleWordCount = () => {
   const testString = 'I have four words!';
   if (getWordCount(testString) !== 4) {
   console.error('Simple getWordCount failed!');
   }
   }
   const testEdgeWordCount = () => {
   const testString = ' ';
   if (getWordCount(testString) !== 0) {
   console.error('Edge getWordCount failed!');
   }
   }
   const testSimpleLetterCount = () => {
   const testString = 'I have twenty one letters!';
   if (getLetterCount(testString) !== 21) {
   console.error('Simple getLetterCount failed!');
   }
   }
   const testEdgeLetterCount = () => {
   const testString = '")(&;//!!';
   if (getLetterCount(testString) !== 0) {
   console.error('Edge getLetterCount failed!');
   }
   }
   J'ai utilisé console.error() plutôt que console.log() pour faire afficher les messages comme erreurs sur la console.
   Ce sont des tests simples, et ils peuvent convenir pour des vérifications rapides, mais il est généralement préférable d'utiliser une architecture de test.
   Les architectures et bibliothèques de test permettent d'écrire automatiquement des suites de tests complètes de votre code, à l'aide de fonctions et de syntaxe spécifiques. Voici à quoi pourraient ressembler les deux tests ci-dessus dans certaines architectures :
   describe('getWordCount()', function() {
   it('should find four words', function() {
   expect(getWordCount('I have four words!').to.equal(4));
   });
   it('should find no words', function() {
   expect(getWordCount(' ').to.equal(0));
   });
   });
   Les tests unitaires constituent généralement entre 60 et 80 % de l'ensemble des tests des projets JavaScript. Mais il existe d'autres tests, comme les tests d'intégration.
2. Tests d’integration
   Les tests d'intégration vérifient les multiples fonctions ou classes pour s'assurer qu'elles travaillent ensemble comme elles sont censées le faire.
3. Tests fonctionnels
   Les tests fonctionnels, aussi appelés de bout en bout (E2E), vérifient des scénarios complets en contexte. Par exemple, un utilisateur se connecte à votre application, ouvre ses notifications et les marque toutes comme lues. Ces tests vérifient aussi les ressources externes que votre projet peut utiliser, par exemple un système de paiement tiers.
   Comment ça se passe dans la pratique ?
   Pratiquer les tests unitaires demande un peu d'expérience et d’utiliser des outils dédiés. Il existe différents frameworks dédiés aux tests unitaires et fonctionnels pour les applications JavaScript frontend et/ou backend. On retrouve souvent les frameworks Jasmine, mocha.js, Mocha, etc.
   Pour utiliser ces outils, il est souvent nécessaire de mettre en place une configuration particulière et un système de compilation de votre code. Il vous est donc nécessaire d’appréhender plus largement JavaScript avant de pratiquer les tests. Une fois que vous aurez une bonne compréhension du JavaScript et un peu d'expérience, vous pourrez consulter le cours Testez l’interface de votre site.
