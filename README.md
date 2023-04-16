# Employee-Tracker
This command-line application was built using Node.js, Inquirer, and MySQL. It enables business owners to view and manage the departments, roles, and employees in their companies so that they can organize and plan their businesses.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
  
## Installation
You must have mySQL installed on your machine to run this application. To begin, log into mySQL by inputting `mysql -u root -p`. Press enter, and then input the password `berguss33`. Once you are logged in, create the database by typing `SOURCE db/schema.sql;` and pressing enter. Then type `SOURCE db/seeds.sql;` to add data to the database. You can now quit mySQL.

To run the application, you must first load the dependencies by running `npm install` in the command line, then enter `node index.js` to start the application.

## Usage
When you start the application, you will be presented with a menu (shown above) containing the following options: 

 1) View All Departments: Displays a formatted table showing department names and department ids.  

    ![1](https://user-images.githubusercontent.com/122234007/232345375-a96c5070-bbc8-4715-ae5d-c279943f28c1.png)

 2) View All Roles: Displays a formatted table showing job data, including role id, job title, the salary for that role, and the department to which the role belongs.
  
    ![2](https://user-images.githubusercontent.com/122234007/232345433-5207bcf8-91ee-47da-bda3-d93b77060caa.png)

 3) View All Employees: Displays a formatted table showing employee data, including employee id, full name, job title, salary, departments, and the employee's manager.

    ![3](https://user-images.githubusercontent.com/122234007/232345385-0947a17e-d6b8-4ca9-be75-0517765be687.png)

 4) View All Employees By Manager: Displays a formatted table showing manager names and the names of their direct reports.

    ![4](https://user-images.githubusercontent.com/122234007/232345369-058b70f3-d2dd-41ef-9811-aaf4b6ed9c2f.png)

 5) View All Employees By Department: Displays a formatted table showing department ids and names, and the names of all employees in each department.

    ![5](https://user-images.githubusercontent.com/122234007/232345501-04226bd1-a06a-40bd-8b85-d15d1e5ef65f.png)
    
 6) View A Department's Total Utilised Budget: Prompts you for the id of the department for which you want to see the total utilised budget. If you wish to see all   departments, just press enter. Displays a formatted table showing  the department name(s), and the total utilised budget for the chosen department(s).

    ![6 1](https://user-images.githubusercontent.com/122234007/232345524-cf499edb-bd0f-4993-bd30-72b1c66b4d69.png)
    
    ![6 all](https://user-images.githubusercontent.com/122234007/232345517-8a993bca-fce6-4b22-ad18-316c62b9ae06.png)

 7) Add a Department: Prompts you for the name of the department you want to add, then displays the updated table of departments that includes the new department.

    ![7](https://user-images.githubusercontent.com/122234007/232345537-4ccd00be-1440-4567-b8f6-7bfc880344b7.png)

 8) Add a Role: Prompts you for the name of the role you want to add, the salary for that role, and the the department id for the role, then displays the updated table of roles that includes the new role.

    ![8](https://user-images.githubusercontent.com/122234007/232345547-f73bf039-57f4-48e9-9ecb-b20a42eba468.png)

 9) Add an Employee: Prompts you for the first name, last name, role, and manager for the new employee, then displays the updated table of employees that includes the new employee.

    ![9](https://user-images.githubusercontent.com/122234007/232345553-c1548ab3-4f76-4495-b7f9-21ccabf716f4.png)

 10) Update an Employee's Role: Prompts you for the employee id and the id of the employee's new role, then displays the updated table of employees.

    ![10](https://user-images.githubusercontent.com/122234007/232345561-fcb0b848-725a-4eeb-bbca-cc1b5fbd9b10.png)

 11) Update an Employee's Manager: Prompts you for the employee id and the id of the employee's new manager, then displays the updated table of employees.

    ![11](https://user-images.githubusercontent.com/122234007/232345564-abc06c78-9c86-45db-b8a1-42784991bb07.png)

 12) Update a Role's Salary: Prompts you for the role id and the revised salary for that role, then displays the updated table of roles.

    ![12](https://user-images.githubusercontent.com/122234007/232345575-e088558c-373b-4a60-aa88-deb3a2f13191.png)

 13) Delete a Department: Prompts you for the id of the department you want to delete, then displays the updated table of departments that no longer includes the deleted department.

    ![13](https://user-images.githubusercontent.com/122234007/232345589-b441162e-e953-4de2-94af-a98600bc1651.png)

 14) Delete a Role: Prompts you for the id of the role you want to delete, then displays the updated table of roles that no longer includes the deleted role.

    ![14](https://user-images.githubusercontent.com/122234007/232345595-1d62376a-e1c8-4543-9ee4-46d2fba0b4f7.png)

 15) Delete an Employee: Prompts you for the id of the employee you want to delete, then displays the updated table of employees that no longer includes the deleted employee.

    ![15](https://user-images.githubusercontent.com/122234007/232345615-928df27c-2be6-45ac-942e-77ef42efaa3e.png)

 16) Quit: Quits the application and returns you to the command line.

    ![16](https://user-images.githubusercontent.com/122234007/232345619-22ab1ce3-1bc3-40cb-bee7-78837a5530ba.png)

### Deliverables
* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

## License
This project is licensed under the terms of the MIT license.

![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)

##
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
