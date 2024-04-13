// ForEach y Map con arrow functions...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]
//Formas de hacer una funcion sin arrow function
const newArray = carrito.map( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: ${producto.precio} `;
 })
 const newArray2 = carrito.forEach( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: ${producto.precio} `;
 })
//  ------------------------------
//Formas con array functions mas limpias
//cuando se hace todo en una sola linea el return se ejecuta de manera imnplicita forma mas limpia con arrow function
const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: ${ producto.precio} `)
//puede imprimirse de manera implicita sin necesidad de llamarlo por console.log
const nuevoArray2 = carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: ${producto.precio} `));

console.log(newArray);
console.log(newArray2);

console.log(nuevoArray);
console.log(nuevoArray2);


// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map

