"use strict";

// Kauliukai

const kauliukai = () => {
    const n = +prompt("Kiek kauliukų metė Tomas?");

    let taskuSuma = 0;

    for (let i = 1; i <= n; i++) {
        const taskai = +prompt(`Įveskite ${i} kauliukų rezultatą (1-6):`);
        taskuSuma += taskai;
    }

    const maxSuma = n * 6;
    const vidurkis = taskuSuma / n;
    const puseMaxSumos = maxSuma / 2;

    console.log(`Maksimalus galimas taškų kiekis: ${maxSuma}`);
    console.log(`Tomo surinktų taškų suma: ${taskuSuma}`);
    console.log(`Tomo taškų vidurkis: ${vidurkis.toFixed(1)}`);

    if (taskuSuma > puseMaxSumos) {
        console.log("Tomas laimėjo loterijoje!");
    } else {
        console.log("Tomas nelaimėjo loterijoje");
    }
};

kauliukai();