const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJonh = 1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJonh * heightJonh);
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


if (markHigherBMI) {
    console.log(`Mark BMI ${BMIMark} is heigher than John ${BMIJohn}!`);
} else {
    console.log(`John BMI ${BMIJohn} is heigher than Mark ${BMIMark}!`);
}

