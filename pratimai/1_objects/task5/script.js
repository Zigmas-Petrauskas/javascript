"use strict";

// Knygų skaitymo būsena

const library = [
    {
        author: "J.K Rowling",
        title: "Harry Potter and the Chamber of Secrets",
        readingStatus: true
    },
    {
        author: "Homer",
        title: "Odyssey",
        readingStatus: true
    },
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        readingStatus: false
    }
];

library.forEach((book) => {
    if (book.readingStatus) {
        console.log(`Already read ${book.title} by ${book.author}`);
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}`);
    }
});