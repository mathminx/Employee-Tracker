// Import and require Inquirer package
const inquirer = require("inquirer");
const server = require("./server")
const queries = require("./db/queries");

// Function to initialize the application
async function menu() {
  const db = server.startServer();
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
          queries.viewRoles(db);
          break;
        case "View Employees":
          console.log(userSelection)
          queries.viewEmployees(db);
          break;
        case "Add a Department":
          queries.addDepartment(db);
          break;
        case "Add a Role":
          queries.addRole(db);
          break;
        case "Add a Employee":
          queries.addEmployee(db);
          break;
        case "Update an Employee's Role":
          queries.updateEmployeeRole(db);
          break;
        case "Quit":
          process.exit();
        default:
          text = "That is not a valid choice";
      }
    });
};

// Main Menu
const selections = [
  {
    type: "rawlist",
    message: "Choose an option.",
    name: "selected",
    choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee's Role", "Quit"],
  }
];

menu();

module.exports = {menu, inquirer}