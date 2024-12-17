const producto = {
    nombreProducto: "Monitor 20in",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//Spread Operator (Unir dos o más objetos)
const nuevoProducto = { ...producto, ...medidas};

console.log(producto)
console.log(medidas)