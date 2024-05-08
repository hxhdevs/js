// Variables
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
     //Cuando se envia el formulario
     formulario.addEventListener('submit', agregarTweet);    
}

// Añadir tweet del formulario
function agregarTweet(e) {
     
     e.preventDefault();

     const tweet = document.querySelector('#tweet').value;

     if(tweet === ''){
          mostrarError('No puede ir vacio')

          return;// evita que se siga ejecutando en este punto funciona dentro de un if siempre y cuando este dentro de una funcion
     }
     console.log('Addign tweet')
}

function mostrarError(error){
     const mensajeError = document.createElement('p');
     mensajeError.textContent = error;   
     mensajeError.classList.add('error');

     // insertar en el contenido
     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeError);
     // elimina la alerta despues del tiempo marcado
     setTimeout(() =>{
          mensajeError.remove()
     },1000)
}