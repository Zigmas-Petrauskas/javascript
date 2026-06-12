"use strict";

// gcd (didžiausias bendras daliklis)

// Surandamas didžiaisias dviejų skaičių daliklis
const gcd = (a, b) => {
    let greatestDivizor = 1;

    for (let i = 1; i <= Math.min(a, b); i ++) {
        if (a % i === 0 && b % i === 0) {
            greatestDivizor = i;
        }
    }

    return greatestDivizor;
};

console.log(gcd(50, 20));