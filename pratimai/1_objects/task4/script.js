"use strict";

// Rasti objekto ilgį 

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    city: "Paris"
};

const getObjectLength = (obj) => {
    return Object.keys(obj).length;
};

console.log(getObjectLength(person));