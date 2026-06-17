"use strict";

// Išvesti paskutinės knygos pavadinimą ir kainą

let books = [
    { title: "Knyga #1", price: 10.25 },
    { title: "Knyga #2", price: 5.15 },
    { title: "Knyga #3", price: 7.32 },
    { title: "Knyga #4", price: 54.01 },
    { title: "Knyga #5", price: 77.17 }
];


const printLastBook = (books) => {
    const lastBook = books[books.length - 1];

    console.log(`Paskutinė knyga yra ${lastBook.title}, jos kaina ${lastBook.price} eur.`);
};

printLastBook(books);