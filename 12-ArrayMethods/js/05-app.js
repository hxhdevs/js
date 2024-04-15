// en este video estaremos viendo FIND.
// fiND te creará un arreglo nuevo en base al primer resultado que sea true...
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
// con un foreach seria algo asi...
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Bocinas') {
        resultado = carrito[index]
    }
});
console.log(resultado);


// con .find seria

const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas');
console.log(resultado2);
// IMPORTANTE .find solo va a devolver el primer elemento que cumpla con la condicion 
// para casos donde hay mas coincidencias de resultados es mas util .filter