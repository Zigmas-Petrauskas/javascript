"use strict";

// numberJoinerFancy

// Sujungiami skaičiai naudojant pasirinktą, skirtuką
const numberJoinerFancy = (start, end, separator = "_") => {
    let result = "";
    for (let i = start; i <= end; i++) {
        result += i;
        if (i < end) {
            result += separator;
        }
    }

    return result;
};

console.log(numberJoinerFancy(1, 3,  "**_BANANAS_**"));