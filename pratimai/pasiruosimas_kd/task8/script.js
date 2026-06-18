"use strict";

const people = [
    { id: 1, name: "Jonas" },
    { id: 2, name: "Ona" },
    { id: 3, name: "Petras" }
];

const scores = [
    { id: 1, score: 10 },
    { id: 3, score: 7 },
    { id: 2, score: 9 }
];

const mergeById = (people, scores) => {
    return people.map(person => {
        const scoreData = scores.find(
            score => score.id === person.id
        );

        return {
            ...person,
            score: scoreData.score
        };
    });
};

console.log(mergeById(people, scores));