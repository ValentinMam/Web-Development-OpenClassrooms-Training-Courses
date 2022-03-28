const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json()); // body parser deprecated
const mongoose = require("./db/db");
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");
const helmet = require("helmet"); // prevention contre les attaques XSS dans les HTTP headers

const sauceRoute = require("./routes/sauceRoute");
const userRoute = require("./routes/userRoute");

// paramètrage headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//transformer le corps (le body)en json objet javascript utilisable
app.use(bodyParser.json());

//  éviter l'injection de code dans MongoDB
app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);

// gestion des fichiers "image"
app.use("/images", express.static(path.join(__dirname, "images")));

// gestion des authentifications SIGNUP + LOGIN
app.use("/api/auth", userRoute);

// gestion des sauces AFFICHER SAUCES + AFFICHER SAUCE ID + MODIFIER SAUCE + SUPPRIMER SAUCE + LIKER SAUCE
app.use("/api/sauces", sauceRoute);

// sécuriser headers hhtp
app.use(helmet());

module.exports = app;
