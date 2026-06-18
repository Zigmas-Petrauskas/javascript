"use strict";

const temperatures = [18, 25, 30, 10, 28];

const result = temperatures.map(temp => {
    let status;

    if (temp < 15) {
        status = "cold";
    } else if (temp < 25) {
        status = "warm";
    } else {
        status = "hot"
    }

    return {
        temp, status
    };
});

console.log(result);