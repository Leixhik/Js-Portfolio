// This

const reservacion = {
    nombre: 'Rodolfo',
    apellido: 'Leija',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`)
    }
}

reservacion.informacion();

const reservacion2 = {
    nombre: 'Axel',
    apellido: 'Leija',
    total: 6000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${reservacion2.nombre} reservó y su cantidad a pagar es de ${reservacion2.total}`)
    }
}

reservacion2.informacion();

window.nombre = 'MiNombre'
const reservacion3 = {
    nombre: 'Pawish',
    apellido: 'Leija',
    total: 6000,
    pagado: false,
    informacion: () => (
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`))
}
// En el ejemplo 3, se muestra que pasa si utilizamos un arrow function no tomará como 
// this.nombre el valor de nombre, sino uno que está declarado con el método window.nombre.

reservacion3.informacion();
