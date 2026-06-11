"use strict";

//skaiciuoAtideliojima

// Nes visi kartais atidėliojam. Net labai...

// Suskaičiuojamas bendras atidėliojimo laikas
const skaiciuokAtideliojima = (minutes) => {
    const suma = minutes.reduce((a, b) => a + b, 0);  // sudedamos masyvo reikšmės
    if (suma > 100) {
        return `Uff... atidėliojimo per daug: ${suma} min`;
    }

    return `Pakenčiama: ${suma} min`;
};

console.log(skaiciuokAtideliojima([20, 30, 40]));