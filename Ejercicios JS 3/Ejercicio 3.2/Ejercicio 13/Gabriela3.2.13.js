window.addEventListener('load', () => {
    let duplicateButton = document.getElementById('duplicateButton');

    duplicateButton.addEventListener('click', () => {
        let inputText = document.getElementById('inputText').value;
        
        //Verificamos si el input tiene algo metido
        if(inputText.length > 0) {
            document.getElementById('textDisplay').textContent = inputText;
        }
    })
})