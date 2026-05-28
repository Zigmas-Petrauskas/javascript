"use strict";
// Atspėkite skaičių
let favorite = +prompt("Įveskite mėgstamą skaičių");
let quess = +prompt("Atspėkite skaičių");
// Patikriname, ar atspėjote skaičių
if (quess > favorite) { // Ši sąlyga apima atvejį, kai quess yra didesnis už favorite
    console.log("Too high");
} else if (quess < favorite) {// Ši sąlyga apima atvejį, kai quess yra mažesnis už favorite
    console.log("Too low");
} else {                    // Ši sąlyga apima atvejį, kai quess yra lygus favorite
    console.log("You got it!");
}