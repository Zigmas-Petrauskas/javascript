"use strict";

// Fantastiškų švenčių generatorius PRO (arrow funktion + switch)

const randomHoliday = () => {
    let kategorijos = ["technologinė", "maisto", "poilsio"];   // Kategorijų masyvas

    let kategorija = kategorijos[Math.floor(Math.random() * kategorijos.length)];  // atsitiktinai parenkama kategorija

    let svente;

    switch (kategorija) {
        case "technologinė":
            let tech = ["Prigramuotojų diena", "Klaviatūros pagerbimo diena"];
            svente = tech[Math.floor(Math.random() * tech.length)];
            break;

        case "maisto":
            let maistas = ["Cepelinų diena", "Šaltibarščių deina"];
            svente = maistas[Math.floor(Math.random() * maistas.length)];
            break;  

        case "poilsio":
            let poilsis = ["Nieko neveikimo diena", "Vėlyvų pusryčių diena"];
            svente = poilsis[Math.floor(Math.random() * poilsis.length)];
            break;   
    }

    return`${kategorija}: ${svente}`;  // Gražinamas tekstas
};

console.log(randomHoliday());  // Parodo atsitiktinį pranešimą