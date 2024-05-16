//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

class Citas {
    constructor(){
        this.citas = [];
    }
}

class UI{
    
    imprimirAlerta(mensaje,tipo){
        //Creando el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert','d-block','col-12')

        //Agregar clase en base al tipo de error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        setTimeout(() => {
            divMensaje.remove();
        },2000);
    }
}

const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas: ''
}


function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj)
    // console.log(e.target.name) // Obtener el Input
}
//Valida y agrega una nueva cita a la clase de administar citas
function nuevaCita(e){
    e.preventDefault();//evitando event bubling

    //extraer informacion del objeto con destructuring
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citaObj;

    // validacion
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora=== '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios','error');
        // console.log('Todos los campos son obligatorios');
        return;
    }
    
}