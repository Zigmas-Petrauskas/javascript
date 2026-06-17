"use strict";

// Grąžinti raktus ir reikšmes 

const getKeysAndValues = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    console.log("Keys:", keys);
    console.log("Values:", values);
};

getKeysAndValues({ a: 1, b: 2, c: 3 });
getKeysAndValues({ key: true });