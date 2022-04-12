import React from "react";

import logo from "../images/Smart Bed Systems.png"; // relative path to image

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  const title = {
    float: "left",
    borderRadius: "25px",
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img style={{ width: 25 + "%" }} src={logo} alt="Logo"></img>
        <span style={title} className="title">
          Smart Bed Systems User Application
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Go To Sleep Data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/alarm">
                Go To Alarm
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
