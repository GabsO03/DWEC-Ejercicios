let opcion;
let arrayTarea = [];
function mostrartareas(arrayTarea) {
    let lista = "Lista de tareas\n";
    for (let index = 0; index < arrayTarea.length; index++) {
        const tarea = arrayTarea[index];
        lista += "Nº" + index + ": " + tarea + "\n";
    }
    window.alert(lista);
}

while (opcion!==5) {
    opcion = parseInt(prompt("Menu:\n1. Agregar tarea\n2. Modificar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir"));
    switch(opcion) {
        case 1:
            //Pide una tarea y la agrega
            let newTarea = prompt("Ingresa una tarea");
            arrayTarea.push(newTarea);
            break;
        case 2:
            let posTarea = prompt("Ingresa el número de la tarea tarea"); 
            //Verifica que exista una tarea con ese número antes de mostrarla
            if(posTarea>=0 && posTarea<arrayTarea.length) {
                let modificacion = prompt("Nº" + posTarea + ": " + arrayTarea[posTarea] + "\nIngresa la modificación o reemplazo"); 
                arrayTarea[posTarea] = modificacion;
            }
            window.alert("No existe esa tarea");
            break;
        case 3:
            posTarea = prompt("Ingresa el número de la tarea tarea"); 
            while(confirmacion!==1||confirmacion!==2) {
                let confirmacion = parseInt(prompt("Nº" + posTarea + ": " + arrayTarea[posTarea] + "\n¿Estás seguro de eliminarla?\n1. Sí\n2. No")); 
            }
            if(confirmacion===1) arrayTarea.splice[posTarea,1];
            break;
        case 4:
            mostrartareas(arrayTarea);
            break;
        case 5:
            window.alert("Adios");
            break;
    }
}
