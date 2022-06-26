'use strict'

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

// change form js object to class instance
function parseUser(userData) {
    const user = new User(userData.firstname, userData.lastname, userData.username,
        userData.password, userData.pageSize, userData.category);
    return user
}
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
// return an array with instance of class User
const userArr = users.map((user) = parseUser(user));

let userActive = getFromStorage("userActive") ? getFromStorage("userActive") : null;

function parseTask(taskData) {
    const task = new User(taskData.task, taskData.owner, taskData.isDone);
    return task;
}
const todos = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
const todoArr = todos.map((todo) => parseTask(todo));

