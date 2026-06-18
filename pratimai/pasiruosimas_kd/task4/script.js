"use strict";

const posts = [
    { id: 1, tags: ["js", "web", "frontend"] },
    { id: 2, tags: ["js", "node", "backend"] },
    { id: 3, tags: ["css", "design", "frontend"] }
];

const getUniqueTags = posts => {
    const allTags = posts.flatMap(post => post.tags);

    return [...new Set(allTags)].sort();
};

console.log(getUniqueTags(posts));