### Sommaire

# Créez des animations plus complexes @keyframes

# Utilisez les propriétés de l'animation CSS

# Manipulez et réutilisez les animations CSS

# Affinez vos animations CSS avec DevTools

# Sites utiles

---

# Créez des animations plus complexes @keyframes

Les @keyframes nous permettent de concevoir des animations avec plusieurs étapes, et ainsi de créer des animations plus complexes et dynamiques.
• Un keyframe CSS est défini par le pourcentage d'animation complété lorsque sa valeur est réalisée.

1. Le début de notre animation en keyframes aurait une progression de 0 % et la propriété transformée une valeur de scaleX(0).
2. La fin aurait une progression de 100 % et une valeur de scaleX(1).
   • Contrairement aux transitions, qui sont à usage unique et qui n'existent qu'à l'intérieur du sélecteur où elles ont été déclarées, les @keyframes sont disponibles globalement, donc n'importe quel sélecteur dans notre fichier CSS peut les utiliser. Et comme ils sont disponibles de manière globale, ils ne sont pas déclarés dans un sélecteur. Au lieu de cela, nous déclarons les @keyframes au niveau de base du fichier CSS, en utilisant l'opérateur @keyframe, suivi du nom de notre choix, entre accolades ouverte et fermée :@keyframes progress-bar {}
   • Lorsque nous utilisons la règle @keyframes, nous déclarons un ensemble de keyframes et nous lui donnons un nom, que nous pouvons utiliser pour appeler l'animation sur le sélecteur de notre choix. Maintenant que nous avons créé un ensemble @keyframes pour notre barre de progression, ajoutons nos keyframes de début et de fin.
   • Chaque keyframe est défini en utilisant son pourcentage, puis sa propre paire d'accolades qui nous permettent de définir les propriétés que nous souhaitons appliquer à ce stade de l'animation, Nous avons maintenant une animation « progress-bar » (barre de progression) définie par la règle keyframes.

@keyframes progress-bar{
0% {transform: scaleX(0);}
100% { transform: scaleX(1) ;}}
• Imaginons que nous voulions des keyframes de début et de fin sans rien au milieu. Dans ce cas, pas besoin de pourcentage : nous pouvons définir les keyframes en utilisant les mots clés « from » et « to » :
@keyframes progress-bar{
from {transform: scaleX(0); }
to {transform: scaleX(1) ; }}

• Nous pouvons ajouter cette animation dans le pseudosélecteur :active de notre bouton via les propriétés

1.  animation-name
2.  animation-duration
    • Ainsi, pour utiliser les keyframes de notre animation progress-bar, nous devons donner la valeur progress-bar à animation-name :
    .btn {
    &:active {
    & > .progress**bar {
    transform: scaleX(1);
    animation-name: progress-bar;}}
    @keyframes progress-bar{
    0% {transform: scaleX(0);}
    100% {transform: scaleX(1) ; }}
    • Maintenant, il nous suffit de reproduire la durée de notre transition. Pour cela, assignons à la propriété animation-duration une valeur de 1 000 ms :
    & > .progress**bar {
    transform: scaleX(1);
    animation-name: progress-bar;
    animation-duration: 1000ms; } }
    • Pour bien comprendre : les transitions s'animent lorsqu'on assigne une valeur à une propriété et que cette valeur change dans l'élément déclencheur. Pour les transitions, les valeurs doivent donc être assignées aux sélecteurs à l'intérieur de notre code.
    • Les animations @keyframes sont un peu différentes. Lorsque animation-name et animation-duration sont assignés à un sélecteur, les propriétés et valeurs contenues dans chaque keyframe sont appliquées pendant toute la durée de l'animation.
    • Cela signifie que nous n'avons pas besoin de nous soucier de régler la valeur de scaleX() comme nous l'avions fait avec notre transition sur la barre de progression. Nous n'avons cependant pas besoin de la supprimer. En cas de conflit entre les propriétés/valeurs CSS d'une valeur assignée et d'une valeur avec keyframe, le CSS privilégie la valeur déclarée dans le keyframe.
    • Quelles que soient les propriétés CSS que nous plaçons à l'intérieur de notre animation @keyframes, elles remplaceront toutes les propriétés CSS existantes sur le sélecteur où elles sont assignées. Il est important de se rappeler que nous ne pouvons avoir qu'une seule propriété de transformation appliquée à un sélecteur. Par exemple, si nous avons un sélecteur ayant une propriété transform utilisant la fonction translate(), nos keyframes ayant également scale l'écraseront et supprimeront toutes les translations que nous avions appliquées.
    • Même si nous n'en avons pas besoin, pour des raisons de clarté, voyons comment supprimer transform de la pseudoclasse :active :
    .btn {
    &:active {
    & > .progress\_\_bar {
    animation: progress-bar 1000ms;
    }
    }
    }
    @keyframes progress-bar{
    0% {
    transform: scaleX(0);
    }
    100% {
    transform: scaleX(1);
    }
    }
    • Nous avons une barre de progression animée qui passe directement de 0 % à 100 %. Elle ressemble bien à notre transition. Mais nous voulions complexifier l'animation en ajoutant quelques keyframes ici et là.
3.  Sur l'axe X, nous avons le pourcentage de progression de l'animation, de notre point de départ à 0 % à 100 % tout à droite.
4.  Sur l'axe Y, nous avons la valeur de scaleX() de 0 en bas à 1 en haut.
    • Si nous devions choisir un point le long de la courbe d'accélération, sa coordonnée X pourrait servir de valeur en pourcentage des keyframes, et sa coordonnée Y de valeur pour scaleX() .
    • Choisissons trois points le long de la courbe que nous définirons comme keyframes. Puisque nous voulons décomposer un peu l'animation de façon à la rendre plus naturelle, essayons de choisir ces points à intervalles aléatoires sur l'axe des X.
    • Maintenant que nous avons des valeurs avec lesquelles nous pouvons travailler, replongeons-nous dans nos keyframes ! Pour les créer, nous allons prendre la coordonnée X de chaque point, la transformer en pourcentage pour chacun de nos nouveaux keyframes, et utiliser la coordonnée Y comme valeur pour la valeur de scaleX(), de cette façon :
    .btn {
    &:active {
    & > .progress**bar {
    animation: progress-bar 1000ms;
    }
    }
    }
    @keyframes progress-bar {
    0% {
    transform: scaleX(0);
    }
    17% {
    transform: scaleX(.18);
    }
    24% {
    transform: scaleX(.4);
    }
    46% {
    transform: scaleX(.81);
    }
    100% {
    transform: scaleX(1);
    }
    }
    • La barre se remplit avec un profil similaire à notre transition, mais chaque fois que l'animation arrive à un keyframe, il y a un léger ralentissement dans sa progression. On approche bien du sentiment de vraiment charger quelque chose.
    • Les ralentissements à chaque keyframe proviennent de la fonction de timing qui leur est appliquée par défaut. Ici, nous n'avons pas appliqué manuellement de fonction de timing, donc comme pour les transitions, une fonction de timing par défaut est appliquée.
    • Nous avons donc une barre de progression un peu plus authentique. Ajoutons maintenant encore un peu plus de complexité. Au-delà de sa progression de gauche à droite, nous aimerions aussi que l’opacité de notre animation change, pour qu'elle évolue d'un vert translucide à un joli vert menthe, au fur et à mesure que la barre se remplit. Lorsque nous créons des @keyframes CSS, nous ne sommes pas limités à une seule propriété. Bien au contraire ! Nous pouvons assigner à chaque keyframe autant de propriétés que nous le souhaitons.
    • Pour ajouter des propriétés supplémentaires à un keyframe, il suffit de les ajouter dans nos accolades, comme nous le ferions avec un sélecteur CSS standard. Pour notre animation de couleur, nous pouvons configurer notre premier keyframe pour que la barre ait une opacité de 10 % au début de l'animation :
    @keyframes progress-bar{
    0% {
    transform: scaleX(0);
    opacity: .1;
    }
    17% {
    transform: scaleX(.18);
    }
    24% {
    transform: scaleX(.4);
    }
    46% {
    transform: scaleX(.81);
    }
    100% {
    transform: scaleX(1);
    }
    }
    • Nous avons réglé l'opacité à 10 % dans le premier keyframe. Mais rien n'est précisé dans les suivants quant à l'opacité. On peut supposer que la couleur de la barre restera à 10 % d'opacité pendant le reste de l'animation.
    • Bien qu'il n'y ait pas d'autres keyframes pour l'opacité, la barre repasse bien à 100 % d'opacité au cours de l'animation.
    • Nous n'avons pas précisé de valeur d'opacité dans les autres keyframes. Le navigateur va donc chercher la valeur d'opacité dans le sélecteur. Or, nous n'avons déclaré aucune valeur de manière explicite non plus dans .progress**bar. Le navigateur prend donc la valeur par défaut de 1 pour l'opacité.
    • Assignons une valeur de 0 à opacity dans le sélecteur .progress**bar et augmentons l'opacité de notre premier keyframe à 50 % :
    .progress {
    &**bar {
    opacity: 0;
    }
    }

@keyframes progress-bar{
0% {
transform: scaleX(0);
opacity: .5;
}
17% {
transform: scaleX(.18);
}  
 24% {
transform: scaleX(.4);
}
46% {
transform: scaleX(.81);
}
100% {
transform: scaleX(1);
}
}
• Maintenant, notre barre devrait commencer à 50 % et s'animer pour devenir complètement transparente à la fin de l'animation

