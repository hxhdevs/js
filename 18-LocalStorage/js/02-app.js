//Recuperando datos almacenados en local storage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('productoJSON');
console.log(JSON.parse( productoJSON ));

const meses = JSON.parse( localStorage.getItem('meses'));
console.log(meses);

