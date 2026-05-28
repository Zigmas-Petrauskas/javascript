"use strict";

// Atsitiktinis skaičius

let randomNumber1 = Math.random(); // Sugeneruoja atsitiktinį skaičių nuo 0 (imtinai) iki 1 (neimtinai)
let randomNumber2 = Math.floor(Math.random() * 101); // Sugeneruoja atsitiktinį skaičių nuo 0 (imtinai) iki 100 (imtinai)
let randomNumber3 = Math.floor(Math.random() * 16) + 5; // Sugeneruoja atsitiktinį skaičių nuo 5 (imtinai) iki 20 (imtinai)

console.log("Atsitiktinis skaičius nuo 0 iki 1: " + randomNumber1);
console.log("Atsitiktinis skaičius nuo 0 iki 100: " + randomNumber2);
console.log("Atsitiktinis skaičius nuo 5 iki 20: " + randomNumber3);    