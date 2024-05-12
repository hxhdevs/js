// Variables y Selectores
const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
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