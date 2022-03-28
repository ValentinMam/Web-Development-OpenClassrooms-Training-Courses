# KANAP PROJECT - APPLICATION WEB COMPOSEE DE 4 PAGES

## PAGE D'ACCUEIL

[]Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à la vente.

Pour chaque produit, il faudra afficher:
[]Image produit
[]Nom produit
[]Description produit

[]En cliquant sur le produit, l’utilisateur sera redirigé sur la page du produit pour consulter celui-ci plus en détail.

## PAGE PRODUIT

[]Une page “produit” qui affiche (de manière dynamique) les détails du produit sur lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page l’utilisateur peut :

[]Sélectionner une quantité
[]Sélectionner une couleur
[]Ajouter le produit à son panier

[]Ces éléments doivent être pris en compte dans le panier.

## PAGE PANIER

[]Une page “panier”.
Celle-ci contient plusieurs parties :

1. []Résumé des produits dans le panier (regroupés par modèle et par couleur)
   []Si un produit est ajouté dans le panier à plusieurs reprises, avec la même couleur = apparaître qu’1 seule fois
   []Si un produit est ajouté dans le panier à plusieurs reprises, mais avec des couleurs différentes = apparaître en 2 lignes distinctes
   []Prix total (le total du panier devra bien se mettre à jour)
   []La possibilité de modifier la quantité d’un produit sélectionné (le nombre d’exemplaires ajusté)
   []la possibilité de supprimer un produit sélectionné (le produit devra donc disparaître de la page)
2. []Un formulaire permettant de passer une commande
   []Les données du formulaire doivent être correctes et bien formatées (ex: adresse mail sans @)
   []En cas de mauvaise saisie = Un message d’erreur devra être affiché en dessous du champ correspondant.

## PAGE CONFIRMATION

[]Une page “confirmation” :
[]Un message de confirmation de commande
[]Numéro de commande envoyé par l’API.
