// src/pages/JobListingsPage.jsx
import React, { useState, useEffect } from "react";
import JobList from "../components/JobListings/JobList";
import JobFilters from "../components/JobListings/JobFilters";
import SearchBar from "../components/JobListings/SearchBar";
import Pagination from "../components/JobListings/Pagination";
import "./JobListingsPage.css";

const JobListingsPage = () => {
    const [jobs, setJobs] = useState([]); // Job data
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const jobsPerPage = 6; // Set how many jobs to show per page

    // Fetch Jobs (Replace this with API call when backend is ready)
    useEffect(() => {
        const fetchJobs = async () => {
            // Simulated API response (replace with backend call)
            const jobData = [
                { id: 1, title: "Software Developer", location: "Chennai" },
                { id: 2, title: "Frontend Engineer", location: "Bangalore" },
                { id: 3, title: "Backend Developer", location: "Hyderabad" },
                { id: 4, title: "UI/UX Designer", location: "Pune" },
                { id: 5, title: "DevOps Engineer", location: "Mumbai" },
                { id: 6, title: "Data Scientist", location: "Delhi" },
                { id: 7, title: "Project Manager", location: "Noida" },
            ];
            setJobs(jobData);
        };

        fetchJobs();
    }, []);

    // Pagination Logic
    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Handle Page Change
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="job-listings-container">
            <SearchBar />
            <div className="job-listings-content">
                <JobFilters />
                <JobList jobs={currentJobs} />
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default JobListingsPage;
