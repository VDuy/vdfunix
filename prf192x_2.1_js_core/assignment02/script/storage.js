'use strict';

let breedArr = getFromStorage("breedArray");
let petArr = getFromStorage("petArray");
// const breedArr1 = {
//     breed: 'Tappy',
//     type: 'Cat'
// };
// const breedArr2 = {
//     breed: 'Bull',
//     type: 'Dog'
// };
// const pet1 = {
//     id: "001",
//     name: "Tom",
//     age: 3,
//     type: "Cat",
//     breed: "Tappy",
//     weight: 5,
//     lengths: 50,
//     color: "#ff0000",
//     vaccinated: true,
//     dewormed: false,
//     sterilized: false,
// }
// if (!getFromStorage("breedArray")) {
//     saveToStorage("breedArray", [breedArr1, breedArr2])
// }
// if (!getFromStorage("petArray")) {
//     saveToStorage("petArray", [pet1])
// }

function saveToStorage(key, value) {
    if (typeof (localStorage) !== "undefined") {
        if (Array.isArray(value)) {
            var json = JSON.stringify(value);
            localStorage.setItem(key, json)
        }
    } else {
        console.log('Sorry, your browser does not support web storage...');
    }

};
function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));

}