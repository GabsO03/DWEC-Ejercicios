window.addEventListener('load', () => {
    let paragraph = document.getElementById('paragraph');

    //Unimos el location.origin con el pathname para que de resultado la URL completa
    let URLactual = location.origin + location.pathname;
    paragraph.textContent = URLactual;
})
