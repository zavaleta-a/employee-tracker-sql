// Need to use MySQL2 package
const mysql = require("mysql2");
// Need inquirer
const inquirer = require("inquirer");
// console.table package needed to print MySQL rows to console
const consTable = require("console.table");

// Connection ID
const connection = mysql.createConnection({
  host: "localhost",
  port: 3301,
  user: "root",
  password: "password",
  database: "employee_db",
});

// Initial prompt
