"use strict";

// Darugų skaičiai

// Suskaičiuojame kiek darugų sugalvojo lyginius skaičius
const drauguSkaiciai = () => {
    let lyginiuKiekis = 0;

    for (let i = 1; i <= 10; i++) {
        const skaicius = +prompt(`Įveskitę ${i} draugo sugalvotą skaičių:`) //2, 9, 4, 100, 25, 5, 6, 3, 5, 85 ir 5, 3, 99, 55, 35, 47, 11, 63, 51, 91

        if (skaicius % 2 === 0) {
            lyginiuKiekis++;
        }
    }

    if (lyginiuKiekis > 0) {
        console.log(`Lyginius skiačius sugalvojo ${lyginiuKiekis} draugai.`);
    } else {
        console.log("Nėra");
    }
};

drauguSkaiciai()