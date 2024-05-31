// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let employeesArray = [];
  let counter = true;

  // set a variable "counter" as true so the while loop can run infinitely unless the counter variable changes to false as the user declines the confirm while in the loop

  while (counter) {
    let employee = {};

    // prompts are exactly formatted to be perfectly coherent with the mock-up displayed in the module.
    employee.firstName = prompt('Enter First Name');
    employee.lastName = prompt('Enter Last Name');
    employee.salary = parseInt(prompt('Enter Salary'));

    //isNaN is used to determine if the inputted salary is a number or not.
    // an if command is used to ensure that if the inputted salary is not a number (isNaN = true), the inputed salary is automatically determined as 0
    
    if (isNaN(employee.salary) == true) {
        employee.salary = 0;
    }


    employeesArray.push(employee);

    counter = confirm('Do you want to add another employee?');
  }

  return(employeesArray);

}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let entireSalary = 0;

  // we define "Entiresalary", which is the sum of all salary of the listed employees.

  for( let i=0; i<employeesArray.length; i++){
    const obj=employeesArray[i]
    entireSalary += obj.salary
  }

  //Forloop is used in order to find the entire sum of all values in the employeesArray value.

  let averageSalary;
  averageSalary = entireSalary / employeesArray.length;
  console.log(averageSalary)

  // We define the averagesalary as a changing attribute, and use mathematical algorithm to obtain a value.

}




// Select a random employee

const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  const randomInt = Math.floor(Math.random() * employeesArray.length)

  // We obtain a random number in a number between 0 to the length of the employeesArray

  const randomEmployee = employeesArray[randomInt]

  // Random employee is obtained through using the random number we obtained in the array to locate the person.

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our random employee challange!`)
  // Line above was written exactly with how the Console in Mock-up looked like.
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);