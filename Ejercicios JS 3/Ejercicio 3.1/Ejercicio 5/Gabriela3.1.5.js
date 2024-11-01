window.addEventListener('load', () => {
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById('correo').value;
        let edad = parseInt(document.getElementById('edad').value);

        let persona = {
            nombre: nombre,
            correo: correo,
            edad: edad
        }

        let personaJson = JSON.stringify(persona);
        
        fetch('https://api.ejemplo.com/enviar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: personaJson
        })
        .then(response = response.json())
        .then(data = console.log('Éxito:', data))
        .catch(error => console.error('Error:', error))
    });
});