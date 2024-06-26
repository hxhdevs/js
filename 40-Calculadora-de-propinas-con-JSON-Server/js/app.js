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
        row.classList.add('row','py-2','border-top');

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
    if (cliente.pedido.length) {
        actualizarResumen()
    }else{
        mensajePedidoVacio()
    }
}

function actualizarResumen(){

    const contenido = document.querySelector('#resumen .contenido');
    
    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6','card','py-2','px-3','shadow');

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

        //Boton eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn','btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido ';
        
        btnEliminar.onclick = function(){
            eliminarProducto(id)
        }
        //Agregar valor a los contenedores
        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        subtotalEl.appendChild(subtotalValor);
        
        //Agregar elemento al Li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);

        //Agregar lista al grupo inicial
        grupo.appendChild(lista);
    });


    //Agregar al contenido
    contenido.appendChild(heading);
    contenido.appendChild(mesa);
    contenido.appendChild(hora);
    contenido.appendChild(grupo);

    contenido.appendChild(resumen);
    //mostrar formulario de propinas
    formularioPropinas();
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

function eliminarProducto(id){
    const {pedido} = cliente;
    const resultado = pedido.filter(articulo => articulo.id !== id);
        cliente.pedido = [...resultado];

        console.log(cliente.pedido)
        limpiarHTML();

        if (cliente.pedido.length) {
            actualizarResumen()
        }else{
            mensajePedidoVacio()
        }

        //El produdot se elimino por lo tanto regresamos la cantidad a 0 en el formulario
        const productoEliminado =`#producto-${id}`;
        const inputEliminado = document.querySelector(productoEliminado);
        inputEliminado.value = 0
        console.log(productoEliminado)
}

function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent='Añade los elementos del pedido';

    contenido.appendChild(texto)
}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');
    
    const formulario = document.createElement('div')
    formulario.classList.add('col-md-6','formulario')

    const divFormulario = document.createElement('div')
    divFormulario.classList.add('card','my-6','px-3','shadow')

    const heading = document.createElement('h3')
    heading.classList.add('my-4')
    heading.textContent = 'Propina';

    //Radio button %10
    const radio10 = document.createElement('input')
    radio10.type ='radio';
    radio10.name = 'propina'
    radio10.value="10";
    radio10.classList.add('form-check-input')
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label')
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div');
    radio10Div.classList.add('form-check')
    
    radio10Div.appendChild(radio10)
    radio10Div.appendChild(radio10Label)
    //Radio button %25
    const radio25 = document.createElement('input')
    radio25.type ='radio';
    radio25.name = 'propina'
    radio25.value="25";
    radio25.classList.add('form-check-input')
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label')
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('div');
    radio25Div.classList.add('form-check')

    radio25Div.appendChild(radio25)
    radio25Div.appendChild(radio25Label)
    //Radio button %50
    const radio50 = document.createElement('input')
    radio50.type ='radio';
    radio50.name = 'propina'
    radio50.value="50";
    radio50.classList.add('form-check-input')
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('label')
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('div');
    radio50Div.classList.add('form-check')

    radio50Div.appendChild(radio50)
    radio50Div.appendChild(radio50Label)
    
    divFormulario.appendChild(heading)
    divFormulario.appendChild(radio10Div)
    divFormulario.appendChild(radio25Div)
    divFormulario.appendChild(radio50Div)

    //Agregar al formulario
    formulario.appendChild(divFormulario)
    contenido.appendChild(formulario)
}

function calcularPropina(){
    const {pedido} =cliente;
    let subtotal=0;
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad *articulo.precio
    });
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;
    const propina =((subtotal*parseInt(propinaSeleccionada))/100);
    const total = subtotal+propina;
    console.log(total);
    mostrartotalHTML(subtotal,total,propina)
}

function mostrartotalHTML(subtotal,total,propina){
    const divTotales = document.createElement('div')
    divTotales.classList.add('total-pagar','my-5')

    const subtotalParrafo = document.createElement('p')
    subtotalParrafo.classList.add('fs-3','fw-bold','mt-5')
    subtotalParrafo.textContent = 'Subtotal Consumo: ';

    const subTotalSpan = document.createElement('span')
    subTotalSpan.classList.add('fw-normal');
    subTotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subTotalSpan)

    //Propina
    const propinaParrafo = document.createElement('p')
    propinaParrafo.classList.add('fs-3','fw-bold','mt-5')
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement('span')
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan)

    // Total
    const totalParrafo = document.createElement('p')
    totalParrafo.classList.add('fs-3','fw-bold','mt-5')
    totalParrafo.textContent = 'Total a pagar: ';

    const totalSpan = document.createElement('span')
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan)
    //Eliminar el ultimo resultado
    const totalpagarDiv = document.querySelector('.total-pagar') 
    if (totalpagarDiv) {
        totalpagarDiv.remove()
    }

    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);
    divTotales.appendChild(propinaParrafo);

    const formulario = document.querySelector('.formulario > div')
    formulario.appendChild(divTotales);
}