let arrayAlumnos = [
    alumno1 = {
        id: 1,
        name: "Gabriela",
        edad: 21
    },
    alumno2 = {
        id: 2,
        name: "Alex",
        edad: 20
    },
    alumno3 = {
        id: 3,
        name: "Adrian",
        edad: 21
    },
    alumno4 = {
        id: 4,
        name: "Alejandro",
        edad: 27
    },
    alumno5 = {
        id: 4,
        name: "Ismael",
        edad: 22
    },
    alumno6 = {
        id: 5,
        name: "Jesus",
        edad: 22
    },
    alumno7 = {
        id: 5,
        name: "Juan",
        edad: 27
    }
]

let ids = new Set();

let alumnosSinDuplicar = arrayAlumnos.filter(alumno => {
    if(ids.has(alumno.id)) return false;
    else {
        ids.add(alumno.id);
        return true;
    }
});
console.log(alumnosSinDuplicar);