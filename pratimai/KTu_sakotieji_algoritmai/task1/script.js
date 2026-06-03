"use strickt";

//Parašiutininkas

const h = +prompt("Iš kokio aukščio šoka parašiutininkas?"); // h - aukštis
const t = +prompt("Per kiek sekundžių išssikleidžia parašiutas?");  // t - laikas
const g = 9.8; // g - laisvo kritimo pagreitis

// Apskaičiuojamas kritimo laikas
const kritimoLaikas = Math.sqrt((2 *h) / g);

// Tikrinimas ar parašiutas išsiskleis
if (t <= kritimoLaikas) {
    console.log("Parašiutas išsiskleis")  // Aukštis (h) - 200, laikas (t) - 2 
} else {
    console.log("Parašiutas neišsiskleis")  // Aukštis (h) - 50.9, laikas (t) - 3.350
}