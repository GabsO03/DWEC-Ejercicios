/*function temporizador() {
    console.log('Inicio del programa');
    setTimeout(() => {
        console.log('Han pasado 2 segundos');
    }, 2000);
    console.log('Fin del programa');
}
temporizador();*/
//Aparecerá el primer y el útlimo console.log primero y luego de dos segundos el del medio porque como todo se ejecuta a la vez no esperan a que se ejecute el del timeout

//Modificación
function temporizador() {
    for (let index = 1; index <= 5; index++) {
        setTimeout(() => {
            console.log('Han pasado ' + index + ' segundos');
        }, index * 1000);
    }
}

temporizador();