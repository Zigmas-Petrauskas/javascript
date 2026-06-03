"use strict";

// Matematika

// Petriuko pažymiai 
const p1 = +prompt("1 Pažimys");
const p2 = +prompt("2 Pažimys");
const p3 = +prompt("3 Pažimys");
const p4 = +prompt("4 Pažimys");
const p5 = +prompt("5 Pažimys");

const vidurkis = (p1 + p2 + p3 + p4 + p5) / 5; // vidurkio apskaičiavimas

// nustatome kiek saldainių gaus Petriukas
if (vidurkis > 9) {
    console.log("Petriukas gaus tris saldainius"); // p1 - 10, p2 - 10, p3 - 8, p4 - 9, p5 - 10
} else if (vidurkis >= 7) {
    console.log("Petriukas gaus du saldainius"); // 8, 9, 6, 5, 10
} else {
    console.log("Petriukas gaus vieną saldainį"); // 5, 5, 4, 5, 5
}