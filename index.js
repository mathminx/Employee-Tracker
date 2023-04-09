// Import and require Inquirer package
const inquirer = require("inquirer");
const server = require("./server")
const queries = require("./db/queries");
const consoleTable = require('console.table');

// Function to initialize the application
async function init(db) {
  server.startServer() 
    await Promise.resolve();
  inquirer
    .prompt(selections) 
    .then((selection) => {
      const userSelection = selection.selected;
      switch (userSelection) {
        case "View Departments":
          queries.viewDepartments();
          break;
        case "View Roles":
          console.log(userSelection)
          queries.viewRoles();
          break;
        case "View Employees":
          console.log(userSelection)
          queries.viewEmployees();
          break;
        case "Add a Department":
          console.log(userSelection)
          addDepartment();
          break;
          case "Add a Role":
            console.log(userSelection)
            addRole();
            break;
          case "Add a Employee":
            console.log(userSelection)
            addEmployee();
            break;
          case "Update an Employee's Role":
            updateEmployeeRole();
            break;
          default:
            text = "Looking forward to the Weekend";
      }
    });
};

// Main Menu
const selections = [
  {
    type: "rawlist",
    message: "Choose an option.",
    name: "selected",
    choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee's Role"],
  }
];

init();