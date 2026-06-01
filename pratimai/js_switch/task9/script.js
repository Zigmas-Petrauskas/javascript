"use strict";

// Pokemonų tipai

function typeAdvantage(type) {  // funkcija, kuri priima du Pokemonų tipus ir grąžina pranašumą
    switch (type.toLowerCase()) {  // naudojame switch, kad patikrintume Pokemonų tipą
        case "fire":
            return "grass";  // ugnies tipas yra pranašesnis prieš žolės tipą
        case "water":
            return "fire";  // vandens tipas yra pranašesnis prieš ugnies tipą
        case "grass":
            return "water";  // žolės tipas yra pranašesnis prieš vandens tipą
        default:
            return "No advantage";  // jei tipas nėra žinomas, grąžiname "No advantage"
    }

}

console.log(typeAdvantage("grass")); // išvedą pranešimą pagal pateiktą Pokemonų tipą