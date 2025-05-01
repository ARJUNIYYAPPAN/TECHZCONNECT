// src/components/JobListings/JobFilters.jsx

import React from 'react';
import './JobFilters.css';

const JobFilters = () => {
    return (
        <div className="job-filters">
            <h3>Filters</h3>
            <label>
                Location:
                <input type="text" placeholder="Enter location" />
            </label>
            <label>
                Job Type:
                <select>
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Internship</option>
                </select>
            </label>
            <label>
                Experience Level:
                <select>
                    <option>Fresher</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                </select>
            </label>
        </div>
    );
};

export default JobFilters;
