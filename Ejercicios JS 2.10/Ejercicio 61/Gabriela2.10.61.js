let persona1 = new Map([
    ['nombre', 'Gabriela'],
    ['edad', 30],
    ['ciudad', 'Madrid'],
    ['país', 'España']
]);

let persona2 = new Map([
    ['nombre', 'Gabriela'],
    ['edad', 30],
    ['ciudad', 'Madrid'],
    ['país', 'España']
]);

let persona3 = new Map([
    ['nombre', 'Gabriela'],
    ['edad', 30],
    ['ciudad', 'Madrid'],
    ['país', 'Peru']
]);

function sonIguales (map1, map2) {
    if(map1.size === map2.size) {
        for (const [clave, valor] of map1) {
            if(!map2.has(clave)) return false;
            else if(map2.get(clave) !== valor) return false;
        }
        return true;
    }
    return false;
}

let siSonIguales = sonIguales(persona1, persona2);
console.log(siSonIguales);

siSonIguales = sonIguales(persona3, persona2);
console.log(siSonIguales);