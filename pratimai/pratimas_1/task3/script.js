"use strict";

//Taupyklėje yra monetų po 5ct, 20ct ir 2€. Kiek pinigų yra taupyklėje?

let a = +prompt("Kiek monetų yra po 5ct?");  //5
let b = +prompt("Kiek monetų yra po 20ct?"); //0
let c = +prompt("Kiek monetų yra po 2€?"); //3

// 5ct = 0.05€, 20ct = 0.20€, 2€ = 2.00€

let totalAmount = a * 0.05 + b * 0.20 + c * 2.00;

// Išveskite rezultatą į konsolę, suformatuotą su 2 skaičiais po kablelio, pvz.: "Taupyklėje yra 6.10 €".

console.log("Taupyklėje yra", totalAmount.toFixed(2), "€"); //6.10 €