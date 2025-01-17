// Clase 115: Desestructuración de Objetos.     (Estado: Revisados por Gemini.)

/*  1. Desestructuración básica: Dado el objeto: ✓ */ 
    const persona = { nombre: "Ana", edad: 30, ciudad: "Madrid" };
/*  Desestructura las propiedades nombre y edad en variables separadas.*/

    const {nombre:nombre1 , edad} = persona;
    // const var1 = persona.nombre;
    // const var2 = persona.edad;
    console.log(nombre1 + " " + edad);

//----------------------------------------------------------------------------------------+

/*  2. Desestructuración con nombres de variables diferentes: Dado el objeto: ✓ */
    const producto = {nombre: "Laptop", precio: 1200};
/*  Desestructura la propiedad nombre en una variable llamada nombreProducto y la 
    propiedad precio en una variable llamada precioProducto. */

    const { nombre: nombreProducto, precio: precioProducto} = producto;
    // Gemini: e asigna por medio de variables con 'álias' utilizando ':' 

    /* const nombreProducto = producto.nombre;
       const precioProducto = producto.precio; */
    console.log(nombreProducto + " " + precioProducto);

//----------------------------------------------------------------------------------------+

/*  3. Desestructuración con valores por defecto: Dado el objeto: ✓ */
    const configuracion = { ancho: 800 };
/*  Desestructura las propiedades ancho y alto. Asigna un valor por defecto de 600
    a la variable alto en caso de que la propiedad no exista en el objeto. */

    const { ancho: configAncho, alto:configAlto = 600} = configuracion; /* Mejor forma de 
    desestructurar, además para crear un valor no existente (alto)*/
    
    /*configuracion.alto = 600;
    const configAncho = configuracion.ancho;
    const configAlto = configuracion.alto;*/

    console.log(configAncho + " " + configAlto);
//----------------------------------------------------------------------------------------+

/*  4. Desestructuración de objetos anidados: Dado el objeto: ✓ */
    const usuario = {
        nombre: "Carlos",
        direccion: {
            calle: "Calle Mayor, 10",
            ciudad: "Barcelona"
        }
    };
/*  Desestructura la propiedad calle en una variable separada. */

    const { direccion: {calle: calleUsuario } } = usuario; /* Desestructuración anidada. { { : } } */

    /*const calleUsuario = usuario.direccion.calle;*/
    console.log(calleUsuario);

//----------------------------------------------------------------------------------------+

/*  5. Desestructuración con el operador rest ( ... ): Dado el objeto: ✓  */
    const datos ={ a:1, b:2, c:3, d:4 };
/*  Desestructura las propiedades a y b y guarda las propiedades restantes en un nuevo objeto
    llamado resto. */

    const { a: datoA, b: datoB, ...resto } = datos; // Verdadera desestructuración de objetos
    /*let datoA, datoB, resto; */
    /*[datoA, datoB, ...resto] = [datos.a, datos.b, datos.c , datos.d]; esta mal, es una 
    desestructuración de arrays y no de objetos({}).*/
    console.log(`${datoA}, ${datoB}, ${resto}`);

//----------------------------------------------------------------------------------------+

/*  6. Desestructuración en parámetros de funciones: Crea una función llamada mostrarInformacion
que reciba un objeto persona con las propiedades nombre, edad, y profesión, y muestre un
mensaje en la consola utilizando la desestructuración en los parámetros de la función: ✓  */

    const persona2 = {
        nombre: 'Rodolfo',
        edad: 24,
        profesion: 'Ingeniero'
    };

    function mostrarInformacion({ nombre, edad, profesion}){ // Esta es la DESESTRUCTURACIÓN (directamente).
        console.log(`Hola, mi nombre es ${nombre} tengo ${edad} y soy ${profesion}`);
    } /* Las propiedades del objeto se asignarán a las variables con los mismos nombres dentro
            de la función. */

    mostrarInformacion(persona2);

    /* Mi conclusión de aprendizaje(use IA): Basicamente estoy creando un objeto llamado
    persona2 con los parámetros indicados y definidos, luego creo una función que leerá
    los parámetros indicados del objeto que utilicemos al llamar la función
    (mostrarInformacion(Objeto)), y finalmente mostrará esos datos en consola. */

//----------------------------------------------------------------------------------------+

/*  7. Desestructuración con propiedades calculadas: Dado el objeto: ✓ */
    const medidas = { base:10, altura:5 }; // <-- Desestructuración
/*  Desestructura las propiedades base y altura y calcúla el área (base * altura)
    directamente dentro de la desestructuración, guardando el resultado en una variable
    llamada area. */

    function calculoArea({base, altura}){
        let area = base * altura;
        return area;
    }

    console.log(calculoArea(medidas));

//----------------------------------------------------------------------------------------+

/*  8. Desestructuración de arrays dentro de objetos: Dado el objeto: ✓ */
    const estudiante = {
        nombre: "Elena",
        calificaciones: [9, 8, 10]
    };
/*  Desestructura el primer elemento del array calificaciones en una variable llamada 
    primeraCalificación. */

    // Desestrcuturación = { propiedadObjeto: [nuevaVariable] } = objeto;
    const { calificaciones: [primeraCalificación] } = estudiante; //exclusiva para el primer elemento.
    // si deseas obtener la segunda calificación(8) se agrega una ',' antes de la variable.
    // const primeraCalificación = estudiante.calificaciones[0];
    console.log(primeraCalificación);
//----------------------------------------------------------------------------------------+

/*  9. Intercambio de variables usando desestructuración: Dadas dos variables: ✓ */
    let x = 5;
    let y = 10;
/*  Intercambia sus valores usando la desestructuración. */

    [x , y] = [y , x];
    console.log(x);
    console.log(y);

//----------------------------------------------------------------------------------------+

/*  10. Desestructuración con funciones que retornan objetos: Crea una función que retorne
un objeto con las propiedades nombre y apellido. Luego, llama a la función y desestructura
el objeto resultante en variables separadas: ✓ */

    function objetoPropio(){
        const objeto1 = {
            nombre: 'Rodolfo',
            apellido: 'Leija'
        }
        return objeto1;
    }

    // Llamas a la función y desestructuras en dos variables ({nombre, apellido})
    const { nombre, apellido } = objetoPropio();
    console.log(nombre);
    console.log(apellido);
    // const { nombre: miNombre, apellido: miApellido } = objetoPropio(); 
    // Si se desea tener un nombre de variable diferente. Si se escribe sin alias simplemente
    // no funcionará.




    
