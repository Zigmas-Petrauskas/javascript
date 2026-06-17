"use strict";

// Pašalinti objekto savybę (class)

const student = {
    firstName: "John",
    lastname: "Smith",
    class: 12
};

delete student.class;

console.log(student);