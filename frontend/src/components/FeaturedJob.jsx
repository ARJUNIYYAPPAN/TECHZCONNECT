import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedJob.css';

const jobs = [
  {
    title: "Full Stack Developer",
    location: "Chennai, India",
    type: "Full-time",
    link: "/jobs-listing"
  },
  {
    title: "HR Business Partner",
    location: "Bangalore, India",
    type: "Contract",
    link: "/jobs-listing"
  },
  {
    title: "Digital Marketing Executive",
    location: "Remote",
    type: "Part-time",
    link: "/jobs-listing"
  },
  {
    title: "Data Analyst",
    location: "Hyderabad, India",
    type: "Full-time",
    link: "/jobs-listing"
  }
];

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs-section">
      <motion.h2 
        className="featured-jobs-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Job Openings
      </motion.h2>

      <div className="jobs-container">
        {jobs.map((job, index) => (
          <motion.div 
            className="job-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <a href={job.link} className="apply-btn">Apply Now</a>
          </motion.div>
        ))}
      </div>

      <div className="view-all-btn">
        <a href="/jobs-listing">View All Jobs</a>
      </div>
    </section>
  );
};

export default FeaturedJobs;
