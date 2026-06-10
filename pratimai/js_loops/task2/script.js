"use strict";

// fizzbuzz

// Sukuriam fizzbuzz eilutė
const fizzbuzz = (number) => {

    let result = ""; // rezultato stringas

    for (let i = 1; i <= number; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            result += "fizzbuzz";
        } else if (i % 3 === 0) {
            result +="fizz";
        } else if (i % 5 === 0) {
            result += "buzz";
        } else {
            result += "."; 
        }
    }

    return result; // Grąžinamas rezultatas

};


console.log(fizzbuzz(3));
console.log(fizzbuzz(15));