• Sans keyframe de départ, le navigateur démarrera l'animation avec la valeur dans le sélecteur, tout comme il le fait à la fin d'une animation si nous ne fournissons pas de keyframe de fin. Donc, si nous devions seulement fixer la valeur d'opacité à un pourcentage intermédiaire, comme cela :
.progress {
&\_\_bar {
opacity: 0;
}
}

@keyframes progress-bar{
0% {
transform: scaleX(0);
}
17% {
transform: scaleX(.18);
}
24% {
transform: scaleX(.4);
}
46% {
transform: scaleX(.81);
opacity: 1;
}
100% {
transform: scaleX(1);
}
}
• Notre barre commence et se termine désormais avec la valeur d'opacité que nous avons assignée dans .progress\_\_bar, qui est zéro :

• Assignons donc une valeur d'opacité de 1. Mais, cette fois-ci, plutôt que d'attendre que l'animation soit complètement terminée pour devenir opaque, fixons le pourcentage de keyframe à 85 % :
.progress {
&\_\_bar {
opacity: 0;
}
}
@keyframes progress-bar{
0% {
transform: scaleX(0);
}
17% {
transform: scaleX(.18);
}
24% {
transform: scaleX(.4);
}
46% {
transform: scaleX(.81);
}
85% {
opacity: 1;
}
100% {
transform: scaleX(1);
}
}
• Maintenant notre barre devrait passer 85 % de la durée de l'animation à remplir l'opacité.

• Eh bien... elle passe bien 85 % de l'animation à augmenter l'opacité de la barre, mais ensuite elle passe les 15 % de l'animation finale à revenir à une barre complètement transparente. Ce n'est pas exactement ce que nous espérions...
• Plutôt normal en fait : nous n'avons toujours pas de valeur pour la propriété d'opacité à animer entre 85 % et 100 %, donc le navigateur passe les 15 derniers pourcents de l'animation à repasser à la valeur assignée à .progress**bar, qui est toujours 0. Nous devons donc définir un dernier keyframe pour la propriété d'opacité, avec une valeur fixée à 1.
• Nous avons déjà créé un keyframe avec un pourcentage de 100 % pour notre propriété transform. Nous pourrions ajouter la propriété d'opacité à ce keyframe, mais que se passerait-il si nous décidions que nous voulions que notre opacité finale soit de 85 % au lieu de 100 % ? Ensuite, nous devons modifier la valeur d'opacité dans plusieurs emplacements.
• Jusqu'à présent, nous avons fixé un pourcentage unique pour chaque keyframe, mais nous pouvons attribuer plusieurs pourcentages à un keyframe. En ajoutant plusieurs pourcentages à un keyframe, le navigateur appliquera son contenu à chaque pourcentage d'animation. Il suffit de les séparer par des virgules :
.progress {
&**bar {
opacity: 0;
}
}
@keyframes progress-bar{
0% {
transform: scaleX(0);
}
17% {
transform: scaleX(.18);
}
24% {
transform: scaleX(.4);
}
46% {
transform: scaleX(.81);
}
85%,100% {
opacity: 1;
}
100% {
transform: scaleX(1);
}
}
• Si un pourcentage de keyframe est défini plusieurs fois au sein d'un ensemble et que ces keyframes contiennent des valeurs contradictoires, la valeur du keyframe qui a été définie en dernier remplacera la ou les valeur(s) précédente(s) du ou des keyframe(s).
• Les animations CSS sont encore relativement nouvelles, et ne sont donc pas encore complètement standardisées d'un navigateur à l'autre. Par souci de simplicité pour le cours, nous n'utilisons que les propriétés standard dans nos snippets de code. Mais si vous déployez votre code, toutes les animations CSS devraient avoir des préfixes de navigateur appliqués avant leur déploiement, pour être sûr qu'elles soient compatibles avec tous les navigateurs.

# Utilisez les propriétés de l'animation CSS

Comprenez la différence entre @keyframes et transition
Comme nous venons de le voir avec notre barre de progression, les animations CSS avec keyframes ne se comportent pas comme des transitions. C'est normal : transitions et animations sont deux techniques ayant des logiques différentes, car elles ne répondent pas au même objectif.
• Les transitions sont destinées à s'intégrer de manière subtile entre une valeur de départ et une valeur de fin. Telles que des valeurs scale() (d'échelle) différentes sur un bouton et sa pseudoclasse :hover :
• Ce bouton s'agrandit au fur et à mesure que nous le survolons, puis rétrécit lorsque la souris s'en éloigne, même si la transition n'est pas terminée.
• Si nous appliquons les mêmes valeurs scale() via des @keyframes, le résultat obtenu est totalement différent. Voyez par vous-même :
• Lorsque nous créons une transition, nous disons au navigateur d'aller et venir entre les valeurs assignées dans un sélecteur et les valeurs assignées à une pseudoclasse. Les @keyframes, quant à eux, lisent une série de valeurs définies. Une fois déclenchée, une animation avec keyframes progresse jusqu'à ce qu'elle soit terminée, ou jusqu'à ce qu'elle soit interrompue.
• Avec les keyframes, lorsque nous assignons notre animation progress-bar à l'état :active de notre bouton, l'animation n'existe que si l'état :active est déclenché. Lorsque l'on retire la souris, l'état :active disparaît de l'élément, et avec lui, de l'animation qui lui a été assignée. C'est pour cette raison que l'animation disparaît si brusquement lorsque l'on sort de l'état :active.
• Les transitions sont intrinsèquement liées à l'état d'un élément et aux différences dans ses valeurs assignées. Les propriétés et valeurs des keyframes sont quant à elles codées en dur, elles ne nécessitent qu'un événement pour les déclencher. Les pseudoclasses ne sont que l'une des options pour le faire. Dans ce chapitre, nous allons examiner une autre façon de déployer nos animations, ainsi que les propriétés supplémentaires à notre disposition pour concevoir des animations et des expériences utilisateur plus complexes.
• Jusqu'à maintenant, nous avons appris à utiliser systématiquement une pseudoclasse pour déclencher nos animations. Car c'est effectivement la seule option en CSS lorsque nous utilisons des transitions. Mais avec les @keyframes, nous pouvons déclencher une animation dès le chargement d'un élément.
• Lorsque nous assignons une animation avec keyframe à un élément, il déclenchera l'animation au chargement dans le navigateur. Plutôt que d'appliquer notre animation de barre de progression à la pseudoclasse :active sur .btn, appliquons-la à .progress**bar en tant que telle :
.progress {
&**bar {
animation: progress-bar 1000ms;
}
}
@keyframes progress-bar{
0% {
transform: scaleX(0);
opacity: .1;
}
17% {
transform: scaleX(.18);
}
24% {
transform: scaleX(.4);
}
46% {
transform: scaleX(.81);
}
85%,100% {
opacity: 1;
}
100% {
transform: scaleX(1);
}
}
• Maintenant, notre barre de progression se chargera dès que la page web sera chargée. Il n'est pas nécessaire d'interagir avec un bouton, ni d'ailleurs avec aucun autre élément. Le chargement de la page, et donc la barre de progression, est l'événement qui déclenche l'animation. Cela signifie que nous pouvons nous débarrasser de ce bouton :

<html>
<div class="container">
    <div class="progress">
        <div class="progress__bar"></div>
    </div>
</div>
</html>
•	Le seul problème avec une animation qui démarre dès que la page se charge, c'est que... l'animation démarre dès la page se charge. Notre animation commence donc avant que nos visiteurs n'aient vraiment eu la chance de commencer à parcourir notre page.
•	La propriété animation-delay  fonctionne comme  transition-delay, sauf qu'elle retarde uniquement les animations conçues avec des @keyframes. Elle accepte les valeurs en secondes ou en millisecondes :
.delay-seconds {
    animation-delay: 1s;
}
.delay-seconds {
    animation-delay: 1000ms;
}
•	Tout comme pour  transition-delay, nous pouvons indiquer la valeur de cette propriété dans la version abrégée "animation", en l'indiquant dans sa liste de valeurs. Ajoutons donc un court délai de 150 ms à l'animation de notre barre de progression :
.progress {
    &__bar {
        animation: progress-bar 1000ms 150ms;
    }
}
•	Maintenant, notre barre de progression attendra 0,15 secondes avant de commencer le chargement, donnant à nos visiteurs un moment pour remarquer notre barre de progression au chargement de la page :
•	Choisissons du contenu à afficher une fois l'animation de la barre de progression terminée. Après tout, on est sur Internet, et Internet, c'est un peu le royaume des chats. Donc c'est parti pour une photo de chat. Alors, voyons voir ce que nous trouvons.
•	Site images libres de droits unsplash.com ou pexels.com 
•	Ajoutons une  div  pour notre photo de chat après notre  div .progress, ainsi que quelques paragraphes de texte :
<html>
    <p>Merci pour votre patience</p>
        <p>Voici votre chat</p>
