'use strict';
// click submit form
let submitBtn = document.getElementById('submit-btn');
const petArrChecked = [];

var clicks = 0;
// Lấy được dữ liệu từ các Input Form
submitBtn.addEventListener('click', function (e) {
    // e.preventDefault(); // to stop the form submitting
    e.preventDefault();
    clicks += 1;
    getInput();
});

function getInput() {

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
    var submit = true;
    const petArr = [];
    const data = {
        id: idInput.value,
        name: nameInput.value,
        age: parseInt(ageInput.value),
        type: typeInput.value,
        weight: parseInt(weightInput.value),
        length: parseInt(lengthInput.value),
        color: colorInput.value,
        breed: breedInput.value,
        vaccinated: vaccinatedInput.checked,
        dewormed: dewormedInput.checked,
        sterilized: sterilizedInput.checked,
        date: new Date(),
    }
    var vaccinatedcheck = data['vaccinated'] ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
    var dewormedcheck = data['dewormed'] ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
    var sterilizedcheck = data['sterilized'] ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
    var fullDate = data['date'].getUTCDate() + '/' + ((data['date'].getMonth()) + 1) + '/' + data['date'].getFullYear();

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
    } else if (data.length == "" || isNaN(data.length)) {
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
    if (submit) {
        deleteHTML();
        petArr.push(data)
        renderTableData(petArr);
        clear();
        if (data['vaccinated'] && data['dewormed'] && data['sterilized']) {
            petArrChecked.push(petArr);
        }
    };

    function renderTableData(petArr) {
        var tableBodyEl = document.querySelector('#tbody');
        const row = document.createElement('tr');
        var Array = petArr.forEach(function (value, index) {
            row.innerHTML = `<th scope="row">${value['id']}</th>`
                + `<td>${value['name']}</td>`
                + `<td>${value['age']}</td>`
                + `<td>${value['type']}</td>`
                + `<td>${value['weight']} kg</td>`
                + `<td>${value['length']} cm</td>`
                + `<td>${value['breed']}</td>`
                + `<td><i class="bi bi-square-fill" style="color: ${value['color']}"></i></td>`
                + `<td><i class="${vaccinatedcheck}"></i></td>`
                + `<td><i class="${dewormedcheck}"></i></td>`
                + `<td><i class="${sterilizedcheck}"></i></td>`
                + `<td>?</td>`
                + `<td>${fullDate}</td>`
                + `<td><button type="button" class="btn btn-danger" onclick="deletePetBtn(this)">Delete</button>`
                + `</td>`
            tableBodyEl.appendChild(row);
        });
    };
    //clear the form for the next entries
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
};
// // save to localStorage
// localStorage.setItem('MyPetInput', JSON.stringify(petArr));

//  Xóa một thú cưng
function deletePetBtn(ID) {
    var deletePet = confirm('Are you sure');
    if (deletePet == true) {
        ID.parentNode.parentNode.remove();

        // for (let i = 0; i < petArr.length; i++) {
        //     if (petArr[i].id == id) {
        //         petArr.splice(i, 1);
        //         renderTableData(petArr);
        //     }
        //     console.log(`petArr`);
        // }

    };
   
};
function deleteHTML() {
    var tableBody = document.querySelector('#tbody')
    if (clicks === 1) {
        tableBody.innerHTML = "";
    };
};
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
        tb2.style.display = "";
    }
    else {
        healthyCheck = false;
        btnHealthy.innerText = 'Show Healthy Pet';
        console.log('show healthy pet');
        tb1.style.display = "";
        tb2.style.display = "none";

    };
}

function secondTable() {
    let date = new Date();
    let fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    let tableBody = document.createElement("tbody");
    tableBody.setAttribute("id", "tbody-2");
    tableBody.style.display = "none";
    document.querySelector(".table").appendChild(tableBody);
    let tableshow = document.querySelector("#tbody-2");
    const row = document.createElement('tr');

    let iDed = document.querySelectorAll("#tbody-2 th");
    let output = [];
    iDed.forEach(function (value) {
        let innerText = value.innerText;
        output.push(innerText);

    });
    let show = petArrChecked.forEach(function (value) {
        for (let i = 0; i < value.length; i++) {
            let cour = value[i];
            let outerHTML = output.some(function (cours) {
                return cours === cour['id']
            });
            if (!outerHTML) {
                row.innerHTML = `<th scope="row">${cour['id']}</th>
 `                   + `<td>${cour['name']}</td>`
                    + `<td>${cour['age']}</td>
 `                   + `<td>${cour['type']}</td>
 `                   + `<td>${cour['weight']} kg</td>
 `                   + `<td>${cour['length']} cm</td>`
                    + ` <td>${cour['breed']}</td>
 `                   + `<td>
                         	<i class="bi bi-square-fill" style="color: ${cour['color']}"></i>
                         </td>`
                    + `<td><i class="bi bi-check-circle-fill"></i></td>`
                    + ` <td><i class="bi bi-check-circle-fill"></i></td>`
                    + `<td><i class="bi bi-check-circle-fill"></i></td>`
                    + `<td>?</td>`
                    + `<td>${fullDate}</td>`
                    + `<td><button type="button" class="btn btn-danger" onclick="deletePet(this)">Delete</button>
                         </td>`
                tableshow.appendChild(row);

            };
        };
    });
};

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