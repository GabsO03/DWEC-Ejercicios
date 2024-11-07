window.addEventListener('load', () => {
    let paragraph = document.getElementById('paragraph');

    let URLactual = location.origin + location.pathname;
    paragraph.textContent = URLactual;
})
