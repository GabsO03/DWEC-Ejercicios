function esPar (num) {
    try {
        if(typeof(num) === 'number') console.log(num%2===0? num + " es par":" es impar");
        else throw new Error("El valor no es un número");
    } catch (error) {
        console.error(error.message); 
    } finally {
        console.log("La operación se ha completado");
    }
}

esPar(80);
esPar("notAnumber");