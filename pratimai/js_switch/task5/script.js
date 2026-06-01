"use strict";

// Šviesoforo signalai

function trafficLight(color) { 
    switch (color.toLowerCase()) { 
        case "red": // Jei spalva yra "red", grąžina "Stop"
            return "Stop";
        case "yellow":
            return "Prepare to stop";
        case "green":
            return "Go";    
        default:
            return "Unknown light";
    }
}

console.log(trafficLight("red")); // Išveda: "Stop", arba kitą reikšmę.
