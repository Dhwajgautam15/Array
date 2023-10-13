const flatten = require("../problem/problem_flatten");

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

let result = flatten(nestedArray);
console.log(result);