"use strict";
// Ar skaičius yra kartotinis?
let n = +prompt("Įveskite pirną skaičių");
let d = +prompt("Įveskite antrą skaičių");
// Patikriname, ar n yra kartotinis d
if (d === 0) {
    console.log("Divizion by zero is not allowed!!!");
} else if (n % d === 0) {
    console.log(true);
} else {
    console.log(false);
}