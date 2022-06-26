'use strict'
// get form data 
const inputFirstName = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnRegister = document.getElementById("btn-submit");

let clicks = 0;
// click Register Button
btnRegister.addEventListener("click", function () {
    e.preventDefault(); // to stop the form submitting
    clicks += 1;

    // create new user
    const user = new User(
        inputFirstName.value,
        inputLastname.value,
        inputUsername.value,
        inputPassword.value
    );

    const isValidate = validate(user);
    if (isValidate) {
        // add user to array, save to localstorage
        userArr.push(user);
        saveToStorage("userArr", userArr);
        // redirect to login form
        window.location.assign('../pages/login.html');
    }
});
//validate user
function validate(user) {
    let isValidate = true;
    if (user.firstname.trim() === "") {
        alert('Please fill the fields');
        isValidate = false;
    } if (user.lastname.trim() === "") {
        alert('Please fill the fields');
        isValidate = false;
    } if (user.username === "") {
        alert('Please fill the fields');
        isValidate = false;
    } if (user.password === "") {
        alert('Please fill the fields');
        isValidate = false;
    } if (inputPasswordConfirm.value == "") {
        alert('Please fill the fields');
        isValidate = false;
    }

    // validate unique username
    if (userArr.find((item) => item.username === user.username)) {
        alert("UserName must unique");
        isValidate = false;
    }
    // validate password
    if (user.password !== inputPasswordConfirm.value) {
        alert("Wrong password, please try again");
        isValidate = false
    }
    if (user.password.length <= 8) {
        alert("password must be at least 8 characters")
        isValidate = false;
    }

    return isValidate;
}
