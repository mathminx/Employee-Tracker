# Employee-Tracker

## Your Task

This command-line application was built to manage a company's employee database, using Node.js, Inquirer, and MySQL.

![image](https://user-images.githubusercontent.com/122234007/232338202-65af23d9-b253-48d8-9d7f-10767cfdda9f.png)


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)

 
## Installation

You must have mySQL installed on your machine to run this application. To begin, log into mySQL by inputting `mysql -u root -p`. Press enter, and then input the password `berguss33`. 

![image](https://user-images.githubusercontent.com/122234007/232338352-2ca1ae55-a550-49c1-bc7d-24f0e48ec5ae.png)


Once you are logged in, create the database by typing `SOURCE db/schema.sql;` and pressing enter. 

![image](https://user-images.githubusercontent.com/122234007/232338389-d122534a-84ba-499e-8a90-64e054ab330f.png)


Then type `SOURCE db/seeds.sql;` to add data to the database. 

![image](https://user-images.githubusercontent.com/122234007/232338413-b92a5894-3462-4fcd-a5db-f8ebbe9065f7.png)


You can now quit mySQL.

![image](https://user-images.githubusercontent.com/122234007/232338448-5f0d5635-8bf0-4faa-b665-693528be6bed.png)


To run the application locally, load dependencies by running `npm install` in the command line, followed by `node index.js` to start the application.

![image](https://user-images.githubusercontent.com/122234007/232338494-d4acdc06-4609-4f9f-ad90-e83fab33caf4.png)

![image](https://user-images.githubusercontent.com/122234007/232338527-8c44d35f-8f28-4b32-9734-8d3ecf0b468f.png)


## Usage

When you start the application, you will be presented with menu containing the following options: 

View All Departments: Displays a formatted table showing department names and department ids.
View All Roles: Displays a formatted table showing job data, including role id, job title, the salary for that role, and the department to which the role belongs.
View All Employees: Displays a formatted table showing employee data, including employee id, full name, job title, salary, departments, and the employee's manager.
View All Employees By Manager: Displays a formatted table showing manager names and the names of their direct reports.
View All Employees By Department: Displays a formatted table showing department ids and names, and the names of all employees in each department.
View A Department's Total Utilised Budget: Prompts you for the id of the department for which you want to see the total utilised budget. If you wish to see all departments, just press enter. Displays a formatted table showing  the department name(s), and the total utilised budget for the chosen department(s).
Add a Department: Prompts you for the name of the department you want to add, then displays the updated table of departments that includes the new department.
Add a Role: Prompts you for the name of the role you want to add, the salary for that role, and the the department id for the role, then displays the updated table of roles that includes the new role.
Add an Employee: Prompts you for the first name, last name, role, and manager for the new employee, then displays the updated table of employees that includes the new employee.
Update an Employee's Role: Prompts you for the employee id and the id of the employee's new role, then displays the updated table of employees.
Update an Employee's Manager: Prompts you for the employee id and the id of the employee's new manager, then displays the updated table of employees.
Update a Role's Salary: Prompts you for the role id and the revised salary for that role, then displays the updated table of roles.
Delete a Department: Prompts you for the id of the department you want to delete, then displays the updated table of departments that no longer includes the deleted department.
Delete a Role: Prompts you for the id of the role you want to delete, then displays the updated table of roles that no longer includes the deleted role.
Delete an Employee: Prompts you for the id of the employee you want to delete, then displays the updated table of employees that no longer includes the deleted employee.
Quit: Quits the application and returns you to the command line.


## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)



Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)



### Deliverables
* Your GitHub repository containing your application code.
* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

    * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

    * Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.


## Review
You are required to submit BOTH of the following for review:
* A walkthrough video demonstrating the functionality of the application.
* The URL of the GitHub repository, with a unique name and a README describing the project.
