function getDatabase() {
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
  console.log(`\Connecting to the database\n`)
  );
  return db;
};

// View department database
function viewDepartments () {
  console.log(`\nFetching Departments...\n`)
  const {printTable} = require("console-table-printer");
  const db = getDatabase();
  db.query (
    'SELECT * FROM department', function (err, results) {
    printTable(results);
  });
};

// View role database
function viewRoles() {
  console.log(`\nFetching Roles...\n`)
  const {printTable} = require("console-table-printer");
  const db = getDatabase();
  db.query (
    'SELECT * FROM role', function (err, results) {
    printTable(results);
  });
};

// View employee database
function viewEmployees() {
  console.log(`\nFetching Employees...\n`)
  const {printTable} = require("console-table-printer");
  const db = getDatabase();
  db.query (
    'SELECT * FROM employee', function (err, results) {
    printTable(results);
  });
};

function addDepartment() {
  const inquirer = require("inquirer");
  const db = getDatabase();
  inquirer
    .prompt(departmentName) 
    .then((response) => {
      const newDepartment = response.name;
      db.query (`INSERT INTO department (name) VALUES ("${newDepartment}")`);
      console.log(newDepartment + " added to department table.");
      viewDepartments ();
    });
}

const departmentName = [
  {
    type: "input",
    message: "What is the name of the department you want to add?",
    name: "name",
  }
]

module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment};