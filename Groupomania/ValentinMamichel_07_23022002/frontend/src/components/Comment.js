import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/Comments.css";

const Comment = (props) => {
  const [message, setMessage] = useState("");
  const { id } = props;
  const { getComments } = props;
  const urlAPI = `http://localhost:8080/api/posts/${id}/comment`;

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      message: message,
    };

    axios
      .post(urlAPI, newComment)
      .then(() => {
        getComments();
        setMessage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Écrire un commentaire"
          id="create-comment"
          name="comment"
          value={message}
          onChange={handleChange}
          tabIndex="0"
        />
        <input
          type="submit"
          className="btn btn-dark"
          id="comment"
          value="Commenter"
        />
      </form>
    </div>
  );
};

export default Comment;
