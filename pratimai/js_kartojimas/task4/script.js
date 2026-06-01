"use strict";

// Joninių žolelių ekspertas (arrow function)

const joniniuEkspertas = (z1, z2, z3, z4) => {  // Funkcija, kuri priima žolelių pavadinimus ir grąžina pranešimą apie jų naudojimą Joninėms
    let suma = z1 + z2 + z3 + z4;  // Sukuriame pranešimą su žolelių pavadinimais

    let isvada = suma > 20 // Patikriname, ar žolelių pavadinimų suma yra didesnė nei 20
        ? "Joninės garantuotos!"  // Grąžina pranešimą, jei žolelių pavadinimų suma yra didesnė nei 20
        : "Dar reikia žolelių...";  // Grąžina pranešimą, jei žolelių pavadinimų suma yra mažesnė arba lygi 20
    
    return {suma, 
            isvada
    };  // Grąžina pranešimą apie Joninių žolelių ekspertą
};
 
console.log(joniniuEkspertas(5, 6, 7, 8)); // grąžina atitinkamą pranešimą apie Joninių žolelių ekspertą


       