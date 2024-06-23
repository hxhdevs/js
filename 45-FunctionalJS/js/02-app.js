// Pasar funciones como argumentos..

const sumar = (a, b) => a + b;//funcion como variable con comportamiento de operacion +
const multiplicar = (a, b) => a * b;//funcion como variable con comportamiento de operacion *
const alerta = (mensaje) => mensaje;//funcion como variable con comportamiento de operacion *

const sumarOmultiplicar = fn => fn(10, 20||mensaje);//variable que esta a la espera de una funcion como parametro

console.log( sumarOmultiplicar( sumar ) );//pasando funcion como parametro 
console.log( sumarOmultiplicar( multiplicar ) );//pasando funcion como parametro 