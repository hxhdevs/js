// Notificaciones nátivas en JS

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()//Solicitamos permisos para notificaciones
        .then( resultado => {
            console.log('El resultado es ', resultado)
         })
})

// const verNotificacionBtn = document.querySelector('#verNotificacion');
// verNotificacionBtn.addEventListener('click', () => {
//     if(Notification.permission == 'granted') {
//         new Notification('Esta es la notificación');
//     }
// })


// Personalizar aun mas nuestra notificación...
const verNotificacionBtn = document.querySelector('#verNotificacion');//ejecutamos al presionar el boton
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission == 'granted') {
        const notificacion = new Notification('Esta es la notificación', { 
            icon: 'img/hxh.png',
            body: 'HXHDevs repository on GitHub'
        });

        // Ir al sitio web de juan
        notificacion.onclick = function() {
            window.open('https://github.com/hxhdevs')
        }

    }
})