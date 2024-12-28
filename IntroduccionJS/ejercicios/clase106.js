// Clase 106 - Strings o Cadenas de Texto

/*  1. Concatenación: Concatena dos o más Strings usando el operador +. */

    let ejemplo1 = 'Hola';
    let ejemplo2 = 'Mundo';
    console.log(ejemplo1 + ejemplo2);

    /* R: Se han concatenado los Strings pero falta un espacio entre ellos*/
//----------------------------------------------------------------------------------------

/*  2. Longitud de un string: Obtén la longitud de un string usando la propiedad length.*/

    let ejemplo3 = 'Hello World';
    console.log(ejemplo3.length);

    /* R: Utilizamos el método length para obtener la longitud del string. */
//----------------------------------------------------------------------------------------

/*  3. Acceso a carácteres: Accede a un carácter específico de un string usando corchetes[]*/

    let ejemplo4 = 'Hola Axel';
    console.log(ejemplo4[1]);

    /* R: Se utiliza el corchete para indicar la posición del carácter deseado. */
//----------------------------------------------------------------------------------------

/*  4. Extracción de substrings: Extrae una parte de un string usando el método slice(). */

    let ejemplo5 = 'Quetal';
    console.log(ejemplo5.slice(2,6));

    /* R: Se utilizó el método slice para obtener una lista de carácteres de un String. */
//----------------------------------------------------------------------------------------

/*  5. Búsqueda de substrings: Busca la posición de un substring dentro de un string usando
    indexOf() o lastIndexOf(). */

    let ejemplo6 = 'Hola Que Tal Va Todo Hoy';
    console.log(ejemplo6.indexOf('o'));
    console.log(ejemplo6.lastIndexOf('o'));

    /* R: El indexOf obtiene el primer índice de la búsqueda, mientras que lastIndexOf
     muestra el último índice de la búsqueda.*/
//----------------------------------------------------------------------------------------

/*   6. Conversión a mayúsculas/ minúsculas: Convierte un string a mayúsculas con 
    toUpperCase() y a minúsculas con toLoweCase(). */
    
    let ejemplo7 = 'texto uno';
    let ejemplo8 = 'TEXTO DOS';
    console.log(`${ejemplo7} --> ${ejemplo7.toUpperCase()}`);
    console.log(`${ejemplo8} --> ${ejemplo8.toLowerCase()}`);

    /* R: Utilicé los métodos indicados para convertir el texto a diferentes formatos. */
//----------------------------------------------------------------------------------------

/*  7.  Reemplazo de substrings: Reemplaza una parte de un string con replace(). */

    let ejemplo9 = 'Hola soy un texto para ejemplo';
    console.log(ejemplo9.replace('Hola', 'Mirame'));

    /* R: Utilizando el replace(), se selecciona el string y después el nuevo string. */
//----------------------------------------------------------------------------------------

/*  8. Eliminación de espacios en blanco: Elimina los espacios en blanco al principio y 
    al final de un string con trim(). */

    let ejemplo10 = '   Espacios en blanco al inicio y final   ';
    console.log(ejemplo10.trim());

    /* R: A simple vista no parece que desaparezca nada pero en el resultado funciona
    correctamente. */
//----------------------------------------------------------------------------------------

/*  9.  Ejemplo práctico (formateo de nombres): Pide al usuario su nombre y apellido y 
    muestra su nombre completo formateado (ej. "Apellido, Nombre") */

    // let ejemplo11 = prompt('Ingresa tu nombre: ');
    // let ejemplo12 = prompt('Ingresa tu apellido: ');
    // console.log(`¡Buen día ${ejemplo12}, ${ejemplo11}!`); 
    // /*Comment para no recargar página */
    
    /* R: Utilicé la función prompt para obtener datos del usuario por el navegador 
    y crear el formato indicado.*/
//----------------------------------------------------------------------------------------

/*   10. Template literals (con variables): Crea un template literal que incluya 
    variables y expresiones.*/

    let a = 5;
    let b = 10;
    console.log(`El resultado de ${a} + ${b} es = ${a + b}`);

    /* R: Se ha creado el formato de template literal con variables. */

    
    