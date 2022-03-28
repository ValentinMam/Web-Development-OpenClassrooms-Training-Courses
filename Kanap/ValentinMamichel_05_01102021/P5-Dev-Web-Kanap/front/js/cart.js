// scripts of cart.html

// Initialisation du local storage
let productLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(productLocalStorage);
// Sécuriser le formulaire
const controlPrenomNomVille = (value) => {
  return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);
};

const controlAdresse = (value) => {
  return /^[A-Za-z0-9\s]{3,100}$/.test(value);
};

const controlEmail = (value) => {
  return /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(value);
};

// Gestion du panier
function getCart() {
  // Si le panier est vide (strictement égal à 0)
  if (productLocalStorage === null || productLocalStorage == 0) {
    let productEmptyCart = document.querySelector("#cart__items");
    productEmptyCart.innerHTML =
      "est actuellement vide... <br> Vous n'avez pas encore trouvé le Kanap de vos rêves ? ";
    productEmptyCart.style.textAlign = "center";
    productEmptyCart.style.fontWeight = "bold";
    productEmptyCart.style.fontSize = "2em";
  } // Si le panier n'est pas vide
  else {
    for (let produit in productLocalStorage) {
      // Insertion de l'élément "article"
      let productArticle = document.createElement("article");
      document.querySelector("#cart__items").appendChild(productArticle);
      productArticle.className = "cart__item";
      productArticle.setAttribute(
        "data-id",
        productLocalStorage[produit].idProduit
      );

      // insertion de l'élément "div" : qui contient l'élément "img"
      let productDivImg = document.createElement("div");
      productArticle.appendChild(productDivImg);
      productDivImg.className = "cart__item__img";

      // Insertion de l'élément "img" : image du produit
      let productImg = document.createElement("img");
      productDivImg.appendChild(productImg);
      productImg.src = productLocalStorage[produit].imgProduit;
      productImg.alt = productLocalStorage[produit].altImgProduit;

      // Insertion de l'élément "div"
      let productItemContent = document.createElement("div");
      productArticle.appendChild(productItemContent);
      productItemContent.className = "cart__item__content";

      // Insertion de l'élément "div" : qui contient les éléments "h2" + "p" + "p"
      let productItemContentTitlePrice = document.createElement("div");
      productItemContent.appendChild(productItemContentTitlePrice);
      productItemContentTitlePrice.className =
        "cart__item__content__titlePrice";

      // Insertion de l'élement "h2" : nom du produit
      let productTitle = document.createElement("h2");
      productItemContentTitlePrice.appendChild(productTitle);
      productTitle.innerHTML = productLocalStorage[produit].nomProduit;

      // Insertion de l'élément "p" : couleur du produit
      let productColor = document.createElement("p");
      productTitle.appendChild(productColor);
      productColor.innerHTML = productLocalStorage[produit].couleurProduit;
      productColor.style.fontSize = "1em";

      // Insertion de l'élément "p" : prix du produit
      let productPrice = document.createElement("p");
      productItemContentTitlePrice.appendChild(productPrice);
      productPrice.innerHTML = productLocalStorage[produit].prixProduit + " €";

      // Insertion de l'élément "div"
      let productItemContentSettings = document.createElement("div");
      productItemContent.appendChild(productItemContentSettings);
      productItemContentSettings.className = "cart__item__content__settings";

      // Insertion de l'élément "div"
      let productItemContentSettingsQuantity = document.createElement("div");
      productItemContentSettings.appendChild(
        productItemContentSettingsQuantity
      );
      productItemContentSettingsQuantity.className =
        "cart__item__content__settings__quantity";

      // Insertion de l'élément "p"
      let productQte = document.createElement("p");
      productItemContentSettingsQuantity.appendChild(productQte);
      productQte.innerHTML = "Quantité  : ";

      // Insertion de l'élément "input" : quantité de produit
      let productQuantity = document.createElement("input");
      productItemContentSettingsQuantity.appendChild(productQuantity);
      productQuantity.value = productLocalStorage[produit].quantiteProduit;
      productQuantity.className = "itemQuantity";
      productQuantity.setAttribute("type", "number");
      productQuantity.setAttribute("name", "itemQuantity");
      productQuantity.setAttribute("min", "1");
      productQuantity.setAttribute("max", "100");

      // Insertion de l'élément "div"
      let productItemContentSettingsDelete = document.createElement("div");
      productItemContentSettings.appendChild(productItemContentSettingsDelete);
      productItemContentSettingsDelete.className =
        "cart__item__content__settings__delete";

      // Insertion de l'élément "p" : supprimer l'integralité d'une référence produit
      let productSupprimer = document.createElement("p");
      productItemContentSettingsDelete.appendChild(productSupprimer);
      productSupprimer.className = "deleteItem";
      productSupprimer.innerHTML = "Tout supprimer";
    }
  }
}
getCart();

