# Commandes MySQL

- MySQL Workbench => Password
- MySQL Command Line Client => mysql -u root -p

1. BASE DE DONNEES (BDD)

- Voir BDD : SHOW DATABASES;
- Créer BDD : CREATE DATABASE nomdelabase;
- Utiliser BDD : USE nomdelabase;

2. TABLES

- Voir tables : SHOW TABLES ;
- Créer une table : CREATE TABLE nom de la table ( nom de champ 1 type de champ 1, nom de champ 2 type de champ 2, nom de champ 3 type de champ 3) ;

- Exemple : TABLE utilisateur (id, nom, prénom, email)

CREATE TABLE utilisateur (

id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,

nom VARCHAR(100),

prenom VARCHAR(100),

email VARCHAR(255) NOT NULL UNIQUE

);

• Id : PRIMARY KEY (option) Champ spécial obligatoire dans toutes les tables. Indique à MySQL que ce champ sera l'identifiant permettant d'identifier les objets.
• Id : INTEGER (type) Champ numérique sous forme de nombre entier.
• Id : NOT NULL (option) Ce champ ne peut pas être nul.
• Id : AUTO_INCREMENT (option) Ce champ sera créé par MySQL automatiquement, pas besoin de s'en soucier ! MySQL va utiliser l'id précédent et y ajouter +1 lors de l'ajout d'un nouvel objet.
• Nom : VARCHAR(100) (type) Champ sous forme de texte, limité à 100 caractères.
• Prénom : VARCHAR(100) (type) Champ sous forme de texte, limité à 100 caractères.
• Email : VARCHAR(255) (type) Champ sous forme de texte, limité à 255 caractères.
• Email : NOT NULL (option) Ce champ ne peut pas être nul.
• Email : UNIQUE (option) Ce champ ne peut pas avoir la même valeur en double.

Autres :
• FLOAT = signifie que le champ contiendra des chiffres décimaux ;
• BOOLEAN = type de champ très connu en informatique. Il ne peut stocker que les valeurs true (vrai) ou false (faux) ;
• DEFAULT = sert à indiquer une valeur par défaut. Utile pour ne pas avoir à spécifier une valeur tout le temps (DEFAULT false ou DEFAULT true)

3. COLUMNS

- Voir columns : SHOW COLUMNS FROM lenomdematable ;

La rédaction des valeurs selon leur type

