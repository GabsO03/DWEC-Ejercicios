let favCities = new Set();

window.addEventListener('load', () => {

    if(localStorage.getItem('favCities')) {
        //Le meto esto porque necesito un set para que no se repitan las capitales pero el localstorage no me deja meterle un set, así que lo convierto
        favCities = new Set(JSON.parse(localStorage.getItem('favCities')));
        showFavCities(favCities);
    }
    document.getElementById('locationForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const city = document.getElementById('cityInput').value;
        const detalles = fetchCiudadWeather(city);
        detalles
        .then((detalles) => pintaDetalles(city, detalles))
    })
})
async function fetchCiudadWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8d9f8d6ad6e7c5f75a02a2d2378aebd`;
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch((error) => reject(error))
    })
}

function pintaDetalles(city, detalles) {
    const div = document.getElementById('weatherResult')
    div.innerHTML = `
        <strong>${city.toUpperCase()}</strong><br>
        <p>Descripción: <span>${detalles.weather[0].description}</span></p>
        <p>Temperatura: <span>${detalles.main.temp}</span></p>
        <p>Sensación térmica: <span>${detalles.main.feels_like}</span></p>
        <p>Temperatura mínima: <span>${detalles.main.temp_min}</span></p>
        <p>Temperatura máxima: <span>${detalles.main.temp_max}</span></p>
        <p>Presión: <span>${detalles.main.pressure}</span></p>
        <p>Humedad: <span>${detalles.main.humidity}</span></p>
        <button id="aniadir">Añadir a favoritos</button>
    `;
    document.getElementById('aniadir').addEventListener('click', () => {
        favCities.add(city);
        localStorage.setItem('favCities', JSON.stringify([...favCities]))
        location.reload();
    })
}

function showFavCities(favCities) {
    const ul = document.getElementById('locationList')
    for (let city of favCities) {
        const li = document.createElement('li');
        li.innerHTML = `
            <li class="location-item"">
                <span>${city}</span>
                <div>
                    <button id="${city}search">Buscar</button>
                    <button id="${city}del">Eliminar</button>
                </div>
            </li>
        `;
        ul.appendChild(li);
        document.getElementById(city + 'del').addEventListener('click', () => {
            favCities.delete(city);
            localStorage.setItem('favCities',  JSON.stringify([...favCities]));
            location.reload();
        })

        document.getElementById(city + 'search').addEventListener('click', () => {
            document.getElementById('cityInput').value = city
            const detalles = fetchCiudadWeather(city);
            detalles
            .then((detalles) => pintaDetalles(city, detalles))
            localStorage.setItem('favCities',  JSON.stringify([...favCities]));
        })
    }

}