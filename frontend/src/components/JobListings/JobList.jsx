// src/components/JobListings/JobList.jsx

import React from 'react';
import JobCard from '../JobCard';
import './JobList.css';
// import { motion } from 'framer-motion';

const JobList = () => {
    // Dummy data for testing
    const jobs = [
        { id: 1, title: 'Software Developer', company: 'TechzAspire', location: 'Chennai', description: 'Develop and maintain web applications.' },
        { id: 2, title: 'Frontend Engineer', company: 'TechzAspire', location: 'Bangalore', description: 'Build responsive UI components.' },
        { id: 3, title: 'Backend Developer', company: 'TechzAspire', location: 'Hyderabad', description: 'Develop and maintain server-side logic.' },
       
                
    ];

    return (
        <div className="job-list">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobList;
