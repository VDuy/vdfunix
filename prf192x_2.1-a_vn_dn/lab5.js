'use strict';
// lab 5.1
// create object
console.log('lab5.1');

const myCountry = {
    country: 'Vietnam',
    capital: 'Hanoi',
    language: 'Vietnamese',
    population: 97338580,
    neighbours: ['Laos', 'Campodia', ' Myanmar', 'Sweden'],
    //lab 5.3
    describe: function () {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. `
    },
    checkIsland: function () {
        // đúng nếu ko có neighbour, sai nếu ko có
        //this.isIsland = !Boolean(this.neighbours.length);
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}
//lab 5.2 
// dots and bracket notation: . & []
console.log('lab5.2');
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry
    .language}-speaking people, ${myCountry.neighbours
        .length} neighbouring countries and a capital called ${myCountry.capital}. `);

// increase population using object.property
console.log(myCountry.population);
myCountry.population += 2000000;
console.log(myCountry.population);
// decrease population using object['porperty]
myCountry['population'] -= 2000000;
console.log(myCountry.population);
//lab 5.3
console.log('lab5.3');

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry);

// lab 5.4
// for loop
console.log('lab5.4');
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

// lab 5.5
console.log('lab5.5');
const populations = new Array(1231, 423, 242, 124);
const percentages2 = [];
const percentageOfWorld1 = (population) => {
    return population / 7900 * 100;
};
for (let i = 0; i < populations.length; i++) {
  //  variable perc use function to calculate percentage of each value in array populations
    const perc = percentageOfWorld1(populations[i]);
    console.log(perc); // return all value
    percentages2.push(perc); // add value in array[]

} console.log(percentages2);// return array
// Dùng for loop trả về đủ giá trị ứng với mảng population mà ko cần đếm đủ từng giá trị
/* 
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);
 */

//lab 5.6
//loop backward, loop inside loop

console.log('lab5.6');
const listOfNeighbours = new Array(
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
);
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let x = 0; x < listOfNeighbours[i].length; x++)
        console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
}

// lab 5.7 
// while loop
console.log('lab5.7');
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    console.log(perc); // return all value
    percentages3.push(perc); // add value in array[]
    i++;
}
console.log(percentages3);

// lab 5.8.1
const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.96,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
mark.calcBMI();
console.log(mark.bmi);
john.calcBMI();
console.log(john.bmi);

//log the higher
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi}))`)
}
else {
    console.log(`${john.fullname}'s BMI (${john.bmi} is higher than ${mark.fullname}'s (${mark.bmi}))`);
}

// lab 5.8.2 
console.log('lab 5.8.2');

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bill.length; i++) {
    const calcTips = calcTip(bill[i]);
    tips.push(calcTips);
    const calcTotals = bill[i] + tips[i];
    totals.push(calcTotals);
}
console.log(bill, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));

