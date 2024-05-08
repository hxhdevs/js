// Variables globales
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
     //Cuando se envia el formulario
     formulario.addEventListener('submit', agregarTweet);    

     //cuando el documento esta listo
     document.addEventListener('DOMContentLoaded',() =>{
          tweets = JSON.parse(localStorage.getItem('tweets')) || [];//recuperamos de storage y si no tenemos nada asignamops array vacio entonces deja de dar null
          console.log(tweets)
          crearHTML()
     
     });
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
               //agregando el boton de eliminar
               const btnEliminar = document.createElement('a');
               btnEliminar.classList.add('borrar-tweet');
               btnEliminar.innerText = 'X';
               //Añadir la funcion de eliminar
               btnEliminar.onclick = () => {
                    borrarTweet(tweet.id);//le pasamos el id construido en linea 36
               }

               //crear html
               const li = document.createElement('li');
               //agregar el text
               li.innerText = tweet.tweet;
               //Asignar el boton
               li.appendChild(btnEliminar);
               //insertar en el HTML
               listaTweets.appendChild(li);
          });
     }
     almacenandoInLocalStorage();
}

function almacenandoInLocalStorage() {
     localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML(){
     while(listaTweets.firstChild){
          listaTweets.removeChild(listaTweets.firstChild);
     }
}

function borrarTweet (id){
     tweets = tweets.filter(tweet => tweet.id !== id);
     console.log(tweets)
     crearHTML();//Llamar la creacion de html despues de eliminar para mostrar lo que queda
}