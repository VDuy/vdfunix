'use strict';

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
    if (typeof (localStorage) !== "undefined") {
        var value = localStorage.getItem(key);
        if (value) {
            if (key === "petArray") {
                var petArr = JSON.parse(value);
                return petArr;
            }
        } else {
            return null;
        }
    } else {
        console.log('Sorry, your browser does not support web storage...');
    }
}