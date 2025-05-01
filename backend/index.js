const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:3000",  // ✅ Set your frontend origin
    credentials: true,  // ✅ Allow credentials (cookies, tokens)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use(bodyParser.json());

// Routes
const jobRoutes = require("./routes/jobs");
const blogsRoutes = require("./routes/blogs");

app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", jobRoutes);
app.use("/api/blogs",blogsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
