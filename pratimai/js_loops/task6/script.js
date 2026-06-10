"use strict";

// gcd (didžiausias bendras daliklis)

// Surandamas didžiaisias dviejų skaičių daliklis
const gcd = (a, b) => {
    let didziausiasDaliklis = 1;

    for (let i = 1; i <= Math.min(a, b); i ++) {
        if (a % i === 0 && b % i === 0) {
            didziausiasDaliklis = i;
        }
    }

    return didziausiasDaliklis;
};

console.log(gcd(50, 20));