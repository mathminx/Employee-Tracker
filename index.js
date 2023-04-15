// Import and require mysql2
const mysql = require('mysql2');
// Import and require Inquirer package
const inquirer = require("inquirer");
// Import and require package to print tables in the console
const {printTable} = require("console-table-printer");

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

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to company database.");
  getMenu();
});


function getMenu () {
  inquirer
    .prompt(menu) 
    .then((selection) => {
      const userSelection = selection.selected;
      switch (userSelection) {
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update an Employee's Role":
          updateEmployeeRole();
          break;
        case "Quit":
            db.end();
      };
    });
};

// View department database
function viewDepartments () {
  console.log(`\nFetching Departments...\n`);
  db.query(
    'SELECT * FROM department', function (err, results) {
      if (err)
        throw(err);
      console.log(`\n`);
      printTable(results);
      console.log(`\n`);
      getMenu();
  });
  
};

// View role database
function viewRoles() {
  console.log(`\nFetching Roles...\n`)
  db.query (
    'SELECT role.id, title, salary, department.name AS departmentName FROM role LEFT JOIN department ON role.department_id=department.id;', function (err, results) {
      if (err)
        throw(err);
      console.log(`\n`);
      printTable(results);
      console.log(`\n`);
      getMenu();
  });
};

// View employee database
function viewEmployees() {
  console.log(`\nFetching Employees...\n`)
  db.query (
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, manager.first_name AS managerFirstName, manager.last_name AS managerLastName FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id LEFT JOIN employee AS manager ON manager.id = employee.manager_id', function (err, results) {
      if (err)
        throw(err);
    printTable(results);
    console.log(`\n`);
    getMenu();
  });
};



function addDepartment() {
  inquirer
    .prompt(newDepartment) 
    .then((response) => {
      const name = response.name;
      console.log(name);
      db.query (`INSERT INTO department (name) VALUES ("${name}")`, function (err, results) {
        if (err)
          throw(err);
        console.log("added to department table.");
        viewDepartments();
      });
      
    });
}

function addRole() {
  inquirer
    .prompt(newRole) 
    .then((response) => {
      const title = response.title;
      const salary = response.salary;
      const deptId = response.deptId;
      db.query (`INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${deptId}")`, function (err, results) {
        if (err)
          throw(err);
      console.log("added to role table.");
      viewRoles();
    });
  });
}

function addEmployee() {
  inquirer
    .prompt(newEmployee) 
    .then((response) => {
      const firstName = response.firstName;
      const lastName = response.lastName;
      const roleId = response.roleId;
      if (!response.managerId) {
        db.query (`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", "${roleId}", null)`);
      }
      else {
        const managerId = response.managerId;
        db.query (`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", "${roleId}", "${managerId}")`);
      }
      console.log(firstName + " " + lastName + " added to employee table.");
      viewEmployees ();
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt(changeEmployeeRole) 
    .then((response) => {
      const employeeId = response.employeeId;
      const newRoleId = response.roleId;
      db.query (`UPDATE employee SET role_id=${newRoleId} WHERE id=${employeeId};`);
      console.log("Employee role updated.");
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
    message: "What is the new employee's last name?",
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

const changeEmployeeRole = [
  {
    type: "input",
    message: "What is the employee's id?",
    name: "employeeId",
  },
  {
    type: "input",
    message: "What is the employee's new role id?",
    name: "roleId",
  }
]

// Main Menu
const menu = [
  {
    type: "rawlist",
    message: "What would you like to do?",
    name: "selected",
    choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee's Role", "Quit"],
  }
];