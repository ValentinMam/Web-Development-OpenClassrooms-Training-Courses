### Sommaire

# Découvrez les animations web

# Les transitions

# Déclenchez vos transitions avec les pseudoclasses

# Les 12 principes de l’animation au web

# Créez des transitions CSS à propriétés multiples

# Fonctions de timing

---

# Découvrez les animations web

• Techniques d'animation web

1. JavaScript, SVG, Canvas, WebGL…
2. CSS (codepen , sandbox…)

# Les transitions

Il existe deux moyens de créer des animations en CSS
• Les transitions
• Les keyframes.
Pour créer une transition, vous aurez besoin de plusieurs informations :
• une propriété CSS à modifier ;
• une valeur initiale pour votre propriété CSS ;
• une valeur finale pour cette même propriété ;
• une durée ;
• un événement pour déclencher votre transition.

Les transitions doivent être déclenchées par un changement d’état, généralement par des pseudoclasses.

1. Exemple : bouton grossit de 15% au survol
   • transform et sa fonction scale()  
   • :hover, avec la fonction scale() définie sur 1.15.
   • transition-property. transform est celle sur laquelle on applique la transition
   • La propriété transition-duration (s, ms..)

.btn {
transform: scale(1); transition-property: transform; transition-duration: 1000ms;
&:hover {transform: scale(1.15); } }
transition-duration: 1s; transition-duration: 1000ms;
La propriété transition vous permet de combiner toutes les propriétés en une. Elle commence par le nom de la propriété, un espace, puis la durée.
transition-property: transform;
transition-duration: 400ms;
transition: transform 400ms;

# Déclenchez vos transitions avec les pseudoclasses

Liste complète des pseudoclasses dans la documentation MDN. Liste des pseudoclasses les plus courantes :
• :hover, qui est déclenché au survol de la souris ;
• :active, activé au clic de l'utilisateur ;
• :focus, élément reçoit le focus (sélectionné au clavier ou souris) ;
• :valid, correctement par rapport au type de donnée attendu ;
• :invalid, inverse donnée attendu incorrecte ;
• :not(), cible les éléments qui ne sont pas représentés par cet argument ;
• :checked, input de type checkbox, option ou radio qui sont cochés ;
• :enabled, un élément avec lequel on peut interagir ;
• :disabled, qui correspond à un élément dont l'interaction a été bloquée.

