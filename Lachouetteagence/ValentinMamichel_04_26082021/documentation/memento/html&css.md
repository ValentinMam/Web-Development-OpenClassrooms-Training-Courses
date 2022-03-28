TEST COMMIT OK

HTML & CSS MEMENTO

-HTML- (L6-L118)

Balises de premier niveau
Les balises de premier niveau sont les principales balises qui structurent une page HTML. Elles sont indispensables pour réaliser le « code minimal » d'une page web.
Balise Description

<html>	Balise principale
<head>	En-tête de la page
<body>	Corps de la page

Balises d'en-tête
Ces balises sont toutes situées dans l'en-tête de la page web, c'est-à-dire entre <head> et </head> :
Balise Description

<link />	Liaison avec une feuille de style
<meta />	Métadonnées de la page web (charset, mots-clés, etc.)
<script>	Code JavaScript
<style>	Code CSS
<title>	Titre de la page

Balises de structuration du texte
Balise Description
<abbr> Abréviation

<blockquote>	Citation (longue)
<cite>	Citation du titre d'une œuvre ou d'un évènement
<q>	Citation (courte)
<sup>	Exposant
<sub>	Indice
<strong>	Mise en valeur forte
<em>	Mise en valeur normale
<mark>	Mise en valeur visuelle
<h1> <h2>	Titre de niveau 1…
<h3> <h4>	
<h5> <h6>	
<img />	Image
<figure>	Figure (image, code, etc.)
<figcaption>	Description de la figure
<audio>	Son
<video>	Vidéo
<source>	Format source pour les balises <audio>  et <video>
<a>	Lien hypertexte
<br />	Retour à la ligne
<p>	Paragraphe
<hr />	Ligne de séparation horizontale
<address>	Adresse de contact
<del>	Texte supprimé
<ins>	Texte inséré
<dfn>	Définition
<kbd>	Saisie clavier
<pre>	Affichage formaté (pour les codes sources)
<progress>	Barre de progression
<time>	Date ou heure

Balises de listes
Cette section énumère toutes les balises HTML permettant de créer des listes (listes à puces, listes numérotées, listes de définitions…)
Balise Description

<ul>	Liste à puces, non numérotée
<ol>	Liste numérotée
<li>	Élément de la liste à puces
<dl>	Liste de définitions
<dt>	Terme à définir
<dd>	Définition du terme

Balises de tableau
Balise Description

<table>	Tableau
<caption>	Titre du tableau
<tr>	Ligne de tableau
<th>	Cellule d'en-tête
<td>	Cellule
<thead>	Section de l'en-tête du tableau
<tbody>	Section du corps du tableau
<tfoot>	Section du pied du tableau

Balises de formulaire
Balise Description

<form>	Formulaire
<fieldset>	Groupe de champs
<legend>	Titre d'un groupe de champs
<label>	Libellé d'un champ
<input />	Champ de formulaire (texte, mot de passe, case à cocher, bouton, etc.)
<textarea>	Zone de saisie multiligne
<select>	Liste déroulante
<option>	Élément d'une liste déroulante
<optgroup>	Groupe d'éléments d'une liste déroulante

Balises sectionnantes
Ces balises permettent de construire le squelette de notre site web.
Balise Description

<header>	En-tête
<nav>	Liens principaux de navigation
<footer>	Pied de page
<section>	Section de page
<article>	Article (contenu autonome)
<aside>	Informations complémentaires

Balises génériques
Les balises génériques sont des balises qui n'ont pas de sens sémantique. En effet, toutes les autres balises HTML ont un sens : <p> signifie « paragraphe », <h2> signifie « sous-titre », etc. Parfois, on a besoin d'utiliser des balises génériques (aussi appelées balises universelles) car aucune des autres balises ne convient. On utilise le plus souvent des balises génériques pour construire son design.
Il y a deux balises génériques : l'une est inline, l'autre est block.
Balise Description
<span> Balise générique de type inline

<div>	Balise générique de type block
Ces balises ont un intérêt uniquement si vous leur associez un attribut class  , id  ou style  :
•	class  : indique le nom de la classe CSS à utiliser.
•	id  : donne un nom à la balise. Ce nom doit être unique sur toute la page car il permet d'identifier la balise. Vous pouvez vous servir de l'ID pour de nombreuses choses, par exemple pour créer un lien vers une ancre, pour un style CSS de type ID, pour des manipulations en JavaScript, etc.
•	style  : cet attribut vous permet d'indiquer directement le code CSS à appliquer. Vous n'êtes donc pas obligé d'avoir une feuille de style à part, vous pouvez mettre directement les attributs CSS. Notez qu'il est préférable de ne pas utiliser cet attribut et de passer à la place par une feuille de style externe, car cela rend votre site plus facile à mettre à jour par la suite.
Ces trois attributs ne sont pas réservés aux balises génériques : vous pouvez aussi les utiliser sans aucun problème dans la plupart des autres balises.

