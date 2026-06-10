"use strict";

// susidarykToDO

// funkcija kuri koregouja darbų sąrašą
const susidarykToDO = (darbai) => {
    darbai.push("Išgerti arbatos"); // pridedamas naujas darbas į sąraš0 galą
    darbai.shift(); // pašalinamas pirmas elementas
    
    return darbai;
};

console.log(susidarykToDO([
    "Anksti atsikelti", "Mokytis JS", "Sportuoti"
    ])
);