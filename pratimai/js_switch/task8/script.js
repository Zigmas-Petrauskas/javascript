"use strict";

// Temperatūros kategorija

function getTemperatureType(temp) {  // funkcija, kuri priima temperatūrą ir grąžina jos kategoriją
    switch (true) {  // naudojame switch su sąlyga true, kad galėtume patikrinti skirtingus temperatūros intervalus
        case temp < 0: 
            return "Freezing";
        case temp < 10:
            return "Cold";
        case temp < 20:
            return "Mild";
        case temp < 30:
            return "Warm";
        default:
            return "Hot";
    }
}

console.log(getTemperatureType(25)); // išvedą pranešimą pagal pateiktą temperatūrą