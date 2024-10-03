let tablero =
[
	['🌱', '🌱', '🍎', '🌱', '🌱'],
	['🍎', '🧱', '🌱', '🧱', '🍎'],
	['🌱', '🧱', '🐍', '🌱', '🌱'],
	['🌱', '🍎', '🌱', '🧱', '🌱'],
	['🍎', '🌱', '🌱', '🍎', '🧱'],
	['🌱', '🌱', '🌱', '🌱', '🍎'],    
]

function intercambiaCasilla(array, x1, y1, x2, y2) {
    if(array[x2][y2]!=='🧱') {
        array[x1][y1] = '🌱';
        array[x2][y2] = '🐍';
        return [x2,y2]; 
    }
    else return [x1,y1]; //si es ladrillo le devuelve la misma posición para que no se mueva
}


let direccion;
let manzanas = tablero.flat().filter(elemento => elemento === '🍎').length;
let coordenadasSerpiente = [2 ,2];
let nuevaCoordenada;
console.table(tablero);
while (manzanas>0 && direccion!==null) {
    direccion = prompt("Ingrese la direccion hacia donde quiere que se mueva\nW->Arriba\nS->Abajo\nA->Izquierda\nD->Derecha");
    direccion = direccion.toUpperCase();
    console.clear();
    switch(direccion) {
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
    }
    console.table(tablero);
    manzanas = tablero.flat().filter(elemento => elemento === '🍎').length;
}
console.log("¡Ganaste!");
