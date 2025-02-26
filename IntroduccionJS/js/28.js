/*  Herencia */

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio(){
        console.log(this.precio);
    }
    
}

const producto = new Producto('Monitor Curvo de 48"', 800);
const producto2 = new Producto('Laptop', 200);

/*  Herencia */
class Libro extends Producto{ 
    constructor(nombre, precio, isbn){
        super(nombre, precio); // Llamamos al constructor de la clase padre
        this.isbn = isbn; // Atributo propio de la clase hija
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '1234567890');
console.log(libro.formatearProducto()); 
console.log(producto.formatearProducto());


