// Need to use MySQL2 package
const mysql = require("mysql2");
// Need inquirer
const inquirer = require("inquirer");
// console.table package needed to print MySQL rows to console
const consTable = require("console.table");

// Connection ID
const connection = mysql.createConnection(
  {
    host: "localhost",
    port: 3301,
    user: "root",
    password: "password", // remember to add your password here. hide it!
    database: "employee_db",
  },
  console.log("Connected to DB!")
);

// Prompt
// Make a list to ask what the user would like to do
// Choices: View all employees, add employee, update employee,
// view all roles, add role, view all departments, add department, and quit
//
function startPrompt() {
  inquirer.prompt([
    {
      type: "list",
      name: "choices",
      choices: [
        "View all employees",
        "Add employee",
        "Update employee",
        "View all roles",
        "Add role",
        "View all departments",
        "Add department",
        "Quit",
      ],
    },
  ]);
}
