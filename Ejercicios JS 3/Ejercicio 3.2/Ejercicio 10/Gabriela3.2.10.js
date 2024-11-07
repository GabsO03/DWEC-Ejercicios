window.addEventListener('load', () => {
    let showAlertButton = document.getElementById('showAlertButton');
    
    showAlertButton.addEventListener('click', () => {
        
        //innerWidth e innerHeight son propiedades de window que nos dan la altura y el ancho interno
        let altoPantalla = window.innerHeight;
        let anchoPantalla = window.innerWidth;

        window.alert('El alto de la pantalla es: ' + altoPantalla + "\nY el ancho es: " + anchoPantalla);
    })
})