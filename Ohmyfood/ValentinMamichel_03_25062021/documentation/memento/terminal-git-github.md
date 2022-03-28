1. Commandes terminal
   • pwd : permet d’afficher le répertoire courant ;
   • ls : permet d’afficher le contenu d’un répertoire ;
   • ls -a : l’option -a affiche également les fichiers et dossiers cachés,
   • ls -l : l’option -l modifie l’affichage pour rajouter de nombreuses informations ;
   • cd dossier : permet de se déplacer à l’intérieur d’un répertoire ;
   • mkdir dossier : permet de créer un dossier ;
   • touch nomFichier : permet de créer un fichier ;
   • mv source destination : permet de déplacer des éléments ;
   • : est un caractère qui peut être utilisé comme substitut pour n’importe quel caractère dans une recherche ;
   • cp source destination : permet de copier des éléments ;
   • cp -r : l’option -r permet de copier un répertoire ;
   • rm fichiers : permet de supprimer des fichiers ;
   • rm -r dossiers : l’option -r permet de supprimer des répertoires ;
   • man commande : permet d’afficher le manuel d’une commande (q pour sortir);
   • cat/less/more nomFichier : permet d’afficher le contenu d’un fichier ;
   • < : permet de rediriger le résultat d’une commande vers un fichier ;
   • grep motif chemin : permet de faire des recherches dans des fichiers.

Manuel GIT : https://git-scm.com/doc

Avec Git, vous préparez votre code. Avec GitHub, vous stockez votre code.
Git est un gestionnaire de versions. Vous l’utiliserez pour créer un dépôt local et gérer les versions de vos fichiers.
GitHub est un service en ligne qui va héberger votre dépôt. Dans ce cas, on parle de dépôt distant puisqu’il n’est pas stocké sur votre machine.
Un dépôt local est un entrepôt virtuel de votre projet. Il vous permet d'enregistrer les versions de votre code et d'y accéder au besoin. On réalise une version, que l'on va petit à petit améliorer. Ces versions sont stockées au fur et à mesure dans le dépôt local.
• Le Working directory correspond au dossier du projet sur votre ordinateur.
• Le Stage ou index est un intermédiaire entre le working directory et le repository. Elle représente tous les fichiers modifiés que vous souhaitez voir apparaître dans votre prochaine version de code.
• Le Repository c’est dans cette zone que nouvelles versions d’un projet sont stockées.

Le dépôt distant est un peu différent. Il permet de stocker les différentes versions de votre code afin de garder un historique délocalisé, c'est-à-dire un historique hébergé sur Internet ou sur un réseau. Vous pouvez avoir plusieurs dépôts distants avec des droits différents (lecture seule, écriture, etc.).

Votre tableau de bord
• L'interface repository, l’emplacement où vous pourrez créer et retrouver vos dépôts existants. Pour créer un projet, il suffit de cliquer sur “Start a project”.
• Votre profil, vos informations, mais aussi voir le total de vos contributions sur les différents projets.
• L'onglet Pull requests permet de réaliser des demandes de pull. Les demandes de pull, ou extractions, vous permettent d'informer les autres des modifications que vous avez appliquées à une branche d'un repository sur GitHub.
• La fonctionnalité Explore
• readme est un fichier qui indique les informations clés de votre projet : description, environnement à utiliser, dépendances possibles et droits d’auteurs.
• gitignore est un fichier qui permet d’ignorer certains fichiers de votre projet Git

INSTALLER GIT
• GitHub pour Windows : https://windows.github.com
• GitHub pour Mac : https://mac.github.com
• Git pour toutes les plateformes : https://git-scm.com
• training.github.com

CONFIGURATION DES OUTILS
Configurer les informations de l'utilisateur pour tous les dépôts locaux
• $ git config --global user.name "[nom]"
• Définit le nom que vous voulez associer à toutes vos opérations de commit
• $ git config --global user.email "[adresse email]"
• Définit l'email que vous voulez associer à toutes vos opérations de commit
• $ git config --global color.ui auto
• Active la colorisation de la sortie en ligne de commande
Configurez les couleurs
Je vous recommande d’activer les couleurs afin d’améliorer la lisibilité des différentes branches. Pour cela, passez ces trois lignes dans Git Bash :
$ git config --global color.diff auto
$ git config --global color.status auto
$ git config --global color.branch auto

Configurez l’éditeur
Par défaut, Git utilise Vim comme éditeur et Vimdiff comme outil de merge. Vous pouvez les modifier en utilisant :
$ git config --global core.editor notepad++
$ git config --global merge.tool vimdiff
L’outil de merge permet de fusionner deux parties distinctes d’un projet.

CRÉER DES DÉPÔTS
Démarrer un nouveau dépôt ou en obtenir un depuis une URL existante
• $ git init [nom-du-projet]
• Crée un dépôt local à partir du nom spécifié
• $ git clone [url]
• Télécharge un projet et tout son historique de versions

