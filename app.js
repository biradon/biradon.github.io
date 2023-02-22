
const addBtn = document.getElementById('submit-button');
const moneyInput = document.getElementById('money');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date');
const accountTypeInput = document.getElementById('account');
const noteInput = document.getElementById('note');
const table = document.getElementById('table').getElementsByTagName('tbody')[0];

addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values from the form inputs
  const money = moneyInput.value;
  const category = categoryInput.value;
  const date = dateInput.value;
  const account = accountTypeInput.value;
  const note = noteInput.value;

  // Create a new row in the table and insert the values into the cells
  const newRow = table.insertRow(-1);
  const accountCell = newRow.insertCell();
  const moneyCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const categoryCell = newRow.insertCell();
  const noteCell = newRow.insertCell();

  moneyCell.textContent = "$" + money;
  categoryCell.textContent = category;  // Fixed variable name
  dateCell.textContent = date;  // Fixed variable name
  accountCell.textContent = account;  // Fixed variable name
  noteCell.textContent = note;

  // Reset the form inputs
  moneyInput.value = '';
  categoryInput.value = '';
  dateInput.value = '';
  accountTypeInput.value = '';
  noteInput.value = '';
});