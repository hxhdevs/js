let cliente ={
    mesa :'',
    hora: '',
    pedido:[]
};

const categorias={
    1:'Comida',
    2:'Bebidas',
    3:'Postres'
}
const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click',guardarCliente)

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo => campo ==='');

    if (camposVacios) {
        const existeAlerta = document.querySelector('.invalid-feedback');
        if(!existeAlerta) {
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback','d-block','text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(()=>{
                alerta.remove();
            },2000);
        }
        return;
    }
    //Asignamos datos del formulario al cliente
    cliente = {...cliente,mesa,hora}

    //console.log(cliente);
    
    //Ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();
 
    //Mostrar las secciones despues de ocultar el modal
    mostrarSecciones();
    obtenerPlatillos()
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'))
}

function obtenerPlatillos(){
    const url ='http://127.0.0.1:5500/40-Calculadora-de-propinas-con-JSON-Server/db.json';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch(error => console.log(error));
}

function mostrarPlatillos({platillos}){//pasamos el objecto como array obj
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach( platillo => {
        console.log(platillo)
        const row = document.createElement('div');
        row.classList.add('row','py-3','border-top');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3','fw-bold');
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3','fw-bold');
        categoria.textContent = categorias[platillo.categoria];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min =0;
        inputCantidad.value =0;
        inputCantidad.id =`producto-${platillo.id}`
        inputCantidad.classList.add('form-control');

        //Funcion que detecta la cantidad y el platillo agregado
        inputCantidad.onchange = function(){
            const cantidad = parseInt(inputCantidad.value);
            console.log(cantidad);
            agregarPlatillo({...platillo,cantidad});
        }
        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        console.log(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    })
}

function agregarPlatillo(producto){
    console.log('desde agregar platillo',producto)
}