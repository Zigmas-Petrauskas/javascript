"use strict";

// Tortų matematikas (arrow function)

const cakePerPerson = (tortoSkersmuo, grupes) => {
    let zmones = grupes[0] + grupes[1] + grupes[2]; // suskaičiuojamas bendras žmonių kiekis
    
    if (zmones < 1) {  // Jei žmonių nėra, naudojame didžiausią grupės reikšmę
        zmones = Math.max(...grupes);
    }
    
    let cmVienam = +(tortoSkersmuo / zmones).toFixed(2); // Apskaičiuojam, kiek torto centimetrų tenka vienam žmogui

    let ivertinimas = cmVienam <5 // rezultato vertinimas
        ? "Mažoka"
        : "Pakankamai";

    return {  // Rezultato gražinimas objektu
        zmones, cmVienam, ivertinimas
    };
};

console.log(cakePerPerson(30, [1, 2, 5]));  