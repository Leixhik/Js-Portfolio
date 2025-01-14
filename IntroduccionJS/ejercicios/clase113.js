// Clase 113: Objetos en JavaScript (Se han corregido con Gemini)

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
    
    const libro = {
        titulo: 'El nuevo Dios',
        autor: 'Jose Luis Chapa',
        añoPublicacion: 2025
    }

//----------------------------------------------------------------------------------------+

/* 6. Crea un objeto llamado rectangulo con las propiedades ancho y alto. Agrega un
método llamado calcularArea que calcule y retorne el área del rectángulo 
(área = ancho * alto) */

    const rectangulo = {
        ancho: 15,
        alto: 10,
        calcularArea: function(){
            return this.ancho * this.alto;
        }
    }

    // function calcularArea (){
    //     area = (Rectangulo.alto * Rectangulo.ancho);
    //     return area;
    // } --- > Corrección Arriba
    console.log(rectangulo.calcularArea());
//----------------------------------------------------------------------------------------+

/*  7. Crea un array llamado estudiantes que contenga tres objetos.
Cada objeto debe representar a un estudiante con las propiedades nombre y
calificación. */

    /*const estudiante = {
        nombre: '',
        calificacion: 0.0
    } ---> Código innecesario, pues es redundante*/
    
    const estudiantes = [
        {nombre: 'Rodolfo', calificacion: 10.0}, 
        {nombre: 'Axel', calificacion: 10.0}, 
        {nombre: 'Mamas', calificacion: 9.0}
    ];

    console.log(estudiantes);
    /* Corrección de Gemini: no es necesario crear el objeto estudiante por separaddo. Solo
    crear un array que contenga instancias de objetos estudiante. Sin embargo el ejercicio
    estaba correcto pero con código redundante. */
//----------------------------------------------------------------------------------------+

/*  8. Recorre el array estudiante del ejercicio 7 y muestra el nombre y la calificación
de cada estudiante en la consola. */

    for (let i = 0; i < estudiantes.length; i++){
        console.log((i + 1) + `) Nombre: ${estudiantes[i].nombre}, Calif:  ${estudiantes[i].calificacion}`)
    }
//----------------------------------------------------------------------------------------+

/*  9. Crea un objeto llamado calculadora con los métodos sumar, restar, multiplicar y 
dividir. Cada método debe recibir dos argumentos y retornar el resultado de la operación 
correspondiente. */

    let a = parseFloat(prompt('Ingresa el valor de a: '));
    let b = parseFloat(prompt('Ingresa el valor de b: '));
    let operacion = parseInt(prompt(`Ingresa la operación deseada: 
        1. Suma
        2. Resta
        3. Multiplicación
        4. División`));

    const calculadora = { /* Fallé en hacer que las operaciones fueran funciones.*/
        suma : function(a, b){return a + b},
        resta: function(a, b){return a - b},
        mult: function(a, b){return a * b},
        divi: function(a, b){
            if(b === 0){
                return "Error: División por cero.";
        }
            return a / b;
        }
    };

    switch(operacion){
        case 1:
            console.log(`Resultado de la suma = ${calculadora.suma(a ,b)}`);
            break;
        case 2:
            console.log(`Resultado de la resta = ${calculadora.resta(a ,b)}`);
            break;
        case 3:
            console.log(`Resultado de la multiplicación = ${calculadora.mult(a ,b)}`);
            break;
        case 4:
            console.log(`Resultado de la división = ${calculadora.div(a ,b)}`);
            break;
        default:
            console.log("Operación no válida.");
    } 
            
//----------------------------------------------------------------------------------------+

/*  10. Crea un objeto llamado mascota con las propiedades nombre, tipo, y un método llamado
hacerSonido. El método hacerSonido debe mostrar un mensaje en la consola que dependa del 
tipo de mascota (Ej. 'Guau' si es un perro, 'Miau' si es un gato). */

    let tipoDeMascota;
    do { /* Gemini: do-while para asegurar que el usuario ingrese un valor.  */
        tipoDeMascota = parseInt(prompt('¿Es un perro (1) o un gato (2)?'));
        if (isNaN(tipoDeMascota) || (tipoDeMascota !== 1 && tipoDeMascota !== 2)) {
            alert("Por favor, ingresa 1 para Perro o 2 para Gato.");
        }
    } while (isNaN(tipoDeMascota) || (tipoDeMascota !== 1 && tipoDeMascota !== 2));

    let nombreMascota = prompt('¿Cuál es su nombre?');

    const mascota = {
        nombre: nombreMascota,
        tipo: tipoDeMascota === 1 ? 'Perro' : 'Gato', /* <- Nueva forma de ver condicionales. */
        hacerSonido: function(){
            if(this.tipo === 'Perro'){
                console.log("Guau");
            }
            else if (this.tipo === 'Gato'){
                console.log("Miau");
            }
            else {
                console.log('Tipo de mascota desconocida.');
            }
        }
    };

    console.log(`Nombre de Mascota: ${mascota.nombre}`);
    console.log(`Tipo: ${mascota.tipo}`);
    mascota.hacerSonido();
    
