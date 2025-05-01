import React from "react";
import { Link } from "react-router-dom";
import "../styles/JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>📍 Location:</strong> {job.location}</p>
      <p><strong>💰 Salary:</strong> ${job.salary}</p>
      <Link to={`/jobs/${job.id}`} className="view-details-btn">View Details</Link>
    </div>
  );
}

export default JobCard;
