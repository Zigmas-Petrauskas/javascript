"use strict";

// numberJoinerWhile

// Sujungiami skaičiai naudojant while ciklą
const numberJoinerWhile = (start, end) => {
    let result = ""; // Pradinis rezultatas
    let current = start; // Pradinis skaičius
    
    // Kartojama kol pasieks pabaigą
    while (current <= end) {
        result += current; // Pridedamas skaičius
        // jei jis nėra paskutinis, pridedamas skirtukas
        if (current < end) {
            result += "_";
        }

        current ++; // einame prie kito skaičiaus
    }

    return result;
}

// parodomas rezultatas
console.log(numberJoinerWhile(1, 10));
console.log(numberJoinerWhile(12, 14));