// Veamos un par de funciones para convertir a números
// si imprimes saldra negra que indica es string lo mismo con el resto excepto numero3 y 4
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;
//si ponemos typeof devuelve en consola que tipo de dato es
console.log(typeof numero1);
console.log(numero1);

// Convertir de Strings a Números flotantes o Enteros

console.log(Number.parseInt(numero1)); // Convertir de String a Número
console.log(Number.parseFloat(numero2)); // Convertir a número con decimales 
console.log(Number.parseInt(numero3)); //imprime NaN = Not a Number

// Revisar si un número es entero
console.log(Number.isInteger(numero4) ); // Revisar si un número es entero o no devuelve true o false
console.log(Number.isInteger(numero3) ); //

// Convertir String a numero
console.log(numero4.toString());