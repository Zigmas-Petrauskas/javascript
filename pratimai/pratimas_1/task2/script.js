"use strict";

// 1. Žuvų skaičius akvariume

let a = +prompt("Kiek žuvų yra akvariume?"); // 5
let b = +prompt("Kiek žuvų įdedama kiekvieną dieną?"); // 3
let n = +prompt("Kiek dienų praėjo?"); // 3

// 2. Žuvų skaičius po n dienų

let fishNumber = a + b * n;

// 3. Rezultatai5

console.log("Po", n, "dienų akvariume gyvens:", fishNumber, "žuvų"); // 14