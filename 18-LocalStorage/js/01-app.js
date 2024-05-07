// Local Storage funciona con una especie de cache


localStorage.setItem('nombre', 'Elih');

// añadir algo a sessionstorage
sessionStorage.setItem('nombre', 'Freecs');

// Local Storage solo soporta strings, no soporta numeros arrays ni objetos pero puedes almacenarlos convirtiendolos a string..
const producto = {
    nombre: 'Monitor 24 inch',
    precio: 300
}
const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);

// Lo mismo con un array
 const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));

//la diferencia entre éstas dos es que localStorage almacena la información de forma indefinida
// o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información
// mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina.