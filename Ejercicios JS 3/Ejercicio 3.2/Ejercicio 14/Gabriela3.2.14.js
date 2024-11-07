window.addEventListener('load', () => {
    let moveWindowButton = document.getElementById('moveWindowButton');

    moveWindowButton.addEventListener('click', () => {
        window.moveBy(100, 100);

        console.log(window.screenLeft);
        console.log(window.screenTop);
    })
})
