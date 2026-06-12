"use strict";

// factors

// grąžinami visi sklaičiaus dalikliai
const factors = (number) => {
    const factorList = []; // daliklių masyvas

    for (let i = 1; i <= number; i++) { // tikrinami galimi dalikliai
        if (number % i === 0) {
            factorList.push(i);
        }
    }

    return factorList;

};

console.log(factors(42));