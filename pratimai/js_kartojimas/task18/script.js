"use strict";

// Šventinės dvasios progresas (arrow function)

const holidaySpirit = (s1, s2, s3, s4, s5) => {
    let suma = s1 + s2 + s3 + s4 + s5;
    
    let trukstaIkI50 = 50 - suma;

    let zinute;

    if (suma > 40) {
        zinute = "Šventinė dvasia čia!"
    } else if (suma >= 20) {
        zinute = "Artėjame..."
    } else {
        zinute = "Reikia daugiau mandarinų."
    }

    return {
        suma, trukstaIkI50, zinute
    };
};

console.log(holidaySpirit(5, 3, 10, 2, 35));