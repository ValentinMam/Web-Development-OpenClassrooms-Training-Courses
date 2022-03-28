// scripts of product.html

const str = window.location.href;
const url = new URL(str);
const idProduct = url.searchParams.get("id");
console.log(idProduct);
let article = "";

const colorChoice = document.querySelector("#colors");
const quantityChoice = document.querySelector("#quantity");

getArticle();

// Récupération de l'article de l'API avec l'url du localhost + id du produit
function getArticle() {
  // Requete d'informations avec fetch  localhost:3000 = hote local
  fetch("http://localhost:3000/api/products/" + idProduct)
    .then((res) => {
      return res.json();
    })

    // Répartition des données de l'API dans le Document Object Model
    .then(async function (resultatAPI) {
      article = await resultatAPI;
      console.log(article);
      if (article) {
        getPost(article);
      }
    })
    // Une erreur est survenue
    .catch((error) => {});
}

// Présentation de l'article et des choix de couleurs
function getPost(article) {
  // Insertion de l'élément "img" : image du produit
  let productImg = document.createElement("img");
  document.querySelector(".item__img").appendChild(productImg);
  productImg.src = article.imageUrl;
  productImg.alt = article.altTxt;

  // Insertion du nom du produit dans l'élément "h1"
  let productName = document.getElementById("title");
  productName.innerHTML = article.name;

  // + Modification du nom de la page produit
  document.title = article.name;

  // Insertion du prix du produit dans l'élément "p" - "span"
  let productPrice = document.getElementById("price");
  productPrice.innerHTML = article.price;

  // Insertion de la description du produit dans l'élément "p"
  let productDescription = document.getElementById("description");
  productDescription.innerHTML = article.description;

  // Insertion de l'élément "option" : choix de couleurs
  for (let colors of article.colors) {
    console.log(colors);
    let productColors = document.createElement("option");
    document.querySelector("#colors").appendChild(productColors);
    productColors.value = colors;
    productColors.innerHTML = colors;
  }
}

//Gestion du panier
function addToCart() {
  const addCart = document.querySelector("#addToCart");

  //Evenement d'écoute du panier avec conditions
  addCart.addEventListener("click", (event) => {
    if (
      // quantité supérieure à 0
      quantityChoice.value > 0 &&
      // quantité inférieure ou égale à 100
      quantityChoice.value <= 100 &&
      // Quantité nombre entier
      quantityChoice.value == parseInt(quantityChoice.value) &&
      // Choix de couleur non nul
      colorChoice.value != 0
    ) {
      //Recupération du choix de la quantité
      let choixQuantite = quantityChoice.value;

      //Recupération du choix de la couleur
      let choixCouleur = colorChoice.value;

      //Récupération des informations de l'article à ajouter au panier avec les choix de couleur et quantité
      let optionsProduit = {
        idProduit: idProduct,
        couleurProduit: choixCouleur,
        quantiteProduit: Number(choixQuantite),
        nomProduit: article.name,
        prixProduit: article.price,
        descriptionProduit: article.description,
        imgProduit: article.imageUrl,
        altImgProduit: article.altTxt,
      };

      //Initialisation du local storage
      let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

      //fenêtre pop-up de confirmation
      const popupConfirmation = () => {
        if (
          window.confirm(
            `Votre commande de ${choixQuantite} ${article.name} ${choixCouleur} est ajoutée au panier `
          )
        ) {
          window.location.href = "cart.html";
        }
      };

      //Importation dans le local storage selon les conditions

      if (produitLocalStorage) {
        const resultFind = produitLocalStorage.find(
          (el) =>
            el.idProduit === idProduct && el.couleurProduit === choixCouleur
        );
        // Le produit commandé est déjà dans le panier
        if (resultFind) {
          let newQuantite =
            parseInt(optionsProduit.quantiteProduit) +
            parseInt(resultFind.quantiteProduit);
          resultFind.quantiteProduit = newQuantite;
          localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
          console.log(produitLocalStorage);
          popupConfirmation();
          //Le produit commandé n'est pas encore dans le panier
        } else {
          produitLocalStorage.push(optionsProduit);
          localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
          console.log(produitLocalStorage);
          popupConfirmation();
        }
        //Le panier est vide
      } else {
        produitLocalStorage = [];
        produitLocalStorage.push(optionsProduit);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
        console.log(produitLocalStorage);
        popupConfirmation();
      }
    }
  });
}
addToCart();
