"use strict";

// trumpinkDienosPlana

// Neperdegti -svarbiausia taisykė

const trumpinkDienosPlana = (planas) => {
    if (planas.length > 5) {
        planas = planas.slice(0, 5);  // paliekami pirmi 5 elementai
    }

    return planas.sort(); // rikiuojama pagal abėcėlę
};

console.log(trumpinkDienosPlana
    ([
        "Mokytis Js", "Kartoti", "Sportuoti", "Sutvarkyti kambarį", "Paskaityti", "Išnešti šiukšles"
    ])
);