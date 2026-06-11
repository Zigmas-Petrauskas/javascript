"use srict";

// sudarykbalansoAtskaita

// Darbas + Poilsis = Balansas

// Sujungiamas darbas ir poilsis į vieną ataskaitą
const sudarykBalansoAtaskaita = (darbas, poilsis) => {
    const veiklos = darbas.concat(poilsis); // sujungiami 2 masyvai
    return `Dienos balansas: ${veiklos.length} veiklų.`
};

console.log(sudarykBalansoAtaskaita(
    ["Mokytis", "Kartotis", "Testuoti"],
    ["Pietūs", "Pasivaikščiojimas", "Miegas"])
);