document.addEventListener('DOMContentLoaded', function() {
    
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    // Asignar eventos
    // se llama la funcion sin parentesis para que se ejecute al disparar el evento
    //de lo contrario se ejecuta en automatico con ()
    inputEmail.addEventListener('blur', validar);//cambiar a input si quieres hacerlo mas en tiempo real y reactivo
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();//evitamos event bubbling
        resetFormulario();
    })

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        
        setTimeout(() =>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            
            resetFormulario();

            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10','font-bold','text-sm','uppercase')
            alertaExito.textContent = 'Mensaje enviado correctamente';
            
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            },3000);
        },3000);
    }
    //hacemos una funcion reutilizable y limpia para optimizar los addEventListener
    function validar(e) {
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);//cambiamos por template strings con target
            email[e.target.name] = '';
            //pasamos dos parametros ahora es mensaje y referencia con target para ver que elemento mostraremos
        // }else{
        //     console.log('Si hay algo')
            comprobarEmail();
            return;
        }
        if(e.target.id ==='email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();   
            return;
        }

        limpiarAlerta(e.target.parentElement);
        
        //Asignar valores 
        email[e.target.name] = e.target.value.trim().toLowerCase();
        //console.log(email);
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){//Ahora recibimos dos parametros
        //Generar alerta con HTML
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
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

    function comprobarEmail() {
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        } 
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
    }

    function resetFormulario() {
        // reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
});

//PLUS: agregar un campo extra llmado CC para añadir un destinatario extra, campo no obligatorio pero validar que sea correo