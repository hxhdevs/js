// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este ejecuta mientras haya elementos por iterar
//Arreglo tradicional
let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];
//Arreglo de objetos
const carrito = [
    {nombre: 'Book', precio: 500 },
    {nombre: 'Shirt', precio: 500},
    {nombre: 'Disc', precio: 500}
];

//Cada interaccion con el objeto o array se le da un nombre o un alias
for (let pendiente of pendientes) {
    console.log(pendiente);
}

//Accedemos a la propiedad de carrito
for (let producto of carrito) {
    console.log(producto.nombre);
}
