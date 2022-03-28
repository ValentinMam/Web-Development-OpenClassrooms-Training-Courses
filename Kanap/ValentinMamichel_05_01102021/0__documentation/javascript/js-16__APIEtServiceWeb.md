# Comprenez ce que sont des API et un service web

Un service web est un programme s'exécutant sur un serveur accessible depuis Internet et fournissant un service. Le but d’un service web est donc de fournir un service à celui qui le demande. Et pour ce faire, il met à disposition une API.
Une API, ou Application Programming Interface, est une interface de communication. Il en existe différents types, mais celle qui nous intéresse est celle qui permet de communiquer avec les services web.L’API correspond à l’ensemble des demandes que l’on peut faire à un service web. Ces demandes sont appelées des requêtes.

1. Les requêtes
   Les requêtes sont des données qui respectent le protocole de communication et qui sont envoyées au serveur.
2. Les protocoles
   Nous avons donc un protocole pour l'envoi de mail (SMTP), la réception de mail (IMAP), les requêtes liées à des ressources web (HTTP), aux transferts de fichiers (FTP), etc.
   Le protocole qui va nous intéresser est le protocole nous permettant de communiquer avec l’API d’un site Internet : le protocole HTTP. Grâce à lui, nous allons pouvoir récupérer et sauvegarder des données sur un service web, ce qui nous permettra de dynamiser le contenu de nos pages web.
   HTTP signifie HyperText Transfer Protocol permet de communiquer avec un site Internet. Il va permettre de charger des pages HTML, des styles CSS, des polices de caractères, des images, etc. Mais ce n'est pas tout, le protocole HTTP nous permet aussi d'envoyer des formulaires et de récupérer et d'envoyer toutes sortes de données depuis ou vers un serveur implémentant ce protocole grâce à son API !
   Plusieurs informations se trouvent dans une requête HTTP :
   • La méthode. Il s’agit de l’action que l’on souhaite faire :
   GET : permet de récupérer des ressources, (temps actuel sur un service de météo…)
   POST : permet de créer ou modifier une ressource (nouvel utilisateur…)
   PUT : permet de modifier une ressource (nom de l'utilisateur…)
   DELETE : Permet de supprimer une ressource (commentaire…)
   • L’URL. C’est l’adresse sur le service web que vous souhaitez atteindre. Un peu comme un identifiant unique afin que le web service comprenne ce que vous voulez
   • Les données. Lorsqu’on fait une requête pour enregistrer des données (par exemple un formulaire) il faut pouvoir envoyer ces données au service web.
   Une fois votre requête envoyée et traitée par le service web, celui-ci va vous répondre avec, entre autres, les informations suivantes :
   • Les données. Les données que vous avez demandées : une page HTML, etc…
   • Le code HTTP. Il s’agit d’un code numérique qui vous indique comment s’est déroulée la requête :
   200 : indique que tout s’est bien passé
   400 : indique que votre requête n’est pas conforme à ce qui est attendu
   401 : indique que vous devez être authentifié pour faire cette requête
   403 : indique que vous êtes bien authentifié mais que vous n’êtes pas autorisé à faire cette requête
   404 : indique que la ressource demandée n’existe pas
   500 : indique une erreur avec le service web
   Il s'agit surtout d'une convention. Rien n'oblige un service web à créer une ressource lors d'une requête POST par exemple, mais c'est généralement le cas.
