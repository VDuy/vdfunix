'use strict';

const whereAmI = async function (country) {
    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(
    //     res => console.log(res));


    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    
}
whereAmI('vietnam')
console.log('first');