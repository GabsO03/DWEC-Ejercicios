let set = new Set([1, 2]);
let set2 = new Set([1, 2, 3, 4]);

let esSubconjunto = [...set].every(el => set2.has(el));
console.log("El primer conjunto " + (esSubconjunto? "pertenece": "no pertenece") + " al segundo");