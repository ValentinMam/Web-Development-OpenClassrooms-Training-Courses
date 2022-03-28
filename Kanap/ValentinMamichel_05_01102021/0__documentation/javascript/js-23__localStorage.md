# Fonctionnement

Il convient de noter que les données stockées dans localStorage ou sessionStorage sont spécifiques au protocole de la page.

Les clés et les valeurs sont toujours des chaînes de caractères (à noter que, comme pour les objets, les clés entières seront automatiquement converties en chaînes de caractères).

Contrairement aux cookies, les données ne sont jamais transmises au serveur web distant (sauf manuellement). Le localStorage est une alternative à l’utilisation des sessions en PHP, il est plus rapide à utiliser puisqu’il ne nécessite pas de requête HTTP (mode hors ligne).

Ces données sont mémorisées à vie pour un même navigateur, elles peuvent être partagées entres les onglets et les pages du même site. L’espace de stockage maximum est de cinq mégaoctets par site. Les propriétés de stockage sont associées uniquement au domaine. Un domaine (tutovisuel.com par exemple) ne peut pas donc accéder au stockage d’un autre domaine (comme alsacréation.com).

Il existe une variante du stockage LocalStorage, appelée sessionStorage, qui maintient le stockage seulement lorsque que la fenêtre du navigateur est active (employé pour des raisons de sécurité).La propriété localStorage vous permet d'accéder à un objet local Storage. Le localStorage est similaire au sessionStorage. La seule différence : les données stockées dans le localStorage n'ont pas de délai d'expiration, alors que les données stockées dans le sessionStorage sont nettoyées quand la session navigateur prend fin — donc quand on ferme le navigateur.

# Utiliser le localStorage

Les opérations courantes sont le stockage, la récupération et la suppression des données ou l’obtention d’informations (nombre de paire, récupération des clés..).

La variante sessionStorage fonctionne exactement comme localStorage.

# Stockage

La syntaxe localStorage.setItem() permet de stocker une donnée

localStorage.setItem("prenom", "dany");
ou la syntaxe utilisant les crochets

localStorage["prenom"] = "dany";
ou encore la notation à point

localStorage.prenom = "dany";

# Récupération

La syntaxe localStorage.getItem() permet de récupérer une donnée

localStorage.getItem("prenom");
ou la syntaxe utilisant les crochets

localStorage["prenom"];
ou encore la notation à point

localStorage.prenom;

# Suppression

La syntaxe localStorage.removeItem() permet de supprimer une donnée

localStorage.removeItem("prenom");
Il est possible de vider tout stockage avec localStorage.clear()

localStorage.clear();

# Informations

La syntaxe localStorage.length() permet d’obtenir le nombre de paires clé/valeur

localStorage.length;
La syntaxe localStorage.key() permet d’obtenir le nom de la clé en fonction de l’index spécifié

localStorage.key(0); // renvoie la clé 'prenom'
Pour obtenir toutes les clés

for( let i = 0; i < localStorage.length; i++){
localStorage.key(i);
}

# Mémoriser des objets de données

La syntaxe localStorage.setItem() ne stocke que des valeurs sous forme de chaines de caractères.

Pour mémoriser des valeurs complexes, on utilisera le format JSON (JavaScript Objet Notation) et on sérialise (ou linéarise) l’objet avec la syntaxe JSON.stringify().Cette opération transforme l’objet en une chaîne de caractères.

Inversement, pour la lecture, la syntaxe JSON.parse() reforme l’objet à partir de la chaîne linéarisée.

# Stockage

let objJson = {
prenom : "dany",
age : 30,
taille : 170
}
let objLinea = JSON.stringify(objJson);
localStorage.setItem("obj",objLinea);

# Lecture

let objLinea = localStorage.getItem("obj");
let objJson = JSON.parse(objLinea);
alert(objJson.age) // renvoie 30
