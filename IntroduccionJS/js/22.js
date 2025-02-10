
// const puntaje = 1000;

// if(puntaje !== 1000) {
//     console.log(`Si, el puntaje es 1000.`)
// } else {
//     console.log(`No es igual.`);
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito){
//     console.log(`El usuario puede pagarlo.`);
// } else {
//     console.log(`Fondos Insuficientes.`);
// }

const rol = 'ADMINISTRADOR';
if (rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR'){
    console.log(`Eres Editor, puedes entrar limitadamente.`);
} else {
    console.log(`No puedes entrar.`);
}
// No se recomienda crear demasiadas variantes de if, mejor usar Switch.