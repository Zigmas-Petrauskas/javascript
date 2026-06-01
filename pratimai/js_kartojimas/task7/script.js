"use strict";

// Vardadienių sveikintojas (arrow function)

const celebrateNameday = (vardas, arGeraiMiegojo) => {  // funkcija priima vardą ir informaciją apie miegą
    let tekstas = `Sveikiname su vardadieniu, ${vardas}!`; //  sukuriame sveikinimo tekstą su vardu
    if (!arGeraiMiegojo) {  // jei žmogus nemiegojo gerai, pridėsime papildomą tekstą
        tekstas += "(bet geriau išgerk kavos)"; 
    }
    return tekstas; // grąžiname sveikinimo tekstą
};

console.log(celebrateNameday("Jonai", false)); // išves sveikinimą su vardu