import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/header.css";
const Header = () => {
  const [isAdmin, setIsAdmin] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    localforage
      .getItem("userId")
      .then((userId) => setUserId(userId))
      .catch((error) => console.log(error));

    if (userId) {
      axios
        .get(`http://localhost:8080/api/auth/${userId}`)
        .then((response) => setIsAdmin(response.data.admin))
        .catch((error) => console.log(error));
    }
  }, [userId]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        <a className="navbar-brand " href="#">
          <NavLink to="/home">Accueil</NavLink>
        </a>
      </div>
      <div className="container-md">
        <a className="navbar-brand" href="#">
          <NavLink to="/account">Mon compte</NavLink>
        </a>
      </div>
      <div className="container-md">
        <a className="navbar-brand" href="#">
          <NavLink to="/" onClick={() => localforage.clear()}>
            Déconnexion
          </NavLink>
        </a>
      </div>
      <div className="container-md">
        <a className="navbar-brand" href="#">
          {isAdmin ? <NavLink to="/admin">Administration</NavLink> : null}
        </a>
      </div>
    </nav>
  );
};

export default Header;
