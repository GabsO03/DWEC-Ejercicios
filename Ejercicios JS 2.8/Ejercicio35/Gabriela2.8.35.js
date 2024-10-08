let rectangulo = {
    ancho : 5,
    alto : 8,
    calcularArea : function() {
        return (this.ancho * this.alto) / 2;
    }
}

console.log(rectangulo.calcularArea());