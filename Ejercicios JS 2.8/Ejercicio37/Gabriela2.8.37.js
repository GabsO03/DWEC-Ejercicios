let producto = {
    nombre: "Televisor",
    precio: 720,
    cantidad: 3
};

let producto2 = Object.assign({}, producto);

producto2.cantidad = 5;

console.log("Original:", producto);
console.log("Copia:", producto2);