"use strict";

// Ar objektas tuščias

const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};

console.log(isEmptyObject({}));
console.log(isEmptyObject({ a: 1 }));