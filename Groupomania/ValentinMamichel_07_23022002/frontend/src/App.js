import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Post from "./pages/Post";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenue sur le réseau social interne</h1>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path=":id" element={<Post />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
