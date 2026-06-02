"use strict";

// Dienos sėkmės analizė (arrow function)

const luckCheck = (diena) => {
    if (diena === 13) {
        return "Oi...";
    } else if (diena % 3 === 0) {
        return "Tokiomis dienomis, kaip ši, žmonės laimi loterijose";
    } else if (diena % 2 === 0) {
        return "Rami diena";
    } else {
        return "Normalu";
    };
};

console.log(luckCheck(13));