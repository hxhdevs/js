import Citas from './classes/Citas.js';
import UI from './classes/UI.js';
import { 
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from './selectores.js';
//se sugiere primero pasar todo y al ultimo agregar los exports dentro de {}

const ui = new UI();
const administrarCitas = new Citas();

let editando = false;

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas: ''
}

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj)
    // console.log(e.target.name) // Obtener el Input
}


//Valida y agrega una nueva cita a la clase de administar citas
export function nuevaCita(e){
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

export function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

export function eliminarCita(id){
    // console.log(id);
    //Eliminar la cita
    administrarCitas.eliminarCita(id);
    //Muestra un mensaje 
    ui.imprimirAlerta('La cita se elimino correctamente');
    //Refresca las citas
    ui.imprimirCitas(administrarCitas);
}

//Funcion que carga los datos y el modo edicion
export function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id}= cita;
    //Reiniciar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
    // console.log(cita);
    formulario.querySelector('button[type="submit"]').textContent='Guardar cambios';

    editando= true;
}