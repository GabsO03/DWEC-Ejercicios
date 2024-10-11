let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

set = new Array(...set);
set.push(6);

console.log(set);