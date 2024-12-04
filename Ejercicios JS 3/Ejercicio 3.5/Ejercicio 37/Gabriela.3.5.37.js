function iniciaCoche(_num, _emojiCoche, _pistaOficial) {
    const eventosAleatorios = [
        {
            tipo: ' se le pinchó la rueda',
            tiempoAniadido: 1000
        },
        {
            tipo: ' le empezó a llover y ahora irá con cuidado',
            tiempoAniadido: 3000
        },
        {
            tipo: ' se chocó',
            tiempoAniadido: 7000
        },
        {
            tipo: ' activó el turbo',
            tiempoAniadido: -3000
        }
    ]
    let eventoElegido = eventosAleatorios[Math.floor(Math.random() * 4)]

    const coche = {
        num: _num,
        emoji: _emojiCoche,
        tiempoLlegada: (Math.floor(Math.random() * 5 + 5) * 1000) + _pistaOficial.tiempoAniadido + eventoElegido.tiempoAniadido
    }
    return new Promise((resolve) => {
        console.log('Coche ' + _num + ' ' + _emojiCoche + ' ha inciado la carrera. Oh vaya' + eventoElegido.tipo + ' se tardará ' + eventoElegido.tiempoAniadido + ' milisegundos\n');
        const avanzando = setInterval(() => {
            console.log('Coche ' + _num + ' ' + _emojiCoche + ' avanza');
        }, 2000)
        setTimeout(() => {
            console.log('LLega coche ' + _num + ' ' + _emojiCoche + ' en ' + (coche.tiempoLlegada) + ' segundos');
            resolve(coche)
            clearInterval(avanzando)
        }, coche.tiempoLlegada);
    })
}

const cocheApostado = parseInt(prompt('Apuesta que coche va a ganar:\n1. Coche 1 🚗\n2. Coche 2 🏎️\n3. Coche 3 🚙\n4. Coche 4 🚓'))
const pistas = [
    {
        tipo: 'asfalto',
        tiempoAniadido: -1200 //Le quito 200 porque como según google el asfalto hace más rápido el coche
    },
    {
        tipo: 'tierra',
        tiempoAniadido: 1000
    },
    {
        tipo: 'pasto',
        tiempoAniadido: 3000
    },
    {
        tipo: 'hielo',
        tiempoAniadido: 5000 //
    }
];
const numRandom = Math.floor(Math.random() * 4);
const pistaOficial = pistas[numRandom]
console.log('------- Los carros irán en una pista de ' + pistaOficial.tipo + ' -------\n');

let ganador = false;

const coche1 = iniciaCoche(1, '🚗', pistaOficial);
const coche2 = iniciaCoche(2, '🏎️', pistaOficial);
const coche3 = iniciaCoche(3, '🚙', pistaOficial);
const coche4 = iniciaCoche(4, '🚓', pistaOficial);

Promise.race([coche1, coche2, coche3, coche4]).then(
    (value) => {
        console.log('El ganador es coche ' + value.num + ' ' + value.emoji);
        if(cocheApostado === value.num) ganador = true;
    }
)

Promise.all([coche1, coche2, coche3, coche4]).then(
    (values) => {
        values.sort((coche1, coche2) => coche1.tiempoLlegada - coche2.tiempoLlegada)
        console.log('Clasificación final:');
        for (let i = 0; i < 4; i++) {
            const coche = values[i];
            console.log((i+1) + '- ' + coche.num + ' ' + coche.emoji);
        }
        console.log((ganador)? '\n¡Felicidades! Tu apuesta es acertada.' : 'Lo sentimos apostaste mal.');
    }
)