window.addEventListener('load', () => {
    let changeColorButton = document.getElementById('changeColorButton');

    //Agregamos un eventListener
    changeColorButton.addEventListener('click', () => {

        console.log(document.body.style);
        //Modificamos según el valor que tenga el style
        if(document.body.style.backgroundColor === "rgb(180, 221, 30)") {
            document.body.style = 'background-color: #FFFF';
        }
        else {
            document.body.style = 'background-color: rgb(180, 221, 30)'
        }
    })
})
