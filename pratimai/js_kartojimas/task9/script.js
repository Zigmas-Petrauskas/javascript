"use strict";

//Šakočio sezono detektorius (arrow function)
 
const shouldEatCake = (mėnuo, alkis) => {  // funkcija priima mėnesį ir alkio lygį
    if (mėnuo === 12 && alkis > 5) {  
        return "Šakotis privalomas.";
    } else if (mėnuo !== 12 && alkis > 7) { 
        return "Na jau gerai... galima mažą gabalėli.";
    } else {
        return "Gal užtels arbatos?";
    }
};

console.log(shouldEatCake(12, 8)); // išves atitinkamą pranešimą
