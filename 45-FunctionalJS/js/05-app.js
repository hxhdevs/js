// En la programación funcional también se busca tener código más corto que lo que seria una función más larga...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];
/*
    Forma larga
*/
// const obtenerNombres = producto =>  producto.nombre;
// const resultado = carrito.map(obtenerNombres);
// console.log(resultado)

// const mayor400 = producto => producto.precio > 400
// const resultado2 = carrito.filter(mayor400);
// console.log(resultado2)


/*
    Forma corta
*/
//esto es lo mismo que lo de abajo pero mas corto o refactorizado, se da por implicito el return
// const obtenerNombres = producto => {
//     return producto.nombre
// } 
// Aún lo podemos recortar más cambiando la variable producto...
const obtenerNombres = p =>  p.nombre;
const resultado = carrito.map(obtenerNombres);
console.log(resultado)

const mayor400 = p => p.precio > 400
const resultado2 = carrito.filter(mayor400);
console.log(resultado2)

// La mayor parte de programación funcional son cosas que ya hemos visto, pero recuerda, en la programación funcional, las funciones son valores.
// mayormente aqui todo se recorta con tal de ocupar la cantidad menor posible de codigo