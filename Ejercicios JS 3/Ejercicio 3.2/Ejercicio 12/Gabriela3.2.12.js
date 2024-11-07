window.addEventListener('load', () => {
    let displayInfo = document.getElementById('displayInfo');

    let userAgentInfo = document.createElement('p');
    userAgentInfo.textContent = 'Agente de usuario: ' + navigator.userAgent;
    
    let languageInfo = document.createElement('p');
    languageInfo.textContent = 'Lenguaje: ' + navigator.language;

    let geolocationInfo = document.createElement('p');
    navigator.geolocation.watchPosition((response) => {
        geolocationInfo.textContent = 'Tus coordenadas son:\nLatitud: ' + response.coords.latitude + ' - Longitud: ' + response.coords.longitude
    });

    let cookiesEnabledInfo = document.createElement('p');
    cookiesEnabledInfo.textContent = 'Cookies habilitadas: ' + (navigator.cookieEnabled? 'Sí': 'No');
    
    displayInfo.appendChild(userAgentInfo);
    displayInfo.appendChild(languageInfo);
    displayInfo.appendChild(geolocationInfo)
    displayInfo.appendChild(cookiesEnabledInfo)
})