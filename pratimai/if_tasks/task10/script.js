"use strict";
// Kas laimėjo? Jonas, Mikas ar Mary?
let jonasAverage = (89 + 120 + 103) / 3;
let mikasAverage = (116 + 94 + 123) / 3;
let maryAverage = (97 + 134 + 105) / 3;
// Išveskite kiekvieno žaidėjo vidurkį ir kas laimėjo
console.log("Jono vidurkis: " + jonasAverage); // Ši eilutė išveda Jono vidurkį
console.log("Miko vidurkis: " + mikasAverage); 
console.log("Mary vidurkis: " + maryAverage);  

if (jonasAverage > mikasAverage && jonasAverage > maryAverage) { // Ši sąlyga patikrina, ar Jonas turi didžiausią vidurkį
    console.log("Jonas laimėjo!", jonasAverage);  // Ši eilutė išveda, kad Jonas laimėjo, ir jo vidurkį
} else if (mikasAverage > jonasAverage && mikasAverage > maryAverage) {
    console.log("Mikas laimėjo!", mikasAverage);
} else if (maryAverage > jonasAverage && maryAverage > mikasAverage) {
    console.log("Mary laimėjo!", maryAverage);
} else {  // Ši sąlyga apima atvejį, kai du ar daugiau žaidėjų turi vienodą didžiausią vidurkį
    console.log("Lygiosios!");  // Ši eilutė išveda, kad yra lygiosios, jei du ar daugiau žaidėjų turi vienodą didžiausią vidurkį
}