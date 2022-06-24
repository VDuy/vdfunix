
'use strict';
const petBreed = document.getElementById('input-breed');
const petType = document.getElementById('input-type');
const tableBodyElb = document.getElementById("tbody");
const submitBreed = document.getElementById('submit-btn');
var clicks = 0;

renderBreedData(breedArr);

submitBreed.addEventListener('click', function (e) {
    e.preventDefault();
    clicks += 1;

    const data = {
        breed: petBreed.value,
        type: petType.value,
    }
    if (data.breed.trim() === "") {
        alert('Please fill the fields');
        return;
    }
    else if (data.type === "Select Type") {
        alert(" Please pick the type");
        return;
    }

    breedArr.push(data);
    saveToStorage("breedArray", breedArr);
    renderBreedData(breedArr);
    clear();
});


function clear() {
    petBreed.value = '';
    petType.value = 'Select Type';
};
function renderBreedData() {
    tableBodyElb.innerHTML = "";
    breedArr.forEach(function (breedItem, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
    <td scope="col">${index + 1}</td>
    <td scope="col">${breedItem.breed}</td>
    <td scope="col">${breedItem.type}</td>
    <td>
    <button type="button" class="btn btn-danger"
    onClick = "deleteBreed('${breedItem.breed}')" >Delete</button>
    </td>`;
        tableBodyElb.appendChild(row);
    });
}
// renderBreedData();
function deleteBreed(breed) {
    const isConfirm = confirm('Are you sure?');
    if (isConfirm) {
        for (let i = 0; i < breedArr.length; i++) {
            if (breed === breedArr[i].breed) {
                breedArr.splice(i, 1);
                saveToStorage("breedArray", breedArr);
                renderBreedData(breedArr);
                break;
            }
        }
    }
};
