"use strict";

//function decraration - funkcijos deklaravimas
/*  
let number = +prompt("Įveskite skaičių:");

function getEvenOrOdd(number) {  
    let evenOrOdd = number % 2 === 0 ? `Even number: ${number}`: `Odd number: ${number}`;
    return evenOrOdd; 
}

function innertData(result) {
    document.getElementById("result").innerHTML = result;
}

let result = getEvenOrOdd(number);

innertData(result); 
*/

//function expression - funkcijos išraiška
/*
const getEvenOrOdd = function (number) {
    let evenOrOdd = number % 2 === 0 ? `Even number: ${number}`: `Odd number: ${number}`;
    return evenOrOdd; 
} 

*/

//arrow function - rodyklės funkcija
// const getName = () => {};

const getname = (user) => {
    let name = user.name;
    return name;
}

const getname = (user) => user.name; // trumpesnis variantas

//callback function - atgalinis kvietimas