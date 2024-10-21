class Rectangulo {
    ancho;
    alto;

    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.alto * this.ancho;
    }
}

let rectangulo1 = new Rectangulo(5, 10);
let rectangulo2 = new Rectangulo(8, 12);
let rectangulo3 = new Rectangulo(15, 20);

console.log(`Área del rectángulo 1: ${rectangulo1.calcularArea()}`);
console.log(`Área del rectángulo 2: ${rectangulo2.calcularArea()}`);
console.log(`Área del rectángulo 3: ${rectangulo3.calcularArea()}`);