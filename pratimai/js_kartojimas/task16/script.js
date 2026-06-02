"use strict";

// Arbatos orakulas PRO (function expression)

const teaOracle = function (temp, vejas, arMiegojo) {
    if (temp <10 && !arMiegojo) {
        return "Karšta arbata ptivaloma!"
    } else if (temp > 15 && arMiegojo) {
        return "Gal šalta arbata?"
    } else {
        return "Arbata pagal nuotaiką."
    }
};

console.log(teaOracle(18, 3, true)); 
// console.log(teaOracle(9, 5, false));
// console.log(teaOracle(12, 3, false));