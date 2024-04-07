// Variables declaradas fuera de las funciones
const nombre = "Hola";
const precio = 20;

//Estos objetos tienen una funcion propia pero si no se le pone this. asociaria el valor con las declaradas fuera
//this. hace referencia o llama al valor del objeto dentro de esa funcion
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
// para comprobarlo remueve this. de console.log para que puedes observar como toma los valores declarados en el inicio
const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();