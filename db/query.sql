SELECT *
FROM department;

SELECT *
FROM role;

SELECT *
FROM employee;

INSERT INTO department (name)
VALUES (this.name);

INSERT INTO role (title, salary, department_id)
VALUES (this.title, this.salary, this.department_id);

INSERT INTO employee (title)
VALUES (this.first_name, this.last_name, this.role_id, this.manager_id);

UPDATE employee 
SET role_id=this.role_id
WHERE id=this.id;

/* BONUS
UPDATE employee 
SET manager_id=this.manager_id
WHERE id=this.id;

// View employees by manager
SELECT *


// View employees by department
SELECT *


// View employees sorted by last name, then first name


// View employees sorted by salary from highest to lowest


// Delete department


// Delete role


// Delete employee


// Show total salary budget for a department



