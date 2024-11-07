window.addEventListener('load', () => {
    let openWindow = document.getElementById('openWindow');

    openWindow.addEventListener('click', () => {
        let newWindow = window.open('https://flowbite.com/');

        setTimeout(() => {
            newWindow.close();
        }, 3000);
    })
})