"use strict";

const employees = [
    { name: "Jonas", department: "IT", salary: 2000 },
    { name: "Ona", department: "HR", salary: 1800 },
    { name: "Petras", department: "IT", salary: 2200 },
    { name: "Greta", department: "HR", salary: 2100 }
];

const sortBydepartment = employees => {
    return [...employees].sort((a, b) => a.department.localeCompare(b.department));
};

const sortBySalaryDesc = employees => {
    return [...employees].sort((a, b) => b.salary - a.salary);
};

console.log(sortBydepartment(employees));
console.log(sortBySalaryDesc(employees));