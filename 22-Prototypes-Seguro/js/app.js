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
     }
     const diferencia = new Date().getFullYear() - this.year;

     cantidad -= ((diferencia*3) * cantidad)/100;

     if(this.tipo === 'basico'){
          cantidad *= 1.30;
     } else{
          cantidad *= 1.50;
     }
      return cantidad;
     //console.log(cantidad);
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

UI.prototype.mostrarMensaje = function(mensaje,tipo){
     const div = document.createElement('div');

     if(tipo === 'error'){
          div.classList.add('mensaje','error');
     }else{
          div.classList.add('mensaje','correcto');
     }
     div.classList.add('mensaje', 'mt-10');
     div.textContent = mensaje;
     formulario.insertBefore(div, document.querySelector('#resultado'));
     //insertar en el html
     //const formulario = document.querySelector('#cotizar-seguro');
     
     setTimeout(()=>{
          div.remove();//aplicamos remove con settimeout
     },1000);
}

UI.prototype.mostraResultado = (total,seguro)=>{
     const {marca,year,tipo}=seguro;
     let textoMarca;

     switch (marca) {
          case '1':
               textoMarca ='Americano'
               break;
          case '2':
               textoMarca ='Asiatico'
               break;
          case '3':
               textoMarca ='Europeo'
               break;
          default:
               break;
     }
     //Crear el resultado
     const div = document.createElement('div');
     div.classList.add('mt-10')

     div.innerHTML =`
          <p class="header">Tu resumen</p>
          <p class="font-bold">Marca: ${textoMarca}</p>
          <p class="font-bold">Año: ${year}</p>
          <p class="font-bold">Tipo: ${tipo}</p>
          <p class="font-bold">Total: ${total}</p>
     `;

     const resultadoDiv = document.querySelector('#resultado');
     

     const spinner = document.querySelector('#cargando');
     spinner.style.display ='block';

     setTimeout(() => {
          spinner.style.display ='none';//se borra spinner y mantiene resultado
          resultadoDiv.appendChild(div);
     },3000);
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
     //Ocultar cotizaciones previas
     const resultados = document.querySelector('#resultado div');
     if (resultados!= null) {
          resultados.remove();
     }
     //instanciar el seguro
     const seguro = new Seguro(marca, year, tipo);
     const total = seguro.cotizarSeguro();
     // seguro.cotizarSeguro();
     // Utilizar el prototipe que va a cotizar
     ui.mostraResultado(total,seguro);

}