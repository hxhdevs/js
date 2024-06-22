// Async Await Con una API...

document.addEventListener('DOMContentLoaded', obtenerDatos);

/*
    Fetch con promises y manejo de resultados con function xpression
*/
// function obtenerDatos() {
//     fetch('https://picsum.photos/list') 
//         .then( respuesta => {
//             return respuesta.json()
//         }) 
//         .then(resultado => {
//             mostrarHTML(resultado);
//             console.log(resultado)
//         })
// }
// function mostrarHTML() {
    
// }
/*
    Fetch tipo function expression y haciendo uso de async await
*/
async function obtenerDatos() {
    const resultado = await fetch('https://picsum.photos/list');
    const respuesta = await resultado.json();
    console.log(respuesta);
}
/*
    Fetch tipo function expression y haciendo uso de async await con try catch
*/
// async function obtenerDatos() {
//     try {
//         const resultado = await fetch('https://picsum.photos/list');
//         const respuesta = await resultado.json();
//         console.log(respuesta);
//     } catch (error) {
//         console.log(error);
//     }

// }

/*
    Las tres funcionoes hacen lo mismo solo cambia la forma de como se hace la peticion, como manejan la respuesta, comentar y descomentar para probar una a una
    1- Primera es un fetch tipo function xpression
    2- Segunda es function xpression con async await
    3- Tercera es function xpression con async await pero con try catch
*/
