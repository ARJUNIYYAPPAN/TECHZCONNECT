const express = require("express");
const { getJobs, getJobById, addJob, deleteJob } = require("../controllers/jobsController"); 
const router = express.Router();

// ✅ Get all jobs
router.get("/", getJobs);

// ✅ Get a job by ID
router.get("/:id", getJobById);

// ✅ Add a new job
router.post("/", addJob);

// ✅ Delete a job by ID
router.delete("/:id", deleteJob);

module.exports = router;
