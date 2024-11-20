function* generaPotencias() {
    const cache = new WeakMap();

    let base = 2;
    let exponente = 0;

    while(true) {
        const key = { base, exponente }
        
        if(cache.has(key)) {
            yield cache.get(key);
        }
        else {
            const resultado = Math.pow(base, exponente);
            cache.set(key, resultado);
            yield resultado;
        }

        exponente++;

        if(exponente === 5) {
            base++;
            exponente = 0;
        }
    }
}

const potenciador = generaPotencias();

console.log(potenciador.next().value);
console.log(potenciador.next().value);
console.log(potenciador.next().value);
console.log(potenciador.next().value);
console.log(potenciador.next().value);