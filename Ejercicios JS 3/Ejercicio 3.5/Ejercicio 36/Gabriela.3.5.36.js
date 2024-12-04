const usuario = {
	nombre: "Usuario",
	edad: 19,
	email: "usuario@test.com",
	password: "123456"
};


function verificarEdad(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario.edad > 18) {
                rellenaBarra(0, 34);
                resolve(usuario);
            }
            else {
               reject('El usuario debe ser mayor de 18 años') ;
            }
        }, 1000);
    })
}

function verificarEmail(usuario) {
    return new Promise((resolve, reject) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setTimeout(() => {
            if(emailRegex.test(usuario.email)) {
                rellenaBarra(33, 67);
                resolve(usuario);
            }
            else {
               reject('El email debe contener @ y un dominio válido') ;
            }
        }, 2000);
    })
}

function verificarPassword(usuario) {
    return new Promise((resolve, reject) => {
        const passwordRegex =  /^(?=.*\d)[A-Za-z\d]{6,}$/
        setTimeout(() => {
            if(passwordRegex.test(usuario.password)) {
                rellenaBarra(66, 101);
                resolve(usuario);
            }
            else {
                reject('La contraseña debe tener al menos 6 caracteres y un número');
            }
        }, 2000)
    })
}

function rellenaBarra(inicio, limite) {
    const llenaBarra = setInterval(() => {
        document.getElementById('progreso').style.width = inicio + '%';
        document.getElementById('progresoSpan').textContent = inicio + '%';
         
        inicio++;
        if(inicio===limite) clearInterval(llenaBarra);
    }, 50);
}

window.addEventListener('load', () => {
    document.getElementById('info').innerHTML = 'Verificando edad';
    verificarEdad(usuario)
    .then((usuario) => {
        const info =  document.getElementById('info');
        info.innerHTML = 'Edad correcta<br>Verificando email';
        
        verificarEmail(usuario)
        .then((usuario) => {
            info.innerHTML = 'Edad correcta<br>Email correcto<br>Verificando contraseña';

            verificarPassword(usuario)
            .then(() => {
                info.innerHTML = 'Edad correcta<br>Email correcto<br>Contraseña correcta<br>';

                setTimeout(() => {
                    info.innerHTML += '¡El usuario es valido!<br>';

                    info.innerHTML += '<a href="/Ejercicio%2036/Gabriela.3.5.36.html">Click aquí para continuar</a>'
                }, 1000);
            })
            .catch((reject) => {
                info.innerHTML = 'Edad correcta<br>Email correcto<br>' + reject;
            });
        })
        .catch((reject) => {
            info.innerHTML = 'Edad correcta<br>' + reject;
        });
    })
    .catch((reject) => {
        info.innerHTML = reject;
    })
});