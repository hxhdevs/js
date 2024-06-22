// Async Await 
// resolve si se cumple
// reject si no se cumple
function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;//cambiar a true para cambair el resultado a reject

        setTimeout( () => {
            if(!error) {
                resolve('Hola soy resolve si se cumplio la condicion'); 
            } else {
                reject('Hola soy reject la condicion no se cumplio');               
            }            
        }, 3000);

    });
}

// Async await
async function ejecutar() {
    try {
        console.log('before execution')
        const respuesta = await descargarClientes(); // await detiene la ejecucion del resto de codigo hasta que se cumpla la funcion ejecutada
        console.log('Respuesta es resolve proveniente del Promise: '+respuesta);//respuesta contiene el resolve
        console.log('next execution')
    } catch (error) {
        console.log(error)
    }

}
ejecutar();

console.log( 2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta