
// Higher Order functions es un termino muy común con la programación funcional.
// Ya los hemos visto, un Higher order function es una función que toma o retorna una función como argumento. y basicamente la mayoria de Array Methods son HOF

const carrito = [//esta variable contiene una matriz de objetos
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// Si quisieramos obtener todos los productos que tienen un precio mayor a 400 tendriamos que hacer lo siguiente..
const resultado = carrito.filter( producto => {
    return producto.precio > 400
} )
console.log(resultado);//imprimimos resultado donde precio es mayor a 400

// Este ejemplo es un HOF porque .filter esta tomando una función como argumento, ese producto es un Arrow Function, pero puedes dejarlo de la sig forma,..
const mayor400 = producto => {
    return producto.precio > 400
} 

const resultado2 = carrito.filter(mayor400);//asignacion de resultado a variable mediante HOF pasando una funcion como parametro
console.log(resultado2);