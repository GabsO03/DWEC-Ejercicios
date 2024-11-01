let nombre = prompt('Ingresa tu nombre para saber tu probabilidad de nacionalidad');
fetch('https://api.nationalize.io/?name=' + nombre)
.then(response => response.json())
.then((data) => {

    if (data.count === 0) throw new Error('No se encontraron resultados para "' + nombre + '"');

    else {
        let paises = data.country;
        console.log('Código del país con más probabilidad para ' + nombre + ': ' + paises[0].country_id); //El resultado ya viene ordenado por país con más probabilidad
    }
})
