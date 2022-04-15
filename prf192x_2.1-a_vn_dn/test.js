'use strict';

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

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

{/* <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
<p class="country__row"><span>💰</span>${data.currencies[0].name}</p> */}