"use strict";

// Blynų motivacijos indeksas (arrow function)

const blynuMotyvacija = (nuotaika, eneregija) => {  // Funkcija, kuri priima nuotaiką ir energiją, ir grąžina pranešimą apie blynų kepimą
    let indeksas = nuotaika * eneregija;  // Apskaičiuojame blynų motivacijos indeksą
    if (indeksas > 40) {  
        return "Kepk daug blynų!";
    } else if (indeksas >= 20) {
       return "Kep kelis blynus."; 
    } else {
        return "Palik blynus rytojui..."; // Grąžina pranešimą, jei indeksas yra mažesnis nei 20
    }  
};

console.log(blynuMotyvacija(5, 9)); // grąžina atitinkamą pranešimą pagal indeksą
