DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db

-- TO DO: create the following three tables
-- Department table
    -- id: INT PRIMARY KEY
    -- name: VARCHAR (30)
CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR (30)
);
-- Role
    -- id: INT PRIMARY KEY
    -- title: VARCHAR (30)
    -- salary: DECIMAL
    -- department_id: INT
CREATE TABLE role (
    id: INT NOT NULL PRIMARY KEY,
    title: VARCHAR (30),
    salary: DECIMAL,
    department_id: INT
);
-- Employee
    -- id: INT PRIMARY KEY
    -- first_name: VARCHAR (30)
    -- last_name: VARCHAR (30)
    -- role_id: INT
    -- manager_id: INT (null if the employee has no manager)
CREATE TABLE employee (
    id: INT PRIMARY KEY,
    first_name: VARCHAR (30),
    last_name: VARCHAR (30),
    role_id: INT
)
-- Might want to include a seeds.sql
-- Might want to use seperate file that contains functions for performing specific SQL queries you'll need to use.
