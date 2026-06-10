"use strict";

// skaiciukPuslapius

// Kiek puslapių šiandein pavyks perskaityti iš dokumentacijos?

const skaiciuokPuslapius  = (minutes) => {
    let puslapiai = 0; 
    let laikas = 0;

    do {
        laikas += 10;
        if (laikas <= minutes) {
            puslapiai++;
        }
    } while (laikas < minutes);

    return puslapiai;
};

console.log(skaiciuokPuslapius(35));