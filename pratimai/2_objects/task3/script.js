"use strict";

// Scrabble taškų suma

const titles = [
    { title: "N", score: 1 },
    { title: "K", score: 5 },
    { title: "Z", score: 10 },
    { title: "X", score: 8 },
    { title: "D", score: 2 },
    { title: "A", score: 1 },
    { title: "E", score: 1 },
];

const getMaxScore = (titles) => {
    let totalScore = 0;

    for (const title of titles) {
        totalScore += title.score;
    }

    return totalScore;
};

console.log("The player's maximum score:", getMaxScore(titles));