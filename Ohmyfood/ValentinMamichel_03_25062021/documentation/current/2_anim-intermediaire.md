### Sommaire

# Optimisez les performances de votre navigateur pour vos animations CSS

# Créez des animations fluides avec la propriété CSS transform

# Modifiez le point d’ancrage d’un élément grâce à transform-origin

# Analysez la performance de vos animations avec Chrome DevTools

# Animez les couleurs de manière performante avec opacity

---

# Optimisez les performances de votre navigateur pour vos animations CSS

Frames Per Second (FPS= nombre d’images individuelles affichées en une seconde. Plus les FPS sont élevées, plus le mouvement paraît fluide. (idéal 60 FPS).
On divise une seconde par la durée de calcul, en secondes. Donc 1/0,04 = 25 FPS.
Pour passer du code à une page web, le navigateur passe par 4 étapes :

1. Style : le navigateur reçoit le code HTML. Il va l'interpréter pour comprendre la structure du DOM (Document Object Model). Ainsi, pour chaque balise HTML, il crée un élément du DOM. Il parcourt ensuite le CSS, et détermine quelles règles s’appliquent à quels éléments. À partir de là, il va créer la structure qui s'affichera.
   Le DOM est une représentation du HTML d'une page web. Il faut voir le DOM comme un arbre où chaque élément peut avoir zéro ou plusieurs enfants, qui peuvent avoir eux-mêmes zéro ou plusieurs enfants…
2. Layout (mise en page) : maintenant que le navigateur connaît les styles et les éléments à afficher, il détermine la taille des éléments et où les placer.
3. Paint (peinture) : le navigateur transforme les éléments en pixels en utilisant les styles de l’étape 1, et les positions et dimensions déduites de l’étape 2.
4. Composition : le navigateur combine tous les éléments pour composer la page qui s’affiche dans le navigateur.
   csstriggers.com
   Chaque étape nécessite un temps de calcul au navigateur. Il est donc plus judicieux de passer par le moins d'étapes possible si on veut respecter le seuil des 16 millisecondes pour chaque étape de notre animation. Pour assurer la fluidité des animations, il faut se contenter d’animer des propriétés de l’étape composition. Les plus utiles sont transform et opacity .

# Créez des animations fluides avec la propriété CSS transform

La propriété transform dispose de plus de 20 fonctions différentes.

1.  Modifiez la taille d'un élément avec scale
    • Pour utiliser la propriété transform sur un élément, nous devons lui fournir la fonction fonction scale() transform: scale(2);
    • On peut également lui préciser deux valeurs, une pour modifier la largeur (X), et une autre pour modifier la hauteur (Y).transform: scale(3, 0.5);
    • Quand on veut modifier l’échelle dans une seule direction, on peut utiliser les fonctions scaleX() et scaleY(). scaleX() permet de modifier un objet horizontalement, et scaleY() verticalement. transform: scaleX(2);

2.  Modifiez la position d'un élément
    • La fonction translate est le moyen idéal pour modifier la position d'un élément dans une animation web. translate() prend deux valeurs en paramètres. La première indique la distance à laquelle on veut se déplacer sur l’axe X, et la seconde la distance sur l’axe Y. Elle accepte différentes unités, comme les px, les vh ou les em. Nous pouvons donc déplacer notre boîte de 150 px vers la droite et 7 vh vers le haut, comme ça :transform: translate(150px, -7vh);
    • Vous pouvez également utiliser des pourcentages. Pour certaines propriétés CSS, les pourcentages sont calculés par rapport à leur élément parent. Par exemple, width: 50% signifie la moitié de la largeur du parent. Mais quand on utilise des pourcentages avec translate(), ces pourcentages sont liés à l’élément lui-même.
    • Comme nous l'avons vu avec scale(), il est possible de déplacer des éléments sur l’axe X et Y séparément, grâce aux fonctions translateX() et translateY().
    • Ajoutons un peu de texte que nous allons faire apparaître dans la boîte :
    <div class="box"> Boop!</div>
    • La structure convient, mais pour animer le texte séparément de son élément parent, nous devons l’envelopper dans un conteneur. Plaçons-le donc au sein d’un <span> :
    <div class="box"> <span>Boop!</span></div>
    • <span> donne à la propriété transform un élément auquel s’accrocher pour le manipuler. Réglons maintenant notre propriété transform pour qu’elle utilise translateY(). Cela permet d'avoir notre texte hors de la boîte au début de l'animation, puis de le faire défiler dedans :
    .btn {
    &:hover + .box {
    transform: scale(1);
    span {
    transform: translateY(0);
    }
    }
    }
    .box {
    transform: scale(0.1);
    transition: transform 330ms ease-in-out;
    overflow: hidden;
    span {
    display: inline-block;
    transform: translateY(250%);
    transition: transform 280ms ease-out 50ms;
    }
    }
    • Vous avez remarqué le changement de la valeur de display en inline-block ? En effet, la valeur de display par défaut de <span> est inline. Or, transform ne peut pas manipuler d’éléments inline. Nous devons donc modifier le mode d’affichage en block ou inline-block avant d’obtenir des résultats.
    • Vous avez peut-être aussi remarqué que le texte n'apparaît pas tant qu'il n'est pas dans la boîte : c'est la propriété overflow: hidden; qui nous permet cela.
    • Nous avons aussi ajouté à notre transition span un petit délai et raccourci sa durée, pour qu’elle agisse un peu comme une animation secondaire

3.  Faites pivoter vos éléments avec rotate()
    • On peut paramétrer rotate() en plusieurs unités. Nous verrons ici les plus simples à utiliser : les degrés exprimés en "deg" et les turns. Un turn correspond à 360 degrés.
    .btn {
    &:hover + .boxes {
    & > .boxes--rotDegrees {
    transform: rotate(0deg);
    }
    & > .boxes--rotTurns {
    transform: rotate(0turn);
    }
    }
    }
    .boxes {
    &--rotDegrees {
    transform: rotate(-360deg);
    transition: transform 500ms ease-in-out;
    }

        &--rotTurns {
            background: pink;
            transform: rotate(-1turn);
            transition: transform 500ms ease-in-out;

4.  Combinez les fonctions scale, position et rotate !
    • L’utilisation de plusieurs fonctions a un bémol : l’ordre dans lequel on assigne les fonctions peut avoir un gros impact sur le résultat final. Il faut savoir que le navigateur effectue les calculs de chaque fonction de droite à gauche.
    • Ici, l'ordre selon lequel vous effectuez la rotation et le changement d’échelle ne va pas poser de problème.
    • Pour scale et translate, en revanche, c’est très différent. Si on déplace un élément de 200 % avant de l’agrandir à 200 %, cela aura un résultat très différent par rapport au fait de l’agrandir avant de le déplacer :
    .btn {
    &:active + .box {
    & > .box**base--tranxScale {
    transform: translateX(200%) scale(2);
    }
    & > .box**base--scaleTranx {
    transform: scale(2) translateX(200%);
    }
    }
    }
    .box {
    &**base {
    &--tranxScale {
    background-color: #15dea5;
    transition: transform 330ms ease-in-out;
    }
    &--scaleTranx {
    background-color: pink;
    transition: transform 330ms ease-in-out;
    }
    }
    }
    • On applique .box**base-tranxScale à la première boîte : elle va commencer par appliquer la transformation scale(), suivie de translateX().
    • La deuxième boîte fonctionne avec .box\_\_base--scaleTranx() et appliquera la transformation translateX(), suivie de scale() :

5.  Penchez du bon côté de la force
    • La fonction skew(), dans le même esprit que position et scale, vous pouvez désormais incliner des objets horizontalement ou verticalement. Pour cela, skew() penche les bords horizontaux ou verticaux, ou même les deux, en utilisant les fonctions skewX(), skewY(), et skew() :
    .box {
    &--skewX {
    transform: skewX(45deg);
    }
    &--skewY {
    transform: skewY(45deg);
    }
    &--skew {
    transform: skew(45deg, 45deg);
    }
    }

6.  Passez dans une nouvelle dimension
    • Les fonctions pour les transformations en 3D sont proches des versions 2D, à ceci près qu'elles ont également la capacité de transformer sur l’axe Z.

• Pour effectuer une transformation d’échelle en 3D sur l’axe Z, il faut d’abord l’avancer vers l’avant ou l’arrière en utilisant translateZ() ou translate3d(). Sinon, scaleZ() ou scale3d() verrait son échelle modifiée de 0… ce qui n’aurait aucun effet, évidemment.
• Si les fonctions 3D ressemblent beaucoup aux fonctions 2D, vous avez peut-être remarqué une nouvelle fonction : perspective().
• La valeur qu’on donne à perspective() indique au navigateur à quelle "distance" se trouve le spectateur. Comme dans le monde réel, plus un objet est proche, plus le mouvement aura l’air important, alors qu’à l’inverse, un objet distant semblera plus statique.
.box {
&--perspective75px {
transform: perspective(75px) rotateX(45deg);
}
&--perspective150px {
transform: perspective(150px) rotateX(45deg);
}
&--perspective300px {
transform: perspective(300px) rotateX(45deg);
}
}
• Avec une perspective de 75 px, on se retrouve bien plus proche de la boîte qu’à 150 ou 300 px. La rotation 3D semble donc bien plus marquée que les transformations dont la perspective est plus grande.
• On peut utiliser la perspective et les transformations 3D pour ajouter de la profondeur et des effets visuels à nos animations.

# Modifiez le point d’ancrage d’un élément grâce à transform-origin

Par défaut, toutes les fonctions de transform partent du centre de l’élément. Donc quand on change l’échelle d’un objet, il s’agrandit vers l’extérieur et quand on fait pivoter un élément, il reste sur son axe.
La propriété transform-origin permet de déplacer un point d’ancrage où on veut, pour faire partir nos animations de ce point.

1. Déplacez le centre
• Propriété transform  
• Créons donc une barre de chargement, avec une image vide qui se remplit pendant le chargement : sa progression ne correspond pas réellement au pourcentage de chargement, mais sert de transition entre deux blocs de contenu.
<div class="container">
    <div class="btn">Charger!</div>
    <div class="progress">
        <div class="progress__bar"></div>
    </div>
</div>
•	Maintenant, ajoutons la propriété  transform  à notre barre, et servons-nous de la fonction scale-x qui nous est déjà familière sur 0 :
.progress {
    &__bar {
    transform: scaleX(0);
    }
}
•	Nous pouvons utiliser le pseudosélecteur  :active  pour la remplir afin d'agrandir la barre à 100 % de largeur quand on clique sur le bouton “Charger”. Maintenant, quand on clique sur le bouton, la barre de chargement se remplit… immédiatement.
.btn {
    &:active {
    & + .progress {
        & > .progress__bar {
                transform: scaleX(1);
            }
        }
    }
}
.progress {
    &__bar {
        transform: scaleX(0);
    }
}
•	Nous voulons donc remplir la barre petit à petit. Pour cela, ajoutons donc une transition, en l’animant sur une durée de 2 secondes :
.btn {
    &:active {
        & + .progress {
            & > .progress__bar {
                transform: scaleX(1);
            }
        }
    }
}
.progress {
    &__bar {
        transform: scaleX(0);
        transition: transform 2000ms;
    }
}
•	Les barres de chargement se remplissent normalement depuis la gauche vers la droite. Ici, la barre se remplit, mais en partant du milieu. Pour corriger notre barre, nous pouvons maintenant tester la propriété  transform-origin. transform-origin  nous permet de déplacer le centre d'origine de notre transformation, selon les valeurs que nous lui assignons.
•	Pour déplacer le centre d’origine, on peut utiliser des unités comme les pixels, ou un pourcentage des dimensions d’un élément, de la même manière que pour la fonction  translate  . Dans les deux cas, l’axe X est mesuré à partir de la bordure gauche de l’élément, et l’axe Y est mesuré depuis le bord supérieur.
•	Le point d’origine par défaut, au centre de l’élément, peut donc être écrit de cette manière :  transform-origin: 50% 50% ;
•	Ici, nous voulons placer le point d’origine de notre barre de chargement sur sa bordure gauche, pour qu’elle progresse vers la droite. Nous devons donc mettre l'origine de x à 0 %
.btn {
    &:active {
        & + .progress {
            & > .progress__bar {
                transform: scaleX(1);
            }
        }
    }
}
.progress {
    &__bar {
        transform-origin: 0% 50%;
        transform: scaleX(0);
        transition: transform 1000ms; 
    }
}
•	Mettons notre touche finale en ajoutant notre propre fonction de timing  cubic-bezier(). Nous voulons que la barre commence avec un ease-in peu prononcé, mais que son ease-out soit bien perceptible à la fin. cubic-bezier(.32, 0, .07, 1). Rentrons-les dans notre fonction de timing :
.btn {
    &:active {
        & + .progress {
            & > .progress__bar {
                transform: scaleX(1);
            }
        }
    }
}
.progress {
    &__bar {
        transform-origin: 0% 50%;
        transform: scaleX(0);
        transition: transform 1000ms cubic-bezier(.32,0,.07,1);
    }
}
2. Utilisez la bonne valeur
   Les valeurs de transform-origin ne se limitent pas à des longueurs ou des pourcentages.On peut aussi utiliser des mots clés CSS pour définir les points d’ancrage.
   • Left pour le mettre sur le bord gauche, ou right pour le mettre à droite
   .box--left-origin {
   transform-origin: left 50%;}
   .box--right-origin {
   transform-origin: right 50%;}
   • On peut aussi utiliser top et bottom :
   .box--top-origin {
   transform-origin: 50% top;}
   .box--bottom-origin {
   transform-origin: 50% bottom;}
   • Le dernier mot clé est center. Il peut être assigné à l’axe X ou Y, et correspond à une valeur de 50 :
   .box--left-origin {
   transform-origin: center center;}
   • Jusqu’à maintenant, nous avons toujours assigné deux valeurs à transform-origin, une pour X et l’autre pour Y. Mais une seule valeur peut aussi suffire. Si cette valeur est un nombre, elle s’appliquera à l’axe X et laissera Y à la valeur par défaut de 50 %.
   • Dans le cas de notre barre de progression, c'est surtout la valeur de X qui nous intéresse. La valeur de 50 % pour l’axe Y est donc superflue. Retirons cette valeur, ce qui simplifie le code et montre plus explicitement que nous modifions l'axe X quand nous relirons le code dans le futur :
   .btn {
   &:active {
   & + .progress {
   & > .progress**bar {
   transform: scaleX(1);
   }
   }
   }
   }
   .progress {
   &**bar {
   transform-origin: 0%;
   transform: scaleX(0);
   transition: transform 1000ms cubic-bezier(.32,0,.07,1);
   }
   }
   • Il est plus explicite d’utiliser le mot clé left plutôt que de mettre un transform-origin à 0 %, car cela nous indique instantanément que nous avons déplacé le transform-origin sur le côté gauche.
   • Revenons une dernière fois à notre barre de chargement et remplaçons la valeur numérique de transform-origin par le mot clé left, pour rendre notre code aussi clair et concis que possible
   .btn {
   &:active {
   & + .progress {
   & > .progress**bar {
   transform: scaleX(1);
   }
   }
   }
   }
   .progress {
   &**bar {
   transform-origin: left;
   transform: scaleX(0);
   transition: transform 1000ms cubic-bezier(.32,0,.07,1);
   }
   }
3. Passez dans la troisième dimension
   • Nous avons vu que la propriété transform permet de manipuler des éléments en deux dimensions... mais aussi en trois. Et transform-origin fonctionne parfaitement avec des valeurs X et Y en 2D.
   • L’axe Z DOIT obligatoirement être défini avec des unités réelles comme les pixels, les centimètres, etc.
   .btn {
   perspective: 500px;
   &:active {
   & > .btn**flip {
   transform: rotateX(-90deg);
   }
   }
   &**flip {
   transform-style: preserve-3d;
   transform-origin: center bottom 7.5vw;
   transition: transform 500ms cubic-bezier(.7, 0, .23, 1);
   &--off {
   transform: rotateX(0deg) translateZ(7.5vw);
   }
   &--on {
   transform: rotateX(90deg) translateZ(7.5vw);
   }
   }
   }

# Analysez la performance de vos animations avec Chrome DevTools

Chrome propose toute une suite d’outils intégrés.
DevTools met à notre disposition de nombreux outils. Notamment un qui simule le fonctionnement de nos animations sur un vieux smartphone. Il permet également d'analyser en détail les performances de notre animation, afin d'identifier les problèmes potentiels et de les corriger.

1. Ici, nous avons une petite application. Elle représente une série de cartes, chaque carte munie d’une photo et de quelques blocs de texte. Il y a également un bouton qui révèle une troisième carte cachée.
   • L’apparition de la carte cachée est constituée de plusieurs transitions : l’apparition de la carte elle-même, et une deuxième transition qui pousse l’autre carte sur la droite.
   • On a aussi ajouté quelques mouvements secondaires avec plusieurs transitions pour révéler les blocs de texte de la carte :
   • Toutes ces animations sont bien fluides sur notre ordinateur, mais ça ne suffit pas. Nous voulons qu’elles soient fluides sur tous les écrans, y compris sur des supports anciens ou bas de gamme.
   • Quand on clique sur “Inspecter” sur une page web.
2. Ici, c'est l’onglet Performance qui va nous intéresser. Il nous permet d’enregistrer et d’analyser comment une page se charge, réagit, et s’anime.
   • Ouvrir DevTools. (Ctrl+Shift+I)
   • “Performance” dans le menu qui apparaît
   • “Screenshots”.Chrome prendra une capture d’écran de chaque image de l’enregistrement, nous permettant ainsi de visionner le déroulement de l’animation image par image. Cette option n’est pas toujours nécessaire pour analyser les performances d’un site mais elle peut s'avérer particulièrement utile.
   • Si on enregistre maintenant, on verra seulement l’animation s’exécuter sur notre ordinateur.
   • Pour remédier à cela, l’onglet Performance nous permet de brider la vitesse de notre processeur.
   • En cliquant sur la roue de paramétrages dans le coin en haut à droite, quatre options apparaissent, dont l’option “CPU throttling”. Simulons l’appareil le plus lent possible en choisissant 6X, qui limite notre processeur à une vitesse six fois plus lente que ses capacités.
   • !!! N’oubliez surtout pas de décocher cette case quand vous aurez terminé !!!
3. Les performances de la page ne nous préoccupent pas pour l’instant, donc nous pouvons immédiatement appuyer sur le bouton Record.
   • Une fenêtre de dialogue apparaît pour nous informer que l’enregistrement du site a commencé. Nous pouvons donc maintenant interagir avec notre bouton pour lancer les transitions.
   • Une fois que les animations sont terminées, on peut cliquer sur le bouton “Stop” dans la fenêtre de progression

• DevTools prend un instant pour traiter les données recueillies, puis les affiche dans l’onglet Performance.
• Décomposons maintenant tout cela étape par étape.
• Tout en haut, on trouve l’avancement de l’enregistrement, en millisecondes. Sur cette ligne, des graphiques verts suivent les FPS de notre site ; les plateaux correspondent aux événements d’animation que nous allons détailler dans un instant. Et juste sous cette ligne d’avancement se trouve une succession des images que DevTools a enregistrées.
• Quand on passe la souris sur un des aperçus, il s’agrandit et nous montre exactement à quoi ressemblait le site à ce moment précis :
• Regardons notre animation de plus près en zoomant sur une des zones vertes. Pour cela, cliquez puis faites glisser votre souris sur la zone qui vous intéresse, ou bien utilisez la molette de la souris :
• Maintenant que nous sommes entrés dans les détails de la partie animation de l’enregistrement, concentrons-nous sur les cases vertes plus bas. Elles correspondent aux images de notre animation. En passant la souris dessus, nous pouvons voir le temps de calcul de chaque image, et le nombre de FPS.
• On peut constater des changements assez faibles entre chaque image, ce qui est normal, mais globalement, chaque image est proche de notre objectif de 60 FPS : c'est parfait ! Nous pouvons donc affirmer avec certitude que nos transitions seront bien fluides, même sur un appareil six fois plus lent que notre ordinateur.

4. Allons voir ce qui se passe lorsque le navigateur calcule une image dans une animation. Pour cela, choisissez une image et zoomez au maximum.
   • Maintenant que nous avons isolé une image dans l’animation, intéressons-nous à la section “Main” de l’onglet Performance. Cette section permet de voir tous les calculs qui ont transformé notre code en une page web animée. Les calculs sont répartis en catégories identifiées par des codes couleurs.
   • Les blocs violets représentent les calculs de base qui permettent l’affichage d’une page web, comme l’analyse du CSS et le calcul des styles.
   • Les blocs jaunes indiquent des calculs de l'étape layout. Grâce à la propriété transform, nous avons évité tout calcul de layout, bien trop gourmand en calcul, ce qui aurait dégradé notre FPS.
   • Mais si notre image ne comporte pas de calculs de layout, elle comprend bien une case verte, qui représente un calcul de paint ou de composition. En passant la souris dessus, nous voyons qu’il s’agit bien d’un calcul de composition. Notre animation n’a pas non plus besoin de calculs de paint.

# Animez les couleurs de manière performante avec opacity

La propriété transform permet de répondre à la plus grande partie de nos besoins en animation, mais possède une lacune : la gestion de la couleur.
Jusqu’ici, nous avons écrit notre HTML structurellement, c’est-à-dire que chaque élément fait partie intégrante de notre layout.
Ici, nous allons devoir mettre la fonctionnalité en avant, en créant des éléments non pas pour le layout, mais uniquement pour servir notre animation.

1. Évitez le paint
• Revenons sur notre bouton. Cette fois-ci, au survol de la souris, il change de couleur
• Ce type d'animation est parfait pour permettre à l’utilisateur de comprendre qu’il peut interagir avec cet élément. Les changements de couleur sont une composante essentielle de l'expérience utilisateur sur un site.
• Mais plutôt que de faire changer la couleur instantanément, l’ajout d’une courte transition pourrait rendre l’état :hover un peu plus fluide et naturel.
• Si on regarde le code, on peut constater que le bouton est un élément <button> auquel est assignée la classe .btn :
<button class="btn">Survole moi!</button>
• Et la variable $clr-btn  donne à  .btn  une couleur d’arrière-plan  #15DEA5.  La pseudoclasse  :hover  permet d'assombrir le bouton de 5 % en utilisant la fonction Sass  darken()  
$border-rad: 2rem;
$clr-btn: #15DEA5;
.btn {
    border-radius: $border-rad;
    background-color: $clr-btn;
    &:hover {
        background-color: darken($clr-btn, 5);
}
}
• Nous voulons animer la background-color de notre bouton. Pour cela, ajoutons une transition à .btn, d’une durée de 250 millisecondes :
$border-rad: 2rem;
$clr-btn: #15DEA5;
.btn {
border-radius: $border-rad;
    background-color: $clr-btn;
    transition: background-color 250ms;
    &:hover {
        background-color: darken($clr-btn, 5);
}
}
• Notre bouton prend maintenant une couleur plus sombre quand la souris passe dessus
• MAIS l’animation de la propriété background-color déclenche un nouveau calcul de paint à chaque image de la transition. Dans ce cas, il n'y a qu'une seule propriété à animer sur notre page. Les performances restent donc acceptables. Mais si notre animation était plus complexe, nous aurions sans aucun doute perdu nos 60 FPS. background-color n’est donc pas la meilleure option pour animer des changements de couleur. La propriété à utiliser, c’est opacity.
• La propriété opacity permet de modifier la transparence d’un élément et de ses enfants sur une échelle de 0 à 1, la valeur 0 représentant la transparence totale, et la valeur 1 une opacité complète.
• La couche du fond serait de la couleur normale, inactive, et la couche du dessus serait de la couleur plus sombre pour :hover. On pourrait ensuite faire apparaître et disparaître la couche du haut en utilisant la propriété opacity, en créant une animation entre les deux couleurs.
• Commençons par ajouter une <div> après le texte du bouton de la background-color plus sombre, avec opacity à 0, et opacity sur 1 à l’état :hover. Le code HTML ressemblerait à ça :
<button class="btn">
Survole moi!
   <div class="btn__bg"></div>
   </button>
   • et le CSS à ça :
   $border-rad: 2rem;
$clr-btn: #15DEA5;
   .btn {
   border-radius: $border-rad;
    background-color: $clr-btn;
    position: relative;
    z-index: 1;
    &:hover {
        & .btn__bg {
            opacity: 1;
        }
    }
    &__bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: darken($clr-btn, 5);
   opacity: 0;
   z-index: -1;
   transition: opacity 250ms;
   }
   }
   • La <div /> de la classe .btn**bg est en position absolute. Sa background-color est réglée sur une version plus sombre de $clr-btn. Nous avons aussi ajouté un z-index de -1, et un z-index de 1 à .btn pour créer notre empilement.
   • L’effet est le même qu’en animant la couleur d’arrière-plan, tout en étant bien plus rapide à calculer ! Eh oui, aucun travail de paint !
   • Notre bouton change effectivement de couleur grâce à la propriété opacity qui assure une performance optimale de notre navigateur. C’était notre objectif. Mais on peut toujours faire mieux !
   • Pour l’instant, chaque bouton que nous ajoutons à notre site nécessite d’ajouter une <div> supplémentaire pour l’arrière-plan, ayant la classe .btn**bg. Ce qui veut dire beaucoup de travail pour chaque bouton, et autant de risques de commettre une erreur.
2. Exploitez la puissance du CSS
   • Plutôt que de perdre votre temps à intégrer la div d’arrière-plan à chaque bouton, nous pouvons exploiter la puissance du CSS pour qu’il crée les éléments d’arrière-plan à notre place grâce aux pseudoéléments ( ::after.)
   • L’ajout des éléments ::before ou ::after crée un élément enfant à chaque fois que son sélecteur a été assigné. L’élément créé par ::before sera le premier enfant de l’élément, et celui créé par ::after sera le dernier.
   • Pour notre bouton, l’élément de background vient après le texte, donc le pseudoélément ::after serait parfait pour remplacer notre <div> d’arrière-plan.
   • La création d’un pseudoélément est identique à celle d’une pseudoclasse : on ajoute le pseudoélément à un sélecteur, mais au lieu d’utiliser comme préfixe les deux points ( : ), un pseudoélément en utilise deux ( :: ) :
   $border-rad: 2rem;
$clr-btn: #15DEA5;
   .btn {
   border-radius: $border-rad;
    background-color: $clr-btn;
    position: relative;
    z-index: 1;
    &:hover {
        & .btn__bg {
            opacity: 1;
        }
    }
        &::after {
        // attribuez des valeurs de style au pseudo sélecteur ::after ici
    }
    &__bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: darken($clr-btn, 5);
   opacity: 0;
   z-index: -1;
   transition: opacity 250ms;
   }
   }
   • Si vous tombez sur du CSS contenant :before ou :after, c’est généralement le signe qu’il s’agit d’une vieille base de code.
   • Nous pouvons alors lui assigner du style. Nous voulons que ::after ait la même apparence que .btn**bg. Alors copions le style de .btn**bg dans le pseudoélément ::after, avant de supprimer le sélecteur .btn**bg, dont nous n’aurons plus besoin :
   $border-rad: 2rem;
$clr-btn: #15DEA5;
   .btn {
   border-radius: $border-rad;
   background-color: $clr-btn;
   position: relative;
   z-index: 1;
   &:hover {
   & .btn**bg {
   opacity: 1;
   }
   }
   &::after {
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-color: darken($clr-btn, 5);
        opacity: 0;
        z-index: -1;
        transition: opacity 250ms;
    }
}
•	Notre pseudoélément  ::after  a maintenant le style qu'on voulait, mais passer la souris sur le bouton n’a pas encore d’effet parce que la pseudoclasse  :hover  du bouton sélectionne toujours avec  .btn__bg   pour changer son opacity  à  1. Nous allons donc le mettre à jour pour qu’il utilise plutôt le pseudoélément  ::after  :
$border-rad: 2rem;
   $clr-btn: #15DEA5;
.btn {
    border-radius: $border-rad;
    background-color: $clr-btn;
    position: relative;
    z-index: 1;
    &:hover {
        &::after {
            opacity: 1;
        }
    }
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: darken($clr-btn, 5);
   opacity: 0;
   z-index: -1;
   transition: opacity 250ms;
   }
   }
   • Notre bouton n’aura plus besoin de la <div> d’arrière-plan, donc tant qu’à faire, retirons-la aussi :
   <button class="btn">
   Survole moi!
   </button>

