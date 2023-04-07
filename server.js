const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Import and require inquirer
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Bertguss330404!',
    database: 'company_db'
  },
  console.log(`Connected to the company database.`)
);

// Query database
db.query('SELECT * FROM departments', function (err, results) {
  console.log(results);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});