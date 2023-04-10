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
    .prompt(newDepartment) 
    .then((response) => {
      const name = response.name;
      console.log(name);
      db.query (`INSERT INTO department (name) VALUES ("${name}")`);
      console.log(name + " added to department table.");
      viewDepartments();
    });
}

function addRole() {
  const inquirer = require("inquirer");
  const db = getDatabase();
  inquirer
    .prompt(newRole) 
    .then((response) => {
      const title = response.title;
      const salary = response.salary;
      const deptId = response.deptId;
      db.query (`INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${deptId}")`);
      console.log(title + " added to role table.");
      viewRoles ();
    });
}

function addEmployee() {
  const inquirer = require("inquirer");
  const db = getDatabase();
  inquirer
    .prompt(newEmployee) 
    .then((response) => {
      const firstName = response.firstName;
      const lastName = response.lastName;
      const roleId = response.roleId;
      const managerId = response.managerId;
      db.query (`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", "${roleId}", "${managerId}")`);
      console.log(firstName + " " + lastName + " added to employee table.");
      viewEmployees ();
    });
}

const newDepartment = [
  {
    type: "input",
    message: "What is the name of the department you want to add?",
    name: "name",
  }
]

const newRole = [
  {
    type: "input",
    message: "What is the job title for the role you want to add?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the salary for the role?",
    name: "salary",
  },
  {
    type: "input",
    message: "What is the department id for the role?",
    name: "deptId",
  }
]

const newEmployee = [
  {
    type: "input",
    message: "What is the new employee's first name?",
    name: "firstName",
  },
  {
    type: "input",
    message: "What is the the new employee's last name?",
    name: "lastName",
  },
  {
    type: "input",
    message: "What is the id of the new employee's role?",
    name: "roleId",
  },
  {
    type: "input",
    message: "What is the id of the new employee's manager?",
    name: "managerId",
  }
]

module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee};