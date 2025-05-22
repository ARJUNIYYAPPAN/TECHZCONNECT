import React from 'react';
import './FinalCTASection.css';
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <div className="cta-section-Final">
      <h2>🚀 Ready to Transform Your Hiring Journey?</h2>
      <p>Connect with us today and discover top talent across the globe.</p>
      <div className="cta-buttons">
        <Link to="/contact" className="cta-btn contact-btn">Contact Us</Link>
        <Link to="/joblistings" className="cta-btn apply-btn">Explore Jobs</Link>
      </div>
    </div>
  );
};

export default FinalCTASection;
