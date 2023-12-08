// script.js

// Simulated database (in reality, this would be your server/database)
let data = [];

// Function to display data in the container
function displayData() {
  const container = document.getElementById('data-container');
  container.innerHTML = '';

  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('data-item');
    div.innerHTML = `
      <p><strong>Nama:</strong> ${item.nama}</p>
      <p><strong>NIK:</strong> ${item.nik}</p>
      <p><strong>Jenis Kelamin:</strong> ${item.jk}</p>
      <p><strong>Keluhan:</strong> ${item.keluhan}</p>
      <button onclick="editData(${index})">Edit</button>
      <button onclick="deleteData(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

// Function to add data
function addData(event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const nik = document.getElementById('nik').value;
  const jk = document.getElementById('jk').value;
  const keluhan = document.getElementById('keluhan').value;

  if (nama && nik && jk && keluhan) {
    data.push({ nama, nik, jk, keluhan });
    displayData();
    document.getElementById('nama').value = '';
    document.getElementById('nik').value = '';
    document.getElementById('jk').value = '';
    document.getElementById('keluhan').value = '';
  }
}

// Function to edit data
function editData(index) {
  const newNama = prompt('Enter new nama:');
  const newNik = prompt('Enter new nik:');
  const newJk = prompt('Enter new jk:');
  const newKeluhan = prompt('Enter new keluhan:');

  if (newNama && newNik && newJk && newKeluhan) {
    data[index].nama = newNama;
    data[index].nik = newNik;
    data[index].jk = newJk;
    data[index].keluhan = newKeluhan;
    displayData();
  }
}

// Function to delete data
function deleteData(index) {
  data.splice(index, 1);
  displayData();
}

// Event listener for form submission
const form = document.getElementById('crud-form');
form.addEventListener('submit', addData);

// Initial display of data
displayData();
