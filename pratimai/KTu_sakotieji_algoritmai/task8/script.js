"use script";

// Skaičiai

// Teigiami skaičiai a, b ir c
const a = +prompt("Įveskite skaičių (a):"); // 5, 6, 1
const b = +prompt("Įveskite skaičių (b):"); // 2, 3, 2
const c = +prompt("Įveskite skaičių (c):"); // 3, 7, 5

let atsakymas = "nėra"; // kintamasis

// tikrinama ar yra skaičiaus 3 kartotinis
if (a % 3 === 0) {
    atsakymas = a;
} else if (b % 3 === 0) {
    atsakymas = b;
} else if (c % 3 === 0) {
    atsakymas = c;
}

console.log(`Atsakymas: ${atsakymas}`);  // Parodomas atitinkamas atsakymas