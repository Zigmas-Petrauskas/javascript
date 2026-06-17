"use strict";

// Surušiuoti knygas pagal pavadinimą

let books = [
    { title: "JavaScript", price: 10.25 },
    { title: "React", price: 5.15 },
    { title: "HTML", price: 7.32 },
    { title: "Node.js", price: 54.01 },
    { title: "CSS", price: 77.17 }
];

const ascending = [...books].sort((a, b) => a.title.localeCompare(b.title));

console.log(ascending);