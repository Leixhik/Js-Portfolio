// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

// forEach
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe.')
    };
});

// Include: busca valor específico
let resultado = meses.includes( 'Marzo');

// Some: ideal para arreglo de objetos(averifica si se cumple una condicion en al menos 1 elemento.)
resultado = carrito.some(function(producto){
    return producto.nombre == 'Celular'
});

// Reduce: utilizado para obtener el total de una cantidad.
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);

// Filter: Usas el método filter para mostrar elementos que cumplan cierto criterio.
resultado = carrito.filter(function(producto){
    return producto.precio < 400;
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
});

console.log(resultado);