let peliculaElegida = parseInt(prompt("Ingresa tu película favorita de la lista:\n1. Spiderman: No way home\n2. Dr Strange in the multiverse of madness\n3. Avengers: Endgame\n4. Eternals"));

switch(peliculaElegida) {
    case 1:
        document.write("<h2>Su ticket ha sido emitido</h2>Spiderman: No way home<br><img style='display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;' src='/imagenesEjercicio10/Spiderman.jpg'></img>");
        break;
    case 2:
        document.write("<h2>Su ticket ha sido emitido</h2>Dr Strange in the multiverse of madness<br><img style='display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;' src='/imagenesEjercicio10/DrStrange.jpg' width='406' height='602'>");
        break;
    case 3:
        document.write("<h2>Su ticket ha sido emitido</h2> " + peliculaElegida + "<br>" + "<img style='display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;' src='/imagenesEjercicio10/AvengersEndgame.jpg' width='406' height='541'>");
        break;
    case 4:
        document.write("<h2>Su ticket ha sido emitido</h2> " + peliculaElegida + "<br>" + "<img alt='Eternals (2022) movie photo - id 617227' src='/imagenesEjercicio10/Eternals.jpg'>");
        break;
        
}


