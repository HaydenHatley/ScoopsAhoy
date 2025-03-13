// Get an instance of mysql we can use in the app
const mysql = require("mysql2");
require("dotenv").config();

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
    connectionLimit: 10,
    waitForConnections: true,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
}).promise();

// Export it for use in our application
module.exports = pool;