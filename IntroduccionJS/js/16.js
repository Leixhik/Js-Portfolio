
// Declaración de Función

function sumar() {
    console.log(10 * 10);
}

sumar();

// Expresión de la función

const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

// IIFE = se invocan a ellas mismas(protege la variable de salir del archivo.)

(function() {
    console.log(`Esto es una función.`);
})();