function getTotal() {
  // Récupération du total des quantités
  var articleQuantity = document.getElementsByClassName("itemQuantity");
  var articleLength = articleQuantity.length,
    totalQuantity = 0;

  for (var i = 0; i < articleLength; ++i) {
    totalQuantity += articleQuantity[i].valueAsNumber;
  }

  let productTotalQuantity = document.getElementById("totalQuantity");
  productTotalQuantity.innerHTML = totalQuantity;
  console.log(totalQuantity);

  // Récupération du prix total
  totalPrice = 0;

  for (var i = 0; i < articleLength; ++i) {
    totalPrice +=
      articleQuantity[i].valueAsNumber * productLocalStorage[i].prixProduit;
  }

  let productTotalPrice = document.getElementById("totalPrice");
  productTotalPrice.innerHTML = totalPrice;
  console.log(totalPrice);
}
getTotal();

// Suppression d'un produit
function deleteProduct() {
  let deleteButton = document.querySelectorAll(".deleteItem");

  for (let j = 0; j < deleteButton.length; j++) {
    deleteButton[j].addEventListener("click", (event) => {
      event.preventDefault();

      //Selection de l'element à supprimer en fonction de son id mais aussi de sa couleur
      let idDelete = productLocalStorage[j].idProduit;
      let colorDelete = productLocalStorage[j].couleurProduit;

      productLocalStorage = productLocalStorage.filter(
        (el) => el.idProduit !== idDelete || el.couleurProduit !== colorDelete
      );

      localStorage.setItem("produit", JSON.stringify(productLocalStorage));

      //Alerte produit supprimé et refresh
      alert("Ce produit a bien été supprimé du panier");
      location.reload();
    });
  }
}
deleteProduct();

// Modification d'une quantité de produit
function modifyQuantity() {
  let qttModif = document.querySelectorAll(".itemQuantity");

  for (let k = 0; k < qttModif.length; k++) {
    qttModif[k].addEventListener("change", (event) => {
      event.preventDefault();

      //Selection de l'element à modifier en fonction de son id mais aussi de sa couleur
      let quantityModif = productLocalStorage[k].quantiteProduit;
      let qttModifValue = qttModif[k].valueAsNumber;

      const resultFind = productLocalStorage.find(
        (el) => el.qttModifValue !== quantityModif
      );

      resultFind.quantiteProduit = qttModifValue;
      productLocalStorage[k].quantiteProduit = resultFind.quantiteProduit;

      localStorage.setItem("produit", JSON.stringify(productLocalStorage));

      // refresh
      location.reload();
    });
  }
}
modifyQuantity();

form();

function form() {
  if (productLocalStorage === null || productLocalStorage == 0) {
    alert("votre panier est vide nous ne pouvons pas finaliser la commande ");
  } else {
    // Bouton "commander" pour soumettre le formulaire avec evenement au clic
    const orderButton = document.querySelector("#order");
    orderButton.addEventListener("click", (valid) => {
      valid.preventDefault();

      const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value,
      };
      const firstNameValid = contact.firstName;
      const lastNameValid = contact.lastName;
      const cityValid = contact.city;
      const addressValid = contact.address;
      const emailValid = contact.email;

      // Insertion du texte de bonne ou mauvaise saisie des informations
      const checkFirstName = document.querySelector("#firstNameErrorMsg");
      const checklastName = document.querySelector("#lastNameErrorMsg");
      const checkCity = document.querySelector("#cityErrorMsg");
      const checkAddress = document.querySelector("#addressErrorMsg");
      const checkEmail = document.querySelector("#emailErrorMsg");

      if (controlPrenomNomVille(firstNameValid)) {
        checkFirstName.innerHTML = "Tout est OK !";
      } else {
        checkFirstName.innerHTML = "Merci de vérifier votre saisie";
      }
      if (controlPrenomNomVille(lastNameValid)) {
        checklastName.innerHTML = "Tout est OK !";
      } else {
        checklastName.innerHTML = "Merci de vérifier votre saisie";
      }
      if (controlPrenomNomVille(cityValid)) {
        checkCity.innerHTML = "Tout est OK !";
      } else {
        checkCity.innerHTML = "Merci de vérifier votre saisie";
      }
      if (controlAdresse(addressValid)) {
        checkAddress.innerHTML = "Tout est OK !";
      } else {
        checkAddress.innerHTML = "Merci de vérifier votre saisie";
      }
      if (controlEmail(emailValid)) {
        checkEmail.innerHTML = "Tout est OK !";
      } else {
        checkEmail.innerHTML = "Merci de vérifier votre saisie";
      }
      let products = [];
      for (i = 0; i < products.length; i++) {
        product.push(products[i]._id);
      }
      const envoiFormulaire = {
        contact,
        products,
      };

      //Envoi du formulaire dans le localStorage uniquement si les données sont correctes
      if (
        controlPrenomNomVille(firstNameValid) &
        controlPrenomNomVille(lastNameValid) &
        controlPrenomNomVille(cityValid) &
        controlAdresse(addressValid) &
        controlEmail(emailValid)
      ) {
        localStorage.setItem("contact", JSON.stringify(contact));

        return fetch("http://localhost:3000/api/products/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(envoiFormulaire),
        })
          .then((response) => response.json())
          .then((order) => {
            localStorage.setItem("orderId", order.orderId);
            window.location.href =
              "confirmation.html" + "?" + "name" + "=" + order.orderId;
            localStorage.clear();
          })
          .catch((err) => console.log("Il y a un problème: ", err));
      } else {
        alert("Merci de vérifier vos données dans le formulaire");
      }
    });
  }
}
