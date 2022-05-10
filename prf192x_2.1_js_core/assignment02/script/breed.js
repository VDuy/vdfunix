'use strict';
let breedArr = [];
var clicks = 0;
let submitBreed = document.getElementById('submit-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        clicks += 1;
        getInput();
    })

function getInput() {
    var submit = true;
    var petBreed = document.querySelector('#input-breed');
    var petType = document.querySelector('#input-type');
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
    if (submit) {
        breedArr.push(data);
        console.log(breedArr);
        renderTableData(breedArr);
        clear();
    }
    function renderTableData(breedArr) {

        var tableBodyEl = document.querySelector('#tbody');
        const row = document.createElement('tr');
        var Array = breedArr.forEach(function (value, index) {
            row.innerHTML =
                `<th >${index + 1}</th>`
                + `<td>${value['breed']}</td>`
                + `<td>${value['type']}</td>`
                + `<td><button type="button" class="btn btn-danger" onclick="deletePetBtn(this)">Delete</button>`
                + `</td>`
            tableBodyEl.appendChild(row);
        });
    };

}
function deletePetBtn(ID) {
    var deletePet = confirm('Are you sure');
    if (deletePet == true) {
        ID.parentNode.parentNode.remove();
        console.log(breedArr);
    }
}