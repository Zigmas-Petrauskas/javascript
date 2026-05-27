"use strict";

// Užduotis: Automobilis važiuoja per tunelį. Koks yra automobilio greitis, jei jis tunelį pravažiuoja per 15 sekundžių? Tunelio ilgis yra 264 metrai.

let v = +prompt("Koks automobilio greitis?"); // 60

// Greitis km/h, reikia konvertuoti į m/s

let tunnelLenght = 264; // tunelio ilgis metrais
let speedMS = v / 3.6; // greitis metrais per sekundę
let time = tunnelLenght / speedMS; // laikas sekundėmis

// Išveskite rezultatą į konsolę, suformatuotą su 2 skaičiais po kablelio, pvz.: "Automobilis tunelį pravažiuos per 15.00 sekundžių."

console.log("Automobilis tunelį pravaz60iuos per", time.toFixed(2), "sekundžių.");