// Veamos otras comparaciones con IF
const puntaje=1000;
//const puntaje='1000';

// No es igual
if(puntaje != 1000) {
    console.log("Si! es diferente!");
}  else {
    console.log("No, no es diferente");
}
// comparador estricto de tipo y valor
if(puntaje === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// comparador estricto de tipo y valor
if(puntaje !== 1000) {
    console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
    console.log("No es diferente, es igual");
}
//Ejemplo con IF ternario
const mensaje = (puntaje == 1000) ? "No es diferente!" : "Si es diferente";
console.log(mensaje);

(puntaje !== '1000') ? console.log("Si! es diferente!") : console.log("No, no es diferente");
