"use strict";

const products = [
    { title: "Phone", price: 500 },
    { title: "Laptop", price: 1200 },
    { title: "Tablet", price: 800 }
];

const result = products.map(product => ({
    ...product,
    priceWithVat: product.price * 1.21
}));

console.log(result);