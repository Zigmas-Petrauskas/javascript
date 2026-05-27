"use strict";

//  Pamokų skaičius per savaitę

let mondayLessons = +prompt("Kiek pamokų yra pirmadienį?"); // 5
let tuesdayLessons = +prompt("Kiek pamokų yra antradienį?");  // 6
let wednesdayLessons = +prompt("Kiek pamokų yra trečiadienį?"); // 4
let thursdayLessons = +prompt("Kiek pamokų yra ketvirtadienį?"); // 5
let fridayLessons = +prompt("Kiek pamokų yra penktadienį?"); // 4

// Pamokų trukmė minutėmis

let lessonsPerWeek = 
   mondayLessons + 
   tuesdayLessons + 
   wednesdayLessons + 
   thursdayLessons + 
   fridayLessons;

//  Iš viso minučių

let minutes = lessonsPerWeek * 45;

// Rezultatai

console.log("Pamokų skaičius:", lessonsPerWeek); // 24
console.log("Minučių sudaro:", minutes); // 1080
