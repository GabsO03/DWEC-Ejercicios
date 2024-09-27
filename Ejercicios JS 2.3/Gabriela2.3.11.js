let numeroSecreto = 56185;
let numeroUsuario = parseInt(prompt("Adivina el número en el que estoy pensando"));

if(numeroUsuario === numeroSecreto) window.alert("Acertaste");
else {
    if(numeroSecreto>numeroUsuario) 
        numeroUsuario = parseInt(prompt("El número es mayor al que introdujiste"));

    else numeroUsuario = parseInt(prompt("El número es menor al que introdujiste"));
    if(numeroUsuario === numeroSecreto) window.alert("Acertaste");
    else window.alert("No acertaste");
}