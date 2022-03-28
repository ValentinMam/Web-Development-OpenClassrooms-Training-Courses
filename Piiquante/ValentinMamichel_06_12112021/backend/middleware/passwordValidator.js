const passwordSchema = require("../models/password");

//Renforcer et sécuriser les mots de passe entrant
module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    return res.status(400).json({
      message:
        "Mot de passe requis : 8 caractères minimun avec au moins 1 majuscule, 1 minuscule, 2 chiffres et sans espaces",
    });
  } else {
    next();
  }
};
