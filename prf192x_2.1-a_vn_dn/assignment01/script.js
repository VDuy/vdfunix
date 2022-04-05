'use strict';
// Bắt sự kiện Click vào nút "Submit"
let submitBtn = document.getElementById('submit-btn');
// kiểm tra việc Bắt sự kiện Click vào nút "Submit"
if (submitBtn != null) {
    console.log('not click');
    console.log(submitBtn);
}
const petArr = [];
function getInput(e) {
    // e.preventDefault(); // to stop the form submitting
    let data = {
        idInput: document.getElementById('input-id').value,
        nameInput: document.getElementById('input-name').value,
        ageInput: parseInt(document.getElementById('input-age').value),
        typeInput: document.getElementById('input-types').value,
        weightInput: parseInt(document.getElementById('input-weight').value),
        lengthInput: parseInt(document.getElementById('input-length').value),
        colorInput: document.getElementById('input-color-1').value,
        breedInput: document.getElementById('input-type').value,
        vaccinatedInput: document.getElementById('input-vaccinated').checked,
        dewormedInput: document.getElementById('input-dewormed').checked,
        sterilizedInput: document.getElementById('input-sterilized').checked,
        date: new Date(),
        // day = date.getDate(),
        // month = date.getMonth(),
        // year = date.getFullYear(),
        // fullDate = day + '-' + month + '-' + year
    }
    // Validate dữ liệu hợp lệ
    if (data.idInput === '' && data.nameInput === '' && data.ageInput === ''
        && data.typeInput === '' && data.weightInput === ''
        && data.lengthInput === '') {
        alert('Please fill the fields');
        return;
    }
    // validate unique id
    // if (data.idInput === )

    // validate fields
    if (data.ageInput < 1 && data.ageInput > 15) {
        alert('Age must be between 1 and 15!')
        return;
    }
    if (data.weightInput < 1 && data.weightInput > 15) {
        alert('Weight must be between 1 and 15')
        return;
    } if (data.lengthInput < 1 && data.lengthInput > 100) {
        alert('Length must be between 1 and 100!')
        return;
    } if (data.typeInput == '') {
        alert('Please select Type!');
        return;
    }
    if (data.breedInput == '') {
        alert('Please select Breed!')
    }
    petArr.push(data);
    console.log(petArr);
    //clear the form for the next entries
    // document.forms[0].reset();
}


// // save to localStorage
// localStorage.setItem('MyPetInput', JSON.stringify(petArr));

function validate(data) {
}

// đưa dữ liệu của mảng để hiển thị ra giao diện cho người dùng.
function renderTableData(petArr) {
    //xóa nội dung hiện có của bảng
    const tableBodyEl = document.querySelector("#tbody");
    tableBodyEl.innerHTML = ``;

    // duyệt qua các phần tử trong petArr, 

    //  tạo các hàng tương ứng và thêm vào bảng
    const row = document.createElement('tr')
    row.innerHTML =
        ` <tr>
            <th th scope="row" > ${petArr.idInput}</th >
            <td>${petArr.nameInput}</td>
            <td>${petArr.ageInput}</td>
            <td>${petArr.typeInput}</td>
            <td>${petArr.weightInput} kg</td>
            <td>${petArr.lengthInput} cm</td>
            <td>${petArr.breedInput}</td>
            <td>
                <i class="bi bi-square-fill" style="color: ${petArr.colorInput}"></i>
            </td>
            <td><i class=${petArr.vaccinatedInput == true ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"}></i></td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td><i class="bi bi-check-circle-fill"></i></td>
            <td>${petArr.date}</td>
            <td><button type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr >`
    tableBodyEl.appendChild(row)
};

submitBtn.addEventListener('click', function (e) {
    console.log('click Submit button');
    let input = getInput(petArr);
    let valid = validate(input);
    let render = renderTableData(petArr);
    // console.log(data);
    // console.log(petArr);
});

//  Xóa một thú cưng
const deletePetBtn = document.getElementsByClassName('btn-danger');
// deletePetBtn.addEventListener('click', function (e) {
//     console.log('delete pet?');

//     if (confirm('Are you sure?') == true) {
//         //const deletePet = function() {
//             console.log('pet delete');
//         //}
//         deletePet();
//     } else {
//         console.log('no delete pet');
//     };
// });

//Hiển thị các thú cưng khỏe mạnh
// click button Show Healthy Pet
let healthyCheck = false;
let healtyPetBtn = document.getElementById('healthy-btn');
healtyPetBtn.addEventListener('click', function (e) {
    console.log('show healthy pet');

});



//Tính toán chỉ số BMI
// nhấn vào nút "Calculate BMI"
let catbmi = function () {
    let cBMI = (weight * 703) / length ^ 2
    return cBMI;
}
let dogbmi = function () {
    let dBMI = (weight * 886) / length ^ 2
    return dBMI;
}
