let set = new Set();
let set2 = new Set();

set.add(1);
set.add(2);
set.add(3);

set2.add(3);
set2.add(4);
set2.add(5);

let set3 = new Set([...set, ...set2]);

console.log(set3);