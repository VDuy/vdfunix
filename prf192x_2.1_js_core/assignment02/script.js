'use strict';
const sidebarTitleEl = document.getElementById('sidebar-title');
const sidebarEl = document.getElementById('sidebar');
sidebarTitleEl.addEventListener('click', function () {
    sidebarEl.classList.toggle('active');
});

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

// petArr = [];
let petArrChecked = [];
var clicks = 0;
// click submit form
const tableBodyEl = document.getElementById("tbody");
let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // to stop the form submitting
    clicks += 1;
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
    // validate unique id
    else if (petArr.find((item) => item.id === data.id)) {
        alert("ID must unique");
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
    //clear the form

    petArr.push(data)
    saveToStorage("petArray", petArr);
    renderTableData(petArr);
    clear();
});
function clear() {
    idInput.value = '';
    nameInput.value = '';
    weightInput.value = '';
    ageInput.value = '';
    lengthInput.value = '';
    typeInput.value = '';
    breedInput.value = '';
    colorInput.value = '';
    vaccinatedInput.checked = '';
    dewormedInput.checked = '';
    sterilizedInput.checked = '';
};


renderTableData(petArr);
function renderTableData() {
    tableBodyEl.innerHTML = '';
    petArr.forEach(function (petItem, index) {
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
        <td>?</td>
        <td>${fullDate}</td>
        <td><button type="button" class="btn btn-danger "
        onClick = "deletePet('${petItem.id}')"  >Delete</button>
        </td>`;
        tableBodyEl.appendChild(row);
    });
}
// 
//  delete pet
function deletePet(petId) {
    const isConfirm = confirm('Are you sure?');
    if (!isConfirm) {
        for (let i = 0; i < petArr.length; i++) {
            if (petId === petArr[i].id) {
                petArr.splice(i, 1);
                saveToStorage("petArray", petArr);
                renderTableData(petArr);
                console.log('deletep');
                break;
               
            }
        }
    }
}
// click button Show Healthy Pet
let healthyCheck = false;
let healtyPetBtn = document.querySelector('#healthy-btn');
healtyPetBtn.setAttribute('onclick', 'healtyPet()');
function healtyPet() {
    if (!healthyCheck) {
        healthyCheck = true;
        healtyPetBtn.innerText = 'Show All Pet'
        console.log('show all pet');
        petArrChecked = petArr.filter(
            pet => pet.vaccinated == true && pet.sterilized == true && pet.dewormed == true
        )
        renderTableData(petArrChecked);

    }
    else {
        healthyCheck = false;
        healtyPetBtn.innerText = 'Show Healthy Pet';
        console.log('show healthy pet');
        renderTableData(petArr);

    };
}

// calculate bmi
let bmiPetBtn = document.getElementById('bmi-btn');
bmiPetBtn.setAttribute('onclick', 'calBMI()');
function calBMI() {
    var table = document.querySelectorAll("#tbody tr");
    var dataStr = [];
    for (var i = 0; i < table.length; i++) {
        var cal = table[i];
        var typeInput = cal.children[3].textContent;
        var weightInput = cal.children[4].textContent;
        var lengthInput = cal.children[5].textContent;
        if (typeInput == 'Dog') {
            const dogBMI = (Number(weightInput.value) * 703) / (Number(lengthInput.value) ^ 2);
            cal.children[11].textContent = dogBMI.toFixed(2);
        }
        else if (typeInput == 'Cat') {
            const catBMI = (Number(weightInput.value) * 886) / (Number(lengthInput.value) ^ 2);
            cal.children[11].textContentF = catBMI.toFixed(2);
        }
        dataStr.push(cal);
        console.log('bmi');

    }
};


// show breed

// function breedOption() {
//     const option = document.createElement("option");
//     option.innerHTML = "";
//     breedInput.appendChild(option);
// };

// click Select Type
typeInput.addEventListener("change", function (e) {

    // var breedInput = document.querySelector("#input-breed");
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
})