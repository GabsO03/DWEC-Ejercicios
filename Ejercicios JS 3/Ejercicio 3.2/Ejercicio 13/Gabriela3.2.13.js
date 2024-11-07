window.addEventListener('load', () => {
    let duplicateButton = document.getElementById('duplicateButton');

    duplicateButton.addEventListener('click', () => {
        let inputText = document.getElementById('inputText').value;
        if(inputText.length > 0) {
            document.getElementById('textDisplay').textContent = inputText;
        }
    })
})