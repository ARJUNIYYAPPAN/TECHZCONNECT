import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import MainLogo from "./MainLogo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close dropdown if mobile menu closes
    if (menuOpen) setDropdownOpen(false);
  };

  const toggleDropdownMobile = () => {
    // Only toggle if screen width is small
    if (window.innerWidth <= 768) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><MainLogo/></div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className="hamburger">{menuOpen ? "✕" : "☰"}</span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={handleNavLinkClick}>About Us</NavLink></li>
          <li><NavLink to="/hire-us" className="nav-link" onClick={handleNavLinkClick}>Hire Us</NavLink></li>
          <li
            className="dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
            onClick={toggleDropdownMobile}
          >
            <span className="nav-link dropdown-trigger">Our Services ▾</span>

            {dropdownOpen && (
              <div className="dropdown-menu"> 
                <div className="dropdown-section">
                  <span className="dropdown-title">Domestic Service</span>
                  <ul>
                    <li><NavLink to="/domestic/lets-get-started" onClick={handleNavLinkClick}>Lets Get Started</NavLink></li>
                    <li><NavLink to="/domestic/job-assistance" onClick={handleNavLinkClick}>Job Assistance</NavLink></li>
                    <li><NavLink to="/domestic/local-hiring" onClick={handleNavLinkClick}>Local Hiring</NavLink></li>
                    <li><NavLink to="/domestic/verification" onClick={handleNavLinkClick}>Verification Builds Trust</NavLink></li>
                    <li><NavLink to="/domestic/professional-world" onClick={handleNavLinkClick}>A Professional World</NavLink></li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <span className="dropdown-title">International Service</span>
                  <ul>
                    <li><NavLink to="/international/lets-get-started" onClick={handleNavLinkClick}>Lets Get Started</NavLink></li>
                    <li><NavLink to="/international/job-assistance" onClick={handleNavLinkClick}>Job Assistance</NavLink></li>
                    <li><NavLink to="/international/immigration" onClick={handleNavLinkClick}>Immigration Assessment</NavLink></li>
                    <li><NavLink to="/international/verification" onClick={handleNavLinkClick}>Verification Builds Trust</NavLink></li>
                    <li><NavLink to="/international/professional-world" onClick={handleNavLinkClick}>A Professional World</NavLink></li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li><NavLink to="/jobs-listing" className="nav-link" onClick={handleNavLinkClick}>Job Search</NavLink></li>
          <li><NavLink to="/blog" className="nav-link" onClick={handleNavLinkClick}>Blog</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
