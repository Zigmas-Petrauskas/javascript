"use strict";

// Žuvienės dienos planuotojas (arrow function)

 const fishNeeded = (g1, g2, g3) => {  // Funkcija, kuri priima žuvies kiekį ir grąžina pranešimą apie žuvienės dienos planavimą
    let zmones = g1 + g2 + g3; // Apskaičiuojame bendrą žmonių skaičių
    let zuvis = +(zmones * 0.25).toFixed(2); // Apskaičiuojame reikalingą žuvies kiekį

    let zinute = zuvis > 2 // Patikriname, ar reikalingas žuvies kiekis yra didesnis nei 2 kg
       ? "Reikės didesnio puodo!"
       :  "Užteks mažo puodo."

    return {zmones, zuvis, zinute};  // Grąžina pranešimą apie žuvienės dienos planavimą

};

console.log(fishNeeded(4, 5, 6)); // Grąžina atitinkamą pranešimą apie žuvienės dienos planavimą