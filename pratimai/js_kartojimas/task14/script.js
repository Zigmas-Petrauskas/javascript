"use strict";

// Pavasario energijos vidurkis (arrow function)

const springEnergy = (e1, e2, e3) => {
    let vidurkis = +((e1 + e2 + e3) / 3).toFixed(2);

    let zinute = vidurkis > 7
        ? "Pavasarinis pakilimas!"
        : "Laukiam saulės...";

    return {
        vidurkis,
        zinute
    };
};

console.log(springEnergy(15, 7, 3));