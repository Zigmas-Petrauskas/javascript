"use strict";

// surandami DOM elementai
const billAmountInput = document.querySelector("#billAmount");
const tipRange = document.querySelector("#tipRange");
const tipPercent = document.querySelector("#tipPercent");
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

const calculateTip = () => {
    const bill = Number(billAmountInput.value); // saskaitos suma
    const percent = Number(tipRange.value); // procentu pasirinkimas

    tipPercent.textContent = `${percent}%`; // procentu atnaujinimas

    const tip = bill * percent / 100; // arbatpinigiu apskaiciavimas

    const total = bill + tip; // bendros sumos apskaiciavimas

    // parodomi skaiciavimai
    tipAmount.textContent = `${tip.toFixed(2)}`;
    totalAmount.textContent = `${total.toFixed(2)}`;
};

billAmountInput.addEventListener("input", calculateTip); // perskaiciuojama keiciant suma

tipRange.addEventListener("input", calculateTip); // perskaiciuojama suma stumdant slaideri

calculateTip(); // pradinis paskaiciavimas