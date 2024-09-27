let contrasenya = "78845a-?";
let contrasenyaIntroducida = prompt("Introduce la contraseña");

if(contrasenya === contrasenyaIntroducida) window.alert("Acertaste puedes ingresar");
else {
    contrasenyaIntroducida = prompt("Fallaste, te quedan dos intentos");
    if(contrasenya === contrasenyaIntroducida) window.alert("Acertaste puedes ingresar");
    else {
        contrasenyaIntroducida = prompt("Fallaste, te quedan un intento");
        if(contrasenya === contrasenyaIntroducida) window.alert("Acertaste puedes ingresar");
        else window.alert("Fallaste, no puedes entrar");
    }
}