</html>
•	Et utilisons la propriété  background-image  pour remplir la div avec notre nouvelle photo de chat, ainsi que quelques autres propriétés pour redimensionner et recadrer l'image et rendre le texte lisible :
.cat {
    width: 50vw;
    height: 30vw;
    position: absolute;
    overflow: hidden;
    background-image: url("https://bit.ly/2XJJLKn");
    background-size: cover;
    background-position: -20%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: .1rem;
    font-size: 4vw;
    font-weight: 900;
    color: white;
}
•	Pour le moment, notre div  .cat  couvre notre barre de progression, ce qui convient une fois la barre chargée. En revanche, nous ne souhaitons pas la voir tant que la barre n'a pas fini de se charger. Pour cela, créons un nouvel ensemble de @keyframes pour déplacer notre image hors de l'écran, jusqu'à ce que la barre ait fini de se charger.
@keyframes cat{
    0% {
        transform: translateX(-9999px);
    }
    100% {
        transform: translateX(0);
    }
}
•	La propriété  transform  avec sa fonction  translateX()  nous permet de déplacer notre chat hors de l'écran au début de l'animation, et mettre sa valeur de fin à 0, ce qui l'amène à son point de destination. 
•	Maintenant, ajoutons notre animation de chat à notre div  .cat. Nous ne voulons pas que notre chat bouge. Nous voulons simplement qu'il apparaisse quand la barre est complètement chargée. Nous réglons donc la durée de l'animation sur 0. Le délai, quant à lui, correspond à la combinaison entre la durée de l'animation progress-bar avec son délai de lancement :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
$cat-delay: $prog-bar-dur + $prog-bar-delay;
.cat {
    animation: cat 0ms $cat-delay;
}
@keyframes cat{
0% {
    transform: translateX(-9999px);
}
100% {
    transform: translateX(0);
    }
}
•	ajoutons une durée à notre animation pour voir pourquoi les choses ne se passent pas comme prévu :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
$cat-delay: $prog-bar-dur + $prog-bar-delay;
.cat {
    animation: cat 1000ms $cat-delay;
}
@keyframes cat{
0% {
    transform: translateX(-9999px);
}
100% {
    transform: translateX(0);
    }
}
•	En fait, lorsque notre animation n'est pas en train d'être animée, les éléments reviennent à leur valeur de propriété assignée. C'est pourquoi notre barre de progression disparaît à la fin de son animation ; elle anime l'échelle horizontale de 0 à 1, mais elle a une valeur  scaleX()  de 0 : 
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0);
        animation: progress-bar $prog-bar-dur $prog-bar-delay;
    }
}
•	Ainsi, lorsque l'animation se termine, la barre revient à sa valeur assignée pour  scaleX(), qui est aussi 0, disparaissant ainsi du site :
•	Il en va de même pour les éléments qui ont des animations avec des délais assignés. Pendant que l'élément attend de démarrer son animation, il utilisera les valeurs des propriétés qui lui ont été assignées. Pour tester cela par nous-même, réglons la valeur  scaleX()  de la barre  .progress__bar  sur .5 et augmentons le délai pour une valeur plus visible, par exemple 1000ms :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 1000ms;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
    animation: progress-bar $prog-bar-dur $prog-bar-delay;
    }
}
•	Ajoutons des commentaires à notre  div .cat  pour que nous puissions nous concentrer pour l'instant sur la barre de progression :
<html>
    <div class="container">
        <div class="progress">
            <div class="progress__bar"></div>
        </div>
        <!-- <div class="cat">
        <p>Merci pour votre patience</p>
        <p>Voici votre chat</p>
        </div> -->
    </div>
