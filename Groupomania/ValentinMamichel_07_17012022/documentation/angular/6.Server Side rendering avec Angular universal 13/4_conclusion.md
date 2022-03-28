Il ne reste plus qu'à tester tous les scripts précédents et finaliser par le SSR.

# Développement

npm run start
http://localhost:4200/

# Tests

npm run test

# AOT Compilation

npm run build

# SSR Compilation

npm run build:ssr
npm run serve:ssr
http://localhost:4000/

Enfin nous allons vérifier le code source produit dans la page correspondante à la compilation SSR..
En utilsant le navigateur Chrome il faut taper Ctrl + U pour voir le code html.

On remarque que le code "Features" s'affiche cette fois dans le navigateur.
La page sera dès lors bien interprétée par les moteurs de recherche.

Remarque
Certaines versions d'Angular 9 ne permettent pas de vérifier le résultat SSR dans votre navigateur.
Pourtant SSR fonctionne côté serveur avec les robots google.

Pour le vérifier utilisez le logiciel curl

Par exemple sur localhost
curl http://localhost:4000/ > ssr-results.txt

Sur la version Démo
curl https://angular.ganatan.com/ > ssr-results.txt
Puis vérifiez le contenu du fichier ssr-results.txt
Vous verrez dans le code HTML apparaitre le texte voulu.
