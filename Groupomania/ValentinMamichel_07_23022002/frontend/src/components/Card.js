// File will be imported in Posts.js file

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/Posts.css";
import img from "../assets/images/user.png";

const Card = (props) => {
  const { post } = props;
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/auth/${post.userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  return (
    <div className="card">
      <NavLink to={`/${post.id}`} tabIndex="0">
        <div className="card-body">
          <img
            className="profil"
            src={user.profilePicture ? user.profilePicture : img}
            alt="utilisateur"
          />
          <h5 className="card-title">
            {user.firstName} {user.lastName}
            <p className="card-text">
              <small id="text-muted">
                <span>{dateParser(post.createdAt)}</span>
              </small>
            </p>
          </h5>

          <p className="card-text">{post.description}</p>
        </div>
        {post.imageUrl ? (
          // case 1 : image post
          <img
            src={post.imageUrl}
            className="card-img-bottom"
            alt={post.description}
          />
        ) : (
          // case 2 : no image
          <p></p>
        )}
      </NavLink>
    </div>
  );
};

export default Card;
