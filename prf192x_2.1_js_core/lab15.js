'use strict';

const getCountriesData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
};
getCountriesData('vietnam');



const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};
let currentImg;
createImage('dice/dice-1.png')
    .then(img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('dice/dice-2.png');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));