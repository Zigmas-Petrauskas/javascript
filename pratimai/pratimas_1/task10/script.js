"use strict";
// Marius nori sutaupyti saldainių Kalėdoms. Kiekvieną dieną jis gauna tam tikrą kiekį saldainių, tačiau taip pat suvalgo keletą jų. Parašykite programą, kuri apskaičiuotų, kiek saldainių Marius sutaupys iki Kalėdų, kiek dovanų galės paruošti savo draugams ir kiek saldainių liks po dovanų paruošimo.
let candiesPerDay = +prompt("Kiek saldainių gauna Marius?"); // 15
let eatenPerDay = +prompt("Po kiek saldaini7 suvalgo?"); // 4
let daysUntilChristmas = +prompt("Kiek dienų liko iki Kalėdų?"); // 10
let candiesPerGift = +prompt("Kiek saldainių reikia dovanai?"); // 4
// Apskaičiuojame, kiek saldainių Marius sutaupys iki Kalėdų
let savedCandies = (candiesPerDay - eatenPerDay) * daysUntilChristmas;
let gifts = Math.floor(savedCandies / candiesPerGift);
let remainingCandies = savedCandies % candiesPerGift;
// Išvedame rezultatus
console.log("Marius dovanas paruoš", gifts, "draugų.");
console.log("Supakavus dovanas liks", remainingCandies, "saldainiai.");