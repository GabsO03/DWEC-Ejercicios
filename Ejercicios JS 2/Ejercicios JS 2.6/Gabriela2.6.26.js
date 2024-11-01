let arrayColores = ["rojo", "amarillo", "azul", "verde"]
let secuencia = [];
let coloresCadena = "Memoriza la siguiente secuencia:\n";
let correcto = true;
while (correcto) {
    let posRandom = Math.floor(Math.random() * (arrayColores.length-1));
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