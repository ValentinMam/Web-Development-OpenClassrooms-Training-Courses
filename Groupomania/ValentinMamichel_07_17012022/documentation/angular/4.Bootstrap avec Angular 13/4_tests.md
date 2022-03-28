Il ne reste plus qu'à tester les différents scripts Angular.

# Développement

npm run start
http://localhost:4200/

# Tests

npm run test

# Compilation

npm run build
Erreurs de compilation
La compilation va générer une erreur.
La raison notre code CSS dépasse une certaine taille préconisée dans les paramètres.

Les paramètres sont contenus dans le fichier angular.json.
Ces paramètres sont restrictifs à mon sens il suffit de les modier pour supprimer le warning

Pour le bundle initial le paramètre maximumWarning est par défaut à 500kb
Nous utiliserons maximumWarning à 1mb

Pour les autres composants le paramètre maximum Warning est par défaut à 2kb
Nous utiliserons maximumWarning à 4kb

"production": {
"budgets": [
{
"type": "initial",
"maximumWarning": "1mb",
"maximumError": "1mb"
},
{
"type": "anyComponentStyle",
"maximumWarning": "4kb",
"maximumError": "4kb"
}
],