</html>
•	Notre barre de progression respecte un délai d'une seconde avant de s'animer. En attendant, elle est à une échelle de 50 % sur l'axe des X et 100 % d'opacité. Puis, tout à coup, elle passe à une scaleX() de 0, une opacité de .1 et commence à s'animer jusqu'à ce que la barre soit pleine et complètement opaque. Puis, une fois l'animation terminée, la barre revient à ses valeurs assignées dans le sélecteur.
•	Pourtant, nous voulons que notre animation s'étende de la gauche vers la droite, en remplissant l'espace avant que l'animation ne commence puis se termine avec les valeurs de début et de fin de l'animation. Nous pouvons nous représenter notre animation par un dégradé de couleur, allant d'un vert menthe au bleu marine :
•	Plutôt que de commencer et de terminer la couleur au début du dégradé de couleur, nous voulons que la couleur de départ remplisse l'espace à gauche du dégradé, en reprenant la couleur de départ, puis que la couleur de fin s'étende vers la droite du dégradé, basée sur la couleur de fin :
•	Pour remplir les espaces avant et après nos animations avec keyframes, nous pouvons utiliser la propriété animation-fill-mode, qui va étendre les valeurs de début d'une animation, ou ses valeurs finales, ou les deux.
•	animation-fill-mode  accepte trois mots clés différents comme valeur. Le premier est backwards (pour "en arrière"). Backwards étend les valeurs de départ d'une animation pour la période de temps qui précède le début de l'animation :
•	Comme backwards étend cette valeur au début, ce mot clé n'est utile que si nous avons un délai appliqué à nos animations. S'il n'y a pas de délai, il n'y a pas de vide à remplir avant l'animation pour  animation-fill-mode.
•	Ajoutons maintenant animation-fill-mode à la barre  .progress__bar  avec le mot clé backwards :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 1000ms;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay;
        animation-fill-mode: backwards;
    }
}
•	Maintenant, plutôt que de commencer à moitié remplie, notre barre de progression reste vide pendant toute la durée de son délai (animation-delay). À la fin du délai, l'animation continue normalement, et à la fin, revient en arrière à la valeur assignée de  scaleX(.5)  :
•	Le deuxième mot clé pour le mode animation-fill-mode est forwards (pour "en avant"). Au contraire de backwards, forwards étend les valeurs finales d'une animation vers l'avant, sans fin :
•	Forwards consiste en quelque sorte à dire au navigateur de mettre l'animation sur pause sur la toute dernière image, plutôt que de passer aux valeurs assignées. Changeons la valeur de  animation-fill-mode  de la barre  .progress__bar  avec forwards et découvrons ce que ça donne :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 1000ms;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay;
        animation-fill-mode: forwards;
    }
}
•	Maintenant, notre barre de progression est de nouveau à 50 % jusqu'à ce que l'animation commence. Elle revient à 0 en animant à partir de là. Mais plutôt que de revenir directement à 50 %, la barre reste pleine :
•	Dans notre cas, il semble évident que nous voulons que notre animation s'étende et se remplisse, dans les deux sens, comme celle de notre barre de progression. Le mot clé judicieusement intitulé both (les deux) pour le mode animation-fill-mode remplit l'animation dans les deux sens 
•	Réglons le mode animation-fill-mode de la barre  .progress__bar  sur both :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 1000ms;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay;
        animation-fill-mode: both;
    }
}
•	Vérifions dans le navigateur. Nous devrions voir notre barre partie de 0 % de remplissage jusqu'à ce que l'animation commence, puis se remplir normalement, et ensuite rester à 100 % :
•	Réduisons le délai à nos 100 ms d'origine. D'ailleurs, tout comme avec nos autres propriétés d'animation, nous ne sommes pas obligés d'indiquer la propriété animation-fill-mode séparément. Au lieu de cela, nous pouvons définir sa valeur directement dans la propriété  animation  raccourcie : 
$prog-bar-dur: 1000ms;
$prog-bar-delay: 1000ms;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay both;
    }
}
•	Nous avons maintenant une barre de progression fonctionnelle.
•	Revenons maintenant à notre chat. Nous pouvons utiliser animation-fill-mode. Nous voulons que l'animation s'étende dans les deux sens, pour qu'elle reste invisible jusqu'à la fin du délai, puis reste visible après cela. Ajoutons donc le mot clé both à la propriété d'animation de  .cat   : 
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
$cat-delay: $prog-bar-dur + $prog-bar-delay;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay both;
    }
}
.cat {
    animation: cat 0ms $cat-delay both;
}
•	Ajoutons un peu de retard entre la fin de l'animation de la barre de progression et le début de l'animation du chat. Nous pouvons multiplier la variable $prog-delay par 2 dans$cat-delay, ce qui nous donnera 150 ms supplémentaires avant le début de l'animation du chat :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
$cat-delay: $prog-bar-dur + $prog-bar-delay*2;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay both;
    }
}
.cat {
    animation: cat 0ms $cat-delay both;
}
•	Pour assigner notre courbe d'accélération  cubic-bezier()  à  progress-bar  , nous pouvons utiliser la propriété animation-timing-function, avec la fonction cubic-bezier comme valeur :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
$cat-delay: $prog-bar-dur + $prog-bar-delay*2;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay both;
        animation-timing-function: cubic-bezier(.9,0,.1,1);
    }
}
•	Nous pouvons également raccourcir les choses et ajouter la fonction cubic-bezier à notre propriété d'animation abrégée :
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
$cat-delay: $prog-bar-dur + $prog-bar-delay*2;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay both cubic-bezier(.9,0,.1,1);
    }
}
•	Maintenant, les ease-in et ease-out de nos keyframes sont beaucoup plus marqués. Notre animation paraît donc plus irrégulière. Lorsque nous regardons notre barre de progression à nouveau dans le navigateur, nous voyons des pauses beaucoup plus délibérées et des accélérations dans le mouvement de la barre :
•	Bien que les accélérations soient nettement plus visibles avec notre fonction cubic-bezier, elles sont probablement un peu exagérées. En général, la fonction de « ease timing » par défaut fonctionne assez bien. Le problème vient du keyframe à 24 %. Il est trop proche du keyframe précédent, qui, à 17 %, n'est séparé que de 7 %. La proximité des deux keyframes, combinée à l'uniformité des courbes d'accélération, entraîne une légère perte de la pause/accélération du deuxième keyframe.
•	Un keyframe hérite par défaut du timing défini dans le sélecteur où l'animation a été assignée, sauf si une fonction de timing a été explicitement assignée à ce keyframe. Pour assigner une fonction de timing à un keyframe spécifique, il suffit de déclarer la propriété animation-timing-function dans le keyframe en question. Revenons à notre fameux keyframe de  24 % : 
$prog-bar-dur: 1000ms;
$prog-bar-delay: 150ms;
$cat-delay: $prog-bar-dur + $prog-bar-delay*2;
.progress {
    &__bar {
        transform-origin: left;
        transform: scaleX(0.5);
        animation: progress-bar $prog-bar-dur $prog-bar-delay both;
    }
}
@keyframes progress-bar{
    0% {
        transform: scaleX(0);
        opacity: .1;
    }
    17% {
        transform: scaleX(.18);
    }
    24% {
        transform: scaleX(.40);
        animation-timing-function: cubic-bezier(.9,0,.1,1);
    }
    46% {
        transform: scaleX(.81);
    }
    85%,100% {
        opacity: 1;
    }
        100% {
        transform: scaleX(1);
}
•	Lorsque nous assignons une fonction de timing à un keyframe, nous contrôlons la courbe d'accélération des valeurs entre ce keyframe et le suivant. Cela signifie que nous contrôlons l'introduction lente du mouvement à 24 % et la sortie lente à 46 % :
•	Maintenant, l'accélération du keyframe à 24 % est beaucoup plus prononcée, tandis que les autres restent à des valeurs d'introduction et de sortie plus fluides. Ce qui est presque parfait.... presque... mais, puisque nous y mettons tant d'efforts, autant le faire jusqu'au bout. 
•	Donnons également au keyframe 46 % sa propre fonction de timing et utilisons-la pour fluidifier un peu cette transition. Pour rendre le mouvement plus fluide, il suffit d'aplanir son début, pour mieux enchaîner avec la sortie du keyframe précédent. Pour l'instant, notre "ease in" a une coordonnée Y de .1. Si nous le réduisons à 0, nous obtenons un cubic-bezier(.25, 0, .25,1) et un "ease in" plus plat :
•	Intégrons notre nouvelle fonction de timing au keyframe 46 %.
•	Par ailleurs, l'animation de l'opacité ne semble plus vraiment ajouter de valeur. Au contraire, elle rend notre animation moins visible. Supprimons-la et simplifions un peu les choses :
@keyframes progress-bar{
    0% {
        transform: scaleX(0);
    }
    17% {
        transform: scaleX(.18);
    }
    24% {
        transform: scaleX(.40);
        animation-timing-function: cubic-bezier(.9,0,.1,1);
    }
    46% {
        transform: scaleX(.81);
        animation-timing-function: cubic-bezier(.25,0.25,1);
    }
    100% {
        transform: scaleX(1);
    }
}

# Manipulez et réutilisez les animations CSS

Remontons dans le temps. Nous avions créé un input d'adresse e-mail qui donnait à l'utilisateur un feedback visuel si l'adresse entrée n'était pas valide :

<html>
    <div class="container">
        <div class="form">
            <div class="form__group">
                <label for="email-input">email</label>
                    <input type="email" name=”email-input>
                </div>
            </div>
        </div>
</html>
$cd-txt: #6300a0;
$cd-txt--invalid: #fff;
$cd-danger : #b20a37 ;
.form {
    &__group {
        & input {
            border: 2px solid $cd-box;
            border-radius: 100rem;
            color: $cd-txt;
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5rem;
            outline: none;
            padding: .5rem 1.5rem;
            width: 100%;
            transition: background-color 500ms;
            &:focus {
                border: 2px solid $cd-txt;
            }
            &:not(:focus):invalid {
                background-color: $cd-danger;
                border: 2px solid $cd-danger;
                color: $cd-txt--invalid;
            }
        }
    }
}
•	Notre animation change actuellement la  background-color  pour un rouge foncé sur une durée de 500 ms si l'adresse saisie n'est pas valide
•	Adieu transition  background-color. 
$cd-txt: #6300a0;
$cd-txt--invalid: #fff;
$cd-danger : #b20a37 ;

.form {
&\_\_group {
& input {
border: 2px solid $cd-box;
            border-radius: 100rem;
            color: $cd-txt;
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5rem;
            outline: none;
            padding: .5rem 1.5rem;
            width: 100%;
            &:focus {
                border: 2px solid $cd-txt;
            }
            &:not(:focus):invalid {
                background-color: $cd-danger;
                border: 2px solid $cd-danger;
                color: $cd-txt--invalid;
           }
        }
    }
}
•	Nous avons désormais un input d'e-mail qui devient rouge lorsque l'entrée n'est pas valide et ne sera pas corrigée.
•	Et si on faisait hocher la tête à notre input ?
C'est un signe quasiment universel que la plupart peuvent interpréter comme un « non ». En tant qu'humains, nous absorbons et nous traitons le langage corporel au niveau de l'inconscient, de sorte que même les mouvements subtils peuvent avoir un sens. Nous n'avons ainsi plus rien à faire. Un rapide hochement de tête, clair et ferme, c'est tout ce dont nous avons besoin.
Il y a plusieurs décennies, le professeur de psychologie Albert Mehrabian publiait le livre Silent Messages, dans lequel il détaillait les composants d’une communication efficace, en établissant la règle des 7 % - 38 % - 55 %. Selon cette règle, une communication efficace passe à 7 % par les mots, à 38 % par le ton, et à 55 % par le langage corporel. En d’autres termes, le composant le plus important est le langage corporel, mais les sites Internet nous limitent au langage. Avec l’animation, nous pouvons donner aux sites Internet la possibilité de parler avec les mains !
•	Alors représentons notre "refus" avec l'animation @keyframes headshake :
@keyframes headshake {}
•	Nous voulons que notre entrée commence et se termine là où elle devrait, et nous n'avons donc pas besoin de créer des keyframes pour le début et la fin. En les laissant en dehors des keyframes, notre animation utilisera les valeurs par défaut du sélecteur. Ça tombe bien,  ce dont nous avons vraiment besoin, ce sont des keyframes pour le mouvement intermédiaire.
•	Depuis son état neutre, nous voulons que l'input se déplace un peu vers la droite, puis vers la gauche, avant de revenir à sa position à son état neutre. Donc, à 0 %, nous sommes dans la position par défaut. Puis, à un quart de l'animation, nous voulons que l'entrée soit entièrement à droite. Et à 75 % dans l'animation, nous voulons qu'elle soit à l'opposé sur la gauche, avant de revenir enfin à sa position neutre :
@keyframes headshake {
    25% {
        // entièrement à droite
        transform: translateX();
    }
    75% {
        // entièrement à gauche
        transform: translateX();
    }
}
•	Il ne nous reste plus qu'à décider à quel moment nous voulons que notre input hoche la tête. Ça ne devrait pas être trop exagéré, juste un hochement de tête net et courtois. Un point de pourcentage ou deux devraient faire l'affaire. Créons une variable intitulée  $shake-intensity, réglons-la (soyons fous) sur une valeur de 2 %, et ajoutons-la à nos fonctions  translateX()  : 
$shake-intensity: 2%;
@keyframes headshake {
25% {
// entièrement à droite
transform: translateX($shake-intensity);
    }
    75% {
        // entièrement à gauche
        transform: translateX(-$shake-intensity);
}
}
• Nous voulons que la position de notre input sur la gauche soit l'inverse de la droite. Nous avons donc juste préfixé la variable avec un symbole négatif. Désormais, nous devons ajouter nos @keyframes headshake au sélecteurinput:not(:focus):invalid. Nous voulons un hochement de tête brusque et rapide, alors donnons-lui une valeur courte pour sa durée. Quelque chose aux alentours des 100 ms devrait faire l'affaire, au début du moins :
$cd-danger : #b20a37 ;
$cd-txt: #6300a0;
$shake-intensity: 2%;

.form {
&\_\_group {
& input {
&:active, &:focus {
border: 2px solid $cd-txt;
}
&:not(:focus):invalid {
color: white;
border: 2px solid $cd-danger;
background: $cd-danger;
animation: headshake 100ms cubic-bezier(.4,.1,.6,.9);
}
}
}
}

@keyframes headshake {
25% {
// entièrement à droite
transform: translateX($shake-intensity);
    }
    75% {
        // entièrement à gauche
        transform: translateX($shake-intensity \* -1);
}
}
• Nous avons également réglé la fonction animation-timing-function pour le headhake sur cubic-bezier(.4,.1,.6,.9), ce qui reste plutôt léger
• La propriété animation-iteration-count ! Elle nous permet d'écrire des keyframes d'un seul cycle d'animation et demander au navigateur de les répéter autant de fois que nous le souhaitons. Cela signifie que nous pouvons faire secouer la tête de notre input deux fois, ou deux cents fois, en changeant une seule valeur :
$cd-danger : #b20a37 ;
$cd-txt: #6300a0;
$shake-intensity: 2%;

.form {
&\_\_group {
& input {
&:active, &:focus {
border: 2px solid $cd-txt;
}
&:not(:focus):invalid {
color: white;
border: 2px solid $cd-danger;
background: $cd-danger;
animation: headshake 100ms cubic-bezier(.4,.1,.6,.9);
animation-iteration-count: 3;
}
}
}
}

@keyframes headshake {
25% {
// entièrement à droite
transform: translateX($shake-intensity);
    }
    75% {
        // entièrement à gauche
        transform: translateX($shake-intensity \* -1);
}
}
• Il y a un principe d'écriture appelé la « règle de trois » selon laquelle une chose qui arrive trois fois serait plus efficace et impactante. Que ce soit plus dramatique, plus drôle ou plus percutant (vous avez vu, je l'ai utilisée ici). Alors nous avons donné une valeur de trois à la propriété animation-iteration-count.
• Deux c'était très bien aussi. Réduisons donc le nombre d'itérations à 2 et testons à nouveau l'animation. Et quand on les voit enchaînés comme ça, 2 % d'intensité pour le hochement semble également un peu trop. Descendons à 1 % pendant qu'on y est :
$cd-danger : #b20a37 ;
$cd-txt: #6300a0;
$shake-intensity: 1%;

