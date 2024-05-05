document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    // se llama la funcion sin parentesis para que se ejecute al disparar el evento
    //de lo contrario se ejecuta en automatico con ()
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    //hacemos una funcion reutilizable y limpia para optimizar los addEventListener
    function validar(e) {
        if(e.target.value.trim() === ''){
            console.log('Campo vacio')
        }else{
            console.log('Si hay algo')
        }
    }

});