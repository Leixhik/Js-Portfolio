// Clase 107: Métodos para los Strings

/*  1. split(): Divide un string en un array de substrings usando un 
    separador */

    let ejemplo1 = 'Hola esto es un string de ejemplo';
    console.log(ejemplo1.split(" "));

    /* R: He convertido el substring en array, usando el " " como separador. ¿Me
    pregunto qué usos le puedo dar en la vida real?*/
//----------------------------------------------------------------------------------------

/*  2.  charAt(): Similar a acceder con corchetes pero como método.*/

    let ejemplo2 = 'Hola Mundo';
    console.log(ejemplo2.charAt(2));
    console.log(ejemplo2.charAt(3));

    /* R: Similar a usar corchetes para acceder a caracteres individuales, 
    pero charAt() es un método. */
//----------------------------------------------------------------------------------------

/*  3.  concat(): Otra forma de concatenar strings.*/
    let ejemplo3 = 'Cadena1';
    let ejemplo4 = 'Cadena2';
    console.log(ejemplo3.concat(ejemplo4)); //Resultado: Cadena1Cadena2

    /* R: Se utiliza el método concat() para concatenar strings, aunque 
    generalmente se prefiere el operador + o los template literals. */
//----------------------------------------------------------------------------------------

/*  4. includes(): Comprueba si un string contiene un substring. */

    let ejemplo5 = 'StringEjemplo';
    console.log(ejemplo5.includes('String')); //Dará un true

    /* R: El método includes nos permite verificar si un string contiene un substring,
    el método nos otorgará un true o false en caso de estar o no el substring. */
//----------------------------------------------------------------------------------------

/*  5. startsWith() y endsWith(): Comprueban si un string comienza o termina con un
substring específico. */

    let ejemplo6 = 'String de ejemplo para el problema 5';
    console.log(ejemplo6.startsWith('String')); // Dará true
    console.log(ejemplo6.endsWith('String'));  // Dará false

    /* R: Los métodos de startsWith y endsWith nos proporcionan un valor booleano
    para saber si un substring está o no al inicio o al final del string, dependiendo el
    método. */
//----------------------------------------------------------------------------------------

/* 6. repeat(): Repite un string un número determinado de veces. */

    let ejemplo7 = 'String repetible ';
    console.log(ejemplo7.repeat(5));

    /* R: repeat() nos permite hacer una repetición de alguna variable la cantidad de
    veces que nosotros indiquemos. */
//----------------------------------------------------------------------------------------

/* 7. padStart() y padEnd(): Rellena un string con caracteres hasta alcanzar una longitud
determinada. */

    let ejemplo8 = 'Esto será un string rellenable';
    console.log(ejemplo8.padStart(50, 'abc '));

    /* R: El número que definimos no son las veces que se repetirá, sino el espacio que
    tendrá para rellenar considerando el que ya está usado.  Si la longitud de la cadena 
    original ya es mayor o igual a la longitud especificada en padStart(), 
    no se realiza ningún relleno. */
//----------------------------------------------------------------------------------------

/*  8. Ejemplo práctico (validación de formato): Crea una función que valide si una cadena
tiene un formato de correo electrónico básico (ej. que contenga "@" y ".") */

   function validador(email){
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.indexOf('.');
   }
   console.log(validador('rodolfo@gmail.com'));
   console.log(validador('rodolfogmail.com'));
   console.log(validador('rodolfo@gmailcom'));


    /* R: Utilizando el includes() puedo verificar si ambos carácteres están en un string.*/
//----------------------------------------------------------------------------------------

/*  9. Ejemplo práctico (conteo de palabras): Crea una función que cuente el número de
palabras en una cadena. */
    
   function contarPalabras(cadena){
    return cadena.trim().split(/\s+/).length;
   }
   console.log(contarPalabras("Esto es una cadena de texto")); // 6 palabras
   console.log(contarPalabras("    Nueva      Cadena     De    Texto   ")); // 4 palabras

   /* R: Se ha creado la función para contar palabras utilizando métodos vistos anteriormente,
    además usando un if para verificar si hay 0 palabras en el string. */
//----------------------------------------------------------------------------------------

/*  10. Combinación de métodos: Usa varios métodos de string en un mismo ejercicio
para resolver un problema más complejo, como extraer infomación específica de una cadena
con un formato predefinido. */

   function validadorCorreo(email){
    if(!email){
        alert('Correo vacío, ingrese uno válido');
        return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
   }
   console.log(validadorCorreo('hola@gmail.com'));
   console.log(validadorCorreo('holagmail.com'));
   console.log(validadorCorreo('hola@gmailcom'));
