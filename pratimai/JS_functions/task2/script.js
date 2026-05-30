"use strict";

// Compare BMI
function compareBMI(markMass, markHeight, johnMass, johnHeight) { 
    let markBMI = markMass / ((markHeight / 100) ** 2);
    let johnBMI = johnMass / ((johnHeight / 100) ** 2);

    // Boolen
    let markHigherBMI = markBMI > johnBMI;
    return `Is Mark's BMI higher than John's? ${markHigherBMI}`;
}

console.log(compareBMI(78, 185, 68, 187));