// LA caracteristicam principal del weakset es que solo se pueden pasar objetos
var ws = new WeakSet();
const cliente = {
    nombre: 'Juan',
    saldo: 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}

const nombre = 'Pedro';

ws.add(cliente); 
ws.add(cliente2);
// ws.add(nombre); // Solo se pueden agregar objetos marcara error en este caso

console.log(ws.has(cliente)); //devuelve true
console.log(ws.has(cliente2));  //devuelve true
// console.log( ws.has(nombre));  //devuelve false

// console.log( ws.delete(window)); 
console.log(ws.delete(cliente));// devuelve true
console.log(ws.has(cliente)); //devuelve false

// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.
// Recordatorio el Set() toma todo lo que le pasen numeros caracteres etc, WeakSet() solo objetos y no es iterable