// Import and require mysql2
const mysql = require('mysql2');

function getDatabase() {
  // Connect to database
  const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'bergus33',
      database: 'company_db'
    },
  );
  console.log(`\Connected to company database.\n`);
  db.query(`DROP DATABASE IF EXISTS company_db;`);
  db.query(`CREATE DATABASE company_db;`);
  db.query(`USE company_db;`);
  viewEmployees();
};


// View employee database
function viewEmployees() {
  const db = getDatabase();
  console.log(`\nFetching Employees...\n`)
  const {printTable} = require("console-table-printer");
  db.query (
    'SELECT * FROM employee', function (err, results) {
    printTable(results);
    console.log("finished");
  });
};

//viewEmployees();