// Clase 113: Objetos en JavaScript

/*  1. Crea un objeto llamado persona con las propiedades nombre, edad y profesión.
Asigna valores a estas propiedades. */

    const persona = {
        nombre:  "Rodolfo",
        edad: 24,
        profesion: "Programador"
    }
    console.log(persona);

//----------------------------------------------------------------------------------------+

/*  2.  Accede a las propiedades del objeto persona creado en el ejercicio 1 y muestra
sus valores en la consola. Usa tanto la notación de punto (objeto.propiedad) como
la notación de corchetes (objeto['propiedad']). */

    console.log(persona.nombre);
    console.log(persona['profesion']);
    console.log(`Hola mi nombre es ${persona.nombre}, tengo ${persona.edad} años y
        soy ${persona['profesion']}.`);
//----------------------------------------------------------------------------------------+

/*  3. Añade una nueva propiedad llamada ciudad al objeto persona. */

    persona.ciudad = 'Apodaca';
    console.log(persona['ciudad']);
//----------------------------------------------------------------------------------------+

/*  4. Modifica el valor de la propiedad edad del objeto persona.*/

    persona.edad = '25';
    console.log(persona.edad);

//----------------------------------------------------------------------------------------+

/*  5. Crea un objeto llamado libro con las propiedades titulo, autor y
añoPublicacion. */
    
    const Libro = {
        titulo: 'El nuevo Dios',
        autor: 'Jose Luis Chapa',
        añoPublicacion: 2025
    }

//----------------------------------------------------------------------------------------+

/* 6. Crea un objeto llamado rectangulo con las propiedades ancho y alto. Agrega un
método llamado calcularArea que calcule y retorne el área del rectángulo 
(área = ancho * alto) */

    const Rectangulo = {
        ancho: 15,
        alto: 10
    }

    function calcularArea (){
        area = (Rectangulo.alto * Rectangulo.ancho);
        return area;
    }
    console.log(calcularArea());
//----------------------------------------------------------------------------------------+

/*  7. Crea un array llamado estudiantes que contenga tres objetos.
Cada objeto debe representar a un estudiante con las propiedades nombre y
calificación. */

    
