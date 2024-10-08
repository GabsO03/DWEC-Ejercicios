let posiblesPalabras = ["programacion", "javascript", "desarrollo", "servidor", "cliente", "codigo", "funcion", "variable", "computadora", "teclado", "navegador", "internet", "aplicacion", "frontend", "backend", "base", "datos", "archivo", "consola", "objetos", "lenguaje"];

//Escogemos una palabra aleatoria
let palabraAleatoria = posiblesPalabras[Math.floor(Math.random() * posiblesPalabras.length)];

//Hacemos un array para ir reemplazando las letras que acierte el usuario, también un iteraddor y una banderilla para controlar las equivocaciones y el bucle en sí
let palabraUsuario = [];
for (let i = 0; i < palabraAleatoria.length; i++) {
    palabraUsuario[i] = '*';
}
let continua = true;
let i = 6;
let cadenaIntroducida = "";

//Iniciamos el bucle para jugar
while (i>0 && continua) {

    //Construimos la cadena que vamos a mostrar
    let mostrar = "La palabra es ";
    palabraUsuario.forEach(letra => { mostrar += letra; });
    mostrar += ". Te quedan " + i + " equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra";
    
    cadenaIntroducida = prompt(mostrar);

    //Comprobamos que intenta adivinar una letra o la palabra entera
    if(cadenaIntroducida.length > 1) {

        //Si es una palabra y la acierta le avisa el resultado
        if(cadenaIntroducida === palabraAleatoria) {
            continua = false;
            window.alert("Felicitaciones, has adivinado la palabra");
        }
        else window.alert("Lo sentimos, no has adivinado la palabra");
    }
    else {

        //Aquí comprueba que la letra que metió sí está en la palabra y entonces recorre la palabra para reemplazar el caracter en el array que se muestra
        let reemplazar = palabraAleatoria.indexOf(cadenaIntroducida) >= 0;
        if(reemplazar) {
            for (let index = 0; index < palabraAleatoria.length; index++) {
                if(palabraAleatoria[index] === cadenaIntroducida) palabraUsuario[index] = cadenaIntroducida;
            }
            //Aquí comprueba si ya acertó todas
            if(palabraUsuario.filter(letra => letra==='*').length === 0) {
                continua = false;
                window.alert("Felicitaciones, has adivinado la palabra");
            }
        }
        else {
            //Aquí si no acertó se va quedando sin intentos y si ya no tiene más, le dice que perdió
            i--;
            if(i===0) window.alert("Ya no te quedan intentos, la palabra era " + palabraAleatoria);
        }
    }
}

