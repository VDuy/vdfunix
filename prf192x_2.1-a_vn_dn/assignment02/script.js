'use strict';
// Bắt sự kiện Click vào nút "Submit"
let submitBtn = document.getElementById('submit-btn');
// kiểm tra việc Bắt sự kiện Click vào nút "Submit"
if (submitBtn != null) {
    console.log('not click');
    console.log(submitBtn);
}

const petArr = [];
function getInput() {
    // e.preventDefault(); // to stop the form submitting
    let date = new Date();
    let data = {
        idInput: document.getElementById('input-id').value,
        nameInput: document.getElementById('input-name').value,
        ageInput: parseInt(document.getElementById('input-age').value),
        typeInput: document.getElementById('input-type').value,
        weightInput: parseInt(document.getElementById('input-weight').value),
        lengthInput: parseInt(document.getElementById('input-length').value),
        colorInput: document.getElementById('input-color-1').value,
        breedInput: document.getElementById('input-breed').value,
        vaccinatedInput: document.getElementById('input-vaccinated').checked,
        dewormedInput: document.getElementById('input-dewormed').checked,
        sterilizedInput: document.getElementById('input-sterilized').checked,
        fullDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    }

    // Validate dữ liệu hợp lệ
    if (data.idInput == "") {
        alert('Please fill the fields');
        return;
    } else if (data.nameInput == "") {
        alert('Please fill the fields');
        return;
    } else if (data.ageInput == "" || isNaN(data.ageInput)) {
        alert('Please fill the fields');
        return;
    } else if (data.typeInput == "") {
        alert('Please fill the fields');
        return;
    } else if (data.weightInput == "" || isNaN(data.weightInput)) {
        alert('Please fill the fields');
        return;
    } else if (data.lengthInput == "" || isNaN(data.lengthInput)) {
        alert('Please fill the fields');
        return;
    }
    // validate unique id
    else if (petArr.find((item) => item.idInput === data.idInput)) {
        alert("ID must unique");
        return;
    }
    // validate fields
    else if (data.ageInput < 1 || data.ageInput > 15) {
        alert('Age must be between 1 and 15!')
        return;
    }
    else if (data.weightInput < 1 || data.weightInput > 15) {
        alert('Weight must be between 1 and 15')
        return;
    } else if (data.lengthInput < 1 || data.lengthInput > 100) {
        alert('Length must be between 1 and 100!')
        return;
    } else if (data.typeInput == '') {
        alert('Please select Type!');
        return;
    }
    else if (data.breedInput == '') {
        alert('Please select Breed!')
        return;
    }

    petArr.push(data);
    console.log(data);
    console.log(petArr);


    //clear the form for the next entries
    // document.forms[0].reset();
}


// // save to localStorage
// localStorage.setItem('MyPetInput', JSON.stringify(petArr));


function renderTableData() {
    let tableBody = document.getElementById("tbody");
    // document.getElementById("input-id").value = "";
    if (tableBody != null) {
        //xoá dữ liệu cũ trong bảng
        tableBody.innerHTML = "";
        for (let i = 0; i < petArr.length; i++) {
            let pet = petArr[i];
            //tạo dòng
            const row = document.createElement("tr");

            //tạo cột
            const petIdCol = document.createElement("td");
            const petNameCol = document.createElement("td");
            const petAgeCol = document.createElement("td");
            const petTypeCol = document.createElement("td");
            const petWeightCol = document.createElement("td");
            const petLengthCol = document.createElement("td");
            const petBreedCol = document.createElement("td");
            const petColorCol = document.createElement("td");
            const petVaccinatedCol = document.createElement("td");
            const petDewormedCol = document.createElement("td");
            const petSterilizedCol = document.createElement("td");
            const petBMI = document.createElement("td");
            const petFullDateCol = document.createElement("td");
            const petActionCol = document.createElement("td");

            petIdCol.innerHTML = pet.idInput;
            petNameCol.innerHTML = pet.nameInput;
            petAgeCol.innerHTML = pet.ageInput;
            petTypeCol.innerHTML = pet.typeInput;
            petWeightCol.innerHTML = pet.weightInput;
            petLengthCol.innerHTML = pet.lengthInput;
            petBreedCol.innerHTML = pet.breedInput;
            petColorCol.innerHTML = `<i class="bi bi-square-fill" style="color: ${pet.colorInput}"></i>`;
            if (pet.vaccinatedInput == true) {
                petVaccinatedCol.innerHTML = `<i class="bi bi-check-circle-fill" style=color: "green"></i>`;
            } else {
                petVaccinatedCol.innerHTML = `<i class="bi bi-x-circle-fill"style=color: "red"></i>`;
            } if (pet.dewormedInput == true) {
                petDewormedCol.innerHTML = `<i class="bi bi-check-circle-fill" style=color: "green"></i>`;
            } else {
                petDewormedCol.innerHTML = `<i class="bi bi-x-circle-fill"style=color: "red"></i>`;
            } if (pet.sterilizedInput == true) {
                petSterilizedCol.innerHTML = `<i class="bi bi-check-circle-fill" style=color: "green"></i>`;
            } else {
                petSterilizedCol.innerHTML = `<i class="bi bi-x-circle-fill"style=color: "red"></i>`;
            }
            petBMI.innerHTML = '?';
            petFullDateCol.innerHTML = pet.fullDate;
            petActionCol.innerHTML = pet.action;
            petActionCol.innerHTML =
                '<button id="btnDelete" onclick="deletePetBtn(event)" type="button" class="btn btn-danger">Delete</button>';

            //append cột vào dòng
            row.appendChild(petIdCol);
            row.appendChild(petNameCol);
            row.appendChild(petAgeCol);
            row.appendChild(petTypeCol);
            row.appendChild(petWeightCol);
            row.appendChild(petLengthCol);
            row.appendChild(petBreedCol);
            row.appendChild(petColorCol);
            row.appendChild(petVaccinatedCol);
            row.appendChild(petDewormedCol);
            row.appendChild(petSterilizedCol);
            row.appendChild(petBMI);
            row.appendChild(petFullDateCol);
            row.appendChild(petActionCol);

            //append dòng vào bảng
            tableBody.appendChild(row);
        }
    }
}
// Lấy được dữ liệu từ các Input Form
submitBtn.addEventListener('click', function (e) {
    console.log('click Submit button');
    getInput(petArr);
    renderTableData(petArr);

});

//  Xóa một thú cưng
const deleteRow = function (row) {
    document.getElementById("dsTable").deleteRow(row);
}
function deletePetBtn(event) {
    if (confirm("Are you sure?")) {
        deleteRow(event.target.parentNode.parentNode.rowIndex);
    }
}
