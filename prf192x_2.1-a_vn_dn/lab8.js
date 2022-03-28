'use strict';

//document.querySelector('show-modal').addEventListener('click', function () { })
const btnOpenModal = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++)
    console.log(btnOpenModal[i].textContent);