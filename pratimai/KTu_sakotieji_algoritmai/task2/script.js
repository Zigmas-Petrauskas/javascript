"use strict";

// Didžioji kūdrinė varlė

const m = +prompt("Kiek sveria viena varlė(g)?"); // m - svoris gramais
const n = +prompt("kiek varlių norima stebėti?"); // n - varlių skaičius
const bendrasSvoris = m * n; // bendras svoris gramais

if (bendrasSvoris > 5000) {
    console.log("Varlių stebėjimui pakanka"); // svoris - 100, kiekis - 1000
} else {
    console.log("Varlių stebėjimui per mažai"); // svoris- 75, kiekis - 50
}