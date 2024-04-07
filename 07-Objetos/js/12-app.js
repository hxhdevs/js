//Constructores

// Definición de un objeto utilizando la sintaxis de objeto literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}
// Definición de una función constructora llamada Producto
function Producto(nombre,precio) {
// Dentro del constructor, se utiliza "this" para hacer referencia al objeto que se está creando
// "this" es una referencia al objeto actual que está siendo creado por la función constructora
// Se asignan los valores de nombre y precio a las propiedades del objeto actual utilizando "this"
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// los beneficios del this es que se pueden volver a reutilizar las propiedades de los objetos creando nuevos solamente pasando argumentos para el nuevo
// Creación de una instancia del objeto Producto utilizando la función constructora
const producto1 = new Producto('Monitor 24"',500);
console.log(producto1);
// Creación de una instancia del objeto Producto utilizando la función constructora
const producto2 = new Producto('Monitor 32"',1500);
console.log(producto2);
