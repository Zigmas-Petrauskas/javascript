"use strict";

// numberJoinerFor

// Sujungiami skaičai naudojant for 
const numberJoinerFor = (start, end) => {
    let result = "";
    for (let i = start; i <= end; i ++) {
        result += i;
        if (i < end) {
            result += "_";
        }
    }

    return result;
};

console.log(numberJoinerFor(1, 10));