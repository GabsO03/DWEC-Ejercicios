class Empleado {
    nombre;
    salario;

    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log(`${this.nombre}: Estoy trabajando`);
    }
}

class Gerente extends Empleado {
    dirigir() {
        console.log(`${this.nombre}: A trabajar`);
    }
}

let empleado1 = new Empleado("Carlos", 2000);
let empleado2 = new Empleado("Ana", 2500);
let gerente = new Gerente("Luis", 5000);

empleado1.trabajar();
empleado2.trabajar();
gerente.dirigir();
gerente.trabajar();
