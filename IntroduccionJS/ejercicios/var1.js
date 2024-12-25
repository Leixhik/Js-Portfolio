// Clase 104 Curso JavaScript 

/* 1. Hoisting: Declara una variable con var después de usarla en un console.log
    ¿Qué sucede*/

    console.log(nombre); // undefined, es el Hoisting en acción.
    var nombre = 'Pawish';
    //console.log(nombre);
    nombre = 'Pakis';

// R: El contenido de la variable cambió al nuevo pero el del console.log muestra el anterior.+
// -----------------------------------------------------------------


/* 2. Ámbito de una función: Declara una variable con var dentro de un búcle for. Intenta
    acceder  a ella fuera del buble. ¿Qué valor tiene? */

    // for(var i = 0; i <= 5; i++){
    //     var i2 = i; 
    // }

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
    
    // let nombre1 = 'Axel';
    // console.log(nombre1);
    // nombre1 = 'Rodolfo';

    // for(let i = 0; i <= 10; i++){
    //      let i2 = 1; 
    // }
    // console.log("Hola" ,i2); // i2 causará un ReferenceError, pues no es global por ser let.
   

    // R: let tiene un scope(ámbito) de tipo bloque, puede ser redeclarada en un scope global
    //  pero no redeclarada dentro de algn bloque.
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

/*  7. Uso en condicionales: Declara una variable con var dentro de un bloque if.
    ¿Es accesible fuera del if? */

    if(true){
        var numero3 = 20;
        console.log('Dentro del if: ', numero3);
    }

    console.log('Fuera del if: ', numero3);
    // R: Sí, la variable es accesible dentro y fuera de la condicional if.
// ------------------------------------------------------------------

/*  8. Ejemplo práctico (contador): Crea un bucle for que use var para el contador. 
    Muestra el valor del contador después de que termine el búcle.  */

    for(var i = 0; i < 10; i++){
        console.log('Dentro del bucle: ' + i);
    }
    console.log('Fuera del bucle: ' + i);

    // R: Sí,  la variable declarada en el contador del for es accesible fuera del bucle.
// ------------------------------------------------------------------

/*  9.  Ejercicio de Depuración:  Te doy un código con errores relacionados a var y ámbito
    Tu tarea es encontrar y corregir los errores (Falta proporcionar código ejemplo.)*/

    function ejemploAmbitoVar() {
        
    for (var i = 0; i < 5; i++) {
        console.log("Dentro del bucle: i = " + i);
    }

    console.log("Fuera del bucle: i = " + i); // var tiene ámbito de función, i es accesible aquí

    if (true) {
        var mensaje = "Mensaje dentro del if";
    }

    console.log(mensaje); // var tiene ámbito de función, mensaje es accesible aquí. 

    var j = 10;

        function otraFuncion() {
            j = 20;
        }
        otraFuncion();
        console.log("Valor de j después de ejecutar otraFuncion: " + j);
        // j tendrá el valor de 10.

    var k = 5;
        if(true){
            var k = 10;
        }
        console.log("Valor de k despues del if: " + k); // k tendrá el valor de 10.
        // Debido al hoisting y al ámbito de función de var, esta k redefine la k anterior
    }

    ejemploAmbitoVar();

    console.log("Variable global x: " + x);  // x nunca fué declarada.
// ------------------------------------------------------------------

/* 10. Revisión de conceptos: Explica con tus propias palabras qué es el hoisting y 
    cómo afecta a las variables declaradas con var. 
    
    R: El hoisting es un comportamiento de JavaScript donde las declaraciones de variables 
    (con var) se "elevan" al principio de su ámbito antes de que se ejecute el código. 
    Esto significa que puedes usar una variable var antes de la línea donde la declaras 
    explícitamente en tu código sin que se produzca un error. Sin embargo, el valor de 
    esa variable antes de su inicialización será undefined. El hoisting evita que el 
    código falle y permite que se ejecute, aunque con el valor undefined hasta que se 
    llega a la línea de inicialización.
    */
