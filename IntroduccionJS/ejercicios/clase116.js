// Clase 116: Método de Objetos en JavaScript.

/*  1. Crea un objeto llamado calculadora con métodos para sumar, restar, multiplicar
y dividir los números. Cada método debe recibir dos argumentos y retornar el
resultado.  */

    const calculadora = {
        suma: function(a, b){
            return a + b;    
        },
        resta: function(a, b){
            return a - b;    
        },
        mult: function(a, b){
            return a * b;    
        },
        divi: function(a, b){
            return a / b;    
        }
    }

    console.log(calculadora.suma(1,2));
    console.log(calculadora.resta(1,2));
    console.log(calculadora.mult(1,2));
    console.log(calculadora.divi(1,2));
//----------------------------------------------------------------------------------------

/*  2.  */