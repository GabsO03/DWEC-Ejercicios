fetch('Gabriela3.1.3.json')
.then((response) => response.json())
.then((data) => {
    let persona1 = data[0];
    let persona2 = data[1];
    let persona3 = data[2];

    for (const atributo in persona1) {
        console.log(persona1[atributo]);
    }

    for (const atributo in persona2) {
        console.log(persona2[atributo]);
    }

    for (const atributo in persona3) {
        console.log(persona3[atributo]);
    }
})
.catch((error) => console.error(error))

//Aquí vemos que se puede acceder a varios elementos del json según su posición y atributo, incluyendo objetos