1. Exemple : validation d’un formulaire
   • pseudoclasse:focus. feedback immédiat à l’utilisateur lorsqu’il sélectionne l’input en surlignant le bord de l’input.
   … & input {border: 2px solid $cd-box;
   &:focus { border: 2px solid $cd-txt; }…
   • & pseudoclasse :invalid, afin que les utilisateurs reçoivent l’information que l’adresse e-mail qu’ils ont entrée n’est pas valide.
   & input { border: 2px solid $cd-box;
   &:focus { border: 2px solid $cd-txt;}
   &:invalid {color: $cd-txt--invalid; }…
   • Affiner avec pseudoclasse :not(), combinée à la pseudoclasse :focus, afin de s’assurer que l’utilisateur a terminé de renseigner son adresse e-mail avant de lui faire un feedback de validation. La pseudoclasse :not passe à true lorsque le sélecteur qu’elle contient est à false.
   & input { border: 2px solid $cd-box;
   &:focus { border: 2px solid $cd-txt;}
   &:not(:focus):invalid {color: $cd-txt--invalid; }…

Pour qu’une pseudoclasse déclenche une transition sur un autre élément, cet élément doit être le voisin suivant direct (ou sibling) dans le document HTML. De fait, nous devons utiliser le combinateur d’adjacence + pour créer la transition sur l’élément voisin. 2. Exemple : div .btn et après div .ball
.btn { background: $cd-primary;
&:hover{transform: scale(1.15);}}
• Combinateur + pour combiner la pseudoclasse :hover avec l’élément .ball qui va grossir lorsque l’utilisateur survolera le bouton avec sa souris.
.btn {background: $cd-primary;
&:hover + .ball{transform: scale(1.15);}}
.ball {
background: $cd-secondary;
transform: scale(0.1);
transition: transform 4000ms;}

# Les 12 principes de l’animation au web

The Illusion of Life (Disney)- les “12 principes de l’animation”.

1. Squash and Stretch (compression et étirement)
   Donner de la masse à un objet, en l’étirant quand il accélère, puis en l’aplatissant et en l'élargissant quand il ralentit.
2. Anticipation
   Préparer l'audience à une action à venir, lui donnant ainsi plus d'impact.
3. Staging (mise en scène)
   Composition, guider les yeux des utilisateurs, vers les parties importantes de l’écran par l’utilisation de mouvements.
4. Straight Ahead and Pose to Pose (toute l'action d'un coup et partie par partie)
   • Les transitions sont basées sur une valeur de début et une valeur de fin.
   • Les keyframes, nous apprendrons à créer des animations partie par partie.

5. Follow Through and Overlapping Action (continuité du mouvement initial et chevauchement de deux mouvements consécutifs)
   Donner des vitesses différentes au différentes parties d’un objet ajoute de l’authenticité à nos animations, et contribue à lui donner une masse réaliste.
6. Slow in and slow out (ralentissement en début et en fin de mouvement)
   "ease-in" et "ease-out", ce principe est basé sur le fait que les objets ne démarrent pas et ne s’arrêtent pas instantanément. Ils accélèrent et décélèrent. Slow in fait référence à l’accélération d’un objet, et slow out à la décélération.
   Arc
   La nature ne crée pas de lignes droites, et les mouvements naturels ne font pas exception à la règle. L’introduction d’arcs dans le mouvement d’un objet peut aider à le rendre plus naturel.
7. Secondary Action (action secondaire)
   Ajouter des animations pour séparer différentes parties d’une scène peut aider à accentuer ou renforcer les principaux éléments d’une animation.
8. Timing
   Les objets doivent se déplacer à des vitesses crédibles par rapport à leur taille et à leur masse.
9. Exaggeration (exagération)
   Aller un peu au-delà des limites naturelles permet de donner un peu de caractère et de personnalité à une animation.
10. Solid Drawing (notion de volume)
    Référence à la façon de réaliser une scène en représentant correctement la perspective. Il est très important de comprendre les tenants et les aboutissants des propriétés qu’on utilise, pour s’assurer que les animations correspondent au résultat souhaité.
11. Appeal (charisme)
    Pour rendre nos animations plus dynamiques et plus intéressantes, on peut y ajouter quelques effets supplémentaires. Le centre de l’attention l’est parce qu’il attire tous les regards. C’est l’attrait et le charisme qui attirent l’attention, et la conservent.

# Créez des transitions CSS à propriétés multiples

Au sein d’une transition, vous pouvez animer deux propriétés (ou +)

1. Exemple : précédent (grossit au survol) + effet de fondu
   $cd-btn-start: rgba(1, 28, 55, 0); $cd-btn-end: rgba(1, 28, 55, 1);
   • Les deux variables ont la même valeur RGB. Seule leur valeur alpha diffère, avec une valeur de 0 (transparent) et 1 (opaque).
   .btn { background-color: $cd-btn-start;
   &:hover { transform: scale(1.13); background-color: $cd-btn-end;}}
   • All, lorsque vous souhaitez créer une transition à propriétés multiples.
   transition: all 450ms;
   • Lorsque vous souhaitez séparer les propriétés
   transition: transform 450ms, background-color 300ms;
   • retarder une transition avec transition-delay. :
   transition: transform 450ms, background-color 300ms;
   transition-delay: 0, 150ms;
   • Avec transition-delay nos transitions vont commencer à 150 ms d’écart et se terminer simultanément. Tout comme transition-property et transition-duration, cette propriété peut être définie directement dans transition, en l’indiquant juste après transition-duration.

# Fonctions de timing

Gérez l'accélération et la décélération de vos animations ease-in / ease-out.
Courbe de Bézier
• L’axe X : pourcentage d’avancement dans la durée de l’animation
• L’axe Y le pourcentage de mouvement effectué.
Le graphique commence en bas à gauche, avec 0 % de durée et de mouvement.

1. Exemple : une boîte qui se déplace de 1 000 pixels en 1 000 ms
   • La fonction linear
   Pour appliquer une fonction de timing linéaire à l'animation de notre boîte, nous pouvons ajouter la propriété transition-timing-function et indiquer sa valeur en linear :
   transition: transform 1000ms;
   transition-timing-function: linear;
   Ou bien nous pouvons l’ajouter au raccourci de la propriété de transition, en précisant le mot clé linear dans les valeurs :
   transition: transform 1000ms linear;
   Si on revient à notre boîte en mouvement avec sa courbe d’accélération linéaire, on pourra constater qu’elle se déplace à vitesse constante du départ à l’arrivée.

• Les fonctions ease-in-out, ease-in et ease-out
ease-in-out, elle suit une courbe d’accélération et de décélération
transition: transform 1000ms ease-in-out;
On peut voir l’augmentation de la vitesse puis sa réduction
On peut aussi choisir de seulement d'accentuer l'accélération ou la décélération avec ease-in et ease-out.
transition: transform 1000ms ease-in;
transition: transform 1000ms ease-out;
ease-in correspond au début du ease-in-out, avec une fin linéaire et inversement.

• La fonction ease
Le navigateur applique la fonction ease par défaut, qui ressemble aux courbes que nous venons de décrire. Mais ease suit un profil d’accélération plus net, et une rampe de décélération plus prononcée.

• La fonction cubic-bezier
Les fonctions de timing intégrées à CSS que nous avons vues jusqu'à présent ne sont que des raccourcis de fonctions cubic-bezier.
La fonction cubic-bezier fonctionne comme la fonction rgb() : on indique une liste de valeurs numériques, mais au lieu de transformer ces chiffres en couleur, la fonction cubic-bezier les transforme en courbe d’accélération. Par exemple, ease-in-out peut être écrite ainsi :
.selector {transition-timing-function: cubic-bezier(.42, 0, .58, 1);}
/_(X1,Y1)(X2,Y2)_/
transition-timing-function: cubic-bezier(.42, 0, .58, 1);}

cubic-bezier() a besoin d’une liste de 4 nombres :
• Les deux premiers les coordonnées X et Y du point qui déterminent le ease-in de la courbe d’accélération
• Les deux suivants déterminent le ease-out  
cubic-bezier.com.
Il ne nous reste plus qu’à coller ces valeurs cubic-bezier() dans notre transition, et c’est parti !
$trans-dur: 2000ms;
.strength {
transform: translateY(100%);
transition: transform $trans-dur cubic-bezier(0, .75, .08, 1);}
La boule accélère très rapidement, mais traîne sur la fin.
Ici, nous avons vu les principales fonctions de timing. Mais il en existe d'autres. Vous pouvez trouver une liste exhaustive sur la documentation MDN.
