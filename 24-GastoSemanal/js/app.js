// Variables y Selectores
const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit',agregarGasto);
}

// Classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto =Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos =[];
    }
}


class UI{
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;//extrayendo valor de prompt y pasandolo a 2 variables con el mismo valor del parametro
        //Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        //crear el div mensaje o alerta
        const divMensaje = document.createElement('div'); 
        divMensaje.classList.add('text-center','alert');

        if (tipo ==='error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent =mensaje;
        //insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //Quitar del html
        setTimeout(()=>{
            divMensaje.remove();
        },1000)
    }
}
//Instanciar
const ui = new UI();//Clase global
let presupuesto;//variable global

//Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    console.log(Number(presupuestoUsuario));

    if( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
 //   console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(){
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    if (nombre ==='' || cantidad ==='') {
        //console.log('Ambos campos son oblogatorios');
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida','error');
    }
}