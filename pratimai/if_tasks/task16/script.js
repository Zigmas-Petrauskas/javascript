"use strict";

// Pažymys raide

let grade = +prompt("Įveskite pažymį skaičiais nuo 0 iki 100");

if (grade < 60) {
    console.log("F");
} else if (grade <= 62) {
    console.log("D-");
} else if (grade <= 66) {
    console.log("D");
} else if (grade <= 69) {
    console.log("D+");
} else if (grade <= 72) {
    console.log("C-");
} else if (grade <= 76) {
    console.log("C");
} else if (grade <= 79) {
    console.log("C+");
} else if (grade <= 82) {
    console.log("B-");
} else if (grade <= 86) {
    console.log("B");
} else if (grade <= 89) {
    console.log("B+");
} else {
    console.log("A");
}