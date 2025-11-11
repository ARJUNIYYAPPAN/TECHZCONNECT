import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">TechzConnect</div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#hire">Hire Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#jobs">Job Search</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>

        <div className="nav-btn">
          <button className="contact-btn">Contact Us</button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
