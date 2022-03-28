import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

import "../styles/pages/signup.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [userCreated, setUserCreated] = useState();
  const [visible, setVisible] = useState();
  const [validLength, setValidLength] = useState();
  const [validUppercase, setValidUppercase] = useState();
  const [validLowercase, setValidLowercase] = useState();
  const [validDigit, setValidDigit] = useState();
  const [validPassword, setValidPassword] = useState();
  const [strongPassword, setStrongPassword] = useState(true);
  const [invalidUser, setInvalidUser] = useState("");

  const length = /[a-zA-Z0-9]{8,}/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const digit = /[0-9]/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPassword) {
      setStrongPassword(false);
    } else {
      const user = {
        lastName: e.target.lastName.value,
        firstName: e.target.firstName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      axios
        .post("http://localhost:8080/api/auth/signup", { user })
        .then(() => {
          setUserCreated(true);
        })
        .catch((error) => setInvalidUser("Cet email est déjà utilisé"));
    }
  };

  const handleChange = (e) => {
    const password = e.target.value;

    if (length.test(password)) {
      setValidLength(true);
    } else {
      setValidLength(false);
    }

    if (uppercase.test(password)) {
      setValidUppercase(true);
    } else {
      setValidUppercase(false);
    }

    if (lowercase.test(password)) {
      setValidLowercase(true);
    } else {
      setValidLowercase(false);
    }

    if (digit.test(password)) {
      setValidDigit(true);
    } else {
      setValidDigit(false);
    }
  };

  const handleCheckPassword = () => {
    if (validLength && validUppercase && validLowercase && validDigit) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row mb-5">
        <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-5">
          <div className="nga-card">
            <h2 className="h5 card-header text-center py-4">
              <strong>Inscription</strong>
            </h2>
            <div className="card-body px-lg-5 pt-4">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col">
                    <div className="md-form mb-2">
                      <div className="form-floating">
                        <input
                          type="text"
                          id="lastName"
                          placeholder="Nom"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>
                    <div className="md-form mb-2">
                      <div className="form-floating">
                        <input
                          type="text"
                          id="firstName"
                          placeholder="Prénom"
                          name="firstName"
                          required
                        />
                      </div>
                    </div>
                    {invalidUser ? (
                      <div className="invalid-signup">
                        <div className="md-form mb-2">
                          <div className="form-floating">
                            <input
                              type="email"
                              id="email"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </div>
                        </div>
                        <p className="invalid-message">{invalidUser}</p>
                      </div>
                    ) : (
                      <div className="validEmail">
                        <div className="md-form mb-2">
                          <div className="form-floating">
                            <input
                              type="email"
                              id="email"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </div>
                        </div>{" "}
                      </div>
                    )}
                    <div className="md-form mb-2">
                      <div className="form-floating">
                        <input
                          type="password"
                          id="password"
                          placeholder="Mot de passe"
                          name="password"
                          onChange={handleChange}
                          onFocus={() => setVisible(true)}
                          onBlur={handleCheckPassword}
                        />
                      </div>
                    </div>
                    {visible ? (
                      strongPassword ? (
                        <div className="password">
                          {validPassword ? (
                            <p className="password-strong">
                              Mot de passe correct :
                            </p>
                          ) : (
                            <p>Mot de passe correct :</p>
                          )}
                          {validLength ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 8 caractères
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 8 caractères
                            </p>
                          )}
                          {validUppercase ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 1 lettre majuscule
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 1 lettre majuscule
                            </p>
                          )}
                          {validLowercase ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 1 lettre minuscule
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 1 lettre minuscule
                            </p>
                          )}
                          {validDigit ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 1 chiffre
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 1 chiffre
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="password incorrect">
                          {validPassword ? (
                            <p className="password-strong">
                              Mot de passe correct :
                            </p>
                          ) : (
                            <p>Mot de passe correct :</p>
                          )}
                          {validLength ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 8 caractères
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 8 caractères
                            </p>
                          )}
                          {validUppercase ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 1 lettre majuscule
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 1 lettre majuscule
                            </p>
                          )}
                          {validLowercase ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 1 lettre minuscule
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 1 lettre minuscule
                            </p>
                          )}
                          {validDigit ? (
                            <p className="password-strong">
                              <FaCheck /> Minimum 1 chiffre
                            </p>
                          ) : (
                            <p>
                              <FaTimes /> Minimum 1 chiffre
                            </p>
                          )}
                        </div>
                      )
                    ) : null}
                    <input type="submit" id="signupSubmit" value="S'inscrire" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <NavLink to="/">Se connecter</NavLink>
          {userCreated ? (
            <p>
              Votre compte a bien été créé ! <br />
              <FaUserPlus />
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Signup;
