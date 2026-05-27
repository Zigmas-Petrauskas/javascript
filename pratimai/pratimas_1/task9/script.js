"use strict";
// Tautvydas iškepė sausainių ir nori juos pasidalinti su draugais per šventę. Kiekvienas draugas atnešė tiek pat sausainių, kiek Tautvydas iškepė. Parašykite programą, kuri apskaičiuotų, kiek sausainių kiekvienas šventės dalyvis gaus, ir kiek sausainių liks Tautvydui papildomai.
let cookiesBacked = +prompt("Kiek sausinių iškepė Tautvydas?"); // 20
let friends = +prompt("Keli draugai atnešė tiek pat sausianių?"); // 4
let people = +prompt("Kiek žmonių iš viso dalyvavo šventėje?"); // 24
// Apskaičiuojame bendrą sausainių kiekį
let totalCookies = cookiesBacked + friends * cookiesBacked;
let cookiesPerPerson = Math.floor(totalCookies / people);
let remainingCookies = totalCookies % people;
// Išvedame rezultatus
console.log("Kiekvienas švetės dalyvis gauvo po", cookiesPerPerson, "sausainius.");
console.log("Tautvydui papildomai liko", remainingCookies, "sausainiai.");