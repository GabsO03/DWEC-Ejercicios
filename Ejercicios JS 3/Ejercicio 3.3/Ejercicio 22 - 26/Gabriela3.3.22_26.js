//Ejercicio 22
let ids = new Set();
let idNodoSeleccionado = -1;

function agregarNodoArbol() {
    
    let nodoPadre =  document.getElementById('treeRoot');

    let nuevoNodo = document.createElement('div');
    let nuevoId;
    //Creamos el id aleatorio sin que se repita
    do {
        nuevoId = Math.floor(Math.random() * 99999);
    } while (ids.has(nuevoId));

    //Le añadimos el id y un texto con fondo blanco al nodo para que se vea
    nuevoNodo.id = nuevoId;
    nuevoNodo.textContent = 'Nodo';
    nuevoNodo.style.backgroundColor = 'white';

    ids.add(nuevoId);
    
    if(idNodoSeleccionado >= 0) {
        document.getElementById(idNodoSeleccionado).appendChild(nuevoNodo);
        nuevoNodo.style.border = '2px black dotted';
        nuevoNodo.style.marginBottom = '2px';
    }
    else {
        nodoPadre.appendChild(nuevoNodo);
        nuevoNodo.style.border = '2px black solid'
        nuevoNodo.style.marginBottom = '6px';
    }
    actualizarId(nuevoId);
}

function actualizarId(_idNuevo) {
    let nodo = document.getElementById(_idNuevo);
    nodo.addEventListener('click', (event) => {

        /*Aquí me daba el fallo de que el evento del click se propagaba al padre y no me dejaba seleccionar por completo al hijo porque de
        inmeditao de deseleccionaba y seleccionaba al padre así que hago uso del metodo event.stopPropagation*/
        event.stopPropagation();

        //Si está seleccionado significa que al hacer click lo está deseleccionando
        if(_idNuevo === idNodoSeleccionado) {
            //Así que le cambiamos el fondo y de la variable idSeleccionado
            nodo.style.backgroundColor = 'white';
            idNodoSeleccionado = -1;
        }
        else { //Lo mismo pero deseleccionando
            //Aquí verificamos que no se intente seleccionar varios a la vez
            if(idNodoSeleccionado >= 0 && idNodoSeleccionado !== _idNuevo) {
                //Lo cambiamos y no es necesario quitarle el id porque ya lo cambiamos de igual manera
                document.getElementById(idNodoSeleccionado).style.backgroundColor = 'white';
            }
            nodo.style.backgroundColor = 'yellow';
            idNodoSeleccionado = _idNuevo;
        }
    })
}

function eliminarNodoSeleccionado() {
    if(idNodoSeleccionado >= 0) {
        let nodoParaEliminar = document.getElementById(idNodoSeleccionado);
        nodoParaEliminar.remove();
        idNodoSeleccionado = -1;
    }
}

//Ejercicio 23
window.addEventListener('load', () => {
    let draggable = document.getElementById('draggable');
    let mouseDown = false;

    draggable.addEventListener('mousedown', () => {
        mouseDown = true;
    })

    draggable.addEventListener('mousemove', (raton) => {
        //Decidi controlarlo aquí para que no se desactive por completo el mousemove si se sale del dropzone
        let dentroDeDropZoneX = raton.layerX - 50 >= 0 && raton.layerX + 50 <= 302;
        let dentroDeDropZoneY = raton.layerY - 50 >= 0 && raton.layerY + 50 <= 302;
        if(mouseDown && dentroDeDropZoneX && dentroDeDropZoneY) {
            drag(raton);
        }
    })

    draggable.addEventListener('mouseup', () => {
        mouseDown = false;
    })

    function drag (raton) {
        let translateX = (raton.layerX - 100) + 50;
        let translateY = (raton.layerY - 100) + 50;
        
        draggable.style.transform ='translate(' + translateX + 'px, ' + translateY + 'px)';
    }
})

