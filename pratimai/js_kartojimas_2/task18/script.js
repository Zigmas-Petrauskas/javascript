"use strict";

//sujunkIrIsryskinkVeiklas

// Kartais norisi, kad poilsis būtų MATOMAS akimis. 

// Sujungiamos darbų ir poilsio veiklas
const sujunkIrIšryškinkVeiklas = (darbas, poilsis) => {
    const poilsisDidziosiomis = poilsis.map(veikla => 
        veikla.toUpperCase()  // poilsio veiklos rodomos dižiosiomis raidėmis
    );

    return darbas.concat(poilsisDidziosiomis);
};

console.log(sujunkIrIšryškinkVeiklas(
    ["MokykisJS", "Ateiti į pamokas", "Kartotis"],
    ["Miegas", "Serialai", "Maistas"])
);