"use strict";

// Parašykite programą, kuri apskaičiuotų trapecijos plotą, kai žinomi ilgesniojo pagrindo, trumpesniojo pagrindo ir aukštinės ilgiai.
let longerBase = +prompt("Trapecijos ilgesniojo pagrindo ilgis:"); // 5
let shorterBase = +prompt("Trapecijos trumpesniojo pagrindo ilgis:"); // 3
let height = +prompt("Trapecijos aukštinės ilgis:"); // 4

// Apskaičiuojame trapecijos plotą naudodami formulę: A = ((a + b) / 2) * h
let area = ((longerBase + shorterBase) / 2) * height;

// Išvedame rezultatą
console.log("Trapecijos plotas: " + area);