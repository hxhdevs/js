// Arrow functions en métodos de propiedad
//Anteriormente se tenia de este modo
// const reproductor = {
//     reproducir: function(id) {
//         console.log(`Reproduciendo canción #${id}`);
//     },
//     pausar: function() {
//         console.log('pausando...');
//     },
//     borrar: function(id) {
//         console.log(`Borrando canción con #:${id}`)
//     },
//     crearPlaylist: function(nombre) {
//         console.log(`Creando la Playlist ${nombre}`);
//     },
//     reproducirPlaylist: function(nombre) {
//         console.log(`Reproduciendo la Playlist ${nombre}`)
//     },
//     reproducirArtista: function(nombre) {
//         console.log(`Estas escuchando a ${nombre}`)
//     },
//     nuevoAlbum: function(artista) {
//         console.log(`Ya no saldra un nuevo album de ${artista}`)
//     },
// }

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre =>  console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre =>  console.log(`Reproduciendo la Playlist ${nombre}`),

    // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    },
    set nuevoAlbum(banda){
        this.banda = banda;
        console.log(`Lo sentimos parece ser que ${banda} no volvera a sacar un nuevo album`)
    }
}
reproductor.reproducir(27);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(20);
reproductor.crearPlaylist('Technical Death Metal');
reproductor.reproducirPlaylist('Technical Death Metal');


// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'The Stillborn One';
reproductor.obtenerCancion;
reproductor.nuevoAlbum='Necrophagist';

// si implementamos arrow functions en objetos incluso con get y set estos quedara mas limpios y elegantes como el sr dr profesor patricio

