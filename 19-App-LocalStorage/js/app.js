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
     console.log('Adding..')
}
