# Commandes avancées MySQL

1. Isoler

- Isolez un objet unique
  SELECT _ FROM aliment WHERE id = 4;
  SELECT _ FROM aliment WHERE nom = “poire”;

- Isolez plusieurs objets répondant à un critère de comparaison
  utiliser des opérateurs classiques, tels que : supérieur à ( > ) ; inférieur à ( < ) ; supérieur ou égal à (>=) ; inférieur ou égal à (<=).
  Par exemple, comment afficher tous les aliments dont la teneur en calories n’excède pas (strictement) 90 kcal ?
  SELECT \* FROM aliment WHERE calories < 90;

- Isolez des objets à partir d’une comparaison sur du texte
  SELECT \* FROM utilisateur WHERE email LIKE “%gmail.com”;

L’utilisation du pourcentage (%)

• “%gmail.com” = récupérer tout texte finissant par “gmail.com”.
• “gmail.com%” = récupérer le texte qui commence par “gmail.com”
• “%gmail%” = tout texte qui contient “gmail”

2. Ordonner

- Ordre croissant (ascending ASC) ou décroissant (descending DESC).
  SELECT _ FROM aliment ORDER BY calories ASC;
  SELECT _ FROM aliment WHERE calories < 90 ORDER BY calories DESC;
  SELECT _ FROM utilisateurs ORDER BY prenom ASC;
  SELECT _ FROM utilisateurs ORDER BY prenom DESC;

3. Compter

- Comptez le nombre d’objets récupérés via une requête
  SELECT COUNT(\*) FROM utilisateur WHERE email LIKE "%gmail.com";

- Il existe également : COUNT(colonne) / COUNT(DISTINCT colonne)
  SELECT COUNT(\*)FROM utilisateur; = compte tous les utilisateurs
  SELECT COUNT(nom) FROM utilisateur; = compte tous les noms de famille.
  SELECT COUNT(DISTINCT nom) FROM utilisateur; = compte uniquement les noms de familles différents

- Effectuez des opérations sur des données chiffrées
  • AVG : nous donne la moyenne de la colonne sur la sélection ;
  • SUM : nous donne la somme de la colonne sur la sélection ;
  • MAX : nous donne le maximum de la colonne sur la sélection ;
  • MIN : nous donne le minimum de la colonne sur la sélection.

- Envie de connaître le maximum de teneur en sucre des aliments dans notre base ?
  SELECT MAX(sucre) FROM aliment;

- Quelle est la teneur moyenne en calories des aliments de 30 kcal ou plus :
  SELECT AVG(calories) FROM aliment WHERE calories >= 30;

4. Sauvegarder des requêtes

- Les utilisateurs dont l’adresse mail est une adresse Gmail.
  CREATE VIEW utilisateurs_gmail_vw AS SELECT \* FROM utilisateur WHERE email LIKE "%gmail.com";

- Pour récupérer les utilisateurs avec une adresse Gmail
  SELECT \* FROM utilisateurs_gmail_vw;

“utilisateurs_gmail_vw” s’utilise désormais comme une table. (\_vw = convention chez les utilisateurs de SQL)

Vous pouvez ainsi réappliquer d’autres commandes SQL sur cette dernière.

- afficher les utilisateurs dont l’adresse e-mail est une adresse Gmail ET dont le prénom contient la lettre “m” :
  SELECT \_ FROM utilisateurs_gmail_vw WHERE prenom LIKE "%m%";

5. Relations

- Relation 1 à plusieurs
  Chaque utilisateur est relié à une langue. Et chaque langue peut être reliée à plusieurs utilisateurs.
  On parle alors d’une relation 1 à plusieurs entre utilisateur et langue (one-to-many)
  Dans ce cas spécifique, une langue est reliée à plusieurs utilisateurs.

- On crée donc cet objet normalement :
  INSERT INTO `langue` VALUES ('français');

Chaque utilisateur se voyant relié à une langue, c’est l’utilisateur qui va devoir stocker l’id unique de la langue associée.

Par convention, on utilise comme nom de ce champ {nom de l’objet associé}\_id (donc ici, langue_id ).

