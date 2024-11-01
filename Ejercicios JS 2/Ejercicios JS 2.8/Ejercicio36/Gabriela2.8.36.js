let alumnos = [
    { nombre: "Gabriela", edad: 2, nota: 9 },
    { nombre: "Alex", edad: 20, nota: 7 },
    { nombre: "Adrián", edad: 21, nota: 9.5 },
    { nombre: "Jesus", edad: 22, nota: 6 },
    { nombre: "Alejandro", edad: 27, nota: 8.2 }
]

for (const alumno of alumnos) {
    if (alumno.nota > 8) console.log(alumno.nombre);
}