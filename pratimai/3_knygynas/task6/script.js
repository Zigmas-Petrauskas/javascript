"use strict";

// Apskaičiuoti 25% nuolaidą knygoms kurių kaina didesnė nei 10 eurų

let books = [
    { title: "Knyga #1", price: 10.25 },
    { title: "Knyga #2", price: 5.15 },
    { title: "Knyga #3", price: 7.32 },
    { title: "Knyga #4", price: 54.01 },
    { title: "Knyga #5", price: 77.17 }
];

const discountedBooks = (books) => {

    console.log("!!! Nukainuota !!!");
    
    books.forEach((book) => {
        if (book.price > 10) {
            const discount = 25;
            const salePrice = book.price * (1 - discount / 100);
            console.log(`Knyga: ${book.title} Sena kaina: ${book.price.toFixed(2)} eur Pardavimo kaina: ${salePrice.toFixed(2)} eur Pritaikyta nuolaida: -${discount}%`);
        }
    });
};

discountedBooks(books);