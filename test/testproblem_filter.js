const { filter, even } = require('../problem/problem_filter');

const items = [1, 2, 3, 4, 5, 5];

const result = filter(items, even);
console.log(result)