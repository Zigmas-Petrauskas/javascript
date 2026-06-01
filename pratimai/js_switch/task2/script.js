"use strict";

// Paprasta skaičiuoklė

function calculate(a, b, operator) {  // Funkcija, kuri priima du skaičius ir operatorių kaip argumentus ir grąžina rezultatą
    switch (operator) {  // Naudojame switch, kad nustatytume, kokią operaciją atlikti pagal operatorių
        case "+":  // Jei operatorius yra "+", grąžiname a + b
            return a + b;
        case "-":  // Jei operatorius yra "-", grąžiname a - b
            return a - b;
        case "*":  // Jei operatorius yra "*", grąžiname a * b
            return a * b;
        case "/":  // Jei operatorius yra "/", grąžiname a / b
            return a / b;
        default:  // Jei operatorius neatitinka nė vieno iš aukščiau nurodytų, grąžiname "Invalid operator"
            return "Invalid operator";
    }
}   

console.log(calculate(10, 5, "+")); // Išves: 15, nes 10 + 5 yra 15