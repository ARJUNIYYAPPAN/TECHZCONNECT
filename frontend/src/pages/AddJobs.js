import React, { useState } from "react";
import { addJob } from "../api/jobsApi"; // Import API function

const AddJob = () => {
    const [job, setJob] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addJob(job);
        if (response.message) {
            alert("Job added successfully!");
        } else {
            alert("Failed to add job");
        }
    };

    return (
        <div className="add-job-container">
            <h2>Add a New Job</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
                <input type="number" name="salary" placeholder="Salary" onChange={handleChange} required />
                <button type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;
