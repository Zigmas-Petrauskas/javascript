"use strict";

// Valiutos simbolio paieška

function getCurrencySymbol(code) {  // Ši funkcija priima valiutos kodą ir grąžina atitinkamą simbolį
    switch (code.toLowerCase()) { // Naudojame switch, kad patikrintume valiutos kodą
        case "usd":
            return "$";
        case "eur":
            return "€";
        case "gbp":
            return "£";
        default:
            return "Currency not supported";
    }
}

console.log(getCurrencySymbol("gbp")); // Išveda valiutos simbolį, pagal pateiktą kodą