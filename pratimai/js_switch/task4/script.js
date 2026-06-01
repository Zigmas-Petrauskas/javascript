"use strict";

// Pažymio aprašymas

function gradeDescription(grade) { // Funkcija, kuri priima pažymį kaip argumentą ir grąžina jo aprašymą
    switch (grade.toUpperCase()) {  // Naudojame switch, kad nustatytume, koks aprašymas atitinka kiekvieną pažymį
        case "A": 
            return "Excellent"; // Pažymys "A" atitinka aprašymą "Excellent"
        case "B":
            return "Good";
        case "C":
            return "Average";
        case "D":
            return "Poor";
        case "F":
            return "Fail";
        default:
            return "Unknown grade";
    }
}

console.log(gradeDescription("A")); // Išves: "Excellent", nes pažymys "A" atitinka aprašymą "Excellent"