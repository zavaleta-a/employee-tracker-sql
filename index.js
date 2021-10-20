// Setup
const mysql = require("mysql2");
const inquirer = require("inquirer");
// console.table package needed to print MySQL rows to console
const consTable = require("console.table");
// Sequelize
const Sequelize = require("sequelize");
require("dotenv").config();

// Connection ID
const connection = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password", // remember to add your password here. hide it!
    database: "employee_db",
  },
  console.log("Connected to DB!")
);

// Prompt

// Need to be able to update employee

const startPrompt = () => {
  inquirer
    .prompt([
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
    ])
    .then(function (value) {
      switch (value.choice) {
        case "View all employees?":
          viewAllEmployees();
          break;

        case "View all employees by role?":
          viewAllRoles();
          break;

        case "View all Employees by department?":
          break;

        case "Add employee?":
          addEmployee();
          break;

        case "Add Role?":
          addRole();
          break;

        case "Add department?":
          addDepartment();
          break;

        case "Update employee?":
          updateEmployee();
          break;

        case "Quit":
          connection.end();
          break;
      }
    });
};

// View All Employees
const viewAllEmployees = () => {
  connection.query(
    "SELECT employee.last_name, employee.first_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role_id;"
    (err, res) = () => {
        if (err) throw err 
        console.log ("Error!")
        startPrompt()
    }
    );
};
