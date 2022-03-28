// scripts of index.html

// Récupération des informations produits de l'API et insertion des produits dans le HTML
(async function () {
  const articles = await getArticles();

  for (article of articles) {
    InsertArticles(article);
  }
})();

// Récupération des produits de l'API
function getArticles() {
  return fetch("http://localhost:3000/api/products")
    .then(function (res) {
      return res.json();
    })
    .then(function (articles) {
      return articles;
    })
    .catch(function (error) {
      alert(
        "Erreur dans le chargement de la page d'accueil. Avez vous activez le port 3000 ?"
      );
    });
}

// Injection du code dans le HTML
function InsertArticles(article) {
  // Insertion du l'élément "a" : lien produit avec id
  let productLink = document.createElement("a");
  document.querySelector(".items").appendChild(productLink);
  productLink.href = `product.html?id=${article._id}`;

  // Insertion de l'élément "article" : structure de la presentation produit
  let productArticle = document.createElement("article");
  productLink.appendChild(productArticle);

  // Insertion de l'élément "img" : image du produit
  let productImg = document.createElement("img");
  productArticle.appendChild(productImg);
  productImg.src = article.imageUrl;
  productImg.alt = article.altTxt;

  // Insertion de l'élément "h3" : nom du produit
  let productName = document.createElement("h3");
  productArticle.appendChild(productName);
  productName.classList.add("productName");
  productName.innerHTML = article.name;

  // Insertion de l'élément "p" : description du produit
  let productDescription = document.createElement("p");
  productArticle.appendChild(productDescription);
  productDescription.classList.add("productName");
  productDescription.innerHTML = article.description;
}
