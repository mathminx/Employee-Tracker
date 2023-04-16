// Import and require mysql2
const mysql = require('mysql2');
// Import and require Inquirer package
const inquirer = require("inquirer");
// Import and require package to print tables in the console
const {printTable} = require("console-table-printer");

// Connect to mySQL and the company database
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

// Display the menu to the user
function getMenu () {
  inquirer
    .prompt(menu) 
    .then((selection) => {
      const userSelection = selection.selected;
      switch (userSelection) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "View all employees by manager":
          viewEmployeesByManager();
          break;
        case "View all employees by department":
          viewEmployeesByDepartment()
          break;
        case "View a department's total utilised budget":
          viewDepartmentBudget();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee's role":
          updateEmployeeRole();
          break;
        case "Update an employee's manager":
          updateEmployeeManager();
          break;  
        case "Update a role's salary":
          updateRoleSalary();
          break;  
        case "Delete a department":
          deleteDepartment();
          break;
        case "Delete a role":
          deleteRole();
          break;
        case "Delete an employee":
          deleteEmployee();
          break;     
        case "Quit":
          console.log("Goodbye.");
          db.end();
      };
    });
};

// 1. View all departments
function viewDepartments () {
  console.log(`\nFetching Departments...\n`);
  db.query(
    'SELECT id AS Department_ID, name AS Department_Name FROM department', function (err, results) {
      if (err)
        throw(err);
      printTable(results); 
      console.log(`\n`);
      getMenu();
  });
};

// 2. View all roles
function viewRoles() {
  console.log(`\nFetching Roles...\n`)
  db.query (
    'SELECT role.id AS Role_ID, title AS Title, FORMAT(salary, 2) AS Salary, department.name AS Department_Name FROM role LEFT JOIN department ON role.department_id=department.id;', function (err, results) {
      if (err)
        throw(err);
      printTable(results);
      console.log(`\n`);
      getMenu();
  });
};

// 3. View all employees
function viewEmployees() {
  console.log(`\nFetching Employees...\n`)
  db.query (
    'SELECT employee.id AS Employee_ID, CONCAT_WS(" ",employee.first_name, employee.last_name) AS Employee_Name, role.title AS Role, FORMAT(role.salary, 2) AS Salary, department.name AS Department_Name, CONCAT_WS(" ", manager.first_name,  manager.last_name) AS Manager_Name FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id LEFT JOIN employee AS manager ON manager.id = employee.manager_id;', function (err, results) {
      if (err)
        throw(err);
      printTable(results);
      console.log(`\n`);
      getMenu();
  });
};

// 4. View all employees by manager
function viewEmployeesByManager() {
  db.query (
    'SELECT CONCAT_WS(" ", manager.first_name,  manager.last_name) AS Manager_Name, CONCAT_WS(" ",employee.first_name, employee.last_name) AS Employee_Name FROM employee LEFT JOIN employee AS manager ON manager.id = employee.manager_id WHERE employee.manager_id IS NOT NULL GROUP BY manager.last_name, manager.first_name, employee.last_name, employee.first_name ORDER BY manager.last_name, employee.last_name;' , function (err, results) {
      if (err)
        throw(err);
      printTable(results);
      console.log(`\n`);
      getMenu();
  });
};

// 5. View all employees by department
function viewEmployeesByDepartment() {
  db.query (
    'SELECT department.id AS Department_ID, department.name AS Department_Name, CONCAT_WS(" ",employee.first_name, employee.last_name) AS Employee_Name FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id GROUP BY Department_ID, Department_Name, employee.last_name, employee.first_name ORDER BY Department_ID, employee.last_name, employee.first_name;', function (err, results) {
      if (err)
        throw(err);
      printTable(results);
      console.log(`\n`);
      getMenu();
  });
};

// 6. View budget for a department
function viewDepartmentBudget() {
  inquirer
    .prompt(viewDeptBudget) 
    .then((response) => {
      const departmentId = response.id;
      if (!departmentId) {
        db.query (
          `SELECT name AS Department_Name, SUM(salary) AS Total_Utilised_Budget FROM employee LEFT JOIN role ON role.id = employee.role_id JOIN department ON department.id = role.department_id GROUP BY department.name ORDER BY department.name;`, 
        function (err, results) {   
          if (err)
            throw(err);
          printTable(results);
          getMenu();
        });
      }
      else {
        db.query (
          `SELECT name AS Department_Name, SUM(salary) AS Total_Utilised_Budget FROM employee LEFT JOIN role ON role.id = employee.role_id JOIN department ON department.id = role.department_id WHERE department.id = ${departmentId} GROUP BY department.name;`,
        function (err, results) {   
          if (err)
            throw(err);
          printTable(results);
          getMenu();
        });
      };
    });
}

