'use strict';
// //    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//     const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} people</p>

//     </div>
//   </article>
//   `;
//     //   <p class="country__row"><span>🗣️</span>${data.languages[0].ame}</p>
//     //   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();
//     });
// };

// // const getCountryAndNeighbour = function (country) {
// //     // AJAX call country 1
// //     const request = new XMLHttpRequest();
// //     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //     request.send();

// //     request.addEventListener('load', function () {
// //         const [data] = JSON.parse(this.responseText);
// //         console.log(data);

// //         // Render country 1
// //         renderCountry(data);

// //         // Get neighbour country (2)
// //         const [neighbour] = data.borders;

// //         if (!neighbour) return;

// //         // AJAX call country 2
// //         const request2 = new XMLHttpRequest();
// //         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //         request2.send();

// //         request2.addEventListener('load', function () {
// //             const data2 = JSON.parse(this.responseText);
// //             console.log(data2);

// //             renderCountry(data2, 'neighbour');
// //         });
// //     });
// // };

// // // getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('usa');

// // setTimeout(() => {
// //     console.log('1 second passed');
// //     setTimeout(() => {
// //         console.log('2 seconds passed');
// //         setTimeout(() => {
// //             console.log('3 second passed');
// //             setTimeout(() => {
// //                 console.log('4 second passed');
// //             }, 1000);
// //         }, 1000);
// //     }, 1000);
// // }, 1000);

// const requestPromise = fetch('https://restcountries.com/v3.1/name/vietnam');

// console.log(requestPromise);

// const getCountriesData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
// };
// getCountriesData('vietnam');



// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };
// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function () {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', function () {
//             reject(new Error('Image not found'));
//         });
//     });
// };

// let currentImg;

// createImage('dice/dice-1.png')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
        
//         // return wait(2);
//     })
//     // .then(() => {
//     //     currentImg.style.display = 'none';
//     //     return createImage('dice/dice-2.png');
//     // })
//     // .then(img => {
//     //     currentImg = img;
//     //     console.log('Image 2 loaded');
//     //     return wait(2);
//     // })
//     // .then(() => {
//     //     currentImg.style.display = 'none';
//     // })
//      .catch(err => console.error(err));