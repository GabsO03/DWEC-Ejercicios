let profesional = new Map();

profesional.set('nombre',"Adrian");
profesional.set('edad',21);
profesional.set('profesion',"Analista");

let arrayProfesional = [...profesional];

/*profesional.forEach((valor, clave) => {
    arrayProfesional.push([clave, valor]);
});*/

//Puse dos formas, porque haciendo el ejercicio 58 me di cuenta que se podía hacer lo mismo con el rest, pero lo dejo ahí

console.log(arrayProfesional);