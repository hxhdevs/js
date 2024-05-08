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
     //console.log('Addign tweet')

     const tweetObj = {
          id: Date.now(),
          // tweet: tweet si llave y valor son iguales o se llaman igual puedes dejar un unico valor
          tweet
     }
     //Añadir al arreglo de tweets
     tweets = [...tweets, tweetObj];

     //console.log(tweets);
     //Una vez agregado creamos el html
     crearHTML();
     //reiniciar el formulario
     formulario.reset();
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
//muestra un listado de los tweets
function crearHTML(){
     limpiarHTML();
     if(tweets.length > 0){
          tweets.forEach(tweet => {
               //crear html
               const li = document.createElement('li');
               //agregar el text
               li.innerText = tweet.tweet;
               //insertar en el HTML
               listaTweets.appendChild(li);
          });
     }
}

function limpiarHTML(){
     while(listaTweets.firstChild){
          listaTweets.removeChild(listaTweets.firstChild);
     }
}