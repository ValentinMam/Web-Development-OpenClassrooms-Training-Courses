La question de la structure de notre projet se pose très rapidement.
Cette structure conditionnera les modifications que nous ferons au fur et à mesure du développement du projet.

Angular nous donne certains conseils dans sa documentation officielle

Notamment concernant le choix de l'architecture
https://angular.io/guide/architecture
Et la structure des fichiers
https://angular.io/guide/file-structure

Lors de la création du projet avec Angular CLI la structure créée par défaut est la suivante

|-- e2e/
|-- src/
|-- app
|-- assets
|-- environnement
package.json
Nous allons suivre cette façon de procéder en imaginant les éléments qui pourraient constituer notre projet.

|-- e2e/
|-- src/
|-- app
|-- components
|-- directives
|-- mocks
|-- modules
|-- pipes
|-- services
|-- assets
|-- environnement
package.json

Comme nous le verrons dans le tutoriel concernant le lazy loading, un projet Angular fonctionnera sur la base de modules.
Cette partie importante sera construite de la façon suivante.

Le choix que nous avons fait est arbitraire, votre structure pourra prendre n'importe quelle autre forme.
Ce choix sera néanmoins suivi dans les tutoriels suivants.

- modules/general regroupera les éléments que l'on retrouve dans tous les projets.
- modules/application regroupera les éléments spécifiques à une application.

Pour créer un nouveau projet il suffira de copier le projet de base et d'adapter modules/application à nos besoins.

|-- app
|-- components
|-- directives
|-- mocks
|-- modules
|-- general (contient les éléments que l'on retrouve dans tous les types de projet)
|-- not-found
|-- home
|-- contact
|-- login
|-- signup
|-- application (contient les éléments spécifiques à notre projet)
|-- item01
|-- item02
|-- ....
|-- itemXX
|-- pipes
|-- services
|-- assets
|-- environnement
