let newData;

fetch('Gabriela3.1.6.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(estudiante => {
        estudiante.nota += 1;
    });
    newData = JSON.stringify(data);
})
.catch((error) => console.error(error))

fetch('Gabriela3.1.6b.json', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: newData
})
.then((data) => console.log('Éxito: ', data))
.catch((error) => console.error('Error:', error))