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
    //Extraemos el pedido actual
    let {pedido} = cliente;
    
    //Revisar que la cantidad sea mayor a 0
    if (producto.cantidad>0) {
        if(pedido.some(articulo=> articulo.id===producto.id)) {
            const pedidoActualizado = pedido.map(articulo=>{
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            //se asigna el nuevo array a cliente.pedido
            cliente.pedido= [...pedidoActualizado];
        }else{
            //El articulo no existe no agregamos
            cliente.pedido= [...pedido,producto];
        }
    }else{
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];
    }
    limpiarHTML();
    actualizarResumen();
}

function actualizarResumen(){

    const contenido = document.querySelector('#resumen .contenido');
    
    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6','card','py-5','px-3','shadow');

    //Informacion de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    //Informacion de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');
    
    //Agregar a los elementos padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    //Titulo de la seccion
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos consumidos';
    heading.classList.add('my-4','text-center');

    //Iterar sobre el array de pedidos
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach(articulo => {
        const { nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('h4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        //Cantidad del articulo
        const cantidadEl = document.createElement('p');
        cantidadEl.classList.add('fw-world');
        cantidadEl.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        //Precio del articulo
        const precioEl = document.createElement('p');
        precioEl.classList.add('fw-world');
        precioEl.textContent = 'Precio: ';

        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;

        //Subtotal
        const subtotalEl = document.createElement('p');
        subtotalEl.classList.add('fw-world');
        subtotalEl.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('span');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio,cantidad);

        //Agregar valor a los contenedores
        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        subtotalEl.appendChild(subtotalValor);
        
        //Agregar elemento al Li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);

        //Agregar lista al grupo inicial
        grupo.appendChild(lista);
    });


    //Agregar al contenido
    contenido.appendChild(mesa);
    contenido.appendChild(hora);
    contenido.appendChild(heading);
    contenido.appendChild(grupo);

    contenido.appendChild(resumen);

}

function limpiarHTML(){
    const contenido = document.querySelector('#resumen .contenido');
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubtotal(precio, cantidad){
    return `$ ${precio*cantidad}`;
}