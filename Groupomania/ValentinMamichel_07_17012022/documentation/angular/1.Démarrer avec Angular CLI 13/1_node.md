Angular, React et Vuejs ont besoin tous trois de Node.js.

Le site officiel c'est ici https://nodejs.org/fr/

Node.js est un environnement d’exécution JavaScript construit sur le moteur JavaScript V8 de Chrome.

Son inventeur Ryan Lienhart Dahl l'a créé le 27 mai 2009.
Il avait une idée précise derrière la tête : la simplicité et la rapidité d'exécution de programmes écrits en javascript.

- Node signifie noeud
- JS signifie javascript

Node.js est ainsi le point central qui va permettre d'exécuter des programmes écrits en javascript côté serveur.

Node.js utilise un outil npm (Node Package Manager)

- Npm simplifie la vie du développeur en permettant de publier et de partager des librairies Node.js.
- Npm permet notamment de simplifier l'installation, la mise à jour ou la désinstallation de ces librairies.

On pourra parler de librairies, de paquets ou de dépendances (en anglais packages ou dependencies).

Comment l'installer ?

Sur le site officiel le téléchargement est accessible à l'adresse https://nodejs.org/fr/download/

Nous allons utiliser la version LTS (Long Term Support ou Support à long terme).
LTS signifie que l'éditeur nous garantit en général une période de maintenance d'au moins deux ans,

Node.js version 16.13.1 LTS
npm (node package manager) version 8.1.3
Il s'agit d'une installation classique.

Choisissez votre système d'exploitation.
Téléchargez le programme et éxécutez le.
Une fois l'installation effectuée on peut vérifier que Node.js est installé sur notre poste de travail.

# Vérification de la version de Node.js et de npm

- node --version
- npm --version

- node -v
- npm -v

# Mise à jour de npm

npm install npm -g

# Vérification de la mise à jour de npm

npm -v

# Tester Node.js

Créez un fichier index.js

const { createServer } = require('http');

// Création du serveur
const server = createServer((request, response) => {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World\n');
});

server.listen(3000, () => console.log(`Adresse du serveur : http://localhost:3000`));

# Exécution du programme javascript

node index.js

# Vérification dans le navigateur

http://localhost:3000
