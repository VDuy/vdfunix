'use strict';
function saveToStorage() {
    if (localStorage.getItem('data') == null) {
        localStorage.getItem('data', '[]');
    }
    localStorage.setItem('petArr', JSON.stringify(petArr));
}

function getFromStorage() {

}