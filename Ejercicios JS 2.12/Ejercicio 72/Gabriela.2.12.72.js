class Configuracion {
    static #instanciaConfiguracion;

    static getInstanciaConfiguracion() {
        if(this.#instanciaConfiguracion === undefined) {
            this.#instanciaConfiguracion = new Configuracion();
            return this.#instanciaConfiguracion;
        }
        else return null;
    }
}

let configuracion1 = Configuracion.getInstanciaConfiguracion();
let configuracion2 = Configuracion.getInstanciaConfiguracion();


console.log(configuracion1);
console.log(configuracion2);