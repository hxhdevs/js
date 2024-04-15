// Every es un poco raro, ya que todos los elementos del arreglo deberán cumplir esa condición..
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
let cumple = true;
carrito.forEach( producto => {
    if(producto.precio > 700) {
        cumple = false;
        return
    }
})
console.log(cumple);

// si se cumplen todas las condiciones sobre el array o matriz devuelve true
// se podria decir que funciona como un AND que dice que todos se deben de cumplir para ser true
const resultado = carrito.every(producto => producto.precio < 1000); // Mil se cumple, 700 no...
console.log(resultado);
//basta con que un solo array no cumpla la condicion para devolver false

// a diferencia de some que basta con encontra uno que cumpla con la condicion y devolvera true aunque todo el resto no 
// y este se podria decir que funciona como un OR ya que solo basta para que una condicion se cumpla
const resultado2 = carrito.some(producto => producto.precio < 100); // Mil se cumple, 700 no...
console.log(resultado);