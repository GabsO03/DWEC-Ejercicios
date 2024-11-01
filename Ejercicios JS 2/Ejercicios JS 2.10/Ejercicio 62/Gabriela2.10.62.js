let personas = [
    { id: 1, nombre: 'Maria' },
    { id: 2, nombre: 'Juan' },
    { id: 3, nombre: 'Adrian' },
    { id: 1, nombre: 'Gabriela' },
    { id: 4, nombre: 'Jesus' },
    { id: 2, nombre: 'Alex' },
    { id: 5, nombre: 'Alejandro' }
];
let personasMap = new Map();
personas.forEach(persona => {
    personasMap.set(persona.id, persona.nombre);
});

let personasSinDuplicado = [];
personasMap.forEach((valor, clave) => {
    personasSinDuplicado.push({id: clave, nombre: valor});
});
console.table(personasSinDuplicado);
