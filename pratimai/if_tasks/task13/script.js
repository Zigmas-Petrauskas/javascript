"use strict";

// 13.1 Arbatpinigiai
/*
let bill = +prompt("Įveskite sąskaitos sumą:");
let service = prompt("Įvertinkite aptarnavimo lygį:");
let tips = 0;

if (service === "puikiai") {
    tips = bill * 0.2;
} else if (service === "gerai") {
    tips = bill * 0.15;
} else if (service === "prastai") {
    tips = bill * 0.1;
} else {
    tips = 0;
}

console.log(`Arbatpinigiai: ${tips.toFixed(2)} €`);
*/

// 13.2 Bendra suma su arbatpinigiais
/*
let bill = +prompt("Įveskite sąskaitos sumą:");
let service = prompt("Įvertinkite aptarnavimo lygį:");
let tips = 0;

if (service === "puikiai") {
    tips = bill * 0.2;
} else if (service === "gerai") {
    tips = bill * 0.15;
} else if (service === "prastai") {
    tips = bill * 0.1;
} else {
    tips = 0;
}

console.log(`Saskaita su arbatpinigiais: ${ (bill + tips).toFixed(2) } €`);
*/

// 13.3 Sąsakitos pasidalinimas

let bill = +prompt("Įveskite sąskaitos sumą:");
let service = prompt("Įvertinkite aptarnavimo lygį:");
let people = +prompt("Kiek žmonių dalinsis sąskaita?");
let tips = 0;

if (service === "puikiai") {
    tips = bill * 0.2;
} else if (service === "gerai") {
    tips = bill * 0.15;
} else if (service === "prastai") {
    tips = bill * 0.1;
} 

let total = bill + tips;
let perPerson = total / people;

console.log(`Kiekvienas mokės: ${ perPerson.toFixed(2) } €`);