Par exemple, le premier utilisateur a comme langue_id 1, soit l’id du français dans la table des langues.

- JOIN. = vous allez pouvoir expliquer à MySQL comment joindre deux tables selon un identifiant qu’elles ont en commun.
  Partons du principe que :
  • la langue_id du premier utilisateur est le français ;
  • l’id du français est 1.
  Vous allez spécifier à MySQL de joindre les tables “utilisateur” et “langue” en lui précisant que l’id de langue et langue_id de l’utilisateur doivent êtres égaux !

- Tous les utilisateurs avec les langues qui leur sont associées.
  SELECT \* FROM `utilisateur`
  JOIN `langue`
  ON `utilisateur`.`langue_id` = `langue`.`id`;

• Nous avons demandé à MySQL de sélectionner tous les utilisateurs.
• SELECT \* FROM `utilisateur`
• Auxquels nous voulons joindre les langues.
• JOIN `langue`
• En précisant à MySQL de les relier, en considérant que l’id de la langue est stockée dans chaque utilisateur dans le champ langue_id.
• ON `utilisateur`.`langue_id` = `langue`.`id`

Ici, vous avez utilisé la commande SQL pour lier la totalité d’une table (utilisateur) avec une autre (langue). Mais on peut tout à fait limiter cette jointure à seulement quelques objets en particulier.

- Relation plusieurs à plusieurs
  Une fois ces aliments scannés, il serait plus qu’utile que la base de données les garde en mémoire, afin que les utilisateurs puissent les retrouver par la suite (pour par exemple faire leur prochaine liste de courses).
  Pour ce faire, il faudrait un moyen de stocker dans la BDD tous les aliments qui ont été scannés par un utilisateur précis. Sachant que :
  • un même utilisateur peut stocker plusieurs aliments scannés ;
  • un aliment peut lui-même être scanné par plusieurs utilisateurs.

On parle ici de relation plusieurs à plusieurs.
Chaque objet d’une table pouvant être relié à plusieurs objets de l’autre table, et vice versa.
Or, tout ce que sait faire MySQL (et les bases de données SQL en général), c’est de stocker une valeur unique par champ. Il n’est pas possible par exemple de stocker plusieurs id d’aliments au sein d’un même utilisateur.
Par défaut, le SQL ne sait modéliser que des relations 1 à plusieurs.

Vous allez “tricher”. Une relation plusieurs à plusieurs, c’est une multitude de relations 1 à plusieurs.
Regardez les tables présentes dans la BDD que vous avez téléchargées pour cette partie. Voyez-vous une table appelée utilisateur_aliment ?
Celle-ci contient des utilisateur_id et des aliment_id . Vous l’avez peut-être deviné : elle sert à stocker des relations entre un utilisateur et un aliment précis.

On appelle table de liaison ce genre de table.

Par convention, elle prend le nom {table1}\_{table2} , et sert à relier les tables 1 et 2 qui y sont stockées, en sauvegardant l’id d’un objet de la table 1, à l’id de l’objet de la table 2 correspondant.
En récupérant tous les objets présents dans cette base, qui ne sont autres que des relations 1 à plusieurs vers utilisateur et aliment, on peut reconstituer les relations plusieurs à plusieurs entre ces mêmes utilisateurs et aliments !
La table de liaison relie les utilisateurs aux aliments
Voici la commande pour relier tous les utilisateurs aux aliments qu’ils ont scannés :
SELECT

- FROM
  utilisateur
  JOIN utilisateur_aliment ON (utilisateur.id = utilisateur_aliment.utilisateur_id)
  JOIN aliment ON (aliment.id = utilisateur_aliment.aliment_id);

