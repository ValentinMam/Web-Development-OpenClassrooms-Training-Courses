import React, { useState } from "react";
import localforage from "localforage";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/pages/login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [invalidUser, setInvalidUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post("http://localhost:8080/api/auth/login", { user })
      .then((response) => {
        const token = response.data.token;
        const userId = response.data.userId;
        localforage.setItem("token", token);
        localforage.setItem("userId", userId);
        navigate("/home");
      })
      .catch((error) =>
        setInvalidUser("Utilisateur ou mot de passe incorrect")
      );
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row mb-5">
        <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-5">
          <div className="nga-card">
            <h2 className="h5 card-header text-center py-4">
              <strong>Connexion</strong>
            </h2>
            <div className="card-body px-lg-5 pt-4">
              {invalidUser ? (
                <div className="invalid">
                  <form onSubmit={handleSubmit}>
                    <div className="md-form mb-2">
                      <div className="form-floating">
                        <input
                          type="email"
                          placeholder="Email"
                          id="email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="md-form mb-2">
                      <div className="form-floating">
                        <input
                          type="password"
                          placeholder="Mot de passe"
                          id="password"
                          name="password"
                        />
                      </div>
                    </div>
                    <p className="invalid-message">{invalidUser}</p>
                    <input
                      type="submit"
                      id="loginSubmit"
                      value="Se connecter"
                    />
                  </form>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="col">
                        <div className="md-form mb-2">
                          <div className="form-floating">
                            <input
                              type="email"
                              placeholder="Email"
                              id="email"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="md-form mb-2">
                          <div className="form-floating">
                            <input
                              type="password"
                              placeholder="Mot de passe"
                              id="password"
                              name="password"
                            />
                          </div>
                        </div>
                        <div className="md-form mb-2">
                          <div className="form-floating">
                            <input
                              type="submit"
                              id="loginSubmit"
                              value="Se connecter"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          <NavLink to="signup">S'inscrire</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
