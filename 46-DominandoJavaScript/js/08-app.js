// self se refiere a la ventana global, 

self.onload = () => {
    console.log('Ventana Lista');
}

// window.onload = () => {
//     console.log('Ventana lista');
// }

window.nombre ="Monitor 20 pulgadas";
// Ahora muchas personas utilizan self de la sig forma...

const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        /*
        const self = this;
        return `El Producto: ${self.nombre}  tiene un precio de ${self.precio}`;
        */
        /*
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
        */
        return `El Producto: ${self.nombre}`;
    }
}

console.log(producto.mostrarInfo());