"use strict";

// Get type of value

function getType(value) {
    return typeof value;
}

// Test cases

console.log(getType(10)); // "number"
console.log(getType("hello")); // "string"
console.log(getType(true)); // "boolean"
console.log(getType(undefined)); // "undefined"
console.log(getType(null)); // "object"
console.log(getType(() => {})); // "function"