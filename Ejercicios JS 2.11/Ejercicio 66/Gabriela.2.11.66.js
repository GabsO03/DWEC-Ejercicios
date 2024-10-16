function leeArchivos() {
    try {
        console.log("Leyendo archivo");
        throw new Error ("No se pudo terminar de leer el archivo");
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("El archivo se cerró");
    }
}