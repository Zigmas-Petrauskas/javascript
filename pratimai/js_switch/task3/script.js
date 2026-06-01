"use strict";

// Dienų skaičius mėnesyje

function getMonthDays(month) { // Funkcija, kuri priima mėnesio numerį kaip argumentą ir grąžina, kiek dienų yra tame mėnesyje
    switch (month) {  // Naudojame switch, kad nustatytume, kiek dienų yra kiekviename mėnesyje pagal mėnesio numerį
        case 1:  
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31; // Mėnesiai turi 31 dieną

        case 4:
        case 6:
        case 9:
        case 11:
            return 30;  // Mėnesiai turi 30 dienų

        case 2:  
            return 28; // Vasaris turi 28 dienas (nepaisant keliamųjų metų, kurie nėra nagrinėjami šiame uždavinyje)

        default:
            return "Invalid month"; // Jei mėnesio numeris neatitinka nė vieno iš aukščiau nurodytų, grąžiname "Invalid month"
    }   
}

console.log(getMonthDays(2)); // Išves: kiek mėnesis turi dienų.