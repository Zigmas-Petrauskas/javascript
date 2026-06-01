"use strict";

//Kaziuko mugės sprendimų medis (function expresion)

const goToFair = function (temp, vejoGreitis) {  
    if (temp < 0 && vejoGreitis > 5) {  
        return "NEEIK! Sušalsi!";
    } else if (temp > 0 && vejoGreitis < 5) {
        return "Eik! Riestainiai tavęs laukia!";
    } else {
        return "Gal eik, bet apsirenk!";  
    }
};

console.log(goToFair(7, 0)); // išves atitinkąmą žinutę


