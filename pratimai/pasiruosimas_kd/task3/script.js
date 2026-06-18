"use strict";

const input = "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

const parseCSV = csv => {
    const rows = csv.split("\n");

    const headers = rows[0].split(",");

    return rows.slice(1).map(row => {
        const values = row.split(",");

        return {
            [headers[0]]: values[0],
            [headers[1]]: Number(values[1]),
            [headers[2]]: values[2],
        };
    });
};

console.log(parseCSV(input));