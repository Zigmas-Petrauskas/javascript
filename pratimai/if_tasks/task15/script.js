"use strict";

// Akmuo, popierius, zirkles

let player1 = prompt("Player 1:");
let player2 = prompt("Player 2:");

if (player1 === player2) {
    console.log("draw");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
) {
    console.log("Player 1 wins");
} else {
    console.log("Player 2 wins");
}