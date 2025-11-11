import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Transform Your Workforce with <br />
          <span className="highlight">TechzConnect</span>
        </h1>
        <p>
          Your trusted partner in staffing, HR consulting, and recruitment solutions.
          <br />We connect exceptional talent with forward-thinking organizations.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get in Touch →</button>
          <button className="btn-outline">Request a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
