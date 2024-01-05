import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <a href="/">logo</a>
        </div>
        <div className="nav-list">
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">services</a>
          </li>
          <li>
            <a href="/">projects</a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Navbar;
