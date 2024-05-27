// Fetch API consumir datos desde un txt...
// IMPORTANTE: Fetch API No soporta XML
const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    fetch('data/datos.txt') // URL del directorio del archivo
        .then( respuesta => {
            console.log(respuesta);

            console.log(respuesta.headers.get("Content-Type"));
            console.log(respuesta.status); // Estado
            console.log(respuesta.statusText); //estado en ingles
            console.log(respuesta.url); // URL a la que consultamos
            console.log(respuesta.type); // Tipo de consulta
            return respuesta.text(); // Que este mal escrito
        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}