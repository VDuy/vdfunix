// Lab 2.1
let continent = "Asia";
let isIsland = true;
const country = "Vietnam";
let population = 97338580;
// Lab 2.2
const language = "Vietnamese";

console.log("Kiểm tra biến boolean: " + isIsland);
console.log("Đất nước: " + country);
console.log("Ngôn ngữ: " + language);
//country = "US"
// population = 12212121212
// console.log(country);
// console.log("Khai báo lại giá trị biến dân số: " + population);
// lab2.3
const halfPopulation = population / 2;
console.log("Nửa dân số:" + halfPopulation);
const populationPlus1 = population + 1;
console.log("Tăng dân số thêm 1: " + (population + 1));
const populationOfFinland = 6000000;
console.log("Dân số đông hơn dân Phần Lan: " + (populationPlus1 > populationOfFinland));
const mediumPopulation = 33000000;
console.log("Việt Nam ít dân hơn so với mức trung bình: " + (population < mediumPopulation));

let description1 = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
console.log(description1);

// lab 2.4
let description = `${country} is in ${continent}, and its ${population} people speak ${language} `;
console.log(description);
//lab 2.5
if (population > mediumPopulation) {
    console.log("Vietnam population is above avarage");
} else {
    console.log(`Vietnam's population is ${mediumPopulation - population} below avagare`);
}
// lab 2.6.1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJonh = 1.76;
let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJonh * heightJonh);
console.log(BMIMark, BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log(`Mark BMI (${BMIMark}) is heigher than John (${BMIJohn}) !`);
} else {
    console.log(`John BMI (${BMIJohn}) is heigher than Mark (${BMIMark}) !`);
}
