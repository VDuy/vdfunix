'use strict';

var idInput = document.querySelector('#input-id');
var nameInput = document.querySelector('#input-name');
var ageInput = document.querySelector('#input-age');
var typeInput = document.querySelector('#input-type');
var weightInput = document.querySelector('#input-weight');
var lengthInput = document.querySelector('#input-length');
var colorInput = document.querySelector('#input-color-1');
var breedInput = document.querySelector('#input-breed');
var vaccinatedInput = document.querySelector('#input-vaccinated');
var dewormedInput = document.querySelector('#input-dewormed');
var sterilizedInput = document.querySelector('#input-sterilized');
var date = new Date();
var fullDate = date.getUTCDate() + '/' + ((date.getMonth()) + 1) + '/' + date.getFullYear();

const tableBodyEl = document.getElementById("tbody");
const submitBtn = document.getElementById("submit-btn");
const formEl = document.getElementById("container-form");


renderTableData(petArr);
function renderTableData() {
    tableBodyEl.innerHTML = '';
    petArr.forEach((petItem) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <th scope="row">${petItem.id}</th>
        <td>${petItem.name}</td>
        <td>${petItem.age}</td>
        <td>${petItem.type}</td>
        <td>${petItem.weight} kg</td>
        <td>${petItem.lengths} cm</td>
        <td>${petItem.breed}</td>
        <td><i class="bi bi-square-fill" style="color: ${petItem.color}"></i></td>
        <td><i class="bi ${petItem.vaccinated ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td><i class="bi ${petItem.dewormed ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td><i class="bi ${petItem.sterilized ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td>${fullDate}</td>
        <td>
        <button type="button" 
        onClick = "editPet('${petItem.id}')" class="btn btn-warning">Edit</button>
        </td>`;
        tableBodyEl.appendChild(row);
    });

}

function editPet(id) {
    formEl.classList.remove("hide");
    const pet = petArr.find((petItem) => petItem.id === id);

    idInput.value = id;
    nameInput.value = pet.name;
    ageInput.value = pet.age;
    typeInput.value = pet.type;
    weightInput.value = pet.weight;
    lengthInput.value = pet.lengths;
    colorInput.value = pet.color;
    vaccinatedInput.value = pet.vaccinated;
    dewormedInput.value = pet.dewormed;
    sterilizedInput.value = pet.sterilized;

    renderBreedData();
    breedInput.value = `${pet.breed}`;
}

typeInput.addEventListener("click", renderBreedData);

function renderBreedData() {

    breedInput.innerHTML = "<option>Select Breed</option>";
    const breedDog = breedArr.filter((breedItem) => breedItem.type === "Dog");
    const breedCat = breedArr.filter((breedItem) => breedItem.type === "Cat")

    if (typeInput.value === "Dog") {
        breedDog.forEach(function (breedItem) {
            const option = document.createElement("option");
            option.innerHTML = `${breedItem.breed}`;
            breedInput.appendChild(option);
        });
    }
    if (typeInput.value === "Cat") {
        breedCat.forEach(function (breedItem) {
            const option = document.createElement("option");
            option.innerHTML = `${breedItem.breed}`;
            breedInput.appendChild(option);
        });
    }
}

submitBtn.addEventListener('click', function (e) {

    const data = {
        id: idInput.value,
        name: nameInput.value,
        age: parseInt(ageInput.value),
        type: typeInput.value,
        breed: breedInput.value,
        weight: parseInt(weightInput.value),
        lengths: parseInt(lengthInput.value),
        color: colorInput.value,
        vaccinated: vaccinatedInput.checked,
        dewormed: dewormedInput.checked,
        sterilized: sterilizedInput.checked,
    }

    // Validate data
    if (data.id.trim() === "") {
        alert('Please fill the fields');
        return;
    } else if (data.name === "") {
        alert('Please fill the fields');
        return;
    } else if (data.age === "" || isNaN(data.age)) {
        alert('Please fill the fields');
        return;
    }
    else if (data.weight === "" || isNaN(data.weight)) {
        alert('Please fill the fields');
        return;
    } else if (data.lengths === "" || isNaN(data.lengths)) {
        alert('Please fill the fields');
        return;
    }
    // validate fields
    else if (data.age < 1 || data.age > 15) {
        alert('Age must be between 1 and 15!')
        return;
    }
    else if (data.weight < 1 || data.weight > 15) {
        alert('Weight must be between 1 and 15')
        return;
    } else if (data.lengths < 1 || data.lengths > 100) {
        alert('Length must be between 1 and 100!')
        return;
    } else if (data.type == '') {
        alert('Please select Type!');
        return;
    }
    else if (data.breed == '') {
        alert('Please select Breed!')
        return;
    }
    const index = petArr.findIndex((pet) => pet.id === data.id);
    data.date = petArr[index].date;
    petArr[index] = data;
    // petArr.push(data);
    saveToStorage("petArray", petArr);
    formEl.classList.add("hide");
    renderTableData(petArr);
});
