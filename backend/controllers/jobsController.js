const pool = require("../config/db");

// ✅ Fetch all jobs
exports.getJobs = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM jobs");
        res.json(result.rows);
    } catch (err) {
        console.error("❌ Error fetching jobs:", err);
        res.status(500).json({ error: "Server Error" });
    }
};

// ✅ Fetch job by ID
exports.getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM jobs WHERE id = $1", [id]);
        if (result.rows.length === 0) return res.status(404).json({ error: "Job not found" });
        res.json(result.rows[0]);
    } catch (err) {
        console.error("❌ Error fetching job:", err);
        res.status(500).json({ error: "Server Error" });
    }
};

// ✅ Add a new job
exports.addJob = async (req, res) => {
    try {
        const { title, description, location, salary } = req.body;
        const result = await pool.query(
            "INSERT INTO jobs (title, description, location, salary) VALUES ($1, $2, $3, $4) RETURNING *",
            [title, description, location, salary]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("❌ Error adding job:", err);
        res.status(500).json({ error: "Server Error" });
    }
};

// ✅ Delete a job
exports.deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM jobs WHERE id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) return res.status(404).json({ error: "Job not found" });
        res.json({ message: "Job deleted successfully" });
    } catch (err) {
        console.error("❌ Error deleting job:", err);
        res.status(500).json({ error: "Server Error" });
    }
};
