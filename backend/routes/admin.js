const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Dummy Admin User (Replace with Database)
const adminUser = {
    username: "admin",
    password: "$2a$10$KIXVZy6mB9hLX4o6HZnF2ueEO7RMt5pNB3nK7tArphTAmS5OROdqC", // Hashed password for 'admin123'
};

// 🔹 Admin Login Route
router.post("/auth/login", async (req, res) => {
    const { username, password } = req.body;  
    const admin = await Admin.findOne({ username });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, sameSite: "Strict" });
    res.json({ message: "Login successful", token });
});


module.exports = router;
