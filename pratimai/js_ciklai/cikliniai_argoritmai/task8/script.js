"use strict";

// Bėgimo varžybos

const begimoVarzybos = () => {
    const n = +prompt("Kiek dalyvauja bėgikų?");

    let laikuSuma = 0;
    let greiciausiasLaikas = Infinity;

    for (let i = 1; i <= n; i++) {
        const laikas = +prompt(`Įveskite ${i} bėgiko laiką:`);
        laikuSuma += laikas;

        if (laikas < greiciausiasLaikas) {
            greiciausiasLaikas = laikas;
        }
    }

    const vidurkis = laikuSuma / n;
    const skirtumas = vidurkis - greiciausiasLaikas;

    console.log(`Greičiausio bėgiko laikas: ${greiciausiasLaikas} sek.`);
    console.log(`Jis buvo ${skirtumas.toFixed(2)} sek geresnis už vidurkį`)
};

begimoVarzybos();