//Ejercicio 24
window.addEventListener('load', () => {

    const emailValido = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    const telefonoValido = /^\d{9}$/;

    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email')
    let telefono = document.getElementById('telefono');
    let hayErrorNombre = true;
    let hayErrorEmail = true;
    let hayErrorTelefono = true;

    nombre.addEventListener('change', () => {
        if(nombre.value.length < 3) {
            document.getElementById('nombreError').textContent = 'El nombre debe tener mínimo 3 caracteres'
            hayErrorNombre = true;
        }
        else {
            hayErrorNombre = false;
            //Esto es para lmpiarlo una vez cumpla el requisito
            document.getElementById('nombreError').textContent = ''
        }
    })

    email.addEventListener('change', () => {
        if(!emailValido.test(email.value)) {
            document.getElementById('emailError').textContent = 'El email no cumple con los requisitos';
            hayErrorEmail = true;
        }
        else {
            hayErrorEmail = false;
            document.getElementById('emailError').textContent = ''
        }
    })

    telefono.addEventListener('change', () => {
        if(!telefonoValido.test(telefono.value)) {
            document.getElementById('telefonoError').textContent = 'El telefono debe tener 9 dígitos'
            hayErrorTelefono = true;
        }
        else {
            hayErrorTelefono = false;
            document.getElementById('telefonoError').textContent = ''
        }
    })

    document.getElementById('validationForm').addEventListener('submit', (event) => {
        event.preventDefault();
        if (hayErrorNombre || hayErrorEmail || hayErrorTelefono) {
            window.alert('Corrige tus errores antes de continuar');
        }
        else {
            window.alert('Datos enviados correctamente');
            nombre.value = '';
            email.value = '';
            telefono.value = '';
        }
    })
})


//Ejercicio 25
window.addEventListener('load', () => {
    const observedElement = document.getElementById('observedElement');

    let mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            switch(mutation.type) {
                case 'attributes':
                    console.log('Atributo ' + mutation.attributeName + ' modificado');
                    break;
                case 'childList':
                    if(mutation.addedNodes.length > 0) {
                        console.log('Nodo agregado: ' + mutation.addedNodes);
                    }
                    if(mutation.removedNodes.length > 0) {
                        console.log('Nodo eliminado: ' + mutation.removedNodes);
                    }
                    break;
                case 'characterData':
                    console.log('Contenido modificado: ' + mutation.target.data);
                    break;
            }
        })
    })
    
    mutationObserver.observe(observedElement, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
    })
})
function modificarElementoObservado() {
    const observedElement = document.getElementById('observedElement');
    const cambios = ['atributo', 'contenido', 'estructura'];
    let pos = Math.floor(Math.random() * 3);
    let cambioElegido = cambios[pos];

    switch(cambioElegido) {
        case 'atributo':
            const colores = ['red', 'blue', 'green'];
            observedElement.style.backgroundColor = colores[Math.floor(Math.random() * 3)];
            break;
        case 'contenido':
            const palabras = ['coco', 'pañuelo', 'nariz'];
            observedElement.textContent = palabras[Math.floor(Math.random() * 3)]
            break;
        case 'estructura':
            if(observedElement.childElementCount > 0) {
                observedElement.removeChild(observedElement.lastChild);
            }
            else {
                let nodoHijo = document.createElement('div');
                nodoHijo.textContent = 'Nodo hijo';
                observedElement.appendChild(nodoHijo);
            }
            break;
    }
}



//Ejercicio 26
let buttonContainer;
window.addEventListener('load', () => {
    buttonContainer = document.getElementById('buttonContainer')
})
let idsBotones = new Set();
let contadorBotones = 0;

function agregarBotonDinamico() {
    contadorBotones++;
    let nuevoIdBoton;
    //Creamos el id aleatorio sin que se repita
    do {
        nuevoIdBoton = Math.floor(Math.random() * 99999);
    } while (idsBotones.has(nuevoIdBoton));

    let nuevoBoton = document.createElement('button');
    nuevoBoton.id = nuevoIdBoton;
    nuevoBoton.textContent = 'Boton ' + contadorBotones;

    buttonContainer.appendChild(nuevoBoton);

    nuevoBoton.addEventListener('click', () => {
        window.alert(nuevoBoton.textContent + ' id: ' + nuevoIdBoton);
    })
}

