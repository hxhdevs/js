// Selectores
const pacienteInput = document.querySelector('#paciente')
const propietarioInput = document.querySelector('#propietario')
const emailInput = document.querySelector('#email')
const fechaInput = document.querySelector('#fecha')
const sintomasInput = document.querySelector('#sintomas')

const formulario = document.querySelector('#formulario-cita')


//Eventos
pacienteInput.addEventListener('change',datosCita)
propietarioInput.addEventListener('change',datosCita)
emailInput.addEventListener('change',datosCita)
fechaInput.addEventListener('change',datosCita)
sintomasInput.addEventListener('change',datosCita)

formulario.addEventListener('submit', submitCita)
// Objeto de Cita
const citaObj = {
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
        alertaPrevia?.remove()//forma reciente o moderna
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
        console.log(this.citas)
    }
}

function datosCita(e){//funcion reutilizable que escucha los eventos
    citaObj[e.target.name] = e.target.value
    // console.log(citaObj)
}

const citas = new AdminCitas()

function submitCita(e){
    e.preventDefault();

    if (Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto:'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return
    }
    // console.log('despues del IF');
    citas.agregar(citaObj)
}

