"use strict";

// numeruokJSDalykus

// JS kelias ilga. Bet kai jis sunumeroutas, tada lengviau

// funkcija sunumeroujanti masyvo dalykus
const numeruokJSDalykus = (dalykai) => {
    return dalykai.map((dalykas, indeksas) => {
        return `${indeksas +1}. ${dalykas}`;
    });
};

console.log(numeruokJSDalykus(["Kintamieji", "Ciklai", "Masyvai", "Funkcijos", "Objektai"]));