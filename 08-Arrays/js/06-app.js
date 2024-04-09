// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
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
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Para añadir producto al arreglo simplemente agregamos...
let resultado = [...carrito, producto];
 resultado = [...resultado, producto2];

 // Para añadir al inicio... funciona parecido a carrito.unshift(producto3) solo que es dado de manera directa
 resultado = [producto3, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);

// La forma declarativa describe el problema que se quiere solucionar, pero no las instrucciones necesarias para hacerlo
// mientras que en la programación imperativa se detallan las instrucciones necesarias para llegar a la solución