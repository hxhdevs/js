// Selectores
const pacienteInput = document.querySelector('#paciente')
const propietarioInput = document.querySelector('#propietario')
const emailInput = document.querySelector('#email')
const fechaInput = document.querySelector('#fecha')
const sintomasInput = document.querySelector('#sintomas')

const formulario = document.querySelector('#formulario-cita')
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]')
const contenedorCitas = document.querySelector('#citas')

// const btnEditar = document.querySelector('btn-editar')
// btnEditar?.addEventListener('click', () => {//optional chaining
//     alert('Diste click en editar...')
// })
//Eventos
pacienteInput.addEventListener('change',datosCita)
propietarioInput.addEventListener('change',datosCita)
emailInput.addEventListener('change',datosCita)
fechaInput.addEventListener('change',datosCita)
sintomasInput.addEventListener('change',datosCita)

formulario.addEventListener('submit', submitCita)

let editando = false

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto
        this.tipo = tipo
        this.mostrar()
    }

    mostrar(){
        //Creamos la notificacion
        const alerta = document.createElement('DIV')
        alerta.classList.add('text-center','w-full','p-3','text-white','my-5','alert','uppercase','font-bold','text-sm')
        //Eliminar duplicado de alertas
        const alertaPrevia = document.querySelector('.alert')
        alertaPrevia?.remove()//forma reciente o moderna llamada optional chainnig
        // if(alertaPrevia){//metodo tradicional con IF
        //     alertaPrevia.remove()
        // }
        //Agregar clase si es de tipo error
        this.tipo === 'error' ? alerta.classList.add('bg-red-500'): alerta.classList.add('bg-green-500')

        //Mensaje de error
        alerta.textContent = this.texto

        //Insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario)       

        //Quitar alerta
        setTimeout(() => {
            alerta.remove()
        },1000)
    }
}

class AdminCitas{
    constructor() {
        this.citas = []
    }   

    agregar(cita){
        this.citas = [...this.citas, cita]
        this.mostrar()
        // console.log(this.citas)
    }

    editar(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)//modificamos el array a actualizar con .map
        this.mostrar()
    }

    eliminar(id){
        this.citas = this.citas.filter(cita => cita.id != id)//Eliminamos array con filter
        this.mostrar()
    }

    mostrar(){
        //Limpiar el HTML
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
        //Obtener mensaje si no hay citas
        if(this.citas.length === 0){
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>'
            return //detemos si se cumple
        }

        //Generando las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            //Botones de editar y eliminar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            const clone = {...cita}
            //const clone = structuredClone(cita) ambas maneras sirven pero esta funcion es mas reciente

            btnEditar.onclick = () =>cargarEdicion(clone)

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            btnEliminar.onclick = () => this.eliminar(cita.id)//callback

            const contenedorBotones = document.createElement('DIV')
            contenedorBotones.classList.add('flex','justify-between','mt-10')

            contenedorBotones.appendChild(btnEditar)
            contenedorBotones.appendChild(btnEliminar)
            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            contenedorCitas.appendChild(divCita);
        });    
    }
}

function datosCita(e){//funcion reutilizable que escucha los eventos
    citaObj[e.target.name] = e.target.value
    // console.log(citaObj)
}

const citas = new AdminCitas()

function submitCita(e){
    e.preventDefault();

    console.log(citaObj)

    if (Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto:'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return
    }

    if (editando) {
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
    editando = false
    // console.log('despues del IF');
}

function reiniciarObjetoCita(){
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

function generarId(){
    return Math.random().toString(36).substring(2)+Date.now()
}

function cargarEdicion(cita){
    Object.assign(citaObj,cita)

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando = true
    formularioInput.value='Guardar cambios'
}