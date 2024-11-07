window.addEventListener('load', () => {
    let openWindow = document.getElementById('openWindow');

    openWindow.addEventListener('click', () => {
        //Asignamos la función a una variable para poder cerrarla después de 3 segundos
        let newWindow = window.open('https://flowbite.com/');

        setTimeout(() => {
            newWindow.close();
        }, 3000);
    })
})