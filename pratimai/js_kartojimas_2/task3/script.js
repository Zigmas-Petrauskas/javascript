"use strict";

// sudarykMotivaciniPlana

// Motivaciją kartais reikia rašyti ranka

// Funkcija prie kiekvieno darbo prideda motivacinę frazę
const sukurkMotivaciniPlana = (darbai) => {
    // masyvas rezultatams saugoti
    const planas = [];

    // pereinama per kiekvieną elementą
    for (let i = 0; i < darbai.length; i++) {
        // į masyvą idedamas papildomas tekstas
        planas.push(`${darbai[i]} - Aš galiu!`);
    }

    return planas
};

console.log(sukurkMotivaciniPlana(["Kartoti JS", "Sportuoti", "Perskaityti dokumentaciją"])
);