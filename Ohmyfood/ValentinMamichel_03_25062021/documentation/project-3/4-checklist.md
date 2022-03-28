# Checklist projet Ohmyfood!

#### Technologies

[X]Le développement devra se faire en CSS, sans JavaScript.
[X]Aucun framework ne devra être utilisé.
MAIS
[X]L’utilisation de SASS serait un plus.
[X]Aucun code CSS dans une balise HTML.

#### Compatibilité

[X]Approche mobile-first (maquettes fournies)
[X]Desktops adaptation libre
[X]Tablettes adaptation libre
[X]Site totalement responsive
[]Pas d'erreurs au W3C HTML
[]Pas d'erreurs au W3C CSS
[]Compatible avec dernière version de Chrome et Firefox (script autoprefixer)

#### Contenu des pages

#### Page d’accueil (x1)

[X]Affichage de la localisation des restaurants.
À terme il sera possible de choisir sa localisation pour trouver des restaurants proches d’un certain lieu.
[X]Une courte présentation de l’entreprise.
[X]Une section contenant les 4 menus sous forme cartes.
[X]Au clic sur la carte, redirection vers la page du menu.

#### Pages de menu (x4)

[X]4 pages contenant chacune le menu d’un restaurant.

#### Header

[X]Le header est présent sur toutes les pages.
[X]Sur la page d’accueil, il contient le logo du site.
[X]Sur les pages de menu, il contient en plus un bouton de retour vers la page d’accueil.

#### Footer

[X]Le footer est identique sur toutes les pages.
[X]Au clic sur “Contact”, un renvoi vers une adresse mail est effectué.

#### Effets graphiques et animations

[X]Les effets accessibles au clic ou au survol sont visibles sur la maquette.
[X]Ils devront utiliser CSS, pas de JavaScript ni de librairie.

#### Boutons

Au survol
[X]La couleur de fond des boutons principaux devra légèrement s’éclaircir.
[X]L’ombre portée devra également être plus visible.
À terme, les visiteurs pourront sauvegarder leurs menus préférés.
Pour ça, un bouton "J’aime" en forme de cœur est présent sur la maquette.
(Au clic, il devra se remplir progressivement)
[X]Pour cette première version, l’effet peut être apparaître au survol sur desktop au lieu du clic.

#### Page d’accueil

Quand l’application aura plus de menus, un “loading spinner” sera nécessaire.
Sur cette maquette, nous souhaitons en avoir un aperçu.
[X]Il devra apparaître pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et utiliser les animations CSS (pas de librairie).
[X]Le design est libre mais doit etre cohérent.

#### Pages de menu

À l’arrivée sur la page
[X]Les plats devront apparaître progressivement avec un léger décalage dans le temps.
Ils pourront soit apparaître un par un, soit par groupe “Entrée”, “Plat” et “Dessert”.
(exemple fourni)

[X]Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus.
[X]Cela fait apparaître une petite coche à droite du plat.
[X]Cette coche devra coulisser de la droite vers la gauche.
[X]Pour cette première version, l’effet peut apparaître au survol sur desktop au lieu du clic.
[X]Si l’intitulé du plat est trop long, il devra être rogné avec des points de suspension.
(exemple fourni)
