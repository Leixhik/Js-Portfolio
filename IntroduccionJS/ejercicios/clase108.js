// Clase 108: Números y Operadores

/*  1. Operaciones aritméticas básicas: Suma, resta, multiplicación, división y módulo */

    let n1 = 5;
    let n2 = 10;
    console.log(`Operaciones con n1 = ${n1} y n2 = ${n2}:
        suma = ${n1 + n2}
        resta = ${n1 - n2}
        multiplicación = ${n1 * n2}
        división = ${n1 / n2}
        módulo = ${n1 % n2}`);

    /* R: He realizado diferentes operaciónes mediante operadores aritméticos utilizado
    templates literals */
//----------------------------------------------------------------------------------------

/*  2.  Operadores de asignación: =, +=, -=, *=, /=, %= */

    let num1 = 10;
    let num2 = 15;
    console.log(`Operaradores de asignación con num1 = ${num1} y num2 = ${num2}:
        num1 = num2: ${num1 = num2}
        num1 += num2: ${num1 += num2}
        num1 -= num2: ${num1 -= num2}
        num1 *= num2: ${num1 *= num2} 
        num1 /= num2: ${num1 /= num2}
        num1 %= num2: ${num1 %= num2}`)

    /* R: Los operadores de asignación nos ayudan a proporcionar valores ya sean nuevos o 
    sobre algun otro valor, es decir, tomando como base el valor de alguna otra variable.*/
//----------------------------------------------------------------------------------------

/*  3. Operadores de incremento / decremento: ++, -- */

    let n3 = 2;
    let n4 = 4;
    console.log(`Numero 1 = ${n3} , Incremento ++ = ${++n3}
        Numero 2 = ${n4}, Decremento -- = ${--n4}`);

    /* R: En esta operación utilizamos el ++ y -- antes de la variable para que pueda
    mostrar los cambios en consola.  */
//----------------------------------------------------------------------------------------

/*  4. Precedencia de operadores: Realiza operaciones combinadas teniendo en cuenta
la precedencia. */

    let operacion1 = (3 + (10 * 2));
    let operación2 = (5 * 10 + (2 + 5));
    console.log(`Operación 1 = ${operacion1}
        Operación 2 = ${operación2}`);
    
    /* R: Se han creado algunas operaciones donde se muestra la precedencia de 
    operadores. */
//----------------------------------------------------------------------------------------

/*  5. Conversión de tipos: Convierte strings a números con parseInt() o 
parseFloat(). */
    
    let conversion1 = '5';
    console.log(`Conversión String: ${conversion1} --> ${parseInt(conversion1)}`);

    /* R: parseInt() es una función, no un método.*/
//----------------------------------------------------------------------------------------

/*  6. NaN(Not a Number): Realiza operaciones que resulten en NaN y aprede a detectarlo
con isNaN(). */

    console.log(isNaN(NaN)); // true
    console.log(isNaN('String')); // true (porque 'String' no se puede convertir a número)
    console.log(isNaN('12')); // false (porque '12' se puede convertir a número)
    console.log(isNaN(12)); // false (porque 12 ya es un número

    /* R: isNaN() verifica si un valor NO es un número. Devuelve true si el valor 
    no se puede convertir a un número, y false si sí se puede. */
//----------------------------------------------------------------------------------------

/*  7. Operadores de comparación: ==, ===, !=, !==, >, <, >=, <= */

    console.log(`${10 == 10}, ${10 === 12}, 
        ${5 != 10}, ${10 !== 10}, ${10 > 15}, ${10 < 5}, ${10 >= 9}, ${8 <= 10}`);
    
    /* R: Es de importancia conocer los diferentes operadores de comparación y saber
    que aún cuando con casi iguales estos otorgarán una comparación diferente. 
    == (igualdad no estricta): Compara solo el valor, realizando conversión de tipos si es necesario.
    === (igualdad estricta): Compara tanto el valor como el tipo. No realiza conversión de tipos.
    */
//----------------------------------------------------------------------------------------

/* 8. Ejemplo práctico (calculadora simple): Crea una calculadora que realice las
operaciones básicas. */
    
     let operacion = parseInt(prompt(`Ingresa la operación que deseas realizar:
         1. Suma
         2. Resta
         3. Multiplicación
         4. División
         5. Modular`));
     let var1 = parseFloat(prompt('Ingresa el valor 1: '));
     let var2 = parseFloat(prompt('Ingresa el valor 2: '));

     console.log(`Operación: ${operacion}`);
    console.log(`Valor 1: ${var1}`);
    console.log(`Valor 2: ${var2}`);

     function calculadora(){
         let resultado;
         switch (operacion){
             case 1:
                 resultado = var1 + var2;
                 break;
             case 2:
                 resultado = var1 - var2;
                 break;
             case 3:
                 resultado = var1 * var2;
                 break;
             case 4:
                if(var2 === 0){
                    console.log(`Error: No se puede dividir por cero.`);
                    return `Error`;
                }
                resultado = var1 / var2;
                 break;
             case 5:
                resultado = var1 % var2;
                 break;
             default:
                 console.log(`No se ha podido realizar su operación, eliga del 1 al 5.`);
                 return; // Importante: salir de la función si la operación no es válida
         }
         return resultado;

     }

     let resultadoCalculo = calculadora(); // Asignar el resultado de la función
     if(resultadoCalculo !== "Error" &&  resultadoCalculo !== undefined){
        console.log(`El resultado final es: ${resultadoCalculo}`);
     }
     
    /* R: He creado la calculadora corrigiendo errores de llamada doble a la función, 
    manejo de división por cero y mejorando la legibilidad. */
//----------------------------------------------------------------------------------------

/*  9. Ejemplo práctico (conversión de unidades): Convierte grados Celsius a Fahrenheit 
o viceversa. */

     let seleccion = parseInt(prompt(`Ingrese la opción que sea utilizar:
         1. Celsius a Fahrenheit.
         2. Fahrenheit a celsius`));
    
     let grados = parseFloat(prompt(`Ingresa la cantidad de grados a convertir: `));

     function conversion(){
         let resultado;
         switch (seleccion){
             case 1:
                 resultado = (grados * 1.8) + 32;
                 break;
             case 2:
                 resultado = (grados - 32) / 1.8;
                 break;
             default:
                 console.log(`Ingresa la opción 1 u 2.`);
                 return `Opción no válida`; // Retornar un mensaje de error
         }
         return resultado;
     }

     let resultadoConversion = conversion();

     if(typeof resultadoConversion === 'number'){ // Comprobar si es un número antes de imprimir
        console.log(`El resultado de la conversión es: ${resultadoConversion}`);
     }else{
        console.log(resultadoConversion); // Mostrar el mensaje de error
     }
     

    /* R: He realizado la actividad permitiendo ambas conversiones, 
    corrigiendo la fórmula de Fahrenheit a Celsius y mostrando el resultado una sola vez. */
//----------------------------------------------------------------------------------------

/*  10. Operadores lógicos: && (AND) , || (OR), ! (NOT) */

    let ejemplo1 = true;
    let ejemplo2 = false;

    if(ejemplo1 && ejemplo2){
        console.log('Ambos son true');
    }else{
        console.log('Solo uno o ninguno es true')
    }
    if(ejemplo1 || ejemplo2){
        console.log('Uno es true');
    }
    console.log(!ejemplo1);

    /* R: Se han mostrado ejemplos del uso de los operadores lógicos 
    AND (&&), OR (||) y NOT (!), explicando su funcionamiento. */


    
    