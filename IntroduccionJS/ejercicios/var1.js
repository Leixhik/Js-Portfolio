// Clase 104 Curso JavaScript 

/* 1. Hoisting: Declara una variable con var después de usarla en un console.log
    ¿Qué sucede*/
    var nombre = 'Pawish';
    //console.log(nombre);
    nombre = 'Pakis';
// R: El contenido de la variable cambió al nuevo pero el del console.log muestra el anterior.+
// -----------------------------------------------------------------


/* 2. Ámbito de una función: Declara una variable con var dentro de un búcle for. Intenta
    acceder  a ella fuera del buble. ¿Qué valor tiene? */

    for(var i = 0; i <= 5; i++){
        var i2 = i; 
    }
   // console.log('Hola' ,i2);
    //i2 = 10;
    //console.log(i2);

/* R: la variable puede ser accedida fuera del bucle for.*/
// -----------------------------------------------------------------


/* 3. Redeclaración: Declara una variable con var y luego vuélvela a declarar
    con otro valor. ¿Qué valor tiene al final? */
    var ejemplo1 = 'String1';
    ejemplo1 = 50;
/* R: El valor será el último declarado. */
// -----------------------------------------------------------------

/* 4. Función y ámbito: Crea una función que declare una variable con var.
    Intenta acceder a ella desde fuera de la función. */
    function miFuncion(){
        var numero = 10;
       // console.log('Dentro de la función: ', numero);
    }

    miFuncion();

    //console.log('Fuera de la función: ', numero);
    
/* R: Se obtuvo un ReferenceError, debido a que la variable numero sólo está declarada
    dentro de la función, y no es global. */

// -----------------------------------------------------------------

/* 5. Comparación con let: Realiza los ejercicios 1 y 2 usando let en lugar de var.
    Compara los resultados. */
    let nombre1 = 'Axel';
    console.log(nombre1);
    nombre1 = 'Rodolfo';

    // for(let i = 0; i <= 10; i++){
    //     let i2 = i; 
    // }
    // console.log('Hola' ,i2);
    // i2 = 15;
    // console.log(i2);

    // R: Los resultados son los mismos que en los ejercicios 1 y 2, las variables pueden ser 
    // redeclaradas.
// ------------------------------------------------------------------

/* 6. Variables globales accidentales: Declara una variable sin var dentro de una función.
    ¿Se convierte en una variable global? */

    function funcion2(){
         numero2 = 15;
         console.log('Dentro de la función: ',numero2);
    }
    
    funcion2();
    console.log('Fuera de la función: ', numero2);
    
    // R: Sí, la variable declarada sin var se convierte en una variable global.
// ------------------------------------------------------------------


11



