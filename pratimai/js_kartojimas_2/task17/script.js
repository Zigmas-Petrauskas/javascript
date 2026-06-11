"use strict";

// ivertinkSavaite

// Apibūdink savo savaitę vienu žodžiu per dieną.

// Skaičiuojama kiek kartų pasitaiko "tingus"
const ivertinkSave = (dienos) => {
    let kiekis = 0; //skaitiklis

    for (let i = 0; i < dienos.length; i++) {
        if (dienos[i] === "tingus") {
            kiekis++;
        }
    }

    return `Tinginystė užklupo ${kiekis} kartus.`;
};

console.log(ivertinkSave(["motyvuotas", "tingus", "tingus", "normalus", "motyvuotas", "tingus", "ramus"]));