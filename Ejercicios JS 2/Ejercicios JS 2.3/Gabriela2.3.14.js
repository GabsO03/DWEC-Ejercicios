let numero = prompt("Dame un número");

let tablaNumero = "";

for (let index = 1; index <= 10; index++) {
    tablaNumero += numero + " x " + index + " = " + (numero*index) + "\n";
}

window.alert(tablaNumero);
