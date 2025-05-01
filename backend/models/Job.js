const pool = require("../config/db");

const createJobTable = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS jobs (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            location VARCHAR(255) NOT NULL,
            salary INT NOT NULL
        );
    `);
    console.log("✅ Jobs Table Created");
};

createJobTable();

module.exports = pool;
