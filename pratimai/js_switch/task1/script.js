"use strict";

// Kiek dienų liko iki savaitgalio

function daysUntilWeekend(day) {  // Funkcija, kuri priima savaitės dienos pavadinimą kaip argumentą ir grąžina, kiek dienų liko iki savaitgalio (šeštadienio)
    let dayNumber;  // Kintamasis, kuris saugos savaitės dienos numerį (1 - pirmadienis, 2 - antradienis, ..., 6 - sekmadienis)

    switch (day.toLowerCase()) { // Naudojame toLowerCase(), kad būtų galima įvesti dienos pavadinimą bet kokia rašmenų kombinacija (pvz., "Monday", "monday", "MONDAY" bus traktuojami vienodai)   
        case "monday":     // Jei diena yra "Monday", priskiriame 1
            dayNumber = 1; // Savaitės dienų numeracija: 1 - pirmadienis, 2 - antradienis, ..., 6 - sekmadienis
            break;         // Kiti atvejai priskiriami atitinkamiems dienų numeriams,
                           // sustabdo switch bloką, kad neperšoktų į kitus atvejus
        case "tuesday":
            dayNumber = 2;
            break;
        case "wednesday":
            dayNumber = 3;
            break;
        case "thursday":
            dayNumber = 4;
            break;
        case "friday":
            dayNumber = 5;
            break;
        case "saturday":
            dayNumber = 0;
            break;
        default:  // Jei diena neatitinka nė vienos iš aukščiau nurodytų, grąžiname "Invalid day"
            return "Invalid day"; // Tai reiškia, kad įvestas dienos pavadinimas yra neteisingas
    }

   return 6 - dayNumber;  // Savaitgalis yra 6 diena (šeštadienis), todėl atimame esamos dienos numerį iš 6, kad sužinotume, kiek dienų liko iki savaitgalio
}

console.log(daysUntilWeekend("Monday")); // Išves: 5, nes nuo pirmadienio iki šeštadienio yra 5 dienos