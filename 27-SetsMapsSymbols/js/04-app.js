// Wekmap no es iterable y solo permite objetos
const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

console.log(weakmap);
weakmap.set(producto,'Monitor')//reescribimos el objeto
weakmap.set(producto,'Delivery')//reescribimos el objeto
console.log(weakmap.has(producto));//devuelve true
console.log(weakmap.get(producto));//devuelve valor del kay
console.log(weakmap.delete(producto));//devuelve true

console.log(weakmap);
