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

const petArr = [];
let petArrChecked = [];
// click submit form
let submitBtn = document.getElementById('submit-btn');
var clicks = 0;

// Lấy được dữ liệu từ các Input Form
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
    }

    // Validate dữ liệu hợp lệ
    if (data.id == "") {
        alert('Please fill the fields');
        return;
    } else if (data.name == "") {
        alert('Please fill the fields');
        return;
    } else if (data.age == "" || isNaN(data.age)) {
        alert('Please fill the fields');
        return;
    }
    else if (data.weight == "" || isNaN(data.weight)) {
        alert('Please fill the fields');
        return;
    } else if (data.lengths == "" || isNaN(data.lengths)) {
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
    } else if (data.length < 1 || data.length > 100) {
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

    petArr.push(data)
    renderTableData(petArr);
    clear();
    saveToStorage();
});

const tableBodyEl = document.getElementById("tbody");
function renderTableData(pets) {
    tableBodyEl.innerHTML = '';
    pets.forEach(pet => {
        const row = document.createElement('tr')
        row.innerHTML = genderRow(pet);
        tableBodyEl.appendChild(row);
    });
}
function genderRow(row) {
    return `
        <th scope="row">${row.id}</th>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.type}</td>
        <td>${row.weight} kg</td>
        <td>${row.lengths} cm</td>
        <td>${row.breed}</td>
        <td><i class="bi bi-square-fill" style="color: ${row.color}"></i></td>
        <td><i class="bi ${row.vaccinated ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td><i class="bi ${row.dewormed ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td><i class="bi ${row.sterilized ? "bi-check-circle-fill" : "bi bi-x-circle-fill"} "></i></td>
        <td>?</td>
        <td>${fullDate}</td>
        <td><button type="button" class="btn btn-danger "
        id="btn-delete" data-id="${row.id}">Delete</button>
        </td>`
}
//  Xóa một thú cưng
tableBodyEl.addEventListener('click', function (e) {
    if (e.target.id != "btn-delete") return;
    const petId = e.target.getAttribute('data-id');
    if (!petId) return;
    const isConfirm = confirm('Are you sure?');
    if (!isConfirm) return;
    petArr.splice(petArr.findIndex(pet => pet.id == petId), 1);
    renderTableData(petArr);
})

// Hiển thị các thú cưng khỏe mạnh
// click button Show Healthy Pet
let healthyCheck = false;
let healtyPetBtn = document.querySelector('#healthy-btn');
healtyPetBtn.setAttribute('onclick', 'healtyPet()');
function healtyPet() {

    if (!healthyCheck) {
        healthyCheck = true;
        healtyPetBtn.innerText = 'Show All Pet'
        console.log('show all pet');
        // for (let i = 0; i < petArr.length; i++) {
        //     if (petArr[i].vaccinated == true && petArr[i].sterilized == true && petArr[i].dewormed == true) {
        //         petArrChecked.push(petArr[i]);
        //     }
        // }
        petArrChecked = petArr.filter(
            pet => pet.vaccinated == true && pet.sterilized == true && pet.dewormed == true
        )
        renderTableData(petArrChecked);
        console.log(petArrChecked);
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
function breedOption() {
    const option = document.createElement('option')
    option.innerHTML = '';
    breedInput.appendChild(option)
};