-CSS- (L120-L...)

Propriétés de mise en forme du texte
Propriété Valeurs (exemples) Description
font-family police1, police2, police3, serif, sans-serif, monospace Nom de police
@font-face Nom et source de la police Police personnalisée
font-size 1.3em, 16px, 120%... Taille du texte
font-weight bold, normal Gras
font-style italic, oblique, normal Italique
text-decoration underline, overline, line-through, blink, none Soulignement, ligne au-dessus, barré ou clignotant
font-variant small-caps, normal Petites capitales
text-transform capitalize, lowercase, uppercase Capitales
font - Super propriété de police. Combine : font-weight , font-style , font-size , font-variant , font-family .
text-align left, center, right, justify Alignement horizontal
vertical-align baseline, middle, sub, super, top, bottom Alignement vertical (cellules de tableau ou éléments inline-block uniquement)
line-height 18px, 120%, normal... Hauteur de ligne
text-indent 25px Alinéa
white-space pre, nowrap, normal Césure
word-wrap break-word, normal Césure forcée
text-shadow 5px 5px 2px blue
(horizontale, verticale, fondu, couleur) Ombre de texte

Propriétés de couleur et de fond
Propriété Valeurs (exemples) Description
color nom, rgb(rouge,vert,bleu), rgba(rouge,vert,bleu,transparence), #CF1A20... Couleur du texte
background-color Identique à color Couleur de fond
background-image url('image.png') Image de fond
background-attachment fixed, scroll Fond fixe
background-repeat repeat-x, repeat-y, no-repeat, repeat Répétition du fond
background-position (x y), top, center, bottom, left, right Position du fond
background - Super propriété du fond. Combine : background-image , background-repeat , background-attachment , background-position
opacity 0.5 Transparence
Propriétés des boîtes
Propriété Valeurs (exemples) Description
width 150px, 80%... Largeur
height 150px, 80%... Hauteur
min-width 150px, 80%... Largeur minimale
max-width 150px, 80%... Largeur maximale
min-height 150px, 80%... Hauteur minimale
max-height 150px, 80%... Hauteur maximale
margin-top 23px Marge en haut
margin-left 23px Marge à gauche
margin-right 23px Marge à droite
margin-bottom 23px Marge en bas
margin 23px 5px 23px 5px
(haut, droite, bas, gauche) Super-propriété de marge.
Combine : margin-top , margin-right , margin-bottom , margin-left .
padding-left 23px Marge intérieure à gauche
padding-right 23px Marge intérieure à droite
padding-bottom 23px Marge intérieure en bas
padding-top 23px Marge intérieure en haut
padding 23px 5px 23px 5px
(haut, droite, bas, gauche) Super-propriété de marge intérieure.
Combine : padding-top , padding-right , padding-bottom , padding-left .
border-width 3px Épaisseur de bordure
border-color nom, rgb(rouge,vert,bleu), rgba(rouge,vert,bleu,transparence), #CF1A20... Couleur de bordure
border-style solid, dotted, dashed, double, groove, ridge, inset, outset Type de bordure
border 3px solid black Super-propriété de bordure. Combine ,border-width , border-color , border-style .
Existe aussi en versionborder-top , border-right , border-bottom , border-left .
border-radius 5px Bordure arrondie
box-shadow 6px 6px 0px black
(horizontale, verticale, fondu, couleur) Ombre de boîte
Propriétés de positionnement et d'affichage
Propriété Valeurs (exemples) Description
display block, inline, inline-block, table, table-cell, none... Type d'élément ( block , inline , inline-block , none …)
visibility visible, hidden Visibilité
clip rect (0px, 60px, 30px, 0px)
rect (haut, droite, bas, gauche) Affichage d'une partie de l'élément
overflow auto, scroll, visible, hidden Comportement en cas de dépassement
float left, right, none Flottant
clear left, right, both, none Arrêt d'un flottant
position relative, absolute, static Positionnement
top 20px Position par rapport au haut
bottom 20px Position par rapport au bas
left 20px Position par rapport à la gauche
right 20px Position par rapport à la droite
z-index 10 Ordre d'affichage en cas de superposition.
La plus grande valeur est affichée par-dessus les autres.
Propriétés des listes
Propriété Valeurs (exemples) Description
list-style-type disc, circle, square, decimal, lower-roman, upper-roman, lower-alpha, upper-alpha, none Type de liste
list-style-position inside, outside Position en retrait
list-style-image url('puce.png') Puce personnalisée
list-style - Super-propriété de liste. Combine list-style-type , ,list-style-position , list-style-image .
Propriétés des tableaux
Propriété Valeurs (exemples) Description
border-collapse collapse, separate Fusion des bordures
empty-cells hide, show Affichage des cellules vides
caption-side bottom, top Position du titre du tableau
Autres propriétés
Propriété Valeurs (exemple) Description
cursor crosshair, default, help, move, pointer, progress, text, wait, e-resize, ne-resize, auto... Curseur de souris
