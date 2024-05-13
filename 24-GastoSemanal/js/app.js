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

    nuevoGasto(gasto){
        this.gastos = [...this.gastos,gasto];
        // console.log(this.gastos); 
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total,gasto) => total + gasto.cantidad, 0);//reduce itera sobre el array de gastos y devuelve el total
        console.log(gastado);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);
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
    
    agregarGastoListado(gastos){
        this.limpiarHTML();
        gastos.forEach(gasto =>{
            const {cantidad,nombre,id}=gasto;

            //Crear un Li
            const nuevoGasto =document.createElement('li')
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;
            
            //Agregar el HTML del gasto
            nuevoGasto.innerHTML=`${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;
            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto'),
            btnBorrar.innerHTML = 'Borrar &times;'
            nuevoGasto.appendChild(btnBorrar);
            //Agregar al HTML
            gastosListado.appendChild(nuevoGasto);
        })
    }
    
    limpiarHTML(){
        while (gastosListado.firstChild) {
            gastosListado.removeChild(gastosListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto,restante}=presupuestoObj;

        const restanteDiv = document.querySelector('.restante');
        //comprobar 25%
        if ((presupuesto/4)>restante) {
            restanteDiv.classList.remove('alert-success','alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if ((presupuesto/2)>restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');            
        }

        //si el total es 0 o menor
        if (restante<= 0) {
            ui.imprimirAlerta('Presupuesto agotado');

            formulario.querySelector('button[type="submit"]').disabled=true;
        }
    }
}
//Instanciar
const ui = new UI();//Clase global
let presupuesto;//variable global

//Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    //console.log(Number(presupuestoUsuario));

    if( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
 
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    //Validar
    if (nombre ==='' || cantidad ==='') {
        //console.log('Ambos campos son oblogatorios');
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida','error');
        return;
    }

    //Generar un objeto tipo gasto
    const gasto ={nombre,cantidad, id: Date.now()}

    //Añade un nuevo presupuesto
    presupuesto.nuevoGasto(gasto)
    //   console.log(gasto);
    //Mensaje de todo bien
    ui.imprimirAlerta('Gasto agregado correctamente');
    //Imprimir los gastos
    const {gastos, restante} = presupuesto;
    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);
    
    ui.comprobarPresupuesto(presupuesto);
    //Reinicia el formulario
    formulario.reset();
}