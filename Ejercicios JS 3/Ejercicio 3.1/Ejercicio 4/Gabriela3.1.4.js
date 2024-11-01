fetch('Gabriela3.1.4.json')
.then((response) => response.json())
.then((data) => {
    let productosMayor100 = Array.from(data).filter((producto) => producto.precio > 100); 
    console.table(productosMayor100);
})
.catch((error) => console.error(error))

//Se puede convertir el json a array y filtrar