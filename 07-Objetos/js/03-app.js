// Veamos como asignar variables hacia un objeto
const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

// puedes agregar una nueva propiedad a producto con la siguiente linea en consola
producto.imagen = "pic.jpg";

//Eliminar propiedad de un objeto, colocar propiedad despues de delete.
delete producto.disponible;
console.log(producto)