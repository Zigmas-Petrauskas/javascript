"use strict";
// Ar galima sudaryti trikampį?
let a = +prompt("Įveskite pirmą kraštinę");
let b = +prompt("Įveskite antrą kraštinę");
let c = +prompt("Įveskite trečią kraštinę");
// Patikriname, ar galima sudaryti trikampį su duotomis kraštinėmis
if (a + b > c && a + c > b && b + c > a) {
    console.log(true);
} else {
    console.log(false); 
}