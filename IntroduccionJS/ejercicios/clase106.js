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

    let ejemplo6 = 'Hola Que Tal Va Todo Hoy'
    console.log(ejemplo6.indexOf('o'));
    console.log(ejemplo6.lastIndexOf('o'));

    /* R: El indexOf obtiene el primer índice de la búsqueda, mientras que lastIndexOf
        muestra el último índice de la búsqueda.*/