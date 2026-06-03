"use strict";

// Bandelės

// Kaina a ir b
const a = +prompt("Įveskite kainą a:"); // 1.50
const b = +prompt("Įveskite kainą b:"); // 1.70

// kiekis n1, n2, n3
const n1 = +prompt("Įveskite kiekį:"); // 3
const n2 = +prompt("Įveskite kiekį:"); // 2
const n3 = +prompt("Įveskite kiekį:"); // 1

// Kaina k
const k = +prompt("Įveskite bandelės kaina"); // 1.30 arba 1.60 arba 2.05

let kiekis; // sukuriam kintamajį

// Nustatomie kiek bandelių pirkti
if (k <= a) {
    kiekis = n1; 
} else if (k < b) {
    kiekis = n2;
} else {
    kiekis = n3;
}

// Apskaičiuojama galutinė kaina
const suma = kiekis * k;

console.log(`Už bandeles reikės mokėti: ${suma.toFixed(2)} Eur.`); // išvedamas rezultatas