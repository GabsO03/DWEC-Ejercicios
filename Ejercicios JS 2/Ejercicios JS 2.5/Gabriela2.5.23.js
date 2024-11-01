let opcion;
let canciones = new Array();
while(opcion!==4) {
    opcion = parseInt(prompt("Ingresa una opción\n1. AGREGAR CANCION\n2. BUSCAR CANCIONES\n3. LISTAR ARTISTAS\n4. SALIR"));

    switch(opcion) {
        case 1:
            let nombreYArtista = prompt("Ingrese el nombre de la canción y el nombre del artista separado por coma (Canción,Artista)");
            nombreYArtista = nombreYArtista.toLowerCase();
            nombreYArtista = nombreYArtista.split(",");
            console.log(nombreYArtista);
            window.alert("Agregando canción");
            canciones.push(nombreYArtista);
            window.alert("Canción agregada correctamente");
            break;
        case 2:
            let nombreABuscar = prompt("Ingresa el nombre del artista");
            nombreABuscar = nombreABuscar.toLowerCase();
            let listaCanciones = "Lista de canciones de este artista\n";
            for (const cancion of canciones) {
                if (cancion[1] === nombreABuscar) listaCanciones += cancion[0] + "\n";
            }            
            window.alert(listaCanciones);
            break;
        case 3:
            let listaArtistas = "Lista de artistas\n";
            for (const cancion of canciones) {
                listaArtistas += cancion[1] + "\n";
            }
            window.alert(listaArtistas);
            break;
        case 4:
            break;
    }
}