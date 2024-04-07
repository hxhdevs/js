// el modo estricto de JS que evita usar malas practicas en JS
"use strict";

//Los objetos si se pueden modificar sus valores, veamos como prevenirlo en caso de que sea algo que desees hacer.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);

// Para ello utilizaremos un Object Method o Métodos de objetos.

// No confundir con POO
// En realidad ese es su nombre, object methods

// Para prevenir que un objeto sea modificado, para ello utilizaremos freeze, y funciona de la siguiente forma:

Object.freeze( producto ); // Freeze toma como argumento el objeto

//Asi trates despues de modificarlo no va a permitirlo
// producto.disponible = false;

// Freeze tampoco permite agregar nuevas propiedaes
// producto.imagen = "imagen.jpg";

// Tampoco se pueden eliminar propiedades

// delete producto.nombre;

// Finalmente si quieres revisar si un objeto esta congelado puedes usar
//Devuelve un boolean para saber si esta siendo freezado
console.log( Object.isFrozen(producto) );

console.log(producto);
