// Variables
const carrito = document.querySelector('#carrito'); //seleccionamos el div que contiene carrito
const listaCursos = document.querySelector('#lista-cursos'); // seleccionamos el div que contiene la lista de cursos
const contenedorCarrito = document.querySelector('#lista-carrito tbody');  // seleccionamos el tbody de la tabla
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //Seleccionamos el boton vaciar carrito
let articulosCarrito = [];
// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);
     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);
     // Forma limpia de vaciado
     //vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
     vaciarCarritoBtn.addEventListener('click', () => {
          articulosCarrito = [];
          vaciarCarrito();
     });

}
// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
     e.preventDefault();// Delegation para agregar-carrito o evitar el event bubbling
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;// Enviamos el curso seleccionado para tomar sus datos
          leerDatosCurso(curso);
     }
}
// Lee los datos del curso
function leerDatosCurso(curso) {
     const infoCurso = {// obtenemos datos del curso con DOM traversing 
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }
     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { //buscamos si ya existe algun curso con .some
          const cursos = articulosCarrito.map( curso => {// crea un nuevo array o matriz con .map
               if( curso.id === infoCurso.id ) {
                    curso.cantidad++;
                     return curso;
                } else {
                     return curso;
             }
          })
          articulosCarrito = [...cursos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }
     carritoHTML();//mostramos todo lo seleccionado sobre el HTML
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {//buscamos el objeto a eliminar con la clase borrar-curso que se muestra const row  sobre el tbody
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')//obtenemos el valor con target    
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);// Eliminar el objeto del arreglo del carrito con filter
          carritoHTML();// mostramos nuevamente el contenido del grid
     }
}
// Muestra el o los cursos seleccionados en el Carrito
function carritoHTML() {//cada que mostramos el carrito con nueva informacion lo limpiamos
     vaciarCarrito();//Antes de mostrar el carrito lo vacia primero y despues muestra lo que tiene articulosCarrito 
     articulosCarrito.forEach(curso => {//iteramos sobre cada objeto para mostrarlo en el HTML
          const row = document.createElement('tr');
          row.innerHTML = `
               <td><img src="${curso.imagen}" width=100></td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
          `;
          contenedorCarrito.appendChild(row);
     });
}

function vaciarCarrito() {// Elimina los cursos del carrito en el DOM
     // forma lenta
     // contenedorCarrito.innerHTML = '';
     // forma rapida (recomendada) es decir con mejor performance
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}