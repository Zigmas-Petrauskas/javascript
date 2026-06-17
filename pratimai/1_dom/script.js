"use strict";

const colorButtons = document.querySelectorAll(".color-btn");

const colorBox = document.querySelector("#color-box");

colorButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Paimame spalvą iš data-color atributo
        const selectedColor = button.dataset.color;

        // Pakeičiame dėžutės spalvą
        colorBox.style.backgroundColor = selectedColor;

        // Nuimame selected klasę nuo visų mygtukų
        colorButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });

        // Pridedame selected klasę paspaustam mygtukui
        button.classList.add("selected");
    });
});