
// Creando un Set
// ASKIN -> Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados
// pero sería más sencillo con un set, en algunas ocasiones termina siendo mejor opción
// que un arreglo o un objeto.

let carrito = new Set();
carrito.add('Camisa');// con add agregamos un nuevo elemento y solo son valores no keys
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3'); //no permite valores exactamente iguales
console.log(carrito.size);// con esto checamos cuanto mide
console.log(carrito.has('Camisa'));//devuelve true o false
console.log(carrito)
carrito.delete('Disco #2')//elimina el valor del set
console.log(carrito.delete('Disco #2'))//devuelve true o false

// Limpiar un set
carrito.clear();
console.log(carrito);

// En un arreglo
let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]);
console.log(numeros.size);//DEVUELVE EL TAMAÑO
console.log(numeros);



// Foreach a un set
carrito.forEach(producto =>  {//Un set puede ser iterable
    console.log(producto);
})

// Foreach a un set
carrito.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito); // nombre de la variable
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);


//ASKIN un set te permite crear una lista de valores sin duplicados