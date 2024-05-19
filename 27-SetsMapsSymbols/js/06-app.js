// Iteradores en JS

function crearIterador(carrito) {
    let i = 0; //Inicializamos i en 0
    return {// retornamos una funcion con el resultado
        siguiente: () => {
            let fin = (i>=carrito.length);//fin es igual a la longitud de la iteracion de i sobre carrito
            // console.log(fin)
            let valor =!fin ? carrito[i++] : undefined;
            console.log(fin,valor)//imprimimos el recorrido
            return {
                fin: fin,
                valor: valor
            };
        }
    };
}
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
const recorrerCarrito = crearIterador(carrito);

// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());

for (let i = 0; i < 5; i++) {//otra forma de imprimir la funcion
    console.log(recorrerCarrito.siguiente());
}
