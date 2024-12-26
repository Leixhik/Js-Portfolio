    // Arreglos (Arrays)

const numeros = [10, 20, 30, 40, 50];

// // const arreglo = ["Hola", 15, "Pawish", 20];
// // console.table(arreglo);

// // Acceder a los valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);

// // Conocer la extensión de un arreglo
// console.log(meses.length);

// // Iterar sobre un Array (imprimir en consola todas las variables )
// numeros.forEach( function(numero){
//     console.log(numero);
// });

//Agregar o modificar elementos a un array
// numeros[2] = 60; <- Es complicado cuando no sabes el número de arreglos que existen
numeros.push(60); // <-- Agregar un elemento en la última posición
numeros.push(70, 80);

// Agregar elementos al inicio de un arreglo (parte de las estructuras de datos)
numeros.unshift(-10, -20, -30);

// const meses = new Array('Enero', 'Febrero', 'Marzo'); // Manera 1 de crear arrays
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']; // Manera 2

// meses.pop(); // <-- Elimina el último elemento.
// meses.shift(); // <-- Elimina el primer elemento.

meses.splice(2, 1); // <-- Recorre elemento desde la primera posición y elimina el valor siguiente que indiques.
console.table(meses);

// Rest Operator o Spread Operator
const nuevoArreglo = [ 'Junio', ...meses, ];
console.log(nuevoArreglo);
