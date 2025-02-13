// Clase 117: Unir dos objetos con el Spread Operator

/*  1. Union básica: Dados los objetos : */
    const obj1 = { a:1 };
    const obj2 = { b:2 };
/*  Crea un nuevo objeto que contenga las propiedades de obj1 y obj2. */
    const objs = {...obj1, ...obj2};
    console.log(objs);

//----------------------------------------------------------------------------------------

/*  2. Objetos con propiedades repetidas: Dados los objetos: */
    const obje1 = { a:1, b:2};
    const obje2 = { b:3, c:4};
/*  Crea un nuevo objeto que contenga las propiedades del obje1 y obje2. ¿Qué valor
tiene la propiedad b en el nuevo objeto? */
    const objes = {...obje1, ...obje2};
    console.log(objes);
    // R: Se ha eliminado la variable b del obje1 en la union de ambos objetos.
//----------------------------------------------------------------------------------------

/*  3. Union de objetos con propiedades de diferentes tipos: Dados los objetos: */
    const objec1 = { nombre: "Ana", edad: 30};
    const objec2 = { ciudad: "Madrid", profesion: "Programadora"};
/*  Crea un nuevo objeto que contenga todas las propiedades de objec1 y objec2 */
    const objecs = {...objec1, ...objec2};
    console.log(objecs);
//----------------------------------------------------------------------------------------

/*  4. Unión de objetos con propiedades anidadas: Dados los objetos: */
    const object1 = { nombre:'Carlos', direccion: { calle: 'Calle Mayor, 10'} };
    const object2 = { direccion: { ciudad: 'Barcelona'}};
/*  Crea un nuevo objeto que contenga las propiedades de objeto1 y objeto2. ¿Qué ocurre 
con la propiedad direccion? */
    const objects = {...object1, ...object2};
    console.log(objects);
    /* R: La propiedad de dirección del object1 se ha sobreescrito por la del object2. */
//----------------------------------------------------------------------------------------

/*  5. Unión de objetos con arrays: Dados los objetos: */
    const objeto1 = { nombres: ['Ana', 'Carlos']};
    const objeto2 = { apellidos: ['García', 'Pérez']};
/*  Crea un nuevo objeto que contenga las propiedades del objeto1 y objeto2 */

    