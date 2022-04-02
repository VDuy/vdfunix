'use strict';
// Bắt sự kiện Click vào nút "Submit"
let submitBtn = document.querySelector('#submit-btn');
// kiểm tra việc Bắt sự kiện Click vào nút "Submit"
if (submitBtn != null) {
    console.log('not click');
    console.log(submitBtn);
    submitBtn.addEventListener('click', submitBtn);
}

submitBtn.addEventListener('click', function (e) {
    console.log('click Submit button');
});

//  Lấy được dữ liệu từ các Input Form
const getInputForm = function () {
    let petId = Number(document.querySelector('#input-id').value);
    let petName = document.querySelector('#input-name').value;
    let petAge = Number(document.querySelector('#input-age').value);
    let petType = document.querySelector('#input-types').value;
    let petWeight = parseInt(document.querySelector('#input-weight').value);
    let petHeight = document.querySelector('#input-length').value;
    let petColor = document.querySelector('#input-color-1').value;
    let petBeed = document.querySelector('#input-').value;
    let petVaccinated = document.querySelector('#input-vaccinated').checked;
    let petDewormed = document.querySelector('#input-dewormed').checked;
    let petSterilized = document.querySelector('#input-sterilized').checked;
    let date = new Date;

    const petArr = []
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

    petArr.push(data);
}

// đưa dữ liệu của mảng để hiển thị ra giao diện cho người dùng.
function renderTableData(petArr) {

};


//xóa nội dung hiện có của bảng
tableBodyEl.innerHTML = '';

//  Xóa một thú cưng
const deletpet = function () {


    // confirm('Are you sure?')
}

// duyệt qua các phần tử trong petArr, 
//  tạo các hàng tương ứng và thêm vào bảng

const row = document.createElement('tr')
row.innerHTML = '<HTML code>'
tableBodyEl.appendChild(row)

//Hiển thị các thú cưng khỏe mạnh
// click button Show Healthy Pet
let healthyCheck = false;


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
