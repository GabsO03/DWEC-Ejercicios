class SistemaCache {
    caches;
    tamanioAnotado;

    constructor() {
        this.caches = new Map();
        this.tamanioAnotado = 0;
    }

    aniadirCache(nombre, tiempo) {
        const cacheAux = new Cache(nombre, tiempo)
        this.caches.set(nombre, cacheAux);
        setTimeout(() => {
            this.eliminarCache(nombre);
        }, tiempo)
    }

    conseguirCache(nombre) {
        if(this.caches.get(nombre)) {
            return this.caches.get(nombre);
        }
        return false;
    }

    eliminarCache(nombre) {
        if(this.caches.get(nombre)) {
            return this.caches.delete(nombre);
        }
        return false;
    }


}