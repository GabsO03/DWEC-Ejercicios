let persona1 = new Map();
persona1.set('nombre', "Jesus");
persona1.set('edad', 22);

let persona2 = new Map();
persona2.set('ciudad', "Jaen");
persona2.set('pais', "España");

let personaCompleta = new Map();

persona1.forEach((valor, atributo) => {
    console.log(atributo, valor);
    personaCompleta.set(atributo, valor);
});

persona2.forEach((valor, atributo) => {
    console.log(atributo, valor);
    personaCompleta.set(atributo, valor);
});

console.log(personaCompleta);