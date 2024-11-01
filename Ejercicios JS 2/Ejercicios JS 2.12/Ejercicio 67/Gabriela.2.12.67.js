class Coche {
    marca;
    modelo;
    anyo;

    constructor(marca, modelo, anyo) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }

    getDescription () {
        return `Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.anyo}`;
    }
}  

let coche1 = new Coche("Toyota", "Corolla", 2020);
let coche2 = new Coche("Honda", "Civic", 2018);
let coche3 = new Coche("Ford", "Focus", 2022);

console.log(coche1.getDescription());
console.log(coche2.getDescription());
console.log(coche3.getDescription());