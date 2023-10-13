const { map , get_triple } = require("../problem/problem_map");

const items =[1,2,3,4,5,6];

let result = map(items , get_triple);
console.log(result);
