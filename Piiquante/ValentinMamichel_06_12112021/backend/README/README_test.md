# TEST

## Tests SIGN UP

### Tests de mauvaise adresse mail et mot de passe invalide

test@gmail
AZERTY
Veuillez saisir une adresse électronique valide.

test@gmail.com
AZERTY
AZERTYazerty
AZERTY azerty
AZERTY azerty123
...
Mot de passe requis : 8 caractères minimun avec au moins 1 majuscule, 1 minuscule, 2 chiffres et sans espaces

1. test@gmail.com
   MOT DE PASSE

- OK => utilisateur crée et enregistré sur MongoDB avec un id, son mail et mot de passe crypté

### Test d'utilisateur non unique

test@gmail.com
AZERTYazerty987

- OK => l'adresse mail doit etre unique
 <!-- errors: {
    email: ValidatorError: Error, expected `email` to be unique. Value: `test@gmail.com`
        at validate (D:\OpenClassrooms\ValentinMamichel_06_12112021\backend\node_modules\mongoose\lib\schematype.js:1277:13)
        at D:\OpenClassrooms\ValentinMamichel_06_12112021\backend\node_modules\mongoose\lib\schematype.js:1252:24
        at processTicksAndRejections (internal/process/task_queues.js:95:5) {
      properties: [Object],
      kind: 'unique',
      path: 'email',
      value: 'test@gmail.com',
      reason: undefined,
      [Symbol(mongoose:validatorError)]: true
    }
  },
  _message: 'User validation failed'
} -->

## Tests LOG IN

### Test de mauvais mot de passe

test@gmail.com
AZERTYazerty1234
AZERTYazerty12345
AZERTYazerty123456

Trop de requetes en peu de temps, compte bloqué pendant 3 minutes au bout de 3 mauvaises tentatives

LE PROFIL UTILISATEUR PEUT ETRE SUPPRIME DEPUIS MONGODB / DB / COLLECTIONS

## Tests UTILISATEUR CONNECTE

1. Voir toutes les sauces => OK
2. Voir une sauce en particulier => OK
   [X]Liké
   [X]Disliké
   [X]Pas d'avis
3. Ajouter une sauce => OK // CREATE + MONGODB + BACKEND/images
4. Modifier une sauce => OK // UPDATE + MONGODB + BACKEND/images
5. Supprimer une sauce => OK // DELETE + MONGODB + BACKEND/images

L'UTILISATEUR NE PEUT PAS MODIFIER OU SUPPRIMER UNE SAUCE POSTEE PAR UN AUTRE UTILISATEUR
