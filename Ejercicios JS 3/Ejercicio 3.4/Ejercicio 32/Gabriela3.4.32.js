const paginasVisitadas = new WeakSet();

let pag1 = {
    url: 'https://flowbite.com/',
}

let pag2 = {
    url: 'https://github.com/',
}

let pag3 = {
    url: 'https://google.com/',
}

paginasVisitadas.add(pag1);
paginasVisitadas.add(pag2);

console.log(paginasVisitadas.has(pag1));
console.log(paginasVisitadas.has(pag3));

