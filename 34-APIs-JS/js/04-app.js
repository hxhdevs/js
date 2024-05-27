// ejecutar el sitio web en pantalla completa...
//
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click',  pantallaCompleta);//agregamos eventos a los botones
salirBtn.addEventListener('click',  cerrarPantallaCompleta);//agregamos eventos a los botones

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}