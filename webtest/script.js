

'use strict';

var clicks = 0;
var petarray = [];
//---TẠO SỰ KIỆN CHO NÚT SUBMIT----//
var submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clicks += 1;
    myFunction();
});

function myFunction() {

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
    const petArr = []

    //----ĐỐI TƯỢNG CẦN INPUT---//
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
    var formattime = data['date'].getUTCDate() + '/' + ((data['date'].getMonth()) + 1) + '/' + data['date'].getFullYear();

    

    //----VALIDATE CÁC DỮ LIỆU TỪ FORM---//
    var idvalue = data['id'];

    function unique(idoutput) {
        var IDed = document.querySelectorAll('#tbody th');
        var output = [];
        IDed.forEach(function (value, index) {
            var innerText = value.innerText;
            output.push(innerText);
        })
        var outerHTML = output.some(function (cour, index) {
            return cour === idoutput
        })
        if (outerHTML) {
            alert('ID must unique!')
            submit = false;
        }
    }
    if (clicks !== 1) {
        unique(idvalue)
    }

    if (data['id'] == "" || data['name'] == "" || data['age'] == "" || data['weight'] == "" ||
        data['length'] == "") {
        alert('Please fill all fields!');
        return;
    };

    if (isNaN(data['age']) || data['age'] < 1 || data['age'] > 15) {
        alert('Age must be between 1 and 15!');
        return;
    };
    if (isNaN(data['weight']) || data['weight'] < 1 || data['weight'] > 15) {
        alert('Weight must be between 1 and 15!');
        return;
    };
    if (isNaN(data['length']) || data['length'] < 1 || data['length'] > 100) {
        alert('Length must be between 1 and 100!');
        return;
    };
    if (data['type'] == 'Select Type') {
        alert('Please select Type!');
        return;
    };
    if (data['breed'] == 'Select Breed') {
        alert('Please select Breed!');
        return;
    };

    //-----CÁC DỮ LIỆU HỢP LỆ =====> XỬ LÝ CÔNG VIỆC----//
    if (submit) {
        DeleteHTML();
        petArr.push(data)
        renderTableData(petArr);
        clear();
        if (data['vaccinated'] && data['dewormed'] && data['sterilized']) {
            petarray.push(petArr);
        }
    };

    //-----NHẬN DỮ LIỆU VÀO BẢNG-----//
    function renderTableData(petArr) {
        var tableBodyEl = document.querySelector('#tbody')
        const row = document.createElement('tr')


        var textarray = petArr.forEach(function (value, index) {
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
                + `<td>${formattime}</td>`
                + `<td><button type="button" class="btn btn-danger" onclick="deletePet(this)">Delete</button>`
                + `</td>`
            tableBodyEl.appendChild(row)
        });
    };
    //-----RESET FORM ĐIỀN----//
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

//-----XOÁ DỮ LIỆU THEO DÒNG, THEO BẢNG---//
function deletePet(ID) {
    var del = confirm('Are you sure');
    if (del == true) {
        ID.parentNode.parentNode.remove();
    };
};

function DeleteHTML() {
    var tableBody = document.querySelector('#tbody')
    if (clicks === 1) {
        tableBody.innerHTML = ''
    };
};

//-----XỬ LÝ SỰ KIỆN HEALTHY CHECK CHO PET----//
let healthCheck = false;
var healthybtn = document.querySelector('#healthy-btn');
healthybtn.setAttribute('onclick', 'healthypet();');
function healthypet() {
    var btnhealthy = document.querySelector('#healthy-btn')
    tablesecond();
    var tb1 = document.querySelector('#tbody');
    var tb2 = document.querySelector('#tbody-2');
    if (!healthCheck) {
        healthCheck = true;
        btnhealthy.innerText = 'Show All Pet';
        tb1.style.display = 'none';
        tb2.style.display = '';
    }
    else {
        healthCheck = false;
        btnhealthy.innerText = 'Show Healthy Pet';
        tb1.style.display = '';
        tb2.style.display = 'none';
    };
};


//-----HIỆN THÚ CƯNG ĐẠT CHUẨN----//
function tablesecond() {
    var date = new Date()
    var formattime = date.getUTCDate() + '/' + ((date.getMonth()) + 1) + '/' + date.getFullYear();
    const tableBody = document.createElement("tbody")
    tableBody.setAttribute("id", "tbody-2")
    tableBody.style.display = 'none';
    document.querySelector(".table").appendChild(tableBody);
    var tableshow = document.querySelector('#tbody-2')
    const row = document.createElement('tr')

    var IDed = document.querySelectorAll('#tbody-2 th');
    var output = [];
    IDed.forEach(function (value, index) {
        var innerText = value.innerText;
        output.push(innerText);
    });

    var show = petarray.forEach(function (value, index) {
        for (var i = 0; i < value.length; i++) {
            var cour = value[i];
            var outerHTML = output.some(function (cours, index) {
                return cours === cour['id']
            })
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
                    + `<td>${formattime}</td>`
                    + `<td><button type="button" class="btn btn-danger" onclick="deletePet(this)">Delete</button>
                         </td>`
                tableshow.appendChild(row)
            };
        };
    });
};

//----XỬ LÝ SỰ KIỆN TÍNH BMI CHO TỪNG CHỦNG----//
var btnBmi = document.querySelector('#bmi-btn');
btnBmi.setAttribute('onclick', 'calBMI();');


function calBMI() {
    var table = document.querySelectorAll("#tbody tr");
    var dataStr = [];
    for (var i = 0; i < table.length; i++) {
        var cal = table[i];
        var weightInput = cal.children[4].textContent;;
        var lengthInput = cal.children[5].textContent;;
        var typeInput = cal.children[3].textContent;
        if (typeInput == 'Dog') {
            const dogBMI = (Number(weightInput.value) * 703) / (Number(lengthInput.value) ^ 2);
            cal.children[11].textContent = dogBMI.toFixed(2);
        };
        if (typeInput == 'Cat') {
            const catBMI = (Number(weightInput.value) * 886) / (Number(lengthInput.value) ^ 2);
            cal.children[11].textContent = catBMI.toFixed(2);
        };
        dataStr.push(cal);
    };
};