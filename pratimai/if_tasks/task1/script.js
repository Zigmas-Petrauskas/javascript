"use strict";
// Parašykite programą, kuri paprašytų įvesti skaičių. Programa turėtų patikrinti ar skaičius yra teigiamas ar neigiamas ir atitinkamai išvesti "Skaičius yra teigiamas" arba "Skaičius yra neigiamas".
let number = +prompt("Įveskite skaičių");
// Patikriname ar skaičius yra teigiamas ar neigiamas
if (number > 0) {
    console.log("Skaičius yra teigiamas");
} else {
    console.log("Skaičius yra neigiamas");
}   