class Descarga {
    idDescarga;
    TIEMPO =  Math.floor(Math.random() * 5 + 5) * 1000;
    enPausa;
    cancelada;
    completada;
    estaCorrupta;
    yaHaSidoMovida;

    constructor(idDescarga) {
        this.idDescarga = idDescarga;
        this.enPausa = false;
        this.cancelada = false;
        this.completada = false;
    }

    setCorrupta() {
        const vaAFallar = Math.floor(Math.random() * 5);
        this.estaCorrupta = vaAFallar === 0;
    }

    pausarResumir() {
        if(this.enPausa) {
            this.enPausa = false;
            this.mostrarProgreso()
        }
        else this.enPausa = true;
    }

    cancelar() {
        if(!this.completada) {
            this.cancelada = true;
            const barra = document.getElementById('descarga' + this.idDescarga);
            document.getElementById('estado' + this.idDescarga).textContent = 'cancelada'
            barra.style.width = '0.2%';
        }
    }

    mostrarProgreso() {
        const barra = document.getElementById('descarga' + this.idDescarga);
        const width = barra.style.width;
        let i = width.substring(0, width.indexOf('%'));
    
        const progreso = setInterval(() => {
            barra.style.width = i + '%';
            i++;
            if (!this.cancelada && !this.completada) {
                document.getElementById('estado' + this.idDescarga).textContent = 'descargando...'
            }
            if (i === 101 || this.enPausa || this.cancelada) {
                if(i === 101) {
                    document.getElementById('estado' + this.idDescarga).textContent = 'completada'
                    this.completada = true;
                }
                else if(this.enPausa) {
                    document.getElementById('estado' + this.idDescarga).textContent = 'en pausa'
                }
                else {
                    barra.style.width = '0.2%';
                }
                clearInterval(progreso);
            }
        }, this.TIEMPO / 100)
    }
}

class GestorDescargas {
    descargasPendientes
    descargasEnCurso
    descargasCompletadas
    numDescargas

    constructor() {
        this.descargasPendientes = new Set();
        this.descargasCompletadas = new Set();
        this.descargasEnCurso = new Set();
        this.numDescargas = 0;

        window.addEventListener('load', () => {
            document.getElementById('aniadirDescarga').addEventListener('click', () => {
                this.aniadirDescarga()
            })
            setInterval(() => {
                Array.from(this.descargasPendientes).map((descarga) => {

                    if (this.descargasEnCurso.size < 2 && !this.descargasEnCurso.has(descarga) && !descarga.estaCorrupta) {
                        this.descargasEnCurso.add(descarga)
                        descarga.mostrarProgreso()
                    }
                    if(descarga.completada && this.descargasEnCurso.has(descarga)) {
                        this.descargasEnCurso.delete(descarga)
                        this.descargasPendientes.delete(descarga)
                        if (!this.descargasCompletadas.has(descarga) && !descarga.yaHaSidoMovida) {
                            this.moverDescarga(descarga.idDescarga)
                            this.descargasCompletadas.add(descarga)
                            descarga.yaHaSidoMovida = true;
                        }
                    }
                    if((descarga.cancelada || descarga.enPausa) && this.descargasEnCurso.has(descarga)) {
                        if (!descarga.yaHaSidoMovida) {
                            this.descargasEnCurso.delete(descarga)
                            this.moverDescarga(descarga.idDescarga, true)
                            descarga.yaHaSidoMovida = true;
                        }
                    }
                });
            }, 500);
        })
    }

    aniadirDescarga() {
        const d1 = new Descarga(this.numDescargas);
        this.numDescargas++;

        d1.setCorrupta();

        const li = document.createElement('li');
        li.id = d1.idDescarga;
 
        li.innerHTML = `
        <p>Descarga ` + d1.idDescarga + ` <span id="estado` + d1.idDescarga + `">` + (d1.estaCorrupta? 'fallo al descargar' : 'descargando...') + `</span></p>
        <div class="barra" id="descarga` + d1.idDescarga + `"></div>`;

        if (!d1.estaCorrupta) {
            li.innerHTML += `
            <button id="pausarResumir` + d1.idDescarga + `">Pausar</button>
            <button id="cancelar` + d1.idDescarga + `">Cancelar</button>
            `;
        }
        
        document.getElementById('listaDescargas').appendChild(li)
        const pausarResumir = document.getElementById('pausarResumir' + d1.idDescarga)
        pausarResumir.addEventListener('click', () => {
            d1.pausarResumir()
            pausarResumir.textContent = d1.enPausa? 'Reanudar' : 'Pausar';
        })
    
        const cancelar = document.getElementById('cancelar' + d1.idDescarga)
        cancelar.addEventListener('click', () => {
            d1.cancelar()
        })
        if (!d1.estaCorrupta) {
            this.descargasPendientes.add(d1);
        }

    }


    moverDescarga(idDescarga, cancelada) {
        console.log(idDescarga);

        const liAnterior = document.getElementById(idDescarga);
        liAnterior.remove();

        const li = document.createElement('li');
        li.id = idDescarga;
        li.innerHTML = `
            <p>Descarga ` + idDescarga + ` <span id="estado` + idDescarga + `">` + (cancelada?'cancelada ✖️' : 'completada ✅') + `</span></p>
        `;
        document.getElementById((cancelada?'listaDescargasCanceladas' : 'listaDescargasCompletas')).appendChild(li)
    }
}

const gestorDescargas = new GestorDescargas();