let arrayColores = ["rojo", "amarillo", "azul", "verde"];
let secuencia = [];
let coloresCadena = "Memoriza la siguiente secuencia:\n";
let correcto = true;
let opcion;
let posRandom;
let historialPartidas = [];
let modoJuego = "CLÁSICO";


while (opcion != 5) {
    let menu = "Modo actual: SUPERVIVENCIA\nColores actuales: verde, lila, azul, negro, amarillo\nPartidas jugadas: 4\n1. INICIAR JUEGO\n2. CAMBIAR MODO\n3. CAMBIAR COLORES\n4. VER HISTORIAL DE PARTIDAS\n5. SALIR";
    opcion = parseInt(prompt());

    switch(opcion) {
        case 1:
              
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
    }

    let rondas = parseInt(prompt("Ingrese la cantidad de rondas que desea jugar"));
    for (let index = 0; index < rondas; index++) {
        posRandom = Math.floor(Math.random() * (arrayColores.length-1));      
    }
    posRandom = Math.floor(Math.random() * (arrayColores.length-1));
    secuencia.push(posRandom);
    coloresCadena += arrayColores[posRandom] + "\n";
    window.alert(coloresCadena);
    let secuenciaUsuario = prompt("Ingresa la secuencia separada por espacios :)");
    secuenciaUsuario = secuenciaUsuario.split(" ");
    if(secuenciaUsuario.length === secuencia) {
        let i = 0;
        while(i>secuencia.length && correcto) {
            if(!secuenciaUsuario[index] === secuencia[index]) correcto == false;
        }
    }
    if(correcto) window.alert("Acertaste, continuemos.");
    else window.alert("Comtetiste un error, sobreviviste " + secuencia.length + " rondas.");
}