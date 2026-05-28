"use strict";

let product = +prompt("Įveskite prekės pavadinimą:");
let money = +prompt("Kiek turite pinigų:");

if (product === "MacBook Air" && money >= 999 ) {
    console.log(true);
} else if (product === "MacBook Pro" && money >= 1299) {
    console.log(true);
} else if (product === "Mac Pro" && money >= 2499) {
    console.log(true);
} else if (product === "Apple Sticker" && money >= 1) {
    console.log(true);
} else {
    console.log(false);
}