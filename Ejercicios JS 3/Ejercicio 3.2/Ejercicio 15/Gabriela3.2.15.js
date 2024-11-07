window.addEventListener('load', () => {
    let mouseInfo = document.getElementById('mouseInfo');

    mouseInfo.addEventListener('mouseover', (mouse) => {
        mouseInfo.textContent = 'Ratón en X: ' + mouse.screenX + ' en Y: ' + mouse.screenY;
    })
})