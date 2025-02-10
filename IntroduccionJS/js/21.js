// Arrow Functions => Lo mismo que lambda en Java jaja

const sumar2 = (n1, n2) => console.log(n1 + n2);
// comment: Si es una sola función o linea, puede ser sin llaves.

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
// comment: Si no vay multiples valores, puede ser sin paréntesis.

aprendiendo('JavaScript');


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
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe.')
    };
});

let resultado;
// Some: ideal para arreglo de objetos(averifica si se cumple una condicion en al menos 1 elemento.)
resultado = carrito.some( producto => producto.nombre == 'Celular');

// Reduce: utilizado para obtener el total de una cantidad.
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

// Filter: Usas el método filter para mostrar elementos que cumplan cierto criterio.
resultado = carrito.filter(producto => producto.precio < 400);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');
console.log(resultado);

