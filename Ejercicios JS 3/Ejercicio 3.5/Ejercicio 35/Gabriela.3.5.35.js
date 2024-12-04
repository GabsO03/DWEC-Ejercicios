function ruleta() {
    return new Promise((resolve, reject) => {
        console.log('La ruleta está girando...');
        const segundos = Math.floor(Math.random() * 3 + 1);
        setTimeout(() => {
            const num = Math.floor(Math.random() * 10 + 1);
            if(num === 0) {
                reject('La ruleta se ha atascado');
            }
            else {
                resolve('¡Tenemos un ganador! Has ganado ' + num + ' puntos');
            }
        }, segundos * 1000);
    })
}
ruleta()
.then((resolve) => {
    console.log(resolve);
})
.catch((reject) => {
    console.log(reject);
});