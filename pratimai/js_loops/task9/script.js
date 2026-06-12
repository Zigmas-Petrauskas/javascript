"use strict";

// makeBox

// sugeneruoja dėžutę

const makeBox = (width, height) => {
    let result = "";

    for (let row = 1 ; row <= height; row++) {
        // pirma arba paskutinė eilutės
        if (row === 1 || row === height) {
            result += "*".repeat(width);
        } else {
            result += "*" + " ".repeat(width - 2) + "*";
        }

        if (row < height) {
            result += "\n";
        }
    }

    return result;
};

console.log(makeBox(6, 4));