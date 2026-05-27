"use strict";
// Parašykite programą, kuri paprašytų įvesti plotį ir aukštį. Programa turėtų patikrinti ar plotis yra didesnis už aukštį ir išvesti "Gulščias" arba "Stačias".
let width = +prompt("Įveskite plotį");
let height = +prompt("Įveskite aukštį");
// Patikriname ar plotis yra didesnis už aukštį
if (width > height) {
    console.log("Gulščias");
} else {
    console.log("Stačias");
}   