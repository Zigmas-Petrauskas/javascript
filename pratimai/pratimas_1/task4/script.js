"use strict";

// Automobilis važiuoja per tunelį. Koks yra automobilio greitis, jei jis tunelį pravažiuoja per 15 sekundžių? Tunelio ilgis yra 264 metrai.

let v = +prompt("Koks automobilio greitis?"); // 60

// Greitis km/h, reikia konvertuoti į m/s

let tunnelLenght = 264; // tunelio ilgis metrais
let speedMS = v / 3.6; // greitis metrais per sekundę
let time = tunnelLenght / speedMS; // laikas sekundėmis

// Rezultatas
console.log("Automobilis tunelį pravaz60iuos per", time.toFixed(2), "sekundžių.");