• Nous avons demandé à MySQL de sélectionner tous les utilisateurs.
• SELECT \* FROM `utilisateur`
• Auxquels nous voulons joindre la table utilisateur_aliment.
• JOIN `utilisateur_aliment`
• En précisant à MySQL de les relier en considérant que l’id de l’utilisateur est stocké en tant que utilisateur_id dans la table utilisateur_aliment.
• ON (utilisateur.id = utilisateur_aliment.utilisateur_id)
• À ce JOIN , on veut à nouveau lier de la donnée de la table aliment, soit un nouveau JOIN .
• JOIN `aliment`
• Pour ce faire, on précise à MySQL que l’id de l’aliment est stocké dans utilisateur_aliment en tant que aliment_id.
• ON (aliment.id = utilisateur_aliment.utilisateur_id)

---

# Modifier la structure d’un objet avec ALTER TABLE

1. Ajouter un champ
   ALTER TABLE aliment ADD vitamines_c FLOAT;
   • de modifier la structure d’une table avec ALTER TABLE;
   • quelle table modifier (ici “aliment”) ;
   • que la modification va faire ajouter une colonne avec ADD;
   • le nom de cette nouvelle colonne (ici “vitamines_c”) ;
   • enfin, le type de la colonne (ici, FLOAT, car les vitamines sont stockées usuellement en mg/100g, valeur décimale).

À noter que le type n’est parfois pas seul. On peut aussi (comme dans la partie 1), mentionner à MySQL qu’on rajoute une colonne qui est :
• une clé primaire (PRIMARY KEY) ;
• avec une valeur par défaut (DEFAULT valeur_par_défaut) ;
• non nulle (NOT NULL). Auquel cas il faudra préciser une valeur par défaut, MySQL créant la colonne avec la valeur “NULL” pour tous les objets existants dans cette table ;
• etc.

2. Supprimer un champ
   ALTER TABLE aliment DROP bio;
   • On modifie toujours la structure d’une table avec ALTER TABLE.
   • On lui signale à nouveau quelle table modifier (ici, “aliment”).
   • On lui indique que la modification va supprimer une colonne avec DROP.
   • On mentionne le nom de la colonne à supprimer (ici, “bio”).

Il faut néanmoins faire attention lorsqu’on utilise cette commande. Une fois la colonne supprimée, celle-ci est définitivement détruite et ne peut plus être récupérée. Vous perdez l’information pour tous les objets présents en base. À utiliser avec parcimonie !

3. Modifiez un champ des aliments
   ALTER TABLE aliment MODIFY calories FLOAT;
   • On modifie toujours la structure d’une table avec ALTER TABLE.
   • On lui signale à nouveau quelle table modifier (ici, “aliment”).
   • On lui indique que la modification va modifier le type d’une colonne avec MODIFY.
   • On mentionne le nom de la colonne à modifier (ici, “calories”).
   • On indique le nouveau type de la colonne (ici,FLOAT).

4. Renommez un champ des aliments
   ALTER TABLE aliment CHANGE sucre sucres FLOAT;
   • On modifie toujours la structure d’une table avecALTER TABLE.
   • On lui signale à nouveau quelle table modifier (ici, “aliment”).
   • On lui indique que la modification va modifier le nom d’une colonne avec CHANGE.
   • On mentionne le nom de la colonne à renommer, ainsi que son nouveau nom (ici, “sucre” devient “sucres”).
   • On indique le nouveau type de la colonne (ici, FLOAT).

C’est une spécificité propre à MySQL : pour renommer une colonne, il faut aussi indiquer son type. Ce qui n’est pas nécessaire si vous utilisez un autre SGBD. Cela permet de modifier à la fois le nom et le type d’une colonne dans une seule commande. Et ce, même si vous ne souhaitez pas le modifier (réutilisez alors le même type ).

# Ajouter une relation un à plusieurs

1. Ajouter une nouvelle table “famille”
   CREATE TABLE famille (

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

nom VARCHAR(100) NOT NULL

);

