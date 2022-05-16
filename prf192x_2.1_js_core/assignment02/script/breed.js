'use strict';
var petBreed = document.querySelector('#input-breed');
var petType = document.querySelector('#input-type');

var tableBodyEl = document.querySelector("#tbody");
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
        }
        breedArr.push(data);
        renderTableData(breedArr);
        clear();
        console.log(breedArr);
    })
function renderTableData(pets) {
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
        <td><button type="button" class="btn btn-danger "
        id="btn-delete" data-id="${row.breed}">Delete</button>
        </td>`

}

tableBodyEl.addEventListener('click', function (e) {
    if (e.target.id != "btn-delete") return;
    const petBreed = e.target.getAttribute('data-id');
    if (!petBreed) return;
    const isConfirm = confirm('Are you sure?');
    if (!isConfirm) return;
    breedArr.splice(breedArr.findIndex(pet => pet.breed == petBreed), 1);
    renderTableData(breedArr);
})
