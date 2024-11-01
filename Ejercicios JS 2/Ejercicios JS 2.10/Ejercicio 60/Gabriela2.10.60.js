let personas = [
    { id: 1, nombre: 'Gabriela' },
    { id: 2, nombre: 'Alex' },
    { id: 3, nombre: 'Adrian' },
    { id: 4, nombre: 'Jesus' },
    { id: 5, nombre: 'Alejandro' }
];

let personasMap = new Map();
personas.forEach(persona => {
    personasMap.set(persona.id, persona.nombre);
});

console.log(personasMap);