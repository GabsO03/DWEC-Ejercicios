const tablero = [
    ['📦', '💣', '💣'],
    ['📦', '📦', '📦'],
    ['💣', '📦', '📦']  
  ];

let tableroMostrar = [
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦']
  ];

let sigueJuego = true;
while (sigueJuego) {
    console.table(tableroMostrar);
    let coordenada = prompt("Ingrese una coordenada separado por espacios (x y)");
    coordenada = coordenada.split(" ");
    console.log(coordenada);
    if(coordenada[0]>=0&&coordenada[0]<tablero.length && coordenada[1]>=0&&coordenada[1]<tablero[0].length) {
        if(tablero[coordenada[0]][coordenada[1]] === "💣") {
            tableroMostrar[coordenada[0]][coordenada[1]] = "💥";
            console.table(tableroMostrar);
            console.log("Detonaste una bomba, perdiste.");
            sigueJuego = false;
        }
        else if(tableroMostrar[coordenada[0]][coordenada[1]] === "💨") {
            console.log("Ya destapaste esa caja");
        }
        else {
            let tableroPlano = tablero.flat();
            let cajasVacias = tableroPlano.filter(elemento => elemento === "📦").length;
            if(cajasVacias===0) {
                console.log("Felicidades, ganaste");
                sigueJuego = false;
            }
            else {
                tableroMostrar[coordenada[0]][coordenada[1]] = "💨";
                console.log("Libre, puedes seguir jugando.");
            }
        }
    }
    else console.log("Esa coordenada no existe");
}




