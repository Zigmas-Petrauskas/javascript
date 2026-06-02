"use strict";

// Nieko neveikimo detektorius (arrow function)

const canDoNothing = (diena, padarytiDarbai) => { 
    if (diena === 7 || padarytiDarbai > 5) {
        return "Gali nieko neveikti";
    } else {
        return "Dar šiektiek padirbėk"
    }
};

console.log(canDoNothing(7));