import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* ====== CTA Section ====== */}
      <div className="cta-section">
        <h2>Ready to Transform Your Workforce?</h2>
        <p>
          Let’s discuss how TechzConnect can help you achieve your staffing and HR goals
        </p>
        <button className="cta-btn">
          Request a Consultation <span className="arrow">→</span>
        </button>
      </div>

      <hr className="divider" />

      {/* ====== Footer Main ====== */}
      <div className="footer-container">
        <div className="footer-col about">
          <h3 className="footer-logo">
            Techz<span>Connect</span>
          </h3>
          <p>
            We help businesses find the right talent and professionals build their careers.
          </p>

          <div className="social-icons">
            <a href="#a"><Facebook /></a>
            <a href="#a"><Instagram /></a>
            <a href="#a"><Linkedin /></a>
          </div>

          <p className="policy">
            Terms & Condition | Privacy policy
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#a">Contract Staffing</a></li>
            <li><a href="#a">HR Consulting</a></li>
            <li><a href="#a">Cybersecurity Staffing</a></li>
            <li><a href="#a">RPO</a></li>
            <li><a href="#a" className="view-all">View all</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Visit Us</h4>
          <div className="map-box">
            <iframe 
             title="TechzConnect Office Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.19601520633!2d80.2405709088667!3d12.95930558730216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9a4af906f3%3A0x9c6b4f7970bd8200!2sTechzit%20Solutions!5e0!3m2!1sen!2sin!4v1762964255641!5m2!1sen!2sin"
             width="100%"
             height="100%"
             style={{border:0}}
             allowfullscreen=""
             loading="lazy"
             referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <p className="copyright">
        © 2025 Techzconnect HR Consulting. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
