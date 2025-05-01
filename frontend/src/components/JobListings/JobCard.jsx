import React from 'react';
import './JobCard.css';

const JobCard = ({ title, description, location, salary }) => {
    return (
        <div className="job-card">
            <h3 className="job-title">{title}</h3>
            <p className="job-description">{description}</p>
            <div className="job-info">
                <span className="location-icon">📍 Location: {location}</span>
                <span className="salary-icon">💰 Salary: {salary}</span>
            </div>
        </div>
    );
};

export default JobCard;
