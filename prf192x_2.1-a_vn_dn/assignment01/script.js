'use strict';
let idInput = document.getElementById('input-id').value;
let nameInput = document.getElementById('input-name').value;
let ageInput = parseInt(document.getElementById('input-age').value);
let typeInput = document.getElementById('input-types').value;
let weightInput = parseInt(document.getElementById('input-weight').value);
let lengthInput = parseInt(document.getElementById('input-length').value);
let colorInput = document.getElementById('input-color-1').value;
let breedInput = document.getElementById('input-type').value;
let vaccinatedInput = document.getElementById('input-vaccinated').checked;
let dewormedInput = document.getElementById('input-dewormed').checked;
let sterilizedInput = document.getElementById('input-sterilized').checked;
let date = new Date();
// Bắt sự kiện Click vào nút "Submit"
let submitBtn = document.getElementById('submit-btn');
// kiểm tra việc Bắt sự kiện Click vào nút "Submit"
if (submitBtn != null) {
    console.log('not click');
    console.log(submitBtn);
}

submitBtn.addEventListener('click', function (e) {
    console.log('click Submit button');
    //  Lấy được dữ liệu từ các Input Form

    // Validate dữ liệu hợp lệ
    if (idInput === "" && nameInput === "" && ageInput === ""
        && typeInput === "" && weightInput === ""
        && lengthInput === "") {
        alert('Please fill the fields');
        return;
    }
    // validate unique id


    // validate fields
    else if (ageInput < 1 && ageInput > 15) {
        alert('Age must be between 1 and 15!')
        return;
    }
    else if (weightInput < 1 && weightInput > 15) {
        alert('Weight must be between 1 and 15')
        return;
    } else if (lengthInput < 1 && lengthInput > 100) {
        alert('Length must be between 1 and 100!')
        return;
    } else if (typeInput == '') {
        alert('Please select Type!');
        return;
    }
    else if (breedInput == '') {
        alert('Please select Breed!')
    }

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

    console.log(data);
    console.log(petArr);
});

// đưa dữ liệu của mảng để hiển thị ra giao diện cho người dùng.
function renderTableData(petArr) {


    //xóa nội dung hiện có của bảng
    const tableBodyEl = document.querySelector("#tbody");
    tableBodyEl.innerHTML = '';




    // duyệt qua các phần tử trong petArr, 
    //  tạo các hàng tương ứng và thêm vào bảng

    const row = document.createElement('tr')
    row.innerHTML = '<HTML code>'
    tableBodyEl.appendChild(row)
};
//  Xóa một thú cưng
function deletePet() {
    confirm('Are you sure?');
}




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
