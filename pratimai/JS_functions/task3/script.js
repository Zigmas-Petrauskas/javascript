"use strict";

// Calculate area of triangle using Heron's formula

function calcArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area.toFixed(2);
}

console.log(calcArea(5, 6, 7));