import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Form from "./Form";
// import { color } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section - Brand Info */}
        <div className="footer-brand">
          <h2>Techzconnect HR Consulting</h2>
          <p>We help businesses find the right talent and professionals build their careers.</p>
          <Form/>
        </div>

        {/* Center Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/jobs">Job Listings</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-social">
          <h3>Follow US</h3>
          <div className="social-icons">
            <a href="t"><FaFacebookF /></a>
            <a href="e"><FaTwitter /></a>
            <a href="c"><FaLinkedinIn /></a>
            <a href="z"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-map">
          <h3 style={{color: "#FF0000"}}>Visit Us</h3>
   <iframe
    title="TechzAspire Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.196321286258!2d80.24060447484115!3d12.959285987354951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9a4af906f3%3A0x9c6b4f7970bd8200!2sTechzit%20Solutions!5e0!3m2!1sen!2sin!4v1744197579045!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0, borderRadius: "10px", marginTop: "30px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
   ></iframe>
      </div>

      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Techzconnect HR Consulting. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
