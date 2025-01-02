import React, { useState } from "react";
import "../cssfiles/Navbar.css";
import logo from "../../assets/BD-logo.png";
import { Link } from "react-router-dom";

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
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/seeker">Seeker</Link>
        </li>
        <li className="nav-item">
          <Link to="/doner">Donor</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item ">
            <Link to="/Seekerreg" className="need-blood">need blood</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
