class Producto {
    id;
    nombre;
    precio;
    stock;

    constructor (id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre} Precio: ${this.precio} Stock: ${this.stock}`;
    }
}



class Tienda {
    productos;
    clientes;
    ventas;

    constructor () {
        this.productos = new Map();
        this.clientes = new Set();
        this.ventas = new Array();
    }

    agregarProducto(producto) {
        if(this.productos.has(producto.id)) {
            console.log("El producto " + producto.nombre + " ya está en la lista");
        }
        else {
            this.productos.set(producto.id, producto);
            console.log("Añadido " + producto.nombre);
        }
    }

    actualizarStock(idProducto, cantidad) {
        this.productos.get(idProducto).stock -= cantidad;
    }

    mostrarInventario() {

        let inventario = "\n\nLista de productos:\n";

        this.productos.forEach(producto => {
            inventario += producto.mostrarInfo() + "\n";
        });

        console.log(inventario + "\n\n");
    }

    registrarCliente(nombreCliente) {

        if(!this.clientes.has(nombreCliente)) {
            this.clientes.add(nombreCliente);
            console.log("Añadido " + nombreCliente);
        }
        else console.log("El cliente ya está en la lista");
    }

    realizarVenta(nombreCliente, idProducto, cantidad) {
        //Verifica si existe el cliente o no
        if(!this.clientes.has(nombreCliente)) this.registrarCliente(nombreCliente);

        //Verifica el stock y luego realiza la venta 
        if(this.productos.get(idProducto).stock >= cantidad) {

            this.actualizarStock(idProducto, cantidad);

            //Creamos un objeto de venta
            let venta = {
                nombreCliente: nombreCliente,
                idProducto: idProducto,
                cantidadComprada: cantidad,
                totalCompra: this.productos.get(idProducto).precio * cantidad,

                mostrarResumen: function (productos) {
                    return "Nombre del cliente: " + this.nombreCliente + "\nProducto comprado: " + productos.get(this.idProducto).mostrarInfo() + ".\nCantidad: " + this.cantidadComprada + "\nTotal: " + this.totalCompra;
                }
            };

            this.ventas.push(venta);

            console.log(
                "Venta realizada:\n" +
                venta.mostrarResumen(this.productos)
            );
        }
        else console.log("Este producto ya no cuenta con stock");
    }

    mostrarVentas() {
        let ventas = "\nLista de ventas:\n";

        this.ventas.forEach(venta => {
            ventas += venta.mostrarResumen(this.productos) + "\n\n";
        });

        console.log(ventas);
    }

    productosSinStock() {

        let productosSinStock = Array.from(this.productos.values()).filter((producto) => producto.stock===0);

        return productosSinStock;
    }

    ventasPorCliente(nombreCliente) {

        this.ventas.forEach((venta) => {
            if(venta.nombreCliente === nombreCliente) console.log(venta.mostrarResumen(this.productos));
        });

    }

    totalIngresos() {

        let totalIngresos = this.ventas.reduce((totalAcumulado, venta) => totalAcumulado + venta.totalCompra, 0);

        return totalIngresos;
    }

}


let tienda = new Tienda();

//Productos: Crea al menos 5 productos de ejemplo y agrégalos a la tienda.
let producto1 = new Producto(1, "Laptop", 900, 10);
let producto2 = new Producto(2, "Movil", 290, 15);
let producto3 = new Producto(3, "Tablet", 500, 20);
let producto4 = new Producto(4, "Auriculares", 10, 50);
let producto5 = new Producto(5, "TV", 1300, 8);

tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
tienda.agregarProducto(producto3);
tienda.agregarProducto(producto4);
tienda.agregarProducto(producto5);

//Clientes: Registra varios clientes en el sistema.
tienda.registrarCliente("Gabriela Oria");
tienda.registrarCliente("Adrian Contreras");
tienda.registrarCliente("Alex Godino");
tienda.registrarCliente("Jesus Moral");
tienda.registrarCliente("Alejandro Ordoñez");

//Ventas: Simula varias ventas realizadas por los clientes registrados.
tienda.realizarVenta("Gabriela Oria", 1, 2);
tienda.realizarVenta("Adrian Contreras", 2, 1);
tienda.realizarVenta("Alex Godino", 3, 3);
tienda.realizarVenta("Jesus Moral", 4, 5);
tienda.realizarVenta("Alejandro Ordoñez", 5, 2);

//Visualización: Muestra el inventario, las ventas realizadas, y el total de ingresos de la tienda, por consola.
tienda.mostrarInventario();
tienda.mostrarVentas();
console.log("Total de ingresos: " + tienda.totalIngresos());
