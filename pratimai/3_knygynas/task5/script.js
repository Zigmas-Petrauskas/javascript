"use strict";

// Bendra knygų vertė lentynoje

let books = [
    { title: "Knyga #1", price: 10.25 },
    { title: "Knyga #2", price: 5.15 },
    { title: "Knyga #3", price: 7.32 },
    { title: "Knyga #4", price: 54.01 },
    { title: "Knyga #5", price: 77.17 }
];

const getTotalPrice = (books) => {
    let total = 0;

    books.forEach((book) => {
        total += book.price;
    });

    return total;
};

console.log(`Visų knygų vertė lentynoje ${getTotalPrice(books).toFixed(2)} eur.`);