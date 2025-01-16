// Clase 115: Desestructuración de Objetos.     (Estado: No revisado.)

/*  1. Desestructuración básica: Dado el objeto: */
    const persona = { nombre: "Ana", edad: 30, ciudad: "Madrid" };
/*  Desestructura las propiedades nombre y edad en variables separadas.*/

    const var1 = persona.nombre;
    const var2 = persona.edad;
    console.log(var1 + " " + var2);

//----------------------------------------------------------------------------------------+

/*  2. Desestructuración con nombres de variables diferentes: Dado el objeto:*/
    const producto = {nombre: "Laptop", precio: 1200};
/*  Desestructura la propiedad nombre en una variable llamada nombreProducto y la 
    propiedad precio en una variable llamada precioProducto. */

    const nombreProducto = producto.nombre;
    const precioProducto = producto.precio;
    console.log(nombreProducto + " " + precioProducto);

//----------------------------------------------------------------------------------------+

/*  3. Desestructuración con valores por defecto: Dado el objeto: */
    const configuracion = { ancho: 800 };
/*  Desestructura las propiedades ancho y alto. Asigna un valor por defecto de 600
    a la variable alto en caso de que la propiedad no exista en el objeto. */

    configuracion.alto = 600;
    const configAncho = configuracion.ancho;
    const configAlto = configuracion.alto;
    console.log(configAncho + " " + configAlto);
//----------------------------------------------------------------------------------------+

/*  4. Desestructuración de objetos anidados: Dado el objeto: */
    const usuario = {
        nombre: "Carlos",
        direccion: {
            calle: "Calle Mayor, 10",
            ciudad: "Barcelona"
        }
    };
/*  Desestructura la propiedad calle en una variable separada. */

    const calleUsuario = usuario.direccion.calle;
    console.log(calleUsuario);

//----------------------------------------------------------------------------------------+

/*  5. Desestructuración con el operador rest ( ... ): Dado el objeto: */
    const datos ={ a:1, b:2, c:3, d:4 };
/*  Desestructura las propiedades a y b y guarda las propiedades restantes en un nuevo objeto
    llamado resto. */

    let datoA, datoB, resto;
    [datoA, datoB, ...resto] = [datos.a, datos.b, datos.c , datos.d];
    console.log(`${datoA}, ${datoB}, ${resto}`);

//----------------------------------------------------------------------------------------+

/*  6. Desestructuración en parámetros de funciones: Crea una función llamada mostrarInformacion
que reciba un objeto persona con las propiedades nombre, edad, y profesión, y muestre un
mensaje en la consola utilizando la desestructuración en los parámetros de la función. */

    const persona2 = {
        nombre: 'Rodolfo',
        edad: 24,
        profesion: 'Ingeniero'
    };

    function mostrarInformacion({ nombre, edad, profesion}){ // Esta es la desestructuración (directamente).
        console.log(`Hola, mi nombre es ${nombre} tengo ${edad} y soy ${profesion}`);
    } /* Las propiedades del objeto se asignarán a las variables con los mismos nombres dentro
            de la función. */

    mostrarInformacion(persona2);

    /* Mi conclusión de aprendizaje(use IA): Basicamente estoy creando un objeto llamado
    persona2 con los parámetros indicados y definidos, luego creo una función que leerá
    los parámetros indicados del objeto que utilicemos al llamar la función
    (mostrarInformacion(Objeto)), y finalmente mostrará esos datos en consola. */

//----------------------------------------------------------------------------------------+

/*  7. Desestructuración con propiedades calculadas: Dado el objeto: */
    const medidas = { base:10, altura:5 };
/*  Desestructura las propiedades base y altura y calcúla el área (base * altura)
    directamente dentro de la desestructuración, guardando el resultado en una variable
    llamada area. */

    function calculoArea({base, altura}){
        let area = base * altura;
        return area;
    }

    console.log(calculoArea(medidas));

//----------------------------------------------------------------------------------------+

/*  8.  */
    
