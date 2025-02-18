// POO

// Objeto Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
}
// Propotype: Nos permite crear funciones para un objeto en específico.

Producto.prototype.formatearProducto = function(){ // Ya no requiere (parametros) pues ya está definida
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
};

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
};

Cliente.prototype.formatearCliente = function(){ // Ya no requiere (parametros) pues ya está definida
    return `El Cliente ${this.nombre} ${this.apellido} es hetero.`;
};

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 1000);


const cliente = new Cliente('Rodolfo', 'Leija');
// console.log(cliente);

// function formatearProducto(producto){
//     return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
// };



console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

console.log(cliente.formatearCliente());



