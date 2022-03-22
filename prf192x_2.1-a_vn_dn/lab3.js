
let continent = "Asia";
let isIsland = true;
const country = "Vietnam";
let population = 97338580;
const language = "Vietnamese";

// lab3.1
console.log("lab3.1");
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

//lab3.2
console.log("lab3.2");
// promt return string, === strict equality comparison compare both values and type
// let numeNeighbours = prompt('How many neighbour countries does your country have?');

// return promt with number values
// ép kiểu về number
let numeNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numeNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numeNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// lab 3.3 
console.log("lab3.3");
if (language == 'English' && population < 500000 && isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
//lab 3.4
console.log("lab3.4");

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

//lab 3.5
console.log('lab3.5');
const mediumPopulation = 33000000;
console.log(`${country}'s population is ${population > mediumPopulation ? 'above' : 'below'} average `);

//lab 3.6.1
console.log('lab3.6.1');

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
//bonus1
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;

// // bonus2
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;

console.log(`scoreDolphin: ${scoreDolphins} \nscoreKoalas: ${scoreKoalas}`);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 & scoreKoalas >= 100) {
//     console.log('Draw');
// } else {
//     console.log('No one win');
// }
if (scoreDolphins >= 100 && scoreKoalas >= 100) {
    if (scoreDolphins > scoreKoalas) {
        console.log('Dolphins win');
    } else if (scoreKoalas === scoreDolphins) {
        console.log('Draw');
    } else {
        console.log('Koalas win');
    }
} else {
    console.log('No one win');
}
//lab 3.6.2
console.log('lab3.6.2');

let bill = 275;
bill = 40;
bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);