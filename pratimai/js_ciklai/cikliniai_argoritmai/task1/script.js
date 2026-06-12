"use strict";

// Konkursas

// funkcija skaičiuojanti kiek skičių  dalinasi iš 6

const konkursas = () => {
    const pradzia = +prompt("Įveskite intervalo pradžią:"); // 5; 31
    const pabaiga = +prompt("Įveskite intervalo pabaigą:"); // 24; 62

    let marskineliuKiekis = 0;

    for (let i = pradzia; i <= pabaiga; i++) {
        if (i % 6 === 0) {
            marskineliuKiekis++;
        }
    }

    console.log(`Reiaklingų marškinėlių kiekis: ${marskineliuKiekis}`);
};

konkursas();