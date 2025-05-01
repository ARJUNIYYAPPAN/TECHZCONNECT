const express = require("express");
const pool = require("../config/db"); // Ensure DB connection
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM blogs"); // Ensure table exists
        res.json(result.rows);
    } catch (err) {
        console.error("❌ Error fetching blogs:", err);
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
});

module.exports = router;
