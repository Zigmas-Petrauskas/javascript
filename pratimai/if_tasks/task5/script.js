"use strict";

let number = +prompt("Įveskite 3 skaitmenų skaičių");

let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let ones = number % 10;

let sum = hundreds ** 3 + tens ** 3 + ones ** 3;

if (sum === number) {
    console.log(true);
} else {
    console.log(false);
}