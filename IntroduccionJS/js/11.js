// Objetos
const producto = {
    nombreProducto: 'Monitor 20in',
    precio: 300,
    dispobible: true
}

// Agregar el valor de una propiedad a una variable (Antigua forma)
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring (Nueva form)
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);