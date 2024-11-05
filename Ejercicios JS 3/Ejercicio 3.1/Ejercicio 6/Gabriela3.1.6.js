let newData;

fetch('Gabriela3.1.6.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(estudiante => {
        estudiante.nota += 1;
    });

    newData = JSON.stringify(data);

    console.log(newData);

})
.catch((error) => console.error(error))
