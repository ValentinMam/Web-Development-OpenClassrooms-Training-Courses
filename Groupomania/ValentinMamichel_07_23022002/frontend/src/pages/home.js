import React from "react";
import localforage from "localforage";
import { useEffect, useState } from "react";
import Header from "../components/Header";
// import of posts components (Posts linked with Card + FormPost)
import Posts from "../components/Posts";
import "../styles/pages/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    localforage
      .getItem("userId")
      .then((userId) => {
        setUserId(userId);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      <Header />

      <Posts userId={userId} />
    </div>
  );
};

export default Home;
