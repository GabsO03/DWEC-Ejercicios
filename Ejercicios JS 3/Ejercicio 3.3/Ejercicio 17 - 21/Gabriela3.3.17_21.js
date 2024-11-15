//Ejercicio 17
function cambiarTexto() {
    document.getElementById('text1').textContent = "Texto modificado mediante JavaScript!";
}

//Ejercicio 18
function cambiarEstilo() {
    document.getElementById('text2').style = 'color:red; font-size: 20px; font-weight: bold;'
}

//Ejercicio 19
function toggleVisibilidad() {
    let visible = !document.getElementById('text3').classList.contains('hidden');
    console.log(visible);

    if(visible) {
        document.getElementById('text3').classList.add('hidden');
        console.log( document.getElementById('text3').classList);
    }
    else {
        document.getElementById('text3').classList.remove('hidden');
    }
}

//Ejercicio 20
function agregarElemento() {
    let lista = document.getElementById('lista');
    let numElementos = lista.querySelectorAll('li').length;
    
    let nuevoLi = document.createElement('li');
    nuevoLi.textContent = 'Elemento ' + (numElementos+1);

    lista.appendChild(nuevoLi);
}

//Ejercicio 21  
window.addEventListener('load', () => {
    document.getElementById('mouseArea').addEventListener('mousemove', (raton) => {
        let ratonEnX = raton.screenX;
        let ratonEnY = raton.screenY;
        document.getElementById('mouseArea').textContent = 'x:' + ratonEnX + ';y:' + ratonEnY;
    
    })
})