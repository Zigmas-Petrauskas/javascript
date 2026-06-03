"use strict";

// Masyvai - array
/*

let fruits = ["Apple", "Orange", "Plum"];

fruits[10] = "Banana";

console.log(fruits);

*/

/*
// su spread operatotium
let array1 = [11, 22, 33];
let array2 = [12, 13, 14];

let result = [...array1, 30, 40, 60, ...array2];

console.log(result);

*/

/*
//splice operatorius

let array = [1, 2, 3];
array.splice(1, 0, 9);
console.log(array);

*/


// slice metodas

/*
// map metodas

let likesArray = [11, 22, 33];

let poweredLikes = likesArray.map((likes) => {
    let power = likes **2;
    return power;
})

console.log(poweredLikes);

*/

/*
//forEach metodas

let likesArray = [11, 22, 33];
let sum = 0;

likesArray.forEach((likes) => sum += likes);
console.log(sum);
*/

/*

let names = ["John", "Ann", "Derek"];
names.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

*/

/*
let numbers = [1, 2, 3, 4];
let total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10

*/


let numbers = [10, 20, 33, ];
let sum1 = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(sum1);

// 0 + 10 = 10
// 10 + 20 = 30
// 30 +30 = 60




let sum2 = numbers.reduce((sum, number) => {
    return sum + number;
});

console.log(sum2);