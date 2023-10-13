const {find,cb} = require("../problem/problem_find");

const items = [1, 2, 3, 4, 5, 5];
const findElement = 4;

const result = find(items,cb,findElement);

console.log(result);