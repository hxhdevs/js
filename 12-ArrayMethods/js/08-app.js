// El rest operator es muy útil para crear un nuevo arreglo sin modificar el original...
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500},
    { producto: 'Televisión 50 Pulgadas', precio: 700},
    { producto: 'Tablet', precio: 300},
    { producto: 'Audifonos', precio: 200},
    { producto: 'Teclado', precio: 50},
    { producto: 'Celular', precio: 500},
    { producto: 'Bocinas', precio: 300},
    { producto: 'Laptop', precio: 800},
];


// Si tienes 2 arreglos los unes como vimos en el video anterior, pero digamos que tienes un arreglo y quieres añadir un elemento al final que es un string lo utilizarias como se muestra
// no agregar spread ya que agrega elementos por cada letra
const meses2 = [...meses, 'Julio'];
console.log(meses);
console.log(meses2); // Recuerda esto no modifica el arreglo original, es como si hiciera push

// O al inicio... en lugar de utilizar unshift que 
const meses3 = ['Julio',...meses ]; 


// O tal vez quieres añadir un objeto a un arreglo de objetos al final
const producto = {producto: 'Disco Duro', precio: 300};
const carrito2 = [...carrito, producto];
console.log(carrito2);


// o al inicio
const carrito3 = [producto, ...carrito];
console.log(carrito3);


//no se puede agregar un spread a un objeto y eso puede marcar
//Uncaught TypeError: objeto is not iterable