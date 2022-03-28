import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import Header from "../components/Header";
import Likes from "../components/Likes";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/Posts.css";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const [allowUpdate, setAllowUpdate] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateContent, setUpdateContent] = useState("");
  const [updateImage, setUpdateImage] = useState("");
  const [imageUploaded, setImageUploaded] = useState();

  const [showDeleteModal, setShowDeleteModal] = useState();

  const urlAPI = `http://localhost:8080/api/posts/${id}`;

  const [token, setToken] = useState();

  useEffect(() => {
    localforage
      .getItem("userId")
      .then((userId) => {
        setUserId(userId);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    localforage
      .getItem("token")
      .then((token) => {
        setToken(token);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `token ${token}`;
    if (token) {
      getPost();
    }
  }, [token]);

  useEffect(() => {
    if (data.userId === userId) {
      setAllowUpdate(true);
    } else {
      setAllowUpdate(false);
    }
  }, [data, userId]);

  const getPost = () => {
    axios
      .get(urlAPI)
      .then((response) => {
        setData(response.data);
        getUser(response.data.userId);
      })
      .catch((error) => console.log(error));
  };

  const getUser = (userId) => {
    axios
      .get(`http://localhost:8080/api/auth/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  const handleUpdate = (e) => {
    let form = new FormData();
    form.append("image", updateImage);
    form.append(
      "description",
      updateContent ? updateContent : data.description
    );

    axios
      .put(urlAPI, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        getPost();
        setIsUpdating(false);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    axios
      .delete(urlAPI)
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  const handleChangeFile = (e) => {
    setImageUploaded(e.target.files[0].name);
    setUpdateImage(e.target.files[0]);
  };

  return (
    <div>
      <Header />
      <div className="background">
        <div className="card">
          <div className="container">
            <div className="header">
              <p>
                Post de {user.firstName} {user.lastName} datant du{" "}
                {dateParser(data.createdAt)}
              </p>
            </div>
            {isUpdating ? (
              <div className="post-content--image">
                {data.imageUrl ? (
                  <img id="postImage" src={data.imageUrl} alt="Mon article" />
                ) : null}
                <div className="add-image">
                  <input
                    type="file"
                    id="content-file"
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={handleChangeFile}
                  />
                </div>
              </div>
            ) : data.imageUrl ? (
              <div className="post-content--image">
                <img id="postImage" src={data.imageUrl} alt="Mon article" />
              </div>
            ) : null}
            <div className="post-content--description">
              {isUpdating ? (
                <textarea
                  autoFocus
                  defaultValue={
                    updateContent ? updateContent : data.description
                  }
                  onChange={(e) => setUpdateContent(e.target.value)}
                ></textarea>
              ) : (
                <p>{data.description}</p>
              )}
            </div>
            {allowUpdate ? (
              <div className="post-content--button">
                {isUpdating ? (
                  <button className="btn btn-success" onClick={handleUpdate}>
                    Valider
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => setIsUpdating(true)}
                  >
                    Modifier le post
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Supprimer le post
                </button>
              </div>
            ) : null}
            {showDeleteModal ? (
              <div className="modal-title">
                <div className="modal-content">
                  <p>Êtes-vous sûr(e) de supprimer le post ?</p>
                  <button className="btn btn-success" onClick={handleDelete}>
                    Oui
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    Non
                  </button>
                </div>
              </div>
            ) : null}
            <Likes id={id} />
            <Comments id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
