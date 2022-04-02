'use strict';
//lab 12.1
const checkDogs = function (dogJulia, dogKate) {
    //create new array of correct julia array
    const dogsJuliaChecked = dogJulia.slice();
    //console.log(dogJulia.slice(1,4));
    // execute correct condition, remove first and last element of julia array using splice
    dogsJuliaChecked.splice(0, 1);
    dogsJuliaChecked.splice(-1);
    console.log(dogsJuliaChecked);
    // array with new data 
    const dogs = dogsJuliaChecked.concat(dogKate);
    console.log(dogs);
    // log new string
    dogs.forEach((dog, i) => {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} id an aldults, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }

    });
}
let dogJulia = [3, 5, 2, 12, 7];
let dogKate = [4, 1, 15, 8, 3]
checkDogs(dogJulia, dogKate);
console.log('data2');
dogJulia = [9, 16, 6, 8, 3];
dogKate = [10, 5, 6, 1, 4];
checkDogs(dogJulia, dogKate);

//lab 12.2

const calcAverageHumanAge = function (age) {
    // return new array with condition
    const humanAge = age.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAge);
    // filter array
    const adultDog = humanAge.filter(age => age >= 18);
    console.log(adultDog);
    // caculate average
    const average = adultDog.reduce((acc, age) => acc + age, 0) / adultDog.length;
    console.log(average);
    // // function with for loop
    // const calcAverage = function (arr) {
    //     let sum = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //         sum += arr[i];
    //     }
    //     return sum / arr.length;
    // }
    // console.log(calcAverage(adultDog));
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// lab 12.3
// chaining compile all function in one; using arrow function
console.log('chaining');
const calcAverageHumanAge2 = ages =>
    // return new array with condition
    ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));


