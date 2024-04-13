// Funciones que retornan valores

// Actualmente hemos tenido funciones que envian datos a la consola, ya cuando veamos la parte del DOM algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero también tendremos funciones que retornan valores para pasarlos hacia otras funciones o hacer algo más...

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(1,2);

console.log(resultado);


// Ejemplo más avanzado....
let total = 0;
// funcion a la espera de un parametro
//retorna total mas el valor o n valores que se pasa por parametro
function agregarCarrito(precio) {
    return total += precio;
}
//toma el valor de total y multiplica por el impuesto
function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log('Total='+total);


const totalPagar = calcularImpuesto(total);

console.log(`Total + impuestos= ${totalPagar}`);