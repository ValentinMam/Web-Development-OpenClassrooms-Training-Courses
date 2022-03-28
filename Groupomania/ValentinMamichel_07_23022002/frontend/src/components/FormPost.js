// File will be imported in Posts.js file

import axios from "axios";
import React, { useState } from "react";
import FormData from "form-data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/Posts.css";

const FormPost = (props) => {
  const [setFileUploaded] = useState(null);
  const [message, setMessage] = useState("");
  const { getDatas } = props;
  const imagefile = document.querySelector("#file");

  const handleChangeFile = () => {
    setFileUploaded(imagefile.files[0].name);
  };

  const handleChangeText = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("description", e.target.description.value);
    form.append("image", imagefile.files[0]);

    axios
      .post("http://localhost:8080/api/posts", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        getDatas();
        setFileUploaded(null);
        setMessage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="formPost container-fluid mb-5">
      <div className="card-body px-lg-5 pt-4">
        <form onSubmit={handleSubmit}>
          <textarea
            id="description"
            placeholder="Donnez des nouvelles à vos collègues"
            value={message}
            name="description"
            onChange={handleChangeText}
            tabIndex="0"
          />
          <div className="md-form mb-2">
            <div className="form-floating">
              <input
                className="btn btn-secondary"
                type="file"
                id="file"
                accept="image/png, image/jpg, image/jpeg"
                name="image"
                onChange={handleChangeFile}
              />
            </div>
          </div>
          <div className="md-form mb-2">
            <div className="form-floating">
              <input
                className="btn btn-dark "
                type="submit"
                id="submitPost"
                value="Poster"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPost;
