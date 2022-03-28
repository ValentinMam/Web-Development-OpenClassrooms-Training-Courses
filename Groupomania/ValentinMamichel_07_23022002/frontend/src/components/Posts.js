// File will be imported in Home.js file

import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import FormPost from "./FormPost";

import localforage from "localforage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    localforage
      .getItem("token")
      .then((token) => {
        setToken(token);
      })
      .catch((error) => console.log(error));

    localforage
      .getItem("userId")
      .then((userId) => {
        axios
          .get(`http://localhost:8080/api/auth/${userId}`)
          .then((response) => setUser(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [token]);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `token ${token}`;
    if (token) {
      getDatas();
    }
  }, [token]);

  const getDatas = () => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="background">
      {token ? (
        // case 1 : token
        <div className="posts">
          <div className="container-welcome">
            <div className="welcome">
              Hello{" "}
              {user ? (
                // case 1 : user
                <span>{user.firstName} !</span>
              ) : (
                // case 2 : not user
                <span></span>
              )}{" "}
              <br></br>
              Quoi de nouveau ?
            </div>
            <FormPost getDatas={getDatas} />
          </div>
          {posts.length > 0 ? (
            // case 1 : at least one post
            <div className="home-content">
              <ul className="container posts-list">
                {posts.map((post) => (
                  <Card post={post} key={post.id} />
                ))}
              </ul>
            </div>
          ) : (
            // case 2 : no post
            <p className="nopost">Aucun post créé</p>
          )}
        </div>
      ) : (
        // case 2 : no token = posts don't appear
        <p></p>
      )}
    </div>
  );
};

export default Posts;
