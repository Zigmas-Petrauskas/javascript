"use strict";
// Keltas gali perkelti tam tikrą skaičių automobilių vienu metu. Parašykite programą, kuri apskaičiuotų, kiek kartų keltuvas turės plaukti, kad pervežtų visus automobilius, ir kiek automobilių liks neperkelta, jei automobilių skaičius nėra lygus keltuvo talpai.
let cars = +prompt("Automobilių skaičius:"); // 27
let ferryCapacity = +prompt("Į keltą talpa automobilių:"); // 10
// Apskaičiuojame, kiek kartų keltas turės plaukti ir kiek automobilių liks neperkelta
let trips = Math.floor(cars / ferryCapacity);
let remainingCars = cars % ferryCapacity;
// Išvedame rezultatus
console.log("Perkels per kartus:", trips);
console.log("Liks neperkelta:", remainingCars);