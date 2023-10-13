const {reduce,cb} = require("../problem/problem_reduce");


const items = [1, 2, 3, 4, 5, 5]; 

let result = reduce(items, cb,0)
console.log(result)