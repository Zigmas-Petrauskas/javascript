"use strict";

//skaičiuokPertraukas

// Pertraukos būtinos - mes ne robotai (dar).

//funkcija suskaičiuoja kiek telpą blokų į mokimosį laiką
const suskaiciuokPrtraukas = (valandos) => {
    //valandos verčiamos minutėmis
    let minutes = valandos * 60;

    //blokų skaitiklis
    let blokai = 0;

    while (minutes >= 45) {
        blokai++; //padidinamas blokų skaičius
        minutes -= 45; // atimama bloko trukmė 
    }

    return blokai;
};

console.log(suskaiciuokPrtraukas(3));