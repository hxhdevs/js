// Constructor para Seguro
function Seguro(marca, anio, tipo) {
     this.marca = marca;
     this.anio = anio;
     this.tipo = tipo;
}

// Todo lo que se muestra
function UI() {}

UI.prototype.llenarOpciones = function () {
     const max = new Date().getFullYear(),
           min = max - 20;

     const selectYear = document.querySelector('#year');
     
     for(let i = max; i > min; i--) {
          let option = document.createElement('option');
          option.value = i;
          option.textContent = i;
          selectYear.appendChild(option);
     }   
}

UI.prototype.mostrarMensaje = (mensaje,tipo)=>{
     const div = document.createElement('div');

     if(tipo === 'error'){
          div.classList.add('error');
     }else{
          div.classList.add('correcto');
     }

     div.classList.add('mensaje', 'mt-10');
     div.textContent = mensaje;

     //insertar en el html
     const formulario = document.querySelector('#cotizar-seguro');
     formulario.insertBefore(div, document.querySelector('#resultado'));
     setTimeout(()=>{
          div.remove();//aplicamos remove con settimeout
     },1000);
}

// Crear instancia de UI 
const ui = new UI();//esta de forma global

document.addEventListener('DOMContentLoaded', () => {
     ui.llenarOpciones()
});
addEventListeners()
function addEventListeners(){
     const formulario = document.querySelector('#cotizar-seguro');
     formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
     e.preventDefault();
     //Leer la marca sel ecionada
     const marca = document.querySelector('#marca').value;
     //console.log(marca);
     //Leer el año seleccionado
     const year = document.querySelector('#year').value;
     //leer el tipo de cobertura del radio button
     const tipo = document.querySelector('input[name="tipo"]:checked').value;
     // console.log('desde cotizarSeguro...')
     // console.log(tipo)
     if(marca === '' || year === '' || tipo === ''){
          ui.mostrarMensaje('Todos los campos son obligatorios','error');
          return;
     }
     ui.mostrarMensaje('cotizando..','exito');//mostramos successfull
     // console.log(' Cotizando')

     //instanciar el seguro

     // Utilizar el prototipe que va a cotizar
}