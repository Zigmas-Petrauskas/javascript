"use strict";

// simuliuokMiegoGrafika

// Kad išmokti JS - reikia miego. Ir Šiek tiek savi kritikos

// funkcija, kuri skaičiuoja miego valandų vidurkį
const simuliuokMiegoGrafika = (uzvakar, vakar, siandien) => {
    const vidurkis = ((uzvakar + vakar + siandien) / 3).toFixed(1);
    if (vidurkis < 6) {
        retutrn `Vidurkis ${vidurkis} - esi zombis`;
    } else if (vidurkis <= 7) {
        return `Vidurkis ${vidurkis} - normaliai išsilaikei`;
    } else {
        return `Vidurkis ${vidurkis} - miego karalius`;
    }
};

console.log(simuliuokMiegoGrafika(5, 7, 8));