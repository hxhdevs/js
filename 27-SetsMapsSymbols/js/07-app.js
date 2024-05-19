// Un generador es una funcion que retorna un Iterador.
// Se indican con un asterisco después de  la palabra function
// Generador
function *crearGenerador() {
    // yield es nuevo también en es6 y son los valores que podemos utilizar para iterar...
    yield 1;
    yield 'Nombre';
    yield 3 +3;
    yield true;
}
// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);//Imprime los valores de yield del generador


// Generador para carrito de compras
function *nuevoGenerador(carrito) {
    for( let i = 0; i < carrito.length; i++) {
        console.log(i)//imprimimos el recorrido
        yield carrito[i];
    }
}
// carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorrer el iterador
let iterador2 = nuevoGenerador(carrito);

console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );