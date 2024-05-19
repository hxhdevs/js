//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas {
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];

        console.log(this.citas);
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id)//Eliminamos con filter
    }

    editarCita(citaactualizada){
        this.citas = this.citas.map(cita => cita.id === citaactualizada.id ? citaactualizada : cita);//map crea ujn nuevo arreglo reescribiendolo
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

    imprimirCitas({citas}){//si agregas llaves se aplica array destrcturing desde que recibe el array
        this.limpiarHTML();
        // console.log(citas);
        citas.forEach(cita=>{
            const {mascota, propietario, telefono, fecha, hora, sintomas,id}= cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            //Scrpting de los elementos de la cita
            const  mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder|">Propietario: </span>${propietario}
            `;
            
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span>${telefono}
            `;
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span>${fecha}
            `;
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span>${hora}
            `;
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span>${sintomas}
            `;

            const btnEliminar = document.createElement('p');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            btnEliminar.innerHTML ='Eliminar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>';
            btnEliminar.onclick = ()=> eliminarCita(id);

            const btnEditar = document.createElement('p');
            btnEditar.classList.add('btn','btn-info','mr-2');
            btnEditar.innerHTML ='Editar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" /><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" /></svg>';
            btnEditar.onclick = ()=> cargarEdicion(cita);

            //Agregar los parados al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        })
    }
    limpiarHTML() {
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
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

    if (editando) {
        ui.imprimirAlerta('Editando Correctamente')
        //Pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj})//le pasamos una copia del objeto
        formulario.querySelector('button[type="submit"]').textContent='Crear cita';//regresamos el valor del boton al valor original

        // Quitar modo edicion
        editando = false;
        console.log('Modo edicion')
    } else{
        //Generando id unico
        citaObj.id = Date.now();

        //Creando una nueva cita
        administrarCitas.agregarCita({...citaObj});

        //Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agrego correctamente')
        console.log('Modo nueva cita')
    }

    // //generar id unico
    // citaObj.id = Date.now();

    // //creando una nueva cita
    // administrarCitas.agregarCita({...citaObj});

    //Reiniciar Obejto
    reiniciarObjeto();

    //Reiniciar formulario
    formulario.reset();

    //Mostrar el html de las citas
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id){
    // console.log(id);
    //Eliminar la cita
    administrarCitas.eliminarCita(id);
    //Muestra un mensaje 
    ui.imprimirAlerta('La cita se elimino correctamente');
    //Refresca las citas
    ui.imprimirCitas(administrarCitas);
}

//Funcion que carga los datos y el modo edicion
function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id}= cita;
    //llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
    console.log(cita);

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    formulario.querySelector('button[type="submit"]').textContent='Guardar cambios';

    editando= true;
}