"use strict";

const mostFrequentChar = str => {
    const chars = str.toLowerCase().replaceAll(" ", "");

    const counter = {};

    for (const char of chars) {
        counter[char] = (counter[char] || 0) + 1;
    }

    let maxCount = 0;
    let mostFrequent = "";

    for (const char in counter) {
        if (counter[char] > maxCount) {
            maxCount = counter[char];
            mostFrequent = char;
        }
    }

    return mostFrequent;
};

console.log(mostFrequentChar("Hello world"));