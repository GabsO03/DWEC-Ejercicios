window.addEventListener('load', () => {
    let showAlertButton = document.getElementById('showAlertButton');
    
    showAlertButton.addEventListener('click', () => {
        let altoPantalla = window.innerHeight;
        let anchoPantalla = window.innerWidth;

        window.alert('El alto de la pantalla es: ' + altoPantalla + "\nY el ancho es: " + anchoPantalla);
    })
})