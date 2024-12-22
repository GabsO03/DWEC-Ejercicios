function savePreferences() {
    const tema = document.getElementById('themeSelector').value;
    const tamanioLetra = document.getElementById('fontSizeSelector').value;
    const idioma = document.getElementById('languageSelector').value

    localStorage.setItem('theme', tema);
    localStorage.setItem('fontSize', tamanioLetra);
    localStorage.setItem('language', idioma);

    location.reload()
}

function saveProfile() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    location.reload()
}

function resetPreferences() {
    localStorage.setItem('theme', 'light');
    localStorage.setItem('fontSize', 'medium');
    localStorage.setItem('language', 'es');
    location.reload()
}

window.addEventListener('load', () => {
    //Recuperamos las preferencias
    const themeClass = localStorage.getItem('theme') === 'light' ? 'light-theme' : 'dark-theme';
    const fontSize = localStorage.getItem('fontSize');
    const posFontSize = ['small', 'medium', 'large'].findIndex((size) => size === localStorage.getItem('fontSize'));
    const language = localStorage.getItem('language');

    //Las añadimos al estilo del body
    document.body.classList.add(themeClass);
    document.body.style.fontSize = fontSize;

    //Las ponemos en el form también para que no tenga que seleccionar todas cuando solo quiere cambiar una
    document.getElementById('themeSelector').options[localStorage.getItem('theme') === 'light' ? 0 : 1].selected = true;
    document.getElementById('fontSizeSelector').options[posFontSize].selected = true;
    document.getElementById('languageSelector').options[language === 'es'? 0 : 1].selected = true;

    //El idioma no sé que hacerle así que solo me queda lo de poner que se quede seleccionado

    
    //Y relleno el form
    const formUsuario = document.getElementById('profileSection')
    formUsuario.querySelector('#username').value = localStorage.getItem('username');
    formUsuario.querySelector('#email').value = localStorage.getItem('email');

})