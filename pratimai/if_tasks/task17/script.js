"use strict";

// Dienų skaičius mėnesyje

let moth = +prompt("Įveskite mėnesio numerį (1-12)");

if (moth === 1 ||
    moth === 3 || 
    moth === 5 || 
    moth === 7 || 
    moth === 8 || 
    moth === 10 || 
    moth === 12
) {
    console.log("Mėnesyje yra 31 diena");
} else if (moth === 4 || 
    moth === 6 || 
    moth === 9 || 
    moth === 11
) {
    console.log("Mėnesyje yra 30 dienų");
} else if (moth === 2) {
    console.log("Mėnesyje yra 28 arba 29 dienų");
} else {
    console.log("Įvestas neteisingas mėnesio numeris");
}