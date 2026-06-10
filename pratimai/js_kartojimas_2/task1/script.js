"use strict";

// suskaičiuokDienosKrūvį

// Funkcija kuri skaičiuoja dienos krūvį
const suskiaciuokDienosKruvi = (darboValandos, mokymosiValandos) => {
    const bendrasKruvis = darboValandos + mokymosiValandos; // Sudedamos darbo ir mokymosi valandos

    if (bendrasKruvis > 10) {
        return `Per stipriaivarai! Šiandien: ${bendrasKruvis} val.`;
    }

    return `Gerai paskirstyta diena: ${bendrasKruvis} val.`;
};

console.log(suskiaciuokDienosKruvi(4, 7));  // Parodomas atitinkamas rezultatas