Créer un dépôt local vide pour accueillir un nouveau projet : la procédure est expliquée ci-dessous ;
Cloner un dépôt distant, c’est-à-dire rapatrier l’historique d’un dépôt distant en local. Nous aborderons cette méthode dans la deuxième partie du cours.

EFFECTUER DES CHANGEMENTS
Consulter les modifications et effectuer une opération de commit
• $ git status
• Liste tous les nouveaux fichiers et les fichiers modifiés à commiter
• $ git add [fichier]
• Ajoute un instantané du fichier, en préparation pour le suivi de version
• $ git reset [fichier]
• Enlève le fichier de l'index, mais conserve son contenu
• $ git diff
• Montre les modifications de fichier qui ne sont pas encore indexées
• $ git diff --staged
• Montre les différences de fichier entre la version indexée et dernière version
• $ git commit -m "[message descriptif]"
• Enregistre fichiers de façon permanente dans l'historique des versions

GROUPER DES CHANGEMENTS
Nommer une série de commits et combiner les résultats de travaux terminés
• $ git branch
• Liste toutes les branches locales dans le dépôt courant
• $ git branch [nom-de-branche]
• Crée une nouvelle branche
• $ git checkout [nom-de-branche]
• Bascule sur la branche spécifiée et met à jour le répertoire de travail
• $ git merge [nom-de-branche]
• Combine dans la branche courante l'historique de la branche spécifiée
• $ git branch -d [nom-de-branche]
• Supprime la branche spécifiée

CHANGEMENTS AU NIVEAU DES NOMS DE FICHIERS
Déplacer et supprimer des fichiers sous suivi de version
• $ git rm --cached [fichier]
• Supprime le fichier du système de suivi de version mais le préserve localement
• $ git rm [fichier]
• Supprime le fichier du répertoire de travail et met à jour l'index
• $ git mv [fichier-nom] [fichier-nouveau-nom]
• Renomme le fichier et prépare le changement pour un commit

EXCLURE DU SUIVI DE VERSION
Exclure des fichiers et chemins temporaires
• _.log build/ temp-_
• Un fichier texte nommé gitignore permet d'éviter le suivi de version accidentel pour les fichiers et chemins correspondant aux patterns spécifiés
• $ git ls-files --other --ignored --exclude-standard
• Liste tous les fichiers exclus du suivi de version dans ce projet
ENREGISTRER FRAGMENTS
Mettre en suspens des modifications non finies pour y revenir plus tard
• $ git stash
• Enregistre de manière temporaire tous les fichiers sous suivi de version
• $ git stash list
• Liste toutes les remises
• $ git stash pop
• Applique une remise et la supprime immédiatement
• $ git stash drop
• Supprime la remise la plus récente

VÉRIFIER L'HISTORIQUE DES VERSIONS
Suivre et inspecter l'évolution des fichiers du projet
• $ git log
• Montre l'historique des versions pour la branche courante
• $ git log --follow [fichier]
• Montre l'historique des versions, y compris les actions de renommage
• $ git diff [premiere-branche] ...[deuxieme-branche]
• Montre les différences de contenu entre deux branches
• $ git show [commit]
• Montre les modifications de métadonnées et de contenu dans le commit
git log
Par défaut, git log énumère en ordre chronologique inversé les commits réalisés. Cela signifie que les commits les plus récents apparaissent en premier.
git reflog
git reflog va loguer les commits ainsi que toutes les autres actions que vous avez pu faire en local : vos modifications de messages, vos merges, vos resets…
git blame monFichier.php
La commande git blame permet d’examiner le contenu d’un fichier ligne par ligne et de déterminer la date à laquelle chaque ligne a été modifiée, et le nom de l’auteur des modifications .

REFAIRE DES COMMITS
Corriger des erreurs et gérer l'historique des corrections
• $ git reset [cofmmit]
• Annule tous les commits après `[commit]`, en conservant les modifs locales
• $ git reset --hard [commit]
• Supprime tout l'historique et les modifications effectuées après le commit
Il est possible d'annuler son commit public avec la commande git revert.
Gardez à l'esprit que git revert sert à annuler des changements commités, tandis que git reset HEAD permet d'annuler des changements non commités. Toutefois, attention, git revert peut écraser vos fichiers dans votre répertoire de travail, il vous sera donc demandé de commiter vos modifications ou de les remiser.
git revert HEAD^

SYNCHRONISER CHANGEMENTS
Référencer un dépôt distant et synchroniser l'historique de versions
• $ git fetch [nom-de-depot]
• Récupère tout l'historique du dépôt nommé
• $ git merge [nom-de-depot]/[branche]
• Fusionne la branche du dépôt dans la branche locale courante
• $ git push [alias] [branche]
• Envoie tous les commits de la branche locale vers GitHub
• $ git pull
• Récupère tout l'historique du dépôt nommé et incorpore les modifications
