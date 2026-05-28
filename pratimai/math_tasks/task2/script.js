"use strict";

// Skaičių suapvalinimas

let number = +prompt("Įveskite skaičių su dešimtainėmis dalimis:");

console.log("Suapvalinta iki sveiko skaičiaus: " + Math.round(number));
console.log("Suapvalinta iki mažesnio sveiko skaičiaus: " + Math.floor(number));
console.log("Suapvalinta iki didesnio sveiko skaičiaus: " + Math.ceil(number)); 