// Closure

// En JavaScript los Closures son son creados cada que una función se crea...
// Pero un closure es una forma de acceder a una función o valor, desde el exterior...


const obtenerCliente = () =>  {
    const nombre = "HxH";//esta variable solo existe en este bloque local no global
    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}
  
const cliente = obtenerCliente();
console.log(cliente)
cliente(); //La llamamos desde fuera es decir llamamos el valor "privado" de la funcion desde fuera