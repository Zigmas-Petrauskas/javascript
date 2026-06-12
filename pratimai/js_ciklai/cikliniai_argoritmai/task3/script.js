"use strict";

// snaigesUzLango

// apskaičiuojamas bendras snaigių kiekis
const snaigesUzLango = () => {
    const k = +prompt("Kiek snaigių nukrito pirmąją sekundę:"); // 5 2
    const s = +prompt("Kiek sekundžių snigo:"); // 3 4

    let suma = 0;
    let snaiges = k;

    for (let i = 1; i <= s; i++) {
        suma += snaiges;
        snaiges *= 2;
    }
    
    console.log(`Išviso nukrito: ${suma}`);
};

snaigesUzLango();