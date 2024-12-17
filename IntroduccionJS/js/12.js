// "use strict"; // Correr Javascript en modo es
// Objetos
const producto = {
    nombreProducto: "Monitor 20in",
    precio: 300,
    disponible: false
}

// Object.freeze(producto); // -> No permite agregar, eliminar o editar el objeto
Object.seal(producto); // -> No permite agregar o eliminar pero si editar valores

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto)