# Start BACK END

1. npm install

2. npm run start (script) OR nodemon server

# Start FRONT END

Front End repository => npm run start OR "Go live" on VSCODE (Live Server plugin)

# Packages utilisés pour le projet

npm documentation : https://www.npmjs.com/

- "bcrypt": "^5.0.1",
  hacher les mots de passe.
- "body-parser": "^1.19.1",
  analyse du body
- "dotenv": "^10.0.0",
  module sans dépendance qui charge les variables d'environnement d'un fichier .env dans process.env.
- "email-validator": "^2.0.4",
  valider une adresse e-mail
- "express": "^4.17.1",
  framework pour node (pour créer des applications rapidement)
- "express-mongo-sanitize": "^2.1.0",
  nettoyer les données fournies par l'utilisateur pour empêcher l'injection d'opérateur MongoDB.
- "express-rate-limit": "^5.5.1",
  limiter les demandes répétées aux API et/ou certains URI
- "helmet": "^4.6.0",
  sécuriser vos applications Express en définissant divers en-têtes HTTP.
- "jsonwebtoken": "^8.5.1",
  permet un échange sécurisé de donnée entre deux parties.
- "mongoose": "^6.1.1",
  Mongoose prend en charge à la fois les promise et les callback.
- "mongoose-unique-validator": "^3.0.0",
  ajouter une validation de pré-enregistrement pour les champs uniques dans un schéma Mongoose.
- "multer": "^1.4.4",
  gestion des données, principalement utilisé pour le téléchargement de fichiers.
- "nodemon": "^2.0.15",
  aide à développer des applications basées sur node.js en redémarrant automatiquement l'application lorsque des modifications de fichier dans le répertoire sont détectées.
- "password-validator": "^5.2.1",
  permet de configurer un schéma de validation de mot de passe (8 caractères min...).
- "path": "^0.12.7",
  fournit des utilitaires pour travailler avec les chemins de fichiers et de répertoires.
- "save": "^2.4.0"
  abstraction de persistance basée sur CRUD pour stocker des objets dans n'importe quelles base de données.
