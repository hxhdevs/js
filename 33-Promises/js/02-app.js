// Listado de paises
const paises = [];

// Un nuevo pais se agrega despues de n segundos...
function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`)
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

// Los paises se muestran despues de 1 segundo
function iniciarCallbackHell() {
    setTimeout(() => {
        // Agregar nuevo pais
        nuevoPais('Alemania', mostrarPaises); 
        setTimeout(  () =>  {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => { 
                nuevoPais('Inglaterra', mostrarPaises);
            }, 1000);
        }, 1000 ); // Después de un segundo obtenemos los paises...
    }, 1000);
}

iniciarCallbackHell(); // Opcional


// mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...