"use strict";

// makeSquare

// sugeneruojamas kvadratas iš žvaigždučių
const makeSquare = (size) => {
    let result = "";
 
    for (let row = 0; row < size; row++) { 
        result += "*".repeat(size); // prideda vieną eilutę

        if (row < size - 1) {
            result += "\n";
        }
    }

    return result;
};

console.log(makeSquare(5)); 