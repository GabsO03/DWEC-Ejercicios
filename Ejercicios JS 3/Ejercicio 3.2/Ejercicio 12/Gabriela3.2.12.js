window.addEventListener('load', () => {
    let displayInfo = document.getElementById('displayInfo');

    //Creamos los elementos del html para rellanrlos después

    let userAgentInfo = document.createElement('p');
    let languageInfo = document.createElement('p');
    let geolocationInfo = document.createElement('p');
    let cookiesEnabledInfo = document.createElement('p');


    //Luego rellenamos los text context con alguna propiedad del navigator
    userAgentInfo.textContent = 'Agente de usuario: ' + navigator.userAgent; //Información sobre el nombre del navegador, el SO, el motor de renderizado, etc
    
    languageInfo.textContent = 'Lenguaje: ' + navigator.language;

    navigator.geolocation.watchPosition((response) => {
        geolocationInfo.textContent = 'Tus coordenadas son:\nLatitud: ' + response.coords.latitude + ' - Longitud: ' + response.coords.longitude
    });//watchPosition sigue en tiempo real la posición del usuario, hemos actualizado el párrafo dentro de la función para poder acceder al response que de esta misma

    cookiesEnabledInfo.textContent = 'Cookies habilitadas: ' + (navigator.cookieEnabled? 'Sí': 'No');
    

    //Los metemos dentro del div 'displayInfo'
    displayInfo.appendChild(userAgentInfo);
    displayInfo.appendChild(languageInfo);
    displayInfo.appendChild(geolocationInfo)
    displayInfo.appendChild(cookiesEnabledInfo)
})