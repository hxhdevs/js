
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    console.log(e)
});

// Activar el service worker...
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    console.log(e)
});

self.addEventListener('fetch',e => {
    console.log('Fetch ...',e)
})