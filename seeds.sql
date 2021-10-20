SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- Department Seeds
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Accounting");
INSERT INTO department (name)
VALUE ("Rooms");

-- Employee Seeds
INSERT INTO employee (manager_id, last_name, first_name, role_id)
VALUE (0101, "Chan", "Jackie", 4),
VALUE (0102, "Wilson", "Christine", 4),
VALUE (null, "Parker", "Peter", 4),
VALUE (null, "Brown", "Ken", 4),

      
-- INSERT INTO employee (last_name, first_name, manager_id, role_id)
-- VALUE ("Brown", "Ken", null, 3);
-- INSERT INTO employee (last_name, first_name, manager_id, role_id)
-- VALUE ("Parker", "Peter", null, 2);
-- INSERT INTO employee (last_name, first_name, manager_id, role_id)
-- VALUE ("Morgan", "Dexter", null, 1);
-- INSERT INTO employee (last_name, first_name, manager_id, role_id)
-- VALUE ("Chan", "Jackie", 0101, 4);

-- Employee Role Seeds
INSERT INTO role (title, salary, department_id)
VALUE ("Director", 65000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Manager", 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Engineer", 35000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 42000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Front Office Manager", 52000, 4)