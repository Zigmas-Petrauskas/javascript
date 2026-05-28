"use strict";

// Didžiausias ir mažiausias skaičius

let firstNumber = +prompt("Įveskite pirmąjį skaičių:");
let secondNumber = +prompt("Įveskite antrąjį skaičių:");
let thirdNumber = +prompt("Įveskite trečiąjį skaičių:");

let biggestNumber = Math.max(firstNumber, secondNumber, thirdNumber);
let smallestNumber = Math.min(firstNumber, secondNumber, thirdNumber);

console.log("Didžiausias skaičius: " + biggestNumber);
console.log("Mažiausias skaičius: " + smallestNumber);