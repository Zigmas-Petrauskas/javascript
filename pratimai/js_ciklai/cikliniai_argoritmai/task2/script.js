"use strict";

// Kelias į mokyklą

// funkcija skaičiuojanti suplojimus ir spragtelėjimus pirštais
const keliasIMokykla = () => {
    const zingsniai = +prompt("Įveskite žinksnių kiekį iki mokyklos:"); // 15; 426

    let suplojimai = 0;
    let spragtelejimai = 0;
    
    for (let i = 1; i <= zingsniai; i++) {
        if (i % 10 === 0) {
            suplojimai++
        }

        if (i % 10 === 5) {
            spragtelejimai++
        } 
    }

    console.log(`Suplojimų bus: ${suplojimai}`);
    console.log(`Spragtelėjimų bus: ${spragtelejimai}`);
};

keliasIMokykla();
