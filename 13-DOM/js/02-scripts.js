//omo seleccionar elementos por su clase...

// Seleccionando el header...
                // Todos tus selectores inician con document...
const header = document.getElementsByClassName('header'); // Es muy importante las mayusculas y minusculas ya que es sensitive key...
console.log(header);

const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);


// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si una clase no existe, no va a retornar nada, solo devuelve un arreglo vacio no marcara error ni nada solo lo mencionado
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);