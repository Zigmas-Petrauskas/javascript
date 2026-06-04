"use strict";

// Jonuko problema

const variantas = +prompt("Įveskite uždiuoties variantą:");  // sukuriami variantai 1, 2, 3

// Užduoties skaičia a ir b
const a = +prompt("Įveskitę skaičių (a):"); // 5, 5, 2
const b = +prompt("Įveskite skaičių (b):"); // 2, 2, 3

let x; // nežinomas skaičius

// Skaičiuojame pagal formulę
if (variantas === 1) {
    x = a * b + 3;
} else if (variantas === 2) {
    x = a + b;
} else if (variantas === 3) {
    x = a - b;
} else {
    console.log("Neteisingas variantas");
}

console.log(`Atsakymas: x = ${x}`);  // Parodomas atitinkamas atsakymas