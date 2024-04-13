// De momento todo nuestro código se ejecuta de arriba hacia abajo salvo cuando llamamos una función
// Algunas veces vas a desear que tu código se ejecute basado en una condición
// Cuando vas a un cajero, lo primero que haces es insertar tu tarjeta..
// Segundo colocas tu número, si el número esta bien, puedes continuar, sino, te dice que hubo un error
// Después eliges la operación que deseas hacer, si quieres retirar dinero, el cajero va a revisar que tengas primero esa cantidad, no puedes retirar una cantidad que no tienes..
// Y para ejecutar nuestro código basado en una condición, se utilizan las estructuras de control...

// Condicional IF
//
//const puntaje = '1000';
const puntaje = 1000;

// validar con y sin operador estricto
if(puntaje === 1000) {
//if(puntaje == 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// Si esta condición se cumple se ejecutará el código, pero que pasa si no se cumple???
// Ahora los if else también pueden ir sin llaves, pero esa sintaxis no es muy común en JS
// Probar If con operador estricto y tipos de variable para analizar el comportamiento del IF