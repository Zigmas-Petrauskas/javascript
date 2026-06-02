"use strict";

// Asmeninės šventės analizė (arrow function)

const myHolliday = (vardas, menuo, megstamasSkaicius) => {
    let zinute;  // kintamasis žinutei saugoti

    if (menuo === megstamasSkaicius) {
        zinute = "Mistinis sutapimas!"
    } else if (menuo > 6) {
        zinute = "Vasaros nuotaikos"
    } else {
        zinute = "Pavasario vėjai"
    }

    return `${vardas}: ${zinute}`;  // Grąžinamas sakinys su vardu ir žinute
};

console.log(myHolliday("Zigmas", 6, 9));  // Išvedamas atitinkamas atsakymas su parametrais