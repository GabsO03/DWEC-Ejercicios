fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then((data) => {
    let albumesArtistaTres = Array.from(data).filter((album) => album.userId === 3);
    albumesArtistaTres.forEach(album => {
        console.log('Título: ' + album.title);
    });
})
.catch(error => console.error(error))