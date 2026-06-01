"use strict";

// Ceplinų kalorijų analizatorius (arrow function + ternary)

const celepinuAnalize = (kiekCepelinu) => {
    let kalorijos = kiekCepelinu * 350; // Vieno cepelino kalorijų kiekis

    let zinute = kalorijos > 1000  // Ternary operatorius, kuris tikrina ar kalorijos viršija 1000
        ? "Ufff.... čia rimtas balius!"
        : "Dar gali judėti po valgio.";
    return { 
        kiekCepelinu, kalorijos, zinute   
    };
};

const rezultatas = celepinuAnalize(4); // Pakeiskite skaičių 4 į norimą cepelinų kiekį
console.log(rezultatas);  // printins objektą su cepelinų kiekiu, kalorijomis ir žinute
