"use strict";

let first = +prompt("Įveskite pirmą skaičių"); // 3, 5, 7  
let second = +prompt("Įveskite antrą skaičių"); // 2
let third = +prompt("Įveskite trečią skaičių"); // 5 - 100
let fourth = +prompt("Įveskite ketvirtą skaičių"); // < 9 arba > 203

if (
   (first === 3 || first === 5 || first === 7)  && 
   second === 2 &&
   third >= 5 && 
   third <= 100 && 
   (fourth < 9 || fourth > 20)
) {
    console.log("correct");
} else {5
    console.log("incorrect");
}