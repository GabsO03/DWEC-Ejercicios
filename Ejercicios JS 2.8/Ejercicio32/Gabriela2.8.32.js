let libro = new Object();
libro.titulo = "Cien años de soledad";
libro.autor = "Gabriel García Márquez";
libro.anyo = 1967;

console.log("Libro:");
for (const atributo in libro) {
    console.log(atributo + " -> " + libro[atributo]);
}