class Cache {
    cache;

    constructor() {
        this.cache = new WeakMap();
    }

    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        else {
            return null;
        }
    }

    set(key, value) {
        this.cache.set(key, value);
    }

    delete(key) {
        this.cache.delete(key);
    }

}

const cache = new Cache();
let calve1 = {
    id:1
}
cache.set(calve1, 'valor');
console.log(cache.get(calve1));