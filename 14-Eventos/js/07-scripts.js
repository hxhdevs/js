// Otra opción es aplicar algo llamado delegation
// El event delegation es un patrón en JavaScript que sugiere registrar un evento, 
//por ejemplo, click , en nuestro document para interceptar todas las interacciones de nuestro documento.
//Es decir, si haces click en un botón, lo estás escuchando, y si haces click fuera del botón, también lo estás escuchando.
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('click titulo');
    }
    if(e.target.classList.contains('info')) {
        console.log('click info');
    }
    if(e.target.classList.contains('precio')) {
        console.log('click precio');
    }
});