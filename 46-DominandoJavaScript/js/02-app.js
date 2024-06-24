//Hoisting
// Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). 
// Tu Código de javaScript se ejecuta en 2 partes... Creación y ejecución...


obtenerCliente('Juan');
function obtenerCliente(nombre) {//function expresion
    console.log(`El nombre del cliente es ${nombre}`);
}
// Muchas personas creen que JavaScript automaticamente mueve todas las funciones al inicio del Script y por eso funciona bien... pero es porque el código se ejecuta en 2 partes.

// En la primera parte, JavaScript crea y registra todas las funciones, es por eso que este código funciona bien

// Y puedes llamar la función antes de crearla, o crearla y después llamarla y esta bien, va a funcionar.

// Si se utiliza la forma de function expression... si recuerdas eso nos daría un error..

// obtenerCliente2('Juan'); // Esto no va aservir..
const obtenerCliente2 = function(nombre) {//function declaration
    console.log(`El nombre del cliente es ${nombre}`);
}
obtenerCliente2('Juan'); // ESTO SI VA A SERVIR


// y de nueva cuenta, esto pasa porque al final javascript lo interpreta mas o menos asi...

// const obtenerCliente2;

// obtenerCliente2(); // Undefined ...

// // Y fiNALMENTE 
// obtenerCliente2 = function() {

// }


// ASKIN: cual es la diferencia entre function xpresion y declaration
// Function Expression: la funcion puede usarse antes o despues 
// Function Declaration: primero se debe declarar hasta entonces se puede utilizar, hasta despues de declararla