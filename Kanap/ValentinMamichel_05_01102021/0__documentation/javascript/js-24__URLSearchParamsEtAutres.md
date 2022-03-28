# URLSearchParams

L’interface URLSearchParams définit des méthodes utilitaires pour travailler avec la chaîne de requête (les paramètres GET) d’une URL.

Un objet implémentant URLSearchParams peut être directement utilisé dans une structure for...of, au lieu de entries() : for (var p of mySearchParams) ou son équivalent for (var p of mySearchParams.entries()).

1. Constructeur
   URLSearchParams() (en-US)
   Constructeur renvoyant un objet URLSearchParams.

2. Propriétés
   Cette interface n’hérite d’aucune propriété.

3. Méthodes
   Cette interface n’hérite d’aucune méthode.

URLSearchParams.append() (en-US)
Ajoute une paire clé / valeur spécifiée en tant que nouveau paramètre de recherche.

URLSearchParams.delete() (en-US)
Supprime le paramètre de recherche donné et sa valeur associée de la liste de tous les paramètres de recherche.

URLSearchParams.entries()
Retourne un iterator permettant de parcourir toutes les paires clé / valeur contenues dans cet objet.

URLSearchParams.get() (en-US)
Retourne la première valeur associée au paramètre de recherche donné.

URLSearchParams.getAll() (en-US)
Retourne toutes les valeurs associées au paramètre de recherche donné.

URLSearchParams.has() (en-US)
Retourne un Boolean indiquant si un tel paramètre de recherche existe.

URLSearchParams.keys() (en-US)
Retourne un iterator permettant de parcourir toutes les clés des paires clé / valeur contenues dans cet objet.

URLSearchParams.set() (en-US)
Définit la valeur associée à un paramètre de recherche donné à la valeur donnée. S’il y avait plusieurs valeurs, les autres sont supprimées.

URLSearchParams.sort() (en-US)
Trie toutes les paires clé / valeur, s’il y en a, par leurs clés.

URLSearchParams.toString() (en-US)
Retourne une chaîne contenant une chaîne de requête pouvant être utilisée dans une URL.

URLSearchParams.values() (en-US)
Retourne un iterator permettant de parcourir toutes les valeurs des paires clé / valeur contenues dans cet objet.

4. Exemple
   var paramsString = "q=URLUtils.searchParams&topic=api";
   var searchParams = new URLSearchParams(paramsString);

// Itère sur les paramètres de recherche.
for (let p of searchParams) {
console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"

# how to extract query string in javascript

// example url: https://mydomain.com/?fname=johnny&lname=depp

const queryString = window.location.search;

console.log(queryString);

// ?fname=johnny&lname=depp

const urlParams = new URLSearchParams(queryString);

const firstName = urlParams.get('fname');

console.log(firstName);

// johnny

const lastName = urlParams.get('lname');

console.log(lastName);

// depp

const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const value = parameters.get('key');

# JavaScript Window Location

The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

Window Location
The window.location object can be written without the window prefix.

Some examples:

window.location.href returns the href (URL) of the current page
window.location.hostname returns the domain name of the web host
window.location.pathname returns the path and filename of the current page
window.location.protocol returns the web protocol used (http: or https:)
window.location.assign() loads a new document
Window Location Href
The window.location.href property returns the URL of the current page.

Example
Display the href (URL) of the current page:

document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;
Result is:

Page location is https://www.w3schools.com/js/js_window_location.asp
Window Location Hostname
The window.location.hostname property returns the name of the internet host (of the current page).

Example
Display the name of the host:

document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;
Result is:

Page hostname is www.w3schools.com
ADVERTISEMENT

Window Location Pathname
The window.location.pathname property returns the pathname of the current page.

Example
Display the path name of the current URL:

document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;
Result is:

Page path is /js/js_window_location.asp
Window Location Protocol
The window.location.protocol property returns the web protocol of the page.

Example
Display the web protocol:

document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;
Result is:

Page protocol is https:
Window Location Port
The window.location.port property returns the number of the internet host port (of the current page).

Example
Display the name of the host:

document.getElementById("demo").innerHTML =
"Port number is " + window.location.port;
Result is:

Port number is
Most browsers will not display default port numbers (80 for http and 443 for https)

Window Location Assign
The window.location.assign() method loads a new document.

Example
Load a new document:

<html>
<head>
<script>
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
</script>
</head>
<body>

<input type="button" value="Load new document" onclick="newDoc()">

</body>
</html>