.form {
&**group {
& input {
&:active, &:focus {
border: 2px solid $cd-txt;
            }
            &:not(:focus):invalid {
                color: white;
                border: 2px solid $cd-danger;
                background: $cd-danger;
                // animation-iteration-count est directement intégré dans la propriété raccourcie animation:
                animation: headshake 100ms cubic-bezier(.4,.1,.6,.9) 2;
            }
        }
    }
}
@keyframes headshake {
    25% {
        // entièrement à droite
        transform: translateX($shake-intensity);
}
75% {
// entièrement à gauche
transform: translateX($shake-intensity \* -1);
}
}
• Où est passé animation-iteration-count ? Comme pour les autres propriétés d'animation, nous l'avons inclus dans la propriété d'animation abrégée, plutôt que d'écrire la version explicite. Nous avons donc ajouté le chiffre 2 à la liste des valeurs pour l'animation, et maintenant notre entrée devrait hocher la tête deux fois.
• Cette valeur pour la durée de l'animation s'applique à la durée d'un seul cycle d'animation. Cela signifie que notre animation de hochement de tête, avec une durée assignée de 100 ms et un nombre d'itérations de 2, prendra un total de 200 ms à se terminer :
• Avec animation-iteration-count, nous pouvons nous épargner beaucoup de calcul mental et de keyframes compliqués en écrivant un seul cycle d'animation et en demandant au navigateur de le rejouer autant de fois que nous le voulons. Bien plus propre, et bien plus facile à retoucher et à affiner.
Mais comment faire si on veut qu'une animation joue en boucle à l'infini ?
Les sites web appellent souvent le serveur en arrière-plan pour demander des données, comme une image, un texte, une donnée, etc. Pendant que la page attend la réponse du serveur, elle affiche un espace réservé.
Nous allons donc construire quelque chose de plus générique : un loader !
• Pour commencer, créons une <div> avec une classe .load, et cinq divs enfants intégrées, chacune avec une classe de .load**bar assignée :

<html>
    <div class="container">
        <div class="load">
            <div class="load__bar"></div>
            <div class="load__bar"></div>
            <div class="load__bar"></div>
            <div class="load__bar"></div>
            <div class="load__bar"></div>
        </div>
     </div>
</html>
•	Maintenant que nous avons construit nos barres, nous devons les styliser pour qu'elles ressemblent à... eh bien... des barres ! Attribuons à  .load  les propriétés de layout appropriées, et configurons les dimensions pour  .load__bar, tout en leur donnant un joli  background-color  vert menthe :
$cd-bars: #15DEA5;
$size: 3vh;

.load {
width: $size*10;
height: $size*7.5;
display: flex;
justify-content: space-evenly;
&\_\_bar {
background-color: #15DEA5;
height: 100%;
width: $size;
}
}
• Créons un ensemble de @keyframes appelés bars et utilisons la fonction de transformation scaleY() pour animer l'échelle verticale de ces barres dans le temps, en commençant à 50 % et en terminant à 100 % :

@keyframes bars {
0% {
transform: scaleY(0.5);

    }
    100% {
        transform: scaleY(1.0);
    }

}
• Bien sûr, pour que nos keyframes aient un effet sur nos barres et commencent à animer leur échelle, nous devons d'abord les appliquer au sélecteur .bars. Alors configurons une animation à l'aide de @keyframes bars et une durée de 1 000 ms :
$cd-bars: #15DEA5;
$size: 3vh;
$anim-dur: 1000ms;

.load {
width: $size*10;
height: $size*7.5;
display: flex;
justify-content: space-evenly;
&\_\_bar {
background-color: $cd-bars;
height: 100%;
width: $size;
animation: bars $anim-dur;
}
}

@keyframes bars {
0% {
transform: scaleY(0.5);
}
100% {
transform: scaleY(1.0);
}
}
• La variable $anim-dur correspond à la durée de notre animation. Comme nous l'avons vu, nous pouvons profiter du Sass pour créer des variables, ce qui nous permet d'ajuster nos valeurs un peu plus facilement, si nécessaire. Maintenant, nos barres devraient passer de la moitié de leur taille verticale à leur hauteur totale en une seconde :

À votre avis, quel est le meilleur moyen de créer des animations qui se déclenchent de manière alternée ?
• La propriété animation-delay,
• Configurons une boucle Sass @for pour l'itération à travers un ensemble de nombres allant de un à cinq, en incrémentant le nom du sélecteur et le délai de l'animation :
$cd-bars: #15DEA5;
$size: 3vh;
$num-bars: 5
$anim-dur: 1000ms;
$anim-delay: $anim-dur / $num-bars;

.load {
width: $size*10;
    height: $size*7.5;
    display: flex;
    justify-content: space-evenly;
    &__bar {
        background-color: $cd-bars;
        height: 100%;
        width: $size;
        animation: bars $anim-dur;
        @for $i from 1 through $num-bars {
            &--#{$i} {
animation-delay: $anim-delay \* $i;
}
}
}
}
• Chaque itération à travers la boucle produira un nouveau sélecteur, avec le numéro d'index de l'itération utilisé dans son nom, ainsi que pour multiplier le $anim-delay et créer un délai de lancement qui sera incrémenté au fur et à mesure. $anim-delay est réglé sur la durée de l'animation divisée par le nombre de barres.
• Ainsi, lors de la première itération, le modificateur sera nommé .load**bar--1 et aura un retard de 200 ms, le second sera .load**bar--2 avec un retard de 400 ms, et ainsi de suite. En vérifiant le CSS compilé, nous voyons que les sélecteurs suivants viennent d'être créés :
.load**bar--1 {
animation-delay: 200ms;
}
.load**bar--2 {
animation-delay: 400ms;
}
.load**bar--3 {
animation-delay: 600ms;
}
.load**bar--4 {
animation-delay: 800ms;
}
.load\_\_bar--5 {
animation-delay: 1000ms;
}
• Maintenant, il ne nous reste plus qu'à appliquer nos nouveaux modificateurs aux divs appropriées dans notre HTML :

<div class="container">
    <div class="load">
        <div class="load__bar load__bar--1"></div>
        <div class="load__bar load__bar--2"></div>
        <div class="load__bar load__bar--3"></div>
        <div class="load__bar load__bar--4"></div>
        <div class="load__bar load__bar--5"></div>
    </div>
 </div>
•	Nous avons ajouté tous nos délais, mais nous avons oublié de régler le mode de remplissage. Résultat : nos barres reviennent à leur taille initiale à la fin de l'animation.
•	Réglons donc le mode  animation-fill-mode  sur backwards pour étendre les valeurs de départ de l'animation pendant le délai :
$cd-bars: #15DEA5;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
width: $size*10;
    height: $size*7.5;
    display: flex;
    justify-content: space-evenly;
    &__bar {
        background-color: $cd-bars;
        height: 100%;
        width: $size;
        animation: bars $anim-dur backwards;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay \* $i;
}
}
}
}

• Maintenant, répétons ce cycle, vers l'infini.
• Pour cela, utilisons animation-iteration-count, qui est parfait pour ce genre de situation. Mais combien de cycles devons-nous utiliser dans les réglages pour le nombre d'itérations ?
• Faites boucler vos animations à l'infini
• Nous ne savons pas combien de temps va s'écouler entre le moment où notre navigateur envoie sa requête au serveur et la réception des données en réponse. Et cela signifie que nous ne savons jamais vraiment combien de fois nous aurons besoin de répéter l'animation de nos barres.
• Plutôt que de spécifier un nombre spécifique pour le nombre d'itérations, nous pouvons aussi dire au navigateur de lire l'animation à l'infini en lui assignant le mot clé « infinite » à la place :
$cd-bars: #15DEA5;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
width: $size*10;
    height: $size*7.5;
    display: flex;
    justify-content: space-evenly;
    &__bar {
        background-color: $cd-bars;
        height: 100%;
        width: $size;
        animation: bars $anim-dur backwards infinite;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay \* $i;
}
}
}
}
• Et maintenant voici notre animation répétant à l'infini une série de barres !

