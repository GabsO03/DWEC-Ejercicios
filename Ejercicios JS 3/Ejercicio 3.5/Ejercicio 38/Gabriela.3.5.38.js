/*Predicción:
🥇 Primero
🥈 Segundo
Porque los console.log siempre se hacen incluso antes que salga el mensaje de Attempting initialization Sat Nov 30 2024 16:45:03 GMT+0100 (hora estándar de Europa central)
🕐 Timeout 1
Porque tiene un 0 y es un console.log que se hace antes de la promesa de adentro
🕑 Timeout 2
Esto antes que la promesa dentro del timeout porque también tiene 0 segundos y como se crean a la vez el console.log a primero
🤔 Promesa dentro de timeout
✨ Promesa 1
⏰ Timeout dentro de promesa
Porque son console.log pero están dentro de una promesa y se imprimen en orden dentro de esta ya que el segundo tiene un timeout de 0 segundos
💫 Promesa 2
*/
console.log('🥇 Primero');
setTimeout(() => {
	console.log('🕐 Timeout 1');
    //Modificaciñon
	Promise.resolve().then(async () => {
        console.log('🤔 Promesa dentro de timeout')
        
        //Modificación
        const promesaRechazada = await new Promise((reject) => {
            reject('Otra promesa rechazada y dentro de una normal con await')
        })
        console.log(promesaRechazada)
    });
}, 0);

Promise.resolve().then(() => {
	console.log('✨ Promesa 1');
	setTimeout(() => {
        console.log('⏰ Timeout dentro de promesa')

        //Modificación
        Promise.resolve().then(() => console.log('🤔 Promesa dentro de timeout que está dentro de una promesa'));
    }, 0);
});
Promise.resolve().then(() => console.log('💫 Promesa 2'));
//Modificación
Promise.reject().catch(() => console.log('💫 Promesa rechazada'));

setTimeout(() => console.log('🕑 Timeout 2'), 0);
console.log('🥈 Segundo');

//Actualización: solo acerté el primero

