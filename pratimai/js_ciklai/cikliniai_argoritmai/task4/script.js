"use strict";

// Kalėdinės eglutės

// Apskaičiuojame vidutinį eglučių aukštį
const kaledinesEglutes = () => {
    const egluciukiekis = +prompt("Kiek eglučių atvežta?");  //įvedamas eglučių skaičius (6)

    let auksciuSuma = 0; 

    for (let i = 1; i <= egluciukiekis; i++) {
        const aukstis = +prompt(`Iveskite ${i} eglutės aukštį:`); // auščiai 167, 134, 145, 156, 155, 176
        auksciuSuma += aukstis;
    }

    const vidurkis = auksciuSuma / egluciukiekis;
    console.log(`Eglutės aukščio vidurkis: ${vidurkis} cm`);
};

kaledinesEglutes();
