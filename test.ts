const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const index = arr.findIndex((e) => e == 4);
const result = index != -1 ? arr.slice(index) : [];

console.log(result);
