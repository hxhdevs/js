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
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);//cambiamos por template strings con target
            //pasamos dos parametros ahora es mensaje y referencia con target para ver que elemento mostraremos
        // }else{
        //     console.log('Si hay algo')
        return;
        }
        if(e.target.id ==='email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(mensaje, referencia){//Ahora recibimos dos parametros
        //Generar alerta con HTML
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white','p-2','text-center');
        // console.log(error);
        //Inyectar error al formulario
        referencia.appendChild(error);//apuntamos con target a donde queremos mostrar la alerta

    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }
    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
});