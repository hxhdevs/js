// Fetch API desde un JSON (Objeto)
document.addEventListener('DOMContentLoaded',obtenerDatos);//con esto cargamos todo desde un inicio 
//si lo quieres hacer presionando el boton descoemnta las lineas de abajo 
// const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
// cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url) 
        .then( respuesta => respuesta.json()) 
        .then( resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}