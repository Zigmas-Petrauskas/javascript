"use strict";

function translateLanguage(code) { // Funkcija, kuri priima kalbos kodą ir grąžina atitinkamą pasisveikinimą
    switch (code.toLowerCase()) {
        case "en":
            return "Hello";
        case "es":
            return "Hola";
        case "fr":          
          return "Bonjour";
        case "lt":
          return "Labas";
        default:
            return "Language not supported";
    }
}

console.log(translateLanguage("lt")); // Išveda: Labas, arba kitą atsakymą priklausomai nuo įvesto kodo