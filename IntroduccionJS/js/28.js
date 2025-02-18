/*  Herencia */

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    precioProducto(){
        return `El precio del producto es: ${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo de 48"', 800);
const producto2 = new Producto('Laptop', 200);

/*  Herencia */
class Libro{ 
    constructor(nombre, precio, isbn){
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '1234567890');
console.log(libro);

console.log(producto);
console.log(producto2);

// console.log(producto.precioProducto());
// console.log(producto2.precioProducto());
