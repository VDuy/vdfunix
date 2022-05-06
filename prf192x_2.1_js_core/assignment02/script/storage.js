'use strict';

function saveToStorage() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('data') == null) {
            localStorage.getItem('data', '[]');
        }
        localStorage.setItem('petArr', JSON.stringify(petArr));
    } else {
        console.log('No Web Storage support.. ');
    }
}

function getFromStorage() {
    if (typeof (Storage) !== "undefined") {
        // petArr = JSON.parse(localStorage.getItem('petArr'));
    } else {
        console.log('No Web Storage support.. ');
    }

}