Maintenant que cette table est créée, insérons un objet dans celle-ci. Disons, l’objet qui va représenter les légumes.
INSERT INTO famille (`nom`) VALUES ('légumes'); 2. Ajouter la relation entre famille et aliment
Une des choses à déterminer lors de l’ajout d’une relation, c’est de savoir si :
• c’est une relation un à plusieurs ;
• ou une relation plusieurs à plusieurs.
Ici, un aliment peut avoir une seule famille, mais une famille peut être présente sur plusieurs aliments. Par exemple, une poire et une pomme font partie de la famille “fruits”.
Il s’agit donc d’une relation un à plusieurs.
Dans le cadre d’une telle relation, c’est l’objet qui se trouve du côté “plusieurs” de la relation qui va être modifié, ici les aliments. On va devoir y stocker l’id de l’objet “un” associé, par exemple “fruits”.
Ici, les aliments vont donc devoir être mis à jour pour y stocker une référence à leur famille. Cette référence, par convention, sera l’id de la famille.
Voici les étapes que l’on va suivre :

1. Ajout du champ famille_id sur les aliments.
2. Modification de ce champ pour signaler à MySQL que c’est une référence à la table famille.
3. Modification d’un objet pour y stocker une relation.
   C’est une clé primaire (un id), vous commencez à bien les connaître. Et pour ajouter un champ à un schéma, vous venez juste de le voir dans le chapitre précédent !
   Au cas où, voici la commande :
   ALTER TABLE aliment
   ADD famille_id INT NOT NULL;
   Ensuite, ça se complique. Il faut qu’on indique à MySQL que ce champ est une référence à une autre table, en lui précisant quel champ de cette autre table on référence.
   Pour modifier le champ famille_id, on utilise la commande :
   ALTER TABLE aliment

ADD FOREIGN KEY (famille_id) REFERENCES famille (id)

ON DELETE CASCADE;
• La première partie, vous la connaissez. On signale à MySQL qu’on souhaite modifier la table “aliment”, pour y ajouter une colonne (enfin, plutôt y ajouter une contrainte, dans ce cas précis).
• On dit à MySQL que la colonne “famille_id” est une clé étrangère (foreign key en anglais), soit une référence à une colonne d’une autre table (ici, avec la partie FOREIGN KEY (famille_id) ).
• On indique ensuite ce à quoi cette clé fait référence. Soit, dans notre cas, la colonne “id” de la table “famille” (soit la commande REFERENCES famille(id) ).
• Enfin, sûrement la partie la plus obscure pour vous, on indique à MySQL le comportement à adopter en cas de suppression de l’objet “unique” (ici, la “famille”).
Admettons que je vienne de créer ma famille “fruits”, et qu’elle soit reliée à mes objets “pomme” et “poire”.Que se passe-t-il si je supprime la famille “fruits” ?
Eh bien, MySQL a besoin de le savoir. Pour cela, on lui indique via la commande ON DELETE.
Cette dernière peut prendre une option parmi celles-ci :
• RESTRICT ou NO ACTION : MySQL va empêcher la suppression tant que “fruits” est référencé sur au moins un objet “aliment”.
• SET NULL: MySQL va autoriser la suppression de “fruits”, et remplacer “famille_id” sur “pomme” et “poire” par la valeur NULL.
• CASCADE: l’option la plus courante, mais la plus dangereuse. Ici, MySQL va supprimer “poire” et “pomme” en même temps que “fruits” (il va donc supprimer tous les objets reliés).

Voilà, MySQL sait que “famille_id” est une référence à l’id de la table famille !
Pareil ici, vous avez toutes les compétences en main pour le faire. Sauriez-vous par exemple ajouter la relation de l’objet “haricots verts” vers la famille “légumes” ?
UPDATE `aliment` SET `famille_id` = '1' WHERE `nom` = 'haricots verts';
N’oubliez pas, “légumes” ayant été ajouté en premier à la table “famille”, il a l’id numéro 1.
Pour vérifier que cela a bien fonctionné, vous pouvez sélectionner les haricots verts avec leur famille grâce à un JOIN.
SELECT

-

FROM

aliment

JOIN famille ON aliment.famille_id = famille.id

WHERE

aliment.nom = "haricots verts";
Grâce à cette commande, vous verrez apparaître un tableau récapitulatif, où la famille de “haricots verts” est bien “légumes”.

# Ajouter une relation plusieurs à plusieurs

