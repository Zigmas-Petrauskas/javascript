"use strict";
// Parašykite programą, kuri paprašytų įvesti du skaičius. Programa turėtų patikrinti kuris iš jų yra didesnis ir išvesti tą skaičių.
let firstNumber = +prompt("Įveskite pirmą skaičių");
let secondNumber = +prompt("Įveskite antrą skaičių");
// Patikriname kuris skaičius yra didesnis
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}