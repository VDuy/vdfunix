
'use strict';
var petBreed = document.querySelector('#input-breed');
var petType = document.querySelector('#input-type');

let breedArr = [];
var clicks = 0;

let submitBreed = document.getElementById('submit-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        clicks += 1;
        const data = {
            breed: petBreed.value,
            type: petType.value,
        }
        if (breedArr.find((item) => item.breed === data.breed)) {
            alert(" Breed existed");
            return;
        }
        function clear() {
            petBreed.value = '';
            petType.value = '';
        };

        breedArr.push(data);
        saveToStorage("breedArray", breedArr);
        renderTableData(breedArr);
        clear();
    });
const tableBodyEl = document.querySelector("#tbody");
function renderTableData(pets) {
    var pets = getFromStorage("breedArray");
    if (pets == "null") {
        pets = [];
    }
    tableBodyEl.innerHTML = '';
    pets.forEach((pet, index) => {
        const row = document.createElement('tr');
        row.innerHTML = genderRow(pet, index);
        tableBodyEl.appendChild(row);
    });
}
function genderRow(row, index) {
    return `
    <td>${index + 1}</td>
    <td>${row.breed}</td>
    <td>${row.type}</td>
    <td><button id="btn-delete" data-breed-name="${row.breed}" type="button" class="btn btn-danger">Delete</button>
    </td>`
}
renderTableData();
tableBodyEl.addEventListener('click', function (e) {
    if (e.target.id != "btn-delete") return;
    const petBreed = e.target.getAttribute('data-breed-name');
    if (!petBreed) return;
    const isConfirm = confirm('Are you sure?');
    if (!isConfirm) return;
    var breeds = getFromStorage("breedArray");
    if (breeds == "null") {
        breeds = [];
    }
    console.log(breeds);
    breeds.splice(breedArr.findIndex(bre => bre.breed == petBreed), 1);
    saveToStorage("breedArray", breeds);
    renderTableData(breedArr);
});