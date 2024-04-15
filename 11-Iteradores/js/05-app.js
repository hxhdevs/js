// Veamos otro iterador que es muy común en otros lenguajes y también en javascript, es el do while...
// a diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...

// Do While va a correr al menos una vez.
let i = 0; // probar con 100

do {
    //Aqui va el bloque de codigo
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZ BUZZ`)
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i} buzz`)
    }
    i++;//Incremento
} while( i < 100 );//Condicion

do {
    //Aqui va el bloque de codigo
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
    i++;//Incremento
} while( i < 10 );//Condicion


// Ahora, lo que hace diferente a un while de un for o un do while, es que al menos se va a ejecutar una vez aunque la condición no se cumpla...
//Ejecutar un programa a la vez para poder ver resultados o volverla una funcion

const whileLoop = function(){
    let i = 0; // probar con 100

    do {
        //Aqui va el bloque de codigo
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} FIZZ BUZZ`)
        } else if(i % 3 === 0) {
            console.log(`${i} fizz`);
        } else if ( i % 5 === 0 ) {
            console.log(`${i} buzz`)
        }
        i++;//Incremento
    } while( i < 100 );//Condicion
} 
whileLoop()

//Sugiero problar bloque a bloque