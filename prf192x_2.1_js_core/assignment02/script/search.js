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
const findBtn = document.getElementById("find-btn");
const formEl = document.getElementById("container-form");


renderTableData(petArr);

findBtn.addEventListener("click", function () {
    let findPetArr = petArr;

    if (idInput.value) {
        findPetArr = findPetArr.filter((petItem) => petItem.id.includes(idInput.value));
    }
    if (nameInput.value) {
        findPetArr = findPetArr.filter((petItem) => petItem.name.includes(nameInput.value));
    }
    if (typeInput.value !== "Select Type") {
        findPetArr = findPetArr.filter((petItem) => petItem.type === typeInput.value);
    }
    if (breedInput.value !== "Select Breed") {
        findPetArr = findPetArr.filter((petItem) => petItem.breed === breedInput.value);
    }
    if (vaccinatedInput.value === true) {
        findPetArr = findPetArr.filter((petItem) => petItem.vaccinated === true);
    }
    if (dewormedInput.value === true) {
        findPetArr = findPetArr.filter((petItem) => petItem.dewormed === true);
    }
    if (sterilizedInput.value === true) {
        findPetArr = findPetArr.filter((petItem) => petItem.sterilized === true);
    }
    renderTableData(findPetArr);
    console.log("filter");
})

function renderTableData(petArr) {
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
      `;
        tableBodyEl.appendChild(row);
        // tableBodyEl.classList.add("hide");
    });
}
renderBreed();
function renderBreed() {
    breedArr.forEach(function (breedItem) {
        const option = document.createElement("option");
        option.innerHTML = `${breedItem.breed}`;
        breedInput.appendChild(option);
    })
}

