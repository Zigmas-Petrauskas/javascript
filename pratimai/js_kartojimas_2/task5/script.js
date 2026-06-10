"use strict";

// tvarkaraštisSuPrioritetais

//funcija rušiuoja uždoutis pagal prioritetą
const tvarkaraštisSuPrioritetais = (uzduotys) => {
    return uzduotys

    // rikiuojama nuo mažiausio prioriteto
    .sort((a, b) => a.prioritetas - b.prioritetas)

    //paliekamas u=duoties pavadinimas
    .map(uzduotis => uzduotis.uzduotis);
};

console.log(tvarkaraštisSuPrioritetais
    ([
        { uzduotis: "Pasportuoti", prioritetas: 2 },
        { uzduotis: "Kartoti JS", prioritetas: 1 }
    ])
);