1. Ajouter une nouvelle table “lieu”
   Les développeurs se sont de nouveau regroupés : il va falloir stocker les lieux de vente dans la BDD.
   Un lieu pouvant vendre plusieurs aliments, et ces mêmes aliments pouvant être vendus dans plusieurs lieux, vous allez devoir créer une relation plusieurs à plusieurs.
   Mais avant toute chose, il vous faut créer la nouvelle table des lieux de vente (que nous allons sobrement appeler “lieu”).
   Un lieu de vente, c’est :
   • un nom (exemple : Carrefour City) ;
   • un type (exemple : supermarché).
   CREATE TABLE lieu (

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

nom VARCHAR(100) NOT NULL,

type VARCHAR(100) NOT NULL

);
OK, une fois la table créée, insérons un lieu dans cette dernière, partons sur un simple Carrefour City
INSERT INTO `lieu` (`nom`, `type`) VALUES ('Carrefour City', 'supermarché');

2. Ajoutez la table de liaison
   Pour les relations plusieurs à plusieurs, on “triche”, via une table de liaison où on va stocker chaque relation, comme si c’était une double relation un à plusieurs.
   En fait, les aliments vont avoir des relations un à plusieurs avec la table de liaison. Les lieux, eux aussi, vont disposer de telles relations avec cette table. Et c’est en reliant ces deux tables via cette table de liaison que vous allez pouvoir ressortir les relations entre lieux et aliments.
   Pour ce faire, une table de liaison doit être créée. Par convention, elle doit toujours avoir cette forme :
   • Son nom doit regrouper les deux tables qu’elle relie, sous la forme : “table1_table2”.
   • Elle n’a que deux champs à stocker : “table1_id” et “table2_id”. Soit les id de chaque objet qu’elle relie.
   o Ces id sont donc des références aux id des autres tables.
   • Sa clé primaire n’est autre que l’association de ces deux id (association qui doit toujours être unique).
   CREATE TABLE aliment_lieu (

aliment_id INT NOT NULL,

lieu_id INT NOT NULL,

FOREIGN KEY (aliment_id) REFERENCES aliment (id) ON DELETE RESTRICT ON UPDATE CASCADE,

FOREIGN KEY (lieu_id) REFERENCES lieu (id) ON DELETE RESTRICT ON UPDATE CASCADE,

PRIMARY KEY (aliment_id, lieu_id)

);
• On crée une nouvelle table avec le nom des deux tables qu’elle relie (ici la table “aliment”, ainsi que la table “lieu”).
• On ajoute les références aux id de ces deux tables :
o “aliment_id”, qui est une référence aux id de la table “aliment” ;
o “lieu_id”, qui est une référence aux id de la table “lieu” ;
o on signale à MySQL comment mettre à jour la BDD en cas de suppression ou de mise à jour d’un objet de “aliment_lieu”.
• On explique à MySQL que l’id de cette table sera l’association entre les deux id précédents.

Admettons que le “blanc de dinde” présent dans notre BDD soit vendu chez “Carrefour City”. Il vous faudrait alors créer un objet dans “aliment_lieu”, avec l’id de “blanc de dinde” ainsi que l’id de “Carrefour City”.
Retrouvez ces id dans votre BDD et écrivez la commande SQL pour créer cette relation.
Sachant que 11 est l’id du “blanc de dinde”, 1 celui du “Carrefour City”, cela donne ça :
INSERT INTO `aliment_lieu` (`aliment_id`, `lieu_id`) VALUES ('11', '1');
Et voilà, le fait que le blanc de dinde soit vendu à Carrefour est stocké en base de données.
Enfin, pour retrouver cette relation, il vous faudra faire un double JOIN.
SELECT

-

FROM

aliment

JOIN aliment_lieu ON aliment.id = aliment_lieu.aliment_id

JOIN lieu ON lieu.id = aliment_lieu.lieu_id

WHERE

aliment.id = 11;
Ici, on joint la table aliment à la table lieu via la table de liaison, comme si c’était une simple relation un à plusieurs répétée.
En sortie, MySQL vous affichera bien le “blanc de dinde” avec son lieu de vente associé : “Carrefour City” !
