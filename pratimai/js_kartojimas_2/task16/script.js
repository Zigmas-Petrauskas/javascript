"use strict";

// ieskokSavaitgalio

// Kiekvienas mokinys nori rasti savatigalį... net koduose.

const ieskokSavaitgalio = (minutes) => {
    const yraPoilsioDiena = minutes.some(minute => minute < 120);
    if (yraPoilsioDiena) {
        return "Puiku - rastas savaitgalis!";
    }

    return "Reikia poilsio dienos!!";
};

console.log(ieskokSavaitgalio([180, 240, 300, 200, 400, 50, 60]));