'use strict';
// lab 4.1
console.log('function');
console.log("lab4.1");

function describeCountry(country, population, capitalCity) {
    const describe = `${country} has ${population} people and its capital city is ${capitalCity}`;
    return describe;
}

const vietnam = describeCountry('Vietnam', 124142314, 'Hanoi');
const japan = describeCountry('Japan', 545145154, 'Tokyo');
const finland = describeCountry('Finland', 4341244, 'Helsinki');

console.log(vietnam);
console.log(japan);
console.log(finland);

//lab 4.2
console.log('lab4.2');
// function declarations
console.log('-function declarations-');
function percentageOfWorld1(population) {
    return population / 7900 * 100;
};
const china = percentageOfWorld1(1441); //1.441 billion people
console.log(`china: ${china}%`);
console.log('call two more countries same way');

// function expressions: can't call function before define it
console.log('-function expressions-');
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const usa = percentageOfWorld2(1543); //1.542 billion people
console.log(`usa: ${usa}%`);

//lab 4.3
console.log('lab4.3');
console.log('arrow function');

const percentageOfWorld3 = population => population / 7900 * 100;
const russia = percentageOfWorld3(983);  // 0.983 billion people 
console.log(`russia: ${russia}%`);

const percentageOfWorld4 = (population, country) => {
    const percent = population / 7900 * 100;
    return `${country}: ${percent}%`;
}
console.log(percentageOfWorld4(123, 'england'));

// lab4.4
//function calling function
console.log('lab 4.4');
console.log('function calling function');

function describePopulation(country, population) {
    const percent = Math.round(percentageOfWorld1(population));
    const describe = `${country} has ${population} million people, which is about ${percent}% of the world`;
    return describe;
};
console.log(describePopulation('france', 544));

//lab 4.5
console.log('array');
console.log('lab 4.5');

// const populations = [1231, 423, 242, 124];
const populations = new Array(1231, 423, 242, 124);
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);

// lab4.6 
console.log('lab 4.6');
console.log('array operations');
// 1
const neighbours = new Array('Laos', 'Campuchia', 'Sweden');
console.log(neighbours);
// 2
// add to the end
//neighbours.push('Utopia');
const utopia = neighbours.push('Utopia');
console.log(utopia);
console.log(neighbours);
// 3
// remove from the end
const pop = neighbours.pop('Utopia');
console.log(pop);
console.log(neighbours);
// 4
// check if exist
//includes using === to compare

console.log((neighbours.includes('Germany') ? 'Include this country' : 'Probably not a central European country :D'));
// 5
// indexOf return position of index or return -1 if not found

// check whether include 'Sweden' then change to 'Republic of Sweden'
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);

// lab 4.7.1
console.log('lab4.7.1');
//narrow function calc avarage
const calcAverage = (a, b, c) => (a + b + c) / 3;
// Dữ liệu 1: Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm.
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins);
console.log(avgKoalas);
//check score whether winner score >= 2 time losser score
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins(${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No winner`);
    }
}
checkWinner(avgDolphins, avgKoalas);
//Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// lab 4.7.2
console.log('lab4.7.2');
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bill = [125, 555, 44];
console.log(bill);
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[bill.length - 1])];
console.log(tips);
const total = [bill[0]+tips[0],bill[1]+tips[1],bill[2]+ tips[2]];
console.log(total);