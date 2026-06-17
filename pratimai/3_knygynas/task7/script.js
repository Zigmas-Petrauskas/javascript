"use strict";

// Rikiuoti knygas nuo pigiausios iki brangiausios

let books = [
    { title: "Knyga #1", price: 10.25 },
    { title: "Knyga #2", price: 5.15 },
    { title: "Knyga #3", price: 7.32 },
    { title: "Knyga #4", price: 54.01 },
    { title: "Knyga #5", price: 77.17 }
];

const sortedByPrice = [...books].sort((a, b) => a.price - b.price);

console.log(sortedByPrice);