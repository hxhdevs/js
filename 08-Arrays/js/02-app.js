//Accediendo a los elementos de un arreglo...

const numeros = [10,20,30,40,50,[1,2,3,'aqui']];


// esta vez estare utilizando 
console.table(numeros);


// La forma en la que accedes a un arreglo es por lo que se econoce como el indice o index en el arreglo
// este se muestra en console.table es bastante practico para mostrar elementos ordenados

console.log(numeros[0]) //10
console.log(numeros[1]) //20
console.log(numeros[3]) //40
console.log(numeros[20]) //undefined
console.log(numeros[5][2]) //devuelve 3, de esta manera accedes a los elementos de un array dentro de otro
