async function obtenerEmpleados() {

    const archivo = "js/empleados.json";  // Guardé la URL de mi conexión a un const

    // fetch(archivo) // Aquí iria el URL de la API
    //     .then(resultado =>  /*fetch utiliza promises*/ resultado.json())
    //     .then(datos => {
    //         // console.log(datos.empleados);

    //         const { empleados } = datos; // Forma: creas una variable, le almacenas la traducción del .json y eso te permite hacer más fácil la cosas
    //         console.log(empleados); 
    //     });

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos)
}

obtenerEmpleados();