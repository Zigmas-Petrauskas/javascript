"use strict";

// makeBanner

const makeBanner = (text) => {
    const border = "*".repeat(text.length + 4); 
    
    const banner = `${border} * ${text} * ${border}`;  // sukuriamas galutinis baneris

    return banner;
};

console.log(makeBanner("Welcome to DigitalCrafts"));