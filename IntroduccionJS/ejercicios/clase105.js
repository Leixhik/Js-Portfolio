// Clase 105: Variables con let y const (Corregidas por Gemini, version original saqué 9/10)

/* 1. Reasignación con let:  Declara una variable con let, asigna un valor y luego 
    reasígnale otro. Imprime ambos valores.*/

    let ejemplo1 = 10;
    console.log(ejemplo1);
    ejemplo1 = 15;
    console.log(ejemplo1);

    /* R: El valor fué sustituido pero en la primera impresión está el primer vaor asignado. */
//----------------------------------------------------------------------------------------

/*  2. Constantes con const: Declara una constante con const. Intenta reasignarle un valor.
    ¿Qué ocurre? */

    const ejemplo2 = 20;
    console.log(ejemplo2);
    //ejemplo2 = 30;

    /* R: Habrá un typeError debido a que una variable const no puede ser reasignada. */
//----------------------------------------------------------------------------------------

/*  3. Ámbito de bloque(let y const): Declara variables con let y const dentro de un bloque if
    o un bucle for. Intenta acceder a ellas fuera del bloque. */

    if(true){
        let ejemplo3 = 'Hola';
        const ejemplo4 = 'Mundo';
        console.log('Dentro del if: ', ejemplo3, ' ', ejemplo4);
    }

    //console.log('Fuera del if: ', ejemplo3, ' ', ejemplo4);
    /* R: Hay un error debído a que let y const tienen scope de bloque, y no pueden ser 
        invocadas fuera de su bloque. */
//----------------------------------------------------------------------------------------

/*  4. Constantes y objetos: Declara una constante que almacene un objeto. Intenta
    modificar una propiedad del objeto. ¿Es posible? */

    const Auto = {
        marca: "Ford",
        modelo: "Mustang",
        año: "2004"
    };

    Auto.año = "2005";
    Auto.color = "Rojo";

    console.log(Auto);

    /* R: Sí es posible modificar la propiedad de un objeto que se declara como Constante. */
//----------------------------------------------------------------------------------------

/*  5. Constantes y arrays; Similar al anterior, pero con arrays. Intenta añadir o eliminar
    elementos del array. */

    const numeros = [1, 2, 3, 4, 5];
    console.log(numeros);
    numeros.push(6);
    console.log(numeros);
    
    /* R: Sí, es posible modificar los elementos de un Array. */
 //----------------------------------------------------------------------------------------
 
 /* 6. Uso en bucles for: Utiliza let para el contador en un bucle for. Comprueba su ámbito. */
    
    for(let i = 0; i < 10; i++){
        console.log('Dentro del bucle for: ', i);
    }
    //console.log('Fuera del bucle for: ', i);

    /* R: No, no es posible obtener el valor de la variable declarada con let en el bucle,
    ya que let tiene ámbito de bloque y i sólo existe dentro del bloque del for. */
//----------------------------------------------------------------------------------------

/*  7. Ejemplo práctico (intercambio de variables): Escribe un código que intercambie el 
    valor de dos variables usando una variable temporal declarada con let. */

    let var1 = 5;
    let var2 = 10;
    let aux = var1;
    console.log(`variable 1 = ${var1} , variable 2 = ${var2}`);

    var1 = var2;
    var2 = aux;
    console.log(`variable 1 = ${var1} , variable 2 = ${var2}`);

    /* R: Se han intercambiado los valores de las variables por medio de un auxiliar. */
//----------------------------------------------------------------------------------------

/*  8. Ejemplo con funciones: Crea una función que use variables con let y const dentro de
    su ámbito.*/

    function miFuncion(){
        let ejemplo7 = 'Hello';
        const ejemplo8 = 'World';
        console.log(`Dentro de mi función: ${ejemplo7} ${ejemplo8}`);
    }
    miFuncion();
    //console.log(`Fuera de mi función: ${ejemplo7} ${ejemplo8}`);

    /* R: No se pueden usar por fuera las variables que están en la función por su scope. */
//----------------------------------------------------------------------------------------

/*  9. Diferencias clave: Explica las diferencias entre var, let y const en cuanto
    a ámbito, hoisting y reasignación.
    
    R: El ámbito de var es de tipo función, mientras que let y const tienen un ámbito de 
    bloque. En cuanto al hoisting, las variables declaradas con var se inicializan a 
    undefined, mientras que let y const son hoisted pero no se inicializan. Intentar 
    acceder a una variable let o const antes de su declaración resulta en un ReferenceError 
    (zona muerta temporal). let puede ser reasignada, pero no redeclarada dentro del mismo 
    ámbito. const no puede ser ni reasignada ni redeclarada. 
    
    */
//----------------------------------------------------------------------------------------

/*  10. Casos de uso: Describe un esccenario en el que usarías const y otro en el que
    usarías let.
    
    R: Usaría const para datos que no cambiarían de valor, como pi, gravedad. Y let para 
    datos que pueden cambiar más adelante, como una sumatoria, una operación.
    */