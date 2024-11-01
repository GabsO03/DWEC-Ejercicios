let persona1 = new Map();
persona1.set('nombre', "Alejandro");
persona1.set('edad', 27);

let persona2 = new Map();
persona2.set('ciudad', "Jaen");
persona2.set('pais', "España");

let personaCompleta = new Map();

persona1.forEach((valor, atributo) => {
    personaCompleta.set(atributo, valor);
});

persona2.forEach((valor, atributo) => {
    personaCompleta.set(atributo, valor);
});

console.log(personaCompleta);