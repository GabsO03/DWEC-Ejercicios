window.addEventListener('load', () => {
    let mouseInfo = document.getElementById('mouseInfo');

    mouseInfo.addEventListener('mouseover', (mouse) => {
        //Usamos el evento mouse para acceder a las coordenadas
        mouseInfo.textContent = 'Ratón en X: ' + mouse.screenX + ' en Y: ' + mouse.screenY;
    })
})