"use strict";

// Geriausia klasė

// Klasės
const aKlase = +prompt("A klasės vidurkis:");  // 7, 7
const bKlase = +prompt("B klasės vidurkis:");  // 8.5, 8
const cKlase = +prompt("C klasės vidurkis:");  // 9, 9.5
const dKlase = +prompt("D klasės vidurkis:");  // 6, 6

// Apskičiuojam didžiausią vidurkį
const didziausiasVidurkis = Math.max(aKlase, bKlase, cKlase, dKlase);
console.log(`Didžiausias vidurkis: ${didziausiasVidurkis}`);  // parodomas didžiausias vidurkis

// Išvedame skirtumus
if (aKlase !== didziausiasVidurkis) {
    console.log(`A klasė atsilieka: ${(didziausiasVidurkis - aKlase).toFixed(1)}`);
} if (bKlase !== didziausiasVidurkis) {
    console.log(`B klasė atsilieka: ${(didziausiasVidurkis - bKlase).toFixed(1)}`);
} if (cKlase !== didziausiasVidurkis) {
    console.log(`C klasė atsilieka: ${(didziausiasVidurkis - cKlase).toFixed(1)}`);
} if (dKlase !== didziausiasVidurkis) {
    console.log(`D klasė atsilieka: ${(didziausiasVidurkis - dKlase).toFixed(1)}`);
}