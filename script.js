// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJonh = 1.76;

// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / (heightJonh * heightJonh);
// console.log(BMIMark, BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


// if (markHigherBMI) {
//     console.log(`Mark BMI ${BMIMark} is heigher than John ${BMIJohn}!`);
// } else {
//     console.log(`John BMI ${BMIJohn} is heigher than Mark ${BMIMark}!`);
//}


// const result = prompt("some question?");
// console.log(result);
// if (result == 24) console.log("hihi");

// let day = "moday";
// if (day === "moday") {

// } else if (day === "tuesday") {

// } else if (day === "wednesday" || day === "thurday") {

// } else if (day === "friday") {

// } else if (day === "saturday" || day === "sunday") {

// }
// else{

// };
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// scoreDolphins = (97 + 112 + 101) / 3;
// scoreKoalas = (109 + 95 + 123) / 3;
// if(scoreDolphins >=100 && scoreKoalas >=100){
//     if (scoreDolphins > scoreKoalas) {
//         console.log('Dolphins win');
//     } else if (scoreKoalas > scoreDolphins) {
//         console.log('Koalas win');
//     } else {
//         console.log('Draw');
//     }
// }else {
//     console.log('No one win');
// }

const myObject = {
    firstName: 'Duy',
    lastName: 'Vu',
    clacAge: function (age) {
        const date = new Date();
        const year = date.getFullYear();
        return year - age;
    },
    coleage: 'Hust',

    getSummary: function () {
        return `${this.firstName} ${this.lastName} is ${this.clacAge(1999)} year olds, and study at ${this.coleage}`
    }
};
console.log(myObject);
myObject.addrandom = 'raddom value'
console.log(myObject);
myObject['random'] = 'radom222'
console.log(myObject.getSummary());

