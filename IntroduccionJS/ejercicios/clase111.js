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
    tipos de datos en una variable. Esto no es incorrecto. En JavaScript, 
    una variable puede contener valores de diferentes tipos a lo largo 
    de su vida (aunque no es una práctica recomendada en muchos casos, 
    es posible). */
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

/*                                      Templates                                        */

/*  1. Usa template strings para crear el saludo "Hola,[nombre]", donde [nombre] 
es una variable.*/

    let miNombre = "Rodolfo";
    console.log(`Hola ${miNombre}`);

    /* R: Usando templates utilizo el ${} para agregar mi variable. */
//----------------------------------------------------------------------------------------

/*  2. Crea una frase usando template strings que incluya tu nombre, edad y
ciudad. */

    let ciudad = 'Apodaca';
    console.log(`Nombre: ${miNombre}, Edad: ${edad}, Ciudad: ${ciudad}`);

    /* R: Dado que ya tengo algunas variables definidas, sólo me hizo falta
    concatenarlas. */
//----------------------------------------------------------------------------------------

/*  3. Con template strings, muestra el resultado de la multiplicación
de 5 x 7. */

    console.log(`Resultado de 5 x 7 = ${5 * 7}`);
    /* R: Utilicé el ${}d para realizar ahi mismo la operación. */
//----------------------------------------------------------------------------------------

/*  4. Tienes las variables producto = "manzanas" y precio = 2.5. Usa template
strings para mostrar "El precio de las manzanas es $2.5 */

    let producto = 2.5;
    console.log(`El precio de las manzanas es $${producto}`);

    /* R: Se ha realizado el cambio. */
//----------------------------------------------------------------------------------------

/*  5. Crea una template string que muestre la tabla de multiplicar del 3
hasta el 5, usando un bucle for. */

    for(let i = 0 ; i < 5 ; i++){
        let tabla = 3 * (i + 1);
        console.log(`3 x ${i +1} = ${tabla}`);
    }
    
    /* R: Utilizando un bucle for puse un límite hasta 5, después tomé
    el valor de i para mostrar el conteo y además realizar con un +1 
    la multiplicación. */
//----------------------------------------------------------------------------------------

/*  6. Con variables autor = "Gabriel García Marquez" y libro = "Cien años
de soledad", crea una frase usando template strings. */

    let autor = "Gabriel García Márquez";
    let libro = "Cien años de Soledad";
    console.log(`Autor: ${autor}
        Libro: ${libro}`);
    
    /* R: Agregué un formato con template strings. */
//----------------------------------------------------------------------------------------

/*  7. Usa template strings para mostrar "El área de un cuadrado de lado 4 es 
16." */

    console.log(`El área de un cuadrado de lado 4 es: ${Math.pow(4,2)}`);

    /* R: Usé Math.pow para elevar al cuadrado el valor 4 y obtener 16 dentro
    del template string. */
//----------------------------------------------------------------------------------------

/*  8. Si nombre = "Ana" y trabajo = "programadora", crea una frase con 
template strings. */

    let nombre1 = "Ana";
    let trabajo1 = "programadora";
    console.log(`Mi nombre es ${nombre1} y soy ${trabajo1}`);

    /* R: No hay mucho que decir, solo creé una frase con dos variables en
    el template. */
//----------------------------------------------------------------------------------------

/*  9. Crea una template string que muestre la suma de dos variables num1 y num2.*/

    let num1 = 10;
    let num2 = 20;
    console.log(`La suma de num1 y num2 es: ${num1 + num2}`);

    /* R: Ejercicio práctico y sencillo. */
//----------------------------------------------------------------------------------------

/*  10. Con template strings, crea una lista numerada del 1 al 3. */

    console.log(`Lista:
        1. 
        2. 
        3. `);
    
    /* R: Entendí esta forma de crear la lista. */
    