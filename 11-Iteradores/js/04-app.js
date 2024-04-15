// Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..
// consta principalmente de 3 pártes 1|- condicion 2- bloque de codigo 3- incremento
let i = 0;
// while (i < 10) { // condicion
//     // Bloque de código...
//     console.log(`Numero: ${i}`);
//     i++; // incremento
// }

// El while se ejecuta mientras una condición sea verdadera, por lo tanto si inicicializamos en un valor mayor al que procesara en la condicion, no hará nada..


/* Realizaremos mismos ejemplos  Detectar pares y nones y el fizz buzz con el while, */


while (i < 100) { // condicion
    // Bloque de código...
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZ BUZZ`)
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i} buzz`)
    } 
    i++; // incremento
}


while (i < 10) { // condicion
    // Bloque de código...
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
    i++; // incremento
}

//jugar con valores para ver el comportamiento