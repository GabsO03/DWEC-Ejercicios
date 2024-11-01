let set = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);

let set3 = new Set([...[...set].filter(el => !set2.has(el)), 
...[...set2].filter(el => !set.has(el))]);

console.log(set3);