# Validez les données saisies par vos utilisateurs

1. Ne pas faire confiance aux utilisateurs

Ils ne vont pas toujours entrer les données que vous attendez d'eux. Or, cela peut se révéler désastreux pour votre site web, et ce, de plusieurs façons : perdre cet utilisateur, l'utilisateur pourrait attaquer votre service web en entrant des données malveillantes, l'utilisateur pourrait faire planter votre application. Il faudra toujours avoir une validation poussée des données utilisateurs sur le service web.

2. Validation avec évènement

Afin de valider les données utilisateurs, vous pouvez vous aider des événements du DOM. Ainsi, vous pouvez écouter l’événement onChange pour vérifier la donnée, dès que l'utilisateur a fini de l'éditer. Ou bien vous pouvez écouter l’événement onInput pour vérifier la donnée à chaque nouveau caractère.
Par exemple, vous pouvez vérifier que ce qui est saisi commence par Hello avec le code suivant :
myInput.addEventListener('input', function(e) {
var value = e.target.value;
if (value.startsWith('Hello ')) {
isValid = true;
} else {
isValid = false;
}
});

3. Validation avec regex

Il s'agit d'un format spécial qui permet de matcher du texte, c'est-à-dire de vérifier qu'un texte corresponde à une description que l'on a définie. Ainsi, si l'on veut savoir si notre texte commence par la lettre e et est suivi d'au moins 3 chiffres, on écrira la regex suivante :  
function isValid(value) {
return /^e[0-9]{3,}$/.test(value);
}

4. Validation avec contraintes HTML5

Depuis HTML 5, il est possible d'ajouter de la validation directement dans le code HTML. Pour cela, différents attributs sont ajoutés et permettent d'empêcher la soumission d'un formulaire si toutes les validations ne sont pas respectées.
• L'attribut type pour les inputs
Pour valider les informations saisies dans une balise input , il est possible d'utiliser l'attribut type . L'attribut type de la balise input ne prend pas seulement comme valeurs text et password . Cela peut aussi être email , tel , URL , date et bien d'autres.
Lorsque vous ajoutez un élément input avec un attribut type="email" , le navigateur empêchera la soumission du formulaire si ce n'est pas une adresse email correcte.
• Les attributs de validation simples
En fonction du type de l' input , vous pouvez utiliser différents attributs pour perfectionner votre validation :
min / max : fonctionne avec des champs de type nombre ou date. Cela permet de définir une valeur minimum et une valeur maximum autorisées ;
required : fonctionne avec à peu près tous les types de champs. Cela rend obligatoire le remplissage de ce champ ;
step : fonctionne avec les dates ou les nombres. Cela permet de définir une valeur d'incrément lorsque vous changez la valeur du champ via les flèches ;
minlength / maxlength : fonctionne avec les champs textuels ( text , url , tel , email ...). Cela permet de définir un nombre de caractères minimum et maximum autorisé.
• Les patterns
Nous avons vu qu'il était possible d'avoir une validation complexe grâce aux Regex en JavaScript. Eh bien c'est aussi possible directement en HTML5 avec l'attribut pattern . Il suffit de définir une Regex dans cet attribut, et vous obligez la valeur du champ correspondant à la respecter.
<input type="text" pattern="[0-9]{,3}" />
Il empêchera un utilisateur d'entrer autre chose que des chiffres, et limitera leur nombre à 3 chiffres.
Nous souhaitons dans un premier temps valider le champ Code du formulaire. A chaque lettre saisie dans le champ ayant pour ID code nous voulons vérifier que la valeur du champ commence bien par CODE- grâce à une Regex que voici : /^CODE-/. Si la valeur commence bien par CODE- alors nous affichons dans l'élément ayant pour ID code-validation : Code valide, sinon nous affichons dans cet élément Code invalide.
Maintenant que nous savons si notre code est valide ou non, nous voudrions griser (grâce à l'attribut disabled) le bouton de soumission (L'input de type submit ayant pour ID submit-btn) quand le code est invalide, et le dégriser quand le code est valide. Cela signifie que nous allons devoir ajouter un attribut disabled="true" au bouton de soumission quand le code est invalide. Et supprimer cet attribut disabled quand le code est valide (Rappelez-vous du cours sur la modification du DOM pour définir et supprimer des attributs).
Finalement, nous avons un champ Email et nous voudrions le rendre obligatoire et obliger l'utilisateur à entrer une adresse email valide. Il faudra aussi empêcher le formulaire de se soumettre s'il n'est pas valide.
Mais nous voudrions faire tout ça uniquement avec le HTML5, sans utiliser de code JavaScript.
Vous pouvez changer le type du champ email plutôt que d'utiliser une Regex via pattern

function getCodeValidation() {
return document.getElementById("code-validation");
}

function disableSubmit(disabled) {
if (disabled) {
document
.getElementById("submit-btn")
.setAttribute("disabled", true);
} else {
document
.getElementById("submit-btn")
.removeAttribute("disabled");
}
}

document
.getElementById("code")
.addEventListener("input", function(e) {
if (/^CODE-/.test(e.target.value)) {
getCodeValidation().innerText = "Code valide";
disableSubmit(false);
} else {
getCodeValidation().innerText = "Code invalide";
disableSubmit(true);
}
});

<html>
  <head>
    <link rel="stylesheet" type="text/css" href="base.css">
  </head>
  <body>  
    <form id="form-to-check">
      <p>
        <label>Code : <input type="text" name="code" id="code" /></label><br />
        <div class="result" id="code-validation"></div>
      </p>
      <p>
        <label>Email : <input type="email" name="email" required /></label>
      </p>
      <p>
         <input type="submit" value="Vérifier" id="submit-btn" />
      </p>
    </form>
    
    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
