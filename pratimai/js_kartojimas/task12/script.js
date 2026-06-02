"use strict";

// Dovanų biudžetas (arrow function)

const giftsBudget = (k1, k2, k3) => {
    let suma = +(k1 + k2 + k3).toFixed(2);

    let statusas = suma > 50
        ? "Biudžetas sprogo!"
        : "Tilpai!"

    return {
        suma, statusas
    };
};

console.log(giftsBudget(15.50, 20, 18.99));