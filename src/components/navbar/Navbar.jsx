import React, { useState } from "react";
import "../cssfiles/Navbar.css";
import logo from "../../assets/BD-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="web-name">
        <img src={logo} alt="Logo" className="logo" />
        <span>BLink</span>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Seeker</a>
        </li>
        <li className="nav-item">
          <a href="#">Donor</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