// 7. Add a department
function addDepartment() {
  inquirer
    .prompt(newDepartment) 
    .then((response) => {
      const name = response.name;
      db.query (`INSERT INTO department (name) VALUES ("${name}")`, function (err, results) {
        if (err)
          throw(err);
        console.log(`${name} added to department table.`);
        viewDepartments();
      });
    });
}

// 8. Add a role
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
      console.log(`${title} added to role table.`);
      viewRoles();
    });
  });
}

// 9. Add an employee
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
      console.log(`${firstName} ${lastName} added to employee table.`);
      viewEmployees ();
    });
}

// 10. Update an employee's role
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

// 11. Update an employee's manager
function updateEmployeeManager() {
  inquirer
    .prompt(changeEmployeeManager) 
    .then((response) => {
      const employeeId = response.employeeId;
      const newManagerId = response.managerId;
      db.query (`UPDATE employee SET manager_id=${newManagerId} WHERE id=${employeeId};`);
      console.log("Employee manager updated.");
      viewEmployees ();
    });
}

// 12. Update a role's salary
function updateRoleSalary() {
  inquirer
    .prompt(changeRoleSalary) 
    .then((response) => {
      const roleId = response.roleId;
      const newSalary = response.salary;
      db.query (`UPDATE role SET salary=${newSalary} WHERE id=${roleId};`);
      console.log("Salary updated.");
      viewRoles();
    });
}

// 13. Delete a department
function deleteDepartment() {
  inquirer
    .prompt(delDepartment) 
    .then((response) => {
      const id = response.id;
      db.query (`DELETE FROM department WHERE id = ${id}`, function (err, results) {
        if (err)
          throw(err);
        console.log(`Department ${id} deleted.`);
        viewDepartments();
      });
      
    });
}

// 14. Delete a role
function deleteRole() {
  inquirer
    .prompt(delRole) 
    .then((response) => {
      const id = response.id;
      db.query (`DELETE FROM role WHERE id = ${id}`, async function (err, results) {
        if (err)
          throw(err);
      console.log(`Role ${id} deleted.`);
      viewRoles();
    });
  });
}

// 15. Delete an employee
function deleteEmployee() {
  inquirer
    .prompt(delEmployee) 
    .then((response) => {
      const id = response.id;
      db.query (`DELETE FROM employee WHERE id = ${id}`, function (err, results) {
        if (err)
          throw(err);
      console.log(`Employee ${id} deleted.`);
      viewEmployees ();
    });
  });
}

const viewDeptBudget = [
  {
    type: "input",
    message: "What is the id of the department for which you want to see the total utilised budget? (Press enter to see all departments)",
    name: "id",
  }
]
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

const changeEmployeeManager = [
  {
    type: "input",
    message: "What is the employee's id?",
    name: "employeeId",
  },
  {
    type: "input",
    message: "What is the employee's new manager's id?",
    name: "managerId",
  }
]

const changeRoleSalary = [
  {
    type: "input",
    message: "What is the role id?",
    name: "roleId",
  },
  {
    type: "input",
    message: "What is the new salary for this role?",
    name: "salary",
  }
]

const delDepartment = [
  {
    type: "input",
    message: "What is the id of the department you want to delete?",
    name: "id",
  }
]

const delRole = [
  {
    type: "input",
    message: "What is the id of the role you want to delete?",
    name: "id",
  }
]

const delEmployee = [
  {
    type: "input",
    message: "What is the id of the employee you want to delete?",
    name: "id",
  }
]

// Main Menu
const menu = [
  {
    type: "rawlist",
    message: "What would you like to do?",
    name: "selected",
    choices: ["View all departments", "View all roles", "View all employees", "View all employees by manager", "View all employees by department", "View a department's total utilised budget", "Add a department", "Add a role", "Add an employee", "Update an employee's role", "Update an employee's manager", "Update a role's salary", "Delete a department", "Delete a role", "Delete an employee", "Quit"],
  }
];