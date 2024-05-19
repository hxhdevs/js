// Symbol
// Los simbolos son nuevos en ES6, te permiten crear unapropiedad única 
// Symbol es creado y se agrega a una propiedad del objeto.
// new Symbol enviaria un error.


const sym1 = Symbol('symbol');
const sym2 = Symbol('symbol2');
// Los symbolos siempre son diferentes
console.log(Symbol() === Symbol());//Devuelve false porque no puede ser iguales
// Llaves de objetos únicas
let nombre = Symbol();
let apellido = Symbol();
let persona = {}// Crear un objeto vacio

persona.datos;// Esto no va a servir
persona[nombre] = 'Juan';// debe tener corchetes
persona[apellido] = 'De la torre';// debe tener corchetes
persona.tipoCliente = 'Premium';
persona.nacionalidad ='Mexa';
persona.saldo = 500;
console.log(persona);
console.log(persona[nombre]);

// No se puede acceder al SYMBOL con un for en resumen un symbol no es iterable

for(let i in persona) {
    console.log(`${i} : ${persona[i]}`);
}

// También se puede crear UNA DESCRIPCION DEL SYMBOLO

let nombreCliente = Symbol('Nombre del cliente');
let cliente = {};
cliente[nombreCliente] = 'Pedro';
// Probar
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
