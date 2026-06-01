"use strict";

// Dienos nuotaikos prognozė (function declaration + switch)

function dayMood(diena) {  // Funkcija, kuri priima dienos pavadinimą ir grąžina nuotaikos prognozę
    let tekstas;  // Kintamasis, kuris saugos grąžinamą pranešimą

    switch (diena) {  // Naudojame switch, kad nustatytume nuotaiką pagal dieną
       case 1: 
           tekstas = "Pirmadienis. Stiprios kavos prašau.";
              break;  // sustabdo switch, jei atitinka pirmadienį
        case 2:
           tekstas = "Antradienis. Jau geriau.";
              break;  
        case 3:
           tekstas = "Trečiadienis. Pusė kelio!";
              break;  
        case 4:
           tekstas = "Ketvirtadienis. Dar truputį.";
              break;  
        case 5:
           tekstas = "Penktadienis. Širdis dainuoja!";
              break;  
        case 6:
           tekstas = "Šeštadienis. Galima ilgiau pamiegoti.";
              break;  
        case 7:
           tekstas = "Sekmadienis. Nieko neveikimo menas";
              break;
        default:  
           tekstas = "Tokios dienos nėra!"; // Grąžina pranešimą, jei įvestas neteisingas dienos numeris
    }

    if (diena === 5 || diena === 6) {  // Patikriname, ar įvestas dienos numeris yra tarp 1 ir 7
        tekstas += " + šventinė atmosfera!";
    }

    return tekstas;  // Grąžina pranešimą apie nuotaiką pagal dieną
}

console.log(dayMood(5)); // grąžina pagal dieną atitinkamą nuotaikos prognozę"