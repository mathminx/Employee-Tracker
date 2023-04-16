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

    ![image](https://user-images.githubusercontent.com/122234007/232338824-208826f5-6cdf-4203-933e-17fb1152ad75.png)

 2) View All Roles: Displays a formatted table showing job data, including role id, job title, the salary for that role, and the department to which the role belongs.

    ![image](https://user-images.githubusercontent.com/122234007/232338858-d4528dd3-20bc-46bb-b4ec-ca19ea2dd231.png)

 3) View All Employees: Displays a formatted table showing employee data, including employee id, full name, job title, salary, departments, and the employee's manager.

    ![image](https://user-images.githubusercontent.com/122234007/232338878-7c3c7a23-c617-4d3b-a1ce-9a2390437af0.png)

 4) View All Employees By Manager: Displays a formatted table showing manager names and the names of their direct reports.

    ![image](https://user-images.githubusercontent.com/122234007/232338899-1ed2ec3f-28ed-428d-a77e-0fbf65269dbe.png)

 5) View All Employees By Department: Displays a formatted table showing department ids and names, and the names of all employees in each department.

    ![image](https://user-images.githubusercontent.com/122234007/232338919-965e741d-3d29-4119-9522-98e39413a49e.png)

 6) View A Department's Total Utilised Budget: Prompts you for the id of the department for which you want to see the total utilised budget. If you wish to see all   departments, just press enter. Displays a formatted table showing  the department name(s), and the total utilised budget for the chosen department(s).

    ![image](https://user-images.githubusercontent.com/122234007/232338950-61fc0db9-eb68-48ca-9760-ec877a2aab05.png)

 7) Add a Department: Prompts you for the name of the department you want to add, then displays the updated table of departments that includes the new department.

    ![image](https://user-images.githubusercontent.com/122234007/232338967-ede1b8eb-807e-4e1d-9037-8712e5fd6112.png)

 8) Add a Role: Prompts you for the name of the role you want to add, the salary for that role, and the the department id for the role, then displays the updated table of roles that includes the new role.

    ![image](https://user-images.githubusercontent.com/122234007/232338989-3a55b750-e857-4951-8c3c-4eec3e7b5e0f.png)

 9) Add an Employee: Prompts you for the first name, last name, role, and manager for the new employee, then displays the updated table of employees that includes the new employee.

    ![image](https://user-images.githubusercontent.com/122234007/232339024-1ec08c81-72ef-48bf-9420-2cb3561dcec2.png)

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

## Mock-Up

The following video shows an example of the application being used from the command line:

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

### Deliverables
* Your GitHub repository containing your application code.
* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

## Review
You are required to submit BOTH of the following for review:
* A walkthrough video demonstrating the functionality of the application.
* The URL of the GitHub repository, with a unique name and a README describing the project.

## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)

##
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
