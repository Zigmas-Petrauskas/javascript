"use strict";


let days = 5;
let myPosition = "very good";
let result = `I have been learning JavaScript for ${days} days and I am in a ${myPosition} position.`;

document.getElementById("result").innerHTML = result; 


console.log(Number("10"));

console.log(3 == "3"); // true
console.log(3 === "3"); // false

let age = 20;
console.log(age > 18 && age < 50); // true 
console.log(age == 18 || age == 50); // false

alert("Hello, World!");

let result = confirm("Do you want to continue?");
console.log(result);