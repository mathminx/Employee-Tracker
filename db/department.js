// Import packages needed for this application
const inquirer = require("inquirer");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of the department you want to add?",
    name: "name",
  }
];
