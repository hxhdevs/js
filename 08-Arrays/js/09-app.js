// De aquí en adelante estaremos viendo una serie de métodos de arreglos
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
for(let i = 0; i < carrito.length; i++ ){
    //imprimir con template strings
    console.log( `Articulo: ${ carrito[i].nombre } Precio: $ ${carrito[i].precio} ` )
}

// ForEach por metodo propio de JS es un for implicito que hace lo mismo de arriba pero mas limpio

//le pasamos el parametro producto se podria decir que es como ahora se llama o renombra carrito
carrito.forEach( function(producto) {
    //esta forEach es una funcion que le pasamos 
    console.log( `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} ` )
});