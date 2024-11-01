let arrayColores = ["rojo", "amarillo", "azul", "verde"];
let secuencia = [];
let coloresCadena = "";
let correcto = true;
let continuaJuego = true;
let opcion;
let posRandom;
let historialPartidas = [];
let modoJuego = "CLÁSICO";

function iniciaJuego () {
    let rondas;
    let contador = 0;
    if(modoJuego === 'CLÁSICO') rondas = parseInt(prompt("¿Cuántas rondas deseas participar?"));
    
    continuaJuego = true;
    secuencia = [];
    correcto = true;
    coloresCadena = "Memoriza la siguiente secuencia:\n";
    
    while(continuaJuego) {
        //Escpge una posición aleatoria del array;
        posRandom = Math.floor(Math.random() * (arrayColores.length)); 

        //Inserta un color del array de colores con esa posición y a la vez lo añade a la cadena que queremos mostrar

        secuencia.push(arrayColores[posRandom]);
        coloresCadena += arrayColores[posRandom] + "\n";

        //La muestra y luego le pide que ingrese la secuencia
        window.alert(coloresCadena);
        let secuenciaUsuario = prompt("Ingresa la secuencia separada por espacios :)");

        //Divide la secuencia en un array separado por espacios
        secuenciaUsuario = secuenciaUsuario.split(" ");

        //Si la secuencia que ahora es un array tiene la misma cantidad de palabras que la secunecia original, entonces verifica que sean lo mismo, si no ya no es necesario verificar
        if(secuenciaUsuario.length === secuencia.length) {
            let i = 0;

            //Aquí recorre el array para ver que todos los colores coinciden
            while(i<secuencia.length && correcto) {
                if(secuenciaUsuario[i] !== secuencia[i]) correcto = false;
                i++;
            }
            //Si acertó y está en modo clásico, le quita 1 a rondas, se verifica porque si se equivocó no le sume una ronda más
            if(correcto && modoJuego === 'CLÁSICO') contador++;

        }
        else correcto = false;

        if(modoJuego === 'CLÁSICO') continuaJuego = contador < rondas && correcto;
        else continuaJuego = correcto;

        if(continuaJuego) window.alert("Acertaste, continuemos.");
        else if (!continuaJuego && correcto) { 
            window.alert("Acertaste y terminaste el juego.");
            historialPartidas.push("MODO CLÁSICO " + rondas + " rondas. " + arrayColores.length + " colores. Partida ganada.\n");
        }
        else {
            window.alert("Cometiste un error, sobreviviste " + secuencia.length + " rondas.");
            if(modoJuego === 'SUPERVIVENCIA') historialPartidas.push("MODO SUPERVIVENCIA " + arrayColores.length + " colores. " + secuencia.length + " rondas ganadas\n");
            else historialPartidas.push("MODO CLÁSICO " + rondas + " rondas. " + arrayColores.length + " colores. Derrota en ronda " + secuencia.length + ".\n");
        }
    }
}

function cambiarModo() {
    let nuevoModo = parseInt(prompt("¿Deseas cambiar el modo de juego a " + (modoJuego === 'CLÁSICO'? "SUPERVIVENCIA?" : "CLÁSICO?") + "\n1. Sí 2. No"));
    if(NaN(nuevoModo)) window.prompt("Ingrese una opción valida, " + nuevoModo + " no es valido.");
    else {
        if(nuevoModo === 1) modoJuego = (modoJuego === 'CLÁSICO')? "SUPERVIVENCIA?" : "CLÁSICO?";
        else if(nuevoModo !== 1 && nuevoModo !== 2) window.prompt("Ingrese una opción valida, " + nuevoModo + " no es valido.");
    }
}

function cambiarColores() {
    let nuevosColores = prompt("Ingresa los nuevos colores separados por espacios (rojo verde azul)");

    //Si ingresó una cadena vacía entonces no hay cambios para que no se quede vacío
    if (nuevosColores.length === 0 || nuevosColores !== " ") window.alert("No hay cambios.");
    else {
        arrayColores = nuevosColores.split(" ");
        window.alert("Colores actualizados: " + arrayColores);
    }
}




while (opcion != 5) {
    let menu = "Modo actual: " + modoJuego + "\nColores actuales:  " + arrayColores + "\nPartidas jugadas: " + historialPartidas.length + "\n1. INICIAR JUEGO\n2. CAMBIAR MODO\n3. CAMBIAR COLORES\n4. VER HISTORIAL DE PARTIDAS\n5. SALIR";
    opcion = parseInt(prompt(menu));
    if (isNaN(opcion)) continue; //Esto es para que si mete algo que eno es número, entonces solo vuelve al menú y no da fallo

    switch(opcion) {
        case 1:
            iniciaJuego();
            break;
        case 2:
            cambiarModo();
            break;
        case 3:
            cambiarColores();
            break;
        case 4:
            window.alert(historialPartidas);
            break;
        case 5:
            window.alert("Saliendo del juego. ¡Hasta luego!");
            break;
        default:
            window.alert("Opción no válida.");
    }
}