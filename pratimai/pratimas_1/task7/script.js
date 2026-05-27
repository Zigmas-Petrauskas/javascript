"use strict";
// Pakuotojas turi supakuoti puodelius į dėžutes, kuriose telpa po 3 puodelius. 
let cups = +prompt("Puodeliai, kuriuos reikia supakuoti:"); // 7
// Apskaičiuojame, kiek pilnų dėžučių galima supakuoti ir kiek puodelių liks nesupakuota
let fullBoxes = Math.floor(cups / 3); // 1
let remainingCups = cups % 3; // 1
// Išvedame rezultatus
console.log(`Pilnų dėžučių skaičius: ${fullBoxes}`);
console.log(`Nesupakuotų puodelių skaičius: ${remainingCups}`);7