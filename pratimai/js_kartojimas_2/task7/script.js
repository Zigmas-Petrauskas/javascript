"use strict";

// penkatdienioTvarkytojas

const penktadienioTvarkytojas = () => {
    // sujuriami 2 masyvai
    const rimtiDarbai = ["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"];
    const smagusDarbai = ["Pyragas", "Pasivaikščiojimas", "Žaidimai"]; 
    
    const visiDarbai = rimtiDarbai.concat(smagusDarbai); // sujungiami masyvai

    return visiDarbai.slice(rimtiDarbai.length);
};

console.log(penktadienioTvarkytojas());

