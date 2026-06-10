"use strict";

// Sun of range

// Funkcija grąžinanti visų skaičių sumą intervale
const sumOfRange = (leftSummand, rightSummand) => {

    let sum = 0; // Kintamasis sumai kaupti

    // eina per visus skaičius, nuo pradžios iki pabaigos
    for  (let i = leftSummand; i <= rightSummand; i++) {
        sum += i;
    }

    return sum; // grąžinama suma
};

console.log(sumOfRange(1, 5));  // (1 + 2 + 3 + 4 + 5)
console.log(sumOfRange(-3, 4));  