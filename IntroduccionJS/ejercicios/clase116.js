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

/*  2. Crea un objeto llamado rectangulo con propiedades base y altura. Agrega métodos 
para calcular el área (base * altura) y el perímetro (2 * (base + altura)). */

    const rectangulo = {
        area: function (base, altura){
            return base * altura;
        },
        perimetro: function(base, altura){
            return (2 * (base + altura));
        }
    }

    console.log(rectangulo.area(10,15));
    console.log(rectangulo.perimetro(10,15));
//----------------------------------------------------------------------------------------

/*  3. Crea un objeto llamado circulo con la propiedad radio. Agrega métodos para
calcular el área (PI * radio^2) y la circunferencia(2 * PI * radio). */

    const circulo = {
        area: function (radio){
            return (Math.PI * (Math.pow(radio, 2)));
        },
        circunferencia: function (radio){
            return (Math.PI * 2 * (radio));
        }
    }

    console.log(circulo.area(25.5).toFixed(2));
    console.log(circulo.circunferencia(25.5).toFixed(2));
//----------------------------------------------------------------------------------------

/*  4. Crea un objeto llamado persona con las propiedades nombre, apellido y un 
método nombreCompleto() que retorne el nombre completo de la persona. */

    const persona = {
        nombreCompleto: function (nombre, apellido){
            var nombre = 'Pakis';
            var apellido = 'Paulin';
            return (`Nombre: ${nombre}, Apellido: ${apellido}`);
        }
    }

    console.log(persona.nombreCompleto())
//----------------------------------------------------------------------------------------

/*  5. Crea un objeto llamado libro con las propiedades titulo, autor y paginas.
Agrega un método mostrarInformacion() que muestre en la consola un mensaje con la información
del libro (titulo, autor y número de páginas). */

    const libro = {
        mostrarInformacion: function(titulo, autor, paginas){
            return(`Datos del Libro: 
                Libro: ${titulo}
                Autor: ${autor}
                Núm. Páginas: ${paginas}`);
        }
    }

    console.log(libro.mostrarInformacion('Cara de Tortilla', 'Pakis Paulin', 56 ));
//----------------------------------------------------------------------------------------

/*  6. Crea un objeto llamado cuentaBancaria con las propiedades titular y saldo. 
Agrega un método para depositar(cantidad) y retirar(cantidad). Asegúrate de que no se
pueda retirar más dinero del que hay en la cuenta. */

   /* const cuentaBancaria = {
        titular: prompt('Ingresa el nombre del titular: '),
        saldo: 1500.00,
        depositar: function(cantidad){
            cantidad = parseFloat(prompt(`Ingresa la cantidad a depositar: `));
            return this.saldo += cantidad;
        },
        retirar: function(cantidad){
            cantidad = parseFloat(prompt(`Ingresa la cantidad a retirar: `));
            if (cantidad > this.saldo){
                return `No cuentas con saldo suficiente.`;
            }
            this.saldo -= cantidad;
            return this.saldo;
        }
    }

    console.log(`Nombre : ${cuentaBancaria.titular}, Saldo actual : ${cuentaBancaria.saldo}`);
    console.log(cuentaBancaria.depositar());
    console.log(cuentaBancaria.retirar()); */
//----------------------------------------------------------------------------------------

/*  7. Crea un objeto llamado temporizador con una propiedaad tiempo inicializada en 0.
Agrega métodos iniciar(), detener() y reiniciar(). El método iniciar() debe comenzar a 
incrementar la propiedad tiempo cada segundo. El método detener() debe detener el incremento.
El método reiniciar() debe volver a poner tiempo en 0. (Este ejercicio requiere el uso de
setIntervar y cleanInterval). */

    const temporizador = {
        tiempo: 0,
        intervalo: null, // se guardará el intervalo


        iniciar: function(){
            // Si ya hay un intervalo en marcha, no hacemos nada. Evita múltiples intervalos simultáneos.
            if (this.intervalo !== null) return;

            // Usamos setInterval para incrementar el tiempo cada segundo
            this.intervalo = setInterval(() => {
                this.tiempo++;
                console.log(`Tiempo: ${this.tiempo}`);
            }, 1000);
        },

        detener: function(){
            // Detenemos el intervalo el intervalo y lo limpiamos 
            clearInterval(this.intervalo);
            this.intervalo = null;
        },

        reiniciar: function(){
            // Detenemos el intervalo si está en marcha
            this.detener();
            // Reiniciamos el tiempo a 0
            console.log(`Tiempo reiniciando: ${this.tiempo}`);
        }
    };

// Ejemplos de uso
temporizador.iniciar(); // Comienza a incrementar el tiempo
setTimeout(() => temporizador.detener(), 5000); // Detiene después de 5 segundos
setTimeout(() => temporizador.reiniciar(), 7000); // Reinicia después de 7 segundos

/* Aprendizaje propio (problema hecho por IA): al inicio creé muy bien los métodos, y el 
tiempo, pero la IA implementó la propiedad de intervalo con null para ser llenado pro el
setInterval que este se encarga de aumentar el contador por medio de 1 segundo y guardando
el valor en intervalo. La función detener utiliza el clearInteral con el this.tiempo
para detener. Finalmente usamos la función reiniciar llamando el método detener y reiniciando
el tiempo a 0.

Al final iniciamos el temporizador, detenemos al segundo 5 con .detener() y reiniciamos
al segundo 7 con .reiniciar() volviendo tiempo a 0. */

//----------------------------------------------------------------------------------------

/*  8. Crea un objeto llamado listaDeTareas con una propiedad tareas que sea un array vacío.
Agrega métodos para agregaTarea(tarea), eliminarTarea(indice) y mostrarTareas(). */

    const listaDeTareas = {
        tareas: [],
        agregarTarea: function(tarea){
            return this.tarea(tarea);
        },
        eliminarTarea: function(indice){
            
        },
        mostrarTareas: function() {

        }
    }

//----------------------------------------------------------------------------------------

/*  9. Crea un objeto llamado validador con métodos para validar diferentes tipos de datos:
- esEmail(email): Retorna true si el email tiene un formato válido, false en caso contrario
    (pueden usarse expresiones regulares para esto).

- esNumerotelefonico(telefono): Retorna true si el teléfono tiene un formato válido, false 
en caso contrario. (Puede usar expresiones regulares).  */