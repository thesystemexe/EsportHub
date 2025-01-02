import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo1.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  return (
    <div className="navbar">
      <div className="left-side-container">
        <h3 className="navbar-logo-text">Gaming</h3>
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>
      <div className="right-hand-container">
        <div>
          <ul className="navbar-menu">
            <li className="navbar-menu-item" onClick={() => setMenu("Home")}>
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
              {menu === "Home" ? <hr /> : <></>}
            </li>
            <li
              className="navbar-menu-item"
              onClick={() => setMenu("Tournament")}
            >
              {" "}
              <Link style={{ textDecoration: "none" }} to="/tournament">
                Tournament
              </Link>
              {menu === "Tournament" ? <hr /> : <></>}
            </li>
            <li className="navbar-menu-item" onClick={() => setMenu("Guide")}>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/guide">
                Guide
              </Link>
              {menu === "Guide" ? <hr /> : <></>}
            </li>
            <li className="navbar-menu-item">
              {" "}
              {localStorage.getItem("auth-token") ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.replace("/");
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/loginSignup">
                  <button>Login</button>
                </Link>
              )}
            </li>
            <li className="navbar-menu-item">
              {" "}
              <Link style={{ textDecoration: "none" }} to="/chat">
                Chat
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={profile} alt="" className="navbar-profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
