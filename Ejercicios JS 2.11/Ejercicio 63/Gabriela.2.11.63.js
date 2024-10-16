function division (dividendo, divisor) {
    try {
        if(divisor !== 0) {
            let cociente = dividendo / divisor;
            console.log(cociente);
        }
        else throw new Error ("Hubo un error al realizar la operación, veifica que el divisor sea diferente de cero");
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("La operación se ha completado");
    }
}

division(8, 2);
division(2, 0);