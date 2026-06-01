"use strict";

// Komandų interpretatorius

function runCommand(cmd) {  // Funkcija, kuri priima komandą ir atlieka atitinkamus veiksmus
    switch (cmd.toLowerCase()) {  // Palyginame komandą su galimais atvejais
        case "start": 
            console.log("Starting..."); 
            break;  // Kiekvienas atvejis turi savo veiksmą ir baigiasi break, kad nesiveltų į kitus atvejus
        case "stop":
            console.log("Stopping...");
            break;  
        case "pause":
            console.log("Pausing...");
            break;
        case "resume":
            console.log("Resuming...");
            break;
        default:
            console.log("Unknown command");
    }
}

runCommand("start"); // Išveda: Starting..., arba kitą atsakymą priklausomai nuo įvestos komandos