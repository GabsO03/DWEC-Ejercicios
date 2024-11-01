class Persona {
    nombre;
    edad;
    trabajo;

    constructor(nombre, edad, trabajo) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }

    cambiarTrabajo (nuevoTrabajo) {
        this.trabajo = nuevoTrabajo;
    }
}

let persona1 = new Persona("Carlos", 30, "Ingeniero");
let persona2 = new Persona("Ana", 25, "Diseñadora");
let persona3 = new Persona("Luis", 40, "Profesor");

console.log(persona1.trabajo);
console.log(persona2.trabajo);
console.log(persona3.trabajo);

persona1.cambiarTrabajo("Desarrollador");
persona2.cambiarTrabajo("Artista");
persona3.cambiarTrabajo("Investigador");

console.log(persona1.trabajo);
console.log(persona2.trabajo);
console.log(persona3.trabajo);