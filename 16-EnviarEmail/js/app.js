document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    // Asignar eventos
    // se llama la funcion sin parentesis para que se ejecute al disparar el evento
    //de lo contrario se ejecuta en automatico con ()
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    //hacemos una funcion reutilizable y limpia para optimizar los addEventListener
    function validar(e) {
        if(e.target.value.trim() === ''){
            // console.log('Campo vacio')
            mostrarAlerta();
        }else{
            console.log('Si hay algo')
        }
    }

    function mostrarAlerta(){
        //Generar alerta con HTML
        const error = document.createElement('P');
        error.textContent= 'Hubo un error...';
        error.classList.add('bg-red-600', 'text-white','p-2','text-center');
        // console.log(error);
        //Inyectar error al formulario
        formulario.appendChild(error);
    }

});