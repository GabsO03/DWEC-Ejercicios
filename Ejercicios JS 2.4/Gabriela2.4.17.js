function facturation(precioProducto, medioPago) {
    if(precioProducto >= 200 && precioProducto <= 400) {
        switch(medioPago) {
            case 'C':
                precioProducto *= 0.1;
                break;
            case 'E':
                precioProducto *= 0.3;
                break;
            case 'D':
                precioProducto *= 0.2;
                break;
        }
    }
    else if(precioProducto > 400) precioProducto *= 0.4;
    return precioProducto;
}

console.log(facturation(250, 'C'));
console.log(facturation(300, 'E'));
console.log(facturation(350, 'D'));
console.log(facturation(450, 'C'));
console.log(facturation(600, 'E'));
console.log(facturation(700, 'D'));
console.log(facturation(150, 'C'));
console.log(facturation(1000, 'E'));
