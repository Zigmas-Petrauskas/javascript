"use strict";
// Parašykite programą, kuri paprašytų įvesti tris skaičius. Programa turėtų patikrinti ar trijų skaičių sandauga yra teigiama ar neigiama ir atitinkamai išvesti "+" arba "-".
let nuber1 = +prompt("Įveskite pirmą skaičių");
let nuber2 = +prompt("Įveskite antrą skaičių");
let nuber3 = +prompt("Įveskite trečią skaičių");
// Sandauga
let result = nuber1 * nuber2 * nuber3;
// Patikriname ar sandauga yra teigiama ar neigiama
if (result > 0) {
    alert("+");
} else {
    alert("-");
}
