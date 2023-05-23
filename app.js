let addBtn = document.getElementById('submit-button');
let moneyInput = document.getElementById('money');
let categoryInput = document.getElementById('category');
let dateInput = document.getElementById('date');
let accountTypeInput = document.getElementById('account');
let noteInput = document.getElementById('note');
let errorMessage = document.getElementById("error-message");
let table = document.getElementById('table').getElementsByTagName('tbody')[0];



// Click submit button event
addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  console.log("Submit button clicked");

  transactionValidation();
  resetForm(); 

});


// Function validate data
let transactionValidation = () => {
  if ( moneyInput.value === "" ) {
      errorMessage.innerHTML = "Please fill all the field";
      console.log("Failure");
     } else {
      errorMessage.innerHTML = "";
      console.log("Success");
      acceptDate();
     }
};

// Function to add data to table
let acceptDate = () => {
  // Get the values from the form inputs
  let money = moneyInput.value;
  let category = categoryInput.value;
  let date = dateInput.value;
  let account = accountTypeInput.value;
  let note = noteInput.value;

  // Create a new row in the table
  let newRow = table.insertRow(0);

  // Assign variable's space to the cell
  let accountCell = newRow.insertCell();
  let moneyCell = newRow.insertCell();
  let dateCell = newRow.insertCell();
  let categoryCell = newRow.insertCell();
  let noteCell = newRow.insertCell();
  let optionCell = newRow.insertCell();

  // Insert value in the cell
  moneyCell.textContent = "$" + money;
  categoryCell.textContent = category;  // Fixed variable name
  dateCell.textContent = date;  // Fixed variable name
  accountCell.textContent = account;  // Fixed variable name
  noteCell.textContent = note;
  optionCell.innerHTML += '<i onClick="editTransaction(this)" class="fas fa-edit"></i> <i onClick="deleteTransaction(this)" class="fas fa-trash-alt"></i>';
};




// Delete transaction
let deleteTransaction = (e) => {
  e.parentElement.parentElement.remove();
};

// Edit transaction
let editTransaction = (e) => {
  moneyInput.value = e.parentElement.previousElementSibling.innerHTML;
  categoryInput.value = e.parentElement.previousElementSibling.innerHTML;
  dateInput.value = e.parentElement.previousElementSibling.innerHTML;
  accountTypeInput.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};


let resetForm = () => {
  // Reset the form inputs to blank
  moneyInput.value = '';
  categoryInput.value = '';
  dateInput.value = '';
  accountTypeInput.value = '';
  noteInput.value = '';
};
