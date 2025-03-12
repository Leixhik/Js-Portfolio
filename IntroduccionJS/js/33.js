function obtenerEmpleados(){
    
    const archivo = "empleados.json";  // Guardé la URL de mi conexión a un const

    fetch(archivo) // Aquí iria el URL de la API
        .then( resultado => { //fetch utiliza promises
            console.log(resultado)
    });
}

obtenerEmpleados();