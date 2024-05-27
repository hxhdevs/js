// Detectar si nuestra página se esta ejecutando en primer o segundo plano...
// Solo sirve para saber si se esta ejecutanso sobre el navegador ya que si cambias de venta como la de explorardor sigue activa
//solo opera sobre el naveador y no sobre el SO propiamente


document.addEventListener('visibilitychange', e => {
    console.log(document.visibilityState)

    if(document.visibilityState === 'visible') {
        console.log('Función para reproducir el video....' )
    } else {
        console.log('Pausando el video...')
    }
})
