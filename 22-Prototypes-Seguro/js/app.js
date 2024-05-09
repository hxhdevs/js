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

// Crear instancia de UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
     //ui.llenarOpciones()
});
