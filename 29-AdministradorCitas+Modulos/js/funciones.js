import Notificacion from './classes/Notificacion.js';
import AdminCitas from './classes/AdminCitas.js';
import { citaObj, editando } from './variables.js'
import { formulario, formularioInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput } from './selectores.js';

export const citas = new AdminCitas()
export function datosCita(e){//funcion reutilizable que escucha los eventos
    citaObj[e.target.name] = e.target.value
    // console.log(citaObj)
}
export function submitCita(e){
    e.preventDefault();
    // console.log(citaObj)
    if (Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto:'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return
    }

    if (editando.value) {
        citas.editar({...citaObj})
        new Notificacion({//tomamos el nuevo onjeto y pasamos diferente tipo y texto
            texto:'Guardado correctamente',
            tipo: 'exito'
        })
        console.log('Editando registro')
    } else{
        citas.agregar({...citaObj})//pasamos una copia para vitar sobreescritura en el objeto sobre el div    
        new Notificacion({//tomamos el nuevo onjeto y pasamos diferente tipo y texto
            texto:'Paciente Registrado',
            tipo: 'exito'
        })
        console.log('nuevo registro')
    }
    formulario.reset()
    reiniciarObjetoCita()
    formularioInput.value='Registrar paciente'
    editando.value = false
    // console.log('despues del IF');
}

export function reiniciarObjetoCita(){
    //Reiniciar el objeto citaObj
    // citaObj.id = generarId();
    // citaObj.paciente ='';
    // citaObj.propietario ='';
    // citaObj.email ='';
    // citaObj.fecha ='';
    // citaObj.sintomas ='';
    Object.assign(citaObj,{//esta opcion es la misma que la que esta comentada arriba es decir cumplen con la misma funcionalidad
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })
}

export function generarId(){
    return Math.random().toString(36).substring(2)+Date.now()
}

export function cargarEdicion(cita){
    Object.assign(citaObj,cita)

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando.value = true

    formularioInput.value='Guardar cambios'

}