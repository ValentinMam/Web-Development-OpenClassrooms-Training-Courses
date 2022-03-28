# Exécutez du JavaScript facilement

L'avantage du JavaScript, c'est que ce langage vous permet de programmer dans de nombreux environnements différents.

1. JSBin
   JSBin est un excellent outil pour tester des extraits de code en JavaScript. Dans JSBin, vous pouvez écrire du code ligne par ligne dans le volet JavaScript, et utiliser le bouton Run pour l'exécuter. JSBin parcourt alors vos lignes de code et les exécute l'une après l'autre. L'ordre est donc important.
   let numberOfGuests = 20;
   console.log(numberOfGuests); // 20
   ... n'est pas identique à :
   console.log(numberOfGuests); // undefined
   let numberOfGuests = 20;

2. Code pour page web
   Vous écrivez du code, l'enregistrez dans un ou plusieurs fichiers, puis importez ces fichiers par une balise spéciale dans votre fichier HTML. Le navigateur exécute ensuite automatiquement le code dans ces fichiers, en général dans l'ordre de leur importation.
3. Code pour les serveurs
   Il peut maintenant aussi s'utiliser en arrière-plan, pour gérer l'accès à certaines ressources. Néanmoins, les serveurs doivent être actifs à tout moment, et seuls certains éléments de code doivent être exécutés à certains moments. Dans ce cas, un environnement (tel que Node), couplé à un code JavaScript particulier, fait que cela se produit.
