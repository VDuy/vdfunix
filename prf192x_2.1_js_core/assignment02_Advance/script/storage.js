'use strict';
// test data
const breedArr1 = {
    breed: 'Tappy',
    type: 'Cat'
};
const breedArr2 = {
    breed: 'Bull',
    type: 'Dog'
};
const pet1 = {
    id: "P001",
    name: "Tom",
    age: 3,
    type: "Cat",
    breed: "Tappy",
    weight: 5,
    lengths: 50,
    color: "#ff0000",
    vaccinated: true,
    dewormed: false,
    sterilized: false,
}
const pet2 = {
    id: "P002",
    name: "Tyke",
    age: 2,
    type: "Dog",
    breed: "Bull",
    weight: 9,
    lengths: 90,
    color: "#ff0000",
    vaccinated: true,
    dewormed: true,
    sterilized: false,
}
if (!getFromStorage("breedArray")) {
    saveToStorage("breedArray", [breedArr1, breedArr2])
}
if (!getFromStorage("petArray")) {
    saveToStorage("petArray", [pet1, pet2])
}
// get data from localstorage
let breedArr = getFromStorage("breedArray");
let petArr = getFromStorage("petArray");

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