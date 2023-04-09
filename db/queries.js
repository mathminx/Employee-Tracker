function viewDepartments() {
  // Import and require mysql2
  const mysql = require('mysql2');
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
    console.log(`\nFetching Departments...\n`)
  );
  // Query department database
  const departments = db.query (
    'SELECT * FROM department', function (err, results) {
    console.table(results);
  });
};

function viewRoles() {
  // Import and require mysql2
  const mysql = require('mysql2');
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
    console.log(`\nFetching Departments...\n`)
  );
  // Query role database
  const roles = db.query (
    'SELECT * FROM role', function (err, results) {
    console.table(results);
  });
};

function viewEmployees() {
  // Import and require mysql2
  const mysql = require('mysql2');
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
    console.log(`\nFetching Departments...\n`)
  );
  // Query employee database
  const employees = db.query (
    'SELECT * FROM employee', function (err, results) {
    console.table(results);
  });
};

/*
function addDepartment() {
  // Array of questions for user input
  const whichDepartment = [
    {
      type: "input",
      message: "What is the name of the department you want to add?",
      name: "name",
    }
  ];
  // Import and require mysql2
  const mysql = require('mysql2');
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
    console.log(`\nFetching Departments...\n`)
  );
}
*/

module.exports = {viewDepartments, viewRoles, viewEmployees /*, addDepartment*/};