"use script";

const items = [
    { name: "Phone", description: "A very nice smartphone with good camera", price: 500 },
    { name: "Laptop", description: "Powerful laptop for work and games", price: 1200 }
];

const createDescriptions = items => {
    return items.map(item => {
        let shortDescription = item.description;

        if (shortDescription.length > 25) {
            shortDescription = shortDescription.slice(0, 25) + "...";
        }

        return `${item.name} (${item.price} eur): ${shortDescription}`;
    });
};

console.log(createDescriptions(items));