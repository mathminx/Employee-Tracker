/*// Import and require mysql2
const mysql = require('mysql2');
require('dotenv').config();
console.log(process.env);

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: ''
  },
);

var connection = mysql.createConnection({
  host: process.env.host
  user: process.env.username
  password: process.env.password,
  database: process.env.database
});*/