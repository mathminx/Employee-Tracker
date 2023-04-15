INSERT INTO department (name)
VALUES ("Executives"),
       ("Finance"),
       ("Sales"),
       ("Human Resources"),
       ("Operations"),
       ("Distribution");

INSERT INTO role (title, salary, department_id)
VALUES ("Regional Manager", 100000, 1),
       ("Senior Accountant", 80000, 2),
       ("Accountant", 70000, 2), 
       ("Sales Manager", 80000, 3),
       ("Sales Representative", 60000, 3), 
       ("Human Resources Representative", 80000, 4),
       ("Quality Control Specialist", 50000, 5),
       ("Supplier Relations Representative", 50000, 5),
       ("Customer Service Representative", 35000, 5),
       ("Receptionist", 35000, 5),
       ("Temporary Employee", 25000, 5);
       ("Warehouse Foreman", 55000, 6),
       ("Warehouse Worker", 40000, 6),
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, null),
       ("Angela", "Martin", 2, 1),
       ("Andy", "Bernard", 3, 1), 
       ("Darryl", "Phillbin", 4, 1),
       ("Toby", "Flenderson", 5, 1),
       ("Creed", "Brattan", 6, 1),
       ("Meredith", "Palmer", 7, 1),
       ("Kelly", "Kapoor", 8, 1),
       ("Pam", "Beesly", 9, 1),
       ("Kevin", "Malone", 11, 2),
       ("Oscar", "Martinez", 11, 2),
       ("Jim", "Halpert", 12, 3),
       ("Dwight", "Schrute", 12, 3),
       ("Phyllis", "Lapin", 12, 3),
       ("Stanley", "Hudson", 12, 3),
       ("Roy", "Anderson", 13, 4),
       ("Jerry", "DiCanio", 13, 4),
       ("Madge", "Madsen", 13, 4),
       ("Lonnie", "Collins", 13, 4),
       ("Ryan", "Howard", 10, 1);



