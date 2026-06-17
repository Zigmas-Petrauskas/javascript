"use strict";

// Pridėti knygą į masyvo galą, metodas push()

let books = [
    { title: "Knyga #1", price: 10.25 },
    { title: "Knyga #2", price: 5.15 },
    { title: "Knyga #3", price: 7.32 },
    { title: "Knyga #4", price: 54.01 },
    { title: "Knyga #5", price: 77.17 }
];


const addBook = (books, title, price) => {
    books.push({
        title: title,
        price: price
    });
};

addBook(books, "Knyga #6", 2.75);

console.log(books);