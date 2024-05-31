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
    employee.firstName = prompt('What is the First Name of the employee you are adding?');
    employee.lastName = prompt('What is the Last Name of the employee you are adding?');
    employee.salary = parseInt(prompt('What is the expected salary of this employee?'));
    employeesArray.push(employee);
    counter = confirm('Do you want to add another employee?');
  }

  return(employeesArray);

}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let entireSalary = 0;

  for( let i=0; i<employeesArray.length; i++){
    const obj=employeesArray[i]
    entireSalary += obj.salary
  }

  //Forloop is used in order to find the entire sum of all values in the employeesArray value.

  let averageSalary;
  averageSalary = entireSalary / employeesArray.length;
  console.log(averageSalary)

}




// Select a random employee

const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomInt = Math.floor(Math.random() * employeesArray.length)
  const randomEmployee = employeesArray[randomInt]
  console.log(randomEmployee)
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our random employee challange!`)
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