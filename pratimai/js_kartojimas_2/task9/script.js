"use strict";

// atrinkPoilsioDienas

// Po mokymosi dieno reikia poilsio. Bent jau truputį

// funkcija atrenka tik tas veiklas, kurių pavadinimas ilgesnis nei 6
const atrinkPoilsioVeiklas = (veiklos) => {
    return veiklos.filter(veikla => veikla.length > 6); // filtuojama pagal ilgį
};

console.log(
    atrinkPoilsioVeiklas([
        "Mokykis JS", "Kartoti medžiagą", "Pietūs", "Pasivaikščioti", "Serialas", "Žaidimai"
    ])
);