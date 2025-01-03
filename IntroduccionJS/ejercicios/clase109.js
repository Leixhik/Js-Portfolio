// Clase 109: El Objeto Math en JS

/*  1. Math.round(): Redondea un nùmero al entero más cercano. */

    console.log(Math.round(3.5)); // --> 4

    /* R: Se ha rendondeado al valor más cercano gracias a la función Math.round.
    Útil para promedios cerrados. */
//----------------------------------------------------------------------------------------

/*  2. Math.ceil(): Redondea un número hacia arriba al entero más cercano. */

    console.log(Math.ceil(3.4));

    /* R: En esta ocasión no importa el valor de la decimal, siempre subirá siguiente entero. 
    */
//----------------------------------------------------------------------------------------

/*  3. Math.floor(): Redondea un número hacia abajo al entero más cercano. */

    console.log(Math.floor(3.99));

    /* R: A diferencia de ceil(), floor se quedará en el último entero, sin importar
    el valor del decimal. */
//----------------------------------------------------------------------------------------

/*  4. Math.random(): Genera un número aleatorio entre 0 y 1. */

    console.log(Math.random()*100); // Valor entre 0 y 99 con muchas decimales.
    console.log(Math.floor(Math.random() * 100)); // Valor entre 0 y 100 sin decimales.

    /* R: Utilizar la función random nos dará un valor entre 0 y uno, es necesario hacer una
    multiplicación por el campo que se desea abarcar. Además utilizar un floor para obtener
    valor enteros. */
//----------------------------------------------------------------------------------------

/*  5. Math.max() y Math.min(): Encuentran el máximo y el mínimo de un conjunto de 
números. */

    const arreglo1 = [1, 2, 3, 4, 5];
    console.log(Math.max(...arreglo1));
    console.log(Math.min(...arreglo1));

    /* R: Creando un arreglo con diferentes valores, utilizamos el max y min para obtener
    lel valor más grande y chico. */
//----------------------------------------------------------------------------------------

/*  6. Math.abs(): Obtiene el valor absoluto de un número. */

    console.log(Math.abs(-7.5));
    console.log(Math.abs(-0));

    /* R: Se obtiene el valor absoluto por medio de abs. */
//----------------------------------------------------------------------------------------

/*  7. Math.pow(): Eleva un número a una potencia. */

    console.log(Math.pow(2,2)); // 2^2 = 4

    /* R: Math.pow() nos indica que el primer valor es el número que se elevará y el segundo
    valor a la potecia que será elevada. */
//----------------------------------------------------------------------------------------

/*  8. Math.sqrt(): Calcula la raíz cuadrada de un número. */

    console.log(Math.sqrt(10));

    /*  R: Esta función nos permite sacar la raíz cuadra de un valor. */
//----------------------------------------------------------------------------------------

/*  9. Ejemplo práctico (generador de números aleatorios en un rango): Crea una función
que genere números aleatorios dentro de un rango específico. */

    let min = parseInt(prompt(`Ingresa el valor mínimo del rango:`));
    let max = parseInt(prompt(`Ingresa el valor máximo del rango:`));

    function numerosRandom(min, max){
        if(isNaN(min) || isNaN(max)){
            return `Error: Los valores mínimo y máximo deben ser números`;
        }

        if(min > max){
            return `Error: El valor mínimo debe ser menor o igual al valor máximo.`;
        }

        if(min <0 || max < 0){
            return `Error: Los valores mínimo y máximo deben ser positivos. `;
        }

        const rango = max - min + 1; // Calcula el rango incluyendo ambos extremos.
        // max - min + 1 para incluir ambos extremos
        return Math.floor(Math.random() * rango) + min; // Genera el número dentro del rango.
    }

    let resultadoRandom = numerosRandom(min, max);
    console.log(`El número aleatorio es: ${resultadoRandom}`);

    /* R: Utilizamos una variable que almacene el rango por el usuario, después utilizamos 
    la funcion floor para obtener solo numeros enteros y finalmente usamos la variable 
    rango para multiplicar con la función de random(). */
//----------------------------------------------------------------------------------------

/*  10. Ejemplo práctico (simulación de lanzamiento de dados): Simula el lanzamiento de
uno o dos dados. */

    let nDados = parseInt(prompt(`Ingresa la cantidad de dados a lanzar (1 o 2)`));

    function lanzarDados(){
        let resultado;

        switch (nDados){
            case 1:
                resultado = `Dado = ${Math.floor(Math.random() * 6) + 1}`
                break;
            case 2:
                resultado = `Dado 1 = ${Math.floor(Math.random() * 6) + 1}
                Dado 2 =  ${Math.floor(Math.random() * 6) + 1}`
                break;
            default:
                return `Entrada no válida. Por favor, ingresa 1 o 2.`; // Mensaje más claro
        }
        return resultado
    }

    resultadoDado = lanzarDados();
    console.log(`El resultado del ${resultadoDado}`);

    /* R: La función utiliza Math.random() para generar un número aleatorio entre 
    0 (inclusive) y 1 (exclusivo), se multiplica por 6 y se usa Math.floor() para 
    obtener un entero entre 0 y 5. Finalmente, se suma 1 para obtener un número 
    entre 1 y 6, simulando el lanzamiento de un dado. */

    

    