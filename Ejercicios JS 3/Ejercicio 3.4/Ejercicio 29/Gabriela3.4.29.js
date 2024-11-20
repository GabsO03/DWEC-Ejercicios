const numerosPares = {
    inicio:0,
    fin: 20,
    [Symbol.iterator]() {
        let i = this.inicio;

        return {
            next:() => {
                if (i < this.fin) {
                    let value = i;
                    i += 2;
                    return { 
                        value, 
                        done: false 
                    };
                }
                else {
                    return {
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }
}

const iterador = numerosPares[Symbol.iterator]();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());