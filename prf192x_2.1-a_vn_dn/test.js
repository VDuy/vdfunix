

// đưa dữ liệu của mảng để hiển thị ra giao diện cho người dùng.
// function renderTableData(petArr) {
//     //xóa nội dung hiện có của bảng
//     const tableBodyEl = document.querySelector("#tbody");
//     if (tableBodyEl != null) {
//         tableBodyEl.innerHTML = ``;
//         // duyệt qua các phần tử trong petArr,
//         //  tạo các hàng tương ứng và thêm vào bảng 

//         for (let i = 0; i < petArr.length; i++) {
//             let petInput = petArr[i];
//             const row = document.createElement('tr');
//             row.innerHTML =
//                 ` <tr>
//             <th th scope="row" > ${petInput.idInput}</th >
//             <td>${petInput.nameInput}</td>
//             <td>${petInput.ageInput}</td>
//             <td>${petInput.typeInput}</td>
//             <td>${petInput.weightInput} kg</td>
//             <td>${petInput.lengthInput} cm</td>
//             <td>${petInput.breedInput}</td>
//             <td>
//                 <i class="bi bi-square-fill" style="color: ${petArr.colorInput}"></i>
//             </td>
//             <td><i class=${petInput.vaccinatedInput == true ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"}></i></td>
//             <td><i class=${petInput.dewormedInput == true ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"}></i></td>
//             <td><i class=${petInput.sterilizedInput == true ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"}></i></td>
//             <td>${petInput.fullDate}</td>
//             <td>  '<button id="btnDelete" onclick="deletePetBtn(ev)" type="button" class="btn btn-danger">Delete</button>'
//             </td>
//         </tr >`
//             tableBodyEl.appendChild(row)
//         };
//     }
// }

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML = `We use cookied for improved functionality and analytics.
 <button class="btn btn--close-cookie">Got it!</button>`;
const header = document.querySelector('.header');
header.prepend(message);
// header.append(message.cloneNode(true));
header.before(message);

// delete element

document.querySelector('btn btn--close-cookie').addEventListener('click', function () {
// message.remove();
message.parentElement.removeChild(message);
})
message.remove();