"use strict";

// atrinkPoilsioDienas

// Visiems reikia poilsio, net ir Javascript mokiniams

// Funkcija kuri atrenka dienas, kur mokintasi 3 val
const  atrinkPoilsioDienas = (dienos) => {
    return dienos

    // paliekmos dienos kurių valandų skaičius mažesnis nei 3
    .filter(diena => {
        const valandos = parseInt(diena.split(":")[1]);
        return valandos <3;
    })
    // pridedamas humoristinis tekstas
    .map(diena => `${diena} - pagaliau pailsėjai bent truputį!`)
};

console.log(
    atrinkPoilsioDienas([
      "Pirmadienis: 5 h",
      "Antradienis: 2 h"
    ])
);