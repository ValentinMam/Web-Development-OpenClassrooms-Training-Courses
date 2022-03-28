### Sommaire

# Structurez votre CSS

# Méthodologie BEM (Bloc Eléments Modificateurs)

# Préprocesseurs CSS pour des fonctionnalités avancées

# Découvrez Sass et sa syntaxe

# Utilisez les combinateurs

# Utilisez des sélecteurs BEM avec Sass

---

# Structurez votre CSS

Un sélecteur est un ensemble de règles de base. Chaque bouton dans votre code aura les qualités définies dans le sélecteur.
Ensuite, pour ajouter des règles supplémentaires, nous créons les sélecteurs dans .btn-wide et .btn-rounded qui modifieront notre bouton de base .btn.

La spécificité est la manière dont le navigateur décide quelle règle s’applique si plusieurs règles ont des sélecteurs différents, mais peuvent quand même s’appliquer au même élément.
• Le style inline (style directement dans le HTML)
• Les id
• Les classes, pseudoclasses et attributs (:hover…)
• Les éléments et pseudoéléments
Pas d’espace entre les noms des classes dans le sélecteur CSS. Ceci indique au navigateur qu’un élément doit contenir toutes les règles du sélecteur pour être applicable. En cas d’égalité, le navigateur sélectionne le dernier sélecteur à avoir été déclaré.

# Méthodologie BEM (Bloc Eléments Modificateurs)

1. Construisez des blocs
   • Un bloc est un composant, ou une section d’une page qui est autonome et peut fonctionner indépendamment du reste de la page. Cela peut être un header, un footer, un conteneur, un menu ou même un bouton.
   • Naming : en décrire sa fonction.
2. Créez des éléments
   • Il ne peut pas fonctionner de façon autonome, mais en revanche il fait partie intégrante du bloc : il s’agit d’un élément de ce bloc.
   • Naming : son bloc parent, suivi d’un double underscore (aussi appelé “dunders”) + la fonction de l’élément. form\_\_label.
3. Élaborez des modificateurs
   • Les modificateurs modifient l’apparence d’un bloc mais aussi d’un élément. Voyez-les comme des sélecteurs qui créent différentes versions d’un bloc ou d’un élément. Besoin de changer la taille, la couleur, la police, etc.
   • Naming : préciser le bloc (ou l’élément) qu’il modifie, y ajouter deux tirets, suivi du style graphique de votre modificateur. button--green.

# Préprocesseurs CSS pour des fonctionnalités avancées

Les préprocesseurs sont des outils, ou des programmes, qui vont vous permettre de générer du CSS à partir des fichiers écrits dans la syntaxe du préprocesseur.
Nesting (Fait d’imbriquer les sélecteurs l’un dans l’autre en créant une hiérarchie)
Les préprocesseurs vous permettent d’avoir les deux à la fois, en transformant la syntaxe vers du code CSS standard qui sera compris par les navigateurs.

• Découvrez les fonctionnalités des préprocesseurs

1. Les variables
   Les variables vous permettent de stocker des valeurs répétées fréquemment.
   $mint: #15DEA5;
   .header {
   background-color: $mint
   }
   .header {
   background-color: #15DEA5;
   }

2. Les boucles
   Les boucles, qui automatisent les tâches répétitives
   $colours: (
   mint: #15DEA5,
   navy: #001534,
   seafoam: #D6FFF5,
   white: #fff,
   rust: #DB464B
   );

@each $colour, $hex in $colours {
  .btn--#{$colour} {
background-color: $hex;
}
}
.btn--mint {
background-color: #15DEA5;
}

.btn--navy {
background-color: #001534;
}

.btn--seafoam {
background-color: #D6FFF5;
}

.btn--white {
background-color: #fff;
}

.btn--rust {
background-color: #DB464B;
}

3. Les structures conditionnelles (ou conditions)
   Les opérations logiques vous permettent d’écrire un même bloc de code que vous pouvez utiliser dans différentes circonstances.
   @if (lightness(#15DEA5) > 25%) {
   .header {
   color: #fff;
   background-color: $mint;
   }

}@else{
.header {
color: #000;
background-color: $mint;
}
}
.header {
color: #fff;
background-color: #15DEA5;
}

# Découvrez Sass et sa syntaxe

La compilation est un processus qui nous permet de transformer Sass en CSS traditionnel.
On peut utiliser du code CSS préexistant dans Sass en l’intégrant dans un fichier .scss.
• La syntaxe .scss est très similaire à la syntaxe CSS.
• La syntaxe .sass est plus concise mais .scss reste plus couramment utilisée.

# Utilisez les combinateurs

1. Combinateur parent .parent
   Dans le premier cas, tout ce qui est relié à l’élément parent adoptera la couleur de fond spécifiée.
2. Combinateur descendant .parent .descendant
   Dans le deuxième cas, si le deuxième élément est le descendant du premier, alors il adoptera la couleur spécifiée.
3. Combinateur parent > enfant .parent > .child
   Dans le troisième cas, si le deuxième élément est un enfant du premier, alors il adoptera la couleur spécifiée.
4. Combinateur adjacent .parent + .adjacent
   Dans le quatrième cas, si le deuxième élément est immédiatement précédé du premier, alors il adoptera la couleur spécifiée.

Besoin d’ajouter une pseudoclasse (exemple : li:hover) ?
Relier les sélecteurs parent et enfant : l’esperluette (&) reliera directement au sélecteur parent sans recourir à des combinateurs.

# Utilisez des sélecteurs BEM avec Sass

Ce qu’il vous faut, c’est un moyen de nester dans Sass sans aller à l’encontre des principes BEM.
En maintenant la spécificité au minimum, il devient beaucoup plus simple de créer un modificateur capable d’outrepasser les propriétés souhaitées.
En utilisant la spécificité accrue seulement là où c’est nécessaire, vous pouvez créer un système de sélecteurs qui est non seulement propre et maintenable, mais aussi stable et prévisible.
