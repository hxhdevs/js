// Creamos un carrito de compras desde la consola
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);


// Añadir al Inicio del carrito...

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// pone el arreglo de producto3 al inicio del arreglo aunque halla sido puesto al ultimo y los demas los agrega despues de este
carrito.unshift(producto3);
// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video
console.table(carrito);