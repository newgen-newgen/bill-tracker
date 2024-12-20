// script.js
document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const month = document.getElementById('month').value;
    const rent = parseFloat(document.getElementById('rent').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const total = rent + electricity;

    // Create a new row in the table
    const tableBody = document.getElementById('bill-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const monthCell = newRow.insertCell(0);
    const rentCell = newRow.insertCell(1);
    const electricityCell = newRow.insertCell(2);
    const totalCell = newRow.insertCell(3);

    monthCell.textContent = month;
    rentCell.textContent = rent.toFixed(2);
    electricityCell.textContent = electricity.toFixed(2);
    totalCell.textContent = total.toFixed(2);

    // Clear the form
    document.getElementById('bill-form').reset();
});
