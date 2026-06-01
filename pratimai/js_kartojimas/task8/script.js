"use strict";

// Programuotojo produktyvumo skaičiuoklė (arrow function)

const devMotivation = (kavosPuodeliai, eilutesKodo, klaidos) => {  // funkcija priima kavos puodelių skaičių, parašytų kodo eilučių skaičių ir klaidų skaičių
    let indeksas = (eilutesKodo - klaidos) * kavosPuodeliai;  // apskaičiuojame produktyvumo indeksą

    if (indeksas < 20) {  
        return "Reikia dar kavos...";
    } else if (indeksas <= 100) {
        return "Ne blogai";
    } else {
        return "Super puikiai programuoju"; 
    }
};

console.log(devMotivation(10, 20, 30)); // išves atitinkamą žinutę apie produktyvumą