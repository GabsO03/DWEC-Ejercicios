function* fibonacci(end = Infinity) {
    let a = 0, b = 1;
    for (let i = 0; i < end; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const generaSecuencia = fibonacci(20);

console.log(generaSecuencia.next());
console.log(generaSecuencia.next());
console.log(generaSecuencia.next());
console.log(generaSecuencia.next());
console.log(generaSecuencia.next());
console.log(generaSecuencia.next());