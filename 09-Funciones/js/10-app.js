// Arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, 
// la sintaxis es más corta al inicio y pueden parecer algo complejas eventualmente 

//Forma tradicional de con Function Xpression
const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

//Con arrow function se elimina function se deja parentesis y se coloca => despues de estos
const aprendiendo = () =>  {
    console.log('Aprendiendo JavaScript');
}

// sin es una funcion simple o de una linea no requiere llaves
const aprendiendo = () => console.log('Aprendiendo JavaScript');

// retornar un valor de manera implicita es decir no necesitas aplicarle console.log dentro de la funcion para mostrar el resultado como el anterior
// aun asi funciona solo llamandola
//como resultado tenemmos un array function mas limpio
const aprendiendo = () => 'Aprendiendo JavaScript';

console.log(aprendiendo());