- Noms de tables ou colonnes = backticks. ` (alt gr + è)
- Valeurs de type texte (TEXT ou VARCHAR) = entre guillemets. (Si guillemets dans le mot ajouter backslash \ = « aujourd\’hui »)
- Pour le reste (BOOLEAN, INTEGER ou FLOAT) = pas besoin de guillemets

# CREATE

Document = Collection.add() Relational = Table.insert()
Commande INSERT INTO

• Les paramètres de la table dans laquelle vous souhaitez ajouter l’objet (ici la table “utilisateur”) ;
• L’ordre des colonnes (ou caractéristiques de l’objet) ;
• Les valeurs correspondantes pour l’objet.

1. On indique en SQL qu’on souhaite ajouter un objet avec INSERT INTO.
2. On écrit ensuite le nom de la table dans laquelle on souhaite ajouter l’objet, ici “utilisateur”.
3. On écrit ensuite entre parenthèses la liste des colonnes que l’on va ajouter, ainsi que leur ordre.
4. On ajoute le mot clé SQL VALUES qui indique qu’on va ensuite déclarer les valeurs que l’on souhaite ajouter.
5. On écrit la liste des valeurs de l’objet qu’on souhaite ajouter, dans le même ordre que les colonnes citées en 3.

Exemple ajouter utilisateur / utilisateurs
INSERT INTO `utilisateur` (`nom`, `prenom`, `email`)

VALUES

('Durantay', 'Quentin', 'quentin@gmail.com');

INSERT INTO `utilisateur` (`nom`, `prenom`, `email`)

VALUES

('Doe', 'John', 'john@yahoo.fr'),

('Smith', 'Jane', 'jane@hotmail.com'),

('Dupont', 'Sebastien', 'sebastien@orange.fr'),

('Martin', 'Emilie', 'emilie@gmail.com');

# READ

Document = Collection.find() Relational = Table.select()
Commande SELECT
• SELECT, comme nous l’avons vu, indique à MySQL que nous souhaitons récupérer de la donnée ;
• _ indique que l’on souhaite récupérer toutes les colonnes (ou champs) présents dans cette table (ici : id, nom, prenom et email) ;
• FROM table permet à MySQL de comprendre depuis quelle table nous souhaitons récupérer de la donnée.
SELECT _ FROM utilisateur;
SELECT `nom`, `prenom`, `email` FROM utilisateur;

- Select All Documents in a Collection : SELECT \* FROM inventory
- Query using equality condition : SELECT \* FROM inventory WHERE status = "D"
- Query using query operators : SELECT \* FROM inventory WHERE status in ("A", "D")
- Specify AND Conditions : SELECT \* FROM inventory WHERE status = "A" AND qty < 30
- Specify OR Conditions : SELECT \* FROM inventory WHERE status = "A" OR qty < 30
- Query using AND as well as OR : SELECT \* FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")

# UPDATE

Document = Collection.modify() Relational = Table.update()
Commande UPDATE
UPDATE `utilisateur` SET `email` = 'quentind@gmail.com' WHERE `id` = '1';

• UPDATE table : Signifie à SQL que vous souhaitez mettre à jour de la donnée dans votre BDD. Vous indiquez aussi la table dans laquelle se trouve(nt) le ou les objets que vous souhaitez modifier.
• SET colonne = valeur : Sert à indiquer à SQL quelles sont là ou les colonnes à modifier, et quelles sont là ou les valeurs qu’elles doivent désormais prendre.
• WHERE colonne = valeur : filtre. Servent à restreindre la commande en cours à un ou des objets répondant à des conditions précises.

Il est tout à fait possible d’utiliser UPDATE sans filtres (sans WHERE ). Néanmoins, la commande modifierait tous les objets de notre table. C’est très rarement ce que l’on souhaite

# DELETE

Document = Collection.remove() Relational = Table.delete()
Commande DELETE
DELETE FROM `utilisateur` WHERE `id` = '2';

# CRUD FUNCTIONS

1. TableSelectFunction
   Table.select() and collection.find() use different methods for sorting results. Table.select() follows the SQL language naming and calls the sort method orderBy(). Collection.find() does not. Use the method sort() to sort the results returned by Collection.find(). Proximity with the SQL standard is considered more important than API uniformity here.
   The syntax for this function shown in EBNF is:
   TableSelectFunction
   ::= '.select(' ProjectedSearchExprStrList? ')' ( '.where(' SearchConditionStr ')' )?
   ( '.groupBy(' SearchExprStrList ')' )? ( '.having(' SearchConditionStr ')' )?
   ( '.orderBy(' SortExprStrList ')' )? ( '.limit(' NumberOfRows ')' ( '.offset(' NumberOfRows ')' )? )?
   ( '.lockExclusive(' LockContention ')' | '.lockShared(' LockContention ')' )?
   ( '.bind(' ( PlaceholderValues ) ')' )\*
   ( '.execute()' )?

2. TableInsertFunction
   The syntax for this function shown in EBNF is:
   TableInsertFunction
   ::= '.insert(' ( TableFields )? ')'
   ( '.values(' Literal (',' Literal)\* ')' )+
   ( '.execute()' )?

3. TableUpdateFunction
   The syntax for this function shown in EBNF is:
   TableUpdateFunction
   ::= '.update()'
   ( '.set(' TableField ',' ExprOrLiteral ')' )+ '.where(' SearchConditionStr ')'
   ( '.orderBy(' SortExprStrList ')' )? ( '.limit(' NumberOfRows ')' )?
   ( '.bind(' ( PlaceholderValues ) ')' )\*
   ( '.execute()' )?

4. TableDeleteFunction
   The syntax for this function shown in EBNF is:
   TableDeleteFunction
   ::= '.delete()' '.where(' SearchConditionStr ')'
   ( '.orderBy(' SortExprStrList ')' )? ( '.limit(' NumberOfRows ')' )?
   ( '.bind(' ( PlaceholderValues ) ')' )\*
   ( '.execute()' )?
