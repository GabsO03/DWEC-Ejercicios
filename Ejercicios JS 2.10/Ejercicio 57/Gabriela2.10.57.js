let producto = new Map();

producto.set('producto', "movil");
producto.set('precio', 250.99);
producto.set('cantidad', 5);

for (const [caracteristica, valor] of producto) {
    console.log(caracteristica + " - " + valor);
}
