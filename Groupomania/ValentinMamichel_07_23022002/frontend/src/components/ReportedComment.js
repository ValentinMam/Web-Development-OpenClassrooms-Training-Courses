import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentUser from "./CommentUser";

const ReportedComments = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateContent, setUpdateContent] = useState("");
  const [token, setToken] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState();

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
      getComments();
    }
  }, [token]);

  const getComments = () => {
    axios
      .get("http://localhost:8080/api/comment")
      .then((response) => {
        setComments(response.data);
      })
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

  const handleChange = (e) => {
    const updateCommentId = e.target.closest(".comment").id;
    const post = e.target.closest(".comment--footer").id;
    const commentContent = document.querySelector("textarea").value;

    const commentUpdated = {
      message: updateContent ? updateContent : commentContent,
    };

    axios
      .put(
        `http://localhost:8080/api/posts/${post}/comment/${updateCommentId}`,
        commentUpdated
      )
      .then(() => setIsUpdating(false))
      .catch((error) => console.log(error));
  };

  const handleDelete = (e) => {
    const deleteCommentId = e.target.closest(".comment").id;
    const postId = e.target.id;

    axios
      .delete(
        `http://localhost:8080/api/posts/${postId}/comment/${deleteCommentId}`
      )
      .then(() => getComments())
      .catch((error) => console.log(error));
  };

  const handleModerate = (e) => {
    const updateCommentId = e.target.closest(".comment").id;
    const post = e.target.closest(".comment--footer").id;

    const commentUpdated = {
      isReported: false,
    };

    axios
      .put(
        `http://localhost:8080/api/posts/${post}/comment/${updateCommentId}`,
        commentUpdated
      )
      .then(() => getComments())
      .catch((error) => console.log(error));
  };

  return (
    <div className="background">
      {token ? (
        <div className="container">
          {comments.length > 0 ? (
            <div className="admin-content">
              <h2>Commentaires signalés :</h2>
              <ul>
                {comments.map((comment) => (
                  <div key={comment.id} id={comment.id} className="comment">
                    <div className="comment-header">
                      <CommentUser id={comment.userId} />
                      <p className="comment-header--date">
                        Posté le {dateParser(comment.createdAt)}
                      </p>
                    </div>
                    <div className="comment--message">
                      {isUpdating ? (
                        <textarea
                          autoFocus
                          defaultValue={
                            updateContent ? updateContent : comment.message
                          }
                          onChange={(e) => setUpdateContent(e.target.value)}
                        />
                      ) : (
                        <p>{updateContent ? updateContent : comment.message}</p>
                      )}
                    </div>
                    <div className="comment--footer" id={comment.postId}>
                      <button onClick={() => navigate(`/${comment.postId}`)}>
                        Voir le post associé
                      </button>
                      {isUpdating ? (
                        <button onClick={handleChange}>Valider</button>
                      ) : (
                        <button onClick={() => setIsUpdating(true)}>
                          Modifier
                        </button>
                      )}
                      <button
                        onClick={() => setShowDeleteModal(true)}
                        className="delete"
                      >
                        Supprimer
                      </button>
                      <button onClick={handleModerate}>Ne pas signaler</button>
                    </div>
                    {showDeleteModal ? (
                      <div className="modal-title">
                        <div className="modal-content">
                          <p>Souhaitez-vous supprimer votre commentaire ?</p>
                          <button
                            className="btn btn-success"
                            onClick={handleDelete}
                            id={comment.postId}
                          >
                            Oui !
                          </button>
                          <br />
                          <button
                            className="btn btn-danger"
                            onClick={() => setShowDeleteModal(false)}
                          >
                            Non !
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </ul>
            </div>
          ) : (
            <div className="admin-content">
              <p className="no-reported-comments">
                Pas de commentaires signalés
              </p>
            </div>
          )}
        </div>
      ) : (
        <p>Ok</p>
      )}
    </div>
  );
};

export default ReportedComments;
