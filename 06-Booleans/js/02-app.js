// Comparar booleans es exactamente igual que cualquier comparación de números o strings

const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2); // comparar 2 variables da false

console.log(boolean1 === true); // comparar si un boolean es verdadero da true
console.log(boolean2 === true);// comparar si un boolean es verdadero da false

// Se llega a cometer cometen el siguiente error cuando escriben código javascript en un if

if(boolean1 === true) {
//if(boolean1 ) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

// Pero este código se puede simplificar quitando el === true porque ya sabemos que la variable es true

// Este mismo ejemplo aplica si un usuario esta autenticado puede darle me gusta a una foto o ver una página, así como si ya tienes una cuenta en netflix y has pagado 