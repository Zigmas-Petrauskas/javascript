"use strict";

//Kiek plytų reikia pastatyti sieną, kurios ilgis 4 metrai, aukštis 3 metrai, jei viena plyta yra 20cm x 10cm ir kainuoja 0.5 €?

let a = +prompt("Sienos ilgis metrais:"); // 4 m
let h = +prompt("Sienos aukštis metrais:"); // 3 m
let k = +prompt("Plytos kaina eurais:"); // 0.5 €

// Plytos matmenys: 20cm x 10cm = 0.2m x 0.1m

let wallArea = a * h; // sienos plotas kvadratiniais metrais
let brickArea = 0.2 * 0.1; // plytos plotas kvadratiniais metrais
let bricksNeeded = wallArea / brickArea; // reikalingos plytos
let totalCost = bricksNeeded * k; // bendra kaina

// Išvedamas rezultatas į konsolę
console.log("Plytų kiekis:", bricksNeeded.toFixed(2));
console.log("Plytos kainuos:", totalCost.toFixed(2), "eurų");
