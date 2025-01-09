// Clase 111: Concatenación (+) y Template Strings (Plantillas Literales).

/*  1. Crea una variable nombre con tu nombre y una variable saludo que
concatene "Hola", con tu nombre. */

    const nombre = 'Rodolfo';
    console.log("Hola " + nombre);

    /* R: Utilicé un salto de espacio para evitar que las cadenas queden pegadas */

//----------------------------------------------------------------------------------------


/*  2. Concatena las cadenas "Javascript" y "es genial" para formar la frase
"JavaScript es genial". */

    const frase1 = "JavaScript";
    const frase2 = " es genial";
    console.log(frase1 + frase2);

    /* R: Utilicé un salto de espacio para evitar que las cadenas queden pegadas */
//----------------------------------------------------------------------------------------

/*  3. Tienes las variables parte1 = "Aprendiendo" y parte2 = "JavaScript". 
Concaténalas con un espacio en blanco entre ellas. */

    let parte1 = "Aprendiendo";
    let parte2 = "JavaScript";
    console.log(parte1 + " " + parte2);

    /* R: Utilicé un espacio en blanco directo en la consola. */
//----------------------------------------------------------------------------------------

/*  4. Crea una variable edad con tu edad y concatena la cadena "Tengo" con tu
edad y luergo con "años". */

    let edad = 24;
    console.log("Tengo " + edad + " años");

    /* R: Utilizo espacios en blanco al final y al inicio de las cadenas. */
//----------------------------------------------------------------------------------------

/*  5. Concatena las variables dia = "Martes", mes = "Octubre" y anio = "2024"
para formar la fecha "Martes, Octubre de 2024". */;

    let dia = "Martes";
    let mes = "Octubre";
    let anio = "2024";
    console.log(dia + ", " + mes + " de " + anio);

    /* R: Utilicé concatenaciones con espacios para completar el texto 
    solicitado */
//----------------------------------------------------------------------------------------

/*  6. Si tienes x = 5 e x = 10, concatena para mostrar "La suma de 5 y 10 es 15",
(Recuerda convertir los números a cadenas con String() o concatenándolos
directamente) */

    const x1 = 5;
    const x2 = 10;
    console.log("La suma de " + x1 + " y " + x2 + " es " + (x1+x2));

    /* R: Utilizo cadenas de String para concatenar las variables y finalmente
    realizo la operación de x1 y x2 en la consola. */
//----------------------------------------------------------------------------------------

/*  7. Crea una variable frase que concatene "El número" con el número 7 y luego
con " es mi favorito". */

    let frase = ("El número " + 7 + " es mi favorito");
    console.log(frase);

    /* R: Pienso que esta algo equivocado mi ejercicio, pues tengo diferentes
    tipos de datos en una variable. */
//----------------------------------------------------------------------------------------

/* 8. Dados texto1 = "Esto es" y texto2 = "una prueba", concaténalos con
un espacio y un punto al final. */

    let text1 = "Esto es";
    let text2 = "una prueba";
    console.log(text1 + " " + text2 + ".");

    /* R: Utilizo un String de espacio y uno con un punto final. */
//----------------------------------------------------------------------------------------

/* 9. Si a = "Hola" y b = "Mundo", concatena para obtener "Hola Mundo!" */

    let a = "Hola";
    let b  = "Mundo";
    console.log(a + " " + b + "!");

    /* R: Concateno un string con el símbolo "!" al final. */
//----------------------------------------------------------------------------------------

/*  10. Concatena "1" + 2 + "3". ¿Cuál es el resultado y por qué? */

    console.log("1" + 2 + "3");

    /* R: El resultado es 123, pues no realiza ninguna operación, sólo concatena*/
//----------------------------------------------------------------------------------------

/*  Templates */

/*  1.  */
