import React from 'react';
import TalentAcquisitionImg from '../assets/talent.jpg';
import './TalentAcquisition.css';

const TalentAcquisition = () => {
  return (
    <div className="talent-acquisition-container">
      <div className="talent-acquisition-content">
        <h1>Talent Acquisition</h1>
        <p className="highlight">
          Talent acquisition is a strategic approach to identifying, attracting,
          and onboarding top talent to meet an organization's workforce needs.
        </p>
        <p>
          It involves a comprehensive process that goes beyond traditional
          recruitment, focusing on building a strong employer brand, creating
          a positive candidate experience, and developing long-term
          relationships with potential candidates.
        </p>
      </div>
      <div className="talent-acquisition-image-wrapper">
        <img
          src={TalentAcquisitionImg}
          alt="Talent Acquisition"
          className="talent-acquisition-image"
        />
      </div>
    </div>
  );
};

export default TalentAcquisition;
