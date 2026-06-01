"use strict";

// Bulvių patiekalų dvikova (arrow function)

const potatoBatle = () => {
    let patiekalai = ["Bulviniai blynai", "Vėdarai", "Šaltibarščiai su bulvėm", "Bulvių košė, Bulvių plokštainis"]; // galimi patiekalai

    let pasirinkimas1 = patiekalai[Math.floor(Math.random() * patiekalai.length)]; // atsitiktinai pasirenkame pirmą patiekalą
    let pasirinkimas2 = patiekalai[Math.floor(Math.random() * patiekalai.length)]; // atsitiktinai pasirenkame antrą patiekalą

    if (pasirinkimas1 === pasirinkimas2) { // jei abu pasirinkimai yra vienodi, skelbiame lygiasias
        return `Laimingas sutapimas! Valgysi dvigub1 ${pasirinkimas1} porciją!`;
    }

    return `Šiandien rinkis tarp ${pasirinkimas1} ir ${pasirinkimas2}!`; // grąžiname pranešimą apie pasirinkimus
};

console.log(potatoBatle()); // išves atsitiktinį patiekalų pasirinkimą arba lygiasias