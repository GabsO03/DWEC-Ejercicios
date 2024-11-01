fetch('Gabriela3.1.1.json')
.then((response) => response.json())
.then((data) => {
    let nombre = data.nombre;
    let edad = data.edad;
    let ciudad = data.ciudad;
    console.log(nombre);
    console.log(edad);
    console.log(ciudad);
})
.catch((error) => console.error(error))

//Podemos ver que si se encuentra el archivo, entonces lo convierte e imprime los datos por consola, de caso contrario imprime el error