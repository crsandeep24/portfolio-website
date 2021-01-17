import React from "react";
import logo from "../logo.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
      <div className="container">
        <a href="/#" className="navbar-brand">
          <img className="logo" src={logo} alt="put the logo here" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            style={{ color: "#fff" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/#" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                My work
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
