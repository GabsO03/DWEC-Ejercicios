class Mesa {
    numero;
    disponible;
    capacidad;
    tiempoUso;

    constructor(numero, capacidad) {
        this.numero = numero;
        this.disponible = true;
        this.capacidad = capacidad;
        this.tiempoUso = Math.floor((Math.random() * 5 + 1) * 1000);
    }

    reservar() {
        if(this.disponible) {
            this.disponible = false;
            setTimeout(() => {
                this.liberar()
            }, this.tiempoUso);
            return true;
        }
        return false
    }

    liberar() {
        this.disponible = true;
    }

}

class Reserva {
    mesas;
    colaEspera;

    constructor() {
        this.mesas = [];
        this.colaEspera = [];
    }

    aniadirMesa() {
        const numero = this.mesas.length
        const capacidad = Math.floor(Math.random() * 9 + 1);
        const mesa = new Mesa(numero, capacidad)
        this.mesas.push(mesa);
        const li = document.createElement('li');
        li.id = mesa.numero;
        li.innerHTML = `
            <p>Mesa `+mesa.numero+` para `+mesa.capacidad+` personas</p>
            <button id="alquilar`+mesa.numero+`">Reservar</button>
        `;
        document.getElementById('mesas').appendChild(li);
        const boton = document.getElementById('alquilar' + mesa.numero);
        boton.addEventListener('click', () => {
            this.reservaDesreservarMesa(mesa.numero, boton);
        })
        return this;
    }

    reservaDesreservarMesa(numero, boton) {
        let mesa;
        this.mesas.forEach(_mesa => {
            if (numero === _mesa.numero) {
                mesa = _mesa;
            }
        });

        if(mesa) {
            if(mesa.disponible) {
                if (mesa.reservar) {
                    boton.textContent = 'Cancelar reserva';
                } else {
                    document.getElementById('error').textContent = 'Esa mesa no está disponible';
                }
            }
            else {
                mesa.liberar();
                boton.textContent = 'Reservar mesa';
            }
        }
    }

    desreservarMesa(numero) {
        this.mesas.forEach(mesa => {
            if(mesa.numero === numero) {
                mesa.liberar()
            }
        })
    }
}

window.addEventListener('load', () => {
    const reservaMesa = new Reserva();
    //Esto es como lo hacemos en php
    reservaMesa.aniadirMesa().aniadirMesa().aniadirMesa().aniadirMesa();
})