• Maintenant qu'elles tournent en boucle, nous avons un problème très similaire à celui que nous avions avant d'ajouter le mode de remplissage backwards à notre animation : les barres passent subitement de leur taille finale à leur taille initiale. Sauf que cette fois, c'est parce que les valeurs de début et de fin de la boucle sont différentes. Notre cycle devrait en fait commencer par des barres plus petites, qui grandissent jusqu'à leur taille maximale au milieu de l'animation, avant de rétrécir à leur taille initiale à la fin.
• Pour cela, nous pourrions ajouter un keyframe supplémentaire au milieu de l'animation de nos barres. Mais encore une fois... nous n'allons pas le faire. Ici aussi, il existe une meilleure solution. Et si nous voulions utiliser nos @keyframes bars ailleurs sur notre page, mais plutôt que de les animer en boucle, nous voulions qu'elles ne grandissent qu'une fois ? Si nous ajoutions ce keyframe supplémentaire à l'animation de nos barres, nous serions en train de modifier notre animation originale au service d'un cas particulier, et éventuellement de nous empêcher de l'utiliser dans d'autres animations sur notre site.
• À la place, nous pouvons utiliser la propriété animation-direction pour transformer nos @keyframes en une boucle invisible, même si les valeurs de début et de fin des keyframes sont différentes !
• La valeur par défaut pour animation-direction, celle qui est assignée si nous ne lui donnons pas explicitement une autre valeur, est « normal ». Comme vous auriez pu le supposer, ceci rejoue une animation normalement, c'est-à-dire du début à la fin :
$cd-bars: #15DEA5;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
width: $size*10;
    height: $size*7.5;
    display: flex;
    justify-content: space-evenly;
    &__bar {
        background-color: $cd-bars;
        height: 100%;
        width: $size;
        animation: bars $anim-dur backwards infinite;
        animation-direction : normal;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay * $i;
            }
        }
    }
}
•	Généralement, il est très rare de voir animation-direction avec la valeur « normal », car il s'agit d'une option qui donne le même résultat que si nous ne l’avions pas précisé du tout :
•	Là où l'utilisation de animation-direction commence à devenir très utile, c'est avec le mot clé « reverse ». Et qu'est-ce qu'on obtient en attribuant « reverse » à animation-direction ? Vous vous en doutez peut-être. L'animation est lue à l'envers, en commençant par la fin et en la lisant à l'envers jusqu'au début :
$cd-bars: #15DEA5;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
width: $size*10;
    height: $size*7.5;
    display: flex;
    justify-content: space-evenly;
    &__bar {
        background-color: $cd-bars;
        height: 100%;
        width: $size;
        animation: bars $anim-dur backwards infinite;
        animation-direction: reverse;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay * $i;
            }
        }
    }
}
•	Et maintenant, l'animation de nos barres va être jouée à l'envers, ce qui n'est pas exactement ce que nous recherchons :
•	Non seulement animation-direction nous permet de jouer des animations en avant et en arrière, mais elle nous permet également de jouer des animations avec des allers-retours, de sorte que la direction de l'animation alterne avec chaque itération, d'abord avec une lecture du début à la fin, puis en alternant avec une lecture de la fin au début. Ça pourrait être pas mal dans le cas de notre loader.
•	Renseignons donc la valeur alternate :
$cd-bars: #15DEA5;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
width: $size*10;
    height: $size*7.5;
    display: flex;
    justify-content: space-evenly;
    &__bar {
        background-color: $cd-bars;
        height: 100%;
        width: $size;
        animation: bars $anim-dur backwards infinite;
        animation-direction: alternate;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay * $i;
            }
        }
    }
}
•	Et maintenant, nous avons une animation en boucle infinie et invisible !
•	Nous voilà sur le bon chemin ! La fonction timing-function prévoit par défaut différentes pentes d'easing par rapport à ses profils d'accélération et de décélération, ce qui crée un effet d'à-coups entre les cycles :
•	Au lieu de s'en tenir aux valeurs par défaut de la fonction animation-timing-function, assignons-lui quelque chose de plus symétrique, comme le profil ease-in-out :
•	Et pendant que nous modifions le timing de notre animation, profitons-en pour abréger tout cela en utilisant le mot clé “animation”. Encore une fois, il suffit d’ajouter la valeur alternate à la liste des valeurs de la propriété animation :
$cd-bars: #15DEA5;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
&\_\_bar {
background-color: $cd-bars;
        animation: bars $anim-dur backwards infinite ease-in-out alternate;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay \* $i;
}
}
}
}

• nous pouvons ajouter un autre ensemble de barres juste en dessous, et les animer en miroir ? Pour cela, nous pouvons simplement dupliquer la div .load et son contenu :

<div class="container">
    <div class="load">
        <div class="load__bar load__bar--1"></div>
        <div class="load__bar load__bar--2"></div>
        <div class="load__bar load__bar--3"></div>
        <div class="load__bar load__bar--4"></div>
        <div class="load__bar load__bar--5"></div>
    </div>
    <div class="load">
        <div class="load__bar load__bar--1"></div>
        <div class="load__bar load__bar--2"></div>
        <div class="load__bar load__bar--3"></div>
        <div class="load__bar load__bar--4"></div>
        <div class="load__bar load__bar--5"></div>
    </div>
</div>
•	Plutôt que de reproduire l'ensemble de barres du haut, essayons de faire en sorte que l'ensemble de barres du bas se fonde dans celui du haut, de façon à ce que la barre du haut s'agrandisse et celle du bas rétrécisse. Un peu comme une synchronisation inversée. Il nous faut une boucle continue pour l'animation, mais en sens inverse.
•	Dites donc, ne serait-ce pas génial s'il y avait un mot clé pour la propriété animation-direction qui jouerait les animations dans des directions alternées, mais à l'envers ? Bon, vous vous doutez sûrement maintenant que nous ne faisons pas les choses au hasard !
•	La valeur s'appelle « alternate-reverse ». Afin d'appliquer la valeur  alternate-reverse  à notre deuxième ensemble de barres, nous devrons créer un nouvel ensemble de modificateurs, ce qui est possible depuis notre boucle @for. 
•	Au sein de chaque boucle, nous demanderons de créer un deuxième sélecteur, en utilisant la même structure de dénomination de base, mais en ajoutant un suffixe pour indiquer que sa direction est inversée. Pendant que nous y sommes, donnons aussi un peu plus de contraste visuel et ajoutons une couleur différente à nos barres inversées :
$cd-bars: #15DEA5;
$cd-bars-inv: #0E397F;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
&**bar {
animation: bars $anim-dur backwards infinite ease-in-out alternate;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay * $i;
            }
            &--#{$i}-inv {
animation-delay: $anim-delay \* $i;
animation-direction: alternate-reverse;
background-color: $cd-bars-inv;
}
}
}
}
• Notre CSS compilé a désormais deux ensembles de modificateurs, un pour la ligne du haut, un autre pour le bas :
.load**bar--1 {
animation-delay: 200ms;
}
.load**bar--1-inv {
animation-delay: 200ms;
animation-direction: alternate-reverse;
animation-fill-mode: forwards;
background: #0E397F;
}
.load**bar--2 {
animation-delay: 400ms;
}
.load**bar--2-inv {
animation-delay: 400ms;
animation-direction: alternate-reverse;
animation-fill-mode: forwards;
background: #0E397F;
}
.load**bar--3 {
animation-delay: 600ms;

}
.load**bar--3-inv {
animation-delay: 600ms;
animation-direction: alternate-reverse;
animation-fill-mode: forwards;
background: #0E397F;
}
.load**bar--4 {
animation-delay: 800ms;
}
.load**bar--4-inv {
animation-delay: 800ms;
animation-direction: alternate-reverse;
animation-fill-mode: forwards;
background: #0E397F;
}
.load**bar--5 {
animation-delay: 1000ms;
}
.load\_\_bar--5-inv {
animation-delay: 1000ms;
animation-direction: alternate-reverse;
animation-fill-mode: forwards;
background: #0E397F;
}
• Remplaçons les modificateurs pour notre deuxième ensemble de barres dans le HTML :

<div class="container">
    <div class="load">
    <div class="load__bar load__bar--1"></div>
    <div class="load__bar load__bar--2"></div>
    <div class="load__bar load__bar--3"></div>
    <div class="load__bar load__bar--4"></div>
    <div class="load__bar load__bar--5"></div>
</div>
<div class="load">
    <div class="load__bar load__bar--1-inv"></div>
    <div class="load__bar load__bar--2-inv"></div>
    <div class="load__bar load__bar--3-inv"></div>
    <div class="load__bar load__bar--4-inv"></div>
    <div class="load__bar load__bar--5-inv"></div>
    </div>
</div>
•	Nous pourrions très bien dire qu'elles sont terminées et passer à autre chose. Mais qu'en est-il de ces pauvres utilisateurs qui n’ont pas encore la fibre ? Qui sait combien de temps ils devront regarder ces barres avant d'obtenir une réponse du serveur ? Ayons pitié de leurs pauvres âmes et faisons quelque chose pour rendre l'animation un peu plus interactive et les divertir pendant qu'ils patientent.
•	Il y a une propriété d'animation CSS que nous n'avons pas encore abordée. Plutôt que de contrôler la direction ou le délai d'une animation, cette propriété permet de contrôler si l'animation est lue ou non. La propriété animation-play-state permet de mettre en pause ou de jouer des animations en utilisant respectivement les mots clés « paused » ou « running ».
•	Supposons que nous disposions d'une div toute simple avec la classe .spin :
<div class="container">
    <div class="spin"></div>
</div>
•	Quelques @keyframes et propriétés d'animation suffisent pour la faire tourner à l'infini, chaque rotation prenant trois secondes à se terminer :
.spin {
    background-color: #15DEA5;
    width: 30vh;
    height: 30vh;
    animation: spin 3s linear infinite;
}

@keyframes spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
• Elle tourne, tourne, tourne... Plus rien ne peut l'arrêter, ni l'accélérer ou lui faire quoi que ce soit, à vrai dire. Pour l'instant, nous n'avons vu que comment mettre nos animations en mouvement, mais une fois qu'elles sont en marche, nous n'avons plus qu'à attendre qu'elles se terminent. Mais la propriété animation-play-state nous offre une commande toute prête que nous pouvons utiliser pour lire et mettre en pause nos animations.
• Configurons notre boîte pour qu'elle commence en pause, mais que la lecture de l'animation commence au survol de la souris. Pour mettre en pause notre boîte en rotation, nous devons régler animation-play-state sur « paused », ou simplement ajouter le mot clé « paused » à la propriété d'animation abrégée :
.spin {
background-color: #15DEA5;
width: 30vh;
height: 30vh;
animation: spin 3s linear infinite paused;
}

