let tablero =
[
	['🌱', '🌱', '🍎', '🌱', '🌱'],
	['🍎', '🧱', '🌱', '🧱', '🍎'],
	['🌱', '🧱', '🐍', '🌱', '🌱'],
	['🌱', '🍎', '🌱', '🧱', '🌱'],
	['🍎', '🌱', '🌱', '🍎', '🧱'],
	['🌱', '🌱', '🌱', '🌱', '🍎'],    
]

function mostrarTablero(array) {
    console.table(array);
}

function intercambiaCasilla(array, x1, y1, x2, y2) {
    if(array[x2][y2]!=='🧱') {
        array[x1][y1] = '🌱';
        array[x2][y2] = '🐍';
        return [x2,y2]; 
    }
    else return [x1,y1]; //si es ladrillo le devuelve la misma posición para que no se mueva
}

function contarManzanas(array) {
    return array.filter(elemento => elemento === '🍎').length;
}

function moverSerpiente(coordenadas, direccion, tablero) {
    let nuevaCoordenada;
    switch(direccion) {
        case "W":
            nuevaCoordenada = coordenadas[0] > 0 ? coordenadas[0] - 1 : tablero.length - 1;
            return intercambiaCasilla(tablero, coordenadas[0], coordenadas[1], nuevaCoordenada, coordenadas[1]);
        case "A":
            nuevaCoordenada = coordenadas[1] > 0 ? coordenadas[1] - 1 : tablero[0].length - 1;
            return intercambiaCasilla(tablero, coordenadas[0], coordenadas[1], coordenadas[0], nuevaCoordenada);
        case "S":
            nuevaCoordenada = coordenadas[0] < tablero.length - 1 ? coordenadas[0] + 1 : 0;
            return intercambiaCasilla(tablero, coordenadas[0], coordenadas[1], nuevaCoordenada, coordenadas[1]);
        case "D":
            nuevaCoordenada = coordenadas[1] < tablero[0].length - 1 ? coordenadas[1] + 1 : 0;
            return intercambiaCasilla(tablero, coordenadas[0], coordenadas[1], coordenadas[0], nuevaCoordenada);
        default:
            return coordenadas; // Si no es una dirección válida, no cambia la posición
    }
}


let direccion;
let manzanas = contarManzanas(tablero.flat());
let coordenadasSerpiente = [2 ,2];
let nuevaCoordenada;

mostrarTablero(tablero);
while (manzanas>0 && direccion!==null) {
    direccion = prompt("Ingrese la direccion hacia donde quiere que se mueva\nW->Arriba\nS->Abajo\nA->Izquierda\nD->Derecha");
    direccion = direccion.toUpperCase();

    console.clear();

    coordenadasSerpiente = moverSerpiente(coordenadasSerpiente, direccion, tablero);

    mostrarTablero(tablero);

    /*switch(direccion) {
        case "W":
            if(coordenadasSerpiente[0]>0) nuevaCoordenada = coordenadasSerpiente[0]-1;
            else nuevaCoordenada = tablero.length-1;
            coordenadasSerpiente = intercambiaCasilla(tablero, coordenadasSerpiente[0], coordenadasSerpiente[1], nuevaCoordenada, coordenadasSerpiente[1]);
            break;
        case "A":
            if(coordenadasSerpiente[1]>0) nuevaCoordenada = coordenadasSerpiente[1]-1;
            else nuevaCoordenada = tablero[0].length-1;
            coordenadasSerpiente = intercambiaCasilla(tablero, coordenadasSerpiente[0], coordenadasSerpiente[1], coordenadasSerpiente[0], nuevaCoordenada);
            break;
        case "S":
            if(coordenadasSerpiente[0]<tablero.length-1) nuevaCoordenada = coordenadasSerpiente[0]+1;
            else nuevaCoordenada = 0;
            coordenadasSerpiente = intercambiaCasilla(tablero, coordenadasSerpiente[0], coordenadasSerpiente[1], nuevaCoordenada, coordenadasSerpiente[1]);
            break;
        case "D":
            if(coordenadasSerpiente[1]<tablero[0].length-1) nuevaCoordenada = coordenadasSerpiente[1]+1;
            else nuevaCoordenada = 0;
            coordenadasSerpiente = intercambiaCasilla(tablero, coordenadasSerpiente[0], coordenadasSerpiente[1], coordenadasSerpiente[0], nuevaCoordenada);
            break;
    }*/
    manzanas = contarManzanas(tablero.flat());
}
console.log("¡Ganaste!");
