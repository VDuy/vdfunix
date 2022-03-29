'use strict';
// Bắt sự kiện Click vào nút "Submit"
submitBtn.addEventListener('click', function (e) {

});

//  Lấy được dữ liệu từ các Input Form
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

//petArr.push(data);


// đưa dữ liệu của mảng để hiển thị ra giao diện cho người dùng.
function renderTableData(petArr) {

};