3. Maîtrisez la particularité des pseudoéléments
   • Comme un pseudoélément reste un élément, on peut le styliser de la même manière.
   • Mais les pseudoéléments nécessitent une propriété dont les éléments normaux n’ont pas besoin. Pour un élément normal, on code son contenu en écrivant la page. Mais comme ::after injecte un élément dans la page après coup, le CSS doit dire au navigateur ce que cet élément contient.
   • C’est là que la propriété content entre en jeu. Elle est indispensable au fonctionnement des pseudoéléments.
   • La propriété content nous permet de remplir un pseudoélément de texte ou d’images, mais dans le cas de notre bouton, nous ne voulons pas y ajouter de contenu. Nous voulons plutôt que ::after agisse comme un fond de couleur.
   • Pourtant, il est indispensable d’assigner une valeur au pseudoélément. Essayons donc de lui assigner une chaîne de caractères vides en utilisant des guillemets vides :
   $border-rad: 2rem;
$clr-btn: #15DEA5;
   .btn {
   border-radius: $border-rad;
    background-color: $clr-btn;
    position: relative;
    z-index: 1;
    &:hover {
        &::after {
            opacity: 1;
        }
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;  
        left: 0;
        background-color: darken($clr-btn, 5);
   opacity: 0;
   z-index: -1;
   transition: opacity 250ms;
   }
   }
   • Si on jette un œil à DevTools, on peut voir que l’élément ::after se trouve bien là où on avait une <div>
   • Si jamais vos pseudoéléments n’apparaissent pas sur votre page, vérifiez en premier que vous leur avez attribué une propriété content.
