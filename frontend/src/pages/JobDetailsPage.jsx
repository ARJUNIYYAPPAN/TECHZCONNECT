import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchJobById } from "../api"; // API call
import { motion } from "framer-motion"; // ✅ Import motion for animations
import "./JobDetailsPage.css";

const JobDetailsPage = () => {
    const { id } = useParams(); // Get job ID from URL
    const [job, setJob] = useState(null);   
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadJobDetails = async () => {
            try { 
                const jobData = await fetchJobById(id);
                if (!jobData) {
                    setError("Job not found.");
                } else {
                    setJob(jobData);
                }
            } catch (error) {
                console.error("❌ Error fetching job details:", error);
                setError("Failed to load job details. Please try again.");
            }
        };
        loadJobDetails();
    }, [id]);

    if (error) return <p className="error-message">{error}</p>;
    if (!job) return <p className="loading-message">Loading job details...</p>;

    return (
        <motion.div 
            className="job-details-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <Link to="/jobs" className="back-link">← Back to Job Listings</Link>

            <h1>{job.title}</h1>
            <div className="job-info-group">

            <p><strong>Company:</strong> {job.company || "Not specified"}</p>
            <p><strong>Location:</strong> {job.location || "Remote"}</p>
            <p><strong>Salary:</strong> ${job.salary || "N/A"}</p>
            </div>

            <div className="job-description">
            <h2>Description</h2>    
            <p>{job.description || "No description available."}</p>
            </div>

            <div className="job-requirements">
            <h2>Requirements</h2>    
            <p>{job.requirements || "Not specified"}</p>
            </div>
            
            
            <motion.div className="apply-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Link to={`/jobs/${id}/apply`} className="apply-btn">
                    Apply Now
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default JobDetailsPage;
