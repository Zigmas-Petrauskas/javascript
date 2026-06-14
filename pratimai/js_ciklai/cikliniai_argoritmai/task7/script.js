"use strict";

// Šuoliai per virvutę

const suoliaiPerVirvute = () => {
    const m = +prompt("Kiek kartų Onutė bandė šokinėti?");

    let suoliukuSuma = 0;

    for (let i = 1; i <= m; i++) {
        const suoliukuKiekis = +prompt(`Kiek šuoliukų atlikta ${i} bandymu?`);

        suoliukuSuma += suoliukuKiekis;
    }

    const vidurkis = suoliukuSuma / m;

    console.log(`Iš viso atlikta šuoliukų: ${suoliukuSuma}`);
    console.log(`Vidutiniškai per bandymą: ${vidurkis}`);
};

suoliaiPerVirvute();