@keyframes spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
• Maintenant, notre boîte ne bouge plus, même si notre animation de rotation « spin » lui est appliquée :
• Notre animation commence directement en statut pause. Pour faire bouger notre animation, nous avons besoin d'ajouter un bouton de lecture, ce que nous allons faire en ajoutant un pseudosélecteur :hover à notre sélecteur .spin, dans lequel l’état de l’animation sera sur « running » :
.spin {
background-color: #15DEA5;
width: 30vh;
height: 30vh;
animation: spin 3s linear infinite paused;
&:hover {
animation-play-state: running;
}
}

@keyframes spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
• Maintenant, chaque fois que nous survolerons notre boîte, elle reprendra l'animation là où elle s'était arrêtée, et une fois le survol terminé, elle fera une pause là où elle était, pour recommencer son animation si nous la survolons à nouveau :
• animation-play-state donne à nos utilisateurs la possibilité d'interagir avec nos animations
• Utilisons animation-play-state pour transformer nos barres de chargement en un petit jeu qui va aider nos utilisateurs à patienter en attendant la réponse du serveur.
• Pour l'instant, nos deux ensembles de barres sont verrouillés l'un et l'autre dans une sorte de danse :
• Et si on changeait ces délais sur la deuxième série de barres, pour que chacune ait un temps de départ aléatoire ?
• Maintenant, tout est désynchronisé ! Mais cela nous permet d'intégrer une certaine interactivité pour nos utilisateurs et de les divertir un peu pendant qu'ils attendent que les choses se chargent.
• Nous pourrions utiliser la pseudoclasse :hover pour agir comme un bouton pause. Mais l’utilisateur pourra resynchroniser les deux ensembles de barres en survolant chaque barre, jusqu'à ce qu'elle soit synchronisée avec son acolyte. La première étape consiste à donner des délais aléatoires sur les barres inversées, ce qui peut se faire via la fonction random() de Sass :
$cd-bars: #15DEA5;
$cd-bars-inv: #0E397F;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
&**bar {
animation: bars $anim-dur backwards infinite ease-in-out alternate;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay * $i;
            }
            &--#{$i}-inv {
animation-delay: $anim-delay * $i + random(100)*15ms;
animation-direction: alternate-reverse;
animation-fill-mode: forwards;
background-color: $cd-bars-inv;
}
}
}
}
• La fonction aléatoire génère un entier compris entre 1 et le nombre choisi comme argument, qui dans notre cas de figure est 100. Nous générons donc un nombre aléatoire entre 1 et 100, puis nous le multiplions par 15 ms et l'ajoutons à notre retard incrémentiel, créant ainsi un animation-delay aléatoire pour chacune des barres inversées :
• Maintenant, tout ce que nous avons à faire est d'ajouter notre bouton pause en assignant à .load**bar une pseudoclasse :hover permettant de régler animation-play-state sur « paused » :
$cd-bars: #15DEA5;
$cd-bars-inv: #0E397F;
$size: 3vh;
$anim-dur: 1000ms;
$anim-delay: $anim-dur / 5;

.load {
&\_\_bar {
animation: bars $anim-dur backwards infinite ease-in-out alternate;
        @for $i from 1 through 5 {
            &--#{$i} {
animation-delay: $anim-delay * $i;
            }
            &--#{$i}-inv {
animation-delay: $anim-delay * $i + random(100)*15ms;
animation-direction: alternate-reverse;
animation-fill-mode: forwards;
background-color: $cd-bars-inv;
&:hover {
animation-play-state: paused;
}
}
}
}
}
• Pendant que nous y sommes, ajoutons quelques instructions directement dans notre HTML.

<div class="container">
    <span>
        Survolez les barres bleues pour les synchroniser</span>
    <div class="load">
        <div class="load__bar load__bar--1"></div>
        <div class="load__bar load__bar--2"></div>
        <div class="load__bar load__bar--3"></div>
        <div class="load__bar load__bar--4"></div>
        <div class="load__bar load__bar--5"></div>
    </div>
    <div class="load">
        <div class="load__bar load__bar--1-inv"></div>
        <div class="load__bar load__bar--2-inv"></div>
        <div class="load__bar load__bar--3-inv"></div>
        <div class="load__bar load__bar--4-inv"></div>
        <div class="load__bar load__bar--5-inv"></div>
    </div>
    <span>avec leurs équivalents verts au dessus.</span>
</div>

# Affinez vos animations CSS avec DevTools

