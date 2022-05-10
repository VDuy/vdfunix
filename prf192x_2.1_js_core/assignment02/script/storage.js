'use strict';

function saveToStorage() {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('petArr', JSON.stringify(petArr));
    } else {
        console.log('No Web Storage support.. ');
    }
}

function getFromStorage() {
    if (typeof (Storage) !== "undefined") {
        petArr = localStorage.getItem('petArr') ? JSON.parse(localStorage.getItem('petArr')) : [];
    } else {
        console.log('No Web Storage support.. ');
    }

}