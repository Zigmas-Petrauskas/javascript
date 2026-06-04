"use strict";

// Žiemojantys paukščiai

// Paukšių rušių kiekis
const p1 = +prompt("Pirmos rūšies kiekis:"); // 1000, 5000
const p2 = +prompt("Antros rūšies kiekis:"); // 1500, 3500
const p3 = +prompt("Trečos rūšies kiekis:"); // 1800, 6200

// Apskaičiuojame didžiausą ir mažiausią reikšmes
const didziausias = Math.max(p1, p2, p3);
const maziausias = Math.min(p1, p2, p3);

// Surikiuojama mažėjančia tvarka
let masyvas = [p1, p2, p3];  // sukuriamas masyvas (array)
masyvas.sort((a, b) => b - a);  // surikiuoja masyvo elementus

console.log("Paukščių rūšys pagal kiekį:"); // Parodoma mažėjančia tvarka

for (let kiekis of masyvas) { // for...of ciklas
    console.log(kiekis);
}

// Išvedamas atsakymas
console.log(`Skirtumas tarp didžiausio ir mažiausio kiekio:
    ${didziausias - maziausias}`);

