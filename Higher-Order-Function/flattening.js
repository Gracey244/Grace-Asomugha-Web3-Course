const arrays = [[1, 2, 3], [4, 5], [6]];

const flattened = arrays.reduce((acc, current) => acc.concat(current), []);

console.log(flattened);  // → [1, 2, 3, 4, 5, 6]
