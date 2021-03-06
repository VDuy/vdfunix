
'use strict';
const idInput = document.querySelector('#input-id');
const nameInput = document.querySelector('#input-name');
const ageInput = document.querySelector('#input-age');
const typeInput = document.querySelector('#input-type');
const weightInput = document.querySelector('#input-weight');
const lengthInput = document.querySelector('#input-length');
const colorInput = document.querySelector('#input-color-1');
const breedInput = document.querySelector('#input-breed');
const vaccinatedInput = document.querySelector('#input-vaccinated');
const dewormedInput = document.querySelector('#input-dewormed');
const sterilizedInput = document.querySelector('#input-sterilized');
const date = new Date();
const fullDate = date.getUTCDate() + '/' + ((date.getMonth()) + 1) + '/' + date.getFullYear();

const submitBtn = document.getElementById('submit-btn');
const tableBodyEl = document.getElementById("tbody");
let healtyPetBtn = document.getElementById('healthy-btn');

const petArr = [];

let clicks = 0;

// get data from Input Form
submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // to stop the form submitting
    clicks += 1;
    const data = {
        id: idInput.value,
        name: nameInput.value,
        age: parseInt(ageInput.value),
        type: typeInput.value,
        weight: parseInt(weightInput.value),
        lengths: parseInt(lengthInput.value),
        color: colorInput.value,
        breed: breedInput.value,
        vaccinated: vaccinatedInput.checked,
        dewormed: dewormedInput.checked,
        sterilized: sterilizedInput.checked,
        bmi: "?",
    }
    const validate = validateData(data);
    if (validate) {
        petArr.push(data)
        clearInput()
        renderTableData(petArr)
    }
});

function validateData(data) {
    let isValidate = true;
    if (data.id.trim() === "") {
        alert('Please fill the fields');
        isValidate = false;
    } if (data.name.trim() == "") {
        alert('Please fill the fields');
        isValidate = false;
    } if (data.age == "" || isNaN(data.age)) {
        alert('Please fill the fields');
        isValidate = false;
    } if (data.weight == "" || isNaN(data.weight)) {
        alert('Please fill the fields');
        isValidate = false;
    } if (data.lengths == "" || isNaN(data.lengths)) {
        alert('Please fill the fields');
        isValidate = false;
    }
    // validate unique id
    if (petArr.find((item) => item.id === data.id)) {
        alert("ID must unique");
        isValidate = false;
    }
    // validate fields
    if (data.age < 1 || data.age > 15) {
        alert('Age must be between 1 and 15!')
        isValidate = false;
    }
    if (data.weight < 1 || data.weight > 15) {
        alert('Weight must be between 1 and 15')
        isValidate = false;
    }
    if (data.lengths < 1 || data.lengths > 100) {
        alert('Length must be between 1 and 100!')
        isValidate = false;
    }
    if (data.type == '') {
        alert('Please select Type!');
        isValidate = false;
    }
    if (data.breed == '') {
        alert('Please select Breed!')
        isValidate = false;
    }
    return isValidate;
}

function clearInput() {
    idInput.value = ''
    nameInput.value = ''
    weightInput.value = ''
    ageInput.value = ''
    lengthInput.value = ''
    typeInput.value = 'Select Type'
    breedInput.value = 'Select Breed'
    colorInput.value = ''
    vaccinatedInput.checked = false
    dewormedInput.checked = false
    sterilizedInput.checked = false
};


function renderTableData(petArr) {
    tableBodyEl.innerHTML = '';
    for (let i = 0; i < petArr.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <th scope="row">${petArr[i].id}</th>
        <td>${petArr[i].name}</td>
        <td>${petArr[i].age}</td>
        <td>${petArr[i].type}</td>
        <td>${petArr[i].weight} kg</td>
        <td>${petArr[i].lengths} cm</td>
        <td>${petArr[i].breed}</td>
        <td><i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i></td>
        <td><i class="bi ${petArr[i].vaccinated ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td><i class="bi ${petArr[i].dewormed ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td><i class="bi ${petArr[i].sterilized ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td>${petArr[i].bmi}</td>
        <td>${fullDate}</td>
        <td>
        <button type="button" class="btn btn-danger "
       onClick="deletePet('${petArr[i].id}')">Delete</button>
        </td>`;
        tableBodyEl.appendChild(row);
    }
}

// delete pet
const deletePet = (petId) => {
    const isConfirm = confirm('Are you sure?');
    if (isConfirm) {
        // for (let i = 0; i < petArr.length; i++) {
        //     if (petId === petArr[i].id) {
        //         petArr.splice(i, 1);
        //         renderTableData(petArr)
        //     }
        // }
        petArr.splice(petArr.findIndex(pet => pet.id === petId), 1);
        renderTableData(petArr);
    }
}

// show Healthy Pet
let healthyCheck = true;

healtyPetBtn.addEventListener('click', function () {
    if (healthyCheck === true) {
        let petArrChecked = [];
        petArrChecked = petArr[i].filter(
            pet => pet.vaccinated == true && pet.sterilized == true && pet.dewormed == true
        )
        // for (let i = 0; i < petArr.length; i++) {
        //     if (petArr[i].vaccinated && petArr[i].sterilized && petArr[i].dewormed) {
        //         petArrChecked.push(petArr[i]);
        //     }
        // }
        renderTableData(petArrChecked);
        healtyPetBtn.innerText = 'Show All Pet';
        healthyCheck = false;
    }
    else {
        renderTableData(petArr);
        healtyPetBtn.innerText = 'Show Healthy Pet';
        console.log('show healthy pet');
        healthyCheck = true;
    };
}
);
// calculate bmi
let bmiPetBtn = document.getElementById('bmi-btn');
bmiPetBtn.setAttribute('onclick', 'calBMI()');
function calBMI() {
    for (let i = 0; i < petArr.length; i++) {
        petArr[i].bmi = petArr[i].type === "Dog"
            ? ((petArr[i].weight * 703) / petArr[i].length ** 2).toFixed(2)
            : ((petArr[i].weight * 886) / petArr[i].length ** 2).toFixed(2);
    }
    renderTableData(petArr)
};