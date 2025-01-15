// Clase 114: Modificar Objetos en JavaScript (Estado: Corregido por Gemini)

/* En JS, los objetos son mutables, lo que significa que podemos cambiar sus propiedades
 después de que se han creado. Podemos añadir nuevas propiedades, modificar las existencias
 y eliminar propiedades. */

/*  1. Crea un objeto llamado producto con las propiedades nombre (string), precio(number)
y enStock (boolean). */

    const producto = {
        nombre: 'Caja',
        precio: 200,
        enStock: true
    }

//----------------------------------------------------------------------------------------+

/*  2. Modifica el precio del producto del ejercicio 1. */

    producto.precio = 300;

//----------------------------------------------------------------------------------------+

/*  3. Añade una nueva propiedad llamada descripcion (string) al objeto producto. */

    producto.descripcion = 'Cuadrada';

//----------------------------------------------------------------------------------------+

/*  4. Elimina la propiedad enStock del objeto producto. */

    delete producto.enStock;

//----------------------------------------------------------------------------------------+

/*  5. Crea un objeto llamado circulo con la propiedad radio (number). Agrega un método
llamado calcularArea que calcule y retorne el área del círculo (area = pi * radio ^ 2).
Modifica el objeto para agregar una propiedad diametro que se calcule automáticamente a 
partir del radio (diametro = 2 * radio). */

    const circulo = {
        radio: 109,
        get diametro (){ // Getter para calcular el diámetro automáticamente.
            return 2 * this.radio; // Diametro siempre actualizado.
        },
        calcularArea: function (){
            let area = (Math.PI * (Math.pow(this.radio, 2)));
            return area;
        }
    }

    console.log(`El diámetro del circulo es ${circulo.diametro}`);
    console.log(`El area del circulo es ${circulo.calcularArea()}`);
    circulo.radio = 5;
    console.log(`El diametro del circulo es ${circulo.diametro}`);
    console.log(`El area del circulo es ${circulo.calcularArea()}`);

//----------------------------------------------------------------------------------------+

/*  6. Crea un objeto llamado usuario con las propiedades nombre, email
y direccion (que a su vez será otro objeto con las propiedades calle,
ciudad y codigoPostal).*/

    const usuario = {
        nombre: 'AbsractZ',
        email: 'leixhik@hotmail.com',
        direccion : {
            calle: 'Casa 1',
            ciudad: 'Apodafrica',
            codigoPostal: 66565
        }
    }

//----------------------------------------------------------------------------------------+

/*  7. Modifica la calle del usuario del ejercicio 6. */

    usuario.direccion.calle = 'Hda Los portales';
    console.log(usuario.direccion.calle); // Ejemplo de anidación.

//----------------------------------------------------------------------------------------+

/*  8. Añade una nueva propiedad llamada telefonos(será un array de números de teléfono)
al objeto usuario.  */

    usuario.telefonos = [81809009, 8172667001, 8882775281];

//----------------------------------------------------------------------------------------+

/*  9. Crea un objeto llamado coche con las propiedades marca, modelo y anio. Crea una
función que reciba un objeto coche y modifique su propiedad anio sumandoles 1
(simulando que ha pasado un año). */

    const coche = {
        marca: 'Toyota',
        modelo: 2004,
        anio: 2024
    }

    function cocheActual(coche){
        coche.anio +=1; // ó ++
        return coche; //.anio; --> es mejor retornar el objeto completo modificado. 
    }

    console.log(cocheActual(coche)); // R: 2025.
    const cocheActualizado = cocheActual(coche);
    console.log(cocheActualizado); // Muestra el objeto actualizado
    console.log(coche); // Muestra el objeto original para saber si se ha modificado

//----------------------------------------------------------------------------------------+

/*  10. Crea un objeto llamado cuentaBancaria con las propiedades titular y saldo.
Agrega los métodos depositar(cantidad) y retirar(cantidad) que modifiquen el saldo
de la cuenta. Asegúrate de que no se pueda retirar más dinero del que hay en la cuenta. */

    const cuentaBancaria = {
        titular: 'Rodolfo Leija',
        saldo: 100,
        depositar: function(cantidad){
            this.saldo += cantidad;
            return this.saldo;
        },
        retirar: function(cantidad){
            if (cantidad > this.saldo){
                return `No cuentas con saldo suficiente.`;
            }
            this.saldo -= cantidad;
            return this.saldo;
        }
    }

    /*function depositar(cuentaBancaria){ // debe ser un método propio del objeto
        let deposito = parseFloat(prompt(`Ingresa el saldo a depositar: `));
        cuentaBancaria.saldo += deposito;
        return cuentaBancaria.saldo;
    }

    function retirar(cuentaBancaria){ // debe ser un método propio del objeto
        let retiro
        do {
            retiro = parseFloat(prompt(`Ingresa la cantidad que deseas retirar: `))
            if (isNaN(cuentaBancaria.saldo) || (cuentaBancaria.saldo < retiro )) {
                alert("No cuentas con saldo necesario");
            } else{
                cuentaBancaria.saldo -= retiro;
                return cuentaBancaria.saldo;
            }
        } while(isNaN(cuentaBancaria.saldo) || (cuentaBancaria.saldo < retiro ));
    }
     
        - Se tenia que usar un this.saldo.
        - lógica del retiro:
            Usaba un bucle do while innecesario
            La condición para verificar el saldo era incorrecta
            No se manejaba el caso en que el usuario intentaba retirar más dinero del que
            había en la cuent.
        - Retorno de mensaje de error: En lugar de un valor boolean se mandaba un mensaje de
        error. 
    */

    //Prueba de programa
    console.log(`Nombre : ${cuentaBancaria.titular}, Saldo actual: ${cuentaBancaria.saldo}`);
    console.log(`Nuevo saldo después de depositar 50: ` + cuentaBancaria.depositar(50));
    console.log(`Nuevo saldo después de retirar 200: ` + cuentaBancaria.retirar(200));
    console.log(`Nuevo saldo después de retirar 50: ` + cuentaBancaria.depositar(50));
    console.log(`Nombre: ${cuentaBancaria.titular}, Saldo actual: ${cuentaBancaria.saldo}`);

