"use strict";

// Išvesti objekto savybes

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12
};

const printProperties = (obj) => {
    console.log(Object.keys(obj).join(", "));
};

printProperties(student);