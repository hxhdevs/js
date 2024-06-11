let cliente ={
    mesa :'',
    hora: '',
    pedido:[]
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click',guardarCliente)

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo => campo ==='');

    if (camposVacios) {
        const existeAlerta = document.querySelector('.invalid-feedback');
        if(!existeAlerta) {
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback','d-block','text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(()=>{
                alerta.remove();
            },2000);
        }
        return;
    }
    //Asignamos datos del formulario al cliente
    cliente = {...cliente,mesa,hora}

    //console.log(cliente);
    
    //Ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();
 
    //Mostrar las secciones despues de ocultar el modal
    mostrarSecciones();
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'))
}