"use strict";

// Pirkinai

const pirkiniai = () => {
    const n = +prompt("Kiek buvo pirkinių?");

    let kainuSuma = 0;
    let svorioSuma = 0;

    for (let i = 1; i <= n; i++) {
        const kaina = +prompt(`Įveskite ${i} pirkinio kainą (centais):`);
        const svoris = +prompt(`Įveskite ${i} pirkinio svorį (gramais):`);

        kainuSuma += kaina;
        svorioSuma += svoris;
    }

    const vidutineKaina = kainuSuma / n;

    console.log(`Vidutinė pirkinio kaina${vidutineKaina} ct.`);
    console.log(`Bendras pirkinų svoris ${svorioSuma} g.`);

    if (svorioSuma <= 5000) {
        console.log("Petriukas galės parneštis visus pirkinius.");
    } else {
        console.log("Petriukas negalės parnešti visų prekių.");
    }
};

pirkiniai();