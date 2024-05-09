// Constructor para Seguro
function Seguro(marca, anio, tipo) {
     this.marca = marca;
     this.anio = anio;
     this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(){
     // 1 = americano 1.15
     // 2 = Asiatico 1.05
     // 3 = Europeo 1.35
     console.log(this.marca);
     let cantidad;

     const base = 2000;

     switch(this.marca){
          case '1':
               cantidad = base*1.15;
               break;
          case '2':
               cantidad = base*1.05;
               break;
          case '3':
               cantidad = base*1.35;
               break;
          default:
               break;
     }
     const diferencia = new Date().getFullYear() - this.year;

     cantidad-= ((diferencia*3) * cantidad)/100;

     if(this.tipo ==="basico"){
          cantidad += 1.30;
     } else{
          cantidad+= 1.50;
     }
     return cantidad;
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
     const seguro = new Seguro(marca, year, tipo);
     seguro.cotizarSeguro();
     // Utilizar el prototipe que va a cotizar
}