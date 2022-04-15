'use strict';
// Bắt sự kiện Click vào nút "Submit"
let submitBtn = document.getElementById('submit-btn');
// // kiểm tra việc Bắt sự kiện Click vào nút "Submit"
// if (submitBtn != null) {
//     console.log('not click');
//     console.log(submitBtn);
// }


function getInput() {
    // e.preventDefault(); // to stop the form submitting
    let date = new Date();
    let data = {
        idInput: document.getElementById('input-id').value,
        nameInput: document.getElementById('input-name').value,
        ageInput: parseInt(document.getElementById('input-age').value),
        // typeInput: document.getElementById('input-types').value,
        weightInput: parseInt(document.getElementById('input-weight').value),
        lengthInput: parseInt(document.getElementById('input-length').value),
        colorInput: document.getElementById('input-color-1').value,
        breedInput: document.getElementById('input-type').value,
        vaccinatedInput: document.getElementById('input-vaccinated').checked,
        dewormedInput: document.getElementById('input-dewormed').checked,
        sterilizedInput: document.getElementById('input-sterilized').checked,
        fullDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,

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
    console.log(petArr);

    //clear the form for the next entries
    // document.forms[0].reset();
}
const petArr = [];
// Lấy được dữ liệu từ các Input Form
submitBtn.addEventListener('click', function (e) {
    // console.log('click Submit button');
    getInput(petArr);
    renderTableData();

});

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
                `<button id="btnDelete" type="button" class="btn btn-danger" 
                onclick="deletePetBtn(${pet.idInput})">Delete</button>`;

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



//  Xóa một thú cưng
function deletePetBtn(id) {
    if (confirm("Are you sure?")) {
        for (let i = 0; i < petArr.length; i++) {
            if (petArr[i].idInput == id) {
                petArr.splice(i, 1);
                renderTableData(petArr);
            }
            console.log(petArr);
        }

    }
}

// Hiển thị các thú cưng khỏe mạnh
// click button Show Healthy Pet
let healthyCheck = false;
let healtyPetBtn = document.querySelector('#healthy-btn');
healtyPetBtn.setAttribute('onclick', 'healtyPet()');
function healtyPet() {
    let btnHealthy = document.querySelector('#healthy-btn');
    secondTable();
    let tb1 = document.querySelector("#tbody");
    let tb2 = document.querySelector("#tbody-2");

    if (!healthyCheck) {
        healthyCheck = true;
        btnHealthy.innerText = 'Show All Pet';
        console.log('show all pet');
        tb1.style.display = "none";
        tb2.style.display = " ";
    }
    else {
        healthyCheck = false;
        btnHealthy.innerText = 'Show Healthy Pet';
        console.log('show healthy pet');
        tb1.style.display = " ";
        tb2.style.display = "none";

    };
}

// show healthy pet in table
function secondTable() {
    let date = new Date();
    let formatTime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const tableBody = document.createElement("tbody")
    tableBody.setAttribute("idInput", "tbody-2");
    tableBody.style.display = "none";
    document.querySelector(".table").appendChild(tableBody);
    let tableshow = document.querySelector("#tbody-2")
    const row = document.createElement('tr')

    let iDed = document.querySelectorAll("#tbody-2 th");
    let output = [];
    iDed.forEach(function (value, index) {
        let innerText = value.innerText;
        output.push(innerText);
    });
    let show = petArr.forEach(function (value, index) {
        for (let i = 0; i < value.length; i++) {
            let cour = value[i];
            let outerHTML = output.some(function (cours, index) {
                return cours === cour['idInput']
            })
            if (!outerHTML) {
                row.innerHTML = `<th scope="row">${cour['idInput']}</th>`
                    + `<td>${cour['nameInput']}</td>`
                    + `<td>${cour['ageInput']}</td>`
                    + `<td>${cour['typeInput']}</td>`
                    + `<td>${cour['weightInput']}</td>`
                    + `<td>${cour['lengthInput']}</td>`
                    + `<td>${cour['breedInput']}</td>`
                    + `	<td><i class="bi bi-square-fill" style="color: ${cour['colorInput']}"></i></td>`
                    + `	<td><i class="bi bi-check-circle-fill"></i></td>`
                    + `	<td><i class="bi bi-check-circle-fill"></i></td>`
                    + `	<td><i class="bi bi-check-circle-fill"></i></td>`
                    + `<td>?</td>`
                    + `<td>${formatTime}</td>`
                    + `<td><button id="btnDelete" onclick="deletePetBtn(this)"
                     type="button" class="btn btn-danger">Delete</button> </td>`

                tableshow.appendChild(row)
            };
        };
    });
};
