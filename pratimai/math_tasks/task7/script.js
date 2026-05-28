'use strict';

// Kaina po nuolaidos

let price = +prompt("Įveskite prekės kainą:");
let discount = +prompt("Įveskite nuolaidos procentą:");

let finalPrice = price - (price * discount / 100);

console.log("Prekės kaina po nuolaidos: " + finalPrice.toFixed(2));