DevTools de Chrome possède un outil intégré que nous pouvons utiliser pour peaufiner et améliorer les transitions et les animations. Cet outil s'appelle judicieusement « Animations ».
• ouvrir DevTools
• « More Tools » (plus d'outils) et cliquer sur « Animations ».
• Et voilà, nous y sommes. Le panneau Animations. Rien de très excitant pour l'instant, sauf un message nous disant que l'application écoute les animations. Donnons-lui quelque chose à écouter en chargeant une page avec une animation :
• Nous avons un menu animé, la boîte principale qui s'ouvre en coulissant, puis les éléments du menu qui glissent en position. Au fur et à mesure que l'animation est lue, une boîte grise s'efface, remplie de quelques lignes colorées.
• Étrange... Laissons-nous tenter et cliquons :
• Et voilà ! Notre animation de menu se répète, bien que la page n'ait pas été rechargée. Dans le panneau Animations, une timeline d'éléments animés apparaît, avec un logo de lecture lisant les segments pendant que l'animation progresse.
• Mais à quoi servent ces lignes colorées sur l'image miniature ?
• Chaque ligne représente un élément HTML animé avec sa propre couche dans la timeline. Si nous survolons le nom de l'élément ou si nous cliquons sur son graphique d'animation, Chrome le met en surbrillance sur la page :
• On dirait donc que nous avons un élément de menu, avec une div pour chaque élément de menu, quelques éléments décoratifs pour améliorer l'animation et des éléments de menu.
• Dans chaque couche, des points représentent les étapes clés pour voir où chaque animation commence et se termine, ainsi que les courbes d'accélération, représentées par un graphique de vitesse, où le pic du profil est la vitesse maximale.
• L'élément de menu avec la classe .menu qui lui est appliquée commence à 0 seconde et dure environ 600 ms, en tout cas à première vue. En fait, si nous cliquons sur la couche, non seulement l'élément est mis en surbrillance, mais ses balises et son style sont également affichés dans le panneau Éléments ci-dessous :
• Avec le style de .menu qui nous est présenté, nous pouvons voir qu'il a en effet une durée d'animation de 600 ms, ainsi que la fonction de timing par défaut, et un animation-fill-mode réglé sur « both ». Il utilise également un ensemble de keyframes appelé « menu » et possède un keyframe entre le début et la fin, ce qui est indiqué par le point creux au milieu de l'animation.
• Les animations attachées aux éléments .menu\_\_open-accent utilisent toujours le même ensemble de keyframes que l'animation du menu principal. On peut le voir grâce au nom “menu” qui est indiqué au-dessus du profil de vitesse. Elles sont les seules à avoir des durées et des délais différents. Si nous cliquons sur l'une d'elles, nous verrons exactement quels sont sa durée et son délai :
• Vous pouvez faire des allers-retours avec l'animation en déplaçant le curseur sur la timeline. Cela donne une très bonne idée de la façon dont les différents éléments agissent et interagissent les uns avec les autres :
• En cliquant sur le bouton de lecture situé à gauche de la timeline, on peut voir notre animation en temps réel :
• Ceci n'est possible que si l'option 100 % est surlignée près du haut du panneau. 100 % indique la vitesse de lecture. Nous pouvons donc également choisir de lire une animation à un quart de sa vitesse normale :
• Ou, pour une lecture très ralentie, nous pouvons même la régler pour qu'elle soit lue à 10 % de sa vitesse normale :

• Une excellente façon d'améliorer ses compétences en animation consiste à décomposer les animations que vous aimez. Vous voyez immédiatement si vous aimez quelque chose en particulier, mais avec l’outil Animations des DevTools, vous pouvez aller plus loin et les disséquer étape par étape.
• En bref, l'outil d'animation peut nous aider pour :
• Voir rapidement tous les éléments utilisés dans une animation.
• Comprendre comment ils sont combinés et mis en scène pour créer le rendu final.
• Repérer là où il y a un problème.
• Et commencer à trouver une solution !
• Ainsi, au-delà d'une meilleure compréhension de la composition des animations, comment est-ce que DevTools peut nous aider à améliorer nos animations ?
• Regardons à nouveau notre animation de menu :
• Ça vous paraît enthousiasmant, n'est-ce pas ? Mais il y a encore quelque chose qui me chiffonne.
• Ce n'est pas que cette application soit mauvaise... Mais, quand on regarde la timeline, on voit qu’elle est très linéaire. L'animation se déroule de manière très régulière et graduelle. Chaque élément du menu commence lorsque le précédent est à mi-chemin. Tout semble un peu trop robotique et sans vie :
• OK, cette animation n'est pas la meilleure qui soit. J’ai compris ! Alors, revenons à l'éditeur et changeons un peu les délais et les durées des éléments du menu, et espérons que les choses aient l'air un peu plus naturelles.
• Croisons les doigts. Mais vous n’êtes cependant pas certain d’obtenir le résultat attendu. Pour avoir une animation avec un timing adapté, rien ne remplace l'expérimentation. Et expérimenter en faisant de nombreux allers-retours entre notre éditeur et notre navigateur, c'est un peu comme essayer de courir dans des sables mouvants : une expérience lente, frustrante, avec le risque constant de s'enliser.
• Alors, plutôt qu'un destin fait de frustrations et de désespoir, pourquoi ne pas simplement faire glisser son curseur sur les DevTools ? Ça paraît plus tentant, n'est-ce-pas ?
• Réglez vos animations directement dans les DevTools
• Eh oui, vous pouvez ajuster vos animations très simplement en cliquant et en faisant glisser les éléments de la timeline. Vous voulez faire durer votre animation plus longtemps ou au contraire l’accélérer ? Cliquez sur son point de départ ou sa destination et faites-le glisser vers la gauche ou la droite :
• Et d'un seul coup, nous avons modifié la durée de l'animation pour le premier élément de menu. Dans le volet Elements, les valeurs de durée et de délai de l'animation ont été mises à jour.
• En cliquant à nouveau sur ce bouton de lecture, nous pouvons voir que notre menu est maintenant lu en utilisant la nouvelle durée.
• Nous pouvons donc ajuster nos durées et effectuer quelques petites modifications jusqu'à ce que tout semble parfait. C'est beaucoup plus rapide et plus facile que de faire des allers-retours entre le navigateur et l'éditeur, vous ne trouvez pas ?
• Le panneau d'animation nous permet d'ajuster les propriétés de l'animation telles que la durée. Mais les pourcentages des keyframes ne font pas partie des propriétés de l'animation : ces pourcentages font partie de l'animation @keyframes en tant que telle. La modification d'un pourcentage d'un keyframe se reflète dans chaque instance d'une animation qui utilise ces keyframes. Donc, si nous voulons ajuster les pourcentages des keyframes, nous devons le faire à la main.
• En plus de faire glisser les extrémités des animations pour ajuster leur durée, nous pouvons également ajuster leurs délais en faisant glisser (en mode drag-and-drop) le profil de l'animation :
• Après avoir déplacé une animation sur la timeline dans un sens ou dans l'autre, sa valeur de délai d'animation est mise à jour dans le volet Elements ci-dessus. Et en cliquant sur le bouton de lecture, vous verrez apparaître notre animation modifiée avec son nouveau délai :
• Que se passe-t-il si nous actualisons la page à ce stade ?
• Si on regarde notre code source, rien n'a changé. Cela signifie que si nous actualisons notre page, tout reviendrait à la version précédente de nos animations, et toutes nos modifications seraient perdues !
• Quand nous modifions des animations dans le panneau d'animation, nous modifions des éléments dans ce qu'on appelle le DOM (vous vous souvenez, je vous en avais parlé), qui, pour simplifier, est le rendu par le navigateur de nos HTML et CSS, etc. Les modifications que nous avons apportées aux panneaux Animation et Elements n'affectent donc que l'interprétation du rendu de notre code. Si nous voulons conserver la version de notre animation que nous créons dans le panneau Animation, nous devrons mettre à jour manuellement notre code pour le faire correspondre.
• Euh... mais... il se passe tout plein de trucs... des durées, des délais... cela fait beaucoup de choses à suivre...
• C'est vrai. Heureusement, Chrome suit mieux que nous. En haut dans l'onglet de l'élément, aligné à droite du sélecteur qui contient le délai que nous venons de modifier, il y a un lien vers l'emplacement dans le fichier CSS. Cliquons dessus. Devtools passe directement au volet Sources et le met en surbrillance dans le code. Et si nous faisons un clic droit sur le fichier CSS, il est possible de choisir « Local Modifications » (modifications locales) dans le menu contextuel, ce qui ouvre un panneau Modifications à côté de notre panneau Animations :
• Dans le panneau « Changes », on peut voir les logs de « diff ». Cela correspond aux différences entre le code source et les modifications effectuées dans les DevTools. Les valeurs originales sont surlignées en rouge, et les valeurs mises à jour sont surlignées en vert.
• Nous pouvons rapidement voir les propriétés que nous devons mettre à jour, et les valeurs sur lesquelles nous devons les mettre à jour. Une fois que nous avons ajusté nos animations pour qu’elles correspondent à l’effet recherché, nous pouvons ainsi passer à ce panneau et l'utiliser pour mettre à jour notre code source.
• La comparaison avec les “diffs” fonctionne comme les systèmes de contrôle de version, où les modifications apportées au code existant sont stockées et utilisées pour créer la version la plus récente d'un document. Si vous avez déjà eu un conflit de merge sur Git, vous avez probablement comparé les différences entre les deux documents pour résoudre ce conflit.
• Évaluez vos animations
• Maintenant que nous connaissons l’outil Animation sur le bout des doigts, jetons un coup d’œil à notre menu :
• Retour à l'animation de votre menu
• Pour l'instant, il y a quelques éléments qui ne vont pas.
• Les éléments du menu s'affichent trop tard.
• Les borders de l'élément de menu arrivent également un peu trop tard.
• Le décalage est trop important entre les différents éléments de menu qui s'animent à l'intérieur. Ils donnent l'impression de s'animer l'un après l'autre, plutôt que d'être décalés.
• La durée des animations menu**item semble être un peu trop rapide.
• Toutes ces remarques viennent vraiment d’une sensibilité. Nous assignons des valeurs en pensant qu'elles seraient de bons points de départ pour les différentes animations, mais elles peuvent et doivent être ajustées en fonction des préférences. Nous n'allons pas entrer dans les détails des durées et des délais de chaque animation.
• Différentes choses peuvent vous sembler parfaites ou imparfaites. C’est donc le moment pour vous de faire vos propres expériences. Ouvrez le panneau Animations, cliquez, glissez-déplacez, modifiez et expérimentez à votre guise. Revenez quand vous serez satisfait de votre résultat.
• Comparez vos animations
• Vous voilà de retour ? Parfait ! J'espère que vous avez une animation qui vous plaît. De mon côté, voici la version que je préfère !
• Et voilà le rendu final !
• Dans l'ensemble, l'animation principale .menu est un peu plus lente, de même que les animations de .menu**item, qui sont maintenant échelonnées de manière plus rapprochée.
• Modifier son animation est un véritable processus. Arriver à une animation que l'on trouve « parfaite » n'est pas quelque chose que l'on parvient à faire du premier coup. Grâce à notre expérience et à notre instinct, nous pouvons commencer à nous faire une idée de ce que les valeurs de l'animation devraient probablement être, mais ce n'est que le point de départ. À partir de là, il s'agit de tester et de tâtonner pour arriver à un résultat dont nous sommes satisfaits.
• Tous les changements effectués
• Les durées ont été un peu modifiées, mais les changements les plus importants concernent la durée des animation-delay. Tous les éléments de .menu**item arrivent plus tôt, avec .menu**item--1 à peine 25 millisecondes plus tôt, et .menu\_\_item--3 presque 400 ms plus tôt.
• Dans l'ensemble, cela permet d’avoir une animation plus dynamique et plus accrocheuse. Voici ces changements, intégrés dans le code final :

<div class="container">
    <menu class="menu">
        <div class="menu__item menu__item--1 menu__item--current">
            Home
            <div class="menu__item-accent menu__item-accent--active"></div>
        </div>
        <div class="menu__item menu__item--2">
            About
            <div class="menu__item-accent"></div>
        </div>
        <div class="menu__item menu__item--3">
            Contact
            <div class="menu__item-accent"></div>
        </div>
        <div class="menu__open-accent--1"></div>
        <div class="menu__open-accent--2"></div>
    </menu>
</div>
$cd-navy: #0E397F;
$cd-mint: #15dea5;

@mixin menu\_\_open-accent($dur, $delay) {
content: "";
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #f4f9f8;
transform-origin: top left;
animation: menu $dur $delay both;
z-index: -1;
}

.menu {
min-width: 33vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
background:$cd-mint;
overflow: hidden;
transform-origin: top left;
position: relative;
animation: menu 661ms both;
z-index: -10;
&**open-accent--1{
@include menu**open-accent(450ms, 275ms);
}
&**open-accent--2 {
@include menu**open-accent(450ms, 150ms);
background: $cd-navy;
z-index: -2;
}
&**item {
padding: .75rem;
margin: .25rem;
background: #fff;
animation: menu**item 810ms cubic-bezier(.1,.9,.1,1) both;
position: relative;
&-accent {
content: "";
position: absolute;
top: 0;
bottom: 0;
left: 0;
width: .25rem;
background-color: $cd-mint;
animation: menu\_\_accent 400ms both;
&--active {
background-color: $cd-navy
}
}
&--1 {
animation-delay: 475ms; > div {
animation-delay: 712ms;
}
}
&--2 {
animation-delay: 546ms; > div {
animation-delay: 805ms;
}
}
&--3 {
animation-delay: 632ms; > div {
animation-delay: 914ms;
}
}
}
}

@keyframes menu {
0% {
transform: scale(0,.07);
}
33% {
transform: scale(1,.07);
animation-timing-function: cubic-bezier(.73,.01,.2,.99)
}

}

@keyframes menu\_\_item {
0% {
transform: translateX(-110%);
}
}

@keyframes menu\_\_accent {
0% {
transform: scaleY(0);
}
}

# Sites utiles

• Awwwards : ce site recense les plus beaux sites Internet. La catégorie "animation" a de quoi faire rêver n'importe quel animateur ;
• Dribbble : vous pouvez chercher le mot clé qui correspond le plus à ce que vous voulez créer, et rassembler vos résultats dans un panier (bucket en anglais). Très pratique !
• Codepen : ce site est parfait lorsque vous cherchez une animation sur un élément bien spécifique, comme un burger menu, par exemple ;
• UI Movement : votre dose d'inspiration quotidienne en UI (User Interface), qui recense de nombreuses animations ;
