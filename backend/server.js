const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin : "http://localhost:3000",
     credentials:true,
     methods: "GET,POST,PUT,DELETE",
     allowedHeaders:"Content-Type,Authorization"
     }));
app.use(express.json());

// ✅ Import Routes
const jobRoutes = require("./routes/jobs");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

app.use("/api/jobs", jobRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// ✅ Export `app` (so it can be used in `index.js`)
module.exports = app;