4. Découvrez les dégradés
   • L’animation par la propriété opacity n’est pas limitée aux changements de couleur. On peut aussi animer des dégradés.
   • Pour cela, il faut créer un dégradé pour la background-color du pseudoélément ::after, et non une couleur unie.
   $border-rad: 2rem;
$clr-btn: #15DEA5;
   .btn {
   border-radius: $border-rad;
    background-color: $clr-btn;
    position: relative;
    z-index: 1;
    &:hover {
        &::after {
            opacity: 1;
    }
}
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: radial-gradient(circle, lighten($clr-btn, 5) 0%, darken($clr-btn, 10) 100%);
        opacity: 0;
        z-index: -1;
        transition: opacity 250ms;
    }
}
•	On peut aussi créer des couches de couleurs sur des images                                                     
$border-rad: 2rem;
   $clr-primary: #15DEA5;
@mixin peudo-pos {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.btn {
    border-radius: $border-rad;
    background-color: $clr-primary;
    position: relative;
    z-index: 1;
    &:hover {
        &::after {
            opacity: 1;
        }
        & + .img { 
            &::before {
                    opacity: 0;
                }
            }
        }
        &::after {
        @include pseudo-elem;
    background: radial-gradient(circle, lighten($clr-primary, 5) 0%, darken($clr-primary, 10) 100%);
   opacity: 0;
   z-index: -1;
   transition: opacity 250ms;
   }
   }

.img {
z-index: -1;
&::before {
@include pseudo-elem;
border-radius: $border-rad;
background: $clr-primary;
z-index: 1;
}
}
• La morale de cette histoire, c’est que la propriété opacity permet de faire des transitions de couleur sans que le navigateur fasse des calculs de type “paint”. La performance reste donc optimale, et nous permet donc de garder notre objectif de 60 FPS. Pour cela, les pseudoéléments nous évitent d’écrire un code HTML répétitif, dans lequel on aurait dû insérer de véritables éléments supplémentaires.
