"use strict";

// apskaiciuokBalansoIndeksa

// Ar tavo diena labiau "darbas", ar "Netflix"

// Skaičiuojamas darbo ir poilsio balansas
const apskaiciuokBalansoIndeksa = (darbasValandomis, poilsisValandomis) => {
    const indeksas = poilsisValandomis / darbasValandomis; // apskaičiuojamas indeksas

    if (indeksas === 1) {
        return "idealus balansas";
    } else if (indeksas >= 0.5) {
        return "Geras balansas";
    } else {
        return "Reikia atostogų";
    }
};

console.log(apskaiciuokBalansoIndeksa(8, 4));