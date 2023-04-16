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

    ![1](https://user-images.githubusercontent.com/122234007/232345080-8b2d41af-9236-4ec1-88c5-2029acb42acc.png)    
    
 2) View All Roles: Displays a formatted table showing job data, including role id, job title, the salary for that role, and the department to which the role belongs.
  
    ![2](https://user-images.githubusercontent.com/122234007/232345149-7418081c-6246-415c-a5f3-32f6929ece6e.png)


 3) View All Employees: Displays a formatted table showing employee data, including employee id, full name, job title, salary, departments, and the employee's manager.

    ![3](https://user-images.githubusercontent.com/122234007/232342345-bc51c3b5-733b-4dba-9802-fe91bbf42a07.jpg)

 4) View All Employees By Manager: Displays a formatted table showing manager names and the names of their direct reports.

    ![4](https://user-images.githubusercontent.com/122234007/232342367-f0e5cf2f-ea11-4f9d-bf1c-baf9827b93b4.jpg)

 5) View All Employees By Department: Displays a formatted table showing department ids and names, and the names of all employees in each department.

    ![5](https://user-images.githubusercontent.com/122234007/232342376-7fa8b95c-2b3e-4876-b86a-baf5cbfedb5d.jpg)

 6) View A Department's Total Utilised Budget: Prompts you for the id of the department for which you want to see the total utilised budget. If you wish to see all   departments, just press enter. Displays a formatted table showing  the department name(s), and the total utilised budget for the chosen department(s).

    ![6](https://user-images.githubusercontent.com/122234007/232342383-8f807eec-813f-49a2-a5f1-52869f9bcef3.jpg)

 7) Add a Department: Prompts you for the name of the department you want to add, then displays the updated table of departments that includes the new department.

    ![7](https://user-images.githubusercontent.com/122234007/232342392-12455576-4970-41e9-b0b2-f985d3fc48f7.jpg)

 8) Add a Role: Prompts you for the name of the role you want to add, the salary for that role, and the the department id for the role, then displays the updated table of roles that includes the new role.

    ![8](https://user-images.githubusercontent.com/122234007/232342403-f86b2d23-9b79-431a-a98e-97a3a7d5b0f8.jpg)

 9) Add an Employee: Prompts you for the first name, last name, role, and manager for the new employee, then displays the updated table of employees that includes the new employee.

    ![9](https://user-images.githubusercontent.com/122234007/232342409-d602c6e2-2f02-400e-8a89-19d1d258897a.jpg)

 10) Update an Employee's Role: Prompts you for the employee id and the id of the employee's new role, then displays the updated table of employees.

    ![image](https://user-images.githubusercontent.com/122234007/232339094-2229cdc4-7db7-4cb6-9be8-dc0d56ddcccd.png)

 11) Update an Employee's Manager: Prompts you for the employee id and the id of the employee's new manager, then displays the updated table of employees.

    ![image](https://user-images.githubusercontent.com/122234007/232339117-f530cb95-0de0-403d-ba26-4e7bb298bc2f.png)


 12) Update a Role's Salary: Prompts you for the role id and the revised salary for that role, then displays the updated table of roles.

    ![image](https://user-images.githubusercontent.com/122234007/232339130-f0f6fd5b-0a01-4369-9689-34c7ec32fb17.png)

 13) Delete a Department: Prompts you for the id of the department you want to delete, then displays the updated table of departments that no longer includes the deleted department.

    ![image](https://user-images.githubusercontent.com/122234007/232339143-19e5734c-9f45-4b21-b00d-7eb13b3275aa.png)

 14) Delete a Role: Prompts you for the id of the role you want to delete, then displays the updated table of roles that no longer includes the deleted role.

    ![image](https://user-images.githubusercontent.com/122234007/232339167-9490ae10-b382-4aa5-aa6a-cc5ee44fb66f.png)

 15) Delete an Employee: Prompts you for the id of the employee you want to delete, then displays the updated table of employees that no longer includes the deleted employee.

    ![image](https://user-images.githubusercontent.com/122234007/232339965-6c3e09e2-950a-4e5a-9fb4-08d93c7dd064.png)

 16) Quit: Quits the application and returns you to the command line.

    ![image](https://user-images.githubusercontent.com/122234007/232339201-97b0b837-c307-41d0-a0c2-ca42e5141bcd.png)


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
