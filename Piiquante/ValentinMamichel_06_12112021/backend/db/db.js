const mongoose = require("mongoose");

const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
console.log(result.parsed);

//connection à la base de donnée mongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@project6openclassrooms.k0wlq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = mongoose;

// TEST DB
// `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@project6openclassrooms.k0wlq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
