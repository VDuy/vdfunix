'use strict';

//document.querySelector('show-modal').addEventListener('click', function () { })
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// btnsOpenModal[i] : i=0,1,2; array of class for buttons Show modal 1,2,3

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}
document.addEventListener('keydown', function (e) {
    // keydown: press a key
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
