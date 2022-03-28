import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import img from "../assets/images/user.png";

import { FaUserSlash } from "react-icons/fa";
import "../styles/pages/account.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Account = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [user, setUser] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateImage, setUpdateImage] = useState("");
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  // const [updateEmail, setUpdateEmail] = useState("");
  // const [updatePassword, setUpdatePassword] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [imageUploaded, setImageUploaded] = useState(null);
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    localforage.getItem("userId").then((userId) => {
      setUserId(userId);
      getUser(userId);
    });
  }, []);

  const getUser = (userId) => {
    axios
      .get(`http://localhost:8080/api/auth/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let userForm = new FormData();
    userForm.append("image", updateImage ? updateImage : user.profilePicture);
    userForm.append(
      "firstName",
      updateFirstName ? updateFirstName : e.target.firstName.value
    );
    userForm.append(
      "lastName",
      updateLastName ? updateLastName : e.target.lastName.value
    );
    // userForm.append("email", updateEmail ? updateEmail : e.target.email.value);

    // userForm.append(
    //   "password",
    //   updatePassword ? updatePassword : e.target.password.value
    // );

    userForm.append(
      "description",
      updateDescription ? updateDescription : e.target.description.value
    );

    axios
      .put(`http://localhost:8080/api/auth/${userId}`, userForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setIsUpdating(false);
        getUser(userId);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/auth/${userId}`)
      .then(() => {
        navigate("/");
        localforage.clear();
      })
      .catch((error) => console.log(error));
  };

  const handleChangeFile = (e) => {
    setImageUploaded(e.target.files[0].name);
    setUpdateImage(e.target.files[0]);
  };

  return (
    <div className="account">
      <Header />
      <div className="background">
        <div className="container-background">
          {user ? (
            <div className="container">
              {isUpdating ? (
                <div className="content">
                  <form className="update-form" onSubmit={handleUpdate}>
                    <div className="content-left user-account">
                      <img
                        src={user.profilePicture ? user.profilePicture : img}
                        alt="utilisateur"
                      />
                      <div className="update-image">
                        <input
                          type="file"
                          id="profilePicture"
                          onChange={handleChangeFile}
                        />
                        {imageUploaded ? (
                          <p className="imageUploaded">
                            Image ajoutée : <span>{imageUploaded}</span>
                          </p>
                        ) : (
                          <p className="imageUploaded"></p>
                        )}
                      </div>
                    </div>
                    <div className="content-right user-account update-infos">
                      <div className="fullname">
                        <input
                          type="text"
                          className="firstName"
                          id="userFirstName"
                          name="firstName"
                          defaultValue={
                            updateFirstName ? updateFirstName : user.firstName
                          }
                          onChange={(e) => setUpdateFirstName(e.target.value)}
                        />

                        <input
                          type="text"
                          id="userLastName"
                          className="lastName"
                          name="lastName"
                          defaultValue={
                            updateLastName ? updateLastName : user.lastName
                          }
                          onChange={(e) => setUpdateLastName(e.target.value)}
                        />
                      </div>

                      {/* <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={updateEmail ? updateEmail : user.email}
                        onChange={(e) => setUpdateEmail(e.target.value)}
                      /> */}

                      {/* <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue={
                          updatePassword ? updatePassword : user.password
                        }
                        onChange={(e) => setUpdatePassword(e.target.value)}
                      /> */}

                      <textarea
                        name="description"
                        id="description"
                        className="description"
                        defaultValue={
                          updateDescription
                            ? updateDescription
                            : user.description
                        }
                        onChange={(e) => setUpdateDescription(e.target.value)}
                      />
                      <input
                        className="btn btn-success"
                        type="submit"
                        value="Valider"
                        tabIndex="1"
                      />
                    </div>
                  </form>
                </div>
              ) : (
                <div className="content">
                  <div className="content-left user-account">
                    <img
                      src={user.profilePicture ? user.profilePicture : img}
                      alt="utilisateur"
                    />
                  </div>
                  <div className="content-right user-account">
                    <form>
                      <div className="fullname">
                        <p className="firstName">
                          {updateFirstName ? updateFirstName : user.firstName}
                        </p>
                        <p className="lastName">
                          {updateLastName ? updateLastName : user.lastName}
                        </p>
                      </div>

                      {/* <input
                        type="email"
                        id="email"
                        readOnly
                        name="email"
                        defaultValue={updateEmail ? updateEmail : user.email}
                      />

                      <input
                        type="password"
                        id="password"
                        readOnly
                        name="password"
                        defaultValue={
                          updatePassword ? updatePassword : user.password
                        }
                      /> */}

                      <input
                        type="text"
                        id="description"
                        placeholder="Ajouter une description"
                        readOnly
                        defaultValue={
                          updateDescription
                            ? updateDescription
                            : user.description
                        }
                        className="infos--description"
                      />
                    </form>
                    <div className="user-account--button">
                      <button
                        className="btn btn-warning"
                        onClick={() => setIsUpdating(true)}
                      >
                        Modifier
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => setShowModal(true)}
                      >
                        Supprimer
                      </button>
                    </div>
                    {showModal ? (
                      <div className="modal-title">
                        <div className="modal-content">
                          <p>Souhaitez-vous supprimer votre compte ?</p>
                          <button
                            className="btn btn-success"
                            onClick={handleDelete}
                          >
                            Oui !
                          </button>
                          <br />
                          <button
                            className="btn btn-danger"
                            onClick={() => setShowModal(false)}
                          >
                            Non !
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <FaUserSlash />
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
