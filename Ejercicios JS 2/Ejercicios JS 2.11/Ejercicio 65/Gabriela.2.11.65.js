/*function peticionPokemon(nombrePokemon) {
    return new Promise((resolve, reject) =>
        fetch("https://pokeapi.co/api/v2/pokemon/" + nombrePokemon)
            .then((response) => {
                if(response.ok) return response.json();
                else reject("No se pudo resolver la petición");
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error.message);
            })
    );
}*/

function peticionPokemon(nombrePokemon) {
    return new Promise ((resolve, reject) => {
        if(nombrePokemon === 'ditto') resolve("Nombre: " + nombrePokemon + " Descripción: Bota fuego");
        else reject("No se pudo resolver la petición" );
    });
}

async function consiguePokemon(nombrePokemon) {
    try {
        let resultado = await peticionPokemon(nombrePokemon);
        console.log(resultado);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Operación terminada");
    }
}

consiguePokemon('ditto');
consiguePokemon('charizard');