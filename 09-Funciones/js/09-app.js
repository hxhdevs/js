// Los métodos de propiedad, son funciones con una sintaxis similar a las de un método
// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción #${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción con #:${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    },
    reproducirArtista: function(nombre) {
        console.log(`Estas escuchando a ${nombre}`)
    },
    nuevoAlbum: function(artista) {
        console.log(`Ya no saldra un nuevo album de ${artista}`)
    },
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
reproductor.borrar = function(id) {
    
}
reproductor.borrar(20);
reproductor.crearPlaylist('Technical Death Metal');
reproductor.reproducirPlaylist('Technical Death Metal');
reproductor.reproducirArtista('The Stillborn One - Necrophagist');
reproductor.nuevoAlbum('Necrophagist')