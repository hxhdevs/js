const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...


const nuevoArray = carrito.map( function(producto) {
   return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
})

const nuevoArray2 = carrito.forEach( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
 })

 carrito.forEach( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
 })
//retorna el nuevo array creado comn .map
console.log(nuevoArray);
//devuelve undefined ya que no se puede renombrar un objeto con forEach
console.log(nuevoArray2);
//solo impresion con forEach
console.table(carrito);

// DIFERENCIAS ENTRE .map VS .forEach
//.map crea un nuevo arreglo
//foreach solo itera el ya existente