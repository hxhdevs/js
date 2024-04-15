// Bueno veamos otros iteradores que existen en JavaScript, previamente ya habiamos visto forEach y Map, vamos a verlos en este video y sus diferencias...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
//index es para numerar
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
});

// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer arreglo de objetos
const carrito = [
    {nombre: 'Book', precio: 500 },
    {nombre: 'Shirt', precio: 500},
    {nombre: 'Disc', precio: 500}
];
//empty
carrito.forEach( producto => producto.nombre)

const nuevoArreglo2 = carrito.map( (producto,index) => producto.nombre)


console.